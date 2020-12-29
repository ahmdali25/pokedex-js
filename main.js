fetch('https://pokeapi.co/api/v2/pokemon')
    .then(
        function(response) {
            if(response.status != 200) {
                console.log("Oops.." + response.status);
                return
            }
        

        response.json().then(function(data){
            const pokemons = data.results;
            pokemons.forEach(pokemon => {
                document.querySelector('#pokemonList')
                    .insertAdjacentHTML('beforeend',
                        `<li onclick='detail("${pokemon.url}")'>${pokemon.name} </li>`
                    )
            });
        });
    })
    .catch( function(err){
        console.log(err);
    });

    function detail(url) {
        fetch(url).then(function(response) {
            response.json().then(function(pokemon){
                document.querySelector('#detail').innerHTML = ''
                document.querySelector('#detail')
                    .insertAdjacentHTML('beforeend',
                        `<h3> ${pokemon.name} </h3>
                        <img src='${pokemon.sprites.front_default}'>
                        <p>Move : ${pokemon.moves[0].move.name}</p>
                        <p>Height : ${pokemon.height} </p>
                        <p>Weight : ${pokemon.weight} </p>`
                    )
            });
        });
    }