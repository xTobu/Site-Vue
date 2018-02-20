export default {
	Count: state => state.count,
	doubleCount: state => {
		return state.count * 3;
	},
	getterStudent: state => {
		return state.student;
	},
};
