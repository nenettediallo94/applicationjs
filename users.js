
let utilisateurs = [];

export function ajouterUtilisateur(nom) {
  utilisateurs.push(nom);
}

export function listerUtilisateurs() {
  console.log("Liste des utilisateurs :");
  utilisateurs.forEach((utilisateur, index) => {
    console.log(`${index + 1}. ${utilisateur}`);
  });
}

export function supprimerUtilisateur(nom) {
  const utilisateurExiste = utilisateurs.includes(nom); 

  if (utilisateurExiste) {
    utilisateurs = utilisateurs.filter(utilisateur => utilisateur !== nom);
    console.log(`${nom} a été supprimé.`);
  } else {
    console.log(`${nom} n'existe pas dans la liste.`);
  }
}