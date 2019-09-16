import { IDiagramSettings } from './IDiagramSettings';
import { DefaultModel } from './default.model';

export class SettingModels implements IDiagramSettings {
    default: DefaultModel;

    constructor(row: Object) {
        this.default = new DefaultModel(row['default'] || {});
    }
}