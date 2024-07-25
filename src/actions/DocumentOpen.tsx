import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentOpen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="">
      <path d="M3 1C1.355 1 0 2.355 0 4v8c0 1.645 1.355 3 3 3h8.883c.832 0 1.578-.402 2.055-.937.472-.532.738-1.168.91-1.801l.972-2.61C16.21 8.203 15.727 7 15 6.484c-.484-.343-.715-.293-1-.324V5c0-.855-.559-1.59-1.094-1.828-.531-.238-1.011-.168-1.011-.168L12 3H8.414L6.707 1.293A1 1 0 0 0 6 1zm0 2h2.586l1.707 1.707A1 1 0 0 0 8 5h4q.053-.001.105-.008s.02.02-.011.004C12.059 4.984 12 4.746 12 5v2c0 .55.45 1 1 1 1 0 1.047.703.887 1.129l-.973 2.61c-.117.437-.297.8-.473.995-.175.2-.285.266-.558.266H3c-.57 0-1-.43-1-1V4c0-.57.469-.793 1-1m0 0" />
      <path d="m7 6 .043.004c-.914-.043-1.75.39-2.195.969C4.137 8.195 3.69 9.25 3.047 10.69a1 1 0 1 0 1.902.621c.489-1.011.922-1.816 1.34-2.808C6.5 8 6.992 8.012 7.188 8H13c.55 0 1-.45 1-1s-.45-1-1-1zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DocumentOpen)
export default ForwardRef