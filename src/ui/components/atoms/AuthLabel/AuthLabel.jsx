import "./Label.css";

export const Label = ({ type }) => {
  return (
    <label className={'auth-label'}>
      {type}
    </label>
  )
}