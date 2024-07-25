import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewAppGrid = (
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
      d="M4 3c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m4 0c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m4 0c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1M4 7c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m4 0c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m4 0c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m-8 4c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m4 0c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m4 0c-.555 0-1 .445-1 1s.445 1 1 1 1-.445 1-1-.445-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewAppGrid)
export default ForwardRef