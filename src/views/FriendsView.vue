<template lang="">
    <div>
      <h1>Friends</h1>
      <div v-if="friends">
        <CardComp v-for="friend in friends" :key="friend.id" :class="{'gold-border': friend.gender === 'Male', 'green-border': friend.gender === 'Female'}">
          <template v-slot:header>
            {{ friend.firstName }} {{ friend.lastName }}
          </template>
          <template v-slot:body>
            <p>Gender: {{ friend.gender }}</p>
            <p>Profile: {{ friend.profile }}</p>
            <p>Contact Details: {{ friend.contactDetails }}</p>
          </template>
        </CardComp>
      </div>
    </div>
  </template>
<script>
import { mapState, mapActions } from 'vuex';
import CardComp from '../components/CardComp.vue';

export default {
  name: 'FriendsView',
  components: {
    CardComp
  },
  computed: {
    ...mapState(['friends'])
  },
  methods: {
    ...mapActions(['getFriends'])
  },
  created() {
    this.getFriends();
  }
}
</script>
<style scoped>

.gold-border {
  border: 2px solid gold;
}
.green-border {
  border: 2px solid green;
}
</style>