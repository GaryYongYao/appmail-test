export const getCalendarDates = (year, month) => {
  const today = new Date();
  const currentMonthStart = new Date(year, month, 1);
  const currentMonthEnd = new Date(year, month + 1, 0);

  const prevMonthEnd = new Date(year, month, 0);

  const daysInCurrentMonth = currentMonthEnd.getDate();
  const firstDayOfWeek = currentMonthStart.getDay(); // 0 (Sunday) to 6 (Saturday)
  const lastDayOfWeek = currentMonthEnd.getDay();

  // Fill previous month's days
  const prevMonth = [];
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    prevMonth.push({
      date: new Date(year, month - 1, prevMonthEnd.getDate() - i),
      isCurrentMonth: false,
      isToday: false,
    });
  }

  const currentMonth = [];
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    currentMonth.push({
      date: new Date(year, month, i),
      isCurrentMonth: true,
      isToday:
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === i,
    });
  }

  const nextMonth = [];
  for (let i = 1; i < 7 - lastDayOfWeek; i++) {
    nextMonth.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
      isToday: false,
    });
  }

  return [...prevMonth, ...currentMonth, ...nextMonth];
};

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
  return `${year}-${month}-${day}`;
};
