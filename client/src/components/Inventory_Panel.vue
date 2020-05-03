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
        <a v-for="computer in inventoryList" :key="computer.Computer_ID" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          {{computer.Computer_ID}} {{computer.Service_Tag}} {{computer.Location}}
        </a>
      </div>
      <div v-else>
        <a v-for="computer in inventoryList" :key="computer.Computer_ID" class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          {{computer.Computer_ID}} {{computer.Service_Tag}}
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
export default {
data: () => ({
    }),
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
  events: {}
};
</script>

<style>
</style>