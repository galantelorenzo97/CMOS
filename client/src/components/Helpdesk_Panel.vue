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
      

      <div>
        <a v-on:click="$emit('update-viewer',ticket)" v-for="ticket in helpdeskList" :key="ticket.Computer_ID" class="panel-block">
          <span class="panel-icon has-text-danger">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
          {{ticket.Ticket_ID}} | {{ticket.Summary}} | {{ticket.User}}
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
  </section>
</template>

<script>
//import InventoryPanelModal from "./Inventory_Panel_Modal"

export default {
  data: () => ({
      }),
  components: {
  },
  props: {
      listTitle: {
          type: String,
          required: true
      },
      helpdeskList: {
          type: Array,
          required: true,
          default: function() {
              return helpdeskList;
          }
      }
  },
  methods: {
    
  },
  events: {

  }
};
</script>

<style>
</style>