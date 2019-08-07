import { Test, TestingModule } from '@nestjs/testing';
import { WoocommerceService } from './woocommerce.service';

describe('WoocomerceService', () => {
  let service: WoocommerceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WoocommerceService],
    }).compile();

    service = module.get<WoocommerceService>(WoocommerceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
