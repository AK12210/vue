import { mount, RouterLinkStub } from '@vue/test-utils'
import PostItem from '../src/components/PostItem.vue'

test('displays post title', () => {
  const wrapper = mount(PostItem, {
    props: {
      post: { id: 1, title: 'Test Post' }
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub
      }
    }
  })

  expect(wrapper.text()).toContain('Test Post')
})
