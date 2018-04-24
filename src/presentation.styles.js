import styled from 'react-emotion';
import { Heading as HeadingComponent } from 'spectacle';
import './fonts.styles';

export const Heading = styled(HeadingComponent)`
  font-style: italic;
  font-weight: 400;
`

export const HeadingLight = styled(HeadingComponent)`
  font-weight: 300;
`

export const Subhead = styled(HeadingComponent)`
  font-style: italic;
  font-weight: 100;
`

export const SubheadEmphasis = styled('em')`
  font-weight: 400;
`

export const RegularItalic = styled('span')`
  font-style: italic;
  font-weight: 400;
`
