import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  function loginAsAdmin() {
    user.value = {
      id: 1,
      name: 'Admin',
      role: 'admin'
    }
  }

  function logout() {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    isAdmin,
    loginAsAdmin,
    logout
  }
})
