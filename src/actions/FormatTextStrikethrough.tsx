import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextStrikethrough = (
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
      d="M4 3v2h6c.43 0 1 .613 1 1h2a3 3 0 0 0-3-3zM1 7v2h14V7zm2 3c.008.719.27 1.453.781 2.031S5.09 13 6 13h7v-3h-2v1H6c-.398 0-.566-.11-.719-.281S5.004 10.28 5 10zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextStrikethrough)
export default ForwardRef