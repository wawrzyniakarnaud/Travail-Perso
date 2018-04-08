        document.getElementById('Validation').style.display = "none";

        function end_form() {
             var champ_obligatoire = ['nom', 'prenom', 'mail_inscription', ];
             var champ_plein = true;
             for (var h = 0; h < 3; h++) {    
                  valeur = document.getElementById(champ_obligatoire[h]).value;
                  console.log(valeur);
                  if ((valeur.length == 0) || (valeur == "") || (valeur == "NULL"))  {        
                       champ_plein = false;    
                  }
             } 
             if (champ_plein) {
                  document.getElementById('Validation').disabled = false;
                  document.getElementById('Validation').style.display = "block";


             } else {
                  document.getElementById('Validation').disabled = true;

             }
        }

        function validate() {

             if (document.form_js.subject.value == "") {
                  alert("Vous n'avez rien a me dire ?");
                  document.form_js.subject.focus();
                  document.form_js.subject.style.backgroundColor = "grey";
                  return false;

             }

        }

//function a()
     //Si tu clic sur l'onglet, il augmente sa largeur
     //Si l'onglet (id tada) es ouvert, ferme tous les autres.
     //Si tu clic a nouveau sur l'onglet, il reduit sa largeur,
     //Si tu clic sur un autre onglet alors que taba es ouvert, l'onglet s ouvre et taba se ferme.