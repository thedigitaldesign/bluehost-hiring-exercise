<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <AppBar />

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <div class="pt-2 pb-6 md:py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="py-4">
              <router-view />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
// Components
import AppBar from '../components/Layout/AppBar.vue'

// Models
import { Doggo } from '../models/Doggos'

// Packages
import axios from 'axios'

export default {
  name: 'DashboardLayout',

  components: {
    AppBar,
  },

  computed: {
    user() {
      return axios.get('../data/user.json')
    }
  },
}
</script>

<style></style>
