import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IDiagramSettings} from './IDiagramSettings';
import { environment } from '@environment';
import { map } from 'rxjs/operators';
import { SettingModels } from './settings.model';

@Injectable({
    providedIn: 'root'
})
export class DiagramsSettingsService {

    constructor(private http: HttpClient) { }

    getSettings(): Observable<IDiagramSettings> {
        const endPoint : string = environment.api + 'settings/diagrams'
        return this.http.get(endPoint).pipe(map( payload => {
            return new SettingModels(payload);
        })) as Observable<IDiagramSettings>;
    }
}
