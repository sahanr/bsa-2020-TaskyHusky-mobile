import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from './logic/actions';
import { useNavigation } from 'react-navigation-hooks';
import RootState from '../../redux/rootState';

const LoginPage: React.FC = () => {
	const dispatch = useDispatch();
	const { navigate } = useNavigation();
	const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

	useEffect(() => {
		if (isAuthorized) {
			navigate('Projects');
		}
	}, [isAuthorized, navigate]);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Log in to TaskyHusky</Text>
			<LoginForm onSubmit={(data) => dispatch(logInUser(data))} />
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
