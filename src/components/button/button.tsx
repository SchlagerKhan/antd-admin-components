import React, { useState } from 'react';

import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export function LoadingButton(props: ButtonProps) {
	const [isLoading, setLoading] = useState(false);

	async function onClick(e) {
		setLoading(true);
		await props.onClick(e);
		setLoading(false);
	}

	const loading = props.loading || isLoading;
	const buttonProps = { ...props, loading, onClick };

	return <Button {...buttonProps} />;
}
