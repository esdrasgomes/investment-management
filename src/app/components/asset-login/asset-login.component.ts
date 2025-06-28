import { Component, OnInit } from '@angular/core';
import { Asset } from '../../core/models/asset.model';
import { AssetService } from '../../core/services/asset.service';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, RouterLink],
  templateUrl: './asset-login.component.html',
  styleUrls: ['./asset-login.component.scss']
})
 export class AssetLoginComponent implements OnInit {

  assets: Asset[] = [];
  isLoggedIn = false;
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';
  loginFormVisible = true;
  loginButtonText = 'Login';
  logoutButtonText = 'Logout';
  loginButtonDisabled = false;
  logoutButtonDisabled = false;
  loginError = false;
  loginSuccess = false;
  loginForm = {
    username: '',
    password: ''
  };

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(): void {
    this.assetService.getAssets()
      .subscribe(assets => this.assets = assets);
  }

  deleteAsset(asset: Asset): void {
    this.assets = this.assets.filter(h => h !== asset);
    this.assetService.deleteAsset(asset.id).subscribe();
  }
} 
  