import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NightLightDisabled = (
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
      d="M8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M1.531.469.47 1.53l14 14 1.062-1.062-1.586-1.59c-.02-.23-.11-.457-.289-.637-.18-.18-.406-.27-.636-.289l-.997-.988A5 5 0 0 0 5.04 3.973l-.996-.989a.98.98 0 0 0-.285-.64.98.98 0 0 0-.64-.285zM12.95 2.05a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 5c.184 0 .367.02.55.05a2.02 2.02 0 0 0-1.343 1.095l-.71-.711A3 3 0 0 1 8 5M3.281 6.344a5 5 0 0 0 6.375 6.375L7.93 10.992A3 3 0 0 1 5.008 8.07zM1 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m14 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-4.05.45c.03.179.05.366.05.55a3 3 0 0 1-.434 1.504l-.714-.715c.55-.258.953-.75 1.097-1.34m-7.9 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NightLightDisabled)
export default ForwardRef