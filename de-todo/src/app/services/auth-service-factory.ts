import { ChttpService } from "./chttp.service";
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { LoaderService } from "../components/loader/loader.service";
import { StorageService } from "./storage.service";
import { Router } from "@angular/router";

export function fwHttpServiceFactory(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
  preloaderService: LoaderService,
  router: Router
) {
  return new ChttpService(backend, defaultOptions, preloaderService, router);
}