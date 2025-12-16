import { mount, RouterLinkStub } from '@vue/test-utils'
import NavBar from '../src/components/NavBar.vue'

test('renders navigation links', () => {
  const wrapper = mount(NavBar, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub
      }
    }
  })

  expect(wrapper.text()).toContain('Home')
  expect(wrapper.text()).toContain('Posts')
  expect(wrapper.text()).toContain('Admin')
})
