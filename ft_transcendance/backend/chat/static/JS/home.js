
function checkWindowSize() {
    if (window.innerWidth <= 800) {
        const element = document.querySelector('.mobile');
        const chatUrl = element.getAttribute('mobile-url');
        window.location.href =  chatUrl; 
    }
}

window.addEventListener('resize', checkWindowSize);

var typed = new Typed(".dynamic-h1", {
    strings : ["A New Place <br> For Professional<br> Ping Pong <br> Gamers ."],
    typeSpeed : 50,
    loope : true,
    backSpeed: 0

})

var typed = new Typed(".dynamic-h2", {
    strings : ["Experience the thrill of table tennis with our fast-paced Ping Pong Game! Master your skills, <br>compete with friends, and climb the leaderboards in this exciting arcade-style sports game."],
    typeSpeed : 20,
    startDelay: 4000,
    loope : true,
    backSpeed: 0
})

document.addEventListener('DOMContentLoaded', function() {
    checkWindowSize();

    document.getElementById('game').addEventListener('click', function() {
        const chatUrl = this.getAttribute('game-url'); 
        window.location.href =  chatUrl; 
    });
    document.getElementById('start').addEventListener('click', function() {
        const chatUrl = this.getAttribute('start-url'); 
        window.location.href =  chatUrl; 
    });
    document.getElementById('settings').addEventListener('click', function() {
        const chatUrl = this.getAttribute('setting-url'); 
        window.location.href =  chatUrl; 
    });
    document.getElementById('tournoi').addEventListener('click', function() {
        const chatUrl =this.getAttribute('tournoi-url'); 
        window.location.href =  chatUrl; 
    });
    document.getElementById('chat').addEventListener('click', function() {
        const username = '{{ request.user.username }}'; 
        if (username) {
            const chatUrl = this.getAttribute('chat-url'); 
            window.location.href = chatUrl; 
        } else {
            alert("You need to log in to access the chat.");
        }
    });
});

