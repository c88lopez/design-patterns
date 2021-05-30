import { sum } from './sum'

export const mult = (a: number, b: number): number =>
    a === 0 || b === 0
        ? 0
        : multNegative(a, b)

const multNegative = (a: number, b: number): number =>
        a < 0 || b < 0 ?
                a < 0 && b < 0 ? multNotZero(-a, -b)
                        : a < 0 ? -multNotZero(-a, b)
                                : -multNotZero(a, -b)

            : multNotZero(a, b)

const multNotZero = (a: number, b: number): number =>
    (
        b === 1
            ? a
            : sum(a, multNotZero(a, b - 1))
    )
