import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SecurityMediumRtl = (
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
      d="M14 0c.55 0 1 .45 1 1v8c0 2.5-1.816 4.246-3.445 5.332a15 15 0 0 1-3.239 1.617.98.98 0 0 1-.632 0s-1.61-.531-3.239-1.617S1 11.5 1 9V1a1 1 0 0 1 1-1zm-1 2H3v7c0 1.5 1.184 2.754 2.555 3.668 1.215.809 2.18 1.129 2.445 1.227.266-.098 1.23-.418 2.445-1.227C11.816 11.754 13 10.5 13 9zm-1 1v6c0 1-.867 2.008-2.11 2.836-.933.621-1.472.785-1.89.95V3zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SecurityMediumRtl)
export default ForwardRef