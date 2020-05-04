<template>
  <section class="container">
    <nav class="panel">
      <p class="panel-heading">{{listTitle}}</p>
      <!--<div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search by ID number" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
          
        </p>
      </div>-->
      

      <div v-if="activeList == true">
        <a v-on:click="renderModal()" v-for="computer in inventoryList" :key="computer.Computer_ID" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-desktop" aria-hidden="true"></i>
          </span>
          {{computer.Computer_ID}} | {{computer.Service_Tag}} | {{computer.Location}}
        </a>
      </div>
      <div v-else>
        <a v-for="computer in inventoryList" :key="computer.Computer_ID" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-desktop" aria-hidden="true"></i>
          </span>
          {{computer.Computer_ID}} | {{computer.Service_Tag}}
        </a>
      </div>
      <!-- <label class="panel-block">
        <input type="checkbox" />
        remember me
      </label>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">Reset all filters</button>
      </div> -->
    </nav>
    <InventoryPanelModal v-model="ModalActive" v-on:close-modal="closeModal()"></InventoryPanelModal>
  </section>
</template>

<script>
import InventoryPanelModal from "./Inventory_Panel_Modal"
export default {
  data: () => ({
    ModalActive: false
      }),
  components: {
    InventoryPanelModal
  },
  props: {
      listTitle: {
          type: String,
          required: true
      },
      inventoryList: {
          type: Array,
          required: true,
          default: function() {
              return inventoryList;
          }
      },
      activeList: {
        type: Boolean,
        default: false
      }
  },
  methods: {
    postAlert: function (msg) {
      alert(msg);
    },
    renderModal: function() {
      console.log("renderModal() called")
      console.log(this.ModalActive)
      this.ModalActive = true;
      console.log(this.ModalActive)
    },
    closeModal: function() {
      console.log("CloseModal() called");
      console.log(this.ModalActive)
      this.ModalActive = false;
      console.log(this.ModalActive)
    }
  },
  events: {

  }
};
</script>

<style>
</style>