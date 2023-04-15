function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
      great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  let magicians: string[] = ["Alice", "Bob", "Charlie", "David"];
  let great_magicians: string[] = make_great([...magicians]);
  
  show_magicians(magicians);
  console.log();
  show_magicians(great_magicians);