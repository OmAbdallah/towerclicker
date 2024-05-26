<template>
    <section class="mine">
      <button id="myButton" @click="increment(); increaseSize()" ></button>
    </section>
  </template>
  
  <script setup>
  import { useCounterStore } from '@/stores/counter';
  import { ref, toRefs } from 'vue';

  const counterStore = useCounterStore();
  const { rockCount } = toRefs(counterStore)
  const increment = counterStore.increment;

  function increaseSize() {
    var button = document.getElementById('myButton');
    button.style.transform = 'scale(1.2)';
    
    setTimeout(function() {
        button.style.transform = 'scale(1)';
        
    }, 200);
    var button = document.getElementById('myButton');

}
  </script>
  
  <style>
  .mine {
    grid-area: 2 / 2 / 3 / 3;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2B384B;
  }
  
  .mine>button {
    cursor: pointer;
    background: none;
    border: none;
    background-image: url(src/assets/rock.png);
    width: 35%;
    aspect-ratio: 1/1;
    background-size: cover;
  }
  @media only screen and (max-width: 800px){

        .mine{
            grid-area: 2 / 1 / 3 / 2;
        }
    }
  </style>
  