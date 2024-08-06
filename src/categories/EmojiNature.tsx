import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiNature = (
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
      d="M6 1S3 1 3 4v5s.043 1.418.027 2c0 1-.535 1.414-1.402 2.121-.629.488-.773 1.309-.309 1.7.43.35 1.164.3 1.66-.344L3.997 13c.7-1.016.984-1.875 1-3L5 4c0-1 .996-1 .996-1v6.574L9 6.5V4c0-1 .996-1 .996-1L10 5.5l1.996-2.035c.34-.313.504-.465 1-.465L13 4 8.996 8h4s.004 1-1 1h-4l-2 2c0 .426 0 2.008 2 2.008L12 13s3 0 2.996-2.992V1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiNature)
export default ForwardRef