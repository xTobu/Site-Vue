export default {
	Count: state => state.count,
	doubleCount: state => {
		return state.count * 2;
	},
	getterStudent: state => {
		return state.student;
	},
};
