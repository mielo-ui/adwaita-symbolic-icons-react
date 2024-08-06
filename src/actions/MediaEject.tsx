import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaEject = (
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
      d="m6.586 1.586-4 4c-.371.379-.578.887-.582 1.148L2 8c0 1 1 1 1 1h10s1 0 1-1V7h-.004c0-.531-.207-1.04-.582-1.414l-4-4C9.04 1.21 8.602.969 8 1s-1.094.266-1.414.586M3 11c-.555 0-1 .445-1 1v1c0 .555.445 1 1 1h10c.555 0 1-.445 1-1v-1c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaEject)
export default ForwardRef