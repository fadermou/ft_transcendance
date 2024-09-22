function checkWindowSize() {
    if (window.innerWidth <= 800) {
        const element = document.querySelector('.mobile');
        const chatUrl = element.getAttribute('mobile-url');
        window.location.href =  chatUrl; 
    }
}

window.addEventListener('resize', checkWindowSize);

document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById("star-wars").addEventListener('click', function() {
        //     window.location.href = '';
        // });
        
    checkWindowSize();
    document.getElementById('ping-pong').addEventListener('click', function() {
        const chatUrl = this.getAttribute('pingpong-url');
        window.location.href =  chatUrl; 
    });
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