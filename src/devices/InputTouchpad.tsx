import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InputTouchpad = (
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
      d="M3.031 1A3.04 3.04 0 0 0 0 4.031v7.938A3.04 3.04 0 0 0 3.031 15h8.938A3.04 3.04 0 0 0 15 11.969V4.03A3.04 3.04 0 0 0 11.969 1zm0 2h8.938C12.566 3 13 3.434 13 4.031V10H2V4.031C2 3.434 2.438 3 3.031 3M2 11h5v2H3.031C2.437 13 2 12.566 2 11.969zm6 0h5v.969c0 .597-.434 1.031-1.031 1.031H8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(InputTouchpad)
export default ForwardRef