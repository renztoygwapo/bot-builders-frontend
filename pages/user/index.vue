<script setup>
  definePageMeta({
    middleware: ['auth']
  })
  const { baseUrl } = useRuntimeConfig()
  const userState = reactive({
    name: '',
    email: '',
    password: '',
    password_confirm: '',
    error: null,
    errorMessages: [],
    loading: false,
    message: null
 })
 const token = useCookie('access_token')
 async function handleCreateUser(){
  try {
    userState.loading = false
    const response = await $fetch(`${baseUrl}/api/user`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.value.token
        },
        body: {
          name: userState.name,
          email: userState.email,
          password: userState.password,
          password_confirm: userState.password_confirm
        }
    })
    navigateTo({ path: '/crud' })
    } catch (err) {
        userState.error = true
        userState.message = err.response._data.message
        userState.errorMessages = err.response._data.errors
        setTimeout(() => { userState.error = false }, 10000)
      } finally {
        userState.loading = false
      }
 }
</script>

<template>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new User</h2>
    </div>
    <div v-if="userState.error" class="bg-red-500 text-white p-2 rounded text-center">
     <div class="text-2xl m-2 mb-2"> {{ userState.message }}</div>
      <div>
        <ul class="list-disc pl-5 space-y-1">
                <li v-for="(errorMessage, index) in userState.errorMessages" :key="index">
                {{ errorMessage.join() }}
                </li>
        </ul>
      </div>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="handleCreateUser">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" v-model="userState.name" name="name" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" v-model="userState.email" name="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="userState.password" name="password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="userState.password_confirm" name="password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
</template>
