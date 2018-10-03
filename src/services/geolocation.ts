import { Observable } from 'rxjs';

export const getCurrentPosition = (options: PositionOptions): Observable<Position> => {
  return new Observable(observer => {
    const id = navigator.geolocation.watchPosition(
      position => observer.next(position),
      error => observer.error(error),
      options
    );
    return () => navigator.geolocation.clearWatch(id);
  });
};
