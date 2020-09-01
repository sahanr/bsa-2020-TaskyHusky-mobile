import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../../redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../navigators/AppNavigator';
import { initRef } from '../../navigation';

const App: React.FC = () => {
	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<AppNavigator ref={(ref) => initRef(ref)} />
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default App;
