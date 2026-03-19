import * as React from "react";
import Svg, { SvgProps, Text as SvgText, TSpan } from "react-native-svg";

const GameSelectionTitle = (props: SvgProps) => {
  return (
    <Svg
      width={props.width || 300}
      height={props.height || 80}
      viewBox="0 0 864 92"
      {...props}
    >
      <SvgText
        x={0}
        y={80}
        fill="#edebe5"
        fontSize={80} // scaled down to fit mobile
        fontFamily="GoldenVarsity-Outline"
      >
        G
        <TSpan fontVariant="small-caps">ame</TSpan>
        {" "}S
        <TSpan>election</TSpan>
      </SvgText>
    </Svg>
  );
};

export default GameSelectionTitle;