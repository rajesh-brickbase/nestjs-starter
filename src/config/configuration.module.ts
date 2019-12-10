import {Module} from '@nestjs/common';
import {DBProviderModule} from './database.config';
import {AppLogger} from './log.config';

@Module({
   imports: [  DBProviderModule.forConnection()],
   providers:[AppLogger],
   exports:[AppLogger]
})
export class ConfigModule {
}
