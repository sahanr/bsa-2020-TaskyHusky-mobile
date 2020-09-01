import { AnyAction } from 'redux';

export const createAction = <A = {}>(type: string) => (args: A): AnyAction & A => ({
	type,
	...args,
});
