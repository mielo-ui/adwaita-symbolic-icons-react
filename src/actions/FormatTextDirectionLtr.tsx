import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextDirectionLtr = (
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
      d="M2 1v2h6c.43 0 1 .613 1 1v1H4c-.918 0-1.734.383-2.25.969S.992 7.28 1 8s.27 1.453.781 2.031S3.09 11 4 11h7V4a3 3 0 0 0-3-3zm2 6h5v2H4c-.398 0-.566-.11-.719-.281S3.004 8.28 3 8s.105-.555.25-.719S3.578 7 4 7m8 3v2H1c-.55 0-1 .45-1 1s.45 1 1 1h11v2h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-.707-.29V10zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextDirectionLtr)
export default ForwardRef