import { defineStore } from 'pinia'
import { useInventoryStore } from '@/stores/inventory'
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

export const useShopStore = defineStore('shop', () => {
  const inventoryStore = useInventoryStore()
  const counterStore = useCounterStore()

  const items = [
    { 
      id: 1, 
      name: 'Miner', 
      price: parseFloat(localStorage.getItem('item-1-price')) || 10,
      priceIncrease: 2,
      behavior: 'mine',
      cpsValue: 1
    },
    { 
      id: 2, 
      name: 'Builder', 
      price: parseFloat(localStorage.getItem('item-2-price')) || 10,
      priceIncrease: 3,
      behavior: 'build', 
      cpsValue: 1
    },
    { 
      id: 3, 
      name: 'Drill', 
      price: parseFloat(localStorage.getItem('item-3-price')) || 10,
      priceIncrease: 2,
      behavior: 'mine', 
      cpsValue: 10
    },
    { 
      id: 4, 
      name: 'Crane', 
      price: parseFloat(localStorage.getItem('item-4-price')) || 10,
      priceIncrease: 2,
      behavior: 'build', 
      cpsValue: 10
    },
  ]

  function buyItem(itemId) {
    const item = items.find(item => item.id === itemId)
    if (counterStore.rockCount >= item.price) {
      counterStore.rockCount -= item.price
      item.price *= item.priceIncrease
      inventoryStore.addItem(item, item.behavior)
    } else {
        window.alert("Not enough rocks to buy this item.")
    }
  }
  function saveStateToLocalStorage() {
    for (let x = 0; x < 4; x++) {
      localStorage.setItem('item-'+(x+1)+'-price', items[x].price)
    }
    
  }
  setInterval(saveStateToLocalStorage, 1000);
  return {
    items,
    buyItem  
  }
})
