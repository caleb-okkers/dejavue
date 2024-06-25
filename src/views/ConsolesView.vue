<template lang="">
    <div>

    <h1>Gaming Consoles</h1>
    <div v-if="gamingConsoles">
      <CardComp v-for="console in gamingConsoles" :key="console.name">
        <template v-slot:header>
          {{ console.name }} ({{ console.release_year }})
        </template>
        <template v-slot:body>
          <p>Manufacturer: {{ console.manufacturer }}</p>
          <p>Storage: {{ console.storage }}</p>
          <p>Price: ${{ console.price }}</p>
          <p>Best Selling Game: {{ console.best_selling_game }}</p>
        </template>
      </CardComp>
    </div>
        
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import CardComp from '../components/CardComp.vue'

export default {
    name: 'ConsolesView',
  components: {
    CardComp
  },
  computed: {
    ...mapState(['consoles'])
  },
  methods: {
    ...mapActions(['getConsoles'])
  },
  created() {
    this.getConsoles()
  }
}
</script>
<style scoped>
    
</style>