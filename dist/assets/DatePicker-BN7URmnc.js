import { r as reactExports, j as jsxRuntimeExports, R as Popover, T as PopoverTrigger, B as Button, z as cn, q as Calendar, V as PopoverContent } from './index-BxW4NEkE.js';
import { C as Calendar$1 } from './calendar-D-7oRoOI.js';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from './select-DSKKSaz0.js';
import { t as toDate, q as startOfYear, o as format } from './format-CqEybc0i.js';

/**
 * The {@link eachMonthOfInterval} function options.
 */

/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */
function eachMonthOfInterval(interval, options) {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(1);

  let step = 1;

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setMonth(currentDate.getMonth() + step);
  }

  return reversed ? dates.reverse() : dates;
}

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

function DatePicker({ date, setDate, disabled = false }) {
  const [month, setMonth] = reactExports.useState(date ? date.getMonth() : (/* @__PURE__ */ new Date()).getMonth());
  const [year, setYear] = reactExports.useState(date ? date.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear());
  const years = reactExports.useMemo(() => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
  }, []);
  const months = reactExports.useMemo(() => {
    if (year) {
      return eachMonthOfInterval({
        start: startOfYear(new Date(year, 0, 1)),
        end: endOfYear(new Date(year, 0, 1))
      });
    }
    return [];
  }, [year]);
  reactExports.useEffect(() => {
    if (date) {
      setMonth(date.getMonth());
      setYear(date.getFullYear());
    }
  }, [date]);
  const handleYearChange = (selectedYear) => {
    const newYear = Number.parseInt(selectedYear, 10);
    setYear(newYear);
    if (date) {
      const newDate = new Date(date);
      newDate.setFullYear(newYear);
      setDate(newDate);
    }
  };
  const handleMonthChange = (selectedMonth) => {
    const newMonth = Number.parseInt(selectedMonth, 10);
    setMonth(newMonth);
    if (date) {
      const newDate = new Date(date);
      newDate.setMonth(newMonth);
      setDate(newDate);
    } else {
      setDate(new Date(year, newMonth, 1));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        className: cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground"),
        disabled,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mr-2 h-4 w-4" }),
          date ? format(date, "PPP") : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { className: "w-auto p-0", align: "start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: handleYearChange, value: year.toString(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Year" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: y.toString(), children: y }, y)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: handleMonthChange, value: month.toString(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Month" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: months.map((m, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: index.toString(), children: format(m, "MMMM") }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Calendar$1,
        {
          mode: "single",
          selected: date,
          onSelect: setDate,
          month: new Date(year, month),
          onMonthChange: (newMonth) => {
            setMonth(newMonth.getMonth());
            setYear(newMonth.getFullYear());
          },
          initialFocus: true
        }
      )
    ] })
  ] });
}

export { DatePicker as D };
