import axios from 'axios';
class HttpRequest {
    constructor(baseUrl = baseUrl) {
        this.baseUrl = baseUrl; // 配置基础 url
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json' // 配置 header
            }
        }
        return config
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        });
        // 响应拦截
        instance.interceptors.response.use(res => {
            const { data, status } = res;
            return { data, status }
        }, error => {
            return Promise.reject(error);
        })
    }
    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default HttpRequest;