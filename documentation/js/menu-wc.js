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
                    <a href="index.html" data-type="index-link">weather documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dcf79a866b595658d44bd647910dc5ce"' : 'data-target="#xs-components-links-module-AppModule-dcf79a866b595658d44bd647910dc5ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dcf79a866b595658d44bd647910dc5ce"' :
                                            'id="xs-components-links-module-AppModule-dcf79a866b595658d44bd647910dc5ce"' }>
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
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link">PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-c5946c586b6a85313a76039d5d5fd81f"' : 'data-target="#xs-components-links-module-PublicModule-c5946c586b6a85313a76039d5d5fd81f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-c5946c586b6a85313a76039d5d5fd81f"' :
                                            'id="xs-components-links-module-PublicModule-c5946c586b6a85313a76039d5d5fd81f"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' : 'data-target="#xs-components-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' :
                                            'id="xs-components-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' }>
                                            <li class="link">
                                                <a href="components/CityCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityForecastComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CityForecastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' : 'data-target="#xs-pipes-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' :
                                            'id="xs-pipes-links-module-SharedModule-25f4b496513acfce511fa1c2b1cc3f18"' }>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CityCardComponent.html" data-type="entity-link">CityCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CityForecastComponent.html" data-type="entity-link">CityForecastComponent</a>
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
                                    <a href="injectables/WeatherApiService.html" data-type="entity-link">WeatherApiService</a>
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
                                <a href="interfaces/CityForecast.html" data-type="entity-link">CityForecast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityForecastCity.html" data-type="entity-link">CityForecastCity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityForecastList.html" data-type="entity-link">CityForecastList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfo.html" data-type="entity-link">CityInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoClouds.html" data-type="entity-link">CityInfoClouds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoCoord.html" data-type="entity-link">CityInfoCoord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoFormatted.html" data-type="entity-link">CityInfoFormatted</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoMain.html" data-type="entity-link">CityInfoMain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoMappedInfo.html" data-type="entity-link">CityInfoMappedInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoSys.html" data-type="entity-link">CityInfoSys</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoWeather.html" data-type="entity-link">CityInfoWeather</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityInfoWind.html" data-type="entity-link">CityInfoWind</a>
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