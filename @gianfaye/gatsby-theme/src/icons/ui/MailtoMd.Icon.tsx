import React from "react";

import { Icon } from '@types';

const MailtoIcon: Icon = ({ fill = "white" }) => (
  // <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
  //   <g>
  //     <rect x="1" y="13" fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" width="62" height="37"/>
  //     <polyline fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" points="1,13 32,33 63,13 	"/>
  //   </g>
  // </svg>
  <svg
    width="28"
    height="28"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
      fill={fill}
    />
  </svg>
);

export default MailtoIcon;
