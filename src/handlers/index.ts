import  numberController  from '../controllers';
import { ApiResponse, NumberStats } from '../types';

export const getStatistics = (): ApiResponse<NumberStats> => {
  return numberController.getStatistics();
};

export const getAllNumbers = (): ApiResponse<number[]> => {
  return numberController.getAllNumbers();
};

export const resetDatabase = (): ApiResponse<null> => {
  return numberController.resetDatabase();
};