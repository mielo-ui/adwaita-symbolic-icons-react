import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DisplayProjector = (
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
      d="M9.5 3c-1.387 0-2.594.82-3.156 2H3C1.355 5 0 6.355 0 8v3c0 1.645 1.355 3 3 3 0 .555.445 1 1 1s1-.445 1-1h6c0 .555.445 1 1 1s1-.445 1-1c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3h-.344c-.562-1.18-1.77-2-3.156-2m0 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3 7h3.04c.241 1.688 1.71 3 3.46 3s3.219-1.312 3.46-3H13c.57 0 1 .43 1 1v3c0 .555-.445 1-1 1H3c-.555 0-1-.445-1-1V8c0-.57.43-1 1-1m1 1c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DisplayProjector)
export default ForwardRef