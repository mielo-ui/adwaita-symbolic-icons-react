import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceEmbarrassed = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.531 6.177C6.266 6.177 7 6.623 7 7.489c-1.5-.338-3.125 1.733-3 0 .063-.866.797-1.312 1.531-1.312m4.938 0c.734 0 1.469.446 1.531 1.312.125 1.733-1.5-.338-3 0 0-.866.734-1.312 1.469-1.312m-6 2.558a.75.75 0 1 1 0 1.5.75.75 0 1 1 0-1.5m7.017 0a.75.75 0 1 1 0 1.5.75.75 0 1 1 0-1.5m-4.09 2.262h1.172c.206 0 .547.223.547.5s-.34.516-.547.516H7.396c-.206 0-.484-.239-.484-.516s.278-.5.484-.5"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceEmbarrassed)
export default ForwardRef