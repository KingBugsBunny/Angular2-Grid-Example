/**
 * @ngdoc service
 * @name app.services.service:restService
 * @module app.services
 * @description
 *
 * # restService
 * The restService service is responsible for making RESTful requests to a
 * backend service
 */

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RestService {

    /* point server requests to local instance */
    /* use when deploying web app to the server */
    prefix = '';

    constructor(
        private http: Http,
    ) { }

    /**
    * @ngdoc method
    * @name app.services.service:restService#get
    * @module app.services
    * @param {String} url absolute or relative URL of the resource that is being requested
    * @param {Object} headers map of strings or functions which return strings representing
    * HTTP headers to send to the server. If the return value of a function is null, the header
    * will not be sent. Functions accept a config object as an argument.
    * @param {boolean|Cache} cache if true, a default $http cache will be used to cache the GET request,
    * otherwise if a cache instance built with $cacheFactory, this cache will be used for caching.
    * @param {Object.<string|Object>} params map of strings or objects which will be turned to
    * ?key1=value1&key2=value2 after the url. If the value is not a string, it will be JSONified.
    * @description
    * get will retrieve a RESTful resource
    */

    get(url: string, headers?: any, params?: any) {
        return this.makeCall(RequestMethod.Get, url, {}, headers, params);
    }

    /**
    * @ngdoc method
    * @name app.services.service:restService#put
    * @module app.services
    * @param {String} url absolute or relative URL of the resource that is being requested
    * @param {string|Object} data to be sent as the request message data.
    * @param {Object} headers map of strings or functions which return strings representing
    * HTTP headers to send to the server. If the return value of a function is null, the header
    * will not be sent. Functions accept a config object as an argument.
    * @description
    * put will update a RESTful resource
    */

    put(url: string, data: any, headers?: any) {
        return this.makeCall(RequestMethod.Put, url, data, headers);
    }

    /**
    * @ngdoc method
    * @name app.services.service:restService#post
    * @module app.services
    * @param {String} url absolute or relative URL of the resource that is being requested
    * @param {string|Object} data data to be sent as the request message data.
    * @param {Object} headers map of strings or functions which return strings representing
    * HTTP headers to send to the server. If the return value of a function is null, the header
    * will not be sent. Functions accept a config object as an argument.
    * @description
    * post will create a new RESTful resource
    */

    post(url: string, data?: any, headers?: any) {
        return this.makeCall(RequestMethod.Post, url, data, headers);
    }

    /**
    * @ngdoc method
    * @name app.services.service:restService#del
    * @module app.services
    * @param {String} url absolute or relative URL of the resource that is being requested
    * @param {Object} headers map of strings or functions which return strings representing
    * HTTP headers to send to the server. If the return value of a function is null, the header
    * will not be sent. Functions accept a config object as an argument.
    * @description
    * del will delete a RESTful resource
    */

    del(url: string, headers?: any) {
        return this.makeCall(RequestMethod.Delete, url, {}, headers);
    }

    /**
     * @ngdoc function
     * @name app.services.service:restService#makeCall
     * @module app.services
     * @param {String} method the HTTP method that should be used for the call
     * @param {String} url absolute or relative URL of the resource that is being requested
     * @param {string|Object} data data to be sent as the request message data.
     * @param {Object} headers map of strings or functions which return strings representing
     * HTTP headers to send to the server. If the return value of a function is null, the header
     * will not be sent. Functions accept a config object as an argument.
     * @param {Function} callback the callback function that should be called when the request completes
     * @param {Object.<string|Object>} getParams map of strings or objects which will be turned to
     * ?key1=value1&key2=value2 after the url. If the value is not a string, it will be JSONified.
     * getParams is only valid with a GET request.
     * @returns {Promise}
     * @description
     *
     * # makeCall
     * makeCall will execute an HTTP request
    */

    makeCall(method: RequestMethod, url: string, data?: any, headers?: any, params?: any) {
        let requestOptions = new RequestOptions();
        requestOptions.method = method;
        requestOptions.url = this.prefix + url;
        requestOptions.headers = this.setDefaultHeaders(headers);
        requestOptions.search = this.buildUrlSearchParams(params);
        requestOptions.body = JSON.stringify(data);

        let observable = this.http.request(url, requestOptions)
            .map(this.extractData)
            .catch((error) => {
                return Observable.throw(this.extractError(error));
            });

        return observable;
    }

    private buildUrlSearchParams(params: any): URLSearchParams {
        let searchParams = new URLSearchParams();
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams.append(key, params[key]);
            }
        }
        return searchParams;
    }

    private extractData(res: Response) {
        if (res.headers.get('content-disposition')) {
            return res.text();
        }

        let contentRange = res.headers.get('content-range'),
            output = res.json() || null;

        if (contentRange) {
            let parts = contentRange.replace('rows ', '').split('/');

            output.recordCount = parseInt(parts[1], 10);
            output.range = parts[0];
        }

        return output;
    }

    private extractError(error: any) {
        return (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    }

    private setDefaultHeaders(headers) {
        headers = headers || {};

        return headers;
    }
}
