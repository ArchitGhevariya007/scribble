import React from "react";
import { Box, TextField, Stack, Button } from "@mui/material";





export default function Todos() {
    const style = {
        addBox: {
            //   backgroundColor: "#2d3036",
            borderRadius: 0.3,
            padding: 1,
        },
        addTextField: {
            backgroundColor: "transparent",
            border: "2px #2d3036  solid",
            borderRadius: 1,
            input: {
                color: "rgb(232, 232, 232)"
            },
            "& fieldset": { border: 'none' },

        },
        todotask: {
            backgroundColor: "#2d3036",
            padding: 1,
            mt:2,
            borderRadius:2
        }
    };
    return (
        <>
            {/* Add Todo Text Box */}
            <Box sx={style.addBox}>
                <TextField
                    placeholder="Enter Task"
                    fullWidth
                    sx={style.addTextField}
                    InputProps={{
                        endAdornment: (
                            <Stack direction="row" spacing={1}>
                                <Button variant="contained" disableRipple>
                                    Add
                                </Button>
                            </Stack>
                        ),
                    }}
                />
            </Box>

            <Box sx={style.todotask }>
            
            </Box>
        </>
    );
}
