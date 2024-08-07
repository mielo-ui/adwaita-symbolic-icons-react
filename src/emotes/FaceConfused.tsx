import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceConfused = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.558 0 1.031.473 1.031 1.031V7c0 .558-.473 1-1.031 1s-1-.442-1-1v-.97C5 5.473 5.442 5 6 5m4 0c.558 0 1 .473 1 1.031V7c0 .558-.442 1-1 1s-1-.442-1-1v-.97C9 5.473 9.442 5 10 5M4.594 8.812c.064-.009-.28.014-.213.032 4.481-.032 1.45 2.581 6.588 2.643a.506.506 0 0 1 .343.625.474.474 0 0 1-.593.344C5.77 12.442 7.812 9.75 4.53 9.812a.506.506 0 0 1-.344-.625.5.5 0 0 1 .407-.375z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceConfused)
export default ForwardRef