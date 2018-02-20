export default {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	},
	Change(state,payload){
		state.student = payload.student;
	}
};
