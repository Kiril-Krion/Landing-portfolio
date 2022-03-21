(function() {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            me.close();
        }
    })

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose)
    }

    me.open = function() {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
    };

    me.close = function() {
        form.classList.add('is-hidden');
    }

    me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if(!me.isAllCompleted(requiredFields)) {
            console.log("Pls fill in the fields");
            return false;
        } else if(!SITE.validation.isEmail(emailValue)){
            console.log("Email not correct");
            return false;
        } else if(!SITE.validation.isNumber(numberValue)) {
            console.log("Number not correct");
            return false;
        }

        return true;
       
    };

    me.isAllCompleted = function(data) {
        var result = true;
        for(var i = 0; i < data.length; i++) {
            if(!SITE.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        return result;
    };

    SITE.form = me;
}());