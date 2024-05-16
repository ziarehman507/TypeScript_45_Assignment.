function make_album(artist_name, title_name, tracks) {
    var album = {
        artist: artist_name,
        title: title_name
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Atta", "Album Title 1");
var album2 = make_album("Usman", "Album Title 2");
var album3 = make_album("Adnam", "Album Title 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
