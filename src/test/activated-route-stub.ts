import { ReplaySubject } from 'rxjs';
import { ParamMap, Params, convertToParamMap } from '@angular/router';

/**
 * An ActivatedRoute test with `paramMap` observable.
 * Use the `setParamMap()` method to add next `paramMap` value. 
*/
export class ActivatedRouteStub  {
    // Use a ReplaySubject to share previous values with subscribers
    // and pump new values into the `paramMap` observable
    private subject = new ReplaySubject<ParamMap>();

    constructor(initialParams?: Params) {
        this.setParamMap(initialParams);
    }

    /** The mock paramMap observable */
    readonly paramMap = this.subject.asObservable();

    /** Set the paramMap observables's next value */
    setParamMap(params?: Params) {
        this.subject.next(convertToParamMap(params));
    };    

}