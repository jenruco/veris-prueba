import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EmailData, MailInfo } from '../dashboard/dto/email-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-mail',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './modal-mail.html',
  styleUrl: './modal-mail.css',
})
export class ModalMail implements OnInit {

  data = inject<{emailData: EmailData}>(MAT_DIALOG_DATA);
  listaEmails:MailInfo[] = [];

  constructor() {}

  ngOnInit() {
    this.listaEmails = Object.values(this.data.emailData).map(email => (
      {
        label: email.label,
        total: email.total
      }
    ));
  }

}
