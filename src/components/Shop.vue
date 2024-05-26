<template>
  <section class="shop">
    <header>
      <p class="rocks"><div></div>{{ rockCount }}</p>
      <h2>Shop</h2>
    </header>
    <article>
      <div v-for="item in shopItems" :key="item.id">
        <p>{{ item.name }} - {{ item.price }}<div></div></p>
        <button @click="buyItem(item.id)">Buy</button>
      </div>
    </article>
  </section>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useShopStore } from '@/stores/shop'
import { useInventoryStore } from '@/stores/inventory'
import { toRefs } from 'vue'

const counterStore = useCounterStore()
const shopStore = useShopStore()
const inventoryStore = useInventoryStore()

const { rockCount } = toRefs(counterStore)
const { items: shopItems, buyItem, sellItem } = toRefs(shopStore)
const { inventory: inventoryItems } = toRefs(inventoryStore)

</script>
  
<style scoped>
.shop{
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background-image: url('src/assets/woodTexture.png');
  background-size: cover;
}
header{
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  position: relative;
}
.rocks{
  position: absolute;
  left: 0;
}
h2{
  background-image: url('src/assets/woodSign.png');
  width: 50%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 2.5rem;
  color: white;
}
p{
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 1.5rem;
}
p>div{
  background-image: url('src/assets/rockIcon.png');
  height: 50px;
  width: 50px;
  background-size: cover;
}
article{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
}
article>div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
div>button{
  width: 100%;
  height: 50px;
  background-color: rgb(168, 136, 96);
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
}
@media only screen and (max-width: 800px){
        
        .shop{
            grid-area: 3 / 1 / 4 / 2;
        }
        .tower{
            grid-area: 1 / 1 / 2 / 2;
        }
        
        h2{
            font-size: 1.5rem;
            letter-spacing: 0.3rem;
        }
    }
</style>
