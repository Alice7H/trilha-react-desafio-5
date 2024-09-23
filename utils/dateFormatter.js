export const localeDateFormat = (value) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat('pt-BR').format(date);
}