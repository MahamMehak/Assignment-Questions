function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel"];
  
  show_magicians(magicians);