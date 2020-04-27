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
                <button
                  class="button is-warning is-small"
                  @click="moveComputer(active_CI, stored_CI, i)"
                >
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
    </div>
  </section>
</template>

<script>
export default {
    data: () => {

    },
    props: {
        displayList
    },
    events: {

    }, 
    methods: {
        deleteComputer(deletelist, i) {
        deletelist.splice(i, 1);
    }
    }
};
</script>

<style>
</style>