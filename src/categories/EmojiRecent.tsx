import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiRecent = (
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
      d="M8.488.055C4.36.055 1.004 3.41 1.004 7.543a7.49 7.49 0 0 0 7.484 7.484c4.133 0 7.489-3.355 7.489-7.484A7.49 7.49 0 0 0 8.488.055m0 1.972a5.51 5.51 0 0 1 5.516 5.516 5.51 5.51 0 0 1-5.516 5.512 5.51 5.51 0 0 1-5.511-5.512 5.51 5.51 0 0 1 5.511-5.516M11.5 4.035q-.053-.002-.105.008a.47.47 0 0 0-.25.156L8.488 6.855 6.832 5.2a.497.497 0 0 0-.918.168c-.039.203.055.41.23.52l2 2c.196.18.497.18.688 0l3-3a.502.502 0 0 0-.332-.852m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiRecent)
export default ForwardRef