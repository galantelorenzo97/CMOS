<template>
  <section class="container">
    <div class="columns has-text-centered">
      <div class="column">
        <InventoryPanel listTitle="Active Computers" :inventoryList="Computers.ActiveComputerList"></InventoryPanel>
        <InventoryPanel listTitle="Stored Computers" :inventoryList="Computers.ActiveComputerList"></InventoryPanel>
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
    created() {
        //Computers.getCompleteComputerList();
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