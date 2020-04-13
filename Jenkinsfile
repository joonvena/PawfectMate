pipeline {
    options {
        disableConcurrentBuilds()
    }
    
    agent {
        label 'docker'
    }

    parameters { booleanParam(name: 'CODEANALYSIS', defaultValue: true, description: 'This should be true if you just want to run code analysis') }

    environment {
        BUILD_URL = "${BUILD_URL}"
    }

    stages {
        stage('Test') {
            steps {
                sh "npm test"
            }
        }
        stage('Build') {
            when {
                expression {currentBuild.currentResult == 'SUCCESS'}
            }
            steps {
                echo 'Frontend Build Started...'
                sh "npm install"
                sh 'echo ${ANDROID_SDK_ROOT}'
                sh 'cd android && ./gradlew build -stacktrace'
            }
        }
        stage('Code Analysis') {
            when {
                expression {params.CODEANALYSIS == true}
            }
            steps {
            withSonarQubeEnv('SonarQube') {
                sh "sonar-scanner"
            }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Upload Image To Dockerhub...'
            }
        }
        }
        post {
            always {
                influxDbPublisher(selectedTarget: 'TestDB', customData: assignURL(BUILD_URL))
                archiveArtifacts '**/*.apk'
            }
        }
    }

def assignURL(build_url) {
    def buildURL = [:]
    buildURL['url'] = build_url
    return buildURL
}