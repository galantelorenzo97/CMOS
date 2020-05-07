<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <!-- Unassigned Ticket Panel Here -->
        <HelpdeskPanel
          listTitle="All Tickets"
          :helpdeskList="helpdeskTicketList"
          v-on:update-viewer="updateViewer"
        ></HelpdeskPanel>
        <!-- Helpdesk Closed Ticket Panel Here -->
      </div>
      <div class="column is-two-thirds">
        <TicketViewer :ticketToDisplay="currentHelpdeskTicket"></TicketViewer>
        <Comments :commentList="currentCommentList"></Comments>
      </div>
    </div>
  </section>
</template>

<script>
import {CurrentUser} from '../models/Users';
import HelpdeskPanel from "../components/Helpdesk_Panel.vue";
import TicketViewer from "../components/Helpdesk_Ticket_Viewer.vue";
import Comments from "../components/Comments.vue";

import Helpdesk from "../models/Helpdesk";

export default {
  data: () => ({
    currentHelpdeskTicket: null,
    helpdeskTicketList: [],
    currentCommentList: []
  }),
  components: {
    HelpdeskPanel,
    TicketViewer,
    Comments
  },
  methods: {
    updateViewer: async function(ticket) {
      console.log("test function called");
      console.log(ticket);
      //console.log(ticket.Ticket_ID + " " + ticket.Summary);
      this.currentHelpdeskTicket = ticket;
      const commentListPromise = await Helpdesk.getComments(this.currentHelpdeskTicket.Ticket_ID);
      this.currentCommentList = commentListPromise[0];
    }
  },
  async beforeCreate() {
    const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
    this.helpdeskTicketList = completeHelpdeskTickets[0];
  },
  async created() {
    const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
    this.helpdeskTicketList = completeHelpdeskTickets[0];
  }
};
</script>

<style>
</style>