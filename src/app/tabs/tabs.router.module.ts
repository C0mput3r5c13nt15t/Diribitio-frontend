import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  {
    path: 'Projekttage',
    component: TabsPage,
    children: [
      {
        path: 'Help',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../help/help.module').then(m => m.HelpPageModule)
          }
        ]
      },
      {
        path: 'Einstellungen',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'Impressum und Datenschutzerklärung',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../imprint-data-protection/imprint-data-protection.module').then(m => m.ImprintDataProtectionPageModule)
          }
        ]
      },
      {
        path: 'Home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'Projekte',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../projects/projects.module').then(m => m.ProjectsPageModule)
          }
        ]
      },
      {
        path: 'Projekte/:ProjectID',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../projects/project-detail/project-detail.module').then(m => m.ProjectDetailPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/log-in.module').then(m => m.LogInPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung/Passwort vergessen',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung/Passwort zurücksetzen/:ResetToken',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung/Admin Registration',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/admin-generation/admin-generation.module').then(m => m.AdminGenerationPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung/Projektleiter Registration',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/leader-generation/leader-generation.module').then(m => m.LeaderGenerationPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung/Schüler Registration/:SignUpToken',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-generation/user-generation.module').then(m => m.UserGenerationPageModule)
          }
        ]
      },
      {
        path: 'Anmeldung/Schüler Registration',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-generation/user-generation.module').then(m => m.UserGenerationPageModule)
          }
        ]
      },
      {
        path: 'Projektleiter/:LeaderName',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/leader-page/leader-page.module').then(m => m.LeaderPagePageModule)
          }
        ]
      },
      {
        path: 'Projektleiter/:LeaderName/Projekt erstellen',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/leader-page/project-generation/project-generation.module').then(m => m.ProjectGenerationPageModule)
          }
        ]
      },
      {
        path: 'Projektleiter/:LeaderName/Projekt verwalten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/leader-page/project-administration/project-administration.module').then(m => m.ProjectAdministrationPageModule)
          }
        ]
      },
      {
        path: 'Projektleiter/:LeaderName/Projekt verwalten/Projekt bearbeiten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/leader-page/project-administration/project-edit/project-edit.module').then(m => m.ProjectEditPageModule)
          }
        ]
      },
      {
        path: 'Projektleiter/:LeaderName/Nachricht senden',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/leader-page/messages/messages.module').then(m => m.MessagesPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/user-page.module').then(m => m.UserPagePageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Anmeldung',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/registration/registration.module').then(m => m.RegistrationPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Tauschanfrage senden',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/exchange-request/exchange-request.module').then(m => m.ExchangeRequestPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Tauschanfrage bestätigen',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/exchange-confirm/exchange-confirm.module').then(m => m.ExchangeConfirmPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Projekt',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/project/project.module').then(m => m.ProjectPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Projekt erstellen',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/project-generation/project-generation.module').then(m => m.ProjectGenerationPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Assistenten verwalten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/user-page/promote-students/promote-students.module').then(m => m.PromoteStudentsPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Projekt verwalten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/user-page/project-administration/project-administration.module').then(m => m.ProjectAdministrationPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Projekt verwalten/Projekt bearbeiten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/user-page/project-administration/project-edit/project-edit.module').then(m => m.ProjectEditPageModule)
          }
        ]
      },
      {
        path: 'Benutzer/:ParticipantName/Nachricht senden',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/user-page/messages/messages.module').then(m => m.MessagesPageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/admin-page/admin-page.module').then(m => m.AdminPagePageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/Projekte',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/admin-page/admin-projects/admin-projects.module').then(m => m.AdminProjectsPageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/Tauschanfragen',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/admin-page/admin-exchanges/admin-exchanges.module').then(m => m.AdminExchangesPageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/Projekte/:ProjectID',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module').then(m => m.AdminProjectDetailPageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/Tauschanfragen/:ExchangeID',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module').then(m => m.AdminExchangeDetailPageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/Zeitplan verwalten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/admin-page/admin-schedule/admin-schedule.module').then(m => m.AdminSchedulePageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/Schüler und Projektleiter verwalten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              // tslint:disable-next-line: max-line-length
              import('../log-in/admin-page/admin-students-leaders/admin-students-leaders.module').then(m => m.AdminStudentsLeadersPageModule)
          }
        ]
      },
      {
        path: 'Admin/:AdminName/App verwalten',
        canActivate: [AuthenticationGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/admin-page/admin-logs/admin-logs.module').then(m => m.AdminLogsPageModule)
          }
        ]
      },
      {
        path: 'E-Mail verifizieren/:Status',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../log-in/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/Projekttage/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/Projekttage/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
