import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AuthSmartcard = (
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
      d="M4 0C2 0 2 2 2 2v12c0 2 2 2 2 2h8s2 0 2-2V2c0-2-2-2-2-2zm1.508 2.977a.5.5 0 0 1 .508.507v3.532h1V2.984h3v4.032h.511c.676-.012.676 1.007 0 1H9.016V3.984h-1v4.032h-3V3.484a.5.5 0 0 1 .492-.507m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AuthSmartcard)
export default ForwardRef