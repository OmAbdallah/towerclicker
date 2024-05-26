<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { useShopStore } from '@/stores/shop'
import { useInventoryStore } from '@/stores/inventory'
const counterStore = useCounterStore();
 function startMinePerSecond(){
  setInterval(() => {
        counterStore.rockCount += counterStore.rockperSecond ;
    }, 1000);
};
function startBuildPerSecond(){
   
    setInterval(() => {
      if (counterStore.rockCount>counterStore.buildperSecond){
        counterStore.height += counterStore.buildperSecond;
        counterStore.rockCount -= counterStore.buildperSecond
      }
    }, 1000);


};
window.addEventListener('beforeunload', function(event) {
    const timeStamp = Date.now();
    localStorage.setItem('unloadTimestamp', timeStamp);
});
const timeStamp = parseInt(localStorage.getItem('unloadTimestamp'));
function calculateOfflineEarnings(){
  const currentTime = Date.now();
  const timeElapsed = currentTime - timeStamp;
  if (timeElapsed > 5) {
    const secondsPassed = Math.floor(timeElapsed / 1000);
    console.log('Seconds passed since the browser was closed:', secondsPassed);
    const missedHeight = (counterStore.buildperSecond*secondsPassed)
    const missedEarnings = (counterStore.rockperSecond * secondsPassed -missedHeight);
    counterStore.rockCount += missedEarnings;
    counterStore.height += missedHeight;
  }
};
calculateOfflineEarnings();
startBuildPerSecond();
startMinePerSecond();
</script>

<template>
  <header>
    <h1>Towerclicker</h1>
    <nav>
    <RouterLink to = "/">home</RouterLink>
    <RouterLink to = "/about">about</RouterLink>
  </nav></header>
  
  <RouterView />
</template>

<style scoped>
header{
  position: absolute;
  display: flex;
  gap: 50px;
  z-index: 2;
}
h1{
  text-transform: uppercase;
  color: white;
}
nav{
  display: flex;
  gap: 25px;
  
}
</style>
