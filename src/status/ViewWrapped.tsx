import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewWrapped = (
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
      d="M7 0c2.754 0 5 2.246 5 5v.586l.293-.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V5c0-1.68-1.32-3-3-3S4 3.32 4 5v6c0 1.68 1.32 3 3 3s3-1.32 3-3c0-.55.45-1 1-1s1 .45 1 1c0 2.754-2.246 5-5 5s-5-2.246-5-5V5c0-2.754 2.246-5 5-5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewWrapped)
export default ForwardRef