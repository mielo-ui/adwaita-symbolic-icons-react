import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmblemImportant = (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8m1 3v6c0 .55-.45 1-1 1s-1-.45-1-1V3zm-1 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmblemImportant)
export default ForwardRef