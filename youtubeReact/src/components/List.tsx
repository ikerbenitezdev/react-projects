
type Props = {
    task: string;
}

function List({task}: Props) {
  return (
    <li className='cursor-pointer bg-slate-300 rounded-md p-2  my-2 mx-auto hover:bg-slate-100'>{task}</li>
  )
}

export default List