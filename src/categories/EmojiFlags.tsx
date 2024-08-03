import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiFlags = (
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
      d="M3 0c-.55 0-1 .45-1 1v15h2V8h2.383l.722 1.45c.168.335.516.55.895.55h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H9.617L8.895.55A1 1 0 0 0 8 0zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiFlags)
export default ForwardRef