import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryAction = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="#ed333b">
      <path d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.445.355C2.813 2.727 2 3.668 2 5v8s-.016.707.355 1.445C2.727 15.187 3.668 16 5 16h6s.71.016 1.45-.355C13.187 15.273 14 14.332 14 13V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.988 11 2 11 2h-1V1c0-1-1-1-1-1zm4 4c.555 0 1 .445 1 1v8c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1zm0 0" />
      <path d="M5.898 5.887c-.27 0-.523.105-.71.293a1 1 0 0 0 0 1.41l1.406 1.406L5.18 10.41a1 1 0 0 0 0 1.41c.39.387 1.02.387 1.41 0l1.414-1.414 1.41 1.414c.191.188.445.293.711.293s.52-.105.71-.293c.388-.39.388-1.02 0-1.41L9.423 8.996l1.406-1.406a1 1 0 0 0 0-1.41 1.01 1.01 0 0 0-.71-.293 1 1 0 0 0-.708.293L8.008 7.582 6.602 6.18a1 1 0 0 0-.704-.293m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(BatteryAction)
export default ForwardRef