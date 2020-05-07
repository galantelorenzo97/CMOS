<template>
  <div class="tags has-addons">
    <span class="tag">Status</span>
    <span v-if="statusID == 0" class="tag is-black">{{statusVerbose}}</span>
    <span v-else-if="statusID == 1" class="tag is-success">{{statusVerbose}}</span>
    <span v-else-if="statusID == 2" class="tag is-warning">{{statusVerbose}}</span>
    <span v-else class="tag is-danger">{{statusVerbose}}</span>
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