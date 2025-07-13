## Vue extension for G6

<img width="500" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*rWSiT6dnwfcAAAAAAAAAAAAADmJ7AQ/original" />

This extension allows you to define G6 node by Vue component.

## Usage

1. Install

```bash
npm install @antv/g6-extension-vue
```

2. Import and Register

```js
import { ExtensionCategory, register } from '@antv/g6';
import { VueNode } from '@antv/g6-extension-vue';

register(ExtensionCategory.NODE, 'vue', VueNode);
```

3. Define Node

```vue
<template>
  <div class="vue-node">
    {{ data }}
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
```

4. Use

```js
const graph = new Graph({
  // ... other options
  node: {
    type: 'vue',
    style: {
      component: () => import('./MyVueNode.vue'),
    },
  },
});
```

## Resources

- [Vue node](https://g6.antv.antgroup.com/examples/element/custom-node/#vue-node)
