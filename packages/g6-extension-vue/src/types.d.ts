declare module '@antv/g6' {
  export class HTML {
    constructor(options: any);
    getDOMElement(): HTMLElement;
    destroy(): void;
    cfg: any;
    connected: boolean;
  }
}
