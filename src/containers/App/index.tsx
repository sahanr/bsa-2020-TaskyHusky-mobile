import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import redux from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Routing from '../Routing';

const App: React.FC = () => {
	return (
		<ReduxProvider store={redux.store}>
			<PersistGate loading={null} persistor={redux.persistor}>
				<Routing />
			</PersistGate>
		</ReduxProvider>
	);
};

export default App;
