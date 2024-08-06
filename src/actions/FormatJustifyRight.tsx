import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatJustifyRight = (
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
      d="M13 1v2H-1V1zm0 4v2H3V5zm0 4v2H-1V9zm0 4v2H3v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatJustifyRight)
export default ForwardRef