import { TestBed, async } from '@angular/core/testing';
import { SettingModels } from '@settings/settings.model';

describe('SettingModels', () => {
    it('can init', () => {
        expect(new SettingModels({})).toBeTruthy();
    });

    it('has default diagram settings', () => {
        const settings = new SettingModels({});
        expect(settings.default.diagram.height).toBe(600);
        expect(settings.default.diagram.width).toBe(800);
    });

    it('has default node settings', () => {
        const settings = new SettingModels({});
        expect(settings.default.node.width).toBe(80);
        expect(settings.default.node.marginWidth).toBe(30);
    });

    it('can load from payload', () => {
        const settings = new SettingModels({
            default: {
                diagram: {
                    height: 768,
                    width: 1024
                },
                node: {
                    width: 100,
                    marginWidth: 80
                }
            }
        });
        expect(settings.default.diagram.height).toBe(768);
        expect(settings.default.diagram.width).toBe(1024);
        expect(settings.default.node.width).toBe(100);
        expect(settings.default.node.marginWidth).toBe(80);
    });
});