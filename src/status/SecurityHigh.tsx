import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SecurityHigh = (
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
      d="M2 0c-.55 0-1 .45-1 1v8c0 2.5 1.816 4.246 3.445 5.332a15 15 0 0 0 3.239 1.617c.207.07.425.07.632 0 0 0 1.61-.531 3.239-1.617S15 11.5 15 9V1c0-.55-.45-1-1-1zm1 2h10v7c0 1.5-1.184 2.754-2.555 3.668-1.215.809-2.18 1.129-2.445 1.227-.266-.098-1.23-.418-2.445-1.227C4.184 11.754 3 10.5 3 9zm1 1v6c0 1 .867 2.008 2.11 2.836.933.621 1.472.785 1.89.95.418-.165.957-.329 1.89-.95C11.134 11.008 12 10 12 9V3zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SecurityHigh)
export default ForwardRef