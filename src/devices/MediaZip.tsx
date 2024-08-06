import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaZip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 1C2.355 1 1 2.355 1 4v8c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3v2c.57 0 1 .43 1 1v8c0 .555-.445 1-1 1H4c-.555 0-1-.445-1-1V4c0-.57.43-1 1-1zm1 0v2.5c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5V1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaZip)
export default ForwardRef