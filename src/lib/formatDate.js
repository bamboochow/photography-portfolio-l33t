export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).getFullYear().toString();
}
