declare namespace YT {
  export class Player {
    constructor(element: string | HTMLElement, options: object);
    loadVideoById(videoId: string): void;
    playVideo(): void;
    pauseVideo(): void;
    setVolume(volume: number): void; // Add this line to include the setVolume method
  }

  export interface PlayerEvent {
    target: Player;
  }
}
