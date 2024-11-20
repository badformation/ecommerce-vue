import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  data()() => ({
    counter: 0
  }),
    methods: {
  increment() {
    this.counter++
  },
  computed: {
    isEven: (state) => {
      return state.counter % 2 == 0
    }
  }

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
