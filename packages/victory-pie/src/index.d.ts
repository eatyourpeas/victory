import * as React from "react";
import {
  CategoryPropType,
  ColorScalePropType,
  DataGetterPropType,
  EventPropTypeInterface,
  NumberOrCallback,
  OriginType,
  SliceNumberOrCallback,
  StringOrNumberOrCallback,
  VictoryCommonProps,
  VictoryLabelableProps,
  VictoryMultiLabelableProps,
  VictoryStyleInterface
} from "victory-core";

export type labelPositionType = "startAngle" | "centroid" | "endAngle";

export interface VictorySliceProps extends VictoryCommonProps {
  cornerRadius?: SliceNumberOrCallback<VictorySliceProps, "cornerRadius">;
  datum?: any;
  innerRadius?: NumberOrCallback;
  padAngle?: SliceNumberOrCallback<VictorySliceProps, "padAngle">;
  pathComponent?: React.ReactElement;
  pathFunction?: (props: VictorySliceProps) => string;
  radius?: SliceNumberOrCallback<VictorySliceProps, "radius">;
  slice: {
    startAngle?: number;
    endAngle?: number;
    padAngle?: number;
    data?: any[];
  };
  sliceEndAngle?: SliceNumberOrCallback<VictorySliceProps, "sliceEndAngle">;
  sliceStartAngle?: SliceNumberOrCallback<VictorySliceProps, "sliceStartAngle">;
}

export interface VictoryPieProps
  extends VictoryCommonProps,
    VictoryLabelableProps,
    VictoryMultiLabelableProps {
  categories?: CategoryPropType;
  colorScale?: ColorScalePropType;
  cornerRadius?: SliceNumberOrCallback<VictorySliceProps, "cornerRadius">;
  data?: any[];
  dataComponent?: React.ReactElement;
  endAngle?: number;
  events?: EventPropTypeInterface<
    "data" | "labels" | "parent",
    StringOrNumberOrCallback | string[] | number[]
  >[];
  eventKey?: StringOrNumberOrCallback;
  innerRadius?: NumberOrCallback;
  labelPosition?: labelPositionType | ((props: VictorySliceProps) => labelPositionType);
  labelRadius?: number | ((props: VictorySliceProps) => number);
  origin?: OriginType;
  padAngle?: NumberOrCallback;
  radius?: NumberOrCallback;
  startAngle?: number;
  style?: VictoryStyleInterface;
  x?: DataGetterPropType;
  y?: DataGetterPropType;
}

export class VictoryPie extends React.Component<VictoryPieProps, any> {}
