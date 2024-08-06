import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PanEnd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M4.996 14 11 8 4.996 2zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(PanEnd)
export default ForwardRef