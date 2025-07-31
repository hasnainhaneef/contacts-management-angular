import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://688b331b2a52cabb9f5095b1.mockapi.io';  //We can put this in evironment.ts and can apply secure url techniques for production.

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/contacts`);
  }

  getEmails(contactId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/email_addresses?contactId=${contactId}`);
  }
}
