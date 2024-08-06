import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserInvisible = (
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
      fillOpacity={0.349}
      d="M3 1C1.355 1 0 2.355 0 4v6c0 1.645 1.355 3 3 3h1v3l3-3h6c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v6c0 .555-.445 1-1 1H3c-.57 0-1-.43-1-1V4c0-.555.445-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(UserInvisible)
export default ForwardRef