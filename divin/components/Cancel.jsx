import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Cancel(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="prefix__Warstwa_3"
      x={0}
      y={0}
      viewBox="0 0 430 430"
      xmlSpace="preserve"
      {...props}
    >
      <Path
        className="prefix__st0"
        d="M59.58 376.82a6.41 6.41 0 01-4.53-10.94L365.9 55.05a6.41 6.41 0 019.06 0 6.41 6.41 0 010 9.06L64.11 374.95a6.381 6.381 0 01-4.53 1.87z"
      />
      <Path
        className="prefix__st0"
        d="M370.42 376.83c-1.64 0-3.28-.63-4.53-1.88L55.05 64.11a6.41 6.41 0 010-9.06 6.41 6.41 0 019.06 0L374.95 365.9a6.41 6.41 0 010 9.06 6.423 6.423 0 01-4.53 1.87z"
      />
    </Svg>
  );
}

export default Cancel;
