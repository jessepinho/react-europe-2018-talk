// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import * as Styles from './presentation.styles'

require('./vendor/reset.css');

const clueLogo = require('./images/clue.svg');
const gitHubLogo = require('./images/github.svg');
const storybookLogo = require('./images/storybook.svg');
// eslint-disable-next-line import/no-webpack-loader-syntax
const storybookExample = require("!raw-loader!./storybook.example.js")

const theme = createTheme(
  {
    primary: '#e43939',
    secondary: '#fff',
    tertiary: '#a3d1db',
  },
  {
    primary: { name: 'Fira Sans', googleFont: true, styles: [100, '100i', 200, 400, '400i', 700] },
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Styles.Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Screenshot testing
          </Styles.Heading>
          <Styles.Subhead size={4} lineHeight={1} textColor="secondary">
            with <Styles.SubheadEmphasis>React</Styles.SubheadEmphasis> &amp; <Styles.SubheadEmphasis>Storybook</Styles.SubheadEmphasis>
          </Styles.Subhead>
          <Text margin="100px 0 0" textColor="tertiary" size={1}>
            Jesse Pinho
            <Image margin="20px auto 0" src={clueLogo} width={137} />
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={storybookLogo} fit />
          <Text margin="100px 0 0" textColor="tertiary" size={1}>
            storybook.js.org
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="0 0 40px" textColor="tertiary" size={1}>
            stories/index.js
          </Text>
          <CodePane
            lang="jsx"
            source={storybookExample}
            theme="light"
            fit
            textSize="20px"
          />
        </Slide>
        <Slide bgColor="primary">
          <Image src={gitHubLogo} margin="0 auto 40px" width={250} />
          <Styles.HeadingLight size={1} fit lineHeight={1} textColor="secondary">
            tsuyoshiwada/storybook-chrome-screenshot
          </Styles.HeadingLight>
        </Slide>
      </Deck>
    );
  }
}
