import { RateLimitedCalculator } from "./RateLimitedCalculator";

const limiter = new RateLimitedCalculator(5);

console.log(limiter.getSum(4, 5));
console.log(limiter.getSum(14, 2));
console.log(limiter.getSum(32, 56));
console.log(limiter.getSum(40, 12));
console.log(limiter.getSum(8, 50));