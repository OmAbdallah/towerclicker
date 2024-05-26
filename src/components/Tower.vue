<template>
    <section class="tower">
      <h2>{{ height }} Meter</h2>
      <div class="grass"></div>
      <progress @click="build" :value= "height" max="10000"></progress>
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
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(215,233,248);
        background: linear-gradient(0deg, rgba(215,233,248,1) 0%, rgba(61,111,178,1) 48%, rgba(35,35,87,1) 94%);
        }
    .door{
        width: 30px;
        height: 50px;
        background-color: black;
        position: absolute;
        bottom: 0;
        border-radius: 15px 15px 0 0;
    }
    h2{
        position: fixed;
        top: 50px;
        font-size: 2rem;
        letter-spacing: 0.2rem;
        color: white;
    }
    .grass{
        height: 10px;
        background-color: green;
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 2;
    }
    progress {
    transform: rotate(-90deg);
    width: 500px;
    height: 100px;
    background-color : rgba(0, 0, 0, 0);
    transform-origin: bottom left;
        position: absolute;
        display: flex;
        bottom: 10px;
        left: 55%;
        justify-content: center;
        cursor: pointer;
        

  }
  progress::-webkit-progress-bar {
    background-color: transparent; /* Background color of the bar */
  }

  progress::-webkit-progress-value {
    background-color: blue; /* Color of the progress */
    background-image: url('/src/assets/stoneBrick.png');
  }

    @media only screen and (max-width: 800px){

        .tower{
            grid-area: 1 / 1 / 2 / 2;
        }
    }
  </style>
  