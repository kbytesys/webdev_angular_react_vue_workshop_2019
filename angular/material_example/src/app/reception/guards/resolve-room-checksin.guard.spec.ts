import { TestBed, inject } from '@angular/core/testing';

import { ResolveRoomChecksinGuard } from './resolve-room-checksin.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResolveRoomChecksinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ResolveRoomChecksinGuard]
    });
  });

  it('should ...', inject([ResolveRoomChecksinGuard], (guard: ResolveRoomChecksinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
