<template>
  <section class="container">
    <div class="columns has-text-centered">
      <div class="column">
        <h1 class="title has-background-primary">Active Computers</h1>
        <table class="table is-striped is-hoverable">
          <thead>
            <th>Service Tag</th>
            <th>User</th>
            <th>Controls</th>
          </thead>
          <tbody>
            <tr v-for="(computerlist, i) in active_CI" :key="computerlist.Service_Tag">
              <th>{{computerlist.Service_Tag}}</th>
              <td>{{computerlist.Assigned_User}}</td>
              <td>
                <button class="button is-info is-small" @click="viewInfo(i)">
                  <span class="icon">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-warning is-small">
                  <span class="icon">
                    <i class="fas fa-truck-loading" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-danger is-small" @click="deleteComputer(active_CI,i)">
                  <span class="icon">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <h1 class="title has-background-warning">Stored Computers</h1>
        <table class="table is-striped is-hoverable">
          <thead>
            <th>Service Tag</th>
            <th>Location</th>
            <th>Controls</th>
          </thead>
          <tbody>
            <tr v-for="(storedmachine, i) in stored_CI" :key="storedmachine.Service_Tag">
              <th>{{storedmachine.Service_Tag}}</th>
              <td>{{storedmachine.Location}}</td>
              <td>
                <button class="button is-info is-small">
                  <span class="icon">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-warning is-small">
                  <span class="icon">
                    <i class="fas fa-truck-loading" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-danger is-small" @click="deleteComputer(stored_CI,i)">
                  <span class="icon">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <h1 class="title has-background-danger">Retired Computers</h1>
        <table class="table is-striped is-hoverable">
          <thead>
            <th>Service Tag</th>
            <th>Location</th>
            <th>Controls</th>
          </thead>
          <tbody>
            <tr v-for="(retiredmachine, i) in retired_CI" :key="retiredmachine.Service_Tag">
              <th>{{retiredmachine.Service_Tag}}</th>
              <td>{{retiredmachine.Location}}</td>
              <td>
                <button class="button is-info is-small">
                  <span class="icon">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-warning is-small">
                  <span class="icon">
                    <i class="fas fa-truck-loading" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-danger is-small" @click="deleteComputer(retired_CI,i)">
                  <span class="icon">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { Computer_Inventory } from "../models/Computers";

/*import compPanel from "@/components/Computer_Panel.vue";*/
import controlIcons from "@/components/Control_Icons.vue";

const active_CI = Computer_Inventory.Active;
const stored_CI = Computer_Inventory.Inactive;
const retired_CI = Computer_Inventory.Retired;

export default {
  data: () => ({
    Computer_Inventory,
    active_CI,
    stored_CI,
    retired_CI
  }),
  components: {
    controlIcons
  },
  methods: {
    viewInfo(i) {
      console.log(this.Computer_Inventory.Active);
    },
    moveComputer(fromLoc, toLoc) {},
    deleteComputer(deletelist, i) {
      deletelist.splice(i, 1);
    }
  }
};
</script>

<style>
</style>