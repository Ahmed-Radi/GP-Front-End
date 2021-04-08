// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

const last = document.getElementById('last'); // define parent contain all cards
last.addEventListener("click", (event)=>{ // add click event in parent
    if(event.target.tagName === 'I'){ // Write 'I' not 'i'tag name must be upper case
        const icon = event.target; // define the target element
        const card = icon.parentNode;
        if(icon.getAttribute('value') === 'remove'){ // get attribute from i element to remove target card
            last.removeChild(card); // remove target card
        }else if(icon.getAttribute('value') === 'edit'){ // get attribute from i element to edit target card
            const span = card.firstElementChild;
            const input = document.createElement('input'); // create input text to carry span value and can edit it
            input.type = 'text'; // add type to input
            input.value = span.textContent; // take the text from span to the input
            card.insertBefore(input, span);// change the place between input and span
            card.removeChild(span); // remove span and add input in the same place
            icon.className = 'fa fa-check-circle green-color'; // change icon from 'fa-edit' to 'fa-check-circle' to change icon shape
            // icon.setAttribute('id',''); // change ID from 'edit' to 'green-color' to make icon have green color when hover on it
            icon.setAttribute('value',''); // remove value from icon to enter in the next 'if else'
        }else if(icon.getAttribute('value') === ''){
            const input = card.firstElementChild;
            const span = document.createElement('span'); // create span to carry the input value
            span.textContent = input.value; // take the text from input to the span
            card.insertBefore(span, input); // change the place between input and span
            card.removeChild(input); // remove span and add input in the same place
            icon.className = 'fa fa-edit'; // change icon from 'fa-check-circle' to 'fa fa-edit' to change icon shape
            // icon.setAttribute('id',''); // remove ID 'green-color' to make icon have blue color when hover on it
            icon.setAttribute('class','fa fa-edit edit'); // change ID from 'green-color' to 'edit' to make icon have green color when hover on it
            icon.setAttribute('value','edit'); //Make value 'edit' to enter in first 'if else' condation
        }
    }
})