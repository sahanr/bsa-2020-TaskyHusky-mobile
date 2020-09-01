import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../redux/rootState';
import { loadProfile } from '../LoginPage/logic/actions';
import SpinnerPage from '../SpinnerPage';

interface Props {
	children: JSX.Element;
}

const DefaultPageWrapper: React.FC<Props> = ({ children }) => {
	const dispatch = useDispatch();
	const { profileLoaded } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (!profileLoaded) {
			dispatch(loadProfile());
		}
	}, [profileLoaded, dispatch]);

	if (!profileLoaded) {
		return <SpinnerPage />;
	}

	return children;
};

export default DefaultPageWrapper;
