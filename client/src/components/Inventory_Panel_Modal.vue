<template>
  <section class="container">
    <div
      class="modal"
      v-bind:class="{'is-active': active}"
      v-on:activated="$emit('activated', $event.target.active)"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Full Details for Computer {{displayedComputer.Computer_ID}}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <strong>ID:</strong>
          {{displayedComputer.Computer_ID}}
          <br />
          <div v-if="displayedComputer.User != undefined">
            <strong>Assigned User:</strong>
            {{displayedComputer.User}}
            <br />
          </div>
          <div v-if="displayedComputer.User == undefined">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <!-- INTENTIONALLY LEFT BLANK -->
                </div>
              </div>
              <div class="level-right">
                <div class="level-item"><em>Assign to:</em></div>
                <div class="level-item">
                  <!-- User assignment component -->
                <div class="control has-icons-left is-right">
                  <div class="select is-small">
                    <select v-model="reactivationUserID">
                      <option selected disabled value="0">Select User</option>
                      <option
                        v-for="user in UserList.completeUserList"
                        :key="user.User_ID"
                        :value="user.User_ID"
                      >{{user.User_Name}}</option>
                    </select>
                  </div>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <!-- END User Assignment Component -->
                </div>
              </div>
            </nav>
          </div>
          <div>{{this.UserList.selectedUserId}}</div>
          <strong>Location:</strong>
          {{displayedComputer.Location}}
          <br />
          <strong>Service_Tag:</strong>
          {{displayedComputer.Service_Tag}}
          <br />
          <strong>Processor:</strong>
          {{displayedComputer.Processor}}
          <br />
          <strong>Operating System:</strong>
          {{displayedComputer.OS_Name}}
          <br />
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-warning"
            v-if="displayedComputer.Status_ID == 1"
            v-on:click="storeComputer(displayedComputer.Computer_ID)"
          >Store</button>
          <button
            class="button is-success"
            v-if="displayedComputer.Status_ID == 0"
            v-on:click="activateComputer(displayedComputer.Computer_ID)"
          >Reactivate</button>
          <button class="button" v-on:click="$emit('close-modal')">Close</button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
import myFetch from "../models/myFetch";
//import UserList from "./User_List";
import UserList from "../models/Helpdesk_Users";
export default {
  data: () => ({
    UserList,
    reactivationUserID: 0
  }),
  components: {},
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
  computed: {},
  async beforeCreate() {
    const userListPromise = await UserList.getCompleteUserList();
    this.UserList.completeUserList = userListPromise[0];
  },
  async created() {},
  methods: {
    storeComputer: async function(computerID) {
      await myFetch("/computers/methods/storeComputer/" + computerID);
      this.$emit("close-modal");
    },
    activateComputer: async function(computerID) {
      await myFetch(
        "/computers/methods/activateComputer/" +
          computerID +
          "/" +
          this.reactivationUserID
      );
      this.$emit("close-modal");
    },
    setReactivationUser(userID) {
      console.log(userID);
      this.reactivationUserID = userID;
      console.log(this.reactivationUserID);
    }
  }
};
</script>

<style>
</style>