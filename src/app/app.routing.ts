import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { TodosComponent  } from './todos/todos.component';
import { OtherComponent  } from './other/other.component';


const appRoutes : Routes = [
    {
        path : '',
        component : TodosComponent
    },
    {
        path : 'other',
        component : OtherComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 


