import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DriveHarddiskUsb = (
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
      d="M8.5 0h-1l-2 4H7v5H4V7.73A1.999 1.999 0 0 0 3 4a1.999 1.999 0 0 0-1 3.73V9c0 2 2 2 2 2h3v1.27A1.999 1.999 0 0 0 8 16a1.999 1.999 0 0 0 1-3.73V11h3s2 0 2-2V8s1.125-.187 1-1V5c.125-1.125-1-1-1-1h-2c-1.062 0-1 1-1 1v2c0 1 1 1 1 1v1H9V4h1.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DriveHarddiskUsb)
export default ForwardRef