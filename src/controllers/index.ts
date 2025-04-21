import { database } from '../DB';
import { NumberStats, ApiResponse } from '../types';

class NumberController {
  public getStatistics(): ApiResponse {
    try {
      const stats: NumberStats = database.getStats();
      
      return {
        success: true,
        data: stats
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Failed to get statistics'
      };
    }
  }

  public getAllNumbers(): ApiResponse {
    try {
      const numbers = database.getAllNumbers();
      
      return {
        success: true,
        data: numbers
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Failed to get numbers'
      };
    }
  }

  public resetDatabase(): ApiResponse {
    try {
      database.resetDatabase();
      
      return {
        success: true,
        data: null,
        message: 'Database reset successfully'
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Failed to reset database'
      };
    }
  }
}

const numberController = new NumberController();

export default numberController;