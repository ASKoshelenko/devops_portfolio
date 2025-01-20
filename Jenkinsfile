pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'dreamymonkey/devopsdive'
        KUBERNETES_CONFIG = credentials('kubernetes-config')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ASKoshelenko/devops_portfolio.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://your-registry', 'registry-credentials') {
                        docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push()
                        docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh """
                        export KUBECONFIG=\${KUBERNETES_CONFIG}
                        kubectl apply -f k8s/deployment.yaml
                        kubectl apply -f k8s/service.yaml
                        kubectl apply -f k8s/ingress.yaml
                        kubectl set image deployment/devopsdive devopsdive=${DOCKER_IMAGE}:${BUILD_NUMBER}
                    """
                }
            }
        }
    }
}
