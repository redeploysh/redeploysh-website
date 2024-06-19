const TopNavigationTemplate = `
    <nav id="top-navigation">
        <h1>redeploy.sh</h1>
        <div id="center-nav">
            <div>
                <input v-bind="search-input-text" type="text" placeholder="freeform or #tag" />
                <button @click="search()">?</button>
            </div>
            <div class="tags">
                <span>Top Tags:</span>
                <div id="tag-wrapper">
                    <a class="tag">asdfadsf asdfasdf </a>
                    <a class="tag">asdfadsf asdfasdf</a>
                    <a class="tag">asdfadsf</a>
                    <a class="tag">asdfadsf</a>
                    <a class="tag">asdfadsf</a>
                    <a class="tag">asdfadsf</a>
                </div>
                
            </div>
        </div>
        <div id="hamburger">[hamburger]</div>
    </nav>
`;
export { TopNavigationTemplate }