import { TestBed } from '@angular/core/testing';

import { ApigotService } from './apigot.service';

describe('ApigotService', () => {
  let service: ApigotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
