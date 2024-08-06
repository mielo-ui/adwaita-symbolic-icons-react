import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemReboot = (
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
      d="M8 0c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1M1 1l2.05 2.05a7.01 7.01 0 0 0-1.331 8.04 7.01 7.01 0 0 0 7.18 3.851 7.01 7.01 0 0 0 5.96-5.554 7 7 0 0 0-3.336-7.434 1 1 0 0 0-1.008 1.727 4.99 4.99 0 0 1 2.383 5.312 4.99 4.99 0 0 1-4.253 3.969c-2.13.273-4.184-.828-5.13-2.754s-.566-4.227.95-5.742L6 6V1.996C6 1.476 5.55 1 5 1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemReboot)
export default ForwardRef