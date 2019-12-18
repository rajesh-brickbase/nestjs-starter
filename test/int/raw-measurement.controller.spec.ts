import {Test, TestingModule} from '@nestjs/testing';
import {RawMeasurementController} from '../../src/app/raw-measurement/raw-measurement.controller';
import {RawMeasurementBundleDto} from '../../src/app/raw-measurement/dto/raw-measuerment-bundle.dto';
import {RawMeasurementService} from '../../src/app/raw-measurement/raw-measurement.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RawMeasurement} from '../../src/app/raw-measurement/raw-measurement.entity';
import {RawMeasurementRepository} from '../../src/app/raw-measurement/raw-measurement.repository';
import {AppLogger} from '../../src/config/log.config';
import {TestDBProviderModule} from '../config/test-database.config';
import {SUCCESS, SUCCESS_MSG} from '../../src/config/constants';
import {RawMeasurementDto} from '../../src/app/raw-measurement/dto/raw-measurement.dto';

describe('RawMeasurement Controller', () => {

    const logger = new AppLogger('RawMeasurement Controller');
    let controller: RawMeasurementController;
    let repo: RawMeasurementRepository;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [
                TestDBProviderModule.forConnection(),
                TypeOrmModule.forFeature([RawMeasurement, RawMeasurementRepository]),
            ],
            controllers: [RawMeasurementController],
            providers: [RawMeasurementService],
        }).compile();
        module.useLogger(logger);

        controller = module.get<RawMeasurementController>(RawMeasurementController);
        repo = module.get<RawMeasurementRepository>(RawMeasurementRepository);
    });

    beforeEach(async () => {
        const entities = await repo.findAll();
        await repo.remove(entities);
        logger.log('Cleaning all data from RawMeasurement Table');
    });

    describe('Create Records', () => {
        it('Insert One Record', async () => {
            let dto: RawMeasurementDto = {
                unixTimestamp: '1576656278',
                positionId: '577e2775-c31f-4fcc-ae40-6422dda83718',
                srcMacId: 'FFFF000D6F4DAAB6',
                streamIndex: '3',
                measurementType: 'temperature_ambient',
                measurementValue: '4',
                timestampAsISO: null,
            };

            const data: RawMeasurementBundleDto = {
                bundledDataType: 'raw_measurements',
                locationId: 'b6779831-9511-492d-ba2e-2c9015060f42',
                dataPackets: [dto,],
            };
            const appController = module.get<RawMeasurementController>(RawMeasurementController);
            const response = await appController.createMany(data);
            logger.logObject('Response From Controller ->', response);

            expect(response.status).toBe(SUCCESS);
            expect(response.message).toBe(SUCCESS_MSG);
            expect(response.data).toBe(1);

            let resultEntity = await repo.findOneByCriteria({
                positionId: dto.positionId,
                srcMacId: dto.srcMacId,
                measurementType: dto.measurementType,
            });

            logger.logObject('response 2 ->', resultEntity);

            let isoDateValue = new Date(parseInt(dto.unixTimestamp) * 1000).toISOString();
            let entityTime = resultEntity.timestamp;
            expect(resultEntity.positionId).toBe(dto.positionId);
            expect(resultEntity.srcMacId).toBe(dto.srcMacId);
            expect(resultEntity.measurementType).toBe(dto.measurementType);
            expect(resultEntity.measurementValue).toBe(dto.measurementValue);
            expect(resultEntity.streamIndex).toBe(parseInt(dto.streamIndex));
            expect(resultEntity.timestamp.toISOString()).toBe((isoDateValue));
        });
    });


    describe('Create Records From JSON', () => {

    });

});
