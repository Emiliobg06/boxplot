export interface NumberStats {
  min: number;
  max: number;
  average: number;
  median: number;
  sum: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data: any;
  message?: string;
}