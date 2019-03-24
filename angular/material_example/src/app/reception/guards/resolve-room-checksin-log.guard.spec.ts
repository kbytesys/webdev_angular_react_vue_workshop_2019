import { TestBed, inject } from '@angular/core/testing';

import { ResolveRoomChecksinLogGuard } from './resolve-room-checksin-log.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResolveRoomChecksinLogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ResolveRoomChecksinLogGuard]
    });
  });

  it('should ...', inject([ResolveRoomChecksinLogGuard], (guard: ResolveRoomChecksinLogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
