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
        <TicketViewer
          v-on:disown-ticket="disownTicket"
          v-on:accept-ticket="acceptTicket"
          v-on:wait-for-user="waitForUser"
          v-on:close-ticket="closeTicket"
          v-on:reopen-ticket="reopenTicket"
          :ticketToDisplay="currentHelpdeskTicket"
        ></TicketViewer>
        <Comments
          v-on:update-comments="updateComments"
          :commentList="currentCommentList"
          :ticketID="currentHelpdeskTicket.Ticket_ID"
        ></Comments>
      </div>
    </div>
  </section>
</template>

<script>
import { CurrentUser } from "../models/Users";
import HelpdeskPanel from "../components/Helpdesk_Panel.vue";
import TicketViewer from "../components/Helpdesk_Ticket_Viewer.vue";
import Comments from "../components/Comments.vue";

import Helpdesk from "../models/Helpdesk";

export default {
  data: () => ({
    currentHelpdeskTicket: { ticket_ID: 0 },
    helpdeskTicketList: [],
    currentCommentList: [],
    CurrentUser
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
      const commentListPromise = await Helpdesk.getComments(
        this.currentHelpdeskTicket.Ticket_ID
      );
      this.currentCommentList = commentListPromise[0];
    },
    updateComments: async function(ticket_ID) {
      const commentListPromise = await Helpdesk.getComments(ticket_ID);
      this.currentCommentList = commentListPromise[0];
    },
    disownTicket: async function(ticket_ID) {
      Helpdesk.disownTicket(ticket_ID);
      this.currentHelpdeskTicket.Assigned_User = null;
      this.currentHelpdeskTicket.Status_ID = 0;
      const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
      /*this.$set(this.helpdeskTicketList, completeHelpdeskTickets[0]);
      this.$set(this.currentHelpdeskTicket, this.helpdeskTicketList[ticket_ID]);*/
      this.updateViewer(this.currentHelpdeskTicket);
    },
    acceptTicket: async function(user_ID, ticket_ID) {
      Helpdesk.acceptTicket(user_ID, ticket_ID);
      this.currentHelpdeskTicket.Assigned_User = CurrentUser.result[0].User_ID;
      this.currentHelpdeskTicket.Status_ID = 1;
      const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
      /*this.$set(this.helpdeskTicketList, completeHelpdeskTickets[0]);
      this.$set(this.currentHelpdeskTicket, this.helpdeskTicketList[ticket_ID]);*/
      this.updateViewer(this.currentHelpdeskTicket);
    },
    waitForUser: async function(ticket_ID) {
      Helpdesk.waitForUser(ticket_ID);
      this.currentHelpdeskTicket.Status_ID = 2;
      const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
      /*this.$set(this.helpdeskTicketList, completeHelpdeskTickets[0]);
      this.$set(this.currentHelpdeskTicket, this.helpdeskTicketList[ticket_ID]);*/
      this.updateViewer(this.currentHelpdeskTicket);
    },
    closeTicket: async function(ticket_ID) {
      Helpdesk.closeTicket(ticket_ID);
      this.currentHelpdeskTicket.Status_ID = 3;
      const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
      /*this.$set(this.helpdeskTicketList, completeHelpdeskTickets[0]);
      this.$set(this.currentHelpdeskTicket, this.helpdeskTicketList[ticket_ID]);*/
      this.updateViewer(this.currentHelpdeskTicket);
    },
    reopenTicket: async function(ticket_ID) {
      Helpdesk.closeTicket(ticket_ID);
      this.currentHelpdeskTicket.Status_ID = 1;
      const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
      /*this.$set(this.helpdeskTicketList, completeHelpdeskTickets[0]);
      this.$set(this.currentHelpdeskTicket, this.helpdeskTicketList[ticket_ID]);*/
      this.updateViewer(this.currentHelpdeskTicket);
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