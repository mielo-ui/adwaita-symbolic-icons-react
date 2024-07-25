import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioXGeneric = (
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
    <path
      fill=""
      d="M8 1C6.355 1 5 2.355 5 4v4.344A3.5 3.5 0 0 0 3.5 8C1.578 8 0 9.578 0 11.5S1.578 15 3.5 15c1.914 0 3.492-1.57 3.5-3.48V4c0-.562.438-1 1-1h4c.563 0 1 .438 1 1v4.344A3.5 3.5 0 0 0 11.5 8C9.578 8 8 9.578 8 11.5S9.578 15 11.5 15s3.5-1.578 3.5-3.5V4c0-1.645-1.355-3-3-3zm-4.5 9c.84 0 1.5.66 1.5 1.5v.016A1.485 1.485 0 0 1 3.5 13c-.84 0-1.5-.66-1.5-1.5S2.66 10 3.5 10m8 0c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioXGeneric)
export default ForwardRef