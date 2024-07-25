import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemLockScreen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M8 1C5.8 1 4 2.8 4 5v2c-1.11 0-2 .89-2 2v5c0 .555.445 1 1 1h10c.555 0 1-.445 1-1V9c0-1.11-.89-2-2-2V5c0-2.2-1.8-4-4-4m0 2c1.125 0 2 .875 2 2v2H6V5c0-1.125.875-2 2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemLockScreen)
export default ForwardRef