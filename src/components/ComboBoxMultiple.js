import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


export default function ComboBox(props) {
    let list = props.list;
    let placeholder = props.placeholder;

    const [selectedPeople, setSelectedPeople] = useState([])
    const [query, setQuery] = useState('')
    const filteredPeople =
        query === ''
        ? list
        : list.filter((entity) =>
            entity.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    return (
        <div className="">
        <Combobox value={selectedPeople} onChange={setSelectedPeople} multiple>
            <Combobox.Label>{placeholder}</Combobox.Label>
            
            <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-black-900 focus:ring-0 bg-gray-100"
                    displayValue={(entity) => entity.name}
                    onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                        className="h-5 w-5 text-black"
                        aria-hidden="true"
                    />
                    </Combobox.Button>
                </div>
                <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Combobox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.length === 0 && query !== '' ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        No hay autores cargados.
                        </div>
                    ) : (
                        filteredPeople.map((entity) => (
                        <Combobox.Option
                            key={entity.id}
                            className={({ active }) =>
                            `relative cursor-default select-none py-2 ${
                                active ? 'bg-primary-500 text-white' : 'text-gray-900'
                            }`
                            }
                            value={entity}
                        >
                            {({ selected, active }) => (
                            <>
                                <span
                                className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                }`}
                                >
                                {entity.name}
                                </span>
                                {selected ? (
                                <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? 'text-white' : 'text-teal-600'
                                    }`}
                                >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                ) : null}
                            </>
                            )}
                        </Combobox.Option>
                        ))
                    )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
        </div>
    )
}
