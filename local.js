localStorage.setItem('nom', 'Marie');
console.log(localStorage.getItem("nom"));

sessionStorage.setItem('role', 'admin');
console.log(sessionStorage.getItem("role"));

document.cookie = "username=Marie; expires-fri, 30 jun 2025 23:59:59 GMT; path=/"