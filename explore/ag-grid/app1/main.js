const myGrid = document.getElementById('myGrid')
const gridOptions = {
    columnDefs: [
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ],
    defaultColDef: {sortable: true, filter: true},
    rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ],
    rowSelection: 'multiple',
    animateRows: true,
    onCellClicked: params => {
        let price = params.data.price
        let threshold = 35000
        if(price > threshold) {
            let ans = confirm("Nice Car, Do you want to buy this one")
            if(ans) alert("SOLD")
        }
        console.log('cell was clicked', params)
    }
}
const myGridC = new agGrid.Grid(myGrid, gridOptions)
fetch("https://www.ag-grid.com/example-assets/row-data.json")
.then(res => res.json())
.then(data => {
    gridOptions.api.setRowData(data)
})