import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditSelect = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M0 5v6h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 1 5.008V5zM16 5v6h-1v-.008a1 1 0 0 1-.707-.285l-2-2a1 1 0 0 1 0-1.414l2-2c.187-.184.441-.29.707-.29V5zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EditSelect)
export default ForwardRef