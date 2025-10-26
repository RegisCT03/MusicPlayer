import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Track } from '../../../../core/models/track.model';

@Component({
  selector: 'app-player-main',
  templateUrl: './player-main.component.html',
  styleUrls: ['./player-main.component.css']
})
export class PlayerMainComponent implements OnInit {
  currentTrack: Track | null = null;
  isPlaying: boolean = false;
  currentTime: number = 0;
  duration: number = 30; 

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.currentTrack$.subscribe(track => {
      this.currentTrack = track;
    });

    this.playerService.isPlaying$.subscribe(playing => {
      this.isPlaying = playing;
    });

    this.playerService.currentTime$.subscribe(time => {
      this.currentTime = time;
    });
  }


  previous(): void {
    this.playerService.previous();
  }

  next(): void {
    this.playerService.next();
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}