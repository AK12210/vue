import { defineStore } from 'pinia'


export const usePostsStore = defineStore('posts', {
state: () => ({ posts: [] }),
getters: {
postCount: (state) => state.posts.length
},
actions: {
setPosts(data) { this.posts = data }
}
})