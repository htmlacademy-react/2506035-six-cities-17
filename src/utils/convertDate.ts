type ReturnDateType = {
  time: string;
  displayDate: string;
}

const convertDate = (date: string): ReturnDateType => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();
  const monthFull = newDate.toLocaleString('en', { month: 'long' });

  return {
    time: `${year}-${month}-${day}`,
    displayDate: `${monthFull} ${year}`,
  };
};

export { convertDate };
