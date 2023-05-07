import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { BsFileEarmarkFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";

export const sideNavConfig = [
  {
    title: "Overview",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Employee",
    path: "/employees",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Department",
    path: "/departments",
    icon: (
      <SvgIcon fontSize="small">
        <MdHomeWork />
      </SvgIcon>
    ),
  },
  {
    title: "Position",
    path: "/positions",
    icon: (
      <SvgIcon fontSize="small">
        <AiOutlineInsertRowAbove />
      </SvgIcon>
    ),
  },
  {
    title: "File",
    path: "/files",
    icon: (
      <SvgIcon fontSize="small">
        <BsFileEarmarkFill />
      </SvgIcon>
    ),
  },
  {
    title: "My Account",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  // {
  // 	title: 'Companies',
  // 	path: '/companies',
  // 	icon: (
  // 		<SvgIcon fontSize="small">
  // 			<ShoppingBagIcon />
  // 		</SvgIcon>
  // 	)
  // },
  // {
  // 	title: 'Login',
  // 	path: '/auth/login',
  // 	icon: (
  // 		<SvgIcon fontSize="small">
  // 			<LockClosedIcon />
  // 		</SvgIcon>
  // 	)
  // },
  // {
  // 	title: 'Register',
  // 	path: '/auth/register',
  // 	icon: (
  // 		<SvgIcon fontSize="small">
  // 			<UserPlusIcon />
  // 		</SvgIcon>
  // 	)
  // },
  // {
  // 	title: 'Settings',
  // 	path: '/settings',
  // 	icon: (
  // 		<SvgIcon fontSize="small">
  // 			<CogIcon />
  // 		</SvgIcon>
  // 	)
  // },
  // {
  // 	title: 'Error',
  // 	path: '/404',
  // 	icon: (
  // 		<SvgIcon fontSize="small">
  // 			<XCircleIcon />
  // 		</SvgIcon>
  // 	)
  // }
];
