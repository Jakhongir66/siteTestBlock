const personalT = document.querySelector('.personal-t');
const hoveredMenu = document.querySelector('.hovered-menu');
personalT.addEventListener('click', function () {
    hoveredMenu.classList.toggle('blocked');
})
// personalT.addEventListener('mouseleave', function () {
//     hoveredMenu.classList.remove('blocked');
// })