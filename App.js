import { useState } from 'react' // import useState from react directly

import Header from './components/Header'
import Tasks from './components/Tasks'

import Test from './components/Test'
import TestTasks from './components/TestTasks'

const learning = true

const App = (props) => {
  // state is where it should be, at top level, may want to use these in other components
  // if kept in tasks, wouldn't be able to do that, you would have to send it back up and it gets messy
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'food shopping',
      day: 'Feb 6th at 13:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'some meeting',
      day: 'March 8th at 2:30pm',
      reminder: true,
    }
  ])
// eslint-disable-next-line
  const [testTasks, setTestTasks] = useState([
    {
      id: 1,
      testText: 'some text'
    },
    {
      id: 2,
      testText: 'another testTask'
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(
      // tasks.map through each task where the task.id is equal to the id that is passed in
      // then have a specific object else there is no change cause we only want to change one dealing with
      // specific object{} spread across all the task properties, change the reminder boolean
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header></Header>
      {
        tasks.length > 0 ? // if tasks.length is greater than 0 show <Tasks>
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
          : 'No Tasks To Show' // else, show no tasks to show
      }

      {/*  */}
      <h1>Am I learning, {learning ? 'yes' : 'false'}</h1>
      <Test></Test>
      <TestTasks testTasks={testTasks} />
    </div>
  )
}

export default App;

// function App() {
//   const name = 'Ryan'
//   const test = 'again'
//   const learning = true
//   {/* 23.58 creates src/components 
//   24.24 instaled es7 react/redux/graphQL/React-Native snippets 
//         has snippets for inports, exports loops javascript stuff
//         snippets for components
//       rcc - class based component
//       rce - '' but will export
//       rafce - arrow function that exports down at the bottom*/ }
//   return (
//     <div className="container">{/* changed from default */}
//       <h1>Hello from React :)</h1>
//       {/* if(x)yes; else no;*/}
//       <h2>Am I learning, {learning ? 'yes' : 'No'}</h2>
//     </div>
//   );
// }
// class App extends React.Component {/* needs all the lifcycle meathods etc */
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }
// export default App;


// import React from 'react' <- used to import class
// class App extends React.Component {
//  render() {
//    return <h1>Hello from a class</h1>
//  }
// }