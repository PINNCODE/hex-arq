import { Observable } from "rxjs";

export interface UseCase<P, O> {
    execute(param: P): Observable<O>;
}