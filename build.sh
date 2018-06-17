#!/bin/bash
set -eo pipefail


# Builds Docker image of tc-bus-api application.
# This script expects a single argument: NODE_ENV, which must be either
# "development" or "production".

NODE_ENV=$1

ENV=$1
AWS_REGION=$(eval "echo \$${ENV}_AWS_REGION")
AWS_ACCESS_KEY_ID=$(eval "echo \$${ENV}_AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY=$(eval "echo \$${ENV}_AWS_SECRET_ACCESS_KEY")
AWS_ACCOUNT_ID=$(eval "echo \$${ENV}_AWS_ACCOUNT_ID")
AWS_REPOSITORY=$(eval "echo \$${ENV}_AWS_REPOSITORY")


# Builds Docker image of the app.
TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/tc-bus-api:$CIRCLE_SHA1

docker build -t $TAG .

# Copies "node_modules" from the created image, if necessary for caching.
docker create --name app $TAG

 if [ -d node_modules ]
 then
   # If "node_modules" directory already exists, we should compare
   # "package-lock.json" from the code and from the container to decide,
   # whether we need to re-cache, and thus to copy "node_modules" from
   # the Docker container.
   mv package-lock.json old-package-lock.json
   docker cp app:/opt/app/package-lock.json package-lock.json
   set +eo pipefail
   UPDATE_CACHE=$(cmp package-lock.json old-package-lock.json)
   set -eo pipefail
 else
    # If "node_modules" does not exist, then cache must be created.
   UPDATE_CACHE=1
 fi

 if [ "$UPDATE_CACHE" == 1 ]
 then
   docker cp app:/opt/app/node_modules .
 fi
