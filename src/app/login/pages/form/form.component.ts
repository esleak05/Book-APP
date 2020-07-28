import { Component, OnInit } from '@angular/core';
import {IconsService} from '../../../shared/services/icons/icons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {

  hide = true;

  constructor(
    private iconServices: IconsService
  ) {}

  ngOnInit(): void {
    this.iconServices.addIcon('google', '../../../../assets/icons8-logo-de-google.svg');
    this.iconServices.addIcon('github', '../../../../assets/icons8-github.svg');
    this.iconServices.addIcon('user-login', '../../../../assets/icons8-usuario-masculino.svg')
  }
}
