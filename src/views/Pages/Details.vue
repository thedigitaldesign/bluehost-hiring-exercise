<template>
  <div id="doggo-details">
    <div class="max-w-4xl m-auto">
      <div>
        <h3 class="text-xl leading-6 font-medium text-gray-900">{{ details.name }}'s Information</h3>
      </div>

      <div class="mt-5 border-t border-gray-200 pt-5">
        <dl>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-2">
            <dt class="text-lg text-right leading-5 font-medium text-gray-500">Name</dt>
            <dd class="mt-1 text-lg leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{{ details.name }}</dd>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-2">
            <dt class="text-lg text-right leading-5 font-medium text-gray-500">Age</dt>
            <dd class="mt-1 text-lg leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{{ details.age }}</dd>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-2">
            <dt class="text-lg text-right leading-5 font-medium text-gray-500">Breed</dt>
            <dd class="mt-1 text-lg leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{{ details.breed }}</dd>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-2">
            <dt class="text-lg text-right leading-5 font-medium text-gray-500">Weight</dt>
            <dd class="mt-1 text-lg leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{{ details.weight }}</dd>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-2">
            <dt class="text-lg text-right leading-5 font-medium text-gray-500">Height</dt>
            <dd class="mt-1 text-lg leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{{ details.height }}</dd>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-2">
            <dt class="text-lg text-right leading-5 font-medium text-gray-500">Color</dt>
            <dd class="mt-1 text-lg leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{{ details.color }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex'

export default {
  name: 'Details',

  computed: {
    ...mapGetters('doggo_details', ['details'])
  },

  created() {
    this.$store.dispatch('doggo_details/details', this.$route.params.id)
  }
}
</script>

<style></style>
