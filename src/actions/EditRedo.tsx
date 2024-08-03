import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L12.586 8H4c-1.117 0-2 .883-2 2s.883 2 2 2c.55 0 1 .45 1 1s-.45 1-1 1c-2.195 0-4-1.8-4-4s1.805-4 4-4h8.586l-2.293-2.293A1 1 0 0 1 11 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditRedo)
export default ForwardRef