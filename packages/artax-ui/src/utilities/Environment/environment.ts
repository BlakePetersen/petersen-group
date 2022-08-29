export const isClientside = (): boolean => {
  return typeof window !== 'undefined'
}
