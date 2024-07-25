import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatIndentMoreRtl = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M15 1v2H1V1zm0 4v6h-1v-.008a1 1 0 0 1-.707-.285l-2-2a1 1 0 0 1 0-1.414l2-2c.187-.184.441-.29.707-.29V5zM9 5v2H1V5zm0 4v2H1V9zm6 4v2H4v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatIndentMoreRtl)
export default ForwardRef