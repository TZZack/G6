import Vue from 'vue';
import { VueNodeOptions } from './node';

export function mountVueComponent(
  component: VueNodeOptions['component'],
  el: HTMLElement,
  props?: Record<string, unknown>,
) {
  return new Vue({
    ...component,
    propsData: props,
    el,
  });
}

export function unmountVueComponent(vm: Vue) {
  vm.$destroy();
}
