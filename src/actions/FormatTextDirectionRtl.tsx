import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextDirectionRtl = (
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
      d="M6 1v2h6c.43 0 1 .613 1 1v1H8c-.918 0-1.734.383-2.25.969S4.992 7.28 5 8s.27 1.453.781 2.031S7.09 11 8 11h7V4a3 3 0 0 0-3-3zm2 6h5v2H8c-.398 0-.566-.11-.719-.281S7.004 8.28 7 8s.105-.555.25-.719S7.578 7 8 7m-5 3v.008a1 1 0 0 0-.707.285l-2 2a1 1 0 0 0 0 1.414l2 2c.187.184.441.29.707.29V16h1v-2h11c.55 0 1-.45 1-1s-.45-1-1-1H4v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextDirectionRtl)
export default ForwardRef