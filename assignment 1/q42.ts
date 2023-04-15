function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
  }
  
  let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel"];
  
  magicians = make_great(magicians);
  
  show_magicians(magicians);