import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatJustifyCenter = (
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
      d="M1 1v2h14V1zm2 4v2h10V5zM1 9v2h14V9zm2 4v2h10v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatJustifyCenter)
export default ForwardRef