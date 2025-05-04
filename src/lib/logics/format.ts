export function pad2(num: number): string {
  return num.toString().padStart(2, '0');
}
export function formatDateMDHM(date: Date): string {
  if (typeof date === 'string') date = new Date(date);
  return `${pad2(date.getMonth() + 1)}/${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}
export function formatDateYMDHM(date: Date): string {
  if (typeof date === 'string') date = new Date(date);
  return `${date.getFullYear()}/${pad2(date.getMonth() + 1)}/${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}