import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminFeatureShellComponent } from './admin-feature-shell.component'

const routes: Routes = [
  {
    path: '',
    component: AdminFeatureShellComponent,
    children: [
      // Application routes here
    ],
  },
]

@NgModule({
  declarations: [AdminFeatureShellComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AdminFeatureShellModule {}
