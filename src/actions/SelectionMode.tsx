import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SelectionMode = (
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
      <path d="M11.453 5.414c.79.05 1.145 1.008.586 1.566l-3.988 4.122a.92.92 0 0 1-1.301 0L4.367 8.8C3.5 7.934 4.801 6.633 5.668 7.5l1.73 1.652 3.34-3.472a.9.9 0 0 1 .715-.266m0 0" />
      <path d="M7.996 0C3.594 0 0 3.594 0 8s3.594 8 7.996 8c4.406 0 7.996-3.594 7.996-8s-3.59-8-7.996-8m0 2c3.324 0 5.996 2.676 5.996 6s-2.672 6-5.996 6S2 11.324 2 8s2.672-6 5.996-6m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SelectionMode)
export default ForwardRef