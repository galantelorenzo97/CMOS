<template>
  <section class="container">
    <div v-if="ticketToDisplay.Ticket_ID > 0" class="card">
      <div class="card-content">
        <p class="title">{{ticketToDisplay.Summary}}</p>
        <p class="subtitle">{{ticketToDisplay.User}}</p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <StatusTag
              :statusID="ticketToDisplay.Status_ID"
              :statusVerbose="ticketToDisplay.Status_Verbose"
            ></StatusTag>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <strong>Category:</strong>
            {{ticketToDisplay.Category_Name}}
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <strong>Submitted:</strong>
            {{ticketToDisplay.Submitted}}
          </span>
        </p>
        <p v-if="ticketToDisplay.Assigned_User == null" class="card-footer-item">
          <span>Not Assigned</span>
        </p>
        <p v-else class="card-footer-item">
          <span>
            <strong>Assignee:</strong>
            {{ticketToDisplay.Assigned_User}}
          </span>
        </p>
      </footer>
    </div>
    <div v-else>
      <article class="message is-dark">
        <div class="message-body">
          <strong>Please select a ticket</strong>
        </div>
      </article>
    </div>
    <div v-if="ticketToDisplay.Ticket_ID > 0" class="card">
      <div class="card-content">
        <p class="subtitle">{{ticketToDisplay.Description}}</p>
      </div>
      <footer v-if="(currentUser.result[0].User_Type_ID == 1)" class="card-footer">
        <p v-if="ticketToDisplay.Status_ID > 0" class="card-footer-item">
          <span>
            <div class="buttons">
              <button
                v-on:click="$emit('wait-for-user', ticketToDisplay.Ticket_ID)"
                v-if="ticketToDisplay.Status_ID < 2"
                class="button is-info"
              >Wait for User</button>
              <button
                v-on:click="$emit('reopen-ticket', ticketToDisplay.Ticket_ID)"
                v-if="ticketToDisplay.Status_ID == 3"
                class="button is-success"
              >Reopen</button>
              <button
                v-on:click="$emit('close-ticket', ticketToDisplay.Ticket_ID)"
                v-if="ticketToDisplay.Status_ID < 3"
                class="button is-danger"
              >Close</button>
            </div>
          </span>
        </p>
        <p v-if="(ticketToDisplay.Assigned_User == null)" class="card-footer-item">
          <span>
            <button
              class="button is-success"
              v-on:click="$emit('accept-ticket', currentUser.result[0].User_ID, ticketToDisplay.Ticket_ID)"
            >Accept Ticket</button>
          </span>
        </p>
        <p v-else class="card-footer-item">
          <span>
            <div class="buttons">
              <button
                class="button is-black"
                v-on:click="$emit('disown-ticket',ticketToDisplay.Ticket_ID)"
              >Disown</button>
              <!-- <button class="button is-warning">Reassign</button> -->
            </div>
          </span>
        </p>
      </footer>
    </div>
  </section>
</template>

<script>
import { CurrentUser } from "../models/Users";
import StatusTag from "./Status_Tag";
export default {
  data: () => ({
    currentUser: CurrentUser
  }),
  props: {
    ticketToDisplay: {
      type: Object
    }
  },
  components: {
    StatusTag
  }
};
</script>

<style>
</style>