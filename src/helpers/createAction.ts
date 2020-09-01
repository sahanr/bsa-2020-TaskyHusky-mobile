import { AnyAction } from 'redux';

export function createAction(type: string): () => AnyAction;
export function createAction<A>(type: string): (args: A) => AnyAction & A;
export function createAction<A>(type: string) {
	return (args?: A): AnyAction & A => Object.assign({ type }, args);
}
