import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class FeatureToggleServiceService {

    private activeFeatures: Array<string>;

    private serverUrl = "http://demo8352188.mockable.io/features";

    constructor(private http: HttpClient) { }

    loadFeatures() {
        const headers = this.createRequestHeader();
        return this.http.get<Array<string>>(this.serverUrl)
            .toPromise()
            .then((data: any) => {
                this.activeFeatures = data;
            })
            .catch((err: any) => {
                Promise.resolve();
            });
    }

    getFeatures() {
        return this.activeFeatures;
    }

    private createRequestHeader() {
        // set headers here e.g.
        const headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json"
        });

        return headers;
    }
}
