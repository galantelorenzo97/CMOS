<template>
  <section class="container">
    <div class="columns has-text-centered">
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column">
        <div v-if="Computers.ActiveComputerList.length != 0">
          <InventoryPanel listTitle="Active Computers" :inventoryList="Computers.ActiveComputerList" :activeList="true"></InventoryPanel>
        </div> 
        <div v-else>
          <article class="message is-dark">
            <div class="message-body">
              <strong>No Active Computers at this time</strong>
            </div>
          </article>
        </div> 
        <br>
        <div v-if="Computers.StoredComputerList.length != 0">
          <InventoryPanel listTitle="Stored Computers" :inventoryList="Computers.StoredComputerList" :activeList="false"></InventoryPanel>
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
import Computers from "../models/Computers"
import InventoryPanel from "../components/Inventory_Panel.vue";

export default {
    data: () => ({
        Computers
    }),
    beforeCreate() {
      Computers.getCompleteComputerList();
    },
    created() {
        Computers.getCompleteComputerList();
    },
    updated() {
        //Computers.getCompleteComputerList();
    },
    components: {
        InventoryPanel
    }
};
</script>

<style>
</style>