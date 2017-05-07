import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Request,
  Headers
} from '@angular/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { LoaderService } from "../components/loader/loader.service";
import { IAccount } from "../interfaces/iAccount.interface";
import { StorageService } from "../services/storage.service";
import { APP_SETTINGS } from "../config/settings.config";

@Injectable()
export class ChttpService extends Http {
  constructor(backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private loader: LoaderService,
    private router: Router) {
    super(backend, defaultOptions);
    this.storage = new StorageService();
  }
  storage: any;
  account: IAccount = {
    username: null,
    sessionId: null
  };
  nav: any;


  /**
   * Performs any type of http request.
   * @param url
   * @param options
   * @returns {Observable<Response>}
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  response: any;
  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    url = APP_SETTINGS.api.url + url;
    this.requestInterceptor();
    return super.get(url, options)
      .map((response: any) => {
        return this.processResponse(response);
      })
      .catch((err) => {
        return this.onCatch(err);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `post` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    url = APP_SETTINGS.api.url + url;
    this.requestInterceptor();
    return super.post(url, body, options)
      .map((response) => {
        return this.processResponse(response);
      })
      .catch((err) => {
        return this.onCatch(err);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `put` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
    url = APP_SETTINGS.api.url + url;
    this.requestInterceptor();
    return super.put(url, body)
      .map((response) => {
        return this.processResponse(response);
      })
      .catch((err) => {
        return this.onCatch(err);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `delete` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    url = APP_SETTINGS.api.url + url;
    this.requestInterceptor();
    return super.delete(url, options)
      .map((response) => {
        return this.processResponse(response);
      })
      .catch((err) => {
        return this.onCatch(err);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(err: any): Observable<any> {
    if (err.status == 401) {
      this.router.navigate(['login']);
    }
    return Observable.throw(err);
  }

  /**
   * Request interceptor.
   */
  private requestInterceptor(): void {
    this.loader.inc();
  }

  /**
   * Response interceptor.
   */
  private responseInterceptor(): void {
    this.loader.dec();
  }

  /**
   * onSubscribeSuccess
   * @param res
   */
  private onSubscribeSuccess(res: Response): any {
  }

  /**
   * onSubscribeError
   * @param error
   */
  private onSubscribeError(error: any): void {
  }

  /**
   * onFinally
   */
  private onFinally(): void {
    this.responseInterceptor();
  }

  private processResponse(response: any) {
    let res = JSON.parse(response.text());
    if (res.status == 'success') {
      return res;
    } else if (res.status == 'error') {
      throw (res)
    } else {
      throw ({
        message: 'Something went wrong while processing response'
      })
    }
  }
}
