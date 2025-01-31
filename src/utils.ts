/**
 * World size in map points
 */
const worldSize = 2 ** 32;

export function clamp(value: number, min: number, max: number): number {
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value;
}

export function degToRad(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

/**
 * Projects point in geographical coordinates to point in map coordinates.
 * https://github.com/Trufi/utils/blob/main/src/mapPoint/fromLngLat.ts
 */
export function mapPointFromLngLat(lngLat: number[]): number[] {
    const sin = Math.sin(degToRad(lngLat[1]));

    const x = (lngLat[0] * worldSize) / 360;
    const y = (Math.log((1 + sin) / (1 - sin)) * worldSize) / (4 * Math.PI);

    const worldHalf = worldSize / 2;
    return [clamp(x, -worldHalf, worldHalf), clamp(y, -worldHalf, worldHalf)];
}

export function concatUrl(baseUrl: string, path: string) {
    if (baseUrl.length === 0) {
        return path;
    }

    if (baseUrl[baseUrl.length - 1] === '/') {
        return baseUrl + path;
    }

    return baseUrl + '/' + path;
}

/**
 * Checks whether passed url is absolute, i.e. it begins
 * with http://, https:// or //
 *
 * @param url - checked url
 */
export function isAbsoluteUrl(url: string): boolean {
    return /^https?:\/\//i.test(url);
}
