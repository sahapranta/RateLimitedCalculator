class RateLimitExceededError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'RateLimitExceededError';
    }
}

class RateLimitedCalculator {
    private count: number;
    private lastMinute: number;

    constructor(private readonly limit: number, private ttl: number = 60) {
        this.limit = limit;
        this.count = 0;
        this.lastMinute = Math.floor(Date.now() / (1000 * 60));
        this.ttl = Math.max(1, Math.min(60, ttl));;
    }

    getSum(a: number, b: number): number {
        this.updateMinute();

        if (this.count >= this.limit) {
            throw new RateLimitExceededError("You need to wait until the limit expires.");
        }

        this.count++;
        return a + b;
    }

    private updateMinute() {
        const currentTime = Math.floor(Date.now() / (1000 * this.ttl));
        if (currentTime > this.lastMinute) {
            this.count = 0;
            this.lastMinute = currentTime;
        }
    }
}

export { RateLimitedCalculator, RateLimitExceededError };