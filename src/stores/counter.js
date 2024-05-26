import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const rockCount = ref(parseInt(localStorage.getItem('rockCount')) || 0)
  const height = ref(parseInt(localStorage.getItem('height')) || 100)
  const rockperSecond = ref(parseInt(localStorage.getItem('rockperSecond')) || 0)
  const buildperSecond = ref(parseInt(localStorage.getItem('buildperSecond')) || 0)

  function increment() {
    rockCount.value++
  }

  function build() {
    if (rockCount.value > 0) {
      height.value++
      rockCount.value -= 1
    }
  }

  function saveStateToLocalStorage() {
    localStorage.setItem('rockCount', rockCount.value)
    localStorage.setItem('height', height.value)
    localStorage.setItem('rockperSecond', rockperSecond.value)
    localStorage.setItem('buildperSecond', buildperSecond.value)
  }

  setInterval(saveStateToLocalStorage, 1000)

  return { rockCount, increment, height, build, rockperSecond, buildperSecond }
})
