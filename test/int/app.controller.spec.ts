import {Test, TestingModule} from '@nestjs/testing';
import {DefaultController} from '../../src/app/default/default.controller';
import {DefaultService} from '../../src/app/default/default.service';

describe('AppController Test', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [DefaultController],
            providers: [DefaultService],
        }).compile();
    });

    describe('getHello', () => {
        it('should return "Hello World!"', () => {
            const appController = app.get<DefaultController>(DefaultController);
            expect(appController.getHello()).toBe('Hello, this is Sensorflow Api service.');
        });
    });
});
