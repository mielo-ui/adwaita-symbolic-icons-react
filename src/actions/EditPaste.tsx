import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditPaste = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 0c-.555 0-1 .445-1 1H4C2.355 1 1 2.355 1 4v9c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3h-2c0-.555-.445-1-1-1zM4 3h1v1c0 .555.445 1 1 1h4c.555 0 1-.445 1-1V3h1c.57 0 1 .43 1 1v9c0 .57-.43 1-1 1H4c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditPaste)
export default ForwardRef