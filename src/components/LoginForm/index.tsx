import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EmailInput from '../common/Input/EmailInput';
import PasswordInput from '../common/Input/PasswordInput';
import { LogIn } from '../../containers/LoginPage/logic/actionTypes';
import Button from '../common/Button';
import styles from '../common/Input/styles.module';

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
			<Button onPress={submit} disabled={!buttonActive} title="Log in" style={styles.button} />
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
	button: {
		backgroundColor: '#FECE2F',
	},
});

export default LoginForm;
