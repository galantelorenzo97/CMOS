<template>
  <div v-if="commentList.length != 0 || ticketID != null">
    <div class="card">
      <div class="card-content">
        <p class="title">Comments</p>
      </div>
    </div>
    <div class="card">
      <div v-if="currentUser != null" class="card-content">
        <p class="subtitle">Post Comment:</p>
        <div class="field">
          <div class="control">
            <textarea v-model="currentComment" class="textarea is-info" placeholder="Write Your Comment Here"></textarea>
          </div>
        </div>
        <button class="button is-success" v-on:click="commentOutput()">Post</button>
      </div>
      <div v-else class="card-content">
        <p class="subtitle">Sign in to post a comment</p>
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
import {CurrentUser} from '../models/Users';
import Helpdesk from "../models/Helpdesk";
export default {
  data: () => ({
    currentComment: "",
    currentUser : CurrentUser
  }),
  props: {
    commentList: {
      type: Array,
      default: function() {
        return commentList;
      }
    },
    ticketID: {
      type: Number,
      validator: prop => typeof prop == 'number' || prop == 'null'
    }
  },
  async beforeCreate() {},
  async created() {},
  methods: {
    commentOutput: function () {
      const ticket_ID = this.ticketID;
      const poster_ID = CurrentUser.result[0].User_ID;
      const newPost_ID = this.commentList.length+1;

      Helpdesk.postComment(ticket_ID, newPost_ID, poster_ID, this.currentComment);
      this.currentComment = ""

      this.$emit('update-comments',ticket_ID)
    }
  }
};
</script>

<style>
</style>