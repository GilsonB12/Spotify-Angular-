import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/playlistService/Playlist';
import { PlaylistService } from 'src/app/playlistService/playlist.service';

@Component({
  selector: 'app-playlist-created',
  templateUrl: './playlist-created.component.html',
  styleUrls: ['./playlist-created.component.css']
})
export class PlaylistCreatedComponent implements OnInit {
  
  playlist:Playlist
  

  constructor(private route:ActivatedRoute,private playlistService:PlaylistService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id
    this.playlist = this.playlistService.buscar(id)
  }

}
