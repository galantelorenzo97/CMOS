<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a :class="{ 'is-active-menu':isOpen }" 
        @click="isOpen = !isOpen"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{ 'is-active-menu':isOpen }" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" active-class="is-enabled" exact>Dashboard</router-link>
        <!-- <router-link to="/about" class="navbar-item" active-class="is-enabled">About</router-link> -->
        <router-link to="/computers" class="navbar-item" active-class="is-enabled">Computers</router-link>
        <router-link to="/helpdesk" class="navbar-item" active-class="is-enabled">Helpdesk</router-link>
<!--
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div> -->
        
      </div>
      <div class="navbar-end">
        <div v-if="ConnectedUser == null" class="navbar-item">
          <p>Please Log in!</p>
          <!--<div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>-->
        </div>
        <div v-else class="navbar-item">
          <p> Hello, {{ConnectedUser.result[0].Name}} </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {CurrentUser} from '../models/Users';

export default {
  data: () => ({
    isOpen: false,
    ConnectedUser: null,
  }),
  beforeCreate() {
  },
  created() {
    var delay = setInterval(this.poorManUpdate, 2000);
  },
  updated() {

  },
  methods: {
    poorManUpdate: function () {
      this.ConnectedUser = CurrentUser;
    }
  }
};
</script>

<style>
  a.is-enabled {
    font-weight: bold;
    color: blueviolet;
  }
</style>