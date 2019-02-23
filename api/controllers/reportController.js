'use strict';

const mongoose = require('mongoose')
const Report = mongoose.model('Reports')
const Crawler = require('../../crawler/reportCrawler')

exports.crawl2 = function() {
  const crawler = new Crawler()
  crawler.crawl(function(html) {
  	 var newReport = new Report(html);
  	 // res.send(html)
	  newReport.save(function(err, report) {
	    if (err)
	      console.log(err)
	    console.log(newReport)
	  });
  })
}

exports.crawl = function(req, res) {
  const crawler = new Crawler()
  crawler.crawl(function(html) {
  	 var newReport = new Report(html);
	  newReport.save(function(err, report) {
	    if (err)
	      res.send(err);
	    res.json(html);
	  });
  })
};
exports.current = function(req, res) {
  Report.findOne({}, {}, { sort: { 'Created_date' : -1 } }, function(err, report) {
	  
	  if (err)
	      res.send(err);
	    const packedReport = {}
	    packedReport.updateTime = report.updateTime
	    packedReport.currentTemp = report.currentTemp
	    packedReport.currentWindDirection = report.currentWindDirection
	    packedReport.currentWindSpeed = report.currentWindSpeed
	    packedReport.baseCondition = report.baseCondition
	    packedReport.cloudCover = report.cloudCover
	    packedReport.pastSnow24 = report.pastSnow24

	    res.json(packedReport);
	  });
};

exports.showAll = function(req, res) {  
  Report.find({}, function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};

exports.create = function(req, res) {
  const newReport = new Report(req.body);
  newReport.save(function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};

exports.show = function(req, res) {
  Report.findById(req.params.reportId, function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};

exports.update = function(req, res) {
  Report.findOneAndUpdate({_id: req.params.reportId}, req.body, {new: true}, function(err, report) {
    if (err)
      res.send(err);
    res.json(report);
  });
};

exports.delete = function(req, res) {
  Report.remove({
    _id: req.params.reportId
  }, function(err, report) {
    if (err)
      res.send(err);
    res.json({ message: 'Report successfully deleted' });
  });
};
