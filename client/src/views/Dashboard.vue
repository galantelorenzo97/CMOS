<template>
  <section class="container">
    <div class="columns has-text-centered">
      <div class="column">
        <div class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">CMOS DASHBOARD</h1>
              <!-- <h2 class="subtitle">Hero subtitle</h2> -->
              <!-- TODO: ADJUST THE PADDING -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <HelpdeskPanel listTitle="Open Tickets Assigned to You" :helpdeskList="ticketList"></HelpdeskPanel>
      </div>
      <!-- <div class="column"> -->
        <!-- PRINTER TONER STATUS HERE -->
      <!-- </div> -->
      <div class="column">
        <div v-if="activeLength > 0">
          <InventoryPanel
            listTitle="Active Computers"
            :inventoryList="Computers.ActiveComputerList"
            :activeList="true"
          ></InventoryPanel>
        </div>
        <div v-else>
          <article class="message is-dark">
            <div class="message-body">
              <strong>No Active Computers at this time</strong>
            </div>
          </article>
        </div>
        <br />
        <div v-if="storedLength > 0">
          <InventoryPanel
            listTitle="Stored Computers"
            :inventoryList="Computers.StoredComputerList"
            :activeList="false"
          ></InventoryPanel>
        </div>
        <div v-else>
          <article class="message is-dark">
            <div class="message-body">
              <strong>No Stored Computers at this time</strong>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {CurrentUser} from '../models/Users';
import Computers from "../models/Computers";
import Helpdesk from "../models/Helpdesk";
import InventoryPanel from "../components/Inventory_Panel.vue";
import HelpdeskPanel from "../components/Helpdesk_Panel.vue";

export default {
  data: () => ({
    Computers,
    activeLength: Computers.ActiveListLength,
    storedLength: Computers.StoredListLength,
    ticketList: []
  }),
  async beforeCreate() {
    const completeComputerList = await Computers.getCompleteComputerList();
    this.activeLength = completeComputerList[0].length;
    this.storedLength = completeComputerList[1].length;

    //const ticketsForUser = await Helpdesk.getHelpdeskTicketsAssignedToUser(1);
    //this.ticketList = ticketsForUser[0];
  },
  async created() {
    var delayExecute = setInterval(this.updateComputers, 3000);

    const completeComputerList = await Computers.getCompleteComputerList();
    this.activeLength = completeComputerList[0].length;
    this.storedLength = completeComputerList[1].length;

    const ticketsForUser = await Helpdesk.getHelpdeskTicketsAssignedToUser(CurrentUser.result[0].User_ID);
    this.ticketList = ticketsForUser[0];
  },
  updated() {},
  components: {
    InventoryPanel,
    HelpdeskPanel
  },
  computed: {},
  methods: {
    updateComputers: async function() {
      let completeComputerList = await Computers.getCompleteComputerList();
      this.Computers.ActiveComputerList = completeComputerList[0];
      this.Computers.StoredComputerList = completeComputerList[1];
      this.activeLength = completeComputerList[0].length;
      this.storedLength = completeComputerList[1].length;
    }
  }
};
</script>

<style>
</style>