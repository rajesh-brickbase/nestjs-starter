import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus} from '@nestjs/common';
import {Request, Response} from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        console.log('Error Caught in ExceptionFilter', exception);
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
