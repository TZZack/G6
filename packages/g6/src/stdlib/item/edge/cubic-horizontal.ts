import { Point } from '../../../types/common';

import { CubicEdge } from './cubic';

export class CubicHorizontalEdge extends CubicEdge {
  public type = 'cubic-horizontal-edge';

  public defaultStyles = {
    keyShape: {
      x1: 0,
      y1: 0,
      z1: 0,
      x2: 0,
      y2: 0,
      z2: 0,
      isBillboard: true,
    },
  };
  constructor(props) {
    super(props);
    // suggest to merge default styles like this to avoid style value missing
    // this.defaultStyles = mergeStyles([this.baseDefaultStyles, this.defaultStyles]);
  }

  /**
   * calculate the control points by curvePosition|controlPoints|curveOffset
   * @param startPoint source point position of edge
   * @param endPoint target point position of edge
   * @param percent the proportion of control points' in the segment, Range 0 to 1
   * @param controlPoints the control point position
   * @param offset the curveOffset
   * @returns control points
   */
  protected getControlPoints: (
    startPoint: Point,
    endPoint: Point,
    percent: number,
    controlPoints: Point[],
    offset: number,
  ) => Point[] = (startPoint: Point, endPoint: Point, percent = 0.5, controlPoints, offset) => {
    if (controlPoints?.length > 1) return controlPoints;
    const distanceToPoint = (startPoint.x - endPoint.x) * percent;
    const controlPoint1: Point = this.getControlPoint(startPoint, endPoint, distanceToPoint);
    const controlPoint2: Point = this.getControlPoint(endPoint, startPoint, -distanceToPoint);

    return [controlPoint1, controlPoint2];
  };

  /**
   * control point calculated according to startPoint, endPoint, percent, and offset
   * @param startPoint source point position of edge (x, y)
   * @param endPoint  target point position of edge (x, y)
   * @param percent   the proportion of control points' in the segment, Range 0 to 1
   * @param offset    the curveOffset
   * @returns control point (x,y)
   */
  protected getControlPoint: (startPoint: Point, endPoint: Point, offset: number) => Point = (
    startPoint: Point,
    endPoint: Point,
    offset = 0,
  ) => {
    if (endPoint.y === startPoint.y || endPoint.x === startPoint.x) {
      return { x: (startPoint.x + endPoint.x) / 2, y: startPoint.y };
    }
    const point: Point = {
      x: startPoint.x - offset,
      y: startPoint.y,
    };
    return point;
  };
}
