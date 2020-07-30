import React from "react";

import { Icon } from '@types';

const MailtoIcon: Icon = ({ fill = "white" }) => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
    <g>
      <rect x="1" y="13" fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" width="62" height="37"/>
      <polyline fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" points="1,13 32,33 63,13 	"/>
    </g>
  </svg>
);

export default MailtoIcon;
