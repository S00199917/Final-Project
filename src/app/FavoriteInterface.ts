import { stringify } from "querystring";

export interface IFavorite {
    gender: string;
    image: string;
    location: string;
    name: string;
    origin: string;
    species: string;
    status: string;
}

export class Favorite {
    gender: string;
    image: string;
    location: string;
    name: string;
    origin: string;
    species: string;
    status: string;

    constructor(gender: string, image: string, location: string, name: string, origin: string, species: string, status: string) {
        this.gender = gender;
        this.image = image;
        this.location = location;
        this.name = name;
        this.origin = origin;
        this.species = species;
        this.status = status;
    }
}