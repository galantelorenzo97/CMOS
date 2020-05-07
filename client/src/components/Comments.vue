<template>
  <div v-if="commentList.length != 0">
    <div class="card">
      <div class="card-content">
        <p class="title">Comments</p>
      </div>
    </div>
    <div class="card" v-for="comment in commentList" :key="comment.Comment_ID">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="comment.Profile_Pic" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{comment.User_Name}}</p>
            <p class="subtitle is-6">{{comment.Role}}</p>
          </div>
        </div>
        <p class="subtitle">{{comment.Ticket_Comment}}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card">
      <div class="card-content">
        <p class="title">No Comments</p>
      </div>
    </div>
  </div>
</template>

<script>
import Helpdesk from "../models/Helpdesk";
export default {
  data: () => ({}),
  props: {
    commentList: {
      type: Array,
      default: function() {
        return commentList;
      }
    }
  },
  async beforeCreate() {},
  async created() {},
  methods: {}
};
</script>

<style>
</style>