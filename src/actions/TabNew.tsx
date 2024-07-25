import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const TabNew = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="">
      <path d="M3 0C1.355 0 0 1.355 0 3v10c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h10c.57 0 1 .43 1 1v10c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1m0 0" />
      <path d="M4 7h8v2H4zm0 0" />
      <path d="M9 4v8H7V4zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(TabNew)
export default ForwardRef