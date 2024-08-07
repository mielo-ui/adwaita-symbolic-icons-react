import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SidebarShow = (
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
      <path fillOpacity={0.349} d="M6.5 14V2h-5v12zm0 0" />
      <path d="M3 1C1.355 1 0 2.355 0 4v8c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm0 2h10c.57 0 1 .43 1 1v8c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m0 0" />
      <path d="M6 2h1v12H6zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SidebarShow)
export default ForwardRef