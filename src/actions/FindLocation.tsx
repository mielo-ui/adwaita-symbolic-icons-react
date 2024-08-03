import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FindLocation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 0c-.555 0-1 .445-1 1v1q-.001.046.004.086A6.015 6.015 0 0 0 2.09 7.004Q2.045 6.999 2 7H1c-.555 0-1 .445-1 1s.445 1 1 1h1q.045.001.09-.004a6.015 6.015 0 0 0 4.914 4.918q-.002.04-.004.086v1c0 .555.445 1 1 1s1-.445 1-1v-1q.001-.046-.004-.086a6.02 6.02 0 0 0 4.918-4.918c.031 0 .059.004.086.004h1c.555 0 1-.445 1-1s-.445-1-1-1h-1q-.04-.001-.086.004a6.02 6.02 0 0 0-4.918-4.918C8.996 2.059 9 2.027 9 2V1c0-.555-.445-1-1-1m.004 4c2.2 0 4 1.797 4 4s-1.8 4-4 4c-2.203 0-4-1.797-4-4s1.797-4 4-4M8 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FindLocation)
export default ForwardRef