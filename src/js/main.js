// add scripts

$(document).on('ready', function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
    });


    ['preferredName', 'lastName'].forEach(function(inputName) {
        var $input = $("input[name='" + inputName + "']")
        $input.on('focusout', function() {
            var val = $input.val();
            if (!val) {
                $input.addClass('warning');
            } else {
                $input.removeClass('warning');
            }
        });
    });

    var $emailInput = $('input[name="email"]')

    $emailInput.on('keydown', function() {
        var email = $emailInput.val();
        if (!validateEmail(email)) {
            $emailInput.addClass('warning');
        } else {
            $emailInput.removeClass('warning');
        }
    })

});

function validateEmail (email) {
    if (!(email.includes('@') && email.includes('.'))) {
        return false;
    } else if ((email.indexOf('@')+1) === '.') {
        return false;
    } else if ((email.indexOf('.')+1) === '') {
        return false;
    } else {
        return true;
    }
}
