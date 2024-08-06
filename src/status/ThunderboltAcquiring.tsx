import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ThunderboltAcquiring = (
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
      fillOpacity={0.349}
      d="M1.984 0 2 1H1v1c0 1 .895 1.996 2 2l-.023 1h1L4 4c1 0 1.984-.89 1.984-2L6 1H5l-.016-1zM9 1c-1.11 0-2 .941-2 2.063V5h1V3.063C8 2.453 8.45 2 9 2s1 .453 1 1.063V5h1V3.063C11 1.94 10.11 1 9 1m5.5 2c-.855 0-1.5.766-1.5 1.633V5h1v-.367c0-.39.25-.633.5-.633H16V3zM3 11v2.5C3 14.875 4.125 16 5.5 16S8 14.875 8 13.5V11H7v2.5c0 .84-.66 1.5-1.5 1.5S4 14.34 4 13.5V11zm7 0v1.938c0 1.12.89 2.062 2 2.062s2-.941 2-2.062V11h-1v1.938c0 .609-.45 1.062-1 1.062s-1-.453-1-1.062V11zm0 0"
    />
    <path
      fill="currentColor"
      d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ThunderboltAcquiring)
export default ForwardRef