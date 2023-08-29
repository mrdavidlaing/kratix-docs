---
description: Create and configure a worker cluster, and install a Promise
title: Installing a Promise
id: installing-a-promise
slug: ../installing-a-promise
---

```mdx-code-block
import InstallErrorDiagram from "/img/docs/workshop/install-a-promise-install-error.svg"
import InstallSuccessDiagram from "/img/docs/workshop/install-a-promise-install-success.svg"
import ResourceRequestDiagram from "/img/docs/workshop/install-a-promise-request.svg"
import PipelineDiagram from "/img/docs/workshop/install-a-promise-pipeline.svg"
import PartialPromise from '../../_partials/_promise-architecture.md';
```

This is Part 2 of [a series](intro) illustrating how Kratix works. <br />
👈🏾&nbsp;&nbsp; Previous: [Install Kratix](installing-kratix) <br />
👉🏾&nbsp;&nbsp; Next: [Using a Compound Promise](multiple-promises)

<hr />

**in this tutorial, you will**

- [learn what Promises are](#promise-definition)
- [install your first Kratix Promise](#install-jenkins)
- [learn about configuring a worker cluster](#configure-worker)
- [request a Resource from a promised service](#request-jenkins)

Following the [Installing Kratix](installing-kratix) tutorial, you should now
have a deployment of both Kratix and MinIO running on your platform cluster.
Verify the current state of your installation:

```bash
kubectl --context $PLATFORM get deployments --namespace kratix-platform-system
```

The above command will give an output similar to:

```shell-session
NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE
kratix-platform-controller-manager   1/1     1            1           1h
minio                                1/1     1            1           1h
```

You should also have a State Store created and configured to point to the
`kratix` bucket on MinIO. Verify the `bucketstatestores`:

```bash
kubectl --context $PLATFORM get bucketstatestores.platform.kratix.io
```

The above command will give an output similar to:

```shell-session
NAME          AGE
minio-store   1h
```

:::tip

To check the configuration parameters, run:

```bash
kubectl --context $PLATFORM \
   describe bucketstatestore minio-store
```

:::

If your outputs do not align with the expected, please refer back to
[Installing Kratix](installing-kratix).

With that, you have all the pieces you need to install your first Promise!

## What's a Promise? {#promise-definition}

A Promise is the building block that Kratix provides to enable platform teams to
build their platforms incrementally. Promises are what allow the platform to
provide anything-as-a-Service and are composed of mainly three pieces:

- A set of Dependencies that needs to be installed on any worker cluster
  intending to run the Promise workload.
- An API exposing to the user of the platform the configuration options they
  have when requesting the service provided by the Promise.
- A series of Workflows are executed to fulfil the Promise and create
  the service.

<details>
   <summary>🤔 How's that different from Helm? Or Crossplane? Or... </summary>

Kratix positions itself as a framework for building platforms. Instead of
thinking _Kratix or X_, think **Kratix and X**. The team has written
extensively on how Kratix can work together with other Kubernetes tools.
Please check [The Value of
Kratix](https://kratix.io/docs/main/value-of-kratix#collaboration-with-other-tools)
for details.

</details>

### Promise Architecture

<PartialPromise />

As you go through installing and using the Promise, this tutorial will unpack and highlight
the parts of the Promise you are interacting with.

## Provide Jenkins-as-a-Service {#install-jenkins}

Kratix offers a variety of ready-to-use Promises in the [Kratix Marketplace](/marketplace). This tutorial will focus on making [Jenkins-as-a-Service](https://github.com/syntasso/kratix-marketplace/tree/main/jenkins) available, on demand, for platform users.

Install the Jenkins Promise:

```bash
kubectl --context $PLATFORM \
  apply \
  --filename https://raw.githubusercontent.com/syntasso/kratix-marketplace/main/jenkins/promise.yaml
```

And that's it! Promise installed!

Once the Promise is installed, the platform cluster is extended with a new API:
the Jenkins Promise API. This API teaches the platform cluster how to deal with
requests for Jenkins.

<details>
<summary>🤔 How's the Promise API determined?</summary>

The Promise API is fully defined by the platform team. They have the choice to
hide complexity, making it easy for users to request new services.
Alternatively, they can offer users greater flexibility, allowing them to
fine-tune lower-level details of the services or select the specific destination
where the workload should run.

</details>

```bash
kubectl --context $PLATFORM get crds | grep jenkins
```

The above command will give an output similar to:

```shell-session
jenkins.marketplace.kratix.io          2023-01-01T01:01:01Z
```

Kratix will also write a declaration of state to the State Store, informing any
worker destinations that they should install the Promise Dependencies. For the Jenkins
Promise, the Dependencies include the Jenkins Operator.

However, at this state, there are no worker clusters.

<details>
<summary>🤔 What's a Destination?</summary>

In Kratix terms, a _Destination_ is any system _converging_ on the state
declared by Kratix.

It's important to note that Kratix makes no assumptions about the Destinations
themselves. Although Destinations are often Kubernetes clusters, they may be
any system that can interpret whatever state is being declared as desired.

For example, you may write a Promise that tells Kratix to declare Terraform
plans as desired state, and a Destination may be a system applying these
plans as they are written to the State Store.

</details>

In fact, if you look closely, the Kratix controller will be complaining:

```yaml
kubectl --context $PLATFORM --namespace kratix-platform-system \
logs deployment/kratix-platform-controller-manager \
--container manager | grep "Reconciler error"
```

The above command will give an output similar to:

```shell-session
# output formatted for readability
ERROR Reconciler error {
    "Work": {"name":"jenkins","namespace":"kratix-platform-system"},
    "error": "no Destinations can be selected for scheduling"
}
```

This is Kratix telling you that it cannot find any Destinations that can get the
Jenkins Promise Dependencies installed.

<figure class="diagram">
  <InstallErrorDiagram className="large"/>
</figure>

You can also verify the registered clusters:

```bash
kubectl --context $PLATFORM get destinations.platform.kratix.io --all-namespaces
```

The above command will give an output similar to:

```shell-session
No resources found
```

So, to fix the error, you must create and register a new worker Destination.

## Set up a worker cluster {#configure-worker}

### Create the Kubernetes cluster

You will create a second Kubernetes cluster with `kind`, and this cluster will be
dedicated to running the Kratix workloads.

From the `kratix` directory, create a new cluster:

```bash
kind create cluster --name worker \
    --image kindest/node:v1.27.3 \
     --config config/samples/kind-worker-config.yaml
```

Similar to when you created the platform cluster, `kind` will update your local
configuration with the details to access the worker cluster. This command also
provides `kind` with a configuration file to facilitate accessing the deployed
services later on.

Once the creation completes, you can reach your worker cluster on the
`kind-worker` context.

Verify the cluster is ready:

```bash
export WORKER="kind-worker"
kubectl --context $WORKER cluster-info
```

The above command will give an output similar to:

```shell-session
Kubernetes control plane is running at https://127.0.0.1:YYYYY
CoreDNS is running at https://127.0.0.1:59160/api/v1/...

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

:::tip
Note that You have now saved a local environment variable `WORKER` to make it easier for the ongoing commands in this workshop
:::

Before registering the worker cluster with the platform, you will need to make it ready to
receive the workloads.

### Configure the cluster

Kratix schedules works by writing a state declaration (following Kubernetes
declare-and-converge pattern) to the designated State Store. When it comes to
reconciling the declared state, Kratix remains agnostic about the specific tool
to be used on the clusters. In this tutorial, you will utilise
[Flux](https://fluxcd.io/) on the worker, and configure it to reconcile the
state from the MinIO bucket.

To install and configure Flux, run the following script from the Kratix
repository:

```bash
./scripts/install-gitops --context $WORKER --path worker-cluster
```

The script above will:

- Install Flux
- Create a new Flux `Bucket` Source
- Create two Flux `Kustomizations`

The Flux `Kustomizations` are responsible for continuously reconciling with the state
declared in the `Source`.

<details>
<summary>Configuring the cluster: the manual way</summary>

If you prefer to configure the worker cluster manually, follow the steps below.

Install Flux on the worker cluster:

```bash
kubectl --context $WORKER \
  apply \
  --filename https://github.com/fluxcd/flux2/releases/download/v2.0.0-rc.3/install.yaml
```

Next, Flux must be configured to read from the MinIO bucket. For that, you will create a new
Flux [Bucket Source](https://fluxcd.io/flux/components/source/buckets/),
together with a Secret containing the bucket credentials.

:::caution

You may notice that the value of the Bucket `endpoint` on the document below is
set to `172.18.0.2:31337`.

In the previous tutorial you were able to access the server with in-cluster Kubernetes
DNS. Since Flux now need to access MinIO _across_ clusters you will need to use
an externally available endpoint.

`172.18.0.2` will often be the address of the platform cluster running on KinD.
You can confirm this address with the following command:

```bash
docker inspect platform-control-plane | grep '"IPAddress": "172' | awk -F '"' '{print $4}'
```

The above command will give an output similar to:

```shell-session
172.18.0.2
```

If the command above outputs a different IP, make sure to update the Bucket
configuration below accordingly.

The port part of the endpoint should always be 31337. Verify the NodePort of the
MinIO service in the platform cluster:

```bash
kubectl --context $PLATFORM get services minio --namespace kratix-platform-system
```

The above command will give an output similar to:

```shell-session
NAME    TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE
minio   NodePort   10.96.45.28   <none>        80:31337/TCP   1h
```

:::

Create the Flux Source Bucket (and Secret):

```yaml
cat <<EOF | kubectl --context $WORKER apply -f -
---
apiVersion: v1
kind: Secret
metadata:
  name: minio-credentials
  namespace: flux-system
type: Opaque
stringData:
  accesskey: minioadmin
  secretkey: minioadmin
---
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: Bucket
metadata:
  name: kratix-bucket
  namespace: flux-system
spec:
  interval: 10s
  provider: generic
  bucketName: kratix
  endpoint: 172.18.0.2:31337 # make sure to read the caution box above
  insecure: true
  secretRef:
    name: minio-credentials
EOF
```

The above command will give an output similar to:

```shell-session
secret/minio-credentials created
bucket.source.toolkit.fluxcd.io/kratix-bucket created
```

This tutorial will not dive into details of how to configure Flux Sources, but please read on their
[documentation](https://fluxcd.io/flux/components/source/) if you are curious.

Once the Bucket Source is created, validates Flux can reach the bucket:

```bash
kubectl --context $WORKER get buckets.source.toolkit.fluxcd.io --namespace flux-system
```

The above command will give an output similar to:

```shell-session
NAME            ENDPOINT           AGE     READY   STATUS
kratix-bucket   172.18.0.2:31337   1h      True    stored artifact: revision 'sha256:some-sha'
```

Next, you must tell Flux what is must do with this Source. Flux does continuous
delivery through the [Kustomize
Controller](https://fluxcd.io/flux/components/kustomize/). You can define a Flux
`Kustomization` that watches for a Source and reconciles on events.

Create the Flux Kustomizations:

```yaml
cat <<EOF | kubectl --context $WORKER apply --filename -
---
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: kratix-workload-dependencies
  namespace: flux-system
spec:
  interval: 8s
  prune: true
  sourceRef:
    kind: Bucket
    name: kratix-bucket
  path: ./worker-cluster/dependencies
---
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: kratix-workload-resources
  namespace: flux-system
spec:
  interval: 3s
  prune: true
  dependsOn:
  - name: kratix-workload-dependencies
  sourceRef:
    kind: Bucket
    name: kratix-bucket
  path: ./worker-cluster/resources
EOF
```

The above command will give an output similar to:

```shell-session
kustomization.kustomize.toolkit.fluxcd.io/kratix-workload-dependencies created
kustomization.kustomize.toolkit.fluxcd.io/kratix-workload-resources created
```

You will notice that there are two Kustomizations created. When scheduling
workloads, Kratix will separate the documents based on their GVK (Group, Version,
Kind):

- Custom Resource Definition (as defined
  [here](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#customresourcedefinition-v1-apiextensions-k8s-io))
  will be written to a specific `crds` path within the State Store.
- All other documents will be written to a specific `resources` path within the
  State Store.

Later when you register the cluster as a Destination, Kratix will use the cluster's `namespace`
and `name` to build the full path for that cluster within the State Store.

The first Kustomization above is for the CRDs, while the second is for the other
resources (note the `spec.path`). You can also note that the
`kratix-workload-resources` depends on the `kratix-workload-dependencies`. That's to
avoid failures when a resource documents uses a GVK being defined by a CRD
document.

For further details on the naming convention for the buckets and paths, check
the [documentation](../main/reference/statestore/intro). For more on
Kustomizations, check [the Flux docs
page](https://fluxcd.io/flux/components/kustomize/kustomization/)

</details>

Wait for Flux to start:

```bash
kubectl --context kind-worker get deployments --namespace flux-system --watch
```

The above command will give an output similar to:

```shell-session
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
helm-controller           1/1     1            1           10m
kustomize-controller      1/1     1            1           10m
notification-controller   1/1     1            1           10m
source-controller         1/1     1            1           10m
```

Once the Ready column reports `1/1`, press <kbd>Ctrl</kbd>+<kbd>C</kbd> to
exit the watch mode.

### Register the cluster with Kratix

With the worker cluster ready, you can now register it with Kratix. Note that the
order of operations here is not important; you could have registered the worker
first and then followed th steps above. Kratix would have scheduled to the State
Store path representing the worker cluster, and the state would eventually be
applied to a worker.

To register a cluster, create a `Destination` object on your platform cluster:

```yaml
cat <<EOF | kubectl --context $PLATFORM apply --filename -
apiVersion: platform.kratix.io/v1alpha1
kind: Destination
metadata:
   name: worker-cluster
   labels:
    environment: dev
spec:
   stateStoreRef:
      name: minio-store
      kind: BucketStateStore
EOF
```

The above command will give an output similar to:

```shell-session
cluster.platform.kratix.io/worker-cluster created
```

<details>
<summary>Destination in detail</summary>

The Kratix Destination resource is the representation of a system where workloads
can be scheduled to. Those system are usually other Kubernetes clusters.

The only required field is `spec.stateStoreRef`. It contains a reference to a State
Store present in the platform. In this example, it points to the `minio-store`
object you created on the previous step. The `spec.StateStoreRef.kind` determines
what is the kind of State Store being used by this Destination.

That means different Destinations can use different backing storage. For example,
you can have a set of Destinations backed by Git, while another set of Destinations can
be backed by a Bucket. Further configuration options pertaining paths are also
available both in the [State Store](../main/reference/statestore/intro) and the
[Destination object](../main/reference/destinations/intro).

</details>

With the Destinations registered, Kratix now have a place where it can run workloads.
That means that the Jenkins Promise Dependencies will now be scheduled to the
worker cluster. As previously mentioned, one of those Dependencies is the
Jenkins Operator.

<figure class="diagram">
  <InstallSuccessDiagram className="large"/>

  <figcaption>Installation of the Jenkins Promise</figcaption>
</figure>

Verify that the Jenkins Operator starts in the worker cluster:

```shell-session
kubectl --context $WORKER get deployments --watch
```

The above command will give an output similar to (it may take a couple of
minutes):

```shell-session
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
jenkins-operator   0/1     0            0           0s
jenkins-operator   0/1     0            0           0s
jenkins-operator   0/1     0            0           0s
jenkins-operator   0/1     1            0           0s
jenkins-operator   1/1     1            1           11s
```

Once the jenkins-operator deployment is ready, press <kbd>Ctrl</kbd>+<kbd>C</kbd>
to exit the watch mode.

If at this stage you create another Kubernetes cluster and follow similar steps
as the above, the Jenkins Promise Dependencies would also be installed on the
new worker cluster.

Later in this tutorial you will learn how to make certain Promises available in
certain clusters based on Promise configurations.

Great! The Jenkins Promise installation is now complete. It is time to switch roles for
a moment and become the developer requesting a new Jenkins Resource.

## Request a Resource from a Promised service {#request-jenkins}

As a user of the platform, you can find out what's available by checking the
installed Promises:

```bash
kubectl --context $PLATFORM get promises.platform.kratix.io
```

The above command will give an output similar to:

```shell-session
NAME      AGE
jenkins   1h
```

To request a Jenkins, all you need is to send a request for a new Jenkins Resource to the platform.

Create a Jenkins Resource:

```yaml
cat <<EOF | kubectl --context $PLATFORM apply --filename -
apiVersion: marketplace.kratix.io/v1alpha1
kind: jenkins
metadata:
  name: example
  namespace: default
spec:
  env: dev
EOF
```

The above command will give an output similar to:

```shell-session
jenkins.marketplace.kratix.io/example created
```

<details>
<summary>🤔 How do platform users interact with the Promise API?</summary>

In this example, users are interacting with the API using the `kubectl`
directly. However, how users of your platform will, it's up to you.

For example, you could have [Backstage](https://www.syntasso.io/post/kratix-and-backstage-a-perfect-pair)
on top of the API to facilitate the creation of services. Similarly,
you can employ [Compass](https://www.syntasso.io/post/kratix-and-compass) as a
driving force for your platform. Kratix can seamlessly integrate with various
systems such as GitOps Repositories, ticketing systems, or CI/CD tools.

</details>

When writing a request for a Resource, the platform user will have all the
configuration options exposed to them as part of the Promise API, as defined by
the platform team. The Jenkins Promise exposes a single
configuration option: `spec.env` (see the [Jenkins Promise
documentation](https://github.com/syntasso/kratix-marketplace/tree/main/jenkins)).
When set to `prod`, the resulting Resources will have backups enabled.

Once the request is created, Kratix will kick-off the imperative Workflow for the
Configure. The Jenkins Configure Workflow is a very basic Kratix Pipeline that transforms
the user's request into a Jenkins manifest.

However, Workflows can do much more. It is within the Workflow that you define
the business processes of your organisation, encapsulating the steps required to
deliver the promised service on-demand. Through Workflows, platform teams have the
flexibility to customise the Promise according to their specific business and
compliance requirements in either simple Kratix Pipelines or other popular pipeline technologies (e.g. Tekton).

<figure class="diagram">
  <PipelineDiagram className="large"/>
  <figcaption>An example multi-stage Kratix Pipeline</figcaption>
</figure>

For instance, in an organization where all container images must undergo
vulnerability scanning, you can include a Snyk image in your Promise. Similarly,
if you wish to receive alerts for specific events, you can include a Slack
image.

Furthermore, the stages of a Workflow and within a Kratix Pipeline are designed to be reusable. This allows platform teams to encode specific rules once and apply them consistently across all services within the platform.

Verify the Jenkins Workflow execution:

```bash
kubectl --context $PLATFORM get pods
```

The above command will give an output similar to:

```shell-session
NAME                               READY   STATUS      RESTARTS   AGE
configure-pipeline-jenkins-c726b   0/1     Completed   0          71s
```

Once the Workflow completes, Kratix will write the documents it outputted (i.e. the declaration of state) to the directory within the bucket that the worker cluster is watching. You will soon see the requested Jenkins resources starting up on the worker cluster.

<figure class="diagram">
  <ResourceRequestDiagram className="large"/>
</figure>

Verify Jenkins is booting up:

```bash
kubectl --context $WORKER get pods --watch
```

The above command will give an output similar to:

:::note

It will take a couple of minutes for Jenkins to start, and it may cycle through
a few states, including _Terminating_, before it eventually succeeds.

:::

```shell-session
NAME                                READY   STATUS    RESTARTS   AGE
//highlight-next-line
jenkins-dev-example                 0/1     Running   0          1m
jenkins-operator-7f58798d5c-sr825   1/1     Running   0          1h
```

When the `Ready` column reports `1/1` for `jenkins-dev-example`, your Jenkins
is fully deployed and ready to be accessed! Press <kbd>Ctrl</kbd>+<kbd>C</kbd> to
exit the watch mode.

Go to [http://localhost:30269](http://localhost:30269) and check it out!

:::caution

If you gave your Jenkins a different name, you may need port-forwarding to
access the running Jenkins:

```shell-session
kubectl --context $WORKER port-forward pod/jenkins-dev-<NAME> 8080:30269
```

:::

<details>
  <summary>🤔 Where are the Jenkins Credentials?</summary>

To login to Jenkins, you will need to fetch the credentials on the worker
cluster:

```bash
kubectl --context $WORKER get secrets --selector app=jenkins-operator -o go-template='{{range .items}}{{"username: "}}{{.data.user|base64decode}}{{"\n"}}{{"password: "}}{{.data.password|base64decode}}{{"\n"}}{{end}}'
```

</details>

## Clean up

The next steps of the tutorial will not require on this Jenkins Promise. Go ahead
and delete the resource to minimise the compute required to run this tutorial.

Delete the Jenkins Promise:

```bash
kubectl --context $PLATFORM delete promise jenkins
```

The above command will give an output similar to:

```shell-session
promise.platform.kratix.io "jenkins" deleted
```

The delete command will also cascade-delete all traces of Jenkins from the
platform, including the deployed Jenkins on the worker cluster.

Verify that the Jenkins Resource gets deleted:

```bash
kubectl --context $WORKER get pods
```

The above command will give an output similar to (it may take a few minutes):

```shell-session
No resources found in default namespace.
```

## Summary

To recap the steps you took:

1. ✅&nbsp;&nbsp;Installed the Jenkins Promise
1. ✅&nbsp;&nbsp;Created and configured a worker cluster
1. ✅&nbsp;&nbsp;Registered the worker cluster with the platform
1. ✅&nbsp;&nbsp;Requested a Jenkins Resource

## 🎉 &nbsp; Congratulations

✅&nbsp;&nbsp;Your Promise is now installed. <br />
👉🏾&nbsp;&nbsp;Next, you will learn more about [Compound
Promises](multiple-promises)