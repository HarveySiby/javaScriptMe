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
class User {
            constructor(username, email, password) {
                    this.username = username;
                    this.email = email;   
                    this.password = password;
            }   
            getUsername(){return this.username}
            getEmail(){return this.email}
            getPassword(){return this.password}
            }   

// CORRECTION STEP 2 BRIAN ADAPTEE !! 

        var loginButton = document.getElementById('login-submit');
        var registerButton = document.getElementById('register-submit');

            function showAlert(message){
                alert(message);
            }

            function checkUsername(username) {
                if (username.length < 5)
                    return false;
                else
                    return true;
            }

            function checkPassword(password) {
                var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
                    if (passwordRegex.test(password))
                        return true;
                    else
                        return false;
            }

            loginButton.onclick = function (event) {
                let form = document.getElementById('connexion-form');
                let email = form[0].value;
                let password = form[1].value;

                userString = localStorage.getItem('user'); {
                        
// REDIRECTION VERS PAGE HOME.HTML

                    if (user != null){
                        user = JSON.parse(userString);
                    if (user.email == email && user.password == password) {
                        document.location.href="file:///C:/Users/bessa/Documents/SIMPLON/JavascriptMe_correction-step2/JavascriptMe/home.html"; 
                    }
                    else showAlert("Erreur email ou mot de passe !");
                    }      
                }
            }    

            registerButton.onclick = function (event) {
                let form = document.getElementById('register-form');
                let username = form[0].value;
                let email = form[1].value;
                let password = form[2].value;
                let password_confirm = form[3].value;
                let error = false;
                let usernameStatus = checkUsername(username);
                    if(usernameStatus != true) {
                        showAlert('L\'username doit comporter au moins 5 caracteres')
                            error = true;
                    }

                let passwordStatus = checkPassword(password);
                    if(passwordStatus != true) {
                        showAlert('Votre mot de passe doit comporter au moins (1 minuscule, 1 majuscule, 1 chiffre)')
                            error = true;
                    }

                    if(password !== password_confirm) {
                        showAlert('La confirmation du mot de passe à echouer')
                            error = true;
                    }
                    
                    if(error == false) {
                        var user = new User (username, email, password);
                            
                        localStorage.setItem("user", JSON.stringify(user));  

                        console.log ("Bonjour" + user.getUsername () + "!");    
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

            
                 //le localStorage ne contient que des strings, il faut JSON pour le convertir dans un sens et dans l'autre. JSON est un objet ! Tjrs en MAJUSCULE

                userString = localStorage.getItem('user');
                user = JSON.parse(userString);

                function recuperer (){

                form = document.getElementsByTagName("input")[0];
                form = localStorage.getItem("username"),("email"),("password"); 
            }
        // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'
}