import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WindowClose = (
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
      d="M4 4h1.031c.254.012.512.129.688.313L8 6.592l2.313-2.28c.265-.231.445-.305.687-.313h1v1c0 .285-.035.55-.25.75L9.469 8.031l2.25 2.25c.187.188.281.453.281.719v1h-1c-.266 0-.531-.094-.719-.281L8 9.438l-2.281 2.28A1.02 1.02 0 0 1 5 12H4v-1c0-.266.094-.531.281-.719l2.282-2.25L4.28 5.75A.9.9 0 0 1 4 5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(WindowClose)
export default ForwardRef