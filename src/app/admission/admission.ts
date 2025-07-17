import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-admission',
  imports: [FormsModule, CommonModule],
  templateUrl: './admission.html',
  styleUrl: './admission.css'
})
export class Admission {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {

      const formData = form.value;
      
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      class: formData.class,
    };

    emailjs.send(
      'service_l34uerj',      // Replace with your actual Service ID
      'template_86jsg7n',     // Replace with your actual Template ID
      templateParams,
      'mij8_nCeNG8KjT3C_'       // Replace with your actual public key
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you! We will reach you shortly.');
        form.reset(); // Reset the form after successful submission
      },
      (err) => {
        console.error('FAILED...', err);
        alert('Oops! Something went wrong. Please try again.');
      }
    );
      console.log('Form Submitted ✅', form.value);
      // You can send data to server here
    } else {
      console.log('Form Invalid ❌');
    }
  }
}
