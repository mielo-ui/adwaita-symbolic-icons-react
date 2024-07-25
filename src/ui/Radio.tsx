import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Radio = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8c4.402 0 8-3.594 8-8s-3.598-8-8-8m0 2c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Radio)
export default ForwardRef