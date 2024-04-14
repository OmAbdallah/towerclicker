import { defineStore } from 'pinia'
import { useInventoryStore } from '@/stores/inventory'
import { useCounterStore } from '@/stores/counter'

export const useShopStore = defineStore('shop', () => {
  const inventoryStore = useInventoryStore()
  const counterStore = useCounterStore()

  const items = [
    { 
      id: 1, 
      name: 'Miner', 
      price: 10,
      priceIncrease: 5,
      behavior: 'mine', 
    },
    { 
      id: 2, 
      name: 'Builder', 
      price: 10,
      priceIncrease: 5,
      behavior: 'build', 
    },
  ]

  function buyItem(itemId) {
    const item = items.find(item => item.id === itemId)
    if (counterStore.rockCount >= item.price) {
      counterStore.rockCount -= item.price
      item.price += item.priceIncrease
      inventoryStore.addItem(item, item.behavior)
    } else {
        window.alert("Not enough rocks to buy this item.")
    }
  }

  return {
    items,
    buyItem,
  }
})
