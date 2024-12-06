import { RemoveIcon, EditIcon } from './Icons.tsx';
import { useAppSelector} from '../hooks/store';
import { useUserActions } from '../hooks/useUserActions';


export default function ListOfUsers() {
    const users = useAppSelector((state) => state.users);
    const { removeUser } = useUserActions();
    return (
        <div>
        <h3
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-transparent"
            >
            Usuarios
            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {users.length}
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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-black">
                    <button className="bg-transparent" onClick={() => removeUser(user.id)}><RemoveIcon/></button>
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