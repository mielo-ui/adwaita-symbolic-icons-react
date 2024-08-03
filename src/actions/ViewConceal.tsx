import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewConceal = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.531.469.47 1.53l14 14 1.062-1.062-2.383-2.383a8 8 0 0 0 2.59-4.098A8 8 0 0 0 8 2a8.05 8.05 0 0 0-3.895 1.043zM8 4c2.21 0 4 1.79 4 4a4 4 0 0 1-.7 2.238L9.833 8.77c.105-.243.164-.504.168-.77 0-1.105-.895-2-2-2a2 2 0 0 0-.77.168L5.762 4.699A4 4 0 0 1 8 4m-6.145.918A7.9 7.9 0 0 0 .262 8.012 8 8 0 0 0 8 14a8 8 0 0 0 2.512-.426l-1.668-1.668c-.278.059-.563.09-.844.094-2.21 0-4-1.79-4-4 .004-.281.035-.566.094-.844zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewConceal)
export default ForwardRef