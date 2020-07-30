import React from "react";

import { Icon } from '@types';

const MenuIcon: Icon = ({ fill = "white" }) => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="30px" height="30px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" space="preserve">
    <line fill="none" stroke={fill} strokeWidth="3" strokeMiterlimit="10" x1="12" y1="21" x2="52" y2="21"/>
    <line fill="none" stroke={fill} strokeWidth="3" strokeMiterlimit="10" x1="12" y1="34" x2="52" y2="34"/>
    <line fill="none" stroke={fill} strokeWidth="3" strokeMiterlimit="10" x1="12" y1="48" x2="52" y2="48"/>
  </svg>
);

export default MenuIcon;
