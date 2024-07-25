import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ChangesAllow = (
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
      d="M8 0C5.8 0 4 1.8 4 4v1c0 .55.45 1 1 1s1-.45 1-1V4c0-1.125.875-2 2-2s2 .875 2 2v4H4c-1.11 0-2 .89-2 2v5c0 .555.445 1 1 1h10c.555 0 1-.445 1-1v-5c0-1.11-.89-2-2-2V4c0-2.2-1.8-4-4-4m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ChangesAllow)
export default ForwardRef