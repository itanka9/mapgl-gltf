import * as _mapgl from '@2gis/mapgl/types';
import { GltfPlugin } from './src';

declare module '@2gis/mapgl/types' {
    export { GltfPlugin };

    export interface Map {
        getProjectionMatrixForGltfPlugin(): number[];
        setHiddenObjects(ids: string[]): void;
    }
}

interface MapglPluginsRegistry {
    GltfPlugin: typeof GltfPlugin;
}

declare global {
    const mapgl: typeof _mapgl;
    interface Window {
        __mapglPlugins: Partial<MapglPluginsRegistry>;
    }
}
