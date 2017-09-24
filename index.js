'use strict';
const lighthouse = require('lighthouse');
module.exports = url => {
    const getTotalScore = aggregation => {
        const totalScore = aggregation.score.reduce((total, s) => total + s.overall, 0) / aggregation.score.length;
        return Math.round(totalScore * 100);
    };
    return lighthouse(url, {
        mobile: true,
        loadPage: true
    }).then(data => {
        const agg = data.aggregations.find(a => a.name === 'Progressive Web App');
        return getTotalScore(agg);
    });
}
// Origin -> https://github.com/paulirish/pwmetrics/commit/f71001ce3a9200015af07615e9834b222c4bc6d5#commitcomment-18754617
