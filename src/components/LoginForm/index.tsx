import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import EmailInput from '../common/Input/EmailInput';
import PasswordInput from '../common/Input/PasswordInput';
import { LogIn } from '../../containers/LoginPage/logic/actionTypes';

interface Props {
	onSubmit?: (data: LogIn) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit = () => {} }) => {
	const [email, setEmail] = useState<string>('');
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
	const [password, setPassword] = useState<string>('');
	const allFields = email && password;
	const allValid = isEmailValid;
	const buttonActive = allFields && allValid;

	const submit = () => {
		if (buttonActive) {
			const data = { email, password };
			onSubmit(data);
		}
	};

	return (
		<>
			<EmailInput
				style={styles.input}
				value={email}
				placeholder="Enter your email"
				isValid={isEmailValid}
				onChange={setEmail}
				onChangeValid={setIsEmailValid}
			/>
			<PasswordInput
				style={styles.input}
				value={password}
				placeholder="Enter your password"
				onChange={setPassword}
			/>
			<View style={styles.mTop} />
			<Button color="#FECE2F" title="Log in" onPress={submit} disabled={!buttonActive} />
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		width: '80%',
	},
	mTop: {
		marginTop: 10,
	},
});

export default LoginForm;
