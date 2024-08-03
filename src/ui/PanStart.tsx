import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PanStart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M10.996 14 5 8l5.996-6zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(PanStart)
export default ForwardRef