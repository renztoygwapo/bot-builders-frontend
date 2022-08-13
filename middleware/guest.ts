export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('access_token') ? useCookie('access_token') : null
       if (token !== undefined && token?.value) {
         return navigateTo('/home')
       }
     })