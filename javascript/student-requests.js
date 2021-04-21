/************* Student Requests *************/
/** It is for select checkbox */
let selectAll = document.getElementById('select-all');
let inputSelected = document.getElementsByClassName('select');
selectAll.onclick = () =>{ // arrow function
    if(selectAll.checked == true){
        document.querySelector('.accept-all').style.visibility = 'visible';//Make "Accept All" visible when the "Select all" checkbox is selected
        document.querySelector('.remove-all').style.visibility = 'visible';//Make "Remove All" visible when the "Select all" checkbox is selected
        for(let counter = 0; counter < inputSelected.length; counter++){
            inputSelected[counter].checked = true; //Check all the checkboxes on the cards
        }
    }else{
        document.querySelector('.accept-all').style.visibility = 'hidden';//Make "Accept All" hidden when the "Select all" checkbox is not selected
        document.querySelector('.remove-all').style.visibility = 'hidden';//Make "Remove All" hidden when the "Select all" checkbox is not selected
        for(let counter = 0; counter < inputSelected.length; counter++){
            inputSelected[counter].checked = false; //Uncheck all checkboxes in the cards
        }
    }
}
/**Event when click on 'Accept All', or 'Accept', or 'Remove All', 'Remove' do the action specific*/
const parentAllContant = document.getElementById('page-content');
parentAllContant.addEventListener("click", (event)=>{
    const input = event.target;//target the input when clicking on it
    const spanContainInput = input.parentNode;//target the parent of input
    const card = spanContainInput.parentNode;//target the card to can remove it when clicking on the 'Accept' or 'Remove'
    if(event.target.value === 'Accept' || event.target.value === 'Remove'){
        parentAllContant.removeChild(card);//remove selected card
    }else if(event.target.value === 'Accept All' || event.target.value === 'Remove All'){
        for(let counter = 0; counter < inputSelected.length; counter++){
            // Add the "inputSelected.length! = 0" condition because if the "select all" option is selected, but no card is left to delete or add it, an error may appear to avoid it. This condition has been added.
            if(card.getElementsByClassName('select')[counter].checked == true && inputSelected.length != 0){
                    card.removeChild(card.getElementsByClassName('student-info')[counter]);
                    // card.getElementsByClassName('student-info')[counter].remove();//Another way to remove selected card\s
                    counter--;//this decreament because when remove a span element the span index getting decrease
                    //for example if the cards length is 4 when we remove one they will be 3 so you should decrease that's why the index should to decrease
            }else if( card.getElementsByClassName('select')[0].checked == false){ /**To can 'accept' or 'remove' student when the first checkbox is unselected */
                if(card.getElementsByClassName('select')[counter].checked == true && inputSelected.length != 0){
                    card.removeChild(card.getElementsByClassName('student-info')[counter]);
                }
            }else{
                return 0;//So that no error appears when not selected any checkbox input for student card
            }
        }
    }
})
/************* Student Requests *************/