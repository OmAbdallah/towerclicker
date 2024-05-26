import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref([])
  const intervalIds = ref([])
  const counterStore = useCounterStore()

  function addItem(item, behavior, cpsValue) {
    const existingItem = inventory.value.find(i => i.id === item.id && i.behavior === behavior)
    if (existingItem) {
      existingItem.quantity++
    } else {
      inventory.value.push({ ...item, quantity: 1, behavior, cpsValue})
    }
    switch (behavior) {
      case 'build':
        console.log(`building`)
        counterStore.buildperSecond+= item.cpsValue;
        break
      case 'mine':
        console.log(`mining`)
        counterStore.rockperSecond+= item.cpsValue;
        break
      default:
        console.log(`No specific behavior for ${item.name}`)
        break
    }
  }


  return {
    inventory,
    addItem,
  }
})
