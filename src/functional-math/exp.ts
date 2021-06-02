import { prod } from './prod'

export const exp = (a: number, b: number): number =>
    b === 0 ? 1
        : b === 1 ? a
            : prod(a, exp(a, b - 1))
