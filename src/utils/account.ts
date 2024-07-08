export const accountFormat = (account: string, s = 6, e = 3, line = '...') => {
  return `${account.substring(0, s)}${line}${account.substring(account.length - e, account.length)}`
}