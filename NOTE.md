# Note
> 記錄學習過程的大小事  
___

##### 2018-03-08
### axios、qs.stringify、x-www-form-urlencoded
#### 當axios使用qs.stringify傳送Content-Type:application/x-www-form-urlencoded時
- axios.post
```
axios.post(
  'http://localhost:8080/auth/login',
  qs.stringify({
    username: payload.username,
    password: payload.password,
  })
)
```
- Data是兩個Form Data (DevTools -> Network)  
```
Form Data(2)  
　username: aa  
　password: bb  
```  

#### 另一種axios
- axios.post
```
 axios({
 	method: 'post',
     url: 'https://junxiang.webgene.com.tw/api/Student/Submit',
 	data: {
 		name: 'Fred',
 		email: 'Flintstone',
     },
 	headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
     }
 })
```
- 會是一個Form Data  
```
Form Data  
{username: 'aa', password: 'bb'}
```  
___

##### 2018-03-04
### router.beforeEach
#### next()的使用錯誤，MVVM觀念導正。
- 錯誤
> 若把next()放最後則必然會執行到，那便會跑兩個next()，沒辦法如期跳轉
```
if (
	to.matched.some(record => {
		if (record.name !== 'Login') {
			return true;
		}
	})
) {
	if (!store.state.auth.token) {
		console.log('token?', store.state.auth.token);
		next({ path: '/Login' });
	}
}

store.state.auth.token = false;
next();
```

- 正確
> 每一種可能都必須執行next()
```
if (
	to.matched.some(record => {
		//console.log(record.path);
		if (record.name !== 'Login') {
			return true;
		}
	})
) {
	if (!store.state.auth.token) {
		next({ path: '/Login' });
	}
	else{
		next();
	}
}
else {
	store.state.auth.token = false;
	next();
}
```

