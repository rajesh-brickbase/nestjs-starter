import {ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, LoggerService, Inject, Injectable} from '@nestjs/common';
import {Request, Response} from 'express';
import {AppLogger} from '../config/log.config';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        //this.logger.error('Error Caught in ExceptionFilter', JSON.stringify(exception));
        let status = null;
        if (typeof exception['getStatus'] === 'function') {
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
