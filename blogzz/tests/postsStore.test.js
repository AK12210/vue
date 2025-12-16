import { setActivePinia, createPinia } from 'pinia'
import { usePostsStore } from '../src/store/posts'


describe('Posts Store', () => {
beforeEach(() => {
setActivePinia(createPinia())
})


it('initializes with empty posts', () => {
const store = usePostsStore()
expect(store.posts.length).toBe(0)
})


it('sets posts via action', () => {
const store = usePostsStore()
store.setPosts([{ id: 1 }, { id: 2 }])
expect(store.posts.length).toBe(2)
expect(store.postCount).toBe(2)
})
})