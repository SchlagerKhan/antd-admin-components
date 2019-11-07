import { configure } from '@storybook/react';

import './styles';

configure(require.context('../src', true, /\.stories\.tsx$/), module);
