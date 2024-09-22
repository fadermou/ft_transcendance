function checkWindowSize() {
    if (window.innerWidth <= 800) {
        const element = document.querySelector('.mobile');
        const chatUrl = element.getAttribute('mobile-url');
        window.location.href =  chatUrl; 
    }
}

window.addEventListener('resize', checkWindowSize);

document.addEventListener('DOMContentLoaded', function() {
    checkWindowSize();
    // document.getElementById("player-player").addEventListener('click', function() {
    //     // window.location.href = '';
    // });
    // document.getElementById("playAI").addEventListener('click', function() {
    //     // window.location.href = '';
    // });

    document.getElementById('home').addEventListener('click', function() {
        const chatUrl = this.getAttribute('home-url'); 
        window.location.href =  chatUrl; 
    });
    document.getElementById('game').addEventListener('click', function() {
        const chatUrl = this.getAttribute('game-url'); 
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

})