const manifestSources = import.meta.glob(
  'public/generated/image-manifest.json',
  {
    base: '../../',
    eager: true,
    import: 'default',
    query: '?raw',
  }
);
const manifestSource =
  manifestSources['public/generated/image-manifest.json'];

export function getImageManifest() {
  if (typeof manifestSource !== 'string') {
    return {};
  }

  try {
    return JSON.parse(manifestSource);
  } catch (_error) {
    return {};
  }
}
