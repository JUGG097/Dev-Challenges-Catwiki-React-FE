import { BreedListData, CatDetailsData } from "./Types";

export const MockCatDetailData: CatDetailsData[] = [
	{
		id: "beng",
		name: "Bengal",
		temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
		origin: "United States",
		description:
			"Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
		life_span: "12 - 15",
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		health_issues: 3,
		intelligence: 5,
		social_needs: 5,
		stranger_friendly: 3,
		wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
		image: {
			id: "O3btzLlsO",
			width: 1100,
			height: 739,
			url: "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
		},
	},
	{
		id: "birm",
		name: "Birman",
		temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
		origin: "United States",
		description:
			"Birman are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
		life_span: "12 - 15",
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		health_issues: 3,
		intelligence: 5,
		social_needs: 5,
		stranger_friendly: 3,
		wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
		image: {
			id: "O3btzLlsO",
			width: 1100,
			height: 739,
			url: "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
		},
	},
	{
		id: "bomb",
		name: "Bombay",
		temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
		origin: "United States",
		description:
			"Bombay are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
		life_span: "12 - 15",
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		health_issues: 3,
		intelligence: 5,
		social_needs: 5,
		stranger_friendly: 3,
		wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
		image: {
			id: "O3btzLlsO",
			width: 1100,
			height: 739,
			url: "https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg",
		},
	},
	{
		id: "bslo",
		name: "British Longhair",
		temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
		origin: "United States",
		description:
			"British Longhair are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
		life_span: "12 - 15",
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		health_issues: 3,
		intelligence: 5,
		social_needs: 5,
		stranger_friendly: 3,
		wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
		image: {
			id: "O3btzLlsO",
			width: 1100,
			height: 739,
			url: "https://cdn2.thecatapi.com/images/7isAO4Cav.jpg",
		},
	},
];

export const initialCatDetailStateData: CatDetailsData = {
	id: "",
	name: "",
	temperament: "",
	origin: "",
	description: "",
	life_span: "",
	adaptability: 0,
	affection_level: 0,
	child_friendly: 0,
	grooming: 0,
	health_issues: 0,
	intelligence: 0,
	social_needs: 0,
	stranger_friendly: 0,
	wikipedia_url: "",
	image: {
		id: "",
		width: 0,
		height: 0,
		url: "",
	},
};

export const MockBreedList: BreedListData[] = [
	{
		id: "beng",
		name: "Bengal",
	},
	{
		id: "birm",
		name: "Birman",
	},
	{
		id: "bomb",
		name: "Bombay",
	},
	{
		id: "bslo",
		name: "British Longhair",
	},
];

export const numberToPixel = (value: number) => {
	return `${value.toString()}px`;
};
