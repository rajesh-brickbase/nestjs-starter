import { Test, TestingModule } from '@nestjs/testing';
import { BundleDataController } from '../../src/app/bundle-data/bundle-data.controller';

describe('BundleData Controller', () => {
  let controller: BundleDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BundleDataController],
    }).compile();

    controller = module.get<BundleDataController>(BundleDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
