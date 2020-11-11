import axios from 'axios';
// axios.defaults.withCredentials=true;
axios.defaults.timeout = 60000;
/* axios.defaults.baseURL ='http://49.233.204.88:40001/'; 183.134.65.211:7004/qcds-sys/motorBrand/info*/
// axios.defaults.baseURL = 'http://www.itxiangmubao.com/index.php/index/';
// axios.defaults.baseURL = 'http://183.134.65.211:8923';
axios.defaults.baseURL = 'http://42.56.89.212:8050';

//http request 拦截器
	axios.interceptors.request.use(
	  config => {
		return config;
	  },
	  error => {
		return Promise.reject(err);
	  }
	);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}




/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}