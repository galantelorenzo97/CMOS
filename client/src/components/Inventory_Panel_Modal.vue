<template>
  <section class="container">
    <div class="modal" 
        v-bind:class="{'is-active': active}"
        v-on:activated="$emit('activated', $event.target.active)">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Active Computer Display Modal</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          This will contain info about the active computer that you just clicked
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <div>
            <button class="button" v-on:click="$emit('close-modal')">Cancel</button>
          </div>
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