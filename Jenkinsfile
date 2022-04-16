pipeline{
    agent any
    environment {
      DOCKER_VERSION = getVersion()
    }
    stages{
        stage('SCM'){
            steps{
                git branch: 'main', 
                credentialsId: 'token', url: 'https://github.com/sanchitdwivedi/SPE-MiniProject-Calculator.git'
            }
        }
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Docker Build'){
            steps{
                sh 'docker build . -t sanchitdwivedi/calculator:${DOCKER_VERSION}'
            }
        }
        stage('DockerHub Push'){
            steps{
                withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerHubPassword')]) {
                    sh "docker login -u sanchitdwivedi -p ${dockerHubPassword}"
                }
                sh 'docker push sanchitdwivedi/calculator:${DOCKER_VERSION}'
            }
        }
        stage('Docker deploy'){
            steps{
                ansiblePlaybook credentialsId: 'dev-server', disableHostKeyChecking: true, extras: '-e DOCKER_VERSION=${DOCKER_VERSION}', installation: 'ansible', inventory: 'dev.inv', playbook: 'playbook.yml'
            }
        }
    }
}

def getVersion(){
    def commitHash = sh returnStdout: true, script: 'git rev-parse --short HEAD'
    return commitHash
}
