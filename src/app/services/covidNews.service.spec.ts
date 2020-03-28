/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CovidNewsService } from './covidNews.service';

describe('Service: CovidNews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CovidNewsService]
    });
  });

  it('should ...', inject([CovidNewsService], (service: CovidNewsService) => {
    expect(service).toBeTruthy();
  }));
});
