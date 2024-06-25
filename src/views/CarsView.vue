<template>
    <div>
      <h1>Cars</h1>
      <div v-if="cars">
        <CardComp v-for="car in cars" :key="car.model">
          <template v-slot:header>
            {{ car.make }} {{ car.model }} ({{ car.year }})
          </template>
          <template v-slot:body>
            <p>Color: {{ car.color }}</p>
            <p>Price: ${{ car.price }}</p>
          </template>
        </CardComp>
      </div>
    </div>
  </template>
<script>
import { mapState, mapActions } from 'vuex'
import CardComp from '../components/CardComp.vue' 

export default {
  name: 'CarsView',
  components: {
    CardComp
  },
  computed: {
    ...mapState(['cars'])
  },
  methods: {
    ...mapActions(['getCars'])
  },
  created() {
    this.getCars()
  }
    
}
</script>
<style lang="">
    
</style>