/* GET 'home' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Tully\'s',
      address: '24 N Tacoma Ave, Tacoma, WA 98403',
      rating: 4,
      facilities: ['Hot drinks','Pastries','Smoothies'],
      distance: '200m'
    },{
      name: 'Oppenheimer Cafe',
      address: '1500 N Warner St, Tacoma, WA 98416',
      rating: 3,
      facilities: ['Hot drinks','Food','Premium wifi'],
      distance: '100m'
    },{
      name: 'Pegasus Coffee Bar',
      address: '1218 3rd Ave # 103, Seattle, WA 98101',
      rating: 4,
      facilities: ['Hot Drinks','Food','Bar'],
      distance: '250m'
    }]
  });
};
/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Tully\'s',
        pageHeader: {
            title: 'Tully\'s'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
          name: 'Tully\'s',
          address: '24 N Tacoma Ave, Tacoma, WA 98403',
          rating: 4,
          facilities: ['Hot drinks','Pastries','Smooties'],
          coords: {lat: 47.2643622, lng: -122.4484117},
          openingTimes: [{
            days: 'Monday - Friday',
            opening: '5:00am',
            closing: '7:00pm',
            closed: false
          },{
            days: 'Saturday',
            opening: '6:00am',
            closing: '7:00pm',
            closed: false
          },{
            days: 'Sunday',
            opening: '6:30am',
            closing: '7:00pm',
            closed: false
          }],
          reviews: [{
            author: 'Tom Smith',
            rating: 4,
            timestamp: '6 October 2016',
            reviewText: 'The coffee tasted decent. Service was good.'
          }]
        }
    })
}

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};
