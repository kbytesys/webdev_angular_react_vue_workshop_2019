import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveRoomChecksinLogGuard } from './resolve-room-checksin-log.guard';

describe('ResolveRoomChecksinLogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveRoomChecksinLogGuard]
    });
  });

  it('should ...', inject([ResolveRoomChecksinLogGuard], (guard: ResolveRoomChecksinLogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
