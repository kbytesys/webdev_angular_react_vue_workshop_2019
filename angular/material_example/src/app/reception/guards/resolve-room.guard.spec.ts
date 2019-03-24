import { TestBed, inject } from '@angular/core/testing';

import { ResolveRoomGuard } from './resolve-room.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResolveRoomGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ResolveRoomGuard]
    });
  });

  it('should ...', inject([ResolveRoomGuard], (guard: ResolveRoomGuard) => {
    expect(guard).toBeTruthy();
  }));
});
