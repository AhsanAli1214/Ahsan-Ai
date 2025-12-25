'use server';

import pLimit from 'p-limit';

// Simple parallel execution utility for server actions or data fetching
const limit = pLimit(10);

export async function parallel<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  return Promise.all(tasks.map(task => limit(task)));
}
