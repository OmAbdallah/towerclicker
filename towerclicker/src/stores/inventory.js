import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref([])
  const intervalIds = ref([])
  const counterStore = useCounterStore()

  function addItem(item, behavior) {
    const existingItem = inventory.value.find(i => i.id === item.id && i.behavior === behavior)
    if (existingItem) {
      // Increment quantity if item already exists in inventory
      existingItem.quantity++
    } else {
      // Add item to inventory with quantity 1
      inventory.value.push({ ...item, quantity: 1, behavior })
    }

    // Handle behavior-specific logic
    switch (behavior) {
      case 'build':
        console.log(`building`)
        startBuilding()
        break
      case 'mine':
        console.log(`mining`)
        startMining()
        break
      default:
        console.log(`No specific behavior for ${item.name}`)
        break
    }
  }

  function startMining() {
    const miningInterval = setInterval(() => {
        counterStore.increment();}, 1000);
}

function startBuilding() {
    const buildingInterval = setInterval(() => {
        counterStore.build();}, 2000);
}

  return {
    inventory,
    addItem,
  }
})
