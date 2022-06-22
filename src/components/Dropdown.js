import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Dropdown(props) {
  return (
    <div className="text-left">
      <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="px-6 py-6">
            <img src={props.image} className="absolute left-0 top-0 w-full h-full rounded-full" alt = "avatar"/>
          </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-primary-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  href={props.link}>
                    Favoritos
                  </a>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                  <button onClick={props.logout}
                    className={`${
                      active ? 'bg-red-700 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Cerrar sesión
                  </button>
                )}
            </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
