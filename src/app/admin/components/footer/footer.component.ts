import { Component, OnInit } from '@angular/core';
import { IconsService } from './../../../shared/services/icons/icons.service';
import { Icon } from 'src/app/shared/interfaces/incons/icon-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  icons: Icon[] = [];
  constructor(private iconServices: IconsService) {}

  ngOnInit(): void {
    this.iconServices.getICons().subscribe((icon: Icon) => {

      this.iconServices.addIcon(icon.name, icon.path);
      this.icons.push(icon);
      // this.icons.map((icon: Icon) => this.iconServices.addIcon(icon.name, icon.path));
    });
  }
}
