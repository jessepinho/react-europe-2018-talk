// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
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

const clueWhiteLogo = require('./images/clue-white.svg');
const clueRedLogo = require('./images/clue-red.svg');
const detectiveEmoji = require('./images/detective-emoji.png');
const gitHubLogo = require('./images/github.svg');
const regSuitLogo = require('./images/reg-suit.svg');
const regSuitReport = require('./images/reg-suit-report.png');
const storybookLogo = require('./images/storybook.svg');
// eslint-disable-next-line import/no-webpack-loader-syntax
const storybookExample = require("!raw-loader!./storybook.example");
// eslint-disable-next-line import/no-webpack-loader-syntax
const screenshotConfigExample = require("!raw-loader!./screenshot-config.example");
const screenshotSizes = ['320x568', '768x1024', '1024x768', '1280x800', '1440x900'];
const yogaEmoji = require('./images/yoga-emoji.png');

const theme = createTheme(
  {
    primary: '#e43939',
    secondary: '#fff',
    tertiary: '#a3d1db',
  },
  {
    primary: 'MrEavesClue',
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
          <Styles.Heading size={1} fit lineHeight={1} textColor="secondary">
            Screenshot testing
          </Styles.Heading>
          <Styles.Subhead size={4} lineHeight={1} textColor="secondary">
            with <Styles.SubheadEmphasis>React</Styles.SubheadEmphasis> &amp; <Styles.SubheadEmphasis>Storybook</Styles.SubheadEmphasis>
          </Styles.Subhead>
          <Image margin="200px auto 0" src={clueWhiteLogo} width={200} />
          <Styles.HeadingLight margin="20px 0 0" textColor="secondary" size={1} textSize="32px">
            <Styles.RegularItalic>Jesse Pinho</Styles.RegularItalic>
            {" "}• Senior Frontend Engineer for helloclue.com
          </Styles.HeadingLight>
        </Slide>

        <Slide bgColor="primary">
          <Styles.Subhead size={1} fit lineHeight={1} textColor="secondary" margin="0 auto 100px">
            The <Styles.SubheadEmphasis>case</Styles.SubheadEmphasis> <br />
            of the <Styles.SubheadEmphasis>missing checkbox</Styles.SubheadEmphasis>
          </Styles.Subhead>
          <Image fit src={detectiveEmoji} />
        </Slide>

        <Slide bgColor="primary">
          <Image src={storybookLogo} fit />
          <Styles.HeadingLight textSize="72px" lineHeight={1} textColor="secondary">
            storybook.js.org
          </Styles.HeadingLight>
        </Slide>

        <Slide bgColor="secondary">
          <Text textSize="48px" margin="0 0 40px" textColor="primary" size={1}>
            <Styles.RegularItalic>stories/index.js</Styles.RegularItalic>
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
          <Styles.HeadingLight textSize="72px" lineHeight={1} textColor="secondary">
            storybook-chrome-screenshot
          </Styles.HeadingLight>
        </Slide>

        <Slide bgColor="secondary">
          <Text textSize="48px" margin="0 0 40px" textColor="primary" size={1}>
            <Styles.RegularItalic>stories/index.js</Styles.RegularItalic>
          </Text>
          <CodePane
            lang="jsx"
            source={screenshotConfigExample}
            theme="light"
            fit
            textSize="20px"
          />
        </Slide>

        <Slide bgColor="secondary">
          <Layout>
            {screenshotSizes.map(screenshot => (
              <Fill key={screenshot}>
                <Text textSize="24px">{screenshot}</Text>
                <Image src={require(`./images/screenshots/${screenshot}.png`)} fit />
              </Fill>
            ))}
          </Layout>
        </Slide>

        <Slide bgColor="primary">
          <Image src={regSuitLogo} margin="0 auto 40px" height="250px" />
          <Styles.HeadingLight textSize="72px" lineHeight={1} textColor="secondary">
            <img src={gitHubLogo} height="48px" /> reg-viz/reg-suit
          </Styles.HeadingLight>
        </Slide>

        <Slide bgColor="secondary">
          <Layout>
            <Fill><Text textSize="24px">Before</Text></Fill>
            <Fill><Text textSize="24px">After</Text></Fill>
            <Fill><Text textSize="24px">Diff</Text></Fill>
          </Layout>
          <Image src={regSuitReport} />
        </Slide>

        <Slide bgColor="primary">
          <Image src={regSuitLogo} margin="0 auto 40px" height="250px" />
          <Styles.HeadingLight textSize="72px" lineHeight={1} textColor="secondary">
            <img src={gitHubLogo} height="48px" /> reg-viz/reg-suit
          </Styles.HeadingLight>
        </Slide>

        <Slide bgColor="primary">
          <Image fit src={yogaEmoji} />
        </Slide>

        <Slide bgColor="secondary">
          <Styles.Heading size={1} fit lineHeight={1} textColor="primary">
            Now you know.
          </Styles.Heading>
          <Styles.HeadingLight textColor="primary" textSize="48px">
            bit.ly/screenshot-testing &bull; <Styles.RegularItalic>@jessepinho</Styles.RegularItalic>
          </Styles.HeadingLight>
          <Image src={clueRedLogo} width="274px" margin="200px auto 0" />
          <Text margin="40px 0 0" textColor="primary">
            <Styles.RegularItalic>www.helloclue.com</Styles.RegularItalic>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
