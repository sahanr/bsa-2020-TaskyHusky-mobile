import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../../pages/Login';
import Projects from '../../pages/Projects';

const AppNavigator = createAppContainer(
	createSwitchNavigator(
		{
			Login,
			Projects,
		},
		{
			initialRouteName: 'Projects',
		},
	),
);

export default AppNavigator;
