import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PrinterError = (
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
      d="M5 1c-.55 0-1 .45-1 1v1h8V2c0-.55-.45-1-1-1zM2 4C.89 4 0 4.89 0 6v4c0 1.11.89 2 2 2v1c0 1.09.91 2 2 2h4.02a5 5 0 0 1-.907-2H4v-3h3.438A5 5 0 0 1 12 7c1.574 0 3.055.742 4 2V6c0-1.11-.89-2-2-2zm0 0"
    />
    <path
      fill="currentColor"
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-2 3h4c.555 0 1 .445 1 1s-.445 1-1 1h-4c-.555 0-1-.445-1-1s.445-1 1-1m0 0"
      className="error"
    />
  </svg>
)
const ForwardRef = forwardRef(PrinterError)
export default ForwardRef