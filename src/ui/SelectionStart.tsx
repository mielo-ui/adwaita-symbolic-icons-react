import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SelectionStart = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="m11.008 14-6-6V2h6zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(SelectionStart)
export default ForwardRef