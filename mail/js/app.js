// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



// create accepted emails array

const acceptedEmails = ['giorgiovanni@gmail.com', 'milanodascrocco@gmail.com', 'jesus@god.com', 'prayersoffice@god.com'];

// get email input

const submitButtonElement = document.getElementById('submitButton');

submitButtonElement.addEventListener('click', function(){

    const userEmailElement = document.getElementById('userEmail');
    let userEmail = userEmailElement.value;
    console.log(userEmail);
    
    // check if the email submitted is present in the accepted emails array
    
    let isUserEmailAccepted = false;
    
    for (i = 0; i < acceptedEmails.length; i++) {
        if (userEmail === acceptedEmails[i]){
            isUserEmailAccepted = true;
        }
    }
    
    // send message
    
    if (isUserEmailAccepted == false) {
        window.alert('The email address "' + userEmail + '" is not in the white list. Piss off or try with another one.') ;
    
    } else {
        window.alert('The email address "' + userEmail + '" is in the white list, welcome.');
    }
})

