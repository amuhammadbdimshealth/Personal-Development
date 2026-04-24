const picker = datepicker('#my-datepicker', {
    onSelect: (picker, date) => {
        console.log('onSelect', { picker, date })
        // Do stuff when a date is selected (or unselected) on the calendar.
        // You have access to the datepicker instance for convenience.
    },
    onShow: picker => {
        console.log("onShow")
        picker.el.style['background-color'] = 'red'
    },
    onHide: picker => {
        console.log("onHide => callback")

    },
    onMonthChange: picker => {
        console.log('onMonthChange', {picker})
    },
    formatter: (input, date, instance) => {
        console.log('formatter', { input, date, instance })
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    },
    alwaysShow: false,
    dateSelected: new Date(2023, 0, 2),
    // Determine the month that the calendar starts off at.
    startDate: new Date(2024, 1, 2),
    showAllDates: true,
    // Disable every Tuesday on the calendar (for any given month).
    disabler: date => date.getDay() === 2
})

const my_navDate = new Date(2025,0,2)
const my_setDate = new Date(2030,0,2)
// Navigate to a new month AND trigger the `onMonthChange` callback.
picker.navigate(my_navDate, true)

// Selects my_setDate on the calendar *and* changes the calendar to that date.
picker.setDate(my_setDate, true)


// Selects November 1st 2099 but does *not* change the calendar.
picker.setDate(new Date(2099, 10, 1))


// Remove the selection simply by omitting any arguments.
// picker.setDate()

// Set a minimum selectable date of 
picker.setMin(new Date(2024, 0, 1))

const showButton = document.getElementById('showDatePicker');
showButton.addEventListener('click', e=> {
    e.stopPropagation()
    const isHidden = picker.calendarContainer.classList.contains('qs-hidden')
    picker[isHidden ? 'show' : 'hide']()    
})

