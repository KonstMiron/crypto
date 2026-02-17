import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="app__main">
        <main className="app__content">
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
