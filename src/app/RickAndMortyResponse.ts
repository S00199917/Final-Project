export interface CharacterResponse {
    Id: string;
    Name: string;
    Status: string;
    Species: string;
    Gender: string;
    Origin: string;
    OriginURL: string;
    Location: string;
    LocationURL: string;
    Image: string;
    //Episodes:List<string>;
    //!Figure out how to use Lists in interface
}

export interface LocationResponse {
    Id: string;
    Name: string;
    Type: string;
    Dimension: string;
    //Residents:List<string>;
    //!Figure out how to use lists in interface
}

export interface EpisodeResponse {
    Id: string;
    Name: string;
    AirDate: string;
    Episode: string;
    //Characters:list<string>;
    //!Figure out how to use lists in interface
}