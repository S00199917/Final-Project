import { stringify } from 'querystring';

export interface ICharacter {
    Id: string;
    Name: string;
    Status: string;
    Species: string;
    Origin: string;
    OriginURL: string;
    Location: string;
    LocationURL: string;
    Image: string;
    //Episodes:List<string>;
    //!Figure out how to do lists
}

export class Character {
    Id: string;
    Name: string;
    Status: string;
    Species: string;
    Origin: string;
    OriginURL: string;
    Location: string;
    LocationURL: string;
    Image: string;
    //Episodes:List<string>;
    //!Figure out how to do lists

    constructor(Id: string, Name: string, Status: string, Species: string, Origin: string, OriginURL: string, Location: string, LocationURL: string, Image: string) {
        this.Id = Id;
        this.Name = Name;
        this.Status = Status;
        this.Species = Species;
        this.Origin = Origin;
        this.OriginURL = OriginURL;
        this.Location = Location;
        this.LocationURL = LocationURL;
        this.Image = Image;
    }
}

export interface Location {
    Id: string;
    Name: string;
    Type: string;
    Dimension: string;
    //Residents:List<string>;
    //!Figure out how to do lists
}

export class Location {
    Id: string;
    Name: string;
    Type: string;
    Dimension: string;
    //Residents:List<string>;
    //!Figure out how to do lists

    constructor(Id: string, Name: string, Type: string, Dimension: string) {
        this.Id = Id;
        this.Name = Name;
        this.Type = Type;
        this.Dimension = Dimension;
    }
}

export interface Episodes {
    Id: string;
    Name: string;
    AirDate: string;
    Episodes: string;
    //Characters:List<string>;
    //!Figure out how to do lists
}

export class Episodes {
    Id: string;
    Name: string;
    AirDate: string;
    Episodes: string;
    //Characters:List<string>;
    //!Figure out how to do lists

    constructor(Id: string, Name: string, AirDate: string, Episodes: string) {
        this.Id = Id;
        this.Name = Name;
        this.AirDate = AirDate;
        this.Episodes = Episodes
    }
}