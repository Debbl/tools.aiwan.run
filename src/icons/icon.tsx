import type { SVGProps } from 'react'

export function Rss(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M6.5 14.0655C10.5 13.6065 18.5 15.3508 18.5 26'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <path
        d='M6.5 5.11467C13.5 4.31139 27.5 7.36386 27.5 26'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <circle cx='8' cy='24.5' r='3' fill='currentColor' />
    </svg>
  )
}
export function FireFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 1024 1024' {...props}>
      <path
        fill='currentColor'
        d='M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8c-1.4 1.5-3 1.9-4.1 2c-1.1.1-2.8-.1-4.3-1.5c-1.4-1.2-2.1-3-2-4.8c3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9c-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1a352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z'
      ></path>
    </svg>
  )
}
export function Avatar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 36 36'
      fill='none'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      width='800'
      height='800'
      {...props}
    >
      <title>Carrie Chapman</title>
      <mask id='mask__beam' maskUnits='userSpaceOnUse' x='0' y='0' width='36' height='36'>
        <rect width='36' height='36' fill='#FFFFFF'></rect>
      </mask>
      <g mask='url(#mask__beam)'>
        <rect width='36' height='36' fill='#f2e0a0'></rect>
        <rect
          x='0'
          y='0'
          width='36'
          height='36'
          transform='translate(-4 8) rotate(168 18 18) scale(1)'
          fill='#8cb0b0'
          rx='36'
        ></rect>
        <g transform='translate(0 4) rotate(-8 18 18)'>
          <path d='M13,19 a1,0.75 0 0,0 10,0' fill='#000000'></path>
          <rect x='11' y='14' width='1.5' height='2' rx='1' stroke='none' fill='#000000'></rect>
          <rect x='23' y='14' width='1.5' height='2' rx='1' stroke='none' fill='#000000'></rect>
        </g>
      </g>
    </svg>
  )
}
export function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32' {...props}>
      <path
        fill='currentColor'
        d='M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z'
      ></path>
    </svg>
  )
}
export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32' {...props}>
      <path
        fill='currentColor'
        d='M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z'
      ></path>
    </svg>
  )
}
export function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32' {...props}>
      <path
        fill='currentColor'
        d='M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z'
      ></path>
    </svg>
  )
}
export function BilibiliLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 1 1 1.415 1.414L16.414 6H18.5A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.414ZM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.355L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8ZM8 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z'
      ></path>
    </svg>
  )
}
export function GithubAlt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M14.1661 25.2735C14.1659 25.1137 14.1312 24.9559 14.0643 24.8112C13.9974 24.6665 13.9 24.5385 13.7789 24.4362C13.6578 24.334 13.516 24.2599 13.3636 24.2193C13.2111 24.1788 13.0518 24.1726 12.8967 24.2014C11.4876 24.4631 9.70943 24.5024 9.2372 23.1566C8.82495 22.114 8.14213 21.2039 7.26114 20.5227C7.19807 20.4879 7.13798 20.4478 7.08149 20.4028C7.00435 20.1968 6.86747 20.0193 6.68889 19.8938C6.51032 19.7682 6.29841 19.7004 6.08109 19.6993H6.07572C5.79135 19.6993 5.51856 19.8135 5.31698 20.0168C5.1154 20.2202 5.00144 20.4962 5.00002 20.7845C4.99571 21.6733 5.87133 22.2437 6.22739 22.4357C6.64689 22.863 6.98399 23.3661 7.22134 23.9189C7.61397 25.0346 8.75206 26.7283 12.0254 26.5102L12.0286 26.6171L12.0329 26.9094C12.0329 27.1986 12.1463 27.476 12.348 27.6806C12.5497 27.8851 12.8233 28 13.1086 28C13.3939 28 13.6675 27.8851 13.8693 27.6806C14.071 27.476 14.1843 27.1986 14.1843 26.9094L14.179 26.5626C14.1736 26.3554 14.1661 26.0565 14.1661 25.2735ZM25.6405 8.77682C25.6788 8.6255 25.7111 8.47269 25.7374 8.31877C25.9114 7.10339 25.7598 5.86293 25.2985 4.72737C25.2403 4.57943 25.151 4.44616 25.0367 4.3369C24.9224 4.22763 24.786 4.14501 24.6369 4.09481C24.254 3.96394 22.8405 3.70546 20.1362 5.45808C17.8885 4.92185 15.5488 4.92185 13.3012 5.45808C10.6076 3.73055 9.2017 3.96612 8.82198 4.08936C8.66914 4.13745 8.52885 4.21962 8.4114 4.32983C8.29395 4.44004 8.20231 4.5755 8.14321 4.72628C7.67201 5.88373 7.52173 7.14973 7.70863 8.38747C7.73552 8.52598 7.76349 8.65577 7.79361 8.77355C6.90207 9.97719 6.42716 11.4454 6.44253 12.9506C6.43985 13.286 6.45529 13.6214 6.48878 13.9551C6.84807 18.9752 10.0752 20.4813 12.3234 20.9993C12.2746 21.1427 12.2322 21.2883 12.1964 21.4356C12.1281 21.7165 12.1726 22.0133 12.3202 22.2609C12.4678 22.5085 12.7063 22.6865 12.9833 22.7558C13.2603 22.8251 13.5532 22.7799 13.7974 22.6303C14.0416 22.4807 14.2171 22.2389 14.2855 21.958C14.3539 21.5945 14.5295 21.2607 14.7889 21.0004C14.9454 20.8611 15.0586 20.6788 15.1149 20.4755C15.1712 20.2722 15.168 20.0567 15.1058 19.8552C15.0436 19.6537 14.9251 19.4748 14.7646 19.3403C14.604 19.2057 14.4085 19.1213 14.2016 19.0973C10.4861 18.6665 8.87254 17.132 8.62943 13.7544C8.6028 13.487 8.59095 13.2183 8.59393 12.9495C8.57684 11.877 8.92653 10.8315 9.58357 9.99068C9.6493 9.90321 9.71931 9.81912 9.79333 9.73875C9.92514 9.58927 10.0137 9.40584 10.0494 9.20862C10.0851 9.01141 10.0665 8.80804 9.99557 8.62087C9.92313 8.42427 9.86736 8.22177 9.82883 8.01557C9.74124 7.42821 9.77013 6.82904 9.91381 6.25314C10.8488 6.52097 11.7287 6.95687 12.5116 7.54007C12.641 7.62742 12.7874 7.68558 12.9409 7.71061C13.0944 7.73563 13.2514 7.72694 13.4012 7.68512C15.5754 7.08688 17.8676 7.08725 20.0415 7.68621C20.1922 7.72803 20.3501 7.73623 20.5042 7.71025C20.6584 7.68426 20.8051 7.62472 20.9344 7.5357C21.714 6.95028 22.5904 6.51076 23.5225 6.23787C23.6651 6.7997 23.6969 7.38455 23.6161 7.95886C23.5771 8.18505 23.5162 8.40679 23.4343 8.62087C23.3634 8.80804 23.3447 9.01141 23.3804 9.20862C23.4161 9.40584 23.5047 9.58927 23.6365 9.73875C23.7204 9.83363 23.8032 9.93506 23.8775 10.031C24.5297 10.8577 24.8733 11.8912 24.8478 12.9495C24.8495 13.2325 24.8359 13.5154 24.8069 13.7969C24.5702 17.1298 22.9513 18.6654 19.2186 19.0973C19.0115 19.1211 18.8156 19.2055 18.6549 19.3401C18.4941 19.4747 18.3754 19.6537 18.3132 19.8555C18.251 20.0572 18.2479 20.2729 18.3044 20.4764C18.3609 20.6798 18.4744 20.8623 18.6313 21.0015C18.8986 21.2687 19.0743 21.6158 19.1326 21.9918C19.2056 22.284 19.2392 22.5848 19.2326 22.8861V25.4305C19.2218 26.1372 19.2218 26.6662 19.2218 26.9094C19.2218 27.1986 19.3352 27.476 19.5369 27.6806C19.7386 27.8851 20.0122 28 20.2975 28C20.5828 28 20.8564 27.8851 21.0582 27.6806C21.2599 27.476 21.3732 27.1986 21.3732 26.9094C21.3732 26.6727 21.3732 26.1547 21.384 25.448V22.885C21.3925 22.403 21.3364 21.922 21.2173 21.4552C21.1833 21.3019 21.1416 21.1505 21.0925 21.0015C22.7288 20.7257 24.2156 19.8703 25.2881 18.5873C26.3607 17.3044 26.9495 15.6772 26.9497 13.9954C26.9851 13.648 27.0017 13.2988 26.9992 12.9495C27.0229 11.4431 26.5442 9.97279 25.6405 8.77682Z'
        fill='currentColor'
      />
    </svg>
  )
}

export function Copy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z'
        fill='currentColor'
      />
      <path
        d='M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z'
        fill='currentColor'
      />
    </svg>
  )
}

export function CarbonCheckmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 32 32' {...props}>
      <path fill='currentColor' d='m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z'></path>
    </svg>
  )
}

export function FlowbiteLanguageOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m13 19l3.5-9l3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15'
      ></path>
    </svg>
  )
}

export function MaterialSymbolsAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path fill='currentColor' d='M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z'></path>
    </svg>
  )
}

export function MajesticonsDesktopComputerLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <g fill='currentColor'>
        <path d='M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4v2h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-2H5a3 3 0 0 1-3-3V6zm9 11v2h2v-2h-2zM5 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z'></path>
      </g>
    </svg>
  )
}

const ICONS = {
  Rss,
  FireFilled,
  Avatar,
  Email,
  Sun,
  Moon,
  BilibiliLine,
  GithubAlt,
  Copy,
  CarbonCheckmark,
  FlowbiteLanguageOutline,
  MaterialSymbolsAdd,
  MajesticonsDesktopComputerLine,
}

export type IconType = keyof typeof ICONS

interface IProps extends SVGProps<SVGSVGElement> {
  icon: keyof typeof ICONS
}

const Icon = ({ icon: _icon, ..._props }: IProps) => {
  const Cmp = ICONS[_icon]
  return <Cmp {..._props} />
}

export default Icon
