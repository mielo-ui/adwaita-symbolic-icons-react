import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserBookmarks = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M5 0C3.668 0 2.727.816 2.355 1.555 1.985 2.293 2 3 2 3l.031 12.473 5.996-2.403 6.004 2.403L14 2.996c0-.004.012-.707-.355-1.441C13.273.816 12.332 0 11 0zm0 2h6c.695.012 1.004.367 1 1l.023 9.52-3.996-1.602-4.004 1.602L4 2.996C3.992 2.348 4.398 2 5 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(UserBookmarks)
export default ForwardRef