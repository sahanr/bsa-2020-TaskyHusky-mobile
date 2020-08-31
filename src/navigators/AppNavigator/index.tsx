import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../../pages/Login';

const AppNavigator = createAppContainer(
	createSwitchNavigator(
		{
			Login,
		},
		{
			initialRouteName: 'Login',
		},
	),
);

export default AppNavigator;
