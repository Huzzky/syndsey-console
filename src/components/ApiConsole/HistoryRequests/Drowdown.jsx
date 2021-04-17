import PropTypes from 'prop-types'

const Drowdown = ({ dropdownActiveBool, setDropdownActiveBool }) => {
  return dropdownActiveBool ? (
    <div
      className="history-component__dropdown"
      onBlur={() => setDropdownActiveBool(false)}
    >
      <div>Выполнить</div>
      <div>Скопировать</div>
      <div>Удалить</div>
    </div>
  ) : (
    <></>
  )
}

Drowdown.propTypes = {}

export default Drowdown
