import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiBody = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1 7v8h11c.438 0 .875-.375 1-1l1-5.969V6c0-.535-.406-1-1-1H9.102L10 1.5C10.227.66 9.566 0 9 0H8L3.957 7zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiBody)
export default ForwardRef