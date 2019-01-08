import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'auth/dashboard',
    //     canActivate: [AuthGuard, RoleGuard],
    //     data: {roles: [1, 2, 3, 4]}
    // },
    {
        path: 'auth',
        loadChildren: '../auth/auth.module#AuthModule',
        canActivate: [AuthGuard, RoleGuard],
        data: {roles: [1, 2, 3, 4]}
    },
    {
        path: 'login',
        loadChildren: '../pages/login/login.module#LoginModule',
    },
    {
        path: '**',
        redirectTo: 'auth/dashboard',
        canActivate: [AuthGuard, RoleGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
