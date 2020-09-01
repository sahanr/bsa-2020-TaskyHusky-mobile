interface IHandlers<S> {
	[type: string]: (state: S, action: any) => S;
}

export const createReducer = <S>(initialState: S, handlers: IHandlers<S>) => (
	state: S = initialState,
	action: any,
): S => {
	if (Object.hasOwnProperty.call(handlers, action.type)) {
		return handlers[action.type](state, action);
	}

	return state;
};
