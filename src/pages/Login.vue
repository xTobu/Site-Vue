<template>
    <div class="Login-container">
        <h1>Login-container</h1>
        <div style="width: 400px">
        <el-form :label-position="labelPosition" label-width="100px" :model="loginForm" ref="loginForm" :rules="rules">
            <el-form-item label="帳號" prop="account">
                <el-input v-model="loginForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密碼" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登入</el-button>
                <el-button @click="resetForm('loginForm')">Reset</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script>
// import { Select, Button } from 'element-ui';
export default {
	data() {
		return {
			labelPosition: 'right',
			loginForm: {
				account: '',
				password: '',
			},
			rules: {
				account: [{ required: true, message: '請輸入帳號', trigger: 'blur' }],
				password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }],
			},
		};
	},
	methods: {
		submitForm(formName) {
            

            //判斷
			this.$refs[formName].validate(valid => {
				if (valid) {
                    //資料正確
                    alert('submit!');
                    
                    this.$store.state.auth.isLogin = true;

				} else {
					console.log('error submit!!');
					return false;
				}
            });
            console.log(this.$store.state.auth.isLogin)
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
	},
};
</script>

<style lang="scss">

</style>
