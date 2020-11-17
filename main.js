// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number,arrDna){
  return {
    specimenNum: number,
    dna: arrDna,
    mutate(){
       let position = Math.floor(Math.random() * 15);
       switch (this.dna[position]){
         case "A":
          this.dna[position] = "T";
          break;
        case "T":
          this.dna[position] = "C";
        break;
        case "C":
          this.dna[position] = "G";
        break;
        case "G":
          this.dna[position] = "A";
        break;
        }
    },
    compareDNA(pAequor){
      let matches = 0;

      for(let i = 0; i<15 ; i++){
      if(pAequor.dna[i]===this.dna[i]){
        matches++;
      }};
      let percent = Math.floor(matches * 100 / 15);

      console.log(`Specimen #${pAequor.specimenNum} and Specimen #${this.specimenNum} have ${percent}% DNA in common` )

    },
    willLikelySurvive(){
      let counter = 0;
  
      for(let i=0; i<15 ; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          counter++;
        }
      }

      let percentCG = Math.floor(counter * 100 / 15);

      if(percentCG >= 60){
        return true;
      }else{
        return false;
      }
    }
  
  }
}
let arrayDNA = [];
for(let i=0; i<30; i++){
  let test = pAequorFactory(i,mockUpStrand());
  if(test.willLikelySurvive()){
    arrayDNA.push(test);
  }
}
console.log(arrayDNA.length);








