import moment from 'moment';

const DATE_FORMAT = 'MMMM YYYY';

export const formatDate = (date) => {
    return date ? moment(date).format(DATE_FORMAT) : 'Present';
}

export const formatDuration = (duration) => {
    const components = [];
    if (duration.years()) {
        components.push(`${duration.years()} ${duration.years() > 1 ? 'yrs' : 'yr'}`);
    }
    if (duration.months()) {
        components.push(`${duration.months()} ${duration.months() > 1 ? 'mos' : 'mo'}`);
    }
    return components.join(' ');
};

export const getDuration = (startDate, endDate) => {
    const startMoment = moment(startDate);
    const endMoment = endDate ? moment(endDate) : moment();
    const duration = moment.duration(endMoment.diff(startMoment));
    return formatDuration(duration);
}

export const getTotalDuration = (items) => {
    let totalDuration = moment.duration(0);
    items.forEach((item) => {
        const startMoment = moment(item.startDate);
        const endMoment = item.endDate ? moment(item.endDate) : moment();
        const duration = moment.duration(endMoment.diff(startMoment));
        totalDuration.add(duration);
    });
    return formatDuration(totalDuration);
}