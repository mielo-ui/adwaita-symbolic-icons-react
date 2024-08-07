import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditSelectAll = (
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
    <g fill="currentColor">
      <path d="M0 0v3h3V0zm4 0v2h3V0zm4 0v2h4V0zm5 0v3h3V0zM0 4v4h2V4zm14 0v3h2V4zm0 4v4h2V8zM0 9v3h2V9zm0 4v3h3v-3zm13 0v3h3v-3zm-9 1v2h4v-2zm5 0v2h3v-2zm0 0" />
      <path
        fillOpacity={0.349}
        d="M5 4c-.555 0-1 .445-1 1v1c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V5c0-.555-.445-1-1-1zm4 0c-.555 0-1 .445-1 1v2c0 .555.445 1 1 1h2c.555 0 1-.445 1-1V5c0-.555-.445-1-1-1zM5 8c-.555 0-1 .445-1 1v2c0 .555.445 1 1 1h2c.555 0 1-.445 1-1V9c0-.555-.445-1-1-1zm5 1c-.555 0-1 .445-1 1v1c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-1c0-.555-.445-1-1-1zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EditSelectAll)
export default ForwardRef