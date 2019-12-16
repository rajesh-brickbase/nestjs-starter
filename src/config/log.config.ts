import {Logger} from '@nestjs/common';

export class AppLogger extends Logger {

    private prefix: string;

    constructor(prefix) {
        super();
        this.prefix = prefix;
    }

    public setPrefix(prefix: any) {
        this.prefix = String(prefix);
    }

    error(message: string, trace: string) {
        super.error(this.formatMessage(message), trace);
    }

    errorStack(message: string, error: Error) {
        error.stack;
        super.error(this.formatMessage(message), error.stack);
    }

    log(message: string) {
        super.log(this.formatMessage(message));
    }

    debug(message: string) {
        super.debug(this.formatMessage(message));
    }

    warn(message: string) {
    }

    verbose(message: string) {
    }

    formatMessage(message) {
        if (this.prefix) {
            return this.prefix + ' : ' + message;
        }
        return message;
    }
}
