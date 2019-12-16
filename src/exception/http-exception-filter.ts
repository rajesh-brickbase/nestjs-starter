import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus} from '@nestjs/common';
import {Request, Response} from 'express';
import {AppLogger} from '../config/log.config';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    private readonly logger = new AppLogger('HttpExceptionFilter');

    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        this.logger.errorStack('Error Caught in ExceptionFilter', exception);
        let status = null;
        if (typeof exception.getStatus === 'function') {
            status = exception.getStatus();
        } else {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        response
            .status(status)
            .json({
                statusCode: status,
                message: 'Error occurred. Please Check.',
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}
