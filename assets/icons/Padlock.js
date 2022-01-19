import * as React from "react";
import Svg, { Defs, G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Padlock = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={23.181}
        {...props}
    >
        <Defs></Defs>
        <G transform="translate(.5 .5)">
            <Path
                className="a"
                d="M20 13.181v4.994a4.005 4.005 0 0 1-4.006 4.006H4.006A4.005 4.005 0 0 1 0 18.175v-4.994M0 9.327a4.005 4.005 0 0 1 4.006-4.005h11.988A4.005 4.005 0 0 1 20 9.327"
            />
            <Circle
                className="a"
                cx={2.013}
                cy={2.013}
                r={2.013}
                transform="translate(7.987 10.166)"
            />
            <Path
                className="a"
                d="M5.421 4.581a4.579 4.579 0 0 1 9.158 0M10 14.192v2.304"
            />
        </G>
    </Svg>
);

export default Padlock;
