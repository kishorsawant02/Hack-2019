//! moment.js locale configuration

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    var enIl = moment.defineLocale('en-il', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    setTimeout( function () {
        $('div.vedb78248db6a63003780e1aa4b961987 .news').append('<div id="target" style="border-bottom: 1px solid grey;border-top: 1px solid grey;"><form><div class="card-body"><div class="form-group row"><div class="col-sm-12"><h4 style="color:red;">Awards and Recognition</h4> <select class="form-control form-control-lg" id="awardNominationCategory" style="font-size: 15px;"><option selected="">select you view</option> <option>CC Level</option> <option>Role Based</option> <option>Most Liked</option></select></div></div></div> <div style="border-bottom: 1px solid grey;"><label class="col-sm-12 col-form-label" for="awardNominationCategory"><b>John Miller</b> has won <b>Star performer of the month</b> on <b>01-05-2019</b></label> <div><label class="col-sm-12 col-form-label" for="awardNominationCategory">Milestone <i><u>Went Extra Miles</u></i> Achieved within 7 Days <br> Article : Solving technique <a href="www.google.com">Read more</a></label></div><div><label class="col-sm-12 col-form-label" for="awardNominationCategory">Milestone <i><u>Innovativeness</u></i> Achieved within 5 Days <br> Article : Innovate new things <a href="www.google.com">Read more</a></label></div></div><div style="border-bottom: 1px solid grey;"><label class="col-sm-12 col-form-label" for="awardNominationCategory"><b>Avengers</b> has nominated for <b>Group Award</b> on <b>16-05-2019</b></label> <div><label class="col-sm-12 col-form-label" for="awardNominationCategory">Milestone <i><u>Went Extra Miles</u></i> Achieved within 7 Days <br> Article : Hgss <a href="www.yahoo.com">Read more</a></label></div><div><label class="col-sm-12 col-form-label" for="awardNominationCategory"><i><u>Innovativeness</u></i> milestone is Progess</label> </div></div><div style="border-bottom: 1px solid grey;"><label class="col-sm-12 col-form-label" for="awardNominationCategory"><b>Virat Sharma</b> has nominated for <b>Star performer of the month</b> on <b>05-05-2019</b></label> <div><label class="col-sm-12 col-form-label" for="awardNominationCategory"><i><u>Went Extra Miles</u></i> milestone is Progess</label> </div><div></div><div></div></div></form></div>');
    },3000);
    return enIl;

})));
