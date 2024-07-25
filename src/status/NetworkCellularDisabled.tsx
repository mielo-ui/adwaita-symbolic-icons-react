import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularDisabled = (
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
      d="M1.531.469.47 1.53l14 14 1.062-1.062-.531-.531V2c0-.555-.445-1-1-1h-1c-.555 0-1 .445-1 1v8.938l-1-1V5c0-.555-.445-1-1-1H9c-.555 0-1 .445-1 1v1.938zm2.73 6.855C4.102 7.504 4 7.738 4 8v6c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3.937zM1 10c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1zm7 1.063V14c0 .555.445 1 1 1h1a.995.995 0 0 0 .996-.941zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularDisabled)
export default ForwardRef