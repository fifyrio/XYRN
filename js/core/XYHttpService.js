/**
 * Created by wuw on 2017/9/8.
 */



export default class XYHttpService{

  //params must be maps.
  static request(method, url, params, hasToken){
    let paramsStr = '';
    if (method === 'POST'){
      let paramsObj = {};
      params.forEach((value, key) => {
        paramsObj[key] = value;
      });
      paramsStr = JSON.stringify(paramsObj);
    }else if (method === 'GET') {
      if (params.size){
        url = url + '?';
        let i = 0;
        params.forEach((value, key) => {
          if (i === params.size - 1){
            url = url.concat(key, '=', value)
          }else {
            url = url.concat(key, '=', value, '&')
          }
          i = i + 1;
        });
      }
    }
    return new Promise((resolve, reject)=>{
      fetch(url,
          {
            method: method,
            headers:{
              'User-Agent': 'XYHiRepairs/2.5.1 (iPhone; iOS 10.3.3; Scale/2.00)',//待定
              'Accept-Encoding': 'gzip, deflate',
              'Accept-Language': 'zh-Hans-CN;q=1',
              'Connection': 'keep-alive',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: paramsStr.length?paramsStr:''
          }
      )
          .then(response=>response.json())
          .then(result=>{
            resolve(JSON.stringify(result))
          })
          .catch(error=>{
            reject(JSON.stringify(error))
          })
    })
  }

  static get(url){
    return new Promise((resolve, reject) => {
      fetch(url,
          {
            method: 'GET',
            header:{
              'User-Agent': 'XYHiRepairs/2.5.1 (iPhone; iOS 10.3.3; Scale/2.00)',
              'Accept-Encoding': 'gzip, deflate',
              'Accept-Language': 'zh-Hans-CN;q=1',
              'Connection': 'keep-alive',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }
      )
          .then(response=>response.json())
          .then(result=>{
            resolve(JSON.stringify(result))
          })
          .catch(error=>{
            reject(JSON.stringify(error))
          })
    })
  }

  static post(url, params){
    return new Promise((resolve, reject)=>{
      fetch(url,
          {
            method: 'POST',
            header:{
              'User-Agent': 'XYHiRepairs/2.5.1 (iPhone; iOS 10.3.3; Scale/2.00)',
              'Accept-Encoding': 'gzip, deflate',
              'Accept-Language': 'zh-Hans-CN;q=1',
              'Connection': 'keep-alive',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
          }
      )
          .then(response=>response.json())
          .then(result=>{
            resolve(JSON.stringify(result))
          })
          .catch(error=>{
            reject(JSON.stringify(error))
          })
    })
  }
}
