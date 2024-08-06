import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewMore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.996 0a2 2 0 1 0-.002 4.002A2 2 0 0 0 7.996 0m0 6a2 2 0 1 0-.002 4.002A2 2 0 0 0 7.996 6m0 6a2 2 0 1 0-.002 4.002A2 2 0 0 0 7.996 12m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewMore)
export default ForwardRef