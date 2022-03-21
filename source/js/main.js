(function() {
    // Add event
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');
    
    if(openFormButton) {
        openFormButton.addEventListener('click', (e) => {
            e.preventDefault();
            SITE.form.open();
        })
    }

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(SITE.form.isValid()) {
                console.log("All good");
            } else {
                console.log("Not good");
            }

            
        })
    }

    if(nav) {
        nav.addEventListener('click', (e) => {
            var target = e.target;

            if(target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            SITE.navigation.toggleToActiveLink(target);
        })
    }
}());