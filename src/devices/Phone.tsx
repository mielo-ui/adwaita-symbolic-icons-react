import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Phone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 0C3.355 0 2 1.355 2 3v10c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h6c.57 0 1 .43 1 1v10c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V3c0-.57.43-1 1-1m0 0"
    />
    <path
      fill="currentColor"
      fillOpacity={0.349}
      d="M5.5 12c-.277 0-.5.223-.5.5s.223.5.5.5h5c.277 0 .5-.223.5-.5s-.223-.5-.5-.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Phone)
export default ForwardRef