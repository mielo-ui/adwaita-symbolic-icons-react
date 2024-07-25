import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemHelp = (
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
      d="M1.969 0C.879 0 0 .879 0 1.969V14.03C0 15.121.879 16 1.969 16H14c.555 0 1-.445 1-1V4c0-.555-.445-1-1-1H2c-.555 0-1-.445-1-1s.445-1 1-1h12c0-.559-.441-1-1-1zM8 4.063c2.727 0 4.938 2.207 4.938 4.937S10.727 13.938 8 13.938 3.063 11.73 3.063 9 5.273 4.063 8 4.063m0 .968a3.94 3.94 0 0 0-1.781.407l.129.265L6.968 7c.212-.11.438-.195.677-.242.101-.012.214-.024.359-.035.035 0 .066.004.098.004.336.02.644.125.93.273l.718-1.5-.027-.012.027-.05A3.8 3.8 0 0 0 8 5.03M4.438 7.25A4 4 0 0 0 4 9.031c0 .66.191 1.266.469 1.813l1.527-.778q-.008-.01-.016-.023l.02-.012a2.6 2.6 0 0 1-.254-.726l-.012-.098C5.727 9.137 5.72 9.07 5.72 9c.039-.437.062-.484.191-.871L5.97 8 4.5 7.25l-.012.023zm7.093 0-1.5.75c.153.305.25.64.25 1 0 .375-.117.719-.281 1.031l.04.02a.1.1 0 0 0-.017.039l1.508.754a4 4 0 0 0 .438-1.813c0-.644-.14-1.242-.407-1.781l-.023.012q-.007-.006-.008-.012M8 7.719c-.719 0-1.281.562-1.281 1.281a1.27 1.27 0 0 0 .718 1.152c.012.004.024.012.032.016.07.031.136.055.21.07q.05.018.098.024.075.01.145.015l.086.012.097-.012.075-.011q.099-.011.199-.04.004 0 .008-.003l.02-.008c.073-.024.14-.05.21-.086q.018-.01.035-.02l.09-.058q.07-.053.14-.114.028-.029.056-.058.07-.074.128-.16a1.3 1.3 0 0 0 .211-.586c.004-.043.012-.082.016-.125a1.3 1.3 0 0 0-.156-.61q-.004-.004-.008-.015-.024-.038-.047-.074A1.27 1.27 0 0 0 8 7.719M9.031 11c-.312.164-.656.281-1.031.281-.36 0-.695-.097-1-.25l-.75 1.5q.005.004.016.008l-.047.086c.535.27 1.14.438 1.781.438s1.215-.168 1.75-.438l-.047-.102c.016-.011.031-.015.047-.023zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemHelp)
export default ForwardRef