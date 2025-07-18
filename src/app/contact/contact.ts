import { Component } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false
    });

    this.titleService.setTitle('Contact Arka - Best English Medium School in Kolar');

    this.metaService.updateTag({
      name: 'description',
      content: 'Get in touch with the best school in Kolar offering pre-primary to secondary education with caring teachers & support.'
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {

      const formData = form.value;

      const templateParams = {
        name: ` ${formData.name} ${formData.lastname}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        class: formData.class,
      };

      emailjs.send(
        'service_l34uerj',      // Replace with your actual Service ID
        'template_oq0szo7',     // Replace with your actual Template ID
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
  constructor(private titleService: Title, private metaService: Meta) { }

}
