import Logger from '../Logger';

describe('Logger module', () => {
    it('logs info with only text and no args', () => {
        const log = jest.fn();
        global.console = { log };
        Logger.info('Hallo World!');
        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith('Hallo World!');
    });

    it('logs info with args', () => {
        const log = jest.fn();
        global.console = { log };
        Logger.info('Hallo World!', 'Arg1', 'Arg2');
        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith('Hallo World!', 'Arg1', 'Arg2');
    });
});