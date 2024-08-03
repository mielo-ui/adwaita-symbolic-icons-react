import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoBottom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.844 3.012a1 1 0 0 0-.55 1.695l5.999 6a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414L8 8.586 2.707 3.293a1 1 0 0 0-.863-.281M1 11c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoBottom)
export default ForwardRef