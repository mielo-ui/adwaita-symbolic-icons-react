import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceLaugh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.531 4.719C6.266 4.719 7 5.165 7 6.03c-1.5-.338-3.125 1.733-3 0 .063-.866.797-1.312 1.531-1.312zm4.938 0c.734 0 1.469.446 1.531 1.312.125 1.733-1.5-.338-3 0 0-.866.734-1.312 1.469-1.312M3 9.03c2 1.304 7.987 1.304 10.031 0l-.03.531c-.037.43-1 3.376-5 3.407s-5-2.78-5-3.313V9.03z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceLaugh)
export default ForwardRef