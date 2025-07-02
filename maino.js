

import {
  ajouterUtilisateur,
  listerUtilisateurs,
  supprimerUtilisateur
} from './users.js';


ajouterUtilisateur("Ali");
ajouterUtilisateur("Seydou");
ajouterUtilisateur("Fatou");


listerUtilisateurs();


supprimerUtilisateur("Seydou");


listerUtilisateurs();

