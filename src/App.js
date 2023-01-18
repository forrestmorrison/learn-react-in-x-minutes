import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from "react";

import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

import { FeedbackProvider } from './components/context/FeedbackContext';

import FeedbackData from "./data/FeedbackData";

import AboutPage from './pages/AboutPage';


const App = () => {

  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path='/'>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats />
            <FeedbackList handleDelete={deleteFeedback} />
          </Route>
          <Route path='/about' component={AboutPage}/>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;