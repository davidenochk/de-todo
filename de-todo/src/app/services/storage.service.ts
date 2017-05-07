import { Injectable } from '@angular/core';
import { APP_SETTINGS } from "../config/settings.config";

@Injectable()
export class StorageService {

  constructor() { }
  settings = APP_SETTINGS;
  prefix: string = this.settings.app.localStoragePrefix;
  set(key, value) {
    key = this.prefix + key;
    localStorage.setItem(key, value);
  }
  get(key) {
    key = this.prefix + key;
    return localStorage.getItem(key);
  }
  remove(key) {
    localStorage.removeItem(this.prefix + key);
  }
  getUsername() {
    return this.get('username');
  }
  setUsername(username: string) {
    this.set('username', username);
  }
  getToken() {
    return this.get('token');
  }
  setToken(token: string) {
    this.set('token', token);
  }
  removeUsername() {
    this.remove('username');
  }
  removeToken() {
    this.remove('token');
  }

}
