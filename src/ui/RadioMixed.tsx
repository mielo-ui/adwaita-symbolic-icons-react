import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const RadioMixed = (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8m0 2c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6M4.996 6a2 2 0 1 0 0 4h6c1.102 0 2-.895 2-2s-.898-2-2-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(RadioMixed)
export default ForwardRef