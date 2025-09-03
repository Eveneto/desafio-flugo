import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function Sidebar() {
  return (
    <Box sx={{
      width: { xs: "100%", md: 200 },
      minHeight: { xs: "auto", md: "100vh" },
      bgcolor: "#fff",
      borderRight: { xs: "none", md: "1px solid #E5E7EB" },
      borderBottom: { xs: "1px solid #E5E7EB", md: "none" },
      display: "flex",
      flexDirection: { xs: "row", md: "column" },
      pt: { xs: 2, md: 3 },
      px: 2,
      py: { xs: 2, md: 0 },
      alignItems: { xs: "center", md: "flex-start" },
      justifyContent: { xs: "space-between", md: "flex-start" }
    }}>
      <Box sx={{ 
        mb: { xs: 0, md: 8 }, 
        display: "flex", 
        alignItems: "center", 
        px: 1 
      }}>
        <img 
          src="/logo2.png" 
          alt="Flugo" 
          style={{ height: 32, width: 'auto' }} 
        />
      </Box>
      <List sx={{ 
        width: { xs: "auto", md: "100%" }, 
        p: 0,
        display: { xs: "flex", md: "block" }
      }}>
        <ListItem 
          sx={{ 
            bgcolor: "#F3F4F6", 
            borderRadius: 1, 
            mb: { xs: 0, md: 1 },
            py: { xs: 1, md: 1.5 },
            px: 2,
            minWidth: { xs: "auto", md: "unset" }
          }}
        >
          <ListItemIcon sx={{ minWidth: { xs: 28, md: 36 } }}>
            <PeopleAltIcon sx={{ color: "#6B7280", fontSize: { xs: 18, md: 20 } }} />
          </ListItemIcon>
          <ListItemText 
            sx={{ display: { xs: "none", sm: "block" } }}
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
