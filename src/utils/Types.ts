export type CatDetailsData = {
	id: string;
	name: string;
	description: string;
	temperament: string;
	origin: string;
	life_span: string;
	wikipedia_url: string;
	adaptability: Number;
	affection_level: Number;
	child_friendly: Number;
	grooming: Number;
	intelligence: Number;
	health_issues: Number;
	social_needs: Number;
	stranger_friendly: Number;
	image: CatImageData;
}

export type CatImageData = {
	id: string;
	width: Number;
	height: Number;
	url: string
}