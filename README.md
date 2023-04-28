# storage3

storage3: cookie,local,session  

----------------

example:
```js
import storage from 'storage3'


// If env is 'production', defaultStorageType is'cookie',  otherwise it's 'local'
// set
storage().setItem('token',token) 
// get
storage().getItem('token')


// You can clearly specify:
// set
storage('session').setItem('tempData',tempData) 
// get
storage('session').getItem('tempData') 

// set
storage('local').setItem('userInfo',userInfo) 
// get
storage('local').getItem('userInfo') 


// set
storage('cookie').setItem('someKey',someValue) 
// get
storage('cookie').getItem('someKey') 


// set
storage('cookie').setItem('someKey2',someValue2, jsCookieOptions) 
// get
storage('cookie').getItem('someKey2',jsCookieOptions) 
```
