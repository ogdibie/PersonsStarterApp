import React, { Component } from "react"
import Person from "./Person/Person"
import styles from "./App.module.css"

class App extends Component {
  state = {
    persons: [
      { id: "ds123", name: "Ruona", age: "25" },
      { id: "sd222", name: "Ted", age: "23" },
      { id: "sf334", name: "Jack", age: "28" }
    ],
    otherState: "Some other value",
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState(({ showPersons }) => ({ showPersons: !showPersons }))
  }

  nameChangedHandler = (id, { target: { value } }) => {
    this.setState(({ persons }) => {
      const updatedPersons = persons.map(person => {
        if (person.id === id) person.name = value
        return person
      })
      return { persons: updatedPersons }
    })
  }

  deletePersonHandler = personIndex => {
    this.setState(({ persons }) => {
      const personsWithoutIndex = persons.filter(
        (_, index) => index !== personIndex
      )
      return { persons: personsWithoutIndex }
    })
  }
  render() {
    const { persons, showPersons } = this.state
    let personsShown = null
    let btnClass = ""
    if (showPersons) {
      personsShown = (
        <div>
          {persons.map(({ name, age, id }, index) => (
            <Person
              name={name}
              age={age}
              key={id}
              click={this.deletePersonHandler.bind(this, index)}
              changed={this.nameChangedHandler.bind(this, id)}
            />
          ))}
        </div>
      )
      btnClass = styles.Red
    }
    const classes = []
    if (persons.length <= 2) classes.push(styles.red)
    if (persons.length <= 1) classes.push(styles.bold)

    const classesString = classes.join(" ")

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a react App</h1>
        <p className={classesString}>This is just a dummy string</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {personsShown}
      </div>
    )
  }
}

export default App
