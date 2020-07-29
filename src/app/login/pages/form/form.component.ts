import { Component, OnInit } from '@angular/core';
import {IconsService} from '../../../shared/services/icons/icons.service';
import { Observable } from 'rxjs';
import { Icon } from 'src/app/shared/interfaces/incons/icon-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {

  hide = true;
  // icons: Icon[];

  constructor(
    private iconServices: IconsService
  ) {

  }

  ngOnInit(): void {
    // this.iconServices.getICons().subscribe(icons => this.icons = icons);
    // this.icons.map(icon=> this.iconServices.addIcon(icon.name, icon.path));
  }
}
