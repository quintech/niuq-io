// This file is where cache or some data that needs to be cleared is handled

// Clear login-related cache
export const clearSignInCache = () => {
  localStorage.clear();
  sessionStorage.clear();
}
