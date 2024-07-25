import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaRemovable = (
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
      d="M5 0v4h6V0zm1 1h1v1H6zm3 0h1v1H9zM4 5c-.555 0-1 .445-1 1v7c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V6c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaRemovable)
export default ForwardRef