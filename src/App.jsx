import TableContent from "./components/TableContent";
import TableFooter from "./components/TableFooter";
import TableHeader from "./components/TableHeader";
import  "./App.css";

function App() {
  let dateTime
  const updateDate=(()=>{
    let today = new Date()
    let day=today.getDate()<10 ? `0${today.getDate()}` : today.getDate();
    let month=(today.getMonth()+1)<10 ? `0${(today.getMonth()+1)}` : (today.getMonth()+1);
    let hour=today.getHours()<10 ? `0${today.getHours()}` : today.getHours();
    let min=today.getMinutes()<10 ? `0${today.getMinutes()}` : today.getMinutes();
    let second= today.getSeconds()<10 ? `0${today.getSeconds()}` : today.getSeconds();
    let date = `${day}/${month}/${today.getFullYear()}`;
    let time = `${hour}:${min}:${second}`;
    return dateTime=`${date} ${time}`;
  })()
  
    return (
    <table className="App">
      <TableHeader no="No." flag="Flag" pic="Image" driver='Driver' team='Team' country='Country' points='Points' increase='Increase' decrease='Decrease'/>
      <TableContent/>
      <TableFooter date={dateTime}/>
    </table>
  );
}

export default App;
