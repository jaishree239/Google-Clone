// import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
// import Search from './Page/Search';
import Form from './component/form/Form';
import ToDo from './component/toDoList/ToDo';
import ApiCall from './component/apiCall/ApiCall';
import Calculator from './component/calculator/Calculator';
import Search from './component/search/Search';
import Pagination from './component/pagination/Pagination';
import ReadMore from './component/readMore/ReadMore';
import Accordian from './component/accordian/Accordian';
import DropDown from './component/dropdown/DropDown';
import ToolTip from './component/tooltip/ToolTip';
import AutoComplete from './component/autoComplete/AutoComplete';
import LoadMore from './component/loadMore/LoadMore';
import InfiniteScroll from './component/infiniteScroll/InfiniteScroll';

function App() {
  return (
    <div className="app">
         {/* learnings in reactjs in jaishree */}
         
{/* <Home /> */}
{/* <Search /> */}
{/* <Form /> */}
{/* <ToDo /> */}
{/* <Calculator/> */}
{/* <ApiCall/> */}
{/* <Search /> */}
{/* <Pagination /> */}
{/* <ReadMore /> */}
{/* <Accordian /> */}
{/* <DropDown /> */}
{/* <ToolTip /> */}
{/* <AutoComplete /> */}
{/* <LoadMore /> */}
<InfiniteScroll />
    </div>
  );
}

export default App;
// style={{margin:'150px'}}
// , {useState, useEffect}