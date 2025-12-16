import { mount } from '@vue/test-utils'
import CommentForm from '../src/components/CommentForm.vue'



test('shows error on invalid submit', async () => {
const wrapper = mount(CommentForm)
await wrapper.find('button').trigger('click')
expect(wrapper.text()).toContain('Invalid')
})