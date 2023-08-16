import React, { useState } from "react";
import {
  Box,
  Switch,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { AddCircle, RemoveCircle, MoreVert } from "@mui/icons-material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./DayTime.css";

function DayTime({ id, day, count, getId, forDec ,date }) {
  const [flag, setFlag] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [exceptionsData, setExceptionsData] = useState([]);

  const handleAddException = (exceptionData) => {
    setExceptionsData([...exceptionsData, exceptionData]);
    // setIsDialogOpen(false);
  };


  let arr2 = [];
  for (let i = 0; i < count; i++) {
    arr2.push(i);
  }

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("4:00 PM");

  const handleTimeChange = (isStart, increment, index) => {
    const timeArray = isStart ? startTime.split(" ") : endTime.split(" ");
    let [time, ampm] = timeArray[0].split(":");
    let newTime = parseInt(time) + increment;

    if (newTime > 12) {
      newTime -= 12;
      ampm = ampm === "AM" ? "PM" : "AM";
    }

    if (newTime < 1) {
      newTime = 12;
      ampm = ampm === "AM" ? "PM" : "AM";
    }

    const newTimeStr = `${newTime}:${timeArray[1]} ${ampm}`;

    if (isStart) {
      setStartTime(newTimeStr);
    } else {
      setEndTime(newTimeStr);
    }
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleRemoveClick = () => {
    setIsMenuOpen(false);
    forDec(id);
    setFlag(!flag);
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={3}>
        <Typography variant="subtitle1" id="day"
         sx={{
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "4px",
            textAlign: "center", // Center aligns the text horizontally
          }}>
          {day}
          <br />
       
          {date} 
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center">
          <Switch
            color="success"
            size="medium"
            checked={isSwitchOn}
            onChange={handleSwitchChange}
          />
          <Typography variant="body2" id="switch" >
          
            {isSwitchOn ? "Open" : "Closed"}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box display="flex" gap={2} alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            border="1px solid #ccc"
            borderRadius="4px"
            sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                margin:"2px" 
              }}
           
          >
            <Typography variant="body2" id="swtch"  width="135px" sx={{textAlign:"center"}}
           >
              {startTime}
            </Typography>
            <IconButton className="no-underline">
              <Box display="flex" flexDirection="column" alignItems="center">
                <ExpandLessIcon onClick={() => handleTimeChange(true, 1)} />
                <ExpandMoreIcon onClick={() => handleTimeChange(true, -1)} />
              </Box>
            </IconButton>
          </Box>
          <Typography variant="body2" id="swtch">
            To
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            borderRadius="4px"
            sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
          
          >
            <Typography variant="body2" id="swtch"  width="135px"  sx={{textAlign:"center"}}
             >
              {endTime}
            </Typography>
            <IconButton className="no-underline">
              <Box display="flex" flexDirection="column" alignItems="center">
                <ExpandLessIcon onClick={() => handleTimeChange(false, 1)} />
                <ExpandMoreIcon onClick={() => handleTimeChange(false, -1)} />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
  <Box display="flex" alignItems="center" justifyContent="flex-end">
    {flag ? (
      <RemoveCircle
        onClick={() => forDec(id)}
        color="error"
        cursor="pointer"
        sx={{textAlign:"center"}}
      />
    ) : (
      <AddCircle onClick={() => getId(id)} cursor="pointer"  sx={{textAlign:"center"}}/>
    )}
    <IconButton className="menu-icon" onClick={handleMenuOpen}>
      <MoreVert />
    </IconButton>
    <Menu
      className="menu-item"
      anchorEl={isMenuOpen ? document.getElementById(id) : null}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleRemoveClick}>Remove</MenuItem>
    </Menu>
  </Box>
</Grid>
      {arr2.map((el, index) => (
        <Grid item xs={12} key={el}>
          <Box display="flex" gap={2} alignItems="center">
            <Box display="flex" gap={2} alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                border="1px solid #ccc"
                borderRadius="4px"
               
              >
                <Typography variant="body2" id="swtch">
                  {startTime}
                </Typography>
                <IconButton className="no-underline">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <ExpandLessIcon
                      onClick={() => handleTimeChange(true, 1, index)}
                    />
                    <ExpandMoreIcon
                      onClick={() => handleTimeChange(true, -1, index)}
                    />
                  </Box>
                </IconButton>
              </Box>
              <Typography variant="body2" id="swtch">
                To
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                border="1px solid #ccc"
                borderRadius="4px"
                padding="4px"
              >
                <Typography variant="body2" id="swtch">
                  {endTime}
                </Typography>
                <IconButton className="no-underline">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <ExpandLessIcon
                      onClick={() => handleTimeChange(false, 1, index)}
                    />
                    <ExpandMoreIcon
                      onClick={() => handleTimeChange(false, -1, index)}
                    />
                  </Box>
                </IconButton>
              </Box>
            </Box>
            {flag && (
              <RemoveCircle
                onClick={() => forDec(id)}
                color="error"
                cursor="pointer"
              />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default DayTime;
