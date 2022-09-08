
import './App.css';
import Assin1 from './sprint-1/day-1/assignments/Assin1';
import { nanoid } from 'nanoid'
import Commonbtn from './sprint-1/day-1/assignments/Commonbtn';
import styles from "./sprint-1/day-1/assignments/Commonbtn.module.css"
import { Counter } from './sprint-1/day-2/assignments/Counter';
import { Todo } from './sprint-1/day-2/assignments/Todo';
import { PaymentCard } from './sprint-1/day-3/assignments/PaymentCard';
import TodoList from './sprint-1/day-3/we/TodoList';
import { ParentToChild } from './sprint-2/day-1/we/ParentToChild';
import { ChildToParent } from './sprint-2/day-1/we/ChildToParent';
import { Sibling } from './sprint-2/day-1/we/Sibling';
import { NewTodo } from './sprint-2/day-1/we/NewTodo';

import { Tictac } from './sprint-2/day-1/assignments/Tictac';
import NewCount from './sprint-2/day-2/we/NewCount';
import TodoA from './sprint-2/day-2/we/TodoA';
import WTodo from './sprint-2/day-3/we/WTodo';
import Timer from './sprint-2/day-3/assignments/Timer';
import DForm from './sprint-2/day-4/assignments/DForm';
import EmployDetails from './sprint-2/day-4/assignments/EmployDetails';



const btnData= ["Join US","Setting","Login","Contact Us","Search","Help","Home","Download"]


function App() {
  return (
    <>
      {/* <Assin1/>
      <div className={styles.commonbtn}>
          {btnData.map((el)=>{
           return <Commonbtn  key={nanoid()} name={el}/>
          })}
      </div> */}
      {/* <Counter no={0}/>
      <Todo/>
      <PaymentCard product={`Desktop  -   Mobile`} pay={`Pay`} gift={`Amazon Gift`} color={"orange"} date={"28/10/2021"} logo={"https://th.bing.com/th/id/OIP.GOGAIYvawWhbeRl8kCMlmwHaHa?pid=ImgDet&rs=1"}/>
     <PaymentCard product={`Mac Os  -   Mobile`} pay={`Payment`} gift={`Apple Gift`} color={`lightgrey`} date={"17 sep 2021"} logo={`https://th.bing.com/th/id/R.148b09308201fee731f0acf73b50b902?rik=DVbEhjltDtg5wA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f10%2fApple-Logo.png&ehk=AhTd7sHYgkILUL4whTrdx5yMkoOAP1lBEEnS0YlzSr4%3d&risl=&pid=ImgRaw&r=0`}/> 
     <TodoList/>
     <ParentToChild/> 
      <ChildToParent/> 
     <Sibling/> 
      <NewTodo/>
     <Tictac/>
     <NewCount/>
     <TodoA/> */}
     {/* <Res/> */}
     {/* <WTodo/> */}
     {/* <Timer start={15} end={5} time={1000}/> */}
     {/* <DForm></DForm> */}
     {/* <EmployDetails/> */}
     <WTodo/>
    </>
  );
}

export default App;
