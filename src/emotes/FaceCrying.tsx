import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceCrying = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.558 0 1.031.41 1.031.875v.781c0 .466-.473.844-1.031.844s-1-.378-1-.844v-.781C5 5.41 5.442 5 6 5m4 0c.558 0 1 .378 1 .844v.812c0 .466-.442.844-1 .844s-1-.378-1-.844v-.812C9 5.378 9.442 5 10 5m1.75 2.281c1.208.449 2.046.937 2.219 1.563a.993.993 0 0 1-.938 1.25c-.519.007-.768-.216-.937-.875-.167-.66.083-1.293-.344-1.938M7.969 9.97c2.588 0 3.969.98 3.969 1.562v.531c-.793-.696-3.187-1-3.97-1-.781 0-3.018-.058-3.968 1v-.53c0-.745 1.38-1.563 3.969-1.563"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceCrying)
export default ForwardRef