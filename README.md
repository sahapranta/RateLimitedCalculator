# Rate Limited Calculator

### Description

Practical Problem Solving - Rate Limiter
Rate limiting is a common strategy for limiting usage of a particular system / component - it works by putting a cap on how often someone can repeat an action within a certain timeframe.

Let's write one of our own. Let's say we have a calculator class that has an 'getSum' function, which returns the sum of two numbers. Only difference is, this function is rate limited, meaning it will throw an error if called too many times within a certain time period.

Here is a skeleton class with the basic implementation. You can complete the implementation as you see fit! The example is a TypeScript class, but feel free to use whatever language you are comfortable with (preferably the language you are working with professionally).

```ts
class RateLimitedCalculator {
  getSum(a: number, b: number) {
    return a + b;
  }
}
```

#### Requirements:

- A call limit per minute should be configurable as a constructor parameter
- Within a minute, if you call getSum more times than the limit, all subsequent calls should throw an error message until the limit expires.


### Strategy

[Fixed Window](https://limits.readthedocs.io/en/stable/strategies.html) Strategy has been implemented to meet the requirements. 
- It keep track of the number of request within a time-frame and reset back to 0 when time elapsed.

- Configurable limit & ttl using constructor parameters ensures the request do not exceed the given limits and within a given time-frame (ttl). Default ttl is 60 Second.


### Test
No need to install any dependencies if bun runtime is installed locally.
- Just Run `bun test` to run the tests.