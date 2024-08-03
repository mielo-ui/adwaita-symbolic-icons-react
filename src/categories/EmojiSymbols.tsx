import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiSymbols = (
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
      d="M4.5 1a1 1 0 0 0-.707.293l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5A1 1 0 0 0 4.5 1m7.516 1q-.036-.001-.07.004a.99.99 0 0 0-.81.496l-2.32 4A.998.998 0 0 0 9.68 8h4.644a1 1 0 0 0 .863-1.5l-2.32-4a1 1 0 0 0-.851-.5M7 9a3 3 0 1 0 .002 6.002A3 3 0 0 0 7 9m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiSymbols)
export default ForwardRef