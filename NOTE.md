# Note
> 記錄學習過程的大小事  
___

## 2018-03-08
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
