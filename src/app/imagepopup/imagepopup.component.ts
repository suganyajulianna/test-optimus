import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-imagepopup',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './imagepopup.component.html',
  styleUrl: './imagepopup.component.css'
})
export class ImagepopupComponent {
  imageUrl: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ImagepopupComponent>
  ) {
    this.imageUrl = data?.imageUrl || null;
  }

  close(): void {
    this.dialogRef.close();
  }
}
