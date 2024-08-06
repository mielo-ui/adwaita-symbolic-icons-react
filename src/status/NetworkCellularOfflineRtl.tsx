import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularOfflineRtl = (
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
      fillOpacity={0.349}
      d="M2 1c-.555 0-1 .445-1 1v12c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V2c0-.555-.445-1-1-1zm4 3c-.555 0-1 .445-1 1v9c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V5c0-.555-.445-1-1-1zm4 3c-.555 0-1 .445-1 1v6c0 .148.035.29.094.418.09-.309.254-.594.492-.832l.586-.586-.586-.586a2.014 2.014 0 0 1 0-2.828A2 2 0 0 1 12 9.27V8c0-.555-.445-1-1-1zm6 5.828-.172.172.172.172zm0 0"
    />
    <path
      fill="currentColor"
      d="M11 10a1 1 0 0 0-.707 1.707L11.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L13 14.414l1.293 1.293a1 1 0 1 0 1.414-1.414L14.414 13l1.293-1.293a1 1 0 1 0-1.414-1.414L13 11.586l-1.293-1.293A1 1 0 0 0 11 10m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularOfflineRtl)
export default ForwardRef