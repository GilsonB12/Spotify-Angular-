
export class music {
    id: number;
    name: string;
    artist: string;
    duration: number;
    path: string;
    


    constructor(id, name, artist, duration, path) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.path = path;
    }
}