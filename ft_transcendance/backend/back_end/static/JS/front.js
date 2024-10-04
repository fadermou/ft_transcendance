//load and remove .css files
let index = 0;
let login = 0;


function removeCssFiles(){
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(link => {
        link.parentNode.removeChild(link);
    });
}

function loadCssFile(cssFile, content){
    removeCssFiles();
    let existLink = document.querySelector(`link[href="${cssFile}"]`);
    if (!existLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssFile;
        document.head.appendChild(link);
    }
    if (window.location.hash !== `#${content}`) {
        window.history.pushState({content, cssFile}, 'firstContent', `#${content}`);
    }
}

function HomeContent(){
    loadCssFile('../static/Css/Home.css', 'homeContent');
    var typed = new Typed(".dynamic-h1", {
        strings : ["A New Place <br> For Professional<br> Ping Pong <br> Gamers ."],
        typeSpeed : 50,
        showCursor: false
    })
    
    var typed = new Typed(".dynamic-h2", {
        strings : ["Experience the thrill of table tennis with our fast-paced Ping Pong Game! Master your skills, <br>compete with friends, and climb the leaderboards in this exciting arcade-style sports game."],
        typeSpeed : 20,
        startDelay: 4200,
        showCursor: false
    })
    document.getElementById('start').addEventListener('click', function() {
        LoadContent('gameContent');
    });
}

function GameContent(){
    loadCssFile('../static/Css/Game.css', 'gameContent');
    document.getElementById('to_tournoi').addEventListener('click', function() {
        LoadContent('tournoiContent');
    });
    document.getElementById('start').addEventListener('click', function() {
        LoadContent('ChooseGame');
    });
}

function SettingContent(){
    loadCssFile('../static/Css/Setting.css', 'settingContent');
    document.getElementById('Edit').addEventListener('click', function() {
        loadCssFile('../static/Css/Edit.css', 'EditContent');
        LoadContent('EditContent');
    });
}

function ChooseGame(){
    loadCssFile('../static/Css/ChooseGame.css', 'gameContent');
    document.getElementById('ping-pong').addEventListener('click', function() {
        loadCssFile('../static/Css/Ai.css', 'ChooseAi');
        LoadContent('ChooseAi');
    });
}

function EditContent(){
    loadCssFile('../static/Css/Edit.css', 'EditContent');
    document.getElementById('Avatar').addEventListener('click', function() {
        loadCssFile('../static/Css/avatar1.css', 'avatar1');
        LoadContent('Avatar1');
    });
}

function LoadContent(templateId){

    const template = document.getElementById(templateId);
    if (!template) {
        console.error(`Template with id "${templateId}" not found`);
        return;
    }
    const templateContent = template.content.cloneNode(true);
    const dynamicContent = document.getElementById('templates-area');
    dynamicContent.innerHTML = '';

    dynamicContent.appendChild(templateContent);
    if(templateId === 'openningContent'){
        loadCssFile('../static/Css/openning.css', 'openningContent');
        document.getElementById('clickme').addEventListener('click', function() {
            loadCssFile('../static/Css/first_page.css', 'firstContent');
            LoadContent('firstContent');
            
        });
    }
    // console.log(templateId);
    if(templateId === 'firstContent'){
        // console.log(666);
        document.getElementById('intra42-login-btn').addEventListener('click', function() {
            // console.log(555);
            const intra42LoginUrl = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-e5437d72a82b82ecee1a09bda3d32caf037304254c571cacb12bc31aed110266&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Faccounts%2F42intra%2Flogin%2Fcallback%2F&response_type=code";
            window.location.href = intra42LoginUrl;
            templateId = 'dataContent';
        });
    }
    if(templateId === 'dataContent'){
        loadCssFile('../static/Css/data_page.css', 'dataContent');
        LoadContent('dataContent');
    }
    if(templateId === 'homeContent')
        HomeContent();
    if(templateId === 'gameContent')
        GameContent();
    if(templateId === 'settingContent')
        SettingContent();
    if(templateId === 'ChooseGame')
        ChooseGame();
    if(templateId === 'EditContent')
        EditContent();
    if(templateId === 'tournoiContent')
        loadCssFile('../static/Css/Tournoi.css', 'tournoiContent');
        if(templateId === 'mobile'){
            document.getElementById('back-home').addEventListener('click', function() {
            LoadContent('homeContent');
        });
    }
    if(templateId === 'Avatar1' || templateId === 'Avatar2' ||templateId === 'Avatar3' || templateId === 'Avatar4'
     || templateId === 'Avatar5' || templateId === 'Avatar6' || templateId === 'Avatar7' || templateId === 'Avatar8'){
        const pages =[
            'Avatar1', 'Avatar2', 'Avatar3', 'Avatar4',
            'Avatar5', 'Avatar6', 'Avatar7', 'Avatar8'
        ];
        const csspages =[
            '../static/Css/avatar1.css', '../static/Css/avatar2.css', '../static/Css/avatar3.css', '../static/Css/avatar4.css',
            '../static/Css/avatar5.css', '../static/Css/avatar6.css', '../static/Css/avatar7.css', '../static/Css/avatar8.css'
        ];
        function rswapPage(){
            document.getElementById('r_click').addEventListener('click', function() {
                index = (index + 1) % pages.length;
                loadCssFile(csspages[index], pages[index]);
                LoadContent(pages[index]);
        });
        };
        function lswapPage(){
            document.getElementById('l_click').addEventListener('click', function() {
                index = (index - 1 + pages.length) % pages.length;
                loadCssFile(csspages[index], pages[index]);
                LoadContent(pages[index]);
            });
        };
        rswapPage();
        lswapPage();
    }
};

function checkWindowSize() {
    if (window.innerWidth <= 800) {
        loadCssFile('../static/Css/Mobile.css', 'mobile');
        LoadContent('mobile');
    }
}

window.addEventListener('resize', checkWindowSize);

// window.addEventListener('hashchange', function() {
//     const currentHash = window.location.hash.replace('#', '');
//     LoadContent(currentHash);
// });
// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }

document.addEventListener('DOMContentLoaded', function() {
    console.log("hereeeeeee");

    window.addEventListener('popstate', function(event) {
        if (event.state) {
            LoadContent(event.state.content);
            loadCssFile(event.state.cssFile, event.state.content);
        }
    });
    checkWindowSize();

    // fetch('/json/')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();  // Convert the response to JSON
    // })
    // .then(data => {
    //     const isLoggedIn = data.is_logged_in;
    //     console.log('Is Logged In:', isLoggedIn);  // Outputs true or false

    //     // Load different content based on is_logged_in value
    //     if (isLoggedIn) {
    //         LoadContent('homeContent');
    //     } else {
    //         LoadContent('openningContent');
    //     }
    // })
    // .catch(error => {
    //     console.error('Error fetching the JSON data:', error);
    // });
    // .catch(error => console.error('Error:', error));
    // const isLoggedIn = getCookie('is_logged_in');
    
    // console.log(isLoggedIn);
    // if (isLoggedIn === 'true') {
    //     LoadContent('homeContent');
    // } else {
        LoadContent('openningContent');
    // }
    // LoadContent('openningContent');
    // login = 1;
    // if(login === 1){
        document.getElementById('home').addEventListener('click', function() {
            LoadContent('homeContent');
        });
        document.getElementById('game').addEventListener('click', function() {
            LoadContent('gameContent');
        });
        document.getElementById('tournoi').addEventListener('click', function() {
            LoadContent('tournoiContent');
        });
        document.getElementById('settings').addEventListener('click', function() {
            LoadContent('settingContent');
        });
       
    // }
    // document.getElementById('chat').addEventListener('click', function() {
    //     LoadContent('tournoiContent');
    // });
});

