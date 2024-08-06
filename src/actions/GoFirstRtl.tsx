import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoFirstRtl = (
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
      d="M12 0c-.55 0-1 .45-1 1v6.965a.98.98 0 0 0-.293-.672l-6-6a1 1 0 1 0-1.414 1.414L8.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6A1 1 0 0 0 11 8.039V15c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoFirstRtl)
export default ForwardRef