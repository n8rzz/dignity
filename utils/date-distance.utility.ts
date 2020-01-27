import moment from 'moment';

const TODAY: moment.Moment = moment(new Date()).startOf('day');

function isWithinHours(hours: number, dateToCompare: moment.Moment): boolean {
    const now = moment(new Date());
    const difference = moment.duration(now.diff(dateToCompare));
    const differenceInHours = Math.round(difference.asHours());

    return differenceInHours < hours;
}

function isToday(dateToCompare: moment.Moment): boolean {
    return dateToCompare.clone().startOf('day').isSame(TODAY, 'd');
}

function isYesterday(dateToCompare: moment.Moment): boolean {
    const yesterday = TODAY.clone().subtract(1, 'days').startOf('day');

    return dateToCompare.isSame(yesterday, 'd');
}

function isWithinWeek(dateToCompare: moment.Moment): boolean {
    const oneWeekAgo = TODAY.clone().subtract(7, 'days').startOf('day');

    return dateToCompare.isAfter(oneWeekAgo);
}

const DateDistanceUtility = {
    isWithinHours,
    isToday,
    isYesterday,
    isWithinWeek,
};

export default DateDistanceUtility;
