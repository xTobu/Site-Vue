<template>
    <div class="Login-container">
        <h1>Login-container</h1>
        <div style="width: 400px">
        <el-form :label-position="labelPosition" label-width="100px" :model="loginForm" ref="loginForm" :rules="rules">
            <el-form-item label="帳號" prop="username">
                <el-input  v-model="loginForm.username" ></el-input>
            </el-form-item>
            <el-form-item label="密碼" prop="password">
                <el-input  v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')" :loading="loginForm.submiting">登入</el-button>
                <el-button @click="resetForm('loginForm')">Reset</el-button>
				<el-button @click="get()">axios_get</el-button>
            </el-form-item>
        </el-form>
        </div>
		<!-- {{this.$store.state.auth.token}} -->
    </div>
</template>

<script>
// import { Select, Button } from 'element-ui';
import axios from 'axios';
export default {
	data() {
		return {
			labelPosition: 'right',
			loginForm: {
				username: '',
				password: '',
				submiting: false,
			},
			rules: {
				username: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
				password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }],
			},
		};
	},
	mounted() {
		this.loginForm.username = 'admin';
		this.loginForm.password = '0000';
	},
	created() {
		// this.loginForm.username = 'admin';
		// this.loginForm.password = '0000';
	},
	methods: {
		submitForm(formName) {
			//判斷
			this.$refs[formName].validate(valid => {
				//判斷資料是否正確
				if (valid) {
					// alert('submit!');
					this.loginForm.submiting = true;
					this.$store
						.dispatch('login', {
							username: this.loginForm.username,
							password: this.loginForm.password,
						})
						.then(res => {
							if (!res.status) {
								// 儲存與跳轉
								const claims = res.token.split('.')[1];
								const claims_obj = JSON.parse(atob(claims));

								this.$store.state.auth.token = res.token;
								this.$store.state.auth.user_id = claims_obj.UserID;
								this.$store.state.auth.user_weight = claims_obj.UserWeight;

								axios.defaults.headers.common['Authorization'] = `Bearer ${
									res.token
								}`;
								setTimeout(() => {
									this.loginForm.submiting = false;
									// this.$router.push({ path: 'Index' });
								}, 1000);
							} else {
								console.log(res);
								this.$alert('密碼錯誤', '提示', {
									confirmButtonText: '確認',
									callback: action => {
										this.loginForm.submiting = false;
									},
								});
							}
						});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
			//console.log(this.$store.state.auth);
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		get() {
			// console.log('Authorization：',axios.defaults.headers.common.Authorization);
			axios
				.get('http://localhost:8080/api/get')
				.then(function(response) {
					console.log(response.data);
				})
				.catch(function(error) {
					console.log(error.response);
				});
		},
	},
};
</script>

<style lang="scss">

</style>
