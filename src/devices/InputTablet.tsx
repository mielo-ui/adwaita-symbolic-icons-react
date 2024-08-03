import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InputTablet = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 0v1.5a.491.491 0 0 1-.492.5H4.496a1.501 1.501 0 0 0 0 3h3.008c.18 0 .34.094.43.25A.5.5 0 0 1 8 5.5V6H3C1.355 6 0 7.355 0 9v4c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V9c0-.867-.379-1.648-.973-2.2l-1.41 1.403c.235.18.383.461.383.797v3c0 .555-.445 1-1 1H3c-.555 0-1-.445-1-1V9c0-.57.5-1 1-1h5.191l1.993-2H9v-.5A1.501 1.501 0 0 0 7.504 4H4.496a.49.49 0 0 1-.43-.25.5.5 0 0 1 0-.5.49.49 0 0 1 .43-.25h3.012c.398 0 .777-.16 1.054-.441C8.845 2.277 9 1.899 9 1.5V0zm7 3a.98.98 0 0 0-.703.293h-.004L8 9.609V11h1.39l6.317-6.293-.004-.004A.97.97 0 0 0 16 4c0-.55-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(InputTablet)
export default ForwardRef