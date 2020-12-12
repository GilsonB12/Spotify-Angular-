import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaylistCreatedComponent } from './pages/playlist-created/playlist-created.component';
import { musicService } from './musicService/music.service'
import { LoginComponent } from './pages/login/login.component';




const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "faq", component: FaqComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "playlist", component: PlaylistComponent },
  { path: "playlistCreated/:id", component: PlaylistCreatedComponent },
  { path: "login", component: LoginComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers: [musicService]
})
export class AppRoutingModule { }

