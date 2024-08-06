import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditRedoRtl = (
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
      d="M5 2a1 1 0 0 0-.707.293l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L3.414 8H12c1.117 0 2 .883 2 2s-.883 2-2 2c-.55 0-1 .45-1 1s.45 1 1 1c2.2 0 4-1.8 4-4s-1.8-4-4-4H3.414l2.293-2.293A1 1 0 0 0 5 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditRedoRtl)
export default ForwardRef