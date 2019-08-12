import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment';
import { Diagram, DiagramDetail } from './diagram';

@Injectable({
    providedIn: 'root'
})
export class DiagramService {

    constructor(private http: HttpClient) { }

    getAllDiagrams(): Observable<Diagram[]> {
        const endPoint : string = environment.api + 'diagrams';
        return this.http.get<Diagram[]>(endPoint).pipe(
            map(
                rows => rows.map(row => new Diagram(row))
            )
        ) as Observable<Diagram[]>;
    }

    getDiagram(id: number): Observable<DiagramDetail> {
        const endPoint : string = environment.api + 'diagram/' + id;
        return this.http.get<DiagramDetail>(endPoint).pipe(
            map(payload => new DiagramDetail(payload))
        ) as Observable<DiagramDetail>;
    }
}
