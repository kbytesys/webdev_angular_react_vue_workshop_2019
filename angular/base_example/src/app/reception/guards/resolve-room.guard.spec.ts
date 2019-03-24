import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveRoomGuard } from './resolve-room.guard';

describe('ResolveRoomGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveRoomGuard]
    });
  });

  it('should ...', inject([ResolveRoomGuard], (guard: ResolveRoomGuard) => {
    expect(guard).toBeTruthy();
  }));
});
