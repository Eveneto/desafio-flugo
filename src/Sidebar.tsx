import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function Sidebar() {
  return (
    <Box sx={{
      width: 200,
      minHeight: "100vh",
      bgcolor: "#fff",
      borderRight: "1px solid #E5E7EB",
      display: "flex",
      flexDirection: "column",
      pt: 3,
      px: 2
    }}>
      <Box sx={{ mb: 8, display: "flex", alignItems: "center", px: 1 }}>
        <img 
          src="/logo2.png" 
          alt="Flugo" 
          style={{ height: 32, width: 'auto' }} 
        />
      </Box>
      <List sx={{ width: "100%", p: 0 }}>
        <ListItem 
          sx={{ 
            bgcolor: "#F3F4F6", 
            borderRadius: 1, 
            mb: 1,
            py: 1.5,
            px: 2
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <PeopleAltIcon sx={{ color: "#6B7280", fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText 
            primary={
              <Typography sx={{ color: "#374151", fontWeight: 500, fontSize: 14 }}>
                Colaboradores
              </Typography>
            } 
          />
        </ListItem>
      </List>
    </Box>
  );
}
