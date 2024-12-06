import { RemoveIcon, EditIcon } from '../components/Icons'

const users: {
    id: string;
    name: string;
    github: string;
    email: string;
}[] = [
    {
        id: '1',
        name: 'Ahmed',
        github: 'ahmed',
        email: 'ahmed@gmail.com'
    },
    {
        id: '2',
        name: 'Ali',
        github: 'ali',
        email: 'ali@gmail.com'
    },
    {
        id: '3',
        name: 'Omar',
        github: 'omar',
        email: 'omar@gmail.com'
    },
    {
        id: '4',
        name: 'Sara',
        github: 'sara',
        email: 'sara@gmail.com'
    },
    {
        id: '5',
        name: 'Sama',
        github: 'sama',
        email: 'sama@gmail.com'
    }
];

export default function ListOfUsers() {

    return (
        <div>
        <h3
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-transparent"
            >
            Usuarios
            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                2
            </span>
        </h3>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

        <tr>
            <th scope="col" className="px-6 py-3">
            Id
            </th>
            <th scope="col" className="px-6 py-3">
            Nombre
            </th>
            <th scope="col" className="px-6 py-3">
            Email
            </th>
            <th scope="col" className="px-6 py-3">
            <span className="">Actions</span>
            </th>
        </tr>
        </thead>
        <tbody>
            {users.map((user) => (
            <tr key={user.id} className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.id}
                </td>
                <td className="flex items-center gap-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    
                    <img  className="w-10 rounded-full" src={`https://unavatar.io/github/${user.github}`}/>
                    {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-transparent"><RemoveIcon/></button>
                    <button className="bg-transparent"><EditIcon/></button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    </div>
    </div>
    )
}