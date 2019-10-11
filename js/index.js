window.onload = function() {
    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

var signup = document.querySelectorAll(".square-button-empty");

for (var i= 0; i<signup.length; i++){

    signup[i].onclick = function(e){
    var regist = document.querySelector("#register-form");
    var con = document.querySelector("#connexion-form");

    // con.style.display = "none";
    // regist.style.display ="flex";

if(e.target.getAttribute("data-form") == 0){
    con.style.display = "none";
    regist.style.display ="flex";
}

else if (e.target.getAttribute("data-form") != 1){
    con.style.display = "flex"
    regist.style.display ="none"}
}
}
  

    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QU'AU CLICK SUR LES BOUTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

var recupere1 = document.getElementById("square-button1");
var recupere2 = document.getElementById("square-button2");
var inputForm1 = document.getElementsByClassName("form-control-connexion");
var inputForm2 = document.getElementsByClassName("form-control-register");

    recupere1.addEventListener("click",function(e){
    
    for (var i= 0; i<inputForm1.length; i++){
    var inputValue = inputForm1[i].value;
    console.log(inputValue);
    }
})
    // ici se trouve registrer //

    recupere2.addEventListener("click",function(e){
    
    for (var i= 0; i<inputForm2.length; i++){ 
    var inputValue = inputForm2[i].value;
    console.log(inputValue);
    checkpassword2 ();
    password_register ();
    }

    function checkpassword2 (){ 

    var y = document.getElementById("username-register").value;
    if(y.length <= 5){ 
    alert("Entrer un pseudonyme avec" + " " + 5 + " " + "caractères minimum");
    return true;
    }
    else{ 
    alert("Votre pseudonyme est accepté.");
    return false;
    }

    function password_register (){

    var x = document.getElementById("password-register").value;
    if(/x.^?=.{8,}$?=.*?[A-Z]?=.*[0-9]/){ 
    alert("Entrer un mot de passe avec" + " " + 8 + "characters minimum, une majuscule et un chiffre");
    return true;
    }
    else{ 
    alert("Votre pseudonyme est accepté.");
    return false;
    }

}
}
        // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'
class User {
    
    constructor(username, email, password) {
        this.username = username;
        this.email = email;   
        this.password = password;
    }   
    getUsername(){return this.username}
    getemail(){return this.email}
    getpassword(){return this password}
}   
}   

//     let user = new User 

//     function Personne(nom) {
//     this.nom = nom;
//     this.salutation = function() {
//     alert('Bonjour ! Je m\'appelle ' + this.nom + '.');
//   };
// }




    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


});
} 