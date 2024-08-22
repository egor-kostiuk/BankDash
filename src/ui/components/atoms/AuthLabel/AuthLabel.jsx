import "./AuthLabel.css";

export const AuthLabel = ({type}) => {
  return (
    <label className={'auth-label'}>
      {type}
    </label>
  )
}