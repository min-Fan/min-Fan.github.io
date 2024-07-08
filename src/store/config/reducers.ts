
interface ReduxState {
	chainid: string,
	theme: string
}

const initData = {
	chainid: '',
	theme: 'light'
}

const config_reducer = (state: ReduxState = initData, action: any) => {
	switch (action.type) {
		case 'SET_CHAIN_ID':
			const newChain: ReduxState = {
				...state,
				chainid: action.chainid
			}
			return newChain;
		case 'SET_THEME':
			const newTheme: ReduxState = {
				...state,
				theme: action.theme
			}
			return newTheme;
		default:
			return state;
	}
};

export default config_reducer;