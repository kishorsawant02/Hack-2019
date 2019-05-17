const express = require('express');
const router = express.Router();
const _ = require('lodash');
const dbConnector = require('../utils/connector');

const userAwards = require('../mock/userNomination');
const userAwardMilestones = require('../mock/userNominationMileStone');

const newsFeedNomination = require('../mock/newsFeedNomination');
const newsFeedNominationDetails = require('../mock/newsFeedNominationDetails');
router.get('/allUser', function(req, res) {
    res.status(200);
    _.each(newsFeedNomination, function (t) {
        var temp = _.filter(newsFeedNominationDetails, function (te) {
            return t.userAwardOptId == te.userAwardOptId;
        });
        t.miles = temp;
    });
    res.send({
        status: 'OK',
        data: newsFeedNomination
    });
});

router.post('/add', function(req, res) {
    res.status(200);
    res.send('Add User');
});

router.get('/byUserId/:id', function(req, res) {
    // UserAward mapping Table and userMilestone Mapping Table
    _.each(userAwards, function (userAward) {
        var temp = _.filter(userAwardMilestones, function (userAwardMilestone) {
            return userAwardMilestone.userAwardOptId = userAward.userAwardOptId;
        });
        userAward.milestone = temp;
    });
    res.status(200);
    res.send({
        status: 'OK',
        data: userAwards
    });
});

module.exports = router;