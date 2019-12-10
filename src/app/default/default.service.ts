import { Injectable } from '@nestjs/common';

@Injectable()
export class DefaultService {
  getHello(): string {
    return 'Hello, this is Sensorflow Api service.';
  }
}
