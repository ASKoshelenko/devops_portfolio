pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ASKoshelenko/devops_portfolio.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("my-react-app")
                }
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.withRun("my-react-app") {
                        // Деплой, может быть на сервер или в любое другое место
                    }
                }
            }
        }
    }
}
