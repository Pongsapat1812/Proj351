import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-sec-f',
  templateUrl: './sec-f.component.html',
  styleUrls: ['./sec-f.component.css']
})
export class SecFComponent implements OnInit, AfterViewInit {
  cats = [
    { name: 'rat', attribute: 'energetic', imgSrc: './sec/sec-f/test.png', song: 'Uptown Funk' },
    { name: 'heow', attribute: 'relaxing', imgSrc: './sec/sec-f/test.png', song: 'Weightless' },
    { name: 'taawan', attribute: 'adorable', imgSrc: './sec/sec-f/test.png', song: 'Can\'t Help Falling in Love' },
    { name: 'oreo', attribute: 'heartwarming', imgSrc: './sec/sec-f/test.png', song: 'Stand By Me' }
  ];
  choosebtn: boolean[] = new Array(this.cats.length).fill(false);
  showSecF: boolean = true;
  youtubePlayer: YT.Player | null = null;

  private songMap: { [key: string]: string } = {
    'Uptown Funk': 'OPf0YbXqDm0',
    'Weightless': '7p2t53J3A6I',
    'Can\'t Help Falling in Love': 'jbB_F7Zby7Y',
    'Stand By Me': 'hwZNL7QVJjE'
  };

  constructor(
    public AuthService: AuthService,
    private StateService: StateService
  ) {}

  ngOnInit() {
    this.StateService.showSecF$.subscribe(showSecF => {
      this.showSecF = showSecF;
    });

    // Subscribe to 'authorized$' from AuthService to track login status
    this.AuthService.authorized$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.resetState();  // Reset the states when user logs in
      }
    });

    this.loadYouTubeAPI();
  }

  ngAfterViewInit() {}

  loadYouTubeAPI() {
    if (typeof window !== 'undefined' && !window['YT']) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }

  isAuthorized() {
    return this.AuthService.isAuthorized();
  }

  choose(cat: any, index: number) {
    this.choosebtn = this.choosebtn.map(() => false);  // Reset all buttons to unselected
    this.choosebtn[index] = true;  // Mark the chosen one
    this.StateService.setChoose(cat);
    this.playSong(cat.song, index);
  }

  playSong(song: string, index: number) {
    const videoId = this.songMap[song as keyof typeof this.songMap];

    if (!videoId) {
      console.error('Video ID not found for song:', song);
      return;
    }

    if (this.youtubePlayer) {
      // Pause the current video and clear it
      this.youtubePlayer.pauseVideo();
      this.youtubePlayer.loadVideoById('');
    }

    // Initialize the player with the new song
    this.youtubePlayer = new YT.Player(`youtube-player-${index}`, {
      height: '1',
      width: '1',
      videoId: videoId,
      events: {
        'onReady': (event: YT.PlayerEvent) => {
          event.target.playVideo();
          event.target.setVolume(50); // Set initial volume to 50% (range 0-100)
        }
      }
    });
  }

  ready() {
    if (!this.isAuthorized()) {
      return;
    }
    if (this.choosebtn.some(btn => btn === true)) {
      this.StateService.setReady(true);
      this.StateService.setShowSecF(false);
    }
  }

  resetState() {
    // Reset the 'choosebtn' state to false for all cats
    this.choosebtn = new Array(this.cats.length).fill(false);
    
    // Stop the current video if it exists
    if (this.youtubePlayer) {
      this.youtubePlayer.pauseVideo();
      this.youtubePlayer.loadVideoById('');
      this.youtubePlayer = null;  // Clear the player reference
    }
  }

  trackByCatId(index: number, cat: any): number {
    return index;  // or return cat.name
  }
}
