<template>
  <section class="container">
    <div class="columns has-text-centered">
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
      </div>
      <div class="column">
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
import Computers from "../models/Computers";
import InventoryPanel from "../components/Inventory_Panel.vue";

export default {
  data: () => ({
    Computers,
    activeLength: Computers.ActiveListLength,
    storedLength: Computers.StoredListLength
  }),
  async beforeCreate() {
    const completeComputerList = await Computers.getCompleteComputerList();
    this.activeLength = completeComputerList[0].length;
    this.storedLength = completeComputerList[1].length;
  },
  async created() {
    var delayExecute = setInterval(this.updateComputers, 3000);

    const completeComputerList = await Computers.getCompleteComputerList();
    this.activeLength = completeComputerList[0].length;
    this.storedLength = completeComputerList[1].length;
  },
  updated() {},
  components: {
    InventoryPanel
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