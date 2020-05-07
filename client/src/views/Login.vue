<template>
  <form class="container" @submit.prevent="login">
    <div v-if="error" class="notification is-danger">
      {{error.message}}
    </div>
    
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Username" v-model="username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">Login</button>
      </p>
    </div>
  </form>
</template>

<script>
import { CurrentUser, Login } from "../models/Users";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        await Login(this.username, this.password);
        console.log(CurrentUser);
        this.$router.push("/");
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>

<style>
</style>