// https://leetcode.com/problems/minimum-time-to-complete-trips/

function minimumTime(time: number[], totalTrips: number): number {
  let low: number = 1, high: number = Number.MAX_SAFE_INTEGER, res: number = 0;
  while (low <= high) {
    const mid: number = Math.floor(low + (high - low) / 2);
    let numTrips: number = 0;
    for (let i: number = 0; i < time.length; i++) {
      numTrips += Math.floor(mid / time[i]);
    }
    if (numTrips >= totalTrips) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res;
};