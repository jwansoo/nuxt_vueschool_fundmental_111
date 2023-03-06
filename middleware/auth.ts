export default defineNuxtRouteMiddleware((to, from) => {
  const useIsLoggedIn = false;
  if (!useIsLoggedIn) {
    return navigateTo({ path: "/login" });
  }
});
