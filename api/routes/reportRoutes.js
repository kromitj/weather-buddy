'use strict';

module.exports = function(app) {
  const Reports = require('../controllers/reportController');

  // Reports Routes
  app.route('/reports')
    .get(Reports.showAll)
    .post(Reports.create)

  app.route('/reports/crawl')
  	.get(Reports.crawl)
  
  app.route('/reports/current')
    .get(Reports.current)


  app.route('/reports/:reportId')
    .get(Reports.show)
    .put(Reports.update)
    .delete(Reports.delete)
};