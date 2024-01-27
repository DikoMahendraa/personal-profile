import { JSX, SVGProps } from 'react'

export default function JapanFlag(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" {...props}>
      <path d="M0 0h30v20H0z" />
      <path fill="#fff" d="M1 1h28v18H1z" />
      <circle cx={15} cy={10} r={6} fill="#bc002d" />
    </svg>
  )
}
