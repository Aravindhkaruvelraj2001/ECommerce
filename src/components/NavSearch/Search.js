import { MenuItem, TextField, InputAdornment, Typography } from "@mui/material";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export default function NavSearch({ allOptions, type }) {
  return (
    <>
      <div className={type === "location" ? "navSearchlocation" : "navSearch"}>
        <div classname="navSearchInput">
          <TextField
            size="small"
            className="white"
            autoFocus
            placeholder={type === "location" ? "Enter Postal Code" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <CloseOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="navSearchList">
          {type === "location" ? (
            <Typography classname="Recommand">Saved Addresses</Typography>
          ) : (
            <Typography classname="Recommand">Recent Search</Typography>
          )}
          {allOptions.map((option, i) => (
            <MenuItem
              key={i}
              value={option}
              disableGutters={true}
              className="menuItemWrapper"
            >
              <div className="menuItem">
                {option}
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              </div>
            </MenuItem>
          ))}
        </div>
      </div>
    </>
  );
}
