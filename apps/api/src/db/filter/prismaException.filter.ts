import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { PrismaClientKnownRequestError } from '@pulzeup/db';
// eslint-disable-next-line import/no-unresolved
// import { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    // const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2000': {
        const status = HttpStatus.BAD_REQUEST;
        response.status(status).json({
          statusCode: status,
          message: 'Bad request'
        });
        break;
      }

      case 'P2002': {
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: 'Record already exists'
        });
        break;
      }

      case 'P2023': {
        const status = HttpStatus.BAD_REQUEST;
        response.status(status).json({
          statusCode: status,
          message: 'Invalid object id'
        });
        break;
      }

      case 'P2025': {
        const status = HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
          statusCode: status,
          message: 'Associated records were not found'
        });
        break;
      }

      case 'P2034': {
        const status = HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
          statusCode: status,
          message: 'Transaction failed due to a write conflict or a deadlock'
        });
        break;
      }

      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}
