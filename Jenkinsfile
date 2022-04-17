pipeline{
    agent any
  
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
                sh 'ng build'
            }
        }
        stage('Testing'){
            steps{
                sh 'ng test --sourceMap=false --browsers=ChromeHeadless --watch=false --progress=false'
            }
        }
        stage('Docker Build'){
            steps{
                sh 'docker build . -t sanchitdwivedi/calculator:latest'
            }
        }
        stage('DockerHub Push'){
            steps{
                withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerHubPassword')]) {
                    sh "docker login -u sanchitdwivedi -p ${dockerHubPassword}"
                }
                sh 'docker push sanchitdwivedi/calculator:latest'
            }
        }
        stage('Docker deploy'){
            steps{
                ansiblePlaybook becomeUser: null, colorized: true, disableHostKeyChecking: true, installation: 'ansible', inventory: 'inventory', playbook: 'deploy-image.yml', sudoUser: null
            }
        }
    }
}
