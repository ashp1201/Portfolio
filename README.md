[Developer's Machine]
      |
      | Push Code
      v
[GitHub Repository]
      |
      | Triggers CI/CD Workflow
      v
[GitHub Actions CI/CD Pipeline]
      | 
      | Builds Docker Image
      | Pushes to Docker Hub or GHCR
      v
[Docker Hub / GHCR]
      |
      | Pulls Docker Image
      v
[Deployment Server (e.g., AWS EC2)]
      |
      | Runs Docker Container
      v
[React Application (Live Website)]
      |
      | Accessible by End Users
      v
[Web Browser]
