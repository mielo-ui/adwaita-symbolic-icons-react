import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SelectionEnd = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="m4.996 2 6 6v6h-6zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(SelectionEnd)
export default ForwardRef