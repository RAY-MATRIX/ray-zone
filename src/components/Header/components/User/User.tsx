import { FC } from 'react'
import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from '@/components/Link/Link'
import { signOut } from 'next-auth/react'
import Dropdown from '@/components/Dropdown'
import Item from './components/Item'

const User: FC = () => (
  <Dropdown toggle={<UserCircleIcon className="w-6" />}>
    <ul>
      <li className="pb-3">
        <Link href="/user/profile">
          <Item icon={<UserIcon />}>Profile</Item>
        </Link>
      </li>
      <li className="pt-3 border-t-gray-200 border-t">
        <button type="button" onClick={() => signOut()}>
          <Item icon={<ArrowLeftOnRectangleIcon />}>Logout</Item>
        </button>
      </li>
    </ul>
  </Dropdown>
)

export default User
