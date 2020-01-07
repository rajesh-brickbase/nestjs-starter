import { Test, TestingModule } from '@nestjs/testing';
import { NodeMetaDataService } from '../../src/app/node-meta-data/node-meta-data.service';

describe('NodeMetadataService', () => {
  let service: NodeMetaDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodeMetaDataService],
    }).compile();

    service = module.get<NodeMetaDataService>(NodeMetaDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
