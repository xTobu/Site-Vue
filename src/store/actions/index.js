import axios from 'axios';
import qs from 'qs';
export default {
	increment({ commit }) {
		commit('increment', increment_console());
	},
	decrement(context) {
		context.commit('decrement');
	},

	// Promise
	//////////////////////////////////////
	actionA({ commit }) {
		return new Promise((resolve, reject) => {
			/* 送出GET */
			// axios
			// 	.get('https://junxiang.webgene.com.tw/api/Student/GetData')
			// 	.then(function(response) {
			// 		/* 成功拿到資料，然後... */
			// 		console.log(response.data);
			// 		commit('increment');

			//
			//https://segmentfault.com/q/1010000010806660/a-1020000010807674

			// 		resolve();
			// 	})
			// 	.catch(function(error) {
			// 		/* 失敗，發生錯誤，然後...*/
			// 	});

			// axios
			// 	.post(
			// 		'https://junxiang.webgene.com.tw/api/Student/Submit',
			// 		{
			//             name: 'Fred',
			//             email: 'Flintstone',
			//         },
			// 		{
			// 			headers: {
			// 				'Content-Type': 'application/x-www-form-urlencoded',
			// 			},
			// 		}
			// 	)
			// 	.then(function(response) {
			// 		console.log(response);
			// 	})
			// 	.catch(function(error) {
			// 		console.log(error);
			// 	});

			// axios({
			// 	method: 'post',
			//     url: 'https://junxiang.webgene.com.tw/api/Student/Submit',
			// 	data: {
			// 		name: 'Fred',
			// 		email: 'Flintstone',
			//     },
			//     headers: {
			//         'Content-Type': 'application/x-www-form-urlencoded',
			//     }
			// })
			// 	.then(function(response) {
			// 		console.log(response.data);
			// 	})
			// 	.catch(function(error) {
			// 		console.log(error);
			// 	});

			axios
				.post(
					'https://junxiang.webgene.com.tw/api/Student/Submit',
					qs.stringify({
						name: 'Fred',
						email: 'Fred',
					})
				)
				.then(function(response) {
					console.log(response.data);
					commit('increment');
					resolve();
				})
				.catch(function(error) {
					console.log(error);
				});
			// https://juejin.im/entry/58eaf351a22b9d0058a8e35c
			//https://segmentfault.com/q/1010000010806660/a-1020000010807674
		});
	},
	actionB({ dispatch, commit }) {
		return dispatch('actionA').then(() => {
			commit('increment');
		});
	},
	//async-await
	////////////////////////////////////////////

	async one({ commit }) {
		commit('increment', await one());
	},

	async two({ dispatch, commit }) {
		await dispatch('one');
		commit('increment', await two());

		await dispatch('one');
		commit('increment', await two());
	},

	async clickChange({commit }) {
		await one();

		const res = await axios.get('http://127.0.0.1:8000/vue');
		console.log('res : ',res.data);
		commit('Change', res.data);

		// const r = await axios.post(
		// 	'https://junxiang.webgene.com.tw/api/Student/Submit',
		// 	qs.stringify({
		// 		name: 'Fred',
		// 		email: 'Fred',
		// 	})
		// );
		// console.log('r : ',r.data);
		
		
		// await axiosGetData();
	},
};

var increment_console = () => {
	console.log('increment');
};

var one = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('one');
			resolve();
		}, 500);
	});
};

var two = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('two');
			resolve();
		}, 500);
	});

	// 必須有RETURN Promise
	// setTimeout(() => {
	// 	console.log('two');
	// }, 3000);
};

var axiosGetData = () => {
	return new Promise((resolve, reject) => {
		axios
			.get('http://localhost:8000/vue')
			.then(function(response) {
				console.log(response.data);
				resolve();
			})
			.catch(function(error) {
				console.log(error);
			});
	});
};