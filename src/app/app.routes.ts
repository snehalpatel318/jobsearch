import { Routes } from '@angular/router';
import { FavouritesComponent } from './features/favourites/favourites.component';
import { JobsDetailsComponent } from './features/jobs-details/jobs-details.component';
import { JobsComponent } from './features/jobs/jobs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'jobs', pathMatch: 'full'},
    { path: 'jobs',component: JobsComponent },
    { path: 'favourites', component: FavouritesComponent },
    { path: 'jobs/:id', component: JobsDetailsComponent }
];
