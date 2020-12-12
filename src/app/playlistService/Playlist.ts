import { music } from '../musicService/music';

export class Playlist {
    id: number;
    name: string;
    image: string;
    music: music[];

    
  
    constructor(id,music, name, image) {
      this.id = id;
      this.music = music;
      this.name = name;
      this.image = image;
    }
  }