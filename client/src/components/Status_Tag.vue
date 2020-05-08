<template>
  <div class="tags has-addons">
    <span class="tag">Status</span>
    <span v-if="statusID == 0" class="tag is-black">Not Active</span>
    <span v-else-if="statusID == 1" class="tag is-success">Active</span>
    <span v-else-if="statusID == 2" class="tag is-warning">Waiting for User</span>
    <span v-else class="tag is-danger">Closed</span>
  </div>
</template>

<script>
export default {
  props: {
    statusID: {
      type: Number
    },
    statusVerbose: {
      type: String
    }
  }
};
</script>

<style>
</style>