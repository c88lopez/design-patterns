import { sum } from './sum'

export const prod = (a: number, b: number): number =>
    a === 0 || b === 0
        ? 0
        : prodNegative(a, b)

const prodNegative = (a: number, b: number): number =>
        a < 0 || b < 0 ?
                a < 0 && b < 0 ? prodNotZero(-a, -b)
                        : a < 0 ? -prodNotZero(-a, b)
                                : -prodNotZero(a, -b)

            : prodNotZero(a, b)

const prodNotZero = (a: number, b: number): number =>
    (
        b === 1
            ? a
            : sum(a, prodNotZero(a, b - 1))
    )
