export interface CharacterResponse{
    info:info;
    results:CharacterResult;
}

interface info{
    count:string;
    pages:string;
}

interface CharacterResult{
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: Origin;
    location: Location;
}

interface Origin{
    name: string;
}

interface Location{
    name:string;
}