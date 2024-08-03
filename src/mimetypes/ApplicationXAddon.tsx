import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationXAddon = (
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
      d="M7.016 0c-1.11 0-2 .89-2 2v1H2C.89 3 0 3.89 0 5v2h1.016c1.105 0 2 .89 2 2s-.895 2-2 2H0v2.988c0 1.106.89 2 2 2h3.016V15c0-1.11.89-2 2-2 1.105 0 2 .89 2 2v.988h2c1.105 0 2-.894 2-2V11h1c1.105 0 2-.89 2-2s-.895-2-2-2h-1V5c0-1.11-.895-2-2-2h-2V2c0-1.11-.895-2-2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ApplicationXAddon)
export default ForwardRef