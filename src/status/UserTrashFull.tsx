import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserTrashFull = (
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
    <g fill="currentColor">
      <path d="M1 3h14c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1m0 0" />
      <path d="M4 4V2.5C4 1.113 5.113 0 6.5 0h2.98c1.383 0 2.5 1.113 2.5 2.5V4h-2V2.5c0-.27-.23-.5-.5-.5H6.5c-.27 0-.5.23-.5.5V4zm0 0" />
      <path d="m3.957 4.29-.316 1.062a13.94 13.94 0 0 0-.172 7.394l.015.07C3.66 13.512 4.285 14 5 14h6c.715 0 1.34-.488 1.516-1.184l.015-.07c.61-2.437.551-4.992-.172-7.394l-.316-1.063 1.914-.578.32 1.066c.825 2.746.891 5.668.196 8.453l-.016.07A3.56 3.56 0 0 1 11 16H5a3.56 3.56 0 0 1-3.457-2.7l-.016-.07a15.96 15.96 0 0 1 .196-8.453l.32-1.066zm0 0" />
      <path d="M6.5 7.191c-.695 1.68-.527 3.188.008 4.637a.498.498 0 0 1-.555.668.49.49 0 0 1-.383-.324c-.605-1.633-.816-3.375.004-5.363a.5.5 0 0 1 .926.383M10.43 6.809c.8 1.945.636 3.699.008 5.367a.502.502 0 0 1-.938-.352c.55-1.465.684-2.992.008-4.633a.499.499 0 1 1 .922-.382m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(UserTrashFull)
export default ForwardRef