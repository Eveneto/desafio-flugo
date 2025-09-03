import { CssBaseline, Box, Avatar } from "@mui/material";
import { useState } from "react";
import EmployeeList from "./EmployeeList";
import MultiStepForm from "./MultiStepForm";
import Sidebar from "./Sidebar";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFormSuccess = () => {
    setShowForm(false);
    setRefreshKey(prev => prev + 1); // Força refresh da lista
  };

  return (
    <Box sx={{ 
      display: "flex", 
      minHeight: "100vh", 
      bgcolor: "#F9FAFB",
      flexDirection: { xs: "column", md: "row" } // Stack vertical em mobile
    }}>
      <CssBaseline />
      <Sidebar />
      <Box sx={{ 
        flex: 1, 
        px: { xs: 1, sm: 2, md: 6 }, 
        py: { xs: 1, sm: 2, md: 4 }, 
        display: "flex", 
        flexDirection: "column",
        minWidth: 0 // Evita overflow
      }}>
        {/* Header com avatar */}
        <Box sx={{ 
          width: "100%", 
          display: "flex", 
          justifyContent: "flex-end", 
          mb: { xs: 2, md: 3 } 
        }}>
          <Avatar 
            src="https://i.pravatar.cc/150?img=10" 
            sx={{ width: { xs: 28, md: 32 }, height: { xs: 28, md: 32 } }}
          />
        </Box>
        <Box sx={{ width: "100%", mb: { xs: 2, md: 4 } }}>
          {showForm ? (
            <MultiStepForm onBack={handleFormSuccess} />
          ) : (
            <EmployeeList key={refreshKey} onNew={() => setShowForm(true)} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
