
version=$(node -pe "require('./package.json').version")
repository=sbakhtoiarov
image=node-backend
container=angular-app
namespace=mixer
imageInRepo=${repository}/${image}:v${version}

echo "$imageInRepo"

docker build -t ${imageInRepo} .
docker push ${imageInRepo}

kubectl apply -f ./k8s/backend.yaml -n ${namespace}
