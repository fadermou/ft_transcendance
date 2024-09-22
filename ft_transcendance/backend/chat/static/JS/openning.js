function checkWindowSize() {
    if (window.innerWidth <= 800) {
        window.location.href = "../../templates/Mobile.html";
    }
}
window.addEventListener('resize', checkWindowSize);

checkWindowSize();

document.getElementById('clickme').addEventListener('click', function() {
    window.location.href = '../../templates/first_page.html';
});
