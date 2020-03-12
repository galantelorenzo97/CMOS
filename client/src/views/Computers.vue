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
                <button
                  class="button is-info is-small"
                  @click="viewInfo(); currentComputer = active_CI[i]"
                >
                  <span class="icon">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-warning is-small" @click="moveComputer(active_CI, stored_CI, i)">
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
                <button
                  class="button is-info is-small"
                  @click="viewInfo(); currentComputer = stored_CI[i]"
                >
                  <span class="icon">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-warning is-small" @click="moveComputer(stored_CI, active_CI, i)">
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
                <button
                  class="button is-info is-small"
                  @click="viewInfo(); currentComputer = retired_CI[i]"
                >
                  <span class="icon">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <button class="button is-warning is-small" @click="moveComputer(retired_CI, stored_CI, i)">
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

    <!-- INFO MODAL -->
    <div class="modal" :class="{'is-active': infoModalOpen}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Full Computer Information</p>
          <button class="delete" aria-label="close" @click="closeInfo()"></button>
        </header>
        <section class="modal-card-body">
          <p>Service Tag: {{this.currentComputer.Service_Tag}}</p>
          <p
            v-if="this.currentComputer.Assigned_User != ''"
          >Assigned User: {{this.currentComputer.Assigned_User}}</p>
          <p>Location: {{this.currentComputer.Location}}</p>
        </section>
        <footer class="modal-card-foot"></footer>
      </div>
    </div>
    <!-- END INFO MODAL -->

    <!-- MOVE MODAL -->
    <div class="modal" :class="{'is-active': moveModalOpen}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Move To:</p>
          <button class="delete" aria-label="close" @click="closeMove()"></button>
        </header>
        <section class="modal-card-body">
          <button class="is-success" v-for="(statusnames) in Computer_Inventory" :key="statusnames"></button>
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
    <!-- END MOVE MODAL -->
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
    retired_CI,
    infoModalOpen: false,
    moveModalOpen: false,
    currentComputer: {},
    currentMoveLoc: ""
  }),
  components: {
    controlIcons
  },
  methods: {
    //INFO MODAL SHOW
    viewInfo() {
      this.infoModalOpen = true;
    },
    //INFO MODAL CLOSE
    closeInfo() {
      this.infoModalOpen = false;
    },
    //MOVE MODAL SHOW
    viewMove() {
      this.moveModalOpen = true;
    },
    //MOVE MODAL CLOSE
    closeMove() {
      this.moveModalOpen = false;
    },
    moveComputer(fromLoc, toLoc, i) {
      toLoc.push(fromLoc.splice(i, 1)[0]);
    },
    deleteComputer(deletelist, i) {
      deletelist.splice(i, 1);
    }
  }
};
</script>

<style>
</style>