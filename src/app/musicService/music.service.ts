import { Injectable } from '@angular/core';

import { music } from "../musicService/music"


@Injectable({
  providedIn: 'root'
})



export class musicService {

  buscar(id): music {
    return this.music[id];
  }

  getMusic(){
    return[
      {
        id: 0,
        name: "ALOK & Ilkay Sencan (feat. Tove Lo) - Don't Say Goodbye (Lyric Video)",
        artist: "ALOK",
        duration: 10,
        path: "../../assets/ELETROINCA/ALOK & Ilkay Sencan (feat. Tove Lo) - Don't Say Goodbye (Lyric Video).mp3"
      },
      {
        id: 1,
        name: "Alok & Vintage Culture - Party On My Own (Feat. FAULHABER) [Official Video]",
        artist: "ALOK",
        duration: 10,
        path: "../../assets/ELETRONICA/Alok & Vintage Culture - Party On My Own (Feat. FAULHABER) [Official Video].mp3"
      },
      {
        id: 2,
        name: "Alok, Martin Jensen, Jason Derulo - Don't Cry For Me",
        artist: "ALOK",
        duration: 10,
        path: "../../assets/ELETRONICA/Alok, Martin Jensen, Jason Derulo - Don't Cry For Me.mp3"
      }
    ]
  }
    


  public music: music[] = [

    {
      id: 0,
      name: "ALOK & Ilkay Sencan (feat. Tove Lo) - Don't Say Goodbye (Lyric Video)",
      artist: "ALOK",
      duration: 10,
      path: "../../assets/ELETROINCA/ALOK & Ilkay Sencan (feat. Tove Lo) - Don't Say Goodbye (Lyric Video).mp3"
    },
    {
      id: 1,
      name: "Alok & Vintage Culture - Party On My Own (Feat. FAULHABER) [Official Video]",
      artist: "ALOK",
      duration: 10,
      path: "../../assets/ELETRONICA/Alok & Vintage Culture - Party On My Own (Feat. FAULHABER) [Official Video].mp3"
    },
    {
      id: 2,
      name: "Alok, Martin Jensen, Jason Derulo - Don't Cry For Me",
      artist: "ALOK",
      duration: 10,
      path: "../../assets/ELETRONICA/Alok, Martin Jensen, Jason Derulo - Don't Cry For Me.mp3"
    },
    {
      id: 3,
      name: "Disco Lines - Love Story (Official Audio)",
      artist: "dj c",
      duration: 10,
      path: "../../assets/ELETRONICA/Disco Lines - Love Story (Official Audio).mp3"
    },
    {
      id: 4,
      name: "Flashdance (What a Feeling) Ginny Vee (feat. Irene Cara)",
      artist: "Ginny Vee",
      duration: 10,
      path: "../../assets/ELETRONICA/Flashdance (What a Feeling) Ginny Vee (feat. Irene Cara).mp3"
    },
    {
      id: 5,
      name: "Joel Corry x MNEK - Head & Heart [Official Video]",
      artist: "Joel Corry",
      duration: 10,
      path: "../../assets/ELETRONICA/Joel Corry x MNEK - Head & Heart [Official Video].mp3"
    },
    {
      id: 6,
      name: "Maverick Sabre - Slow Down Feat. Jorja Smith (Slow Motion & Vintage Culture Official Remix)",
      artist: "jorrja smith",
      duration: 10,
      path: "../../assets/ELETRONICA/Maverick Sabre - Slow Down Feat. Jorja Smith (Slow Motion & Vintage Culture Official Remix).mp3"
    },
    {
      id: 7,
      name: "SAINt JHN - Roses (Imanbek Remix) (Official Music Video)",
      artist: "SAINT JHN",
      duration: 10,
      path: "../../assets/ELETRONICA/SAINt JHN - Roses (Imanbek Remix) (Official Music Video).mp3"
    },
    {
      id: 8,
      name: "Desiigner- Panda (OFFICIAL SONG) Prod. By - Menace",
      artist: "Menace",
      duration: 10,
      path: "../../assets/HIPHOP/Desiigner- Panda (OFFICIAL SONG) Prod. By - Menace.mp3"
    },
    {
      id: 9,
      name: "DJ Snake ft. Bipolar Sunshine - Middle (Official Audio)",
      artist: "DJ Snake",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 10,
      name: "DJ Snake, Lil Jon - Turn Down for What",
      artist: "DJ Snake",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 11,
      name: "Eminem - Love The Way You Lie ft. Rihanna",
      artist: "Eminem",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 12,
      name: "Future - Low Life (Official Music Video) ft. The Weeknd",
      artist: "Future",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 13,
      name: "G-Eazy x Bebe Rexha - Me, Myself & I",
      artist: "G-Eazy",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 14,
      name: "Katy Perry - Dark Horse (Official) ft. Juicy J",
      artist: "Katy Perry",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 15,
      name: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack",
      artist: "Wiz Khalifa",
      duration: 10,
      path: "../../assets/HIPHOP/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3"
    },
    {
      id: 16,
      name: "Blackbear- Do re mi [legendado]",
      artist: "Blackbear ",
      duration: 10,
      path: "../../assets/INDIE/Blackbear- Do re mi [legendado].mp3"
    },
    {
      id: 17,
      name: "Cage the Elephant - Cigarette Daydreams [LEGENDADO]",
      artist: "Cage the Elephant",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 18,
      name: "Cage The Elephant - Cold Cold Cold [LEGENDADO]",
      artist: "Cage The Elephant",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 19,
      name: "Konai - Te vi na rua ontem .mp3",
      artist: "Konai",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 20,
      name: "The Neighbourhood -  Say My Name_Cry Me A River [LEGENDADO]",
      artist: "The Neighbourhood",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 21,
      name: "The Neighbourhood - Daddy Issues [LEGENDADO]",
      artist: "The Neighbourhood",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 22,
      name: "The Neighbourhood - Sweater Weather (Official Video)",
      artist: "The Neighbourhood",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 23,
      name: "The Weeknd - Earned It (Legendado - Tradução)",
      artist: "The Weeknd",
      duration: 10,
      path: "../../assets/INDIE/The Weeknd - Earned It (Legendado - Tradução).mp3"
    },
    {
      id: 24,
      name: "Doja Cat - Say So (Official Video)",
      artist: "Doja Cat",
      duration: 10,
      path: "../../assets/POP/Doja Cat - Say So (Official Video).mp3"
    },
    {
      id: 25,
      name: "Dua Lipa - Don't Start Now (Official Music Video)",
      artist: "Dua Lipa",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 26,
      name: "Harry Styles - Watermelon Sugar (Official Video)",
      artist: "Harry Styles",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 27,
      name: "Lil Mosey - Blueberry Faygo (Dir. by @_ColeBennett_)",
      artist: "Lil Mosey",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 28,
      name: "Maroon 5 - Memories (Official Video)",
      artist: "Maroon 5",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 29,
      name: "PARTYNEXTDOOR & Rihanna - BELIEVE IT (Official Audio)",
      artist: "PARTYNEXTDOOR & Rihanna",
      duration: 10,
      path: "../../assets/"
    },
    {
      id: 30,
      name: "The Weeknd - Blinding Lights (Official Music Video)",
      artist: "The Weeknd",
      duration: 10,
      path: "../../assets/POP/The Weeknd - Blinding Lights (Official Music Video).mp3"
    },
    {
      id: 31,
      name: "Graveto - Bagunça (LyricVideo) _ EP Dentro Longe",
      artist: "Graveto",
      duration: 10,
      path: "../../assets/RAP/Graveto - Bagunça (LyricVideo) _ EP Dentro Longe.mp3",
    },
    {
      id: 32,
      name: "Kelly Diaz - Tirando de Trapstar - Clipe Oficial (SoullMusicBR)",
      artist: "Kelly Diaz ",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 33,
      name: "Matuê - 777-666",
      artist: "Matuê",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 34,
      name: "Matuê - Máquina do Tempo",
      artist: "Matuê",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 35,
      name: "OS INIMIGOS ESTÃO PROXIMOS 2 0 - EMICIDA DBS a Quadrilha Paola SRTa -  DBS Gordao Chefe",
      artist: "DBS Gordao Chefe",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 36,
      name: "Poesia Acústica #2 - Sobre Nós - Delacruz I Maria I Ducon I Luiz Lins I Diomedes I Bk' I Kayuá",
      artist: "Poesia Acústica",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 37,
      name: "Poesia Acústica #6 - Era Uma Vez - Mc Cabelinho, Orochi, Bob, Maquiny, Azzy, Filipe Ret, Dudu, Xamã",
      artist: "Poesia Acústica",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 38,
      name: "Set DJ Matt-D - Homenagem aos Relíquias - MCs Lipi, Lemos, Leozinho ZS, Vinny, Menor MC, Julio D.E.R",
      artist: "Set DJ Matt-D",
      duration: 10,
      path: "../../assets/RAP/Set DJ Matt-D - Homenagem aos Relíquias - MCs Lipi, Lemos, Leozinho ZS, Vinny, Menor MC, Julio D.E.R.mp3",
    },
    {
      id: 39,
      name: "3 Doors Down - Here Without You (Official Video)",
      artist: "3 Doors Down",
      duration: 10,
      path: "../../assets/ROCK/3 Doors Down - Here Without You (Official Video).mp3",
    },
    {
      id: 40,
      name: "Audioslave - Like a Stone (Official Video)",
      artist: "Audioslave",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 41,
      name: "Coldplay - Yellow (Official Video)",
      artist: "Coldplay",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 42,
      name: "Evanescence - Bring Me To Life (Official Music Video)",
      artist: "Evanescence",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 43,
      name: "Hoobastank - The Reason (Official Music Video)",
      artist: "Hoobastank",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 44,
      name: "In The End (Official HD Video) - Linkin Park",
      artist: "Linkin Park",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 45,
      name: "Numb (Official Video) - Linkin Park",
      artist: "Linkin Park",
      duration: 10,
      path: "../../assets/",
    },
    {
      id: 46,
      name: "Red Hot Chili Peppers - Californication [Official Music Video]",
      artist: "Red Hot Chili Peppers",
      duration: 10,
      path: "../../assets/ROCK/Red Hot Chili Peppers - Californication [Official Music Video].mp3",
    },
    {
      id: 47,
      name: "Barão Vermelho - Bete Balanço (Rock in Rio 1985).mp3Barão Vermelho - Bete Balanço (Rock in Rio 1985)",
      artist: "Barão Vermelho",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/Barão Vermelho - Bete Balanço (Rock in Rio 1985).mp3",
    },
    {
      id: 48,
      name: "Charlie Brown Jr. - Meu Novo Mundo _OFICIAL HD",
      artist: "Charlie Brown Jr",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/",
    },
    {
      id: 49,
      name: "Charlie Brown Jr. - Só os Loucos Sabem (Video Clipe)",
      artist: "Charlie Brown Jr",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/",
    },
    {
      id: 50,
      name: "Legião Urbana - Tempo Perdido (ao vivo) Especial",
      artist: "Legião Urbana",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/",
    },
    {
      id: 51,
      name: "Os Paralamas Do Sucesso - Lanterna Dos Afogados",
      artist: "Os Paralamas Do Sucesso",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/",
    },
    {
      id: 52,
      name: "Papas da Lingua - Eu Sei",
      artist: "Papas da Lingua",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/",
    },
    {
      id: 53,
      name: "QUE SE DANE - Gabriel Nandes (Videoclipe Oficial)",
      artist: "Gabriel Nandes",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/",
    },
    {
      id: 54,
      name: "Segredos - Frejat",
      artist: "Frejat",
      duration: 10,
      path: "../../assets/ROCKNACIONAL/Segredos - Frejat.mp3",
    },
    {
      id: 55,
      name: "Allisson Rodrigues Feat. Roberta Miranda - Como Esquecer",
      artist: "Allisson Rodrigues",
      duration: 10,
      path: "../../assets/SERTANEJO/Allisson Rodrigues Feat. Roberta Miranda - Como Esquecer.mp3",
    },
    {
      id: 56,
      name: "Douglas e Vinícius - Figurinha - part. MC Bruninho",
      artist: "Douglas e Vinícius",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
    {
      id: 57,
      name: "Gusttavo Lima - Café e Amor (O Embaixador The Legacy)",
      artist: "Gusttavo Lima",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
    {
      id: 58,
      name: "Gusttavo Lima - De Menina Pra Mulher (O Embaixador The Legacy)",
      artist: "Gusttavo Lima",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
    {
      id: 59,
      name: "Júnior e Cézar - CLONE - EP Provou, Gostou!",
      artist: "Júnior e Cézar",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
    {
      id: 60,
      name: "Marília Mendonça & Maiara e Maraisa - Coração Bandido (Official Music Video)",
      artist: "Marília Mendonça & Maiara e Maraisa",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
    {
      id: 61,
      name: "Marília Mendonça & Maiara e Maraisa - Quero Você Do Jeito Que Quiser (Official Music Video)",
      artist: "Marília Mendonça & Maiara e Maraisa",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
    {
      id: 62,
      name: "Tierry - RITA - DVD Acertou Na Mosca",
      artist: "Tierry",
      duration: 10,
      path: "../../assets/SERTANEJO/"
    },
  ]
}
