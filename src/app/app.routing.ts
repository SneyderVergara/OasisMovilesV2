import { HomeComponent } from "./components/home/home"; 
import { TiendaComponent } from "./components/productos/productos";
import { ReservasComponent } from "./components/reservas/reservas";
import { EventosComponent } from "./components/eventos/eventos";
import { LoginComponent } from "./components/login/login"; 


export const appRoutes: any = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "reservas", component: ReservasComponent },
  { path: "eventos", component: EventosComponent },
  { path: "login", component: LoginComponent }
];

export const appComponents: any = [
  HomeComponent,
  TiendaComponent,
  ReservasComponent,
  EventosComponent,
  LoginComponent
];
