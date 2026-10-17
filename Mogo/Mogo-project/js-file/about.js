// Add your about logic here.
function linkphoto() {
    let imgGoTeam = document.querySelector('.img-go-team');
    if (imgGoTeam) 
        imgGoTeam.addEventListener('click', function() {
            document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
        });
    }
    linkphoto();