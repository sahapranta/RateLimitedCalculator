import { expect, test, describe } from "bun:test";
import { RateLimitedCalculator, RateLimitExceededError } from './RateLimitedCalculator';

describe('RateLimitedCalculator', () => {
    test('limits upto given time', () => {
        const limiter = new RateLimitedCalculator(2, 1);

        expect(limiter.getSum(2, 5)).toBe(7);
        expect(limiter.getSum(2, 7)).toBe(9);
        expect(() => limiter.getSum(3, 5)).toThrowError(RateLimitExceededError);
    });

    test('resets the count after time finish', (done) => {
        const limiter = new RateLimitedCalculator(2, 2);

        expect(limiter.getSum(2, 5)).toBe(7);
        expect(limiter.getSum(2, 7)).toBe(9);

        setTimeout(() => {
            expect(limiter.getSum(3, 5)).toBe(8);
            expect(limiter.getSum(2, 5)).toBe(7);
            done();
        }, 2100); // 2.1 second
    });
});
