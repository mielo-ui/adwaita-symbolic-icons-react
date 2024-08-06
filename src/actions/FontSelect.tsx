import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FontSelect = (
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
    <g fill="currentColor">
      <path d="M0 5v6h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 1 5.008V5zM16 5v6h-1v-.008a1 1 0 0 1-.707-.285l-2-2a1 1 0 0 1 0-1.414l2-2c.187-.184.441-.29.707-.29V5zM7 3.012v2h1.918c-.055 0 .086.16.086.082v.922H8c-1.715 0-3.031 1.129-3.055 2.484-.011.68.305 1.363.86 1.824.558.461 1.316.7 2.195.7h3.004v-5.93c0-1.172-.887-2.082-2.086-2.082zM8 8.02h1.004v1.003H8c-.52 0-.793-.136-.922-.242-.125-.105-.133-.172-.133-.242.004-.144.086-.52 1.055-.52m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(FontSelect)
export default ForwardRef