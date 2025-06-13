Init();

function Init() {
    const roleButton = document.getElementById('role');
    const actorButton = document.getElementById('actor');
    const profileButton = document.getElementById('profile');
    const whoButton = document.getElementById('who');
    const whatButton = document.getElementById('what');
    const projectButton = document.getElementById('projects');

    if (roleButton) {
        roleButton.addEventListener('click',function() {
            window.scrollTo({ left: 1550, behavior: 'smooth'})
        })
    }
    
    if (actorButton) {
        actorButton.addEventListener('click',function() {
            window.scrollTo({ left: 2550, behavior: 'smooth'})
        })
    }
    if (profileButton) {
        profileButton.addEventListener('click',function() {
            window.scrollTo({ left: 3550, behavior: 'smooth'})
        })
    }
       if (whoButton) {
        whoButton.addEventListener('click',function() {
            window.scrollTo({ left: 1550, behavior: 'smooth'})
        })
    }
    
       if (whatButton) {
        whatButton.addEventListener('click',function() {
            window.scrollTo({ left: 2300, behavior: 'smooth'})
        })
    }
    
       if (projectButton) {
        projectButton.addEventListener('click',function() {
            window.scrollTo({ left: 3550, behavior: 'smooth'})
        })
    }
    

}
