import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
// import downArrow from '../../../../images/drop-bg.png';
// import CommonDataTable from '../../components/CommonDataTable';
// import { handleTableColumnNames } from "../../utils/commonUtils";
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider as MuiThemeProvider,createTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/TableRow';
import Typography from '@mui/material/TableRow';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import {
//     MuiThemeProvider,
// } from "@material-ui/core/styles";
const getMuiTheme = () =>
  createTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "",
          borderRadius: "50px",
          marginBottom: "50px",
         // textAlign: 'left',
        },
        paper: {
          boxShadow: "none",
          position: 'relative',
          top: '35px',
          left:'20px',
          borderTop: '2px solid #000000',
          borderBottom: '0px solid #000000',
          borderRadius: '0px',
          textAlign: 'left',
          border: "1px solid #D8DADA",
          marginBottom:'50px',
          marginLeft:'6px'
        },
      },
      MUIDataTableHeadCell: {
        root: {
          textAlign: 'left',
        }
      },
      MUIDataTableFilter: {
        root: {
          width: '250px',
          height: '385px',
        }
      },
      MuiInput: {
        // root: {
        //   width: '250px',
        // }
      },
      MuiMenu: {
        // paper: {
        //   height: '250px'
        // }
      },
      MuiTableCell: {
        head: {
          borderTop: '0px solid #000000',
          borderBottom: '2px solid #000000',
          textAlign: 'left',
          zIndex: '9 !important'
    
        }
      },
      MUIDataTableBodyCell: {
        root: {
          textAlign: 'left',
          fontSize: '14px !important',
          lineHeight: '18px  !important',
          fontWeight: 'normal  !important',
          fontFamily: 'Verizon-NHG-eDS !important',
          letterSpacing: ' 0px',
          color: '#000000',
          opacity: 1,
          height: '9px',
          paddingRight:'60px',
          whiteSpace: 'nowrap'
        }
      },
      MUIDataTableHeadCell: {
        root: {
          borderTop: '2px solid #000000 !important',
          borderBottom: '3px solid #000000 !important',
          textAlign: 'left',
        }
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          borderTop: '2px solid #000000 !important',
          borderBottom: '2px solid #000000 !important',
          color: '#000000 !important',
          fontSize: '16px !important',
          lineHeight: '18px !important',
          fontWeight: 'bold  !important',
          fontFamily: 'Verizon-NHG-eDS !important',
          textAlign: 'left',
          zIndex: '9 !important'
        }
      },
      MuiButton: {
        label: {
          // color: '#000000 !important',
          fontSize: '16px !important',
          lineHeight: '18px !important',
          fontWeight: 'bold  !important',
          fontFamily: 'Verizon-NHG-eDS !important',
        }
      },
      MUIDataTableHeadCell: {
        contentWrapper: {
          // justifyContent: 'center',
          textAlign: 'left',
        }
      },
      MUIDataTableToolbarSelect: {
        root: {
          zIndex: 20,
        }
      },
      MUIDataTableToolbar: {
        actions: {
          flex: 'none !impoertant',
          textAlign: 'right',
          display: 'flex',
        },
        titleText: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#000000',
          fontFamily: 'Verizon-NHG-eDS !important',
        }
      },
      MUIDataTableFilter: {
        reset: {
          display: 'flex',
        }, resetLink: {
          bottom: '5px',
          marginLeft: '0px !important',
          fontFamily: 'Verizon-NHG-eDS !important',
        }, title: {
          fontFamily: 'Verizon-NHG-eDS !important',
          fontWeight: 'bold',
        }
      },
    },

  });

const contentTblOptions = {
    download: false,
    print: false,
    search: false,
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRows: 'none',
    sort: false,
    responsive: "standard",
    rowsPerPage: 5,
    rowsPerPageOptions: [],
    rowHover: true,
    filter: false,
    pagination: false,
    //onRowClick: handleRowClick,
    setRowProps: (row, index) => {
      return {
        style: {
         // backgroundColor: index === selectedContentsIndex ? '#F6F6F6' : "#ffffff", cursor: 'pointer'
        },
      }
    },
  };
export default function AccessPointTile(props) {
console.log(props.projectData)
    const groupColumnList  = [
        {
         name: "projectId",
         label: "  ",
         colSpan :2,
         align:'center'
        
        },
        {
         name: "devEnv",
         label: "Dev",
         colSpan :2,
         align:'center'
        },
        {
            name: "testEnv",
            label: "Test",
            colSpan :2,
            align:'center'
           
           },
           
           {
            name: "prodEnv",
            label: "Prod",
            colSpan :2,
            align:'center'
           
           }
       ];
       const databasesList = [
        {
         name: "projectId",
         label: "  ",
         colSpan :2,
         align:'center'
         
        },
        {
            name: "devRO",
            label: "RO",
            colSpan :1,
            align:'center'
            
           },{
            name: "devRW",
            label: "RW",
            colSpan :1,
            align:'center'
            
           },
           {
               name: "testRO",
               label: "RO",
               colSpan :1,
               align:'center'
               
              },{
               name: "testRW",
               label: "RW",
               colSpan :1,
               align:'center'
               
              },
              {
                  name: "prodRO",
                  label: "RO",
                  colSpan :1,
                  align:'center'
                  
                 },{
                  name: "prodRW",
                  label: "RW",
                  colSpan :1,
                  align:'center'
                  
                 }
       ];

       const columns = [
        {
         name: "projectName",
         label: "Project Space",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "accessPoint",
         label: "Access Point",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "accessPoint",
         label: " ",
         options: {
          filter: true,
          sort: false,
         }
        }
       ];

    const { title, tileOnClick, expanded, dbList, status } = props;
    const statusCase = status ? status.toUpperCase() : '';
    let statusClass = 'dpd-accesspoint ';
    statusClass += (statusCase === 'SUBSCRIBED') ? 'ap-subscribed' : (statusCase === 'PENDING') ? 'ap-pending' : '';
    return (
        <>
            {/* <Grid item xs={4}>
                <div className='selected-ap-db-wrapper'>
                    <div className="dpd-accesspoint-wrapper" onClick={tileOnClick}><span className={statusClass}>{title}</span>
                        <img src={downArrow} className={!expanded ? 'dpd-down-arrow' : 'dpd-down-arrow dpd-down-arrow-up'} /></div>
                    {expanded && <div className="selected-dbs-list">
                        {dbList.map((item, index) => {
                            return <div title={item.DatabaseName} className='dpd-selected-db' key={index}>{'- ' + item.DatabaseName}</div>
                        })}
                    </div>}
                </div>
            </Grid> */}
            {/* <CommonDataTable
                options={{...contentTblOptions }}
                data={[props.projectData]}
                columns={columns}
                getMuiTheme={getMuiTheme}
                //classes={classes}
                //isRowSelectable = {isRowSelectable}
             /> */}
              {/* <CommonDataTable
                options={{...contentTblOptions }}
                data={[props.projectData]}
                columns={databasesList}
                getMuiTheme={getMuiTheme}
                //classes={classes}
                //isRowSelectable = {isRowSelectable}
             /> */}
             <MUITable columns={databasesList} groupColumns={groupColumnList}  getMuiTheme={getMuiTheme}  rows={rowJson}/>
        </>

    )
}

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
  const [open, setOpen] = React.useState(false);

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
  const updatedData = [];
  data.forEach(element => {
    const databasesList = [];
    const index = updatedData.findIndex((data)=>data.projectSpace === element.ProjectSpace && data.persona === element.Persona);
    element.AccessPointList.forEach((accessPointData)=>{
      const index1 = databasesList.findIndex((data)=>data.accessPoint === accessPointData.AccessPoint && data.persona === element.Persona);
      if(index1>-1){

      }else {
        databasesList.push({
          accessPoint :accessPointData.AccessPoint,
          Database :accessPointData.AccessPoint,
        })
      }
    });
    if(index>-1){

    }else {
      
      updatedData.push({
        persona:element.Persona,
        projectSpace:element.ProjectSpace,
        accessPoints :[
          {
            project:element.Project,
            acccessPointList:"",
          }
        ]

      });
    }
  });
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