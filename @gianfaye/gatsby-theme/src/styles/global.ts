import { css } from "@emotion/core";

export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  #___gatsby{
    overflow-x: hidden;
  }
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: "Voyager Grotesque";
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/vger-regular.eot');
    src: url('/fonts/vger-regular.eot') format('embedded-opentype'),
         url('/fonts/vger-regular.woff2') format('woff2'),
         url('/fonts/vger-regular.woff') format('woff'),
         url('/fonts/vger-regular.ttf') format('truetype'),
         url('/fonts/vger-regular.svg#vger-regular') format('svg');format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Voyager Grotesque";
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/vger-light.eot');
    src: url('/fonts/vger-light.eot') format('embedded-opentype'),
         url('/fonts/vger-light.woff2') format('woff2'),
         url('/fonts/vger-light.woff') format('woff'),
         url('/fonts/vger-light.ttf') format('truetype'),
         url('/fonts/vger-light.svg#vger-light') format('svg');format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Sentinel Book";
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/Sentinel-Book.eot') format('embedded-opentype'),
         url('/fonts/Sentinel-Book.woff2') format('woff2'),
         url('/fonts/Sentinel-Book.woff') format('woff'),
         url('/fonts/Sentinel-Book.ttf') format('truetype'),
         url('/fonts/Sentinel-Book.svg#Sentinel-Book') format('svg');format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Sentinel Italic";
    font-weight: 400;
    font-style: italic;
    src: url('/fonts/Sentinel-LightItalic.eot') format('embedded-opentype'),
         url('/fonts/Sentinel-LightItalic.woff2') format('woff2'),
         url('/fonts/Sentinel-LightItalic.woff') format('woff'),
         url('/fonts/Sentinel-LightItalic.ttf') format('truetype'),
         url('/fonts/Sentinel-LightItalic.svg#Sentinel-LightItalic') format('svg');format("woff");
    font-display: swap;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
    vertical-display: middle;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: "Sentinel Book", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: "Gotham", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type="number"] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }

  #navToolbar.sticky + div{
     margin-top: 190px;
  }

  @media (min-width: 1280px){
    .Image__Small figcaption{
      text-align: right;
      position: absolute;
      left: -205px;
      max-width: 180px;
      bottom: 20px;
    }
  }

`;
