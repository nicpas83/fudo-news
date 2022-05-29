import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { NewsIndexComponent } from './pages/news-index/news-index.component';

const appRoutes: Routes = [
    { path: '', component: NewsIndexComponent },
    { path: 'news-detail', component: NewsDetailComponent },
    { path: '**', component: NewsIndexComponent },
];


// EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];
// @ts-ignore
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);