const TopNavigationTemplate = `
    <div>
        <!-- NAVBAR -->
    <nav class="navbar is-fixed-top has-background-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="p-3">
                <a class="navbar-item has-text-weight-bold" style="display: block; background-image: url('./img/redeploy-sh-logo.png'); background-size: contain; background-repeat: no-repeat; width: 110px; height: 31px;">
                </a>
            </div>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <span class="material-symbols-outlined is-size-5" style="position: relative; top: 2px;">account_tree</span>
                        &nbsp;
                        Deployments
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            AWS
                        </a>
                        <a class="navbar-item is-selected">
                            Jenkins
                        </a>
                        <a class="navbar-item">
                            Docker
                        </a>
                        <a class="navbar-item">
                            Other
                        </a>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <span class="material-symbols-outlined is-size-5 pr-2" style="position: relative; top: 2px;">sell</span>
                        Featured Tags
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            #wordpress
                        </a>
                        <a class="navbar-item is-selected">
                            #october-cms
                        </a>
                        <a class="navbar-item">
                            #magento
                        </a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
<!--                <input type="text" class="input mt-2" placeholder="Search for a Deployment..." />-->
                <div class="dropdown is-active">
                    <div class="dropdown-trigger">
                        <input type="text" @keyup="showSearch()" class="input mt-2" style="width: 36rem;" placeholder="Search for a deployment with text or by #tag" />
                    </div>
                    <div v-if="doShowSearch" class="dropdown-menu" id="dropdown-menu" role="menu" style="min-width: 36rem; !important">
                        <div class="dropdown-content">
                            <div class="dropdown-item p-0">
                                <!-- SMALL DEPLOYABLE - MEANT FOR MENU -->
                                <div class="deployable-small is-in-menu is-size-7 pl-4 pr-4 pb-0 pt-0">
                                    <div class="columns">
                                        <div class="column is-1">
                                            <a>SP<sup>(R)</sup></a>
                                        </div>
                                        <div class="column">
                                            <a>My Amazing Deployable</a>
                                        </div>
                                        <div class="column has-text-right">
                                            <a>#some-tag</a>
                                            <a>#some-other-tag</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="dropdown-divider" />

                            <div class="dropdown-item p-0">
                                <!-- SMALL DEPLOYABLE - MEANT FOR MENU -->
                                <div class="deployable-small is-in-menu is-size-7 pl-4 pr-4 pb-0 pt-0">
                                    <div class="columns">
                                        <div class="column is-1">
                                            <a>SP<sup>(R)</sup></a>
                                        </div>
                                        <div class="column">
                                            <a>My Amazing Deployable</a>
                                        </div>
                                        <div class="column has-text-right">
                                            <a>#some-tag</a>
                                            <a>#some-other-tag</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="dropdown-divider" />

                            <div class="dropdown-item p-0">
                                <!-- SMALL DEPLOYABLE - MEANT FOR MENU -->
                                <div class="deployable-small is-in-menu is-size-7 pl-4 pr-4 pb-0 pt-0">
                                    <div class="columns">
                                        <div class="column is-1">
                                            <a>SP<sup>(R)</sup></a>
                                        </div>
                                        <div class="column">
                                            <a>My Amazing Deployable</a>
                                        </div>
                                        <div class="column has-text-right">
                                            <a>#some-tag</a>
                                            <a>#some-other-tag</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">

                        <a class="button is-light">
                            <span class="material-symbols-outlined is-size-5" style="position: relative; top: 1px;">account_circle</span>&nbsp;Sign up / Log In
                        </a>
                        <a class="button is-info">
                            <span class="material-symbols-outlined is-size-5" style="position: relative; top: 1px;">add_circle</span>&nbsp;Post a Deployment
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- SIDE MENU -->
    <div class="sidebar has-background-light">
        <aside class="menu is-hoverable">
            <p class="menu-label">Search Deployments</p>
            <div class="menu-list pb-2">
                <input class="input" type="text" placeholder="Search terms or #tag" style="width: 100%;" />
            </div>
            <p class="menu-label"><span class="material-symbols-outlined" style="position: relative; top: 5px;">check</span> Actions</p>
            <ul class="menu-list is-hoverable">
                <li><a>Create a Deployment</a></li>
                <li><a>Create a Remix</a></li>
            </ul>
            <p class="menu-label"><span class="material-symbols-outlined is-size-5" style="position: relative; top: 5px;">account_tree</span> Deployments</p>
            <ul class="menu-list">
                <li><a>AWS</a></li>
                <li><a>Jenkins</a></li>
                <li><a>Docker</a></li>
                <li><a>Other</a></li>
            </ul>
            <p class="menu-label"><span class="material-symbols-outlined is-size-5" style="position: relative; top: 5px;">sell</span> Featured Tags</p>
            <ul class="menu-list">
                <li><a>#wordpress</a></li>
                <li><a>#october-cms</a></li>
                <li><a>#magento</a></li>
            </ul>
            <p class="menu-label"><span class="material-symbols-outlined is-size-5" style="position: relative; top: 5px;">account_circle</span>&nbsp;Account</p>
            <ul class="menu-list">
                <li><a>Sign Up / Log In</a></li>
            </ul>
        </aside>

    </div>
    </div>
    
    
`;
export { TopNavigationTemplate }