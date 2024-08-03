import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CameraPhoto = (
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
      <path d="M6.5 0a1 1 0 0 0-.707.293L4.086 2H3C1.355 2 0 3.355 0 5v7c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3h-1.086L10.207.293A1 1 0 0 0 9.5 0zm.414 2h2.172l1.707 1.707A1 1 0 0 0 11.5 4H13c.57 0 1 .43 1 1v7c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1V5c0-.57.43-1 1-1h1.5a1 1 0 0 0 .707-.293zm0 0" />
      <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(CameraPhoto)
export default ForwardRef