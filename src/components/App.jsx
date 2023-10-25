
import { Route, Routes } from 'react-router-dom';
import { lazy,Suspense} from "react";


const Layout = lazy(() => import("Layout/Layout"));
const DummyTable = lazy(() => import("tabs/dummyTable"));
const DummyChart = lazy(() => import("tabs/dummyChart"));
const DummyList = lazy(() => import("tabs/dummyList"));



const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='dummyTable' element={<DummyTable />} />
      <Route path="dummyChart" element={<DummyChart />} />
      <Route path="dummyList" element={<DummyList />} />

      <Route path="*" element={<div>Not Found</div>} />
    </Route>
    </Routes>
  )
};

export default App;
