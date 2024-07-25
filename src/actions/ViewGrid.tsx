import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewGrid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2 1c-.555 0-1 .445-1 1v4c0 .555.445 1 1 1h4c.555 0 1-.445 1-1V2c0-.555-.445-1-1-1zm8 0c-.555 0-1 .445-1 1v4c0 .555.445 1 1 1h4c.555 0 1-.445 1-1V2c0-.555-.445-1-1-1zM2 9c-.555 0-1 .445-1 1v4c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-4c0-.555-.445-1-1-1zm8 0c-.555 0-1 .445-1 1v4c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-4c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewGrid)
export default ForwardRef