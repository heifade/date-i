type Iformat = "YYYY-MM-DD" | "YYYY-MM-DD HH:mm:ss" | "HH:mm:ss";

/**
 * 日期格式化
 * @param date 日期
 * @param format 格式化参数
 */
export function toString(date: Date, format: Iformat) {
  switch (format) {
    case "YYYY-MM-DD": {
      return toYYYYMMDD(date);
    }
    case "HH:mm:ss": {
      return toHHMMSS(date);
    }
    case "YYYY-MM-DD HH:mm:ss": {
      return `${toYYYYMMDD(date)} ${toHHMMSS(date)}`;
    }
  }
}

function leftPad2(num: number) {
  return num < 10 ? `0${num}` : `${num}`;
}

function toYYYYMMDD(date: Date) {
  return `${date.getFullYear()}-${leftPad2(date.getMonth() + 1)}-${leftPad2(
    date.getDate()
  )}`;
}

function toHHMMSS(date: Date) {
  return `${leftPad2(date.getHours())}:${leftPad2(
    date.getMinutes()
  )}:${leftPad2(date.getSeconds())}`;
}