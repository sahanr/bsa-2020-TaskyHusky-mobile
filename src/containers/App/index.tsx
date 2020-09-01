import React from 'react';
import AppNavigator from '../../navigators/AppNavigator';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../redux/store';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default App;
