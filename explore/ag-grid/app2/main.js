const myGrid = document.getElementById('myGrid')
// const columnDefs = [
//     {field: 'name'},
//     {field: 'age'},
//     {field: 'class'}
// ]
const columnDefs = [
    {
        field: "make", 
        checkboxSelection: true        
    },
    { field: "model" },
    { field: "price" }
]
const rowData = [
    { name: 'Arif1', age: 10, class: 2 },
    { name: 'Arif2', age: 11, class: 3 },
    { name: 'Arif3', age: 12, class: 2 }
]
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: { sortable: true, filter: true },
    rowSelection: 'multiple',
    animateRows: true,

    onCellClicked: function (params) {
        console.log(params.colDef.field, params.data)
    },
    getRowHeight: (params) => 25
}
new agGrid.Grid(myGrid, gridOptions)

fetch("https://www.ag-grid.com/example-assets/row-data.json")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        gridOptions.api.setRowData(data)
    })

let deselect = function () {
    gridOptions.api.deselectAll()
}