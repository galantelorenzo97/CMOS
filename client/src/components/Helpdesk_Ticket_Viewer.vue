<template>
  <section class="container">
    <div v-if="ticketToDisplay != null" class="card">
      <div class="card-content">
        <p class="title">{{ticketToDisplay.Summary}}</p>
        <p class="subtitle">{{ticketToDisplay.User}}</p>
        <p v-if="ticketToDisplay.Assigned_User != null" class="subtitle">Assigned To: {{ticketToDisplay.Assigned_User}}</p>
        <p v-else class="subtitle">Ticket has not been Assigned</p>
        <article class="message">
          <div class="message-body">
            {{ticketToDisplay.Description}}
          </div>
        </article>
      </div>
      <footer class="card-footer">
        <p v-if="ticketToDisplay.Assigned_User == null" class="card-footer-item">
          <span>Assign to Technician</span>
        </p>
        <p v-else class="card-footer-item">
          <span>Reassign</span>
        </p>
        <p class="card-footer-item">
          <span>Change Status</span>
        </p>
      </footer>
    </div>
    <div v-else>
      <article class="message is-dark">
        <div class="message-body">
          <strong>TICKET MOTHERFUCKER, CAN YOU SELECT IT!?</strong>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    ticketToDisplay: {
      type: Object
    }
  }
};
</script>

<style>
</style>