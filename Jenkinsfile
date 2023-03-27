<<<<<<< HEAD

pipeline {
    agent any
=======
pipeline {
    agent any
    environment{
        IMAGE_NAME= 'pm310/react_SGP-app:1.0'
    }
>>>>>>> f7563d4 (Update jenkinsfile)

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
<<<<<<< HEAD
                    echo "building the react application"
                    

                    
                    
=======
                    echo "building the spring application"
                    sh 'npm run build'
>>>>>>> f7563d4 (Update jenkinsfile)
                }
            }
        }
        stage("build image") {
            steps {
                script {
<<<<<<< HEAD
                    echo "building the docker image and restart container..."
                    //gv.buildImage()
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-pm310', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]){
                        sh 'docker build -t pm310/react-app:ra-2.0 .'
                        sh 'docker login -u $USERNAME -p $PASSWORD'
                        sh 'docker push pm310/react-app:ra-2.0'
=======
                    echo "building the docker image and push to docker hub..."
                    //gv.buildImage()
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-pm310', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]){
                        sh 'docker build -t ${IMAGE_NAME} .'
                        sh 'docker login -u $USERNAME -p $PASSWORD'
                        sh 'docker push ${IMAGE_NAME}'
>>>>>>> f7563d4 (Update jenkinsfile)
                    }
                }
            }
        }
        stage("deploy") {
            steps {
                script {
<<<<<<< HEAD
                    echo "deploying the application on ec2"
                    //gv.deployApp()
                   
                    def dockerCmd="docker run -p 3000:3000 --name ec2-react -d pm310/react-app:ra-2.0"
                    def dockerStop="docker stop ec2-react"
                    def dockerDelete="docker rm ec2-react"
                    sshagent(['ec2-server-key']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerStop}"
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerDelete}"
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerCmd}"
                        
                         
=======
                    echo "deploying the spring application on ec2"
                    //gv.deployApp()
                    def dockerStop="docker stop ec2-spring"
                    def dockerDelete="docker rm ec2-spring"
                    def dockerCreate="docker run -p 443:443 --name ec2-spring ${IMAGE_NAME}"

                    sshagent(['ec2-ubuntu-key']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerStop}"
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerDelete}"
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@54.95.222.132 ${dockerCreate}"

>>>>>>> f7563d4 (Update jenkinsfile)
                    }
                }
            }
        }
<<<<<<< HEAD
    }   
}
=======
    }
}
>>>>>>> f7563d4 (Update jenkinsfile)
