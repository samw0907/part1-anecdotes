import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
  <div>
  <button onClick={handleClick}>{text}</button>
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const voteArray = Array(8).fill(0)

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(voteArray)

  const copy = [...votes]

  const randomNum = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))

  }

//  console.log(selected)

  const handleVote = () => {
    copy[selected]+=1
    setVotes(copy)  
  }

//console.log(votes)
 
return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]} has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={randomNum} text='next anecdote' />
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]} has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App