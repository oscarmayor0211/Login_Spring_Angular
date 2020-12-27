import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardDemoComponent } from "./demo/view/dashboarddemo.component";
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { LoginComponent } from '../app/modules/login/login.component';
import { OlvidarPasswordComponent } from './modules/olvidar-password/olvidar-password.component';
import { ConfirmarPasswordComponent} from './modules/confirmar-password/confirmar-password.component';

export const routes: Routes = [
    {
        path: "auth",
        component: AuthComponent,
        children: [
            {
                path: "",
                loadChildren: () =>
                    import("./modules/auth/auth.module").then(
                        (m) => m.AuthModule
                    ),
            },
        ],
    },
    {
        path: "login",
        component:LoginComponent
    },
    {
        path: "forgotPassword",
        component:OlvidarPasswordComponent
    },
    {
        path: "confirmarPassword",
        component: ConfirmarPasswordComponent,
    },
    {
        path: "admin",
        component: AdminComponent,
        children: [
            {
                path: "dashboard",
                loadChildren: () =>
                    import("./modules/dashboard/dashboard.module").then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: "facturas",
                loadChildren: () =>
                    import("./modules/facturas/facturas.module").then(
                        (m) => m.FacturasModule
                    ),
            },
            {
                path: "emisores",
                loadChildren: () =>
                    import("./modules/emisores/emisores.module").then(
                        (m) => m.EmisoresModule
                    ),
            },
            {
                path: "configuraciones",
                loadChildren: () =>
                    import(
                        "./modules/configuraciones/configuraciones.module"
                    ).then((m) => m.ConfiguracionesModule),
            },
            {
                path: "resoluciones",
                loadChildren: () =>
                    import(
                        "./modules/resoluciones/resoluciones.module"
                    ).then((m) => m.ResolucionesModule),
            },
        ],
    },
    //{ path: "", redirectTo: "/admin", pathMatch: "full" },
    { path: "", redirectTo: "/login", pathMatch: "full" },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
});
