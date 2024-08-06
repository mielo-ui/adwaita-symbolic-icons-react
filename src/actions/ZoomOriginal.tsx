import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ZoomOriginal = (
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
    <path
      fill="currentColor"
      d="M4 1C2.34 1 1 2.34 1 4v8c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm3 3h2v8H7V7H5V6c1.105 0 2-.895 2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ZoomOriginal)
export default ForwardRef