const API = 'https://spotify23.p.rapidapi.com/artist_albums/?id=06HL4z0CvFAxyc27GXpf02&offset=0&limit=100';

// HTML
const Content_Albums = null || document.getElementById('Content_Albums')
const AlbumsTitle = null || document.getElementById('AlbumsTitle')

//

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9b77c9a6amsh2b83e467f3fea3cp1f9f10jsnca1cbfc6280c',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response =  await fetch(urlApi,options)
    const data = await response.json()
    return data
}

/*
 Vamo a crar una función que se invoca a sí misma 
 Automáticamente se llama a la función
 */

 (async () => {

    try {

        /*
        To do:

        Álbunes() >> Listo, FAlta encapsular en función.
        Songs() >> Falta, Crar la función y adaptar la respuesta de la API

        */


        const Data = await fetchData(API)
        console.log(Data);

        // CRear template html que itera por cada uno de los elementos que me regresa la solicitud
        AlbumsTitle.innerText = `Albums: ${Data.data.artist.discography.albums.totalCount}`

        let view = `
        ${Data.data.artist.discography.albums.items.map(album => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${album.releases.items[0].coverArt.sources[0].url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" >
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${album.releases.items[0].name}
                </h3>
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" >
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${album.releases.items[0].tracks.totalCount} Tracks
                </h3>
            </div>
            <div class="mt-4 flex justify-between">
                <a class="text-sm text-gray-700" href="${album.releases.items[0].sharingInfo.shareUrl}" style="cursor: pointer;" >
                <span aria-hidden="true" class="absolute inset-0"></span>
                </a>
            </div>

        </div>
        `).join('')}
        `;
        //Vamos a agregar el nuevo html PAra los álbunes
        Content_Albums.innerHTML = view;
        
    } catch (error) {
        console.log(error);
        // To-do : Un mensaje que el usuario pueda ver, como una ventana i.e
    }


 })();


