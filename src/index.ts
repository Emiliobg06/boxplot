import { server } from './server';
import { NumberStats } from './types';

export function getStatistics(): NumberStats {
  const response = server.get<NumberStats>('/api/statistics');
  
  if (response.success && response.data) {
    console.log('Number Cruncher Statistics:');
    console.log('---------------------------');
    console.log(`Minimum value: ${response.data.min}`);
    console.log(`Maximum value: ${response.data.max}`);
    console.log(`Average value: ${response.data.average.toFixed(2)}`);
    console.log(`Median value: ${response.data.median}`);
    console.log(`Sum of all values: ${response.data.sum}`);
    console.log('---------------------------');
    
    return response.data;
  }
  
  throw new Error('Failed to get statistics');
}

export function getAllNumbers(): number[] {
  const response = server.get<number[]>('/api/numbers');
  
  if (response.success && response.data) {
    return response.data;
  }
  
  throw new Error('Failed to get numbers');
}

export function resetDatabase(): void {
  const response = server.post<null>('/api/reset');
  
  if (!response.success) {
    throw new Error('Failed to reset database');
  }
}

export { server };
export default getStatistics();