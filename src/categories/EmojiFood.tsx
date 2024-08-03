import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiFood = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M.984-.012A1 1 0 0 0 0 1v4s.008.844.574 1.602c.45.593 1.258 1.117 2.426 1.312V9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1V7.914c1.168-.195 1.977-.719 2.426-1.312C7.992 5.844 8 5 8 5V1a1 1 0 0 0-.496-.879 1.01 1.01 0 0 0-1.008 0C6.184.305 5.996.641 6 1v3.5c0 .277-.223.5-.5.5S5 4.777 5 4.5V1a1 1 0 0 0-.293-.723.98.98 0 0 0-.723-.289A1 1 0 0 0 3 1v3.5c0 .277-.223.5-.5.5S2 4.777 2 4.5V1a1 1 0 0 0-.293-.723.98.98 0 0 0-.723-.289M13.97 0a1 1 0 0 0-.676.293c-1.734 1.734-2.504 4.16-2.898 6.137S10 10 10 10c0 .55.45 1 1 1h1v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V1c0-.562-.465-1.016-1.031-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiFood)
export default ForwardRef