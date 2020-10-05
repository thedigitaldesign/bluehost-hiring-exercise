<template>
  <div id="dashboard-index">
    <div class="mb-4">
      <h3 class="text-xl leading-6 font-medium text-gray-900">Doggo List</h3>
    </div>

    <ul class="bg-white shadow">
      <li v-for="doggo in doggos" :key="doggo.id" class="block hover:bg-gray-200 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <router-link
          :to="'/details/' + doggo.id"
          class="block hover:bg-gray-200 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out px-4 py-4"
        >
          <div class="pa-4">
            <h2 class="text-lg leading-6 font-medium"><span class="text-base font-small text-gray-600 font-normal">name:</span> {{ doggo.name }}</h2>
            <h3 class="text-base leading-6 font-small"><span class="text-base font-small text-gray-600 font-normal">breed:</span> {{ doggo.breed }}</h3>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardIndex',

  computed: {
    ...mapGetters('doggos', ['doggos'])
  },

  created() {
    this.$store.dispatch('doggos/doggos')
  }
}
</script>

<style></style>
