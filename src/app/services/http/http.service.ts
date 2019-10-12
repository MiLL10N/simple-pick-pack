import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  post(url: string, data: any, httpHeader?: HttpHeaders) {
    return this.httpClient.post<any>(url, data, {
      headers: { "api-key": "1234" }
    });
  }
  downloadDoc(url: string, data: any, httpHeader?: HttpHeaders) {
    return this.httpClient.post<any>(url, data, {
      headers: { "api-key": "1234" },
      responseType: 'blob' as 'json',
    });
  }
  get(url: string) {
    return this.httpClient.get<any>(url, { headers: { "api-key": "1234" } });
  }
}
