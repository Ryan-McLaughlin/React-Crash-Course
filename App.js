import { useState } from 'react' // import useState from react directly
// import React from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// import { FaStar } from 'react-icons/fa'
//import TestHeader from './components/TestHeader'
// import TestTasks from './components/TestTasks'

// const learning = true

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  // state is where it should be, at top level, may want to use these in other components
  // if kept in tasks, wouldn't be able to do that, you would have to send it back up and it gets messy
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'March 9th at 11:00',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn React',
      day: 'March 10th anytime',
      reminder: true,
    },
    {
      id: 3,
      text: 'some meeting',
      day: 'March 25th at ',
      reminder: false,
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

  // Add Task
  const addTask = (task) => {
    console.log(task)
    // create an id since there is no backend to do it for us
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id, reminder) => {
    console.log('toggleReminder(' + !reminder + ') of task.id: ' + id)
    // tasks.map through each task where the task.id is equal to the id that is passed in
    // then have a specific object else there is no change cause we only want to change one dealing with
    // specific object{} spread across all the task properties, change the reminder boolean
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      ></Header>
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? // if tasks.length is greater than 0 show <Tasks>
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
          : 'No Tasks To Show' // else, show no tasks to show          
      }

      {/*{let : age = 23}, getBeverage(age)}
      {{let : isMember = true}}      
    {{getFee(isMember)}/}

      <TestHeader></TestHeader>
      <li className='Button'></li>
      <li className={'fa-star'}>hmm</li>
      <h1 className='contain2'>
        test
      </h1>
      <h2 className='contain2'>test2</h2>
      <h3 className='Banner'>yar</h3>

      {/*  
      <h1>Am I learning, {learning ? 'yes' : 'false'}</h1>
      <Test></Test>
      <TestTasks testTasks={testTasks} />
      {console.log(getFee(true))}
      {console.log(getFee(false))}
      {console.log(getFee(null))}
      {console.log(beverage)}*/
      }

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