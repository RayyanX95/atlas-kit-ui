import React from 'react';
import Button from '@atlaskit/button';

import Tooltip from '@atlaskit/tooltip';

export default () => (
  <Tooltip content="Hello World" position="mouse">
    <Button>Hover Over Me</Button>
  </Tooltip>
);