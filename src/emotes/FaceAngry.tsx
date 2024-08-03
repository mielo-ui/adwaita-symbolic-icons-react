import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceAngry = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#474747"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M4 5.125s.474.839 1.25.844H7V7c0 .556-.667 1-1.5 1S4 7.556 4 7zm8 0V7c0 .556-.667 1-1.5 1S9 7.556 9 7V5.969h1.719C11.495 5.964 12 5.125 12 5.125M8.031 9c3.256 0 3 .384 3 .762v.266H5V9.74C5 9.39 4.775 9 8.031 9"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceAngry)
export default ForwardRef