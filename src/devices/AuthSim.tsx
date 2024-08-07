import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AuthSim = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 0C2 0 2 2 2 2v12c0 2 2 2 2 2h8s2 0 2-2V3l-3-3zm1 6 1 .008v2H4V7s0-1 1-1m6 0c1 0 1 1 1 1l-.004 1h-2V6zm-4 .008h2v2H7zM4 9.004h8V13c0 1-1 1-1 1l-1-.004V11H4zm6 2h2V11h-2zm-6 1h2v2L5 14c-1 0-1-1-1-1zm3 0h2v2H7zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AuthSim)
export default ForwardRef