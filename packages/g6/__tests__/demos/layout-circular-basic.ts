// import data from '@@/dataset/circular.json';
import { CircularLayout, Graph, GridLayout } from '@antv/g6';

export const layoutCircularBasic: TestCase = async (context) => {
  function generateArray(groups = 2, itemsPerGroup = 6) {
    const nodes = [];
    const combos = [];
    for (let i = 1; i <= groups; i++) {
      const comboId = `combo-${i}`;
      combos.push({ id: comboId });
      for (let j = 1; j <= itemsPerGroup; j++) {
        const id = `${i}-${j}`;
        nodes.push({
          id,
          labelText: id,
          combo: comboId,
        });
      }
    }

    return {
      nodes,
      combos,
    };
  }

  const data = generateArray();
  const graph = new Graph({
    ...context,
    animation: false,
    autoResize: true,
    autoFit: 'center',
    data,
    node: {
      style: {
        labelFill: '#fff',
        labelPlacement: 'center',
        labelText: (d) => d.labelText,
      },
    },
    layout: {
      type: 'combo-combined',
      comboPadding: 100,
      innerLayout: new CircularLayout({}),
      outerLayout: new GridLayout({}),
    },
    behaviors: ['zoom-canvas', 'drag-canvas'],
  });

  await graph.render();

  window.graph = graph;

  return graph;
};
