'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">diribit.io documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminExchangeDetailPageModule.html" data-type="entity-link">AdminExchangeDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminExchangeDetailPageModule-004b3590c4418e4c56909b50f0bdc20f"' : 'data-target="#xs-components-links-module-AdminExchangeDetailPageModule-004b3590c4418e4c56909b50f0bdc20f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminExchangeDetailPageModule-004b3590c4418e4c56909b50f0bdc20f"' :
                                            'id="xs-components-links-module-AdminExchangeDetailPageModule-004b3590c4418e4c56909b50f0bdc20f"' }>
                                            <li class="link">
                                                <a href="components/AdminExchangeDetailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminExchangeDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminExchangesPageModule.html" data-type="entity-link">AdminExchangesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminExchangesPageModule-43faed158c3b64175e69676570eff211"' : 'data-target="#xs-components-links-module-AdminExchangesPageModule-43faed158c3b64175e69676570eff211"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminExchangesPageModule-43faed158c3b64175e69676570eff211"' :
                                            'id="xs-components-links-module-AdminExchangesPageModule-43faed158c3b64175e69676570eff211"' }>
                                            <li class="link">
                                                <a href="components/AdminExchangesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminExchangesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminGenerationPageModule.html" data-type="entity-link">AdminGenerationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminGenerationPageModule-77aba9a9ae1d9f00462b998ecba61cdf"' : 'data-target="#xs-components-links-module-AdminGenerationPageModule-77aba9a9ae1d9f00462b998ecba61cdf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminGenerationPageModule-77aba9a9ae1d9f00462b998ecba61cdf"' :
                                            'id="xs-components-links-module-AdminGenerationPageModule-77aba9a9ae1d9f00462b998ecba61cdf"' }>
                                            <li class="link">
                                                <a href="components/AdminGenerationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminGenerationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminLogsPageModule.html" data-type="entity-link">AdminLogsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminLogsPageModule-6c6034a64df142ed522947ddbfed7dd4"' : 'data-target="#xs-components-links-module-AdminLogsPageModule-6c6034a64df142ed522947ddbfed7dd4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLogsPageModule-6c6034a64df142ed522947ddbfed7dd4"' :
                                            'id="xs-components-links-module-AdminLogsPageModule-6c6034a64df142ed522947ddbfed7dd4"' }>
                                            <li class="link">
                                                <a href="components/AdminLogsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLogsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPagePageModule.html" data-type="entity-link">AdminPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPagePageModule-f4d7a2778792a86fd33e1ed54301ac1c"' : 'data-target="#xs-components-links-module-AdminPagePageModule-f4d7a2778792a86fd33e1ed54301ac1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPagePageModule-f4d7a2778792a86fd33e1ed54301ac1c"' :
                                            'id="xs-components-links-module-AdminPagePageModule-f4d7a2778792a86fd33e1ed54301ac1c"' }>
                                            <li class="link">
                                                <a href="components/AdminPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminProjectDetailPageModule.html" data-type="entity-link">AdminProjectDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminProjectDetailPageModule-3fb84ec4c4b7ea695ab582162ec78e5c"' : 'data-target="#xs-components-links-module-AdminProjectDetailPageModule-3fb84ec4c4b7ea695ab582162ec78e5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminProjectDetailPageModule-3fb84ec4c4b7ea695ab582162ec78e5c"' :
                                            'id="xs-components-links-module-AdminProjectDetailPageModule-3fb84ec4c4b7ea695ab582162ec78e5c"' }>
                                            <li class="link">
                                                <a href="components/AdminProjectDetailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminProjectDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminProjectsPageModule.html" data-type="entity-link">AdminProjectsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminProjectsPageModule-c675d533f4d3274324e81c97acd6f68c"' : 'data-target="#xs-components-links-module-AdminProjectsPageModule-c675d533f4d3274324e81c97acd6f68c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminProjectsPageModule-c675d533f4d3274324e81c97acd6f68c"' :
                                            'id="xs-components-links-module-AdminProjectsPageModule-c675d533f4d3274324e81c97acd6f68c"' }>
                                            <li class="link">
                                                <a href="components/AdminProjectsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminProjectsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminSchedulePageModule.html" data-type="entity-link">AdminSchedulePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminSchedulePageModule-78976e6359d4d3d750072a8956681d61"' : 'data-target="#xs-components-links-module-AdminSchedulePageModule-78976e6359d4d3d750072a8956681d61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminSchedulePageModule-78976e6359d4d3d750072a8956681d61"' :
                                            'id="xs-components-links-module-AdminSchedulePageModule-78976e6359d4d3d750072a8956681d61"' }>
                                            <li class="link">
                                                <a href="components/AdminSchedulePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminSchedulePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminStudentsLeadersPageModule.html" data-type="entity-link">AdminStudentsLeadersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminStudentsLeadersPageModule-503a3711448582813d2e99916fc1252d"' : 'data-target="#xs-components-links-module-AdminStudentsLeadersPageModule-503a3711448582813d2e99916fc1252d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminStudentsLeadersPageModule-503a3711448582813d2e99916fc1252d"' :
                                            'id="xs-components-links-module-AdminStudentsLeadersPageModule-503a3711448582813d2e99916fc1252d"' }>
                                            <li class="link">
                                                <a href="components/AdminStudentsLeadersPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminStudentsLeadersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExchangeConfirmPageModule.html" data-type="entity-link">ExchangeConfirmPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExchangeConfirmPageModule-bcc6fed4802f64ad4ccb8d2841a6f7b1"' : 'data-target="#xs-components-links-module-ExchangeConfirmPageModule-bcc6fed4802f64ad4ccb8d2841a6f7b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExchangeConfirmPageModule-bcc6fed4802f64ad4ccb8d2841a6f7b1"' :
                                            'id="xs-components-links-module-ExchangeConfirmPageModule-bcc6fed4802f64ad4ccb8d2841a6f7b1"' }>
                                            <li class="link">
                                                <a href="components/ExchangeConfirmPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExchangeConfirmPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExchangeRequestPageModule.html" data-type="entity-link">ExchangeRequestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExchangeRequestPageModule-abf445ac6ef1696da162e40d51161d31"' : 'data-target="#xs-components-links-module-ExchangeRequestPageModule-abf445ac6ef1696da162e40d51161d31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExchangeRequestPageModule-abf445ac6ef1696da162e40d51161d31"' :
                                            'id="xs-components-links-module-ExchangeRequestPageModule-abf445ac6ef1696da162e40d51161d31"' }>
                                            <li class="link">
                                                <a href="components/ExchangeRequestPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExchangeRequestPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageModule.html" data-type="entity-link">ForgotPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPasswordPageModule-5c57112e87984e005f4376490cf3eef2"' : 'data-target="#xs-components-links-module-ForgotPasswordPageModule-5c57112e87984e005f4376490cf3eef2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPasswordPageModule-5c57112e87984e005f4376490cf3eef2"' :
                                            'id="xs-components-links-module-ForgotPasswordPageModule-5c57112e87984e005f4376490cf3eef2"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpPageModule.html" data-type="entity-link">HelpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpPageModule-cf720853b07fcbc3a6314800f4fa1fe1"' : 'data-target="#xs-components-links-module-HelpPageModule-cf720853b07fcbc3a6314800f4fa1fe1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpPageModule-cf720853b07fcbc3a6314800f4fa1fe1"' :
                                            'id="xs-components-links-module-HelpPageModule-cf720853b07fcbc3a6314800f4fa1fe1"' }>
                                            <li class="link">
                                                <a href="components/HelpPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-520eb0fb551973b495f2b3c2fb07fe38"' : 'data-target="#xs-components-links-module-HomePageModule-520eb0fb551973b495f2b3c2fb07fe38"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-520eb0fb551973b495f2b3c2fb07fe38"' :
                                            'id="xs-components-links-module-HomePageModule-520eb0fb551973b495f2b3c2fb07fe38"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImprintDataProtectionPageModule.html" data-type="entity-link">ImprintDataProtectionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ImprintDataProtectionPageModule-6746df8581b17046c56bb35972404d3c"' : 'data-target="#xs-components-links-module-ImprintDataProtectionPageModule-6746df8581b17046c56bb35972404d3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImprintDataProtectionPageModule-6746df8581b17046c56bb35972404d3c"' :
                                            'id="xs-components-links-module-ImprintDataProtectionPageModule-6746df8581b17046c56bb35972404d3c"' }>
                                            <li class="link">
                                                <a href="components/ImprintDataProtectionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImprintDataProtectionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderGenerationPageModule.html" data-type="entity-link">LeaderGenerationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderGenerationPageModule-b72406a7789bd923af1f75766b45540c"' : 'data-target="#xs-components-links-module-LeaderGenerationPageModule-b72406a7789bd923af1f75766b45540c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderGenerationPageModule-b72406a7789bd923af1f75766b45540c"' :
                                            'id="xs-components-links-module-LeaderGenerationPageModule-b72406a7789bd923af1f75766b45540c"' }>
                                            <li class="link">
                                                <a href="components/LeaderGenerationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderGenerationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderMessagesPageModule.html" data-type="entity-link">LeaderMessagesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderMessagesPageModule-92606ef8fa1effc68179256d6fcf2960"' : 'data-target="#xs-components-links-module-LeaderMessagesPageModule-92606ef8fa1effc68179256d6fcf2960"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderMessagesPageModule-92606ef8fa1effc68179256d6fcf2960"' :
                                            'id="xs-components-links-module-LeaderMessagesPageModule-92606ef8fa1effc68179256d6fcf2960"' }>
                                            <li class="link">
                                                <a href="components/LeaderMessagesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderMessagesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderPagePageModule.html" data-type="entity-link">LeaderPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderPagePageModule-8f89996202fcb0453b2ac4c72ed8a182"' : 'data-target="#xs-components-links-module-LeaderPagePageModule-8f89996202fcb0453b2ac4c72ed8a182"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderPagePageModule-8f89996202fcb0453b2ac4c72ed8a182"' :
                                            'id="xs-components-links-module-LeaderPagePageModule-8f89996202fcb0453b2ac4c72ed8a182"' }>
                                            <li class="link">
                                                <a href="components/LeaderPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderProjectAdministrationPageModule.html" data-type="entity-link">LeaderProjectAdministrationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderProjectAdministrationPageModule-f978c412a591472c158de526a7575efd"' : 'data-target="#xs-components-links-module-LeaderProjectAdministrationPageModule-f978c412a591472c158de526a7575efd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderProjectAdministrationPageModule-f978c412a591472c158de526a7575efd"' :
                                            'id="xs-components-links-module-LeaderProjectAdministrationPageModule-f978c412a591472c158de526a7575efd"' }>
                                            <li class="link">
                                                <a href="components/LeaderProjectAdministrationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderProjectAdministrationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderProjectEditPageModule.html" data-type="entity-link">LeaderProjectEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderProjectEditPageModule-bb2bc3773ac2336e18a74a7e26f866fa"' : 'data-target="#xs-components-links-module-LeaderProjectEditPageModule-bb2bc3773ac2336e18a74a7e26f866fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderProjectEditPageModule-bb2bc3773ac2336e18a74a7e26f866fa"' :
                                            'id="xs-components-links-module-LeaderProjectEditPageModule-bb2bc3773ac2336e18a74a7e26f866fa"' }>
                                            <li class="link">
                                                <a href="components/LeaderProjectEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderProjectEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LeaderProjectGenerationPageModule.html" data-type="entity-link">LeaderProjectGenerationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LeaderProjectGenerationPageModule-c6b860547477e89eb2f0803082d61ef0"' : 'data-target="#xs-components-links-module-LeaderProjectGenerationPageModule-c6b860547477e89eb2f0803082d61ef0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LeaderProjectGenerationPageModule-c6b860547477e89eb2f0803082d61ef0"' :
                                            'id="xs-components-links-module-LeaderProjectGenerationPageModule-c6b860547477e89eb2f0803082d61ef0"' }>
                                            <li class="link">
                                                <a href="components/LeaderProjectGenerationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeaderProjectGenerationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogInPageModule.html" data-type="entity-link">LogInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogInPageModule-34ce2c3d391b7f010a92fd3f3d8748e9"' : 'data-target="#xs-components-links-module-LogInPageModule-34ce2c3d391b7f010a92fd3f3d8748e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogInPageModule-34ce2c3d391b7f010a92fd3f3d8748e9"' :
                                            'id="xs-components-links-module-LogInPageModule-34ce2c3d391b7f010a92fd3f3d8748e9"' }>
                                            <li class="link">
                                                <a href="components/LogInPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogInPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectDetailPageModule.html" data-type="entity-link">ProjectDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectDetailPageModule-616e371d2ed2f364707cf228016052b2"' : 'data-target="#xs-components-links-module-ProjectDetailPageModule-616e371d2ed2f364707cf228016052b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectDetailPageModule-616e371d2ed2f364707cf228016052b2"' :
                                            'id="xs-components-links-module-ProjectDetailPageModule-616e371d2ed2f364707cf228016052b2"' }>
                                            <li class="link">
                                                <a href="components/ProjectDetailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectPageModule.html" data-type="entity-link">ProjectPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectPageModule-25d651b459f34f871f76319f320e6a9e"' : 'data-target="#xs-components-links-module-ProjectPageModule-25d651b459f34f871f76319f320e6a9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectPageModule-25d651b459f34f871f76319f320e6a9e"' :
                                            'id="xs-components-links-module-ProjectPageModule-25d651b459f34f871f76319f320e6a9e"' }>
                                            <li class="link">
                                                <a href="components/ProjectPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsPageModule.html" data-type="entity-link">ProjectsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectsPageModule-135e412b4d7ad40405d473260a501f2a"' : 'data-target="#xs-components-links-module-ProjectsPageModule-135e412b4d7ad40405d473260a501f2a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectsPageModule-135e412b4d7ad40405d473260a501f2a"' :
                                            'id="xs-components-links-module-ProjectsPageModule-135e412b4d7ad40405d473260a501f2a"' }>
                                            <li class="link">
                                                <a href="components/ProjectsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PromoteStudentsPageModule.html" data-type="entity-link">PromoteStudentsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PromoteStudentsPageModule-bb32711c7a8d62bc23103c7aa56d9fda"' : 'data-target="#xs-components-links-module-PromoteStudentsPageModule-bb32711c7a8d62bc23103c7aa56d9fda"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PromoteStudentsPageModule-bb32711c7a8d62bc23103c7aa56d9fda"' :
                                            'id="xs-components-links-module-PromoteStudentsPageModule-bb32711c7a8d62bc23103c7aa56d9fda"' }>
                                            <li class="link">
                                                <a href="components/PromoteStudentsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PromoteStudentsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationPageModule.html" data-type="entity-link">RegistrationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrationPageModule-bf8d26bfca0839e5b21d5af04dbe783f"' : 'data-target="#xs-components-links-module-RegistrationPageModule-bf8d26bfca0839e5b21d5af04dbe783f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrationPageModule-bf8d26bfca0839e5b21d5af04dbe783f"' :
                                            'id="xs-components-links-module-RegistrationPageModule-bf8d26bfca0839e5b21d5af04dbe783f"' }>
                                            <li class="link">
                                                <a href="components/RegistrationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResetPasswordPageModule.html" data-type="entity-link">ResetPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResetPasswordPageModule-11bd57ca1cee88499105f4f100846cfe"' : 'data-target="#xs-components-links-module-ResetPasswordPageModule-11bd57ca1cee88499105f4f100846cfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResetPasswordPageModule-11bd57ca1cee88499105f4f100846cfe"' :
                                            'id="xs-components-links-module-ResetPasswordPageModule-11bd57ca1cee88499105f4f100846cfe"' }>
                                            <li class="link">
                                                <a href="components/ResetPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-f5dc1deef3e964dc4591d1d28b0c27d4"' : 'data-target="#xs-components-links-module-SettingsPageModule-f5dc1deef3e964dc4591d1d28b0c27d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-f5dc1deef3e964dc4591d1d28b0c27d4"' :
                                            'id="xs-components-links-module-SettingsPageModule-f5dc1deef3e964dc4591d1d28b0c27d4"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentGenerationPageModule.html" data-type="entity-link">StudentGenerationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentGenerationPageModule-69c66651d02710812c5388dae642ade6"' : 'data-target="#xs-components-links-module-StudentGenerationPageModule-69c66651d02710812c5388dae642ade6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentGenerationPageModule-69c66651d02710812c5388dae642ade6"' :
                                            'id="xs-components-links-module-StudentGenerationPageModule-69c66651d02710812c5388dae642ade6"' }>
                                            <li class="link">
                                                <a href="components/StudentGenerationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentGenerationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentMessagesPageModule.html" data-type="entity-link">StudentMessagesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentMessagesPageModule-0131882e21b98a11fee1892a66b91e57"' : 'data-target="#xs-components-links-module-StudentMessagesPageModule-0131882e21b98a11fee1892a66b91e57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentMessagesPageModule-0131882e21b98a11fee1892a66b91e57"' :
                                            'id="xs-components-links-module-StudentMessagesPageModule-0131882e21b98a11fee1892a66b91e57"' }>
                                            <li class="link">
                                                <a href="components/StudentMessagesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentMessagesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentPagePageModule.html" data-type="entity-link">StudentPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentPagePageModule-4bdb9b0322fac09d30b570d61eabbbc4"' : 'data-target="#xs-components-links-module-StudentPagePageModule-4bdb9b0322fac09d30b570d61eabbbc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentPagePageModule-4bdb9b0322fac09d30b570d61eabbbc4"' :
                                            'id="xs-components-links-module-StudentPagePageModule-4bdb9b0322fac09d30b570d61eabbbc4"' }>
                                            <li class="link">
                                                <a href="components/StudentPagePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentProjectAdministrationPageModule.html" data-type="entity-link">StudentProjectAdministrationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentProjectAdministrationPageModule-5fa14af89a6cf7911a5752aade908094"' : 'data-target="#xs-components-links-module-StudentProjectAdministrationPageModule-5fa14af89a6cf7911a5752aade908094"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentProjectAdministrationPageModule-5fa14af89a6cf7911a5752aade908094"' :
                                            'id="xs-components-links-module-StudentProjectAdministrationPageModule-5fa14af89a6cf7911a5752aade908094"' }>
                                            <li class="link">
                                                <a href="components/StudentProjectAdministrationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentProjectAdministrationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentProjectEditPageModule.html" data-type="entity-link">StudentProjectEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentProjectEditPageModule-9a8dd121444610d93e4090186c5c0911"' : 'data-target="#xs-components-links-module-StudentProjectEditPageModule-9a8dd121444610d93e4090186c5c0911"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentProjectEditPageModule-9a8dd121444610d93e4090186c5c0911"' :
                                            'id="xs-components-links-module-StudentProjectEditPageModule-9a8dd121444610d93e4090186c5c0911"' }>
                                            <li class="link">
                                                <a href="components/StudentProjectEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentProjectEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentProjectGenerationPageModule.html" data-type="entity-link">StudentProjectGenerationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentProjectGenerationPageModule-00ba4504d7b095dffa67480bda8c3886"' : 'data-target="#xs-components-links-module-StudentProjectGenerationPageModule-00ba4504d7b095dffa67480bda8c3886"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentProjectGenerationPageModule-00ba4504d7b095dffa67480bda8c3886"' :
                                            'id="xs-components-links-module-StudentProjectGenerationPageModule-00ba4504d7b095dffa67480bda8c3886"' }>
                                            <li class="link">
                                                <a href="components/StudentProjectGenerationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentProjectGenerationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-0e4dc1d30365266589220de46669b1a8"' : 'data-target="#xs-components-links-module-TabsPageModule-0e4dc1d30365266589220de46669b1a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-0e4dc1d30365266589220de46669b1a8"' :
                                            'id="xs-components-links-module-TabsPageModule-0e4dc1d30365266589220de46669b1a8"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageModule.html" data-type="entity-link">VerifyEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' : 'data-target="#xs-components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' :
                                            'id="xs-components-links-module-VerifyEmailPageModule-ab49d968df784e6845a7fab5d615ade8"' }>
                                            <li class="link">
                                                <a href="components/VerifyEmailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminsService.html" data-type="entity-link">AdminsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExchangesService.html" data-type="entity-link">ExchangesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LeadersService.html" data-type="entity-link">LeadersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link">MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectsService.html" data-type="entity-link">ProjectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScheduleService.html" data-type="entity-link">ScheduleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreensizeService.html" data-type="entity-link">ScreensizeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsService.html" data-type="entity-link">StudentsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link">AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Admin.html" data-type="entity-link">Admin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Exchange.html" data-type="entity-link">Exchange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModifiedProjektleiter.html" data-type="entity-link">ModifiedProjektleiter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModifiedSchüler.html" data-type="entity-link">ModifiedSchüler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project.html" data-type="entity-link">Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Projectleader.html" data-type="entity-link">Projectleader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link">Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Schedule.html" data-type="entity-link">Schedule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Student.html" data-type="entity-link">Student</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});