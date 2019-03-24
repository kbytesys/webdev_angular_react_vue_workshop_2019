import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveRoomChecksinGuard } from './resolve-room-checksin.guard';

describe('ResolveRoomChecksinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveRoomChecksinGuard]
    });
  });

  it('should ...', inject([ResolveRoomChecksinGuard], (guard: ResolveRoomChecksinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
