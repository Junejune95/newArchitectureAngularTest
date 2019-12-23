import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export abstract class Mapper<T>{
    protected abstract mapFrom(item) : T

    public mapAll(observable: Observable<any>) : Observable<any> {
        return observable.pipe(
            map(data => data.map(item => this.mapFrom(item)))
        )
    }
}
