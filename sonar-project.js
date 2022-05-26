const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://13.70.134.118:9000',
       options : {
       'sonar.sources': '.',
       'sonar.login': 'e895594452295a935aa60d44fb464ce744077c4d',
       'sonar.inclusions' : 'src/**' // Entry point of your code
       }
     }, () => {});

