import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InputMouse = (
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
      d="M7.031 0a5.01 5.01 0 0 0-5 5v6c0 2.754 2.246 5 5 5H9c2.754 0 5-2.246 5-5V5c0-2.754-2.246-5-5-5zm0 2H9c1.68 0 3 1.32 3 3v6c0 1.68-1.32 3-3 3H7.031c-1.68 0-3-1.32-3-3V5c0-1.68 1.32-3 3-3M8 3c-.555 0-1 .445-1 1v2c0 .555.445 1 1 1s1-.445 1-1V4c0-.555-.445-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(InputMouse)
export default ForwardRef