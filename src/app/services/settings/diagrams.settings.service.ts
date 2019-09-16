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
    private _settings: IDiagramSettings;
    constructor(private http: HttpClient) { }
    
    loadSettings(): Observable<IDiagramSettings> {
        const endPoint : string = environment.api + 'settings/diagrams'
        return this.http.get(endPoint).pipe(map( payload => {
            return this._settings = new SettingModels(payload);
        })) as Observable<IDiagramSettings>;
    }

    get settings(): IDiagramSettings {
        return this._settings;
    }
}
