pipeline {
    agent { label 'build_java_11' }
    triggers {
        cron('0 * * * *')
    }
    stages {
        stage('SourceCode') {
            steps {
                git branch: 'main', url: 'https://github.com/arvindmahat/js-e2e-express-server.git'
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run pack'
            }
        }
        stage('Test results') {
            steps {
                sh 'npm test'
            }
        }
        stage('Sonar Analysis') {
            steps {
                sh 'npm install sonarqube-scanner --save-dev'
                sh 'npm run sonar'
            }
        }
        stage ('Artifactory configuration') {
            steps {
                
                rtNpmDeployer (
                    id: "NPM_DEPLOYER",
                    serverId: "Jfrog_Instance",
                    repo: "myecomm-npm-local"
                )
            }
        }

      

        stage ('Exec npm publish') {
            steps {
                rtNpmPublish (
                    tool: 'NodeJS',
                    deployerId: "NPM_DEPLOYER"
                )
            }
        }

        stage ('Publish build info') {
            steps {
                rtPublishBuildInfo (
                    serverId: "Jfrog_Instance"
                )
            }
        }
    }
}
              
