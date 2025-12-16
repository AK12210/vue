import { ref } from 'vue'


export function useFetch(url) {
const data = ref(null)
const loading = ref(false)
const error = ref(null)


const fetchData = async () => {
loading.value = true
try {
await new Promise(resolve => setTimeout(resolve, 300))
const res = await fetch(url)
data.value = await res.json()
} catch (e) {
error.value = e.message
} finally {
loading.value = false
}
}


return { data, loading, error, fetchData }
}