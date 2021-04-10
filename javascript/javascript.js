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
        //console.log(event.target.parentNode)
        const icon = event.target; // define the target element
        const card = icon.parentNode;
        if(icon.getAttribute('value') === 'remove'){ // get attribute from i element to remove target card
            last.removeChild(card); // remove target card
        }else if(icon.getAttribute('value') === 'edit'){ // get attribute from i element to edit target card
            const span = card.getElementsByTagName('span');
            for(let i = 0; i < span.length; i++) {
                const input = document.createElement('input'); // create input text to carry span value and can edit it
                input.type = 'text'; // add type to input
                input.value = span[i].textContent;  // take the text from span to the input
                card.insertBefore(input, span[0])
                span[i].remove() // remove span and add input in the same place
                i--; //this decreament because when remove a span element the span index getting decrease 
                //for example if the span length is 4 when we remove one they will be 3 so you should decrease that's why the index should to decrease
            }
            icon.className = 'fa fa-check-circle green-color'; // change icon from 'fa-edit' to 'fa-check-circle' to change icon shape
            icon.setAttribute('id',''); // change ID from 'edit' to 'green-color' to make icon have green color when hover on it
            icon.setAttribute('value',''); // remove value from icon to enter in the next 'if else
        }else if(icon.getAttribute('value') === ''){
            const input = card.getElementsByTagName('input');
            let class_arr = ["name", "date", "time", "duration"] //span class array
            for(i = 0; i < input.length; i++) {
                const span = document.createElement('span'); // create span to carry the input value
                span.textContent = input[i].value; // take the text from input to the span
                span.setAttribute("class", "subject subject-"+class_arr[i]) //back the class to span elements
                class_arr.shift() //remove first index of array elements every time
                card.insertBefore(span, input[0]); // change the place between input and span
                input[i].remove(); // remove span and add input in the same place
                i--;
            }    
            icon.className = 'fa fa-edit'; // change icon from 'fa-check-circle' to 'fa fa-edit' to change icon shape
            // icon.setAttribute('id',''); // remove ID 'green-color' to make icon have blue color when hover on it
            icon.setAttribute('class','fa fa-edit edit'); // change ID from 'green-color' to 'edit' to make icon have green color when hover on it
            icon.setAttribute('value','edit'); //Make value 'edit' to enter in first 'if else' condation
        }
    }
})