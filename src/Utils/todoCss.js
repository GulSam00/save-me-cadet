import isToday from 'Utils/isToday';

const toDoCss = {
  color: function (props, checked) {
    if (!isToday(props.today, props.date) || checked) return 'gray';
    else return '';
  },

  lineThrough: function (checked) {
    if (checked) return 'line-through';
    else return '';
  },
};

export default toDoCss;
