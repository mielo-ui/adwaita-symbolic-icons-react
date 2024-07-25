import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const TouchDisabled = (
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
      d="M3 0A3.01 3.01 0 0 0 .313 1.688l.156-.157 14 14 1.062-1.062-1.293-1.293 1.469-1.469c.45-.45.387-1.633-.695-1.719-.274.004-.532.11-.719.305l-1.504 1.434-.789-.79V6h-2v2.938L7.063 6H10V4c0-.555.445-1 1-1s1 .445 1 1v2h1c1.645 0 3-1.355 3-3s-1.355-3-3-3zM.004 3.066a3.01 3.01 0 0 0 2.93 2.93zM2 7.946c-.555 0-1 .445-1 1V13s0 3 3 3h6c.727-.004 1.508-.297 2.152-.785L6.824 9.887A.45.45 0 0 1 6.5 10C6 10 6 9.5 6 9.5v-.437L4.945 8.008A.99.99 0 0 0 4 9v.5s0 .5-.5.5-.5-.5-.5-.5v-.555c0-.554-.445-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(TouchDisabled)
export default ForwardRef