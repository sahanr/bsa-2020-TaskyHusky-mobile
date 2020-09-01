import React from 'react';

export const navigationRef = React.createRef<any>();

export default function globalNavigate(name: string, params?: any) {
	return navigationRef.current?.navigate(name, params);
}
