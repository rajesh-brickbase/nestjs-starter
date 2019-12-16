import {Test, TestingModule} from '@nestjs/testing';
import {RawMeasurementController} from '../../src/app/raw-measurement/raw-measurement.controller';
import {RawMeasurementBundleDto} from '../../src/app/raw-measurement/dto/raw-measuerment-bundle.dto';
import {RawMeasurementService} from '../../src/app/raw-measurement/raw-measurement.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RawMeasurement} from '../../src/app/raw-measurement/raw-measurement.entity';
import {RawMeasurementRepository} from '../../src/app/raw-measurement/raw-measurement.repository';
import {DBProviderModule} from '../../src/config/database.config';
import {AppLogger} from '../../src/config/log.config';

describe('RawMeasurement Controller', () => {

    const logger = new AppLogger('RawMeasurement Controller');
    let controller: RawMeasurementController;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [
                DBProviderModule.forConnection(),
                TypeOrmModule.forFeature([RawMeasurement, RawMeasurementRepository]),
            ],
            controllers: [RawMeasurementController],
            providers: [RawMeasurementService],
        }).compile();

        controller = module.get<RawMeasurementController>(RawMeasurementController);
    });

    describe('createMany', () => {
        it('should return "Hello World!"', async () => {
            const data: RawMeasurementBundleDto = {
                bundledDataType: 'raw_measurements',
                dataPackets: [
                    {
                        timestamp: '2019-12-13T10:53:22.764Z',
                        positionId: '577e2775-c31f-4fcc-ae40-6422dda83718',
                        srcMacId: '0',
                        streamIndex: '3',
                        measurementType: 'temperature_ambient',
                        measurementValue: '4',
                    },
                ],
            };
            const appController = module.get<RawMeasurementController>(RawMeasurementController);

            const response = await appController.createMany(data);

            logger.log('response->' + response);

        });
    });

});
