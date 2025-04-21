import { routes } from './routes';
import { ApiResponse } from './types';

class Server {
  private routes = routes;

  public get<T>(path: string): ApiResponse<T> {
    const route = this.routes[path];
    if (route && route.get) {
      return route.get() as ApiResponse<T>;
    }
    
    return {
      success: false,
      data: null,
      message: `Route not found: ${path}`
    };
  }

  public post<T>(path: string, _body?: any): ApiResponse<T> {
    const route = this.routes[path];
    if (route && route.post) {
      return route.post() as ApiResponse<T>;
    }
    
    return {
      success: false,
      data: null,
      message: `Route not found: ${path}`
    };
  }
}

export const server = new Server();