import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../../components/LoginForm';

const LoginPage: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Log in to TaskyHusky</Text>
			<LoginForm onSubmit={(data) => console.log(data)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: 'center',
	},
});

export default LoginPage;
