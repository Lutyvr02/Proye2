   agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Ejecutar pruebas unitarias') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }

        stage('Ejecutar pruebas end-to-end') {
            steps {
                script {
                    sh 'npm run e2e'
                }
            }
        }

        stage('Construir la aplicación') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        
    }
