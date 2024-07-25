import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InputGaming = (
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
      d="M3.5 2C1.84 2 .7 3 .5 5c0 0-.5 3-.5 5 0 0 0 3 3.031 3C6 13 6 10 6 10c0-1.5 1.05-2.004 2-2 .941.004 2 .5 2.031 2 0 0-.031 3 2.969 3s3-3 3-3c.031-2-.5-5-.5-5-.164-1.652-1.34-3-3-3zm.75 2h.5c.137 0 .25.113.25.25V5h.75c.137 0 .25.113.25.25v.5c0 .137-.113.25-.25.25H5v.75c0 .137-.113.25-.25.25h-.5A.25.25 0 0 1 4 6.75V6h-.75A.25.25 0 0 1 3 5.75v-.5c0-.137.113-.25.25-.25H4v-.75c0-.137.113-.25.25-.25M10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m3 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(InputGaming)
export default ForwardRef