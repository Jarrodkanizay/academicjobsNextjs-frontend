export function formatDate(input: string) {
  if (input === '') return '';
  const date = new Date(input);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
