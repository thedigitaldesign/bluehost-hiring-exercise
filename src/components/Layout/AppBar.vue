<template>
  <div id="app-bar">
    <div class="flex border-b-2 border-gray-200 px-4 py-2">
      <div class="flex flex-grow justify-start">
        <router-link to="/" class="flex">
          <img class="h-8 w-auto sm:h-10" src="../../assets/image/doggo-logo.png" alt="Workflow" />
        </router-link>

        <div class="max-w-7xl px-10">
          <h1 class="text-2xl font-semibold text-gray-900">{{ $route.name }}</h1>
        </div>
      </div>

      <div class="flex flex-grow justify-end">
        <nav class="space-x-8">
          <router-link
            to="/"
            class="inline-flex items-center leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 align-middle h-full"
          >
            Dashboard
          </router-link>

          <router-link
            to="/add-doggo"
            class="inline-flex items-center leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 align-middle h-full"
          >
            Add Doggo
          </router-link>
        </nav>

        <div class="inline-flex pl-10">
          <h1
            class="inline-flex items-center align-middle font-semibold text-gray-900 hover:text-gray-900 transition ease-in-out duration-150 h-full pr-2 pl-10"
          >
            Joshua Christensen
          </h1>
          <img class="inline-block h-10 w-10 rounded-full" src="../../assets/image/joshua-christensen.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<style></style>
