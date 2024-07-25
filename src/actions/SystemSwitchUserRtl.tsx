import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemSwitchUserRtl = (
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
      d="M4 0a2 2 0 1 1-2 2c0-1.105.895-2 2-2m8 2a2 2 0 1 1-2 2c0-1.105.895-2 2-2M5 5c1.313 0 2.422.832 2.832 2H.172C.582 5.832 1.688 5 3 5zm8 2c1.66 0 3 1.34 3 3 0 .555-.445 1-1 1H9c-.555 0-1-.445-1-1 0-1.66 1.34-3 3-3zM4 8c.258 0 .512.098.707.293l2 2c.184.187.29.441.29.707H7v1H5v1c.105.8.5 1 1 1h4c1 0 1-1 1-1 0-.55.45-1 1-1s1 .45 1 1c0 1.332-.812 2.273-1.55 2.645-.743.37-1.45.355-1.45.355H6s-.707.016-1.445-.355C3.813 15.273 3 14.332 3 13v-1H1v-1h.008a1 1 0 0 1 .285-.707l2-2A1 1 0 0 1 4 8m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemSwitchUserRtl)
export default ForwardRef