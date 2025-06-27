import { Component, OnInit } from '@angular/core';
import { Asset } from '../../core/models/asset.model';
import { AssetService } from '../../core/services/asset.service';
import { NgFor } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [NgFor, CurrencyPipe, PercentPipe, RouterLink],
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  assets: Asset[] = [];

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