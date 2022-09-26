const url = "https://admin.uzbekvoice.ai";

export function getAssetURL(id) {
  if (!id) return null;
  return `${url}/assets/${id}`;
}
