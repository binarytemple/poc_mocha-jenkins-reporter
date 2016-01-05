jenkins:
	@JUNIT_REPORT_PATH=reports/report.xml JUNIT_REPORT_STACK=1 ./node_modules/mocha/bin/mocha --recursive --reporter mocha-jenkins-reporter --compilers=js:babel/register ./specs || true

.PHONY: jenkins
