console.log('loading portfolio.js ...')

var i = 0;

function initializePage() {
    if (this.state) {
        console.log('state exists IDK :shrug:', this.state)
    } else {
        this.state = { defaultAnimDuration: 5000 }
        
        let cookie_page = getCookie('currentPage')
        if(cookie_page) {
            navPage(cookie_page)
        } else {
            navPage('pages/home.html')
        }
        console.log('app state initialized', this.state)
    }
    initializeAnimations()
}

function initializeAnimations() {
    document.getElementById('main-content').style.setProperty('--animation-duration', this.state.defaultAnimDuration)
}

function navPage(pageTitle) {
    if (this.state.currentPage !== pageTitle) {
        let card = document.getElementById('main-content')
        card.classList.remove('content')
        fetch(pageTitle).then(response => response.text())
            .then(data => {
                card.innerHTML = data;
                card.classList.add('content')
                this.state.currentPage = pageTitle
                document.cookie = 'currentPage='+pageTitle
            });
            console.log('remove content', card.innerText)
    }
}

function setTheme(themeName) {
    const rootObj = document.getElementById('root')
    if (this.state) {
        this.state.theme = themeName
    }
    rootObj.setAttribute('app-theme', themeName)
    console.log('theme:: ', themeName)
}

console.log('finished loading portfolio.js')