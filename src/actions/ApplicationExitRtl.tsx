import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationExitRtl = (
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
    <g fill="">
      <path d="M3 5v.004c-.266 0-.52.105-.707.289l-2 2a1 1 0 0 0 0 1.414l2 2c.187.184.441.29.707.285V11h1V9h5c.55 0 1-.45 1-1s-.45-1-1-1H4V5zm0 0" />
      <path d="M12 1c1.645 0 3 1.355 3 3v8c0 1.645-1.355 3-3 3H8c-1.645 0-3-1.355-3-3v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .57.43 1 1 1h4c.57 0 1-.43 1-1V4c0-.57-.43-1-1-1H8c-.57 0-1 .43-1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V4c0-1.645 1.355-3 3-3zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ApplicationExitRtl)
export default ForwardRef