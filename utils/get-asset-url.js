const url = "https://admin.nimagap.uz";

export function getAssetURL(id) {
  if (!id) return null;
  return `${url}/assets/${id}`;
}
