import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserBusy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 1C1.355 1 0 2.355 0 4v6c0 1.645 1.355 3 3 3h1v3l3-3h6c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm1 5h8v2H4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(UserBusy)
export default ForwardRef