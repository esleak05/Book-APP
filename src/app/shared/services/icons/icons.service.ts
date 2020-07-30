import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, from } from 'rxjs';
import { take, takeWhile, skip, tap, filter } from 'rxjs/operators';
import { ICONS } from './../../mocks/incons/mock-icons';
import { Icon } from '../../interfaces/incons/icon-interface';

@Injectable({
  providedIn: 'root',
})
export class IconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  getICons(iconsFilter?: string[]): Observable<Icon> {
    return from(ICONS).pipe(
      filter((icon: Icon) =>  icon.name !== 'github'),
      filter((icon: Icon) => icon.name !== 'google')
    );
  }

  addIcon(name: string, urlPath: string): void {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(urlPath)
    );
  }
}
