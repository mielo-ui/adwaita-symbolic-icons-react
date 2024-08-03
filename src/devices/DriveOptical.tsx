import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DriveOptical = (
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
      d="M3 0C1.355 0 0 1.355 0 3v6c0 1.293.84 2.406 2 2.824V11q.001-.153.043-.293C2.395 13.68 4.933 16 8 16s5.605-2.32 5.957-5.293q.042.14.043.293v.824c1.16-.418 2-1.531 2-2.824V3c0-1.645-1.355-3-3-3zm0 2h10c.57 0 1 .43 1 1v4c0 .555-.445 1-1 1H3c-.555 0-1-.445-1-1V3c0-.57.5-1 1-1m.5 4c-.277 0-.5.223-.5.5s.223.5.5.5h9c.277 0 .5-.223.5-.5s-.223-.5-.5-.5zm0 4h2.25a2.25 2.25 0 0 0 4.5 0h2.25a4.501 4.501 0 0 1-9 0m3 0h.75a.75.75 0 0 0 1.5 0h.75a1.5 1.5 0 0 1-3 0m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DriveOptical)
export default ForwardRef