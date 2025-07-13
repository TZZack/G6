import { HTML } from '@antv/g6';

declare class Vue {
  constructor(options: {
    template?: string;
    render?: (h: Function) => any;
    data?: () => Record<string, any>;
    propsData?: Record<string, any>;
    el?: HTMLElement;
  });
  $destroy(): void;
}

export interface VueNodeOptions {
  component: {
    template?: string;
    render?: (h: Function) => any;
    data?: () => Record<string, any>;
  };
  props?: Record<string, any>;
}

export class VueNode extends HTML {
  private vm: Vue | null = null;

  constructor(options: VueNodeOptions & { style?: Record<string, any> }) {
    super({
      ...options,
      style: {
        ...options.style,
        zIndex: 1,
        position: 'absolute',
      },
    });
  }

  connectedCallback() {
    const el = this.getDOMElement();
    if (!el || this.vm) return;

    this.vm = new Vue({
      ...this.cfg.component,
      propsData: this.cfg.props,
      el,
    });
  }

  destroy() {
    this.vm?.$destroy();
    super.destroy();
  }
}
