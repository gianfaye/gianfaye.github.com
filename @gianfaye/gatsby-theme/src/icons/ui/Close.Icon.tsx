import React from "react";

import { Icon } from '@types';

const CloseIcon: Icon = ({ fill = "white" }) => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" space="preserve">
<g>
	<line fill="none" stroke={fill} strokeWidth="3" strokeMiterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"/>
</g>
    <g>
	<line fill="none" stroke={fill} strokeWidth="3" strokeMiterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"/>
</g>
</svg>
);

export default CloseIcon;
