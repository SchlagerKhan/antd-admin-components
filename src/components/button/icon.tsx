import React from 'react';

import { LoadingButton } from './button';

export const TrashButton = (props) => <LoadingButton type='danger' icon='delete' {...props} />;

export const ReloadButton = (props) => <LoadingButton type='primary' icon='reload' {...props} />;

export const EditButton = (props) => <LoadingButton type='primary' icon='edit' {...props} />;
