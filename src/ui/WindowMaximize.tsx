import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WindowMaximize = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.988 3.992v8.012H12V3.992zm2 2H10v4.012H5.988zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(WindowMaximize)
export default ForwardRef