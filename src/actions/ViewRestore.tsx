import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewRestore = (
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
      <path d="M2 8c-.55 0-1 .45-1 1s.45 1 1 1h2.586l-3.293 3.293a1 1 0 1 0 1.414 1.414L6 11.414V14c0 .55.45 1 1 1s1-.45 1-1V8zM14 8c.55 0 1-.45 1-1s-.45-1-1-1h-2.586l3.293-3.293a1 1 0 1 0-1.414-1.414L10 4.586V2c0-.55-.45-1-1-1s-1 .45-1 1v6zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewRestore)
export default ForwardRef