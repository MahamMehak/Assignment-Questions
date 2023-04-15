function make_album(artist: string, album: string, tracks?: number) {
    let album_details: { artist: string, album: string, tracks?: number } = {
      artist: artist,
      album: album
    };
    if (tracks) {
      album_details.tracks = tracks;
    }
    return album_details;
  }
  
  let album1 = make_album("pink floyd", "dark side of the moon");
  let album2 = make_album("led zeppelin", "IV", 8);
  let album3 = make_album("the beatles", "abbey road", 10);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  