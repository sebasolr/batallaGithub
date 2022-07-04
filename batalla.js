let repositories = document.querySelector('.repo');
let boton1 = document.querySelector('.boton1');
let url = `https://api.github.com/users/`
let nombre1 = document.querySelector('.nombre1');
let followings = document.querySelector('.followings');
let foll = document.querySelector('.foll')
let gist = document.querySelector('.gist')
let score = document.querySelector('.scores')
let input1 = document.querySelector('.input1');
let ready1 = async function () {
    try {
        let datos = await fetch(url + input1.value);
        datos = await datos.json();
        let logins = datos.login;
        let repos = datos.public_repos;
        let seguidores = datos.followers
        let seguidos = datos.following
        let gisst = datos.public_gists
        let resultado = 0;
        if (logins === undefined) {
            alert("ingresa un usuario valido")
        } else {

            nombre1.innerHTML = logins
            repositories.innerHTML = repos
            foll.innerHTML = seguidores
            followings.innerHTML = seguidos
            gist.innerHTML = gisst
            resultado = + repos + seguidores + seguidos + gisst
            score.innerHTML = (resultado)


            console.log(datos)
        }
    }
    catch (error) {
        console.log(error)
    }
}

boton1.addEventListener('click', function () {
    if (input1.value === "") {
        console.log('Ingresa un usuario')
    } else {
        ready1()
    }

})