import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        const started = Date.now();
        return next.handle(req)
            .map((event) => {
                if (event instanceof HttpResponse) {
                    if (event.body.length) {
                        event.body.forEach(element => {
                            if (element.__id) {
                                element.id = element.__id;
                            }
                        });
                    }
                }
                return event;
            })
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(event);
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            });
    }
}
