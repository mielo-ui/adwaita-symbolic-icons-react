import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AvatarDefault = (
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
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1M6.5 8A4.49 4.49 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AvatarDefault)
export default ForwardRef