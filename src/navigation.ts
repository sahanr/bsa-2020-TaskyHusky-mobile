import { NavigationContainerComponent, NavigationActions } from 'react-navigation';

let navigation: NavigationContainerComponent | null;

export const initRef = (ref: NavigationContainerComponent | null) => {
	navigation = ref;
};

export default function globalNavigate(name: string, params?: any) {
	if (navigation) {
		return navigation.dispatch(NavigationActions.navigate({ routeName: name, params }));
	}
}
