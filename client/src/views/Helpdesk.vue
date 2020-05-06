<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <!-- Unassigned Ticket Panel Here -->
        <HelpdeskPanel listTitle="Active Tickets" :helpdeskList="helpdeskTicketList" v-on:update-viewer="updateViewer"></HelpdeskPanel>
        <!-- Helpdesk Closed Ticket Panel Here -->
      </div>
      <div class="column is-two-thirds">
        <TicketViewer :ticketToDisplay="currentHelpdeskTicket"></TicketViewer>
      </div>
    </div>
  </section>
</template>

<script>
import HelpdeskPanel from "../components/Helpdesk_Panel.vue";
import TicketViewer from "../components/Helpdesk_Ticket_Viewer.vue";

import Helpdesk from "../models/Helpdesk";

export default {
  data: () => ({
    currentHelpdeskTicket: null,
    helpdeskTicketList: []
  }),
  components: {
    HelpdeskPanel,
    TicketViewer
  },
  methods: {
      updateViewer: function(ticket)
      {
          console.log("test function called")
          console.log(ticket);
          //console.log(ticket.Ticket_ID + " " + ticket.Summary);
          this.currentHelpdeskTicket = ticket;
      }
  },
  async beforeCreate() {
      const completeHelpdeskTickets = await Helpdesk.getAllHelpdeskTickets();
      this.helpdeskTicketList = completeHelpdeskTickets[0];
  }
};
</script>

<style>
</style>