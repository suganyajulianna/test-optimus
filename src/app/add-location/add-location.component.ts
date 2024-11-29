import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-location',
  standalone: true, // Mark component as standalone
  imports: [CommonModule, ReactiveFormsModule], // Import necessary modules directly
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  Location: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the Location form group with controls
    this.Location = this.fb.group({
      location: [''],
      location1: ['']
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted', this.Location.value);
  }
}
