import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { image: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
