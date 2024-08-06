import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewWrappedRtl = (
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
      d="M9 0a5.01 5.01 0 0 0-5 5v.586l-.293-.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 1 0-1.414-1.414L6 5.586V5c0-1.68 1.32-3 3-3s3 1.32 3 3v6c0 1.68-1.32 3-3 3s-3-1.32-3-3c0-.55-.45-1-1-1s-1 .45-1 1c0 2.754 2.246 5 5 5s5-2.246 5-5V5c0-2.754-2.246-5-5-5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewWrappedRtl)
export default ForwardRef