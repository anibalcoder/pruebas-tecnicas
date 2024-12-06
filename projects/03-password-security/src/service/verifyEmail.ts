export function verifyEmail (email: string): boolean {
  /**
   * Patrón de validación para correos electrónicos:
   * - Al menos un carácter antes del símbolo '@'.
   * - Al menos un carácter después del símbolo '@' y antes del punto '.'.
   * - Al menos dos letras después del punto '.'.
   */
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/

  if (emailRegex.test(email)) return true
  return false
}
