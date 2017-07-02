import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PersonsPage } from '../pages/persons/persons';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  // rootpage = InicioPage;
  public rootPage: any;
  public paginas: Array<{ titulo: String, componente: any, icono: String }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {    

    this.rootPage = InicioPage;

    this.paginas = [

      {titulo: 'Inicio',      componente: InicioPage,   icono: 'home'},
      {titulo: 'Personas',    componente: PersonsPage , icono: 'people'},
      {titulo: 'Contacto',    componente: ContactoPage, icono: 'mail-open'},
      {titulo: 'Información', componente: AcercaPage,   icono: 'information-circle'},
      {titulo: 'Acerca De',   componente: 'xxxxxxxxx',   icono: 'information-circle'}

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  SendPage(pagina){
    this.nav.setRoot(pagina);
  }
}

