import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CameraSwitch = (
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
      d="M13.266 10.477 15.453 8H16v5.004h-.535zM7 7h5c.555 0 1 .445 1 1v5c0 .555-.445 1-1 1H7c-.555 0-1-.445-1-1V8c0-.555.445-1 1-1m0 0"
    />
    <path
      fill=""
      fillOpacity={0.349}
      d="M4 1.996c-.555 0-1 .445-1 1v5.008a1 1 0 0 0 1 1h.996V8c0-1.05.953-2.008 2.004-2.004h3v-3c0-.555-.445-1-1-1zM0 3.004v5.004h.48l2.254-2.586L.61 3.004zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CameraSwitch)
export default ForwardRef