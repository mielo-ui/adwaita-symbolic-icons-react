import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SidebarShowRtl = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path fillOpacity={0.349} d="M9.5 14V2h5v12zm0 0" />
      <path d="M13 1c1.645 0 3 1.355 3 3v8c0 1.645-1.355 3-3 3H3c-1.645 0-3-1.355-3-3V4c0-1.645 1.355-3 3-3zm0 2H3c-.57 0-1 .43-1 1v8c0 .57.43 1 1 1h10c.57 0 1-.43 1-1V4c0-.57-.43-1-1-1m0 0" />
      <path d="M10 2H9v12h1zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SidebarShowRtl)
export default ForwardRef