<template>
  <section class="container">
    <div class="columns has-text-centered">
      <div class="column">
        <div class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Admin Interface</h1>
              <!-- <h2 class="subtitle">Hero subtitle</h2> -->
              <!-- TODO: ADJUST THE PADDING -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name" v-model="newUser.Name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Role</label>
          <div class="control">
            <input class="input" type="text" placeholder="Role" v-model="newUser.Role" />
          </div>
        </div>

        <div class="field">
          <label class="label">Login</label>
          <div class="control">
            <input class="input" type="text" placeholder="Login" v-model="newUser.Login" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="text" placeholder="Password" v-model="newUser.Password" />
          </div>
        </div>

        <div class="field">
          <label class="label">User Type</label>
          <div class="control">
            <div class="select">
              <select v-model="newUser.Type_ID">
                <option value="0">Standard User</option>
                <option value="1">Admin</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Profile Pic URL</label>
          <div class="control">
            <input class="input" type="text" placeholder="ProfilePic" v-model="newUser.Profile_Pic" />
          </div>
        </div>

        <div class="buttons">
          <button class="button is-success" v-on:click="addUser">Add this user</button>
        </div>

        <!-- <div class="column"> -->
        <!-- PRINTER TONER STATUS HERE -->
        <!-- </div> -->
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
import { CurrentUser } from "../models/Users";
import Admin from "../models/Admin";

export default {
  data: () => ({
    CurrentUser: CurrentUser,
    newUser: {
      Name: "",
      Role: "",
      Login: "",
      Password: "",
      Type_ID: 0,
      Profile_Pic: ""
    }
  }),
  async beforeCreate() {},
  async created() {},
  updated() {},
  components: {},
  computed: {},
  methods: {
    addUser: function() {
      Admin.addUser(this.newUser);
      this.newUser = {
      Name: "",
      Role: "",
      Login: "",
      Password: "",
      Type_ID: 0,
      Profile_Pic: ""
    };
    }
  }
};
</script>

<style>
</style>