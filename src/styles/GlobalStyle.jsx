import {createGlobalStyle, keyframes} from "styled-components";
import helveticaLight from './../assets/fonts/HelveticaNeueThin.woff';
import helveticaRegular from './../assets/fonts/HelveticaNeueRoman.woff';
import helveticaMedium from './../assets/fonts/HelveticaNeueMedium.woff';
import helveticaBold from './../assets/fonts/HelveticaNeueBold.woff';
import pretendardLight from './../assets/fonts/Pretendard-Light.subset.woff';
import pretendardRegular from './../assets/fonts/Pretendard-Regular.subset.woff';
import pretendardMedium from './../assets/fonts/Pretendard-Medium.subset.woff';
import pretendardSemiBold from './../assets/fonts/Pretendard-SemiBold.subset.woff';
import pretendardBold from './../assets/fonts/Pretendard-Bold.subset.woff';
import { MOBILE_WIDTH, TABLET_WIDTH } from "../constants";

const AniChangePage = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  /* 한글 */
  @font-face {
    font-family: 'pretendard';
    font-weight: 300;
    src: url(${pretendardLight}) format('woff');
  }

  @font-face {
    font-family: 'pretendard';
    font-weight: 400;
    src: url(${pretendardRegular}) format('woff');
  }

  @font-face {
    font-family: 'pretendard';
    font-weight: 500;
    src: url(${pretendardMedium}) format('woff');
  }

  @font-face {
    font-family: 'pretendard';
    font-weight: 600;
    src: url(${pretendardSemiBold}) format('woff');
  }

  @font-face {
    font-family: 'pretendard';
    font-weight: 700;
    src: url(${pretendardBold}) format('woff');
  }

  /* 영문, 숫자 */
  @font-face {
    font-family: 'helvetica';
    font-weight: 300;
    src: url(${helveticaLight}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: 'helvetica';
    font-weight: 400;
    src: url(${helveticaRegular}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: 'helvetica';
    font-weight: 500;
    src: url(${helveticaMedium}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: 'helvetica';
    font-weight: 700;
    src: url(${helveticaBold}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  /* ================================ reset ================================ */
  /*! normalize.css v3.0.2 | MIT License | git.io/normalize */

  /**
  * 1. Set default font family to sans-serif.
  * 2. Prevent iOS text size adjust after orientation change, without disabling
  *    user zoom.
  */

  html {
    height: auto;
    font-family: sans-serif; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
    line-height: 1;

    // firefox 
    scrollbar-width: thin;
    scrollbar-color: var(--white1) var(--black3);

    // webkit
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--white1);
      border-radius: 10px;
    }
  }

  /**
  * Remove default margin.
  */

  body {
    margin: 0;
  }

  /* HTML5 display definitions
  ========================================================================== */

  /**
  * Correct 'block' display not defined for any HTML5 element in IE 8/9.
  * Correct 'block' display not defined for 'details' or 'summary' in IE 10/11
  * and Firefox.
  * Correct 'block' display not defined for 'main' in IE 11.
  */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
    box-sizing: border-box;
  }

  /**
  * 1. Correct 'inline-block' display not defined in IE 8/9.
  * 2. Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera.
  */

  audio,
  canvas,
  progress,
  video {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  /**
  * Prevent modern browsers from displaying 'audio' without controls.
  * Remove excess height in iOS 5 devices.
  */

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /**
  * Address '[hidden]' styling not present in IE 8/9/10.
  * Hide the 'template' element in IE 8/9/11, Safari, and Firefox < 22.
  */

  [hidden],
  template {
    display: none;
  }

  /* Links
  ========================================================================== */

  /**
  * Remove the gray background color from active links in IE 10.
  */

  a {
    background-color: transparent;
  }

  /**
  * Improve readability when focused and also mouse hovered in all browsers.
  */

  a:active,
  a:hover {
    outline: 0;
  }

  /* Text-level semantics
  ========================================================================== */

  /**
  * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
  */

  abbr[title] {
    border-bottom: 1px dotted;
  }

  /**
  * Address style set to 'bolder' in Firefox 4+, Safari, and Chrome.
  */

  b,
  strong {
    font-weight: bold;
  }

  /**
  * Address styling not present in Safari and Chrome.
  */

  dfn {
    font-style: italic;
  }

  /**
  * Address variable 'h1' font-size and margin within 'section' and 'article'
  * contexts in Firefox 4+, Safari, and Chrome.
  */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /**
  * Address styling not present in IE 8/9.
  */

  mark {
    background: #ff0;
    color: #000;
  }

  /**
  * Address inconsistent and variable font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  * Prevent 'sub' and 'sup' affecting 'line-height' in all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  /* Embedded content
  ========================================================================== */

  /**
  * Remove border when inside 'a' element in IE 8/9/10.
  */

  img {
    border: 0;
  }

  /**
  * Correct overflow not hidden in IE 9/10/11.
  */

  svg:not(:root) {
    overflow: hidden;
  }

  /* Grouping content
  ========================================================================== */

  /**
  * Address margin not present in IE 8/9 and Safari.
  */

  figure {
    margin: 1em 40px;
  }

  /**
  * Address differences between Firefox and other browsers.
  */

  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }

  /**
  * Contain overflow in all browsers.
  */

  pre {
    overflow: auto;
  }

  /**
  * Address odd 'em'-unit font size rendering in all browsers.
  */

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /* Forms
  ========================================================================== */

  /**
  * Known limitation: by default, Chrome and Safari on OS X allow very limited
  * styling of 'select', unless a 'border' property is set.
  */

  /**
  * 1. Correct color not being inherited.
  *    Known issue: affects color of disabled elements.
  * 2. Correct font properties not being inherited.
  * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit; /* 1 */
    font: inherit; /* 2 */
    margin: 0; /* 3 */
  }

  /**
  * Address 'overflow' set to 'hidden' in IE 8/9/10/11.
  */

  button {
    overflow: visible;
  }

  /**
  * Address inconsistent 'text-transform' inheritance for 'button' and 'select'.
  * All other form control elements do not inherit 'text-transform' values.
  * Correct 'button' style inheritance in Firefox, IE 8/9/10/11, and Opera.
  * Correct 'select' style inheritance in Firefox.
  */

  button,
  select {
    text-transform: none;
  }

  /**
  * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
  *    and 'video' controls.
  * 2. Correct inability to style clickable 'input' types in iOS.
  * 3. Improve usability and consistency of cursor style between image-type
  *    'input' and others.
  */

  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
  }

  /**
  * Re-set default cursor for disabled elements.
  */

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  /**
  * Remove inner padding and border in Firefox 4+.
  */

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /**
  * Address Firefox 4+ setting 'line-height' on 'input' using '!important' in
  * the UA stylesheet.
  */

  input {
    line-height: normal;
  }

  /**
  * It's recommended that you don't attempt to style these elements.
  * Firefox's implementation doesn't respect box-sizing, padding, or width.
  *
  * 1. Address box sizing set to 'content-box' in IE 8/9/10.
  * 2. Remove excess padding in IE 8/9/10.
  */

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Fix the cursor style for Chrome's increment/decrement buttons. For certain
  * 'font-size' values of the 'input', it causes the cursor style of the
  * decrement button to change from 'default' to 'text'.
  */

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /**
  * 1. Address 'appearance' set to 'searchfield' in Safari and Chrome.
  * 2. Address 'box-sizing' set to 'border-box' in Safari and Chrome
  *    (include '-moz' to future-proof).
  */

  input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
  }

  /**
  * Remove inner padding and search cancel button in Safari and Chrome on OS X.
  * Safari (but not Chrome) clips the cancel button when the search input has
  * padding (and 'textfield' appearance).
  */

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * Define consistent border, margin, and padding.
  */

  fieldset {
    margin: 0;
    padding: 0;
    outline: 0 none;
    border: none;
  }

  /**
  * 1. Correct 'color' not being inherited in IE 8/9/10/11.
  * 2. Remove padding so people aren't caught out if they zero out fieldsets.
  */

  legend {
    border: 0; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Remove default vertical scrollbar in IE 8/9/10/11.
  */

  textarea {
    overflow: auto;
  }

  /**
  * Don't inherit the 'font-weight' (applied by a rule above).
  * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
  */

  optgroup {
    font-weight: bold;
  }

  /* Tables
  ========================================================================== */

  /**
  * Remove most spacing between table cells.
  */

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  td,
  th {
    padding: 0;
  }

  legend {
    visibility: hidden;
    position: absolute;
    left: -9999px;
    top: -9999px;
    width: 0;
    height: 0;
    line-height: 0;
  }

  /**
  * iv reset 
  */
  /* position: sticky 사용 위해 body, #wrap에 overflow-y hidden 부여 금지 */

  html {
    overflow-x: auto;
    font-size: 62.5%; /* font-size 1rem = 10px ex 16px -> 1.6rem */
  }

  @media screen and (min-width: 0 \0) {
    /* IE 9, IE 10, IE 11 */
    :root,
    html {
      font-size: 10px;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    /* IE 10, IE 11 */
    :root,
    html {
      font-size: 10px;
    }
  }

  html body {
    font: inherit;
    width: 100%;
  }

  html, body, div, p, span, strong, b, em, iframe, pre, h1, h2, h3, h4, h5, h6,
  img, dl, dt, dd, fieldset, form, legend, label, table, caption, thead, tbody, tfoot, tr, th, td,
  ul, ol, li, a, input, select, textarea, button {
    margin: 0;
    padding: 0;
    line-height: var(--lh_min, 1);
    font-family: var(--ff_eng), var(--ff_kor), "Malgun Gothic", "맑은 고딕", sans-serif;
    font-weight: var(--fw_base, --fw_400, 400);
    letter-spacing: var(--ls_base);
    color: var(--white1, #fff);
    box-sizing: border-box;
  }

  div, p, span, strong, b, em, iframe, pre, h1, h2, h3, h4, h5, h6,
  img, dl, dt, dd, fieldset, form, legend, label, table, caption, thead, tbody, tfoot, tr, th, td,
  ul, ol, li, a, input, select, textarea, button {
    font-size: 1.6rem;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    display: inline-block;
    color: inherit;
    line-height: inherit;
    font-size: inherit;
    text-decoration: none;
    font-weight: inherit;
  }

  a:hover, a:focus, a:active {
    text-decoration: none;
  }

  em, address, i, span, label {
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  address {
    font-style: normal;
  }

  b, strong {
    font-weight: var(--fw_bold, --fw_700, 700);
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }

  img {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    line-height: 0;
    border: 0 none;
    font-size: 0;
  }

  input, select {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0 none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    line-height: inherit;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    outline: 0 none;
  }

  button, input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled], input[disabled] {
    cursor: default;
  }

  textarea {
    outline: 0 none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    overflow: hidden;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
  }

  th, td {
    vertical-align: middle;
  }

  input[type=number], input[type=password], input[type=tel], input[type=text], textarea {
    font-family: var(--ff_eng), var(--ff_kor), "Malgun Gothic", "맑은 고딕", sans-serif;
    font-weight: var(--fw_base, --fw_400, 400);
  }

  label {
    display: inline-block;
    cursor: pointer;
  }

  html {
    /* main color */
    --main1: #d6e2ff;
    --main2: #4c7eff;

    /* black color */
    --black1: #272727; /* 해당 디자인 메인 검정 */
    --black2: #1c1c1c;
    --black3: #2f2f2f; /* input 배경색 */

    /* gray color */
    --gray1: #545454; /* 해당 디자인 메인 회색 */
    --gray2: #c9c9c9; /* 해당 디자인 회색2 */
    --gray3: #383838; 
    --gray4: #a0a0a0;
    --gray5: #666;

    /* white color */
    --white1: #fff; /* 해당 디자인 메인 흰색 */

    /* font-weight */
    --fw_thin: var(--fw_300); /* 해당 디자인 상 얇은 굵기 */
    --fw_base: var(--fw_400); /* 해당 디자인 상 기본 굵기 */
    --fw_medium: var(--fw_500); /* 해당 디자인 상 중간 굵기 */
    --fw_sbold: var(--fw_600); /* 해당 디자인 상 굵은 굵기 */
    --fw_bold: var(--fw_700); /* 해당 디자인 상 굵은 굵기 */
    --fw_bolder: var(--fw_900); /* 해당 디자인 상 가장 굵은 굵기 */

    --fw_300: 300;
    --fw_400: 400;
    --fw_500: 500;
    --fw_600: 600;
    --fw_700: 700;
    --fw_900: 900;

    /* font-family */
    --ff_kor: 'pretendard'; /* 한글 폰트*/
    --ff_eng: 'helvetica'; /* 영문, 숫자 폰트 */

    /* line height */
    --lh_min: 1; /* 최소 line-height 값 */
    --lh_base: 1.25; /* 기본 line-height 값 */
    --lh_wide: 1.5; /* 줄간격 너비 넓은 경우 */

    /* letter spacing */
    --ls_base: 0;
    --ls_narrow: -0.02em;
    --ls_wide: 0.01em;

    --logo_w: url("iv_logo.svg");

    --header: 92px;
    --header_index: 20000;
    --navbar_index: 10000;
    --footer: 218px;

    --trans_time: 0.3s;
  }

  /* ================================ //reset ================================ */

  /* ================================ common ================================ */
  #root {
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
  }
  
  body {
    background-color: var(--black1);
  }

  section {
    margin-top: var(--header);
    opacity: 0;
    animation: ${AniChangePage} 0.5s forwards;
    animation-delay: 0.3s;
  }

  .swiper-container {
    overflow: hidden;
  }

  /* 요소 감춤 */
  .displaynone {
    display: none !important;
  }

  .layout-hidden {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 0 !important;
    height: 0 !important;
    min-width: initial !important;
    min-height: initial !important;
    overflow: hidden !important;
    opacity: 0 !important;
    font-size: 0 !important;
    line-height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
  }

  .require {
    color: var(--main2);
    font-style: normal;
  }

  .floating_wrapper{
    position: relative;
  }

  /* ================================ //common ================================ */

  @media screen and (max-width: 1600px) {
    html {
      font-size: 56.25%; // 9px
      --footer: 210px;
    }
  }

  @media screen and (max-width: 1366px) {
    html {
      font-size: 50%; // 8px
      --footer: 201px;
    }
  }

  @media screen and (max-width: ${TABLET_WIDTH}px) {
    html {
      word-break: keep-all;
    }
  }
  
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    html {
      font-size: 62.5%;
      --header: 48px;
      --footer: 254px;
    }
  }
`;

export function setScreenHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default GlobalStyle;
