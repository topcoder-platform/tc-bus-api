# Topcoder Bus API Server

## Overview

A meta service, Topcoder Bus API server provides information about other services offered by Topcoder.

This server was generated initially by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project. We then copied over changes that existed in the older version over to version 5

## Requirements

1. Nodejs
2. DataDog
3. LightStep
4. SignalFX

## Configuration

The following Kafka configurations must be set in the environment variables:

- `KAFKA_URL` the Kafka url
- `KAFKA_CLIENT_CERT` the SSL client cert, can be string or file path
- `KAFKA_CLIENT_CERT_KEY` the SSL client cert key, can be string or file path

Example:

```bash
export KAFKA_URL="kafka+ssl://ec2-34-205-227-216.compute-1.amazonaws.com:9096,kafka+ssl://ec2-34-233-75-247.compute-1.amazonaws.com:9096,kafka+ssl://ec2-34-198-118-170.compute-1.amazonaws.com:9096,kafka+ssl://ec2-34-231-150-104.compute-1.amazonaws.com:9096,kafka+ssl://ec2-34-233-209-20.compute-1.amazonaws.com:9096,kafka+ssl://ec2-34-233-131-252.compute-1.amazonaws.com:9096,kafka+ssl://ec2-52-205-198-73.compute-1.amazonaws.com:9096,kafka+ssl://ec2-52-4-109-80.compute-1.amazonaws.com:9096"

export KAFKA_CLIENT_CERT="-----BEGIN CERTIFICATE-----
MIIDQzCCAiugAwIBAgIBADANBgkqhkiG9w0BAQsFADAyMTAwLgYDVQQDDCdjYS1j
YmJiNGVkZi1mNDFhLTRjNzMtYTg5OC01NDYyMjhkNmQyNDIwHhcNMTcwOTI3MDUw
MTIyWhcNMjcwOTI3MDUwMTIyWjAZMRcwFQYDVQQDDA51ODFvcjFsdTl2dTB1bzCC
ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKjkcV/BXD13Q09bRKohN/sK
iDMGFA2QZ57TGd7svX7iZQIk9HmXEPd5zCTHZ6nZBbcGDQ9P+zGlJIGZQuRVKLOn
ZPilaeUHRGrvCWGJZ6lVPNqInC1STHTfFJhcUNMG6qaD2ayBAw16f13vD1wGEWCm
/DRfvrjIp3JIetGdKctmdiGLYH7CQecRW88Czx9e3Vpl1nxGcNAPDDCj0nRwuPse
fVrg5onPX355om+Ct/teSeSONhio4dFL3fwl47CXFCReZFYOrBoLexfHXHumJ/Kp
TQW+k056hhoagykcpTf8uNjxNRalDPkw7ngt+1IzatbhOacea1/WUE1444eEak8C
AwEAAaN9MHswHQYDVR0OBBYEFJJzd6OZVLthBkhVZEW42CR8NJbtMFoGA1UdIwRT
MFGAFORcypfrQ0tfS5tyBdv89jfpZEMaoTakNDAyMTAwLgYDVQQDDCdjYS1jYmJi
NGVkZi1mNDFhLTRjNzMtYTg5OC01NDYyMjhkNmQyNDKCAQAwDQYJKoZIhvcNAQEL
BQADggEBALVAdOWXdnSqhucXHjpIf0lxlH6WhzhhlctLCreSf+/7y6pPVpWSVIEl
seVxOE5tsO2OzdtGgN2t7rr6bHuakL5rk9rH06r1jYAVQBR+T6SSLFbSVzl4Q5TO
b+T9/sHx5QtXSYgMh4FhZcBjrmDmWvpd42Y4MPfjLTqTP8RWHHib8E4/FYS9txk6
WoxrKcgnm/RmOcFWrjNjgm6JJprO1BSnbc2i/Rs5rxG2tRTTmXp6d7QCRa0bdhKz
yETgcStnaVvyh64zhls3xXBm06rvpu2wwo6QHcPeekvQwxQvb63oovD8b+pFJri+
6MBSQE4TtQenlVx7Ksy9UdNmU21xCYU=
-----END CERTIFICATE-----"

export KAFKA_CLIENT_CERT_KEY="-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAqORxX8FcPXdDT1tEqiE3+wqIMwYUDZBnntMZ3uy9fuJlAiT0
eZcQ93nMJMdnqdkFtwYND0/7MaUkgZlC5FUos6dk+KVp5QdEau8JYYlnqVU82oic
LVJMdN8UmFxQ0wbqpoPZrIEDDXp/Xe8PXAYRYKb8NF++uMinckh60Z0py2Z2IYtg
fsJB5xFbzwLPH17dWmXWfEZw0A8MMKPSdHC4+x59WuDmic9ffnmib4K3+15J5I42
GKjh0Uvd/CXjsJcUJF5kVg6sGgt7F8dce6Yn8qlNBb6TTnqGGhqDKRylN/y42PE1
FqUM+TDueC37UjNq1uE5px5rX9ZQTXjjh4RqTwIDAQABAoIBAEGCOid2DJ0awVTq
hbunntsUvrdryCNqu4ZzQzmgge/RSHSIePsgiUg0SeaKIb9Tmk/fXPlvgHNFJt/N
3pBKJ7tnVlbLckOPig4gIXdfoIGhujTZgBpkLZu3W3mtdPwlVqa3xZqPf+uedACv
VTnQcLUYkAKQkJ2D1s8RJfJgD3IA7nbZkzjVdUFdpl5m2Rijs3oLvVYVsAJBSsJK
AjGWobf9pgvXhUnBxmtWKEYsnrAwNF8j+uXo8uTXZj6KMWSmKMI5urykKw/LiSk3
u0IsweCE2cqtTgP3Os5b+au/SVNfFlNOLlic/XX3Z28AvupfuoNWx30VpUsqFBE8
LQEG9EECgYEA3Z6QJKcdMmETN6C0+nMAqdibqMv4su3dmfW3M3Hw4IH/pdsQ7aOa
tn2w01BxYaYfaPjN4cksmJnYLyAHp3D8nxopKtYnS+ky162Wya1ETowjd5+0X0Lq
tMGATPzqcysVt+OO+stRuTkLKXy0OANH1OCEhzlPtFEbYDmKt6srRAkCgYEAwxfe
Ky5eJB63sEkUg0QbXsDr5to1RMrvxjmWVF51LXHBSJl/UFde6l8fOHVtDbG08XGR
lIsQ4f4vsbNOiR7bim0opYPxcxWCD13GBP1u0eUbBPpU4ac0JT12uMYRg9bB7RMl
3eWJU3qmddeAOq0oCsC7aimEFih6QCr4TNcxQZcCgYBddrzFqHDIyWXoZO9OXGfg
OYjUNEmLdIOrpZQAr0Ht/QVK9kt6XTAnXHTRebCHhR7kD2IMoeIb7W3d2f1AYYc4
tji8ZxqlihC2IvBf16HiGnnuvjy8nCUN3Dl2vodF0NrU9bRcEplBq0wI0B3VLZUC
szlRKhtyKW6JM1tMQHT7uQKBgEOP+Hirzh5kJOj/5gKvi2r9FLUVzGzOessDFnSR
YbMjOfSSc+y21UAFQSKkR+f+KtOSqP/wSSB6jrnThtclwJHny7PGRc+9GxWHPBRu
T/qQhRLsPokHBp/+8SZ8MYSe0vnvL6Xw3+XxC8SzpMytOri+lijlx8CEtBGUz/iM
bZpxAoGAEnJFUEGCB1ta3RQpI5L4nH2Rex0Avv8rkXGK2T/t5z2h8Ujg4WW3J7DD
Jp8xItVz3sqz5aCg+EvcewSGZ18AC+9cbxrbI2I83jQDHw+DQmVUyR6rl5+r+S6O
69wdZ08Y/jYkltb5PbhPqs0Kfr86cUqBuKEptRtto6Wto3k/Za4=
-----END RSA PRIVATE KEY-----"
```

## Open Tracing Configuration Setup
Refer `config/default.js`, tracing object will contain all configuration relate to integrate open tracing.
1. dataDogEnabled, whether data dog tracing is enabled
2. lightStepEnabled, whether light step tracing is enabled
3. signalFXEnabled, whether singal fx tracing is enabled
4. dataDog, all related configuration to initialize data dog tracer, refer https://datadog.github.io/dd-trace-js/ for more information
5. lightStep, all related configuration to initialize light step tracer, refer https://github.com/lightstep/lightstep-tracer-javascript for more information
6. signalFX, all related configuration to initialize signal fx tracer, refer https://github.com/signalfx/signalfx-nodejs-tracing/blob/master/docs/API.md#advanced-configuration for more information

## Other Configurations

The other configurations can be changed in `config/default.js` or by setting environment variables.

- `LOG_LEVEL` the logging level, `error` or `debug`
- `PORT` the port on that app listens
- `API_VERSION` the api version
- `JWT_TOKEN_SECRET` the secret to sign JWT tokens
- `TC_EMAIL_URL` the email service URL (http://localhost:4001, if deployed locally)
- `TC_EMAIL_TOKEN` the email service authentication token (see tc-email README for details **link should be added later**)
- `TC_EMAIL_CACHE_PERIOD` the period to cache template placeholders from email service (60 min default)

## Setup

1. go to https://www.datadoghq.com/, register a free trial account. visited https://app.datadoghq.com/account/settings#agent to install and start Datadog agent. You would see a list of environment to be selected. You can select the environment match your local environment. Follow the step download and install the Datadog agent. You can got the api key from the command shown on that detail page. You need to enable APM and log on your Datadog agent. APM(refer https://docs.datadoghq.com/agent/apm/?tab=agent630) is enabled by default in Agent 6. Set apm_non_local_traffic: true in your main datadog.yaml configuration file if you are sending traces from a nonlocal environment (like a container).Log(refer https://docs.datadoghq.com/agent/logs/?tab=tailexistingfiles) collection requires the Datadog Agent v6.0+. Older versions of the Agent do not include the log collection interface.Collecting logs is disabled by default in the Datadog Agent. Enable log collection in the Agent’s main configuration file (datadog.yaml):
```
logs_enabled: true
```

2. go to https://go.lightstep.com/tracing.html, register a free trial account. Login the lightstep app, go to settings on the left tab, you would find the access token.

3. go to https://www.signalfx.com/, register a free trial account, login the web app and click integrations menu, follow info in `SignalFx SmartAgent` to install and start agent. On top right user avatar, choose `Organization Settings` and `Access Tokens` to get the API token. Note: integrate signalfx is out of scope currently.


## Deploying the server

To deploy the server locally, run:

```bash
npm install
npm start
```

To view the Swagger UI interface visit `http://localhost:3000/docs`

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
