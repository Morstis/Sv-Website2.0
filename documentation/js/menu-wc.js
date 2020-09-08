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
                    <a href="index.html" data-type="index-link">sv-website documentation</a>
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
                                <a href="modules/AppBodyModule.html" data-type="entity-link">AppBodyModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppBodyModuleComponent.html" data-type="entity-link">AppBodyModuleComponent</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppBodyModuleComponent-67f9daef6930adcf8672dda36b48a956"' : 'data-target="#xs-components-links-module-AppBodyModuleComponent-67f9daef6930adcf8672dda36b48a956"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppBodyModuleComponent-67f9daef6930adcf8672dda36b48a956"' :
                                            'id="xs-components-links-module-AppBodyModuleComponent-67f9daef6930adcf8672dda36b48a956"' }>
                                            <li class="link">
                                                <a href="components/AppBodyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppBodyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d9af5da476bbe906bd22939a47eed73e"' : 'data-target="#xs-components-links-module-AppModule-d9af5da476bbe906bd22939a47eed73e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d9af5da476bbe906bd22939a47eed73e"' :
                                            'id="xs-components-links-module-AppModule-d9af5da476bbe906bd22939a47eed73e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GreetingModule.html" data-type="entity-link">GreetingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GreetingModule-544220d73112829e54adc60a386e9580"' : 'data-target="#xs-components-links-module-GreetingModule-544220d73112829e54adc60a386e9580"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GreetingModule-544220d73112829e54adc60a386e9580"' :
                                            'id="xs-components-links-module-GreetingModule-544220d73112829e54adc60a386e9580"' }>
                                            <li class="link">
                                                <a href="components/GreetingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GreetingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderMobileModule.html" data-type="entity-link">HeaderMobileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderMobileModule-98f1cc061e63874377faa20543c564e3"' : 'data-target="#xs-components-links-module-HeaderMobileModule-98f1cc061e63874377faa20543c564e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderMobileModule-98f1cc061e63874377faa20543c564e3"' :
                                            'id="xs-components-links-module-HeaderMobileModule-98f1cc061e63874377faa20543c564e3"' }>
                                            <li class="link">
                                                <a href="components/HeaderMobileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderMobileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link">HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-d5795f53ef016e3dff5f52a115e4b11b"' : 'data-target="#xs-components-links-module-HeaderModule-d5795f53ef016e3dff5f52a115e4b11b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-d5795f53ef016e3dff5f52a115e4b11b"' :
                                            'id="xs-components-links-module-HeaderModule-d5795f53ef016e3dff5f52a115e4b11b"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-77e0f163856fed2a2faede68bc6a6c23"' : 'data-target="#xs-components-links-module-LoginModule-77e0f163856fed2a2faede68bc6a6c23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-77e0f163856fed2a2faede68bc6a6c23"' :
                                            'id="xs-components-links-module-LoginModule-77e0f163856fed2a2faede68bc6a6c23"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NachhilfeGModule.html" data-type="entity-link">NachhilfeGModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NachhilfeGModule-d4e9acad049ae5509f618eeb7195f6a1"' : 'data-target="#xs-components-links-module-NachhilfeGModule-d4e9acad049ae5509f618eeb7195f6a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NachhilfeGModule-d4e9acad049ae5509f618eeb7195f6a1"' :
                                            'id="xs-components-links-module-NachhilfeGModule-d4e9acad049ae5509f618eeb7195f6a1"' }>
                                            <li class="link">
                                                <a href="components/NachhilfeGComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NachhilfeGComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NachhilfeModule.html" data-type="entity-link">NachhilfeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NachhilfeNModule.html" data-type="entity-link">NachhilfeNModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NachhilfeNModule-63871c8ad9ea3965857e85bda38d146f"' : 'data-target="#xs-components-links-module-NachhilfeNModule-63871c8ad9ea3965857e85bda38d146f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NachhilfeNModule-63871c8ad9ea3965857e85bda38d146f"' :
                                            'id="xs-components-links-module-NachhilfeNModule-63871c8ad9ea3965857e85bda38d146f"' }>
                                            <li class="link">
                                                <a href="components/NachhilfeDiagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NachhilfeDiagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NachhilfeNComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NachhilfeNComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NachhilfeWModule.html" data-type="entity-link">NachhilfeWModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NachhilfeWModule-a8493118f1c21a39ab429b575b12d177"' : 'data-target="#xs-components-links-module-NachhilfeWModule-a8493118f1c21a39ab429b575b12d177"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NachhilfeWModule-a8493118f1c21a39ab429b575b12d177"' :
                                            'id="xs-components-links-module-NachhilfeWModule-a8493118f1c21a39ab429b575b12d177"' }>
                                            <li class="link">
                                                <a href="components/NachhilfeWComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NachhilfeWComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link">RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-1b1b080012a3e4eed0b0d2968a0b377c"' : 'data-target="#xs-components-links-module-RegisterModule-1b1b080012a3e4eed0b0d2968a0b377c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-1b1b080012a3e4eed0b0d2968a0b377c"' :
                                            'id="xs-components-links-module-RegisterModule-1b1b080012a3e4eed0b0d2968a0b377c"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-b8af33e1aa337ae37eeb67bf29a2eac3"' : 'data-target="#xs-components-links-module-SettingsModule-b8af33e1aa337ae37eeb67bf29a2eac3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-b8af33e1aa337ae37eeb67bf29a2eac3"' :
                                            'id="xs-components-links-module-SettingsModule-b8af33e1aa337ae37eeb67bf29a2eac3"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-391870c786b9601628b027a0d065c202"' : 'data-target="#xs-components-links-module-SharedModule-391870c786b9601628b027a0d065c202"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-391870c786b9601628b027a0d065c202"' :
                                            'id="xs-components-links-module-SharedModule-391870c786b9601628b027a0d065c202"' }>
                                            <li class="link">
                                                <a href="components/BasicRouterOutletComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasicRouterOutletComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenericSnackbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenericSnackbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-391870c786b9601628b027a0d065c202"' : 'data-target="#xs-directives-links-module-SharedModule-391870c786b9601628b027a0d065c202"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-391870c786b9601628b027a0d065c202"' :
                                        'id="xs-directives-links-module-SharedModule-391870c786b9601628b027a0d065c202"' }>
                                        <li class="link">
                                            <a href="directives/CompareWithDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompareWithDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/EmailValidationDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailValidationDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/KlasseValidationDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">KlasseValidationDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WillkommenModule.html" data-type="entity-link">WillkommenModule</a>
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
                                <a href="classes/AdditionUserInfo.html" data-type="entity-link">AdditionUserInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericService.html" data-type="entity-link">GenericService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link">LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NachhilfeService.html" data-type="entity-link">NachhilfeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link">LoaderInterceptor</a>
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
                                <a href="interfaces/Endpoint.html" data-type="entity-link">Endpoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NachhilfeUser.html" data-type="entity-link">NachhilfeUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Settings.html" data-type="entity-link">Settings</a>
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
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});