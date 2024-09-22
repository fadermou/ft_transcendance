document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('rectang-8');
    const pages = [
        '../../templates/avatar1.html',
        '../../templates/avatar2.html',
        '../../templates/avatar3.html',
        '../../templates/avatar4.html',
        '../../templates/avatar5.html',
        '../../templates/avatar6.html',
        '../../templates/avatar7.html',
        '../../templates/avatar8.html'
    ];

    const positions = [
        {left: '18%' },
        {left: '32%' },
        {left: '46%' },
        {left: '60%' },
        {left: '75%' },
        {left: '90%' },
        {left: '104%' },
        {left: '118%' }
    ];
    const SwapTime = 2000;
    function swapPage(){
        console.log("heeeey");
        window.location.href = pages[0];
    }
    setTimeout(swapPage, SwapTime);
    pages.forEach((page, index) => {
        // console.log(index);
        const rect = document.createElement('div');
        rect.className = 'small-rect';
        rect.style.left = positions[index].left;
        if(index === 7)
            rect.style.backgroundColor = 'white';
        rect.addEventListener('click', function() {
        window.location.href = pages[index];
        });
        container.appendChild(rect);
    });
});

document.addEventListener('keydown', (Event) => {
    const pages = [
        '../../templates/avatar1.html',
        '../../templates/avatar2.html',
        '../../templates/avatar3.html',
        '../../templates/avatar4.html',
        '../../templates/avatar5.html',
        '../../templates/avatar6.html',
        '../../templates/avatar7.html',
        '../../templates/avatar8.html'
    ];
    if(Event.key === 'ArrowRight')
        window.location.href = pages[0];
    else if(Event.key === 'ArrowLeft')
        window.location.href = pages[6];
    console.log("hey there2");
});

function checkWindowSize() {
    if (window.innerWidth <= 800) {
        window.location.href = "../../templates/Mobile.html";
    }
}
window.addEventListener('resize', checkWindowSize);

document.addEventListener('DOMContentLoaded', function() {
    checkWindowSize();
    document.getElementById('r_click').addEventListener('click', function() {
        window.location.href = '../../templates/avatar1.html';
    });
    document.getElementById('l_click').addEventListener('click', function() {
        window.location.href = '../../templates/avatar7.html';
    });

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
    
});