import { TestBed } from '@angular/core/testing';

import { ScriptdataService } from './scriptdata.service';

describe('ScriptdataService', () => {
  let service: ScriptdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
