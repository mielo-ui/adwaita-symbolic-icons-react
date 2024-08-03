import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewListRtl = (
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
      d="M12 1c-.555 0-1 .445-1 1v2c0 .555.445 1 1 1h2c.555 0 1-.445 1-1V2c0-.555-.445-1-1-1zM1 2v2h8V2zm11 4.016c-.555 0-1 .445-1 1v1.98a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.98c0-.555-.445-1-1-1zM1 7v2h8V7zm11 4c-.555 0-1 .445-1 1v1.98a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V12c0-.555-.445-1-1-1zm-11 .984v2h8v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewListRtl)
export default ForwardRef