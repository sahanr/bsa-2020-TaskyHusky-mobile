import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SpinnerPage: React.FC = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator color="#FECE2F" size="large" />
			<Text>Loading...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default SpinnerPage;
