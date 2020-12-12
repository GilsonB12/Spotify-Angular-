import { Injectable } from '@angular/core';
import { Playlist } from "../playlistService/Playlist"
import { music } from '../musicService/music';
import { musicService } from '../musicService/music.service'


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  public musics = [];

  constructor(private _musicService: musicService) { }

  ngOninit(){
    this.musics = this._musicService.getMusic();
  }

  listar(): Playlist[] {
    return this.playlist
  }

  buscar(id): Playlist {
    return this.playlist[id];
  }


  public playlist: Playlist[] = [

   

    {
      id: 0,
      name: "Eletronica",
      image: "../../assets/img/eletronica.png",
      music: []

    },
    {
      id: 1,
      name: "Hiphop",
      image: "../../assets/img/hiphop.png",
      music: []
    },
    {
      id: 2,
      name: "Indie",
      image: "../../assets/img/indie.png",
      music: []
    },
    {
      id: 3,
      name: "Pop",
      image: "../../assets/img/pop.png",
      music: []
    },
    {
      id: 4,
      name: "Rap",
      image: "../../assets/img/rap.png",
      music: []
    },
    {
      id: 5,
      name: "Rock",
      image: "../../assets/img/rock.png",
      music: []
    },
    {
      id: 6,
      name: "RockNacional",
      image: "../../assets/img/ROCK_NACIONAL.png",
      music: []
    },
    {
      id: 7,
      name: "Sertanejo",
      image: "../../assets/img/sertanejo.png",
      music: []
    }

  ]
}
