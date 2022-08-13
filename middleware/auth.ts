export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('access_token')
    if (token !== undefined && !token?.value) {
      return navigateTo('/login')  
    }
  })