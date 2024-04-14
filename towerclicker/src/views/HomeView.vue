<script setup>
import Tower from '../components/Tower.vue'
import Mine from '../components/Mine.vue'
import Shop from '../components/Shop.vue'
</script>

<template>
  <main>
    <Tower />
    <Shop/>
    <Mine />
  </main>
</template>
<style>
body{
        background-color: gray;
        font-family: 'IBM Plex Sans', sans-serif;
        font-family: 'Source Sans 3', sans-serif;
    }
    main{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        height: 100vh;
    }
    @media only screen and (max-width: 800px){
        main{
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(1, 1fr);
        }
        .shop{
            grid-area: 3 / 1 / 4 / 2;
        }
        .tower{
            grid-area: 1 / 1 / 2 / 2;
        }
        .mine{
            grid-area: 2 / 1 / 3 / 2;
        }
        h2{
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
        }
    }
</style>