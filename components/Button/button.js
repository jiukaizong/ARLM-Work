import Link from "next/link";
const btn = props => {
  const {action} = props
  return (<Link className={action.style}><a href="">{action.title}</a></Link>)
}