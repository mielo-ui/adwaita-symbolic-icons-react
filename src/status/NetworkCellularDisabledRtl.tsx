import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularDisabledRtl = (
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
      d="M1.531.469.47 1.53l14 14L15 15c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1h-1c-.555 0-1 .445-1 1v.938l-1-1V8c0-.555-.445-1-1-1h-1a.995.995 0 0 0-.996.941L8 6.937V5c0-.555-.445-1-1-1H6a1 1 0 0 0-.672.262L4 2.938V2c0-.555-.445-1-1-1h-.937zM1 4.063V14c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V7.063zm4 4V14c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-2.937zm4 4V14c0 .555.445 1 1 1h1a1 1 0 0 0 .672-.262zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularDisabledRtl)
export default ForwardRef