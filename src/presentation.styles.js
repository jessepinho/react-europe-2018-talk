import styled from 'react-emotion';
import { Heading as HeadingComponent } from 'spectacle';

export const Heading = styled(HeadingComponent)`
  font-weight: 400;
`

export const HeadingLight = styled(HeadingComponent)`
  font-weight: 200;
`

export const Subhead = styled(HeadingComponent)`
  font-style: italic;
  font-weight: 100;
`

export const SubheadEmphasis = styled('em')`
  font-weight: 400;
`
