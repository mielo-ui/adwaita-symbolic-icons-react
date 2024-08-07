import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AirplaneMode = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.496 1c-.793 0-.781.035-.531 1.031L7.59 7h-4.5L1.87 5.219C1.731 5.012 1.75 5 1.527 5H1.31c-.426 0-.282.438-.282.438L1.31 8l-.282 2.563s-.14.437.25.437h.25c.211 0 .203-.008.344-.219L3.09 9h4.5l-1.625 4.938C5.703 14.984 5.699 15 6.496 15c.434 0 .434-.012.719-.5L10.902 9h3.094c.555 0 1-.445 1-1s-.445-1-1-1h-3.094L7.215 1.5c-.266-.457-.281-.5-.656-.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AirplaneMode)
export default ForwardRef