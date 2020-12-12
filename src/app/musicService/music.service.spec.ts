import { TestBed } from '@angular/core/testing';

import { musicService } from './music.service';

describe('MusicService', () => {
  let service: musicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(musicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
