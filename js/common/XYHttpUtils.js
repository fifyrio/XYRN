/**
 * Created by wuw on 2017/7/3.
 */

export default class XYHttpUtils{
  static GET(url){
    return new Promise((resolve, reject)=>{
      fetch(url)
          .then(response=>response.json())
          .then(result=>{
            resolve(result);
          })
          .catch(error=>{
            reject(error);
          })
    })
  }

  static POST(url,params){
    return new Promise((resolve, reject)=>{
      fetch(
          url,
          {
            method:'POST',
            header:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify(params)
          }
      )
          .then(response=>response.json())
          .then(result=>{
            resolve(result);
          })
          .catch(error=>{
            reject(error);
          })
    })
  }
}