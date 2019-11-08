import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import './styles';

configure(require.context('../src', true, /\.stories\.tsx$/), module);

addDecorator(StoryRouter());
