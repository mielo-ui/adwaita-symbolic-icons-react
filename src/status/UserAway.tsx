import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserAway = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M3 1C1.355 1 0 2.355 0 4v6c0 1.645 1.355 3 3 3h1v3l3-3h6c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm5 3h1v.008a1 1 0 0 1 .707.285l2 2a1 1 0 0 1 0 1.414l-2 2c-.187.184-.441.29-.707.29V10H8V8H4V6h4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(UserAway)
export default ForwardRef