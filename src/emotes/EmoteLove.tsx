import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmoteLove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 5.766a3.763 3.763 0 0 0-3.77-3.757c-1.37 0-2.57.73-3.23 1.822a3.77 3.77 0 0 0-3.23-1.822A3.763 3.763 0 0 0 1 5.766a3.74 3.74 0 0 0 1.19 2.738h-.001L7.914 14l5.898-5.496h-.002A3.74 3.74 0 0 0 15 5.766"
    />
  </svg>
)
const ForwardRef = forwardRef(EmoteLove)
export default ForwardRef