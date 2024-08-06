import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceYawn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.531 4C6.266 4 7 4.446 7 5.313c-1.5-.339-3.125 1.732-3 0C4.063 4.446 4.797 4 5.531 4m4.938 0c.734 0 1.469.446 1.531 1.313.125 1.732-1.5-.339-3 0C9 4.446 9.734 4 10.469 4M8 7c1.38 0 2.5 1.343 2.5 3S9.38 13 8 13s-2.5-1.343-2.5-3S6.62 7 8 7"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceYawn)
export default ForwardRef