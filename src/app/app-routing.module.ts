import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'leader-page', loadChildren: './log-in/leader-page/leader-page.module#LeaderPagePageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'project-administration', loadChildren: './log-in/leader-page/project-administration/project-administration.module#ProjectAdministrationPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'project-generation', loadChildren: './log-in/leader-page/project-generation/project-generation.module#ProjectGenerationPageModule' },
  { path: 'messages', loadChildren: './log-in/leader-page/messages/messages.module#MessagesPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'project-edit', loadChildren: './log-in/leader-page/project-administration/project-edit/project-edit.module#ProjectEditPageModule' },
  { path: 'exchange-confirm', loadChildren: './log-in/user-page/exchange-confirm/exchange-confirm.module#ExchangeConfirmPageModule' },
  { path: 'leader-generation', loadChildren: './log-in/leader-generation/leader-generation.module#LeaderGenerationPageModule' },
  {
    path: 'admin-schedule',
    loadChildren: () => import('./log-in/admin-page/admin-schedule/admin-schedule.module').then( m => m.AdminSchedulePageModule)
  },
  {
    path: 'admin-students-leaders',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./log-in/admin-page/admin-students-leaders/admin-students-leaders.module').then( m => m.AdminStudentsLeadersPageModule)
  },
  {
    path: 'user-generation',
    loadChildren: () => import('./log-in/user-generation/user-generation.module').then( m => m.UserGenerationPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./log-in/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'admin-tokens',
    loadChildren: () => import('./log-in/admin-page/admin-tokens/admin-tokens.module').then( m => m.AdminTokensPageModule)
  },
  {
    path: 'admin-logs',
    loadChildren: () => import('./log-in/admin-page/admin-logs/admin-logs.module').then( m => m.AdminLogsPageModule)
  },
  {
    path: 'imprint-data-protection',
    loadChildren: () => import('./imprint-data-protection/imprint-data-protection.module').then( m => m.ImprintDataProtectionPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'admin-generation',
    loadChildren: () => import('./log-in/admin-generation/admin-generation.module').then( m => m.AdminGenerationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./log-in/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./log-in/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'promote-students',
    loadChildren: () => import('./log-in/user-page/promote-students/promote-students.module').then( m => m.PromoteStudentsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
