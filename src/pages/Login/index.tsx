import React from 'react';
import LoginPage from '../../containers/LoginPage';
import DefaultPageWrapper from '../../containers/DefaultPageWrapper';

const Login: React.FC = () => {
	return (
		<DefaultPageWrapper>
			<LoginPage />
		</DefaultPageWrapper>
	);
};

export default Login;
