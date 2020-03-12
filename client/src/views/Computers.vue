<template>
  <section class="container">
    
    <div class="columns">
        <div class="column">
            <compPanel></compPanel>
        </div>
        <div class="column">
            Second column
        </div>
        <div class="column">
            Third column
        </div>
    </div>
  </section>
</template>

<script>
/* import { getComputer, getComputerIndex, verbalizeStatus } from "../models/Computers";*/

import compPanel from "@/components/Computer_Panel.vue";


export default {
    components: {
        compPanel    
    }
}
</script>

<style>

</style>