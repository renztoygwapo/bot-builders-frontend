<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div class="text-center">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Home</h2>
      <nuxt-link class="mt-2 text-blue-600" to="crud">-> Go to CRUD</nuxt-link>
    </div>
  </div>
</div>
</template>
