import * as React from "react";
import Svg, { Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const MailIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={16} {...props}>
        <Defs></Defs>
        <Path
            className="a"
            d="M20.5 4.5v6.994a4.005 4.005 0 0 1-4.006 4.006H4.506A4.005 4.005 0 0 1 .5 11.494V4.5"
        />
        <Path className="a" d="M5.675.5H18.6L10.388 9 2.18.5Z" />
    </Svg>
);

export default MailIcon;
