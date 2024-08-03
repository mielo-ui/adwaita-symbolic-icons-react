import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CallStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.234 11.715a.98.98 0 0 1-1.386 0l-1.04-1.04-1.038-1.042a.974.974 0 0 1 0-1.387l.492-.492a6.83 6.83 0 0 0-6.535 0l.492.492a.974.974 0 0 1 0 1.387l-1.04 1.043-1.038 1.039a.98.98 0 0 1-1.387 0L.71 10.675a2.454 2.454 0 0 1 0-3.468l.348-.348c3.816-3.816 10.054-3.816 13.87 0l.348.348a2.454 2.454 0 0 1 0 3.469zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CallStop)
export default ForwardRef