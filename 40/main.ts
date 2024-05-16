function make_album (artist_name : string , title_name : string , tracks?:number) {
    let album : {artist: string, title:string,tracks?:number}={
        artist: artist_name,
        title: title_name
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album

}

let album1 = make_album("Atta", "Album Title 1")
let album2 = make_album("Usman", "Album Title 2")
let album3 = make_album("Adnam", "Album Title 3", 5)


console.log(album1);
console.log(album2);
console.log(album3);


