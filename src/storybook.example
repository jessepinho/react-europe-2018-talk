import { storiesOf } from '@storybook/react'
import React from 'react'

import Foo from './foo'

storiesOf('Foo', module)
  .add('loaded', () => <Foo isLoading={false} hasError={false} />)
  .add('loading', () => <Foo isLoading={true} hasError={false} />)
  .add('error', () => <Foo isLoading={false} hasError={true} />)
