import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MultimediaPlayer = (
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
      d="M5 0C3.355 0 2 1.355 2 3v10c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h6c.57 0 1 .43 1 1v4c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V3c0-.57.43-1 1-1m1.441 8.004a.53.53 0 0 1 .282.047l3 1.5a.5.5 0 0 1 0 .894l-3 1.5A.498.498 0 0 1 6 13.5v-3c0-.254.191-.465.441-.496m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MultimediaPlayer)
export default ForwardRef