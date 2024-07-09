export interface CharacterEntity {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   LocationEntity;
    location: LocationEntity;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
  }
  
  export interface LocationEntity {
    name: string;
    url:  string;
  }
  