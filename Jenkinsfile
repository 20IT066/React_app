
pipeline {
    agent any

    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("build jar") {
            steps {
                script {
                    echo "building the application"

                    
                    
                }
            }
        }
        stage("build image") {
            steps {
                script {
                    echo "building the docker image and restart container..."
                    //gv.buildImage()
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-pm310', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]){
                        
                        sh 'docker build -t pm310/react-app:ra-2.0 .'
                        sh 'docker login -u $USERNAME -p $PASSWORD'
                        sh 'docker push pm310/demo-app:ra-2.0'
                    }
                }
            }
        }
        stage("deploy") {
            steps {
                script {
                    echo "deploying the application on ec2"
                    //gv.deployApp()
                    def dockerCmd="docker run -p 3000:3000 --name ec2-react -d pm310/react-app:ra-2.0"
                    sshagent(['ec2-server-key']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerCmd}"
                        
                         
                    }
                }
            }
        }
    }   
}
