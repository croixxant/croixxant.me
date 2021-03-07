export const format = (date: Date) => {
  return 'yyyy-MM-dd HH:mm'
    .replace(/yyyy/g, date.getFullYear().toString())
    .replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
    .replace(/dd/g, ('0' + date.getDate()).slice(-2))
    .replace(/HH/g, ('0' + date.getHours()).slice(-2))
    .replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
}
