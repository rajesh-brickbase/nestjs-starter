import {Module} from '@nestjs/common';
import {LocationService} from './location.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Location} from './location.entity';
import {LocationRepository} from './location.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location, LocationRepository]),
  ],
  providers: [LocationService],
  exports:[LocationService]
})
export class LocationModule {}
