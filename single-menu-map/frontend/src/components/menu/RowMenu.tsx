
type RowMenuProps = {
    id: number;
    title: string;
    description: string;
}

const RowMenu = ({id, title, description}: RowMenuProps) => {
  return (
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
    </tr>
  )
}

export default RowMenu;