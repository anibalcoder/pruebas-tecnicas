export function verifyPassword (password: string): number {
  const specialLetter = ['$', '@', '%', '*', '&', '_']
  let security = 0

  const hasUppercase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = password.split('').some(char => specialLetter.includes(char))
  const isLongEnough = password.length >= 8

  security += hasUppercase ? 1 : 0
  security += hasLowerCase ? 1 : 0
  security += hasNumber ? 1 : 0
  security += hasSpecial ? 1 : 0
  security += isLongEnough ? 1 : 0

  return security
}
