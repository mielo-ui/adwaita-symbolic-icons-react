import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const XOfficeSpreadsheet = (
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
      d="M4.969 1c-1.645 0-3 1.355-3 3v9c0 1.645 1.355 3 3 3h6c1.644 0 3-1.355 3-3V5.5a1 1 0 0 0-.293-.707l-3.5-3.5A1 1 0 0 0 9.469 1zm0 2h4v1.5q0 1.5 1.5 1.5h1.5v7c0 .57-.43 1-1 1h-6c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m0 1v1h1V4zm2 0v1h1V4zm-2 2v1h1V6zm2 0v1h1V6zM9.5 7.45 7.969 9.495 6.5 8.434 4.969 10v1.012h6V10zM4.969 12v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(XOfficeSpreadsheet)
export default ForwardRef