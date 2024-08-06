import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CheckboxMixed = (
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
      d="M3 0C1.355 0 0 1.355 0 3v10c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h10c.57 0 1 .43 1 1v10c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1m1.996 4a2 2 0 1 0 0 4h6c1.102 0 2-.895 2-2s-.898-2-2-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CheckboxMixed)
export default ForwardRef