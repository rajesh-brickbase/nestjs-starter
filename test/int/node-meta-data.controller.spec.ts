import { Test, TestingModule } from '@nestjs/testing';
import { NodeMetaDataController } from '../../src/app/node-meta-data/node-meta-data.controller';

describe('NodeMetaData Controller', () => {
  let controller: NodeMetaDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeMetaDataController],
    }).compile();

    controller = module.get<NodeMetaDataController>(NodeMetaDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
