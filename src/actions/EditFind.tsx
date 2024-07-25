import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditFind = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.5 0C2.922 0 0 2.922 0 6.5S2.922 13 6.5 13c1.43 0 2.754-.469 3.828-1.258l2.945 2.945c.957.938 2.364-.5 1.407-1.437l-2.93-2.93A6.45 6.45 0 0 0 13 6.5C13 2.922 10.078 0 6.5 0m0 2C8.996 2 11 4.004 11 6.5S8.996 11 6.5 11 2 8.996 2 6.5 4.004 2 6.5 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditFind)
export default ForwardRef