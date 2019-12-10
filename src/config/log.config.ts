import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class AppLogger extends Logger {

     error(message: string, trace: string) {
        // add your tailored logic here
        super.error("********"+ message, trace);
    }
}
