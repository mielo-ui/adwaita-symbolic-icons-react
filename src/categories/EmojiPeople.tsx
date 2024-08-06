import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiPeople = (
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
      d="M8 0C3.598 0 0 3.598 0 8s3.598 8 8 8 8-3.598 8-8-3.598-8-8-8m0 1.98c3.34 0 6.02 2.68 6.02 6.02S11.34 14.02 8 14.02 1.98 11.34 1.98 8 4.66 1.98 8 1.98M6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M4.719 9.066c-.114.067-.2.176-.235.305s-.015.266.051.379a4 4 0 0 0 6.93 0c.066-.113.086-.25.05-.379s-.12-.238-.234-.305-.25-.086-.379-.05-.238.12-.304.234c-.536.93-1.524 1.5-2.598 1.5s-2.063-.57-2.598-1.5a.499.499 0 0 0-.684-.184m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiPeople)
export default ForwardRef