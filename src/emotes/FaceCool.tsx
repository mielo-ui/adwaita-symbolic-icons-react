import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceCool = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M2.22 5.031c3.913-.037 7.972 0 11.562 0 0 1.642-1.25 2.969-2.78 2.969-1.276 0-2.333-.93-2.657-2.188h-.688C7.333 7.07 6.276 8 5 8 3.47 8 2.22 6.673 2.22 5.031M3 9.063C3.716 10.136 5.235 11 8 11c2.452 0 4.211-.75 5-1.938v.5c0 .681-.838 2.407-5 2.407-3.88 0-5-1.874-5-2.406z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceCool)
export default ForwardRef