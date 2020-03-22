import React from "react"
import styles from "./Person.module.css"

const Person = ({ name, age, click, changed, children: hobies }) => (
  <div className={styles.Person}>
    <p onClick={click}>
      I'm {name} and I'm {age} years old
    </p>
    <p>{hobies}</p>
    <input type="text" onChange={changed} value={name} />
  </div>
)

export default Person
