'use strict';
const lighthouse = require('lighthouse');

module.exports = url => {
    const getTotalScore = aggregation => {
        const totalScore = aggregation.score.reduce((total, s) => {
            return total + s.overall;
        }, 0) / aggregation.score.length;

        return Math.round(totalScore * 100);
    };

    return lighthouse(url,  { mobile: true, loadPage: true })
    .then(data => {
        const agg = data.aggregations.find(a => a.name === 'Progressive Web App');
        const totalScore = getTotalScore(agg);
        return totalScore > 85; // more or less.  this is debatable. :)
    });
};
