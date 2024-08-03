import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const XOfficeCalendar = (
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
      d="M4 1v1C2.355 2 1 3.355 1 5v7c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3V1h-2v1H6V1zm0 5h8c.555 0 1 .445 1 1v5c0 .57-.441.887-1 1H4c-.57 0-1-.43-1-1V7c0-.555.445-1 1-1m3 1v1h2V7zm3 0v1h2V7zM4 9v1h2V9zm3 0v1h2V9zm3 0v1h2V9zm-6 2v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(XOfficeCalendar)
export default ForwardRef