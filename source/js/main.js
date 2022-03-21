(function() {
    // Add event
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    
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
}());