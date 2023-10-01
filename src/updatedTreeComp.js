import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider as MuiThemeProvider,createTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MUITable = (props)=>{

    const {columns,getMuiTheme,groupColumns} = props
    console.log(groupColumns);

    const rows = buildRowData(props.rows);
    

    return<MuiThemeProvider theme={getMuiTheme()}> <Paper sx={{ width: '100%' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          {groupColumns.map((column) => (
              <TableCell
                key={column.name}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                colSpan={column.colSpan}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.name}
                align={column.align}
                style={{  minWidth: column.minWidth }}
                colSpan={column.colSpan}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => {
              return (
                <ExpandableRow row={row}/>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    
  </Paper></MuiThemeProvider>;
}

function ExpandableRow(props) {
  const { row={} } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow >
        <TableCell colSpan={2}></TableCell>
        <TableCell colSpan={6}component="th" scope="row">
        {row.name}fsdf
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

      </TableRow>
      <TableRow>
      {/* <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}></TableCell> */}
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell component="th" scope="row"  align="center" colSpan={2} >/</TableCell>
                  
                    <TableCell align="center" colSpan={1} style={{  minWidth: '' }}>Date</TableCell>
                    <TableCell align="center" colSpan={1}>Customer</TableCell>
                    <TableCell align="center"  colSpan={1}>Amount</TableCell>
                    <TableCell align="center"  colSpan={1}>Total</TableCell>
                    <TableCell align="center" colSpan={1}>Total</TableCell>
                    <TableCell align="center" colSpan={1}>Total</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.history?.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell colSpan={2}/>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const buildRowData = (data)=>{
 return [...data];
}

const rowJson = [
  {
    "ProjectSpace": "CDH",
    "Persona": "Data Engineer",
    "Project": "vz-it-np-hukv-dev-cdwldo-0",
    "AccessPointList": [
      {
        "AccessPoint": "NonSec",
        "Dataset": [
          {
            "Environment": "Dev",
            "Asset": [
              {
                "Database": "vzw_cdh_prd_qestbls",
                "Access": "rw"
              },
              {
                "Database": "vzw_cdh_prd_tbls",
                "Access": "rw"
              },
              {
                "Database": "vzw_uip_prd_tbls",
                "Access": "rw"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "ProjectSpace": "CDH",
    "Persona": "Data Engineer",
    "Project": "vz-it-np-hukv-test-cdwldo-0",
    "AccessPointList": [
      {
        "AccessPoint": "NonSec",
        "Dataset": [
          {
            "Environment": "Test",
            "Asset": [
              {
                "Database": "vzw_cdh_prd_qestbls",
                "Access": "rw"
              },
              {
                "Database": "vzw_cdh_prd_tbls",
                "Access": "rw"
              },
              {
                "Database": "vzw_uip_prd_tbls",
                "Access": "rw"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "ProjectSpace": "CDH",
    "Persona": "Data Engineer",
    "Project": "vz-it-pr-hukv-cdwldo-0",
    "AccessPointList": [
      {
        "AccessPoint": "NonSec",
        "Dataset": [
          {
            "Environment": "Prod",
            "Asset": [
              {
                "Database": "vzw_cdh_prd_qestbls",
                "Access": "ro"
              },
              {
                "Database": "vzw_cdh_prd_tbls",
                "Access": "ro"
              },
              {
                "Database": "vzw_uip_prd_tbls",
                "Access": "ro"
              }
            ]
          }
        ]
      }
    ]
  }
]