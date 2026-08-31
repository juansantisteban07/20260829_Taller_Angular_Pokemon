import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

// Arrancamos la aplicación con el componente principal.
// provideHttpClient() habilita HttpClient en toda la app (necesario para el servicio).
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
