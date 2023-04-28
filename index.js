const Cookie = require('js-cookie')

let env = ''
try{
    env = process.env.NODE_ENV
}catch(e){
    console.log('no process.env.NODE_ENV for storage3 defaultType')
}

// set the default storage strategy here
const defaultStorageType = env=='production'? 'cookie':'local'

const storageDict = {
    'local':localStorage,
    'session':sessionStorage,
    'cookie':Cookie
}

const storage = (type=defaultStorageType) => ({
    setItem: (k,v,options) => {
        if(type=='cookie'){
            return Cookie.set(k,v,options)
        }else{
            return storageDict[type].setItem(k,v)
        }
    },
    getItem: (k,options) =>{
        if(type=='cookie'){
            return Cookie.get(k,options)
        }else{
            return storageDict[type].getItem(k)
        }
    }
})

module.exports = storage
