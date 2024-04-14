import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const rockCount = ref(0)
  const height = ref(1)
  
  function increment() {
    rockCount.value++
  }

  function build() {
    if (rockCount.value > 0) {
      height.value++
      rockCount.value -= 1
    }
  }

  return { rockCount, increment, height, build }
})