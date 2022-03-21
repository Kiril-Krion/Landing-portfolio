(function() {
    // Add event
    var openFormButton = document.querySelector('.arrow-down');
    
    if(openFormButton) {
        openFormButton.addEventListener('click', (e) => {
            e.preventDefault();
            form.open();
        })
    }

    
}());