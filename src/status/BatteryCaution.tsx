import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryCaution = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="#ff7800">
      <path d="M9 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m0 0" />
      <path d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.45.355C2.814 2.727 2 3.668 2 5v8s-.016.71.355 1.45C2.727 15.187 3.668 16 5 16h6s.707.016 1.45-.355C13.187 15.273 14 14.332 14 13V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.988 11 2 11 2h-1V1c0-1-1-1-1-1zm4 4c.555 0 1 .445 1 1v8c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1zm0 0" />
      <path d="M7 5v4c0 .55.45 1 1 1s1-.45 1-1V5zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(BatteryCaution)
export default ForwardRef