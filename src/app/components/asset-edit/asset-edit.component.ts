import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Asset } from '../../core/models/asset.model';
import { AssetService } from '../../core/services/asset.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  assetForm: FormGroup;
  isEditMode = false;
  assetId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.assetForm = this.fb.group({
      id: [null],
      ticker: ['', Validators.required],
      nome: ['', Validators.required],
      setor: ['', Validators.required],
      preco: [null, Validators.required],
      quantidade: [null, Validators.required],
      pl: [null, Validators.required],
      pvp: [null, Validators.required],
      dividendYield: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.assetId = +params['id'];
        this.loadAsset(this.assetId);
      }
    });
  }

  loadAsset(id: number): void {
    this.assetService.getAsset(id).subscribe(asset => {
      this.assetForm.patchValue(asset);
    });
  }

  onSubmit(): void {
    if (this.assetForm.valid) {
      const assetData = this.assetForm.value;
      
      if (this.isEditMode && this.assetId) {
        assetData.id = this.assetId;
        this.assetService.updateAsset(assetData).subscribe(() => {
          this.router.navigate(['/assets']);
        });
      } else {
        this.assetService.addAsset(assetData).subscribe(() => {
          this.router.navigate(['/assets']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/assets']);
  }
} 