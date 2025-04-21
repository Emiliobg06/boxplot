import { NumberStats } from '../types';

class NumberDatabase {
  private numbers: number[] = [];

  constructor() {
    this.generateRandomNumbers();
  }

  private generateRandomNumbers(): void {
    this.numbers = Array.from({ length: 100 }, () => 
      Math.floor(Math.random() * 81) + 10
    );
  }

  public getAllNumbers(): number[] {
    return [...this.numbers];
  }

  public getStats(): NumberStats {
    const sortedNumbers = [...this.numbers].sort((a, b) => a - b);
    const min = sortedNumbers[0];
    const max = sortedNumbers[sortedNumbers.length - 1];
    const sum = sortedNumbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / sortedNumbers.length;

    const mid = Math.floor(sortedNumbers.length / 2);
    const median = sortedNumbers.length % 2 === 0
      ? (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
      : sortedNumbers[mid];

    return {
      min,
      max,
      average,
      median,
      sum
    };
  }

  public resetDatabase(): void {
    this.generateRandomNumbers();
  }
}

export const database = new NumberDatabase();