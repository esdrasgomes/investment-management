import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Asset } from '../models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiUrl = 'http://localhost:3000/assets';

  constructor(private http: HttpClient) { }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.apiUrl);
  }

  getAsset(id: number): Observable<Asset> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Asset>(url);
  }

  addAsset(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(this.apiUrl, asset);
  }

  updateAsset(asset: Asset): Observable<any> {
    return this.http.put(`${this.apiUrl}/${asset.id}`, asset);
  }

  deleteAsset(id: number): Observable<Asset> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Asset>(url);
  }
} 