import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Pda = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 0C3.355 0 2 1.355 2 3v10c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V5.82l-2 1.993V11c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V3c0-.57.43-1 1-1h6a.99.99 0 0 1 .797.383L13.199.977A2.99 2.99 0 0 0 11 0zm10 1a.97.97 0 0 0-.703.297l-.004-.004L8 7.609V9h1.39l6.317-6.293-.004-.004A.97.97 0 0 0 16 2c0-.55-.45-1-1-1M7.477 13H8.5c.277 0 .5.223.5.5s-.223.5-.5.5h-1a.5.5 0 0 1-.023-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Pda)
export default ForwardRef