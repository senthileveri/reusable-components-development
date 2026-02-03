import { Routes } from '@angular/router';
import { Enroll } from './pages/enroll/enroll';
import { ContentLayout } from './shared/content-layout/content-layout';

export const routes: Routes = [
  {
    path: 'enroll',
    component: ContentLayout,
    children: [
      {
        path: '',
        component: Enroll
      }
    ]
  }
];
