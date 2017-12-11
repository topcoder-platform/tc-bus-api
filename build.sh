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

