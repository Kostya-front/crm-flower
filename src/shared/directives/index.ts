import { DirectiveBinding } from "vue"

export const vFocus = {
    mounted: (el: HTMLTextAreaElement) => {
        el.focus()
    }
}

export const vClear = {
    unmounted: (el: any, binding: any, vnode: any) => {
        binding.value()
    }
}