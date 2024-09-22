function checkWindowSize() {
    if (window.innerWidth <= 800) {
        window.location.href = "../../templates/Mobile.html";
    }
}

window.addEventListener('resize', checkWindowSize);

document.addEventListener('DOMContentLoaded', function() {
    
    checkWindowSize();
    document.getElementById('home').addEventListener('click', function() {
        window.location.href = '../../templates/Home_page.html'; 
    });
    
    document.getElementById('profile').addEventListener('click', function() {
        window.location.href = '../../templates/Profile_page.html'; 
    });

    document.getElementById('game').addEventListener('click', function() {
        window.location.href = '../../templates/Game_page.html'; 
    });
    
    document.getElementById('tournoi').addEventListener('click', function() {
        window.location.href = '../../templates/Tournoi_page.html'; 
    });
    
    document.getElementById('chat').addEventListener('click', function() {
        window.location.href = '../Chat_page/test_first_page.html'; 
    });
    
    document.getElementById('settings').addEventListener('click', function() {
        window.location.href = '../../templates/Setting_page.html'; 
    });
    document.getElementById('Avatar').addEventListener('click', function() {
        window.location.href = '../../templates/avatar1.html'; 
    });
    
});