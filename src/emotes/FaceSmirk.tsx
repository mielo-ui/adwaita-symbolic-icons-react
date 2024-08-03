import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceSmirk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#474747"
      d="M8.015 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-2 4c.559 0 1.032.473 1.032 1.031V7c0 .558-.473 1-1.032 1-.558 0-1-.442-1-1v-.97c0-.558.442-1.031 1-1.031zm4 0c.559 0 1 .473 1 1.031V7c0 .558-.441 1-1 1s-1-.442-1-1v-.97c0-.558.442-1.031 1-1.031zM3.603 7.719c.78 3.306 4.693 4.432 7.705 3.287.007.598-.195 1.097-1.154 1.286-2.166.426-5.161-.143-6.68-2.594-.666-1.074-.127-1.685.129-1.98z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceSmirk)
export default ForwardRef