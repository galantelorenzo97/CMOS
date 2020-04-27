<template>
  <section class="container">

        <button class="button is-info is-small" @click="infoButtonPressed=true">

            <span class="icon">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </span>

        </button>
        
        <button class="button is-warning is-small" @click="moveButtonPressed=true">

            <span class="icon">
                <i class="fas fa-truck-loading" aria-hidden="true"></i>
            </span>

        </button>

        <button class="button is-danger is-small" @click="deleteButtonPressed=true">

            <span class="icon">
                <i class="fas fa-trash" aria-hidden="true"></i>
            </span>
        
        </button>

  </section>
</template>

<script>
//export let deleteButtonPressed = false;
//export let infoButtonPressed = false;
//export let moveButtonPressed = false;

export default {
    //https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
    data: () => ({
      
    }),
    props: {
      deleteButtonPressed: Boolean
    },
    events: {

    },
    methods: {
        
    }
}
</script>

<style>

</style>