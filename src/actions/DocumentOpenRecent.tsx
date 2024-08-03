import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentOpenRecent = (
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
      d="M8.492.055c-4.129 0-7.488 3.355-7.488 7.488 0 4.129 3.36 7.484 7.488 7.484 4.13 0 7.488-3.355 7.488-7.484 0-4.133-3.359-7.488-7.488-7.488m0 1.972a5.506 5.506 0 0 1 5.512 5.516 5.506 5.506 0 0 1-5.512 5.512A5.506 5.506 0 0 1 2.98 7.543c0-3.05 2.461-5.516 5.512-5.516M11.5 4.035q-.047-.002-.102.008a.47.47 0 0 0-.25.156L8.492 6.855 6.836 5.2a.5.5 0 0 0-.516-.234.504.504 0 0 0-.172.922l2 2c.192.18.497.18.688 0l3-3a.502.502 0 0 0-.336-.852m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentOpenRecent)
export default ForwardRef