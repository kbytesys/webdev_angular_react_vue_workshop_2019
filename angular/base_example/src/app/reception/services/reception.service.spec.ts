import { TestBed } from '@angular/core/testing';

import { ReceptionService } from './reception.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ReceptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ReceptionService = TestBed.get(ReceptionService);
    expect(service).toBeTruthy();
  });
});
