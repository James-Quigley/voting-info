import React from "react"

import strings from "../util/strings"

const LocaleSwitcher = () => {
  const change = e => {
    console.log(e)
    console.log(e.target.value)
    strings.setLanguage(e.target.value)
  }
  return (
    <div>
      <select onChange={change}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  )
}

export default LocaleSwitcher
