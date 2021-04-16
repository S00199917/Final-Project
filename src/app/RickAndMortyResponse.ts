export interface CharacterResponse {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    //Episodes:List<string>;
    //!Figure out how to use Lists in interface
}

export interface LocationResponse {
    id: string;
    name: string;
    type: string;
    dimension: string;
    //Residents:List<string>;
    //!Figure out how to use lists in interface
}

export interface EpisodeResponse {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    //Characters:list<string>;
    //!Figure out how to use lists in interface
}