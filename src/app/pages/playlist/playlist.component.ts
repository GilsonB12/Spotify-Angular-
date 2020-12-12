import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/playlistService/Playlist';
import { PlaylistService } from 'src/app/playlistService/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  
  playlists:Playlist[]


  constructor(private playlistService:PlaylistService) { }

  ngOnInit(): void {

    this.playlists = this.playlistService.listar()

  }

  

}
