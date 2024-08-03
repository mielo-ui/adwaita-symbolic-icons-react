import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentPageSetup = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M1 4.766V13h14.223zm2 3.468L7.777 11H3zm0 0"
      />
      <path d="M1.176 14c.418 1.16 1.531 2 2.824 2h8c1.293 0 2.406-.84 2.824-2zM4 0C2.355 0 1 1.355 1 3c0 .55.45 1 1 1s1-.45 1-1c0-.57.43-1 1-1h5.586L13 5.414V9c0 .55.45 1 1 1s1-.45 1-1V5a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 10 0zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DocumentPageSetup)
export default ForwardRef