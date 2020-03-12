<template>
  <section class="container">
    <div class="columns has-text-centered">
        <div class="column">
            <h1 class="title has-background-primary">Active Computers</h1>
            <table class="table is-striped is-hoverable">
                <thead>
                    <th> Service Tag </th>
                    <th> User </th>
                    <th> Controls </th>
                </thead>
                <tbody>
                    <tr v-for="(computerlist) in active_CI" :key=computerlist.Service_Tag>
                        <th> {{computerlist.Service_Tag}} </th>
                        <td> {{computerlist.Assigned_User}}</td>
                        <td> <controlIcons></controlIcons> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column">
            <h1 class="title has-background-warning">Stored Computers</h1>
            <table class="table is-striped is-hoverable">
                <thead>
                    <th> Service Tag </th>
                    <th> Location </th>
                    <th> Controls </th>
                </thead>
                <tbody>
                    <tr v-for="(storedmachine) in stored_CI" :key=storedmachine.Service_Tag>
                        <th> {{storedmachine.Service_Tag}} </th>
                        <td> {{storedmachine.Location}}</td>
                        <td> <controlIcons></controlIcons> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column">
            <h1 class="title has-background-danger">Retired Computers</h1>
            <table class="table is-striped is-hoverable">
                <thead>
                    <th> Service Tag </th>
                    <th> Location </th>
                    <th> Controls </th>
                </thead>
                <tbody>
                    <tr v-for="(retiredmachine) in retired_CI"  :key=retiredmachine.Service_Tag >
                        <th> {{retiredmachine.Service_Tag}} </th>
                        <td> {{retiredmachine.Location}} </td>
                        <td> <controlIcons></controlIcons> </td>
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
    }
}
</script>

<style>

</style>