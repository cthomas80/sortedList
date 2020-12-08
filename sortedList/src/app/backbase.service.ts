import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackbaseService {

  public apiRoot = "https://fetch-hiring.s3.amazonaws.com/hiring.json";
  public jsonAddon: string = ".json";
  constructor(private http: HttpClient) {}
  getData() {  
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(`${this.apiRoot}`,requestOptions );
  }
}
