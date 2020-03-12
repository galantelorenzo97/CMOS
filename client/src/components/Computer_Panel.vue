<template>
  <nav class="panel">
    <p class="panel-heading">Computers By Location</p>
    <!-- <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p> 
    </div>-->
    <p class="panel-tabs">
      <a
        v-for="(location, index) in Locations"
        :key="index"
        active-class="is-active"
        @click="getComputersByLocation()"
      >{{location}}</a>
    </p>
    <a class="panel-block" v-for="(computer) in currentWorkingComputerList" :key="computer.Service_Tag">
      <span class="panel-icon">
        <i class="fas fa-desktop" aria-hidden="true"></i>
      </span>
      {{computer}}
    </a>
    <!-- <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      marksheet
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      minireset.css
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      jgthms.github.io
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-code-branch" aria-hidden="true"></i>
      </span>
      daniellowtw/infboard
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-code-branch" aria-hidden="true"></i>
      </span>
      mojs
    </a>-->
    <label class="panel-block">
      <input type="checkbox" />
      remember me
    </label>
    <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth">Reset all filters</button>
    </div>
  </nav>
</template>

<script>
import {
  getComputer,
  getComputerIndex,
  verbalizeStatus,
  getComputersByLocation
} from "../models/Computers";
import { Locations } from "../models/Locations";

let currentWorkingComputerList = [];
const currentLocation = Locations[2];

export default {
  name: "Computer_Panel",
  data: () => ({
    Locations,
    currentLocation,
    currentWorkingComputerList,
  }),
  methods: {
    getComputersByLocation() {
      currentWorkingComputerList = getComputersByLocation(currentLocation);
      console.log(currentWorkingComputerList);
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