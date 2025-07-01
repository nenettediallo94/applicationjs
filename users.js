
const utilisateurs = [];

export function ajouterUtilisateur(nom) {
  utilisateurs.push(nom);
}

export function listerUtilisateurs() {
  console.log("Liste des utilisateurs :");
  utilisateurs.forEach((utilisateur, index) => {
    console.log(`${index + 1}. ${utilisateur}`);
  });
}

