<template>
  <section class="container">
    <div class="modal" 
        v-bind:class="{'is-active': active}"
        v-on:activated="$emit('activated', $event.target.active)">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Full Details for Computer {{displayedComputer.Computer_ID}}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <strong>ID:</strong> {{displayedComputer.Computer_ID}} <br>
            <div v-if="displayedComputer.User != undefined">
              <strong>Assigned User:</strong> {{displayedComputer.User}} <br>
            </div>
            <strong>Location:</strong> {{displayedComputer.Location}} <br> 
            <strong>Service_Tag:</strong> {{displayedComputer.Service_Tag}} <br>
            <strong>Processor: </strong> {{displayedComputer.Processor}} <br>
            <strong>Operating System:</strong> {{displayedComputer.OS_Name}} <br>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-warning" 
            v-if="displayedComputer.Status_ID == 1"
            v-on:click="$emit('store-computer')">
            Store
            </button>
            <button class="button is-success" 
            v-if="displayedComputer.Status_ID == 0"
            v-on:click="$emit('reactivate-computer')">
            Reactivate
            </button>
          <button class="button" 
            v-on:click="$emit('close-modal')">
            Close
            </button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data: () => ({
      }),
    props: {
        active: {
            type: Boolean,
            default: false
        },
        displayedComputer: {
            type: Object
        }
    },
    model: {
        prop: "active",
        event: "activated"
    },
    computed: {
        checkIfActive() {
            CloseFlag = Activated;
            return CloseFlag;
        }
    },
    async beforeCreate() {

    },
    async created() {

    }
};
</script>

<style>
</style>