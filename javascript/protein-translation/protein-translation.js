
const acidToProteins = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'stop',
  UAG: 'stop',
  UGA: 'stop',
};


const translateProtein = codon => acidToProteins[codon] || 'invalid';

function translate(rna) {

	var proteins = [];

	if (rna) {
		
		for (var i = 0; i < rna.length; i+=3) {
		
			var protein = translateProtein(rna.substring(i,i+3));
			
			if (protein) {

				if (protein === 'stop') {
			 		break;
			 	}
			 	if (protein === 'invalid') {
			 		throw new Error('Invalid codon')
			 	}
			}

			proteins.push(protein);
			
		}
	}	
	return proteins;
};

export default translate;
