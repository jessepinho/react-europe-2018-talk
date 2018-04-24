import { injectGlobal } from 'emotion';

injectGlobal`
/**
 * Available styles (all are also available in italic):
 * - Thin
 * - Light
 * - Regular
 * - Book
 * - Bold
 * - Heavy
 *
 * Weight name mapping taken from
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
 */

@font-face {
  font-family: MrEavesClue;
  font-weight: 100;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-Thin.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-style: italic;
  font-weight: 100;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-ThinItalic.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-weight: 300;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-Light.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-style: italic;
  font-weight: 300;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-LightItalic.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-Reg.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-style: italic;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-RegItalic.woff")}") format("woff");
}

/* TODO: 500 is actually lighter than regular (400) for MrEavesClue! Figure out a better way to represent this. */
@font-face {
  font-family: MrEavesClue;
  font-weight: 500;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-Book.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-style: italic;
  font-weight: 500;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-BookItalic.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-weight: bold; /* or, 700 */
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-Bold.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-weight: bold; /* or, 700 */
  font-style: italic;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-BoldItalic.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-weight: 900;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-Heavy.woff")}") format("woff");
}

@font-face {
  font-family: MrEavesClue;
  font-style: italic;
  font-weight: 900;
  src: url("${require("./fonts/MrEavesClue/MrEavesClue-HeavyItalic.woff")}") format("woff");
}
`;
