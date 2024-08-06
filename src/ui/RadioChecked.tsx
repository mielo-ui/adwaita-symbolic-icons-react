import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const RadioChecked = (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8m0 2c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6m-.008 3c-1.652 0-3 1.344-3 3s1.348 3 3 3a3 3 0 0 0 0-6m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(RadioChecked)
export default ForwardRef