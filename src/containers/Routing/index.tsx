import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../navigators/AppNavigator';
import { navigationRef } from '../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../redux/rootState';

const Routing: React.FC = () => {
	const dispatch = useDispatch();
	const authState = useSelector((state: RootState) => state.auth);

	useEffect(() => {}, [authState.profileLoaded, dispatch]);

	return (
		<NavigationContainer>
			<AppNavigator ref={navigationRef} />
		</NavigationContainer>
	);
};

export default Routing;
