import { TestBed } from '@angular/core/testing';

import { CreateInvoiceService } from './create-invoice.service';

describe('CreateInvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateInvoiceService = TestBed.get(CreateInvoiceService);
    expect(service).toBeTruthy();
  });
});
