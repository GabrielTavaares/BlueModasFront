import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl;
  endpoint = 'produtos';

  constructor(
    private http: HttpClient
  ) { }


  public async getAll<G>(): Promise<G[] | null> {
    
    let response = null;
    try {
      response = await this.http
        .get<G>(`${this.url}/${this.endpoint}`)
        .toPromise();
      
    } catch (error) {
      response = this.errorHandler('GET', error);
      
    }
    return response;
  }


  public errorHandler(
    method: string,
    error: HttpErrorResponse,
  ): Promise<never> {
    console.error(
      `Error occurred during ${method} ${this.url}/${this.endpoint}`,
      error,
    );
    return Promise.reject(error);
  }

}
