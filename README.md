# mapgl-gltf

Plugin for the rendering glTF models with MapGL

## The basic usage via npm package

Install `@2gis/mapgl` and `@2gis/mapgl-gltf` packages:

```shell
npm install @2gis/mapgl
npm install @2gis/mapgl-gltf
```

Import mapgl and plugin into your project:

```js
import { load } from '@2gis/mapgl';
import { GltfPlugin } from '@2gis/mapgl-gltf';

const mapglAPI = await load();

const map = new mapglAPI.Map('container', {
    center: [82.886554, 54.980988],
    zoom: 18,
});

const plugin = new GltfPlugin(map);
plugin.addModels([{
    id: 1,
    coordinates: [82.886554, 54.980988],
    modelUrl: 'models/cube_draco.glb',
    rotateX: 90,
    scale: 1000,
    linkedIds: ['141373143530065', '70030076379181421'],
}]);
```

## Documentation

You can find the more information in the official [documentation](https://docs.2gis.ru/en/mapgl/examples/gltf).
