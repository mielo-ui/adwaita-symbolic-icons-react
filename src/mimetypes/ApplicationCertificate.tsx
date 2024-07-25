import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationCertificate = (
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
      d="M3 0C1.355 0 0 1.355 0 3v7c0 1.645 1.355 3 3 3h3v-2H3c-.555 0-1-.445-1-1V3c0-.57.43-1 1-1h10c.57 0 1 .43 1 1v7c0 .555-.445 1-1 1h-1v2h1c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm6 4a3 3 0 0 0-2 5.234V16l2-1.5 2 1.5V9.234A3 3 0 0 0 9 4m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ApplicationCertificate)
export default ForwardRef