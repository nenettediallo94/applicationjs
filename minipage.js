//// 1. querySelectorAll & forEach : Appliquer un effet à plusieurs boutons
const effectButtons = document.querySelectorAll('.effect-button');
effectButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'lightblue';
        button.textContent = 'Cliqué !';
        setTimeout(() => {
            button.style.backgroundColor = ''; // Réinitialiser la couleur
            button.textContent = button.dataset.originalText || button.textContent; // Restaurer le texte original
        }, 1000);
    });
    // Stocker le texte original pour le restaurer plus tard
    button.dataset.originalText = button.textContent;
});

// 2. click, mouseover, mouseout, scroll, keypress, load, form events

// Événement click (en utilisant addEventListener)
const singleClickButton = document.getElementById('single-click-button');
singleClickButton.addEventListener('click', () => {
    alert('Bouton cliqué en utilisant addEventListener !');
});

// Événements mouseover/mouseout
const hoverBlock = document.getElementById('hover-block');
hoverBlock.addEventListener('mouseover', () => {
    hoverBlock.style.backgroundColor = 'lightcoral';
    hoverBlock.textContent = 'Vous survolez !';
});
hoverBlock.addEventListener('mouseout', () => {
    hoverBlock.style.backgroundColor = 'lightgreen';
    hoverBlock.textContent = 'Survolez-moi !';
});

// Événement keypress
document.addEventListener('keypress', (event) => {
    const keyDisplay = document.getElementById('key-display');
    keyDisplay.textContent = `Touche pressée : "${event.key}" (Code de la touche : ${event.keyCode})`;
});

// Événement scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'lightgray';
        header.style.color = 'white';
    } else {
        header.style.backgroundColor = 'lightblue';
        header.style.color = 'black';
    }
});

// Événement load
window.addEventListener('load', () => {
    alert('La page a fini de charger !');
});

// Événement de soumission de formulaire
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire
    const nameInput = document.getElementById('name').value;
    alert(`Formulaire soumis ! Nom : ${nameInput}. (Soumission empêchée pour la démo)`);
    // Ici, vous enverriez normalement les données du formulaire à un serveur
});

// 3. addEventListener vs onclick :
// addEventListener est utilisé pour singleClickButton ci-dessus.
// onclick est utilisé directement dans le code HTML pour 'onclick-button'.

// 4. stopPropagation et removeEventListener

// stopPropagation
const parentDiv = document.querySelector('.parent-div');
const childDiv = document.querySelector('.child-div');

parentDiv.addEventListener('click', () => {
    alert('Div parent cliquée !');
});

childDiv.addEventListener('click', (event) => {
    event.stopPropagation(); // Empêcher le clic de remonter vers le parent
    alert('Div enfant cliquée ! (Événement parent empêché)');
});

// removeEventListener
const removeEventButton = document.getElementById('remove-event-button');
const removableListener = () => {
    alert('Cette alerte sera supprimée après 5 secondes !');
};

removeEventButton.addEventListener('click', removableListener);

setTimeout(() => {
    removeEventButton.removeEventListener('click', removableListener);
    removeEventButton.textContent = 'Événement Supprimé !';
    removeEventButton.style.backgroundColor = '#ccc';
    removeEventButton.style.cursor = 'not-allowed';
    alert('L\'événement de clic a été supprimé du bouton "Cliquez pour supprimer l\'événement".');
}, 5000);

// 5. Le BOM (window, location, innerWidth, etc.)
const screenWidthDisplay = document.getElementById('width-value');

const updateScreenWidth = () => {
    screenWidthDisplay.textContent = window.innerWidth;
};

// Afficher la largeur initiale
updateScreenWidth();

// Mettre à jour la largeur lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateScreenWidth);

// Vous pouvez également accéder à d'autres propriétés du BOM comme window.location, window.navigator, etc.
// console.log('URL actuelle :', window.location.href);
// console.log('Nom de code du navigateur :', window.navigator.appCodeName);


// 6. setProperty : Changer le CSS dynamiquement
const changeColorButton = document.getElementById('change-color-button');
const dynamicColorBox = document.getElementById('dynamic-color-box');
let isPurple = true;

changeColorButton.addEventListener('click', () => {
    if (isPurple) {
        document.documentElement.style.setProperty('--dynamic-bg-color', 'orange');
        dynamicColorBox.textContent = 'Orange !';
    } else {
        document.documentElement.style.setProperty('--dynamic-bg-color', 'purple');
        dynamicColorBox.textContent = 'Violet !';
    }
    isPurple = !isPurple;
});

// Définir le texte initial pour la boîte de couleur dynamique
dynamicColorBox.textContent = 'Violet !'