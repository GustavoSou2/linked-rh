import { Observable } from 'rxjs';

export interface IDefaultService<T> {
  list(): Observable<T[]>;
  create(dictionary: T): Observable<T>;
  find(codigo: number): Observable<T | null>;
  delete(codigo: number): Observable<T | { success: boolean; message: string }>;
}
