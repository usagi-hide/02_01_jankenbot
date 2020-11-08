import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css';
import { AnswersList, Chats } from "./components/index.js";
import FormDialog from './components/forms/FormDialog';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        answers: [],
        chats: [],
        currentId: "init",
        dataset: defaultDataset,
        open: false
      }
      this.selectAnswer = this.selectAnswer.bind(this)
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }
  
  displayNextQuestion = (nextQuestionID) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionID].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionID].answers,
      chats: chats,
      currentId: nextQuestionID
    })
  }
  
  selectAnswer = ( selectAnswer, nextQuestionID ) => {
    switch (true) {
      case (nextQuestionID === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionID), 500);
        break;
      
      case (nextQuestionID === 'contact'):
        this.handleClickOpen();
        break;
      
      // 外部ページ
      case (/^https:*/.test(nextQuestionID)):
        const a = document.createElement('a');
        a.href = nextQuestionID;
        a.target = '_blank';
        a.click();
        break;

      default:
        const chats = this.state.chats;
          chats.push({
            text: selectAnswer,
            type: 'answer'
            })


        this.setState({
          chats: chats
        })

        setTimeout(() => this.displayNextQuestion(nextQuestionID), 1000);
        break;
    }
  }

  handleClickOpen = () => {
    this.setState({open: true});
  };

handleClose = () => {
    this.setState({open: false});
  };
  
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId)
  }
  
  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
    return (
        <section className="c-section">
        <div className="c-box">
            <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          <FormDialog open={this.state.open} handleClose={this.handleClose}/>
          </div>
        </section>
    );
  }
}


