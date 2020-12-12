document.getElementById('forma').addEventListener('submit', function(event){
    event.preventDefault();


    var validated = true;

    var name = $('#name');
    var lastname = $('#lastname');
    var email = $('#email');
    var people = $('#numberOfPeople');


    var nameValue = name.val();
    var lastnameValue = lastname.val();
    var emailValue = email.val();
    var peopleValue = people.val();

    const nameRgx = /^[A-ZČĆĐŠŽ][a-zčćđšž]{2,29}$/
    const mailRgx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    //validacija za name
    if(formaValidacija(nameValue, nameRgx))
    {
        ukloniError(name);
    }
    else{
        dodajError(name); validated = false;
        }


    //validacija za lastname
    if(formaValidacija(lastnameValue, nameRgx))
    {
        ukloniError(lastname);
    }
    else{
        dodajError(lastname); validated = false;
        }

    //email
    if(formaValidacija(emailValue, mailRgx))
    {
        ukloniError(email);
    }
    else{
        dodajError(email); validated = false;
        }

    //people
    if(peopleValue > 0 && peopleValue < 6)
    {
        ukloniError(people);
    }
    else{
        dodajError(people); validated = false;
        }

    function formaValidacija(value, regularExpression)
    {
     return regularExpression.test(value);
    }


    function dodajError(unos){ 
        unos.next().removeClass('errorHidden');
        unos.next().addClass('errorVisible');
        unos.addClass('error');
    }
    function ukloniError(unos){
        unos.next().removeClass('errorVisible');
        unos.next().addClass('errorHidden');
        unos.removeClass('error');
        }



    if(validated){
        document.getElementById('forma').submit();
    }
    });