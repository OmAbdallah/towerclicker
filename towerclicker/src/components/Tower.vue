<template>
    <section class="tower">
      <h1>{{ height }} Meter</h1>
      <div class="grass"></div>
      <div class="towerBlock" @click="build">
      </div>
    </section>
  </template>
  
  <script>
  import { toRefs } from 'vue';
  

  import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()
    const { height } = toRefs(counterStore);
    const build = () => {
      counterStore.build() 
    }
    return { height, build }
  }
}

  </script>
  
  <style scoped>
    .tower{
        grid-area: 1 / 1 / 3 / 2;
        background-color: #B2FFFF;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        }
    .towerBlock{
        width: 300px;
        height: 100px;
        background-color: gray;
        position: absolute;
        bottom: 50px;
        display: flex;
        justify-content: center;
        background-image: url(images/brickTexture.png);
        background-size: cover;
        cursor: pointer;
    }
    .door{
        width: 30px;
        height: 50px;
        background-color: black;
        position: absolute;
        bottom: 0;
        border-radius: 15px 15px 0 0;
    }
    h1{
        position: fixed;
        top: 50px;
        font-size: 2rem;
        letter-spacing: 0.2rem;
    }
    .grass{
        height: 50px;
        background-color: green;
        position: absolute;
        bottom: 0;
        width: 100%;

    }
    @media only screen and (max-width: 800px){

        .tower{
            grid-area: 1 / 1 / 2 / 2;
        }
    }
  </style>
  