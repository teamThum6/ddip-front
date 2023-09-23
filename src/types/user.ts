export interface profileInfo {
  name: string
  score: number
  profileImg: string
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never
