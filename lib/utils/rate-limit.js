const rateLimitStore = new Map(); // Stores { ip: { count: number, lastReset: timestamp } }

export function checkRateLimit(ip, limit = 5, windowMs = 60 * 60 * 1000) { // 5 requests per hour by default
  const now = Date.now();
  const record = rateLimitStore.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > windowMs) {
    // Reset if window has passed
    record.count = 1;
    record.lastReset = now;
  } else {
    record.count++;
  }

  rateLimitStore.set(ip, record);

  return record.count > limit;
}

export function getRateLimitStatus(ip, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const record = rateLimitStore.get(ip) || { count: 0, lastReset: now };

  const remaining = Math.max(0, limit - record.count);
  const resetTime = record.lastReset + windowMs;

  return {
    limit,
    current: record.count,
    remaining,
    resetAfter: Math.max(0, resetTime - now), // Time in milliseconds until reset
  };
}