import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) { }

  addIcon(name: string,  urlPath: string): void{
    this.matIconRegistry.addSvgIcon(
        name ,
        this.domSanitizer.bypassSecurityTrustResourceUrl(urlPath)
    );
  }
}

