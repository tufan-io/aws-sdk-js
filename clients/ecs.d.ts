import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ECS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ECS.Types.ClientConfiguration)
  config: Config & ECS.Types.ClientConfiguration;
  /**
   * Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the CreateCluster action.  When you call the CreateCluster API operation, Amazon ECS attempts to create the service-linked role for your account so that required resources in other AWS services can be managed on your behalf. However, if the IAM user that makes the call does not have permissions to create the service-linked role, it is not created. For more information, see Using Service-Linked Roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide. 
   */
  createCluster(params: ECS.Types.CreateClusterRequest, callback?: (err: AWSError, data: ECS.Types.CreateClusterResponse) => void): Request<ECS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the CreateCluster action.  When you call the CreateCluster API operation, Amazon ECS attempts to create the service-linked role for your account so that required resources in other AWS services can be managed on your behalf. However, if the IAM user that makes the call does not have permissions to create the service-linked role, it is not created. For more information, see Using Service-Linked Roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide. 
   */
  createCluster(callback?: (err: AWSError, data: ECS.Types.CreateClusterResponse) => void): Request<ECS.Types.CreateClusterResponse, AWSError>;
  /**
   * Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the desiredCount, Amazon ECS spawns another copy of the task in the specified cluster. To update an existing service, see UpdateService. In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind a load balancer. The load balancer distributes traffic across the tasks that are associated with the service. For more information, see Service Load Balancing in the Amazon Elastic Container Service Developer Guide. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that do use a load balancer are considered healthy if they're in the RUNNING state and the container instance that they're hosted on is reported as healthy by the load balancer. There are two service scheduler strategies available:    REPLICA - The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see Service Scheduler Concepts in the Amazon Elastic Container Service Developer Guide.    DAEMON - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see Service Scheduler Concepts in the Amazon Elastic Container Service Developer Guide.   You can optionally specify a deployment configuration for your service. The deployment is triggered by changing properties, such as the task definition or the desired count of a service, with an UpdateService operation. The default value for a replica service for minimumHealthyPercent is 100%. The default value for a daemon service for minimumHealthyPercent is 0%. If a service is using the ECS deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the RUNNING state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that do use a load balancer are considered healthy if they're in the RUNNING state and they're reported as healthy by the load balancer. The default value for minimum healthy percent is 100%. If a service is using the ECS deployment controller, the maximum percent parameter represents an upper limit on the number of tasks in a service that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%. If a service is using either the CODE_DEPLOY or EXTERNAL deployment controller types and tasks that use the EC2 launch type, the minimum healthy percent and maximum percent values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used, although they're currently visible when describing your service. When creating a service that uses the EXTERNAL deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the CreateTaskSet operation. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide. When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the placementStrategy parameter):   Sort the valid container instances, giving priority to instances that have the fewest number of running tasks for this service in their respective Availability Zone. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.    
   */
  createService(params: ECS.Types.CreateServiceRequest, callback?: (err: AWSError, data: ECS.Types.CreateServiceResponse) => void): Request<ECS.Types.CreateServiceResponse, AWSError>;
  /**
   * Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the desiredCount, Amazon ECS spawns another copy of the task in the specified cluster. To update an existing service, see UpdateService. In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind a load balancer. The load balancer distributes traffic across the tasks that are associated with the service. For more information, see Service Load Balancing in the Amazon Elastic Container Service Developer Guide. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that do use a load balancer are considered healthy if they're in the RUNNING state and the container instance that they're hosted on is reported as healthy by the load balancer. There are two service scheduler strategies available:    REPLICA - The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see Service Scheduler Concepts in the Amazon Elastic Container Service Developer Guide.    DAEMON - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see Service Scheduler Concepts in the Amazon Elastic Container Service Developer Guide.   You can optionally specify a deployment configuration for your service. The deployment is triggered by changing properties, such as the task definition or the desired count of a service, with an UpdateService operation. The default value for a replica service for minimumHealthyPercent is 100%. The default value for a daemon service for minimumHealthyPercent is 0%. If a service is using the ECS deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the RUNNING state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that do use a load balancer are considered healthy if they're in the RUNNING state and they're reported as healthy by the load balancer. The default value for minimum healthy percent is 100%. If a service is using the ECS deployment controller, the maximum percent parameter represents an upper limit on the number of tasks in a service that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%. If a service is using either the CODE_DEPLOY or EXTERNAL deployment controller types and tasks that use the EC2 launch type, the minimum healthy percent and maximum percent values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used, although they're currently visible when describing your service. When creating a service that uses the EXTERNAL deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the CreateTaskSet operation. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide. When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the placementStrategy parameter):   Sort the valid container instances, giving priority to instances that have the fewest number of running tasks for this service in their respective Availability Zone. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.    
   */
  createService(callback?: (err: AWSError, data: ECS.Types.CreateServiceResponse) => void): Request<ECS.Types.CreateServiceResponse, AWSError>;
  /**
   * Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  createTaskSet(params: ECS.Types.CreateTaskSetRequest, callback?: (err: AWSError, data: ECS.Types.CreateTaskSetResponse) => void): Request<ECS.Types.CreateTaskSetResponse, AWSError>;
  /**
   * Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  createTaskSet(callback?: (err: AWSError, data: ECS.Types.CreateTaskSetResponse) => void): Request<ECS.Types.CreateTaskSetResponse, AWSError>;
  /**
   * Disables an account setting for a specified IAM user, IAM role, or the root user for an account.
   */
  deleteAccountSetting(params: ECS.Types.DeleteAccountSettingRequest, callback?: (err: AWSError, data: ECS.Types.DeleteAccountSettingResponse) => void): Request<ECS.Types.DeleteAccountSettingResponse, AWSError>;
  /**
   * Disables an account setting for a specified IAM user, IAM role, or the root user for an account.
   */
  deleteAccountSetting(callback?: (err: AWSError, data: ECS.Types.DeleteAccountSettingResponse) => void): Request<ECS.Types.DeleteAccountSettingResponse, AWSError>;
  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   */
  deleteAttributes(params: ECS.Types.DeleteAttributesRequest, callback?: (err: AWSError, data: ECS.Types.DeleteAttributesResponse) => void): Request<ECS.Types.DeleteAttributesResponse, AWSError>;
  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   */
  deleteAttributes(callback?: (err: AWSError, data: ECS.Types.DeleteAttributesResponse) => void): Request<ECS.Types.DeleteAttributesResponse, AWSError>;
  /**
   * Deletes the specified cluster. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.
   */
  deleteCluster(params: ECS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: ECS.Types.DeleteClusterResponse) => void): Request<ECS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified cluster. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance.
   */
  deleteCluster(callback?: (err: AWSError, data: ECS.Types.DeleteClusterResponse) => void): Request<ECS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService.  When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in the ListServices API operation. After all tasks have transitioned to either STOPPING or STOPPED status, the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with the DescribeServices API operation. However, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices calls on those services return a ServiceNotFoundException error.   If you attempt to create a new service with the same name as an existing service in either ACTIVE or DRAINING status, you receive an error. 
   */
  deleteService(params: ECS.Types.DeleteServiceRequest, callback?: (err: AWSError, data: ECS.Types.DeleteServiceResponse) => void): Request<ECS.Types.DeleteServiceResponse, AWSError>;
  /**
   * Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService.  When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in the ListServices API operation. After all tasks have transitioned to either STOPPING or STOPPED status, the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with the DescribeServices API operation. However, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices calls on those services return a ServiceNotFoundException error.   If you attempt to create a new service with the same name as an existing service in either ACTIVE or DRAINING status, you receive an error. 
   */
  deleteService(callback?: (err: AWSError, data: ECS.Types.DeleteServiceResponse) => void): Request<ECS.Types.DeleteServiceResponse, AWSError>;
  /**
   * Deletes a specified task set within a service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  deleteTaskSet(params: ECS.Types.DeleteTaskSetRequest, callback?: (err: AWSError, data: ECS.Types.DeleteTaskSetResponse) => void): Request<ECS.Types.DeleteTaskSetResponse, AWSError>;
  /**
   * Deletes a specified task set within a service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  deleteTaskSet(callback?: (err: AWSError, data: ECS.Types.DeleteTaskSetResponse) => void): Request<ECS.Types.DeleteTaskSetResponse, AWSError>;
  /**
   * Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.  If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated). 
   */
  deregisterContainerInstance(params: ECS.Types.DeregisterContainerInstanceRequest, callback?: (err: AWSError, data: ECS.Types.DeregisterContainerInstanceResponse) => void): Request<ECS.Types.DeregisterContainerInstanceResponse, AWSError>;
  /**
   * Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.  If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated). 
   */
  deregisterContainerInstance(callback?: (err: AWSError, data: ECS.Types.DeregisterContainerInstanceResponse) => void): Request<ECS.Types.DeregisterContainerInstanceResponse, AWSError>;
  /**
   * Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. You cannot use an INACTIVE task definition to run new tasks or create new services, and you cannot update an existing service to reference an INACTIVE task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.  At this time, INACTIVE task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future, so you should not rely on INACTIVE task definitions persisting beyond the lifecycle of any associated tasks and services. 
   */
  deregisterTaskDefinition(params: ECS.Types.DeregisterTaskDefinitionRequest, callback?: (err: AWSError, data: ECS.Types.DeregisterTaskDefinitionResponse) => void): Request<ECS.Types.DeregisterTaskDefinitionResponse, AWSError>;
  /**
   * Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. You cannot use an INACTIVE task definition to run new tasks or create new services, and you cannot update an existing service to reference an INACTIVE task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.  At this time, INACTIVE task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future, so you should not rely on INACTIVE task definitions persisting beyond the lifecycle of any associated tasks and services. 
   */
  deregisterTaskDefinition(callback?: (err: AWSError, data: ECS.Types.DeregisterTaskDefinitionResponse) => void): Request<ECS.Types.DeregisterTaskDefinitionResponse, AWSError>;
  /**
   * Describes one or more of your clusters.
   */
  describeClusters(params: ECS.Types.DescribeClustersRequest, callback?: (err: AWSError, data: ECS.Types.DescribeClustersResponse) => void): Request<ECS.Types.DescribeClustersResponse, AWSError>;
  /**
   * Describes one or more of your clusters.
   */
  describeClusters(callback?: (err: AWSError, data: ECS.Types.DescribeClustersResponse) => void): Request<ECS.Types.DescribeClustersResponse, AWSError>;
  /**
   * Describes Amazon Elastic Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.
   */
  describeContainerInstances(params: ECS.Types.DescribeContainerInstancesRequest, callback?: (err: AWSError, data: ECS.Types.DescribeContainerInstancesResponse) => void): Request<ECS.Types.DescribeContainerInstancesResponse, AWSError>;
  /**
   * Describes Amazon Elastic Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.
   */
  describeContainerInstances(callback?: (err: AWSError, data: ECS.Types.DescribeContainerInstancesResponse) => void): Request<ECS.Types.DescribeContainerInstancesResponse, AWSError>;
  /**
   * Describes the specified services running in your cluster.
   */
  describeServices(params: ECS.Types.DescribeServicesRequest, callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Describes the specified services running in your cluster.
   */
  describeServices(callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.  You can only describe INACTIVE task definitions while an active task or service references them. 
   */
  describeTaskDefinition(params: ECS.Types.DescribeTaskDefinitionRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTaskDefinitionResponse) => void): Request<ECS.Types.DescribeTaskDefinitionResponse, AWSError>;
  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.  You can only describe INACTIVE task definitions while an active task or service references them. 
   */
  describeTaskDefinition(callback?: (err: AWSError, data: ECS.Types.DescribeTaskDefinitionResponse) => void): Request<ECS.Types.DescribeTaskDefinitionResponse, AWSError>;
  /**
   * Describes the task sets in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  describeTaskSets(params: ECS.Types.DescribeTaskSetsRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTaskSetsResponse) => void): Request<ECS.Types.DescribeTaskSetsResponse, AWSError>;
  /**
   * Describes the task sets in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  describeTaskSets(callback?: (err: AWSError, data: ECS.Types.DescribeTaskSetsResponse) => void): Request<ECS.Types.DescribeTaskSetsResponse, AWSError>;
  /**
   * Describes a specified task or tasks.
   */
  describeTasks(params: ECS.Types.DescribeTasksRequest, callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Describes a specified task or tasks.
   */
  describeTasks(callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Returns an endpoint for the Amazon ECS agent to poll for updates.
   */
  discoverPollEndpoint(params: ECS.Types.DiscoverPollEndpointRequest, callback?: (err: AWSError, data: ECS.Types.DiscoverPollEndpointResponse) => void): Request<ECS.Types.DiscoverPollEndpointResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Returns an endpoint for the Amazon ECS agent to poll for updates.
   */
  discoverPollEndpoint(callback?: (err: AWSError, data: ECS.Types.DiscoverPollEndpointResponse) => void): Request<ECS.Types.DiscoverPollEndpointResponse, AWSError>;
  /**
   * Lists the account settings for a specified principal.
   */
  listAccountSettings(params: ECS.Types.ListAccountSettingsRequest, callback?: (err: AWSError, data: ECS.Types.ListAccountSettingsResponse) => void): Request<ECS.Types.ListAccountSettingsResponse, AWSError>;
  /**
   * Lists the account settings for a specified principal.
   */
  listAccountSettings(callback?: (err: AWSError, data: ECS.Types.ListAccountSettingsResponse) => void): Request<ECS.Types.ListAccountSettingsResponse, AWSError>;
  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, ListAttributes returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (ecs.os-type=linux). 
   */
  listAttributes(params: ECS.Types.ListAttributesRequest, callback?: (err: AWSError, data: ECS.Types.ListAttributesResponse) => void): Request<ECS.Types.ListAttributesResponse, AWSError>;
  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, ListAttributes returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (ecs.os-type=linux). 
   */
  listAttributes(callback?: (err: AWSError, data: ECS.Types.ListAttributesResponse) => void): Request<ECS.Types.ListAttributesResponse, AWSError>;
  /**
   * Returns a list of existing clusters.
   */
  listClusters(params: ECS.Types.ListClustersRequest, callback?: (err: AWSError, data: ECS.Types.ListClustersResponse) => void): Request<ECS.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of existing clusters.
   */
  listClusters(callback?: (err: AWSError, data: ECS.Types.ListClustersResponse) => void): Request<ECS.Types.ListClustersResponse, AWSError>;
  /**
   * Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
   */
  listContainerInstances(params: ECS.Types.ListContainerInstancesRequest, callback?: (err: AWSError, data: ECS.Types.ListContainerInstancesResponse) => void): Request<ECS.Types.ListContainerInstancesResponse, AWSError>;
  /**
   * Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
   */
  listContainerInstances(callback?: (err: AWSError, data: ECS.Types.ListContainerInstancesResponse) => void): Request<ECS.Types.ListContainerInstancesResponse, AWSError>;
  /**
   * Lists the services that are running in a specified cluster.
   */
  listServices(params: ECS.Types.ListServicesRequest, callback?: (err: AWSError, data: ECS.Types.ListServicesResponse) => void): Request<ECS.Types.ListServicesResponse, AWSError>;
  /**
   * Lists the services that are running in a specified cluster.
   */
  listServices(callback?: (err: AWSError, data: ECS.Types.ListServicesResponse) => void): Request<ECS.Types.ListServicesResponse, AWSError>;
  /**
   * List the tags for an Amazon ECS resource.
   */
  listTagsForResource(params: ECS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: ECS.Types.ListTagsForResourceResponse) => void): Request<ECS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List the tags for an Amazon ECS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: ECS.Types.ListTagsForResourceResponse) => void): Request<ECS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definition revisions). You can filter out task definition families that do not contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter.
   */
  listTaskDefinitionFamilies(params: ECS.Types.ListTaskDefinitionFamiliesRequest, callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionFamiliesResponse) => void): Request<ECS.Types.ListTaskDefinitionFamiliesResponse, AWSError>;
  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definition revisions). You can filter out task definition families that do not contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter.
   */
  listTaskDefinitionFamilies(callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionFamiliesResponse) => void): Request<ECS.Types.ListTaskDefinitionFamiliesResponse, AWSError>;
  /**
   * Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter.
   */
  listTaskDefinitions(params: ECS.Types.ListTaskDefinitionsRequest, callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionsResponse) => void): Request<ECS.Types.ListTaskDefinitionsResponse, AWSError>;
  /**
   * Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter.
   */
  listTaskDefinitions(callback?: (err: AWSError, data: ECS.Types.ListTaskDefinitionsResponse) => void): Request<ECS.Types.ListTaskDefinitionsResponse, AWSError>;
  /**
   * Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the family, containerInstance, and desiredStatus parameters. Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. 
   */
  listTasks(params: ECS.Types.ListTasksRequest, callback?: (err: AWSError, data: ECS.Types.ListTasksResponse) => void): Request<ECS.Types.ListTasksResponse, AWSError>;
  /**
   * Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the family, containerInstance, and desiredStatus parameters. Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. 
   */
  listTasks(callback?: (err: AWSError, data: ECS.Types.ListTasksResponse) => void): Request<ECS.Types.ListTasksResponse, AWSError>;
  /**
   * Modifies an account setting. Account settings are set on a per-Region basis. If you change the account setting for the root user, the default settings for all of the IAM users and roles for which no individual account setting has been specified are reset. For more information, see Account Settings in the Amazon Elastic Container Service Developer Guide. When serviceLongArnFormat, taskLongArnFormat, or containerInstanceLongArnFormat are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource will be defined by the opt-in status of the IAM user or role that created the resource. You must enable this setting to use Amazon ECS features such as resource tagging. When awsvpcTrunking is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If awsvpcTrunking is enabled, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see Elastic Network Interface Trunking in the Amazon Elastic Container Service Developer Guide. When containerInsights is specified, the default setting indicating whether CloudWatch Container Insights is enabled for your clusters is changed. If containerInsights is enabled, any new clusters that are created will have Container Insights enabled unless you disable it during cluster creation. For more information, see CloudWatch Container Insights in the Amazon Elastic Container Service Developer Guide.
   */
  putAccountSetting(params: ECS.Types.PutAccountSettingRequest, callback?: (err: AWSError, data: ECS.Types.PutAccountSettingResponse) => void): Request<ECS.Types.PutAccountSettingResponse, AWSError>;
  /**
   * Modifies an account setting. Account settings are set on a per-Region basis. If you change the account setting for the root user, the default settings for all of the IAM users and roles for which no individual account setting has been specified are reset. For more information, see Account Settings in the Amazon Elastic Container Service Developer Guide. When serviceLongArnFormat, taskLongArnFormat, or containerInstanceLongArnFormat are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource will be defined by the opt-in status of the IAM user or role that created the resource. You must enable this setting to use Amazon ECS features such as resource tagging. When awsvpcTrunking is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If awsvpcTrunking is enabled, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see Elastic Network Interface Trunking in the Amazon Elastic Container Service Developer Guide. When containerInsights is specified, the default setting indicating whether CloudWatch Container Insights is enabled for your clusters is changed. If containerInsights is enabled, any new clusters that are created will have Container Insights enabled unless you disable it during cluster creation. For more information, see CloudWatch Container Insights in the Amazon Elastic Container Service Developer Guide.
   */
  putAccountSetting(callback?: (err: AWSError, data: ECS.Types.PutAccountSettingResponse) => void): Request<ECS.Types.PutAccountSettingResponse, AWSError>;
  /**
   * Modifies an account setting for all IAM users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
   */
  putAccountSettingDefault(params: ECS.Types.PutAccountSettingDefaultRequest, callback?: (err: AWSError, data: ECS.Types.PutAccountSettingDefaultResponse) => void): Request<ECS.Types.PutAccountSettingDefaultResponse, AWSError>;
  /**
   * Modifies an account setting for all IAM users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
   */
  putAccountSettingDefault(callback?: (err: AWSError, data: ECS.Types.PutAccountSettingDefaultResponse) => void): Request<ECS.Types.PutAccountSettingDefaultResponse, AWSError>;
  /**
   * Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use DeleteAttributes. For more information, see Attributes in the Amazon Elastic Container Service Developer Guide.
   */
  putAttributes(params: ECS.Types.PutAttributesRequest, callback?: (err: AWSError, data: ECS.Types.PutAttributesResponse) => void): Request<ECS.Types.PutAttributesResponse, AWSError>;
  /**
   * Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use DeleteAttributes. For more information, see Attributes in the Amazon Elastic Container Service Developer Guide.
   */
  putAttributes(callback?: (err: AWSError, data: ECS.Types.PutAttributesResponse) => void): Request<ECS.Types.PutAttributesResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.
   */
  registerContainerInstance(params: ECS.Types.RegisterContainerInstanceRequest, callback?: (err: AWSError, data: ECS.Types.RegisterContainerInstanceResponse) => void): Request<ECS.Types.RegisterContainerInstanceResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.
   */
  registerContainerInstance(callback?: (err: AWSError, data: ECS.Types.RegisterContainerInstanceResponse) => void): Request<ECS.Types.RegisterContainerInstanceResponse, AWSError>;
  /**
   * Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide. You can specify an IAM role for your task with the taskRoleArn parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. The available network modes correspond to those described in Network settings in the Docker run reference. If you specify the awsvpc network mode, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.
   */
  registerTaskDefinition(params: ECS.Types.RegisterTaskDefinitionRequest, callback?: (err: AWSError, data: ECS.Types.RegisterTaskDefinitionResponse) => void): Request<ECS.Types.RegisterTaskDefinitionResponse, AWSError>;
  /**
   * Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide. You can specify an IAM role for your task with the taskRoleArn parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. The available network modes correspond to those described in Network settings in the Docker run reference. If you specify the awsvpc network mode, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.
   */
  registerTaskDefinition(callback?: (err: AWSError, data: ECS.Types.RegisterTaskDefinitionResponse) => void): Request<ECS.Types.RegisterTaskDefinitionResponse, AWSError>;
  /**
   * Starts a new task using the specified task definition. You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances. The Amazon ECS API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command. To manage eventual consistency, you can do the following:   Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.   Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.  
   */
  runTask(params: ECS.Types.RunTaskRequest, callback?: (err: AWSError, data: ECS.Types.RunTaskResponse) => void): Request<ECS.Types.RunTaskResponse, AWSError>;
  /**
   * Starts a new task using the specified task definition. You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances. The Amazon ECS API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command. To manage eventual consistency, you can do the following:   Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.   Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.  
   */
  runTask(callback?: (err: AWSError, data: ECS.Types.RunTaskResponse) => void): Request<ECS.Types.RunTaskResponse, AWSError>;
  /**
   * Starts a new task from the specified task definition on the specified container instance or instances. Alternatively, you can use RunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide.
   */
  startTask(params: ECS.Types.StartTaskRequest, callback?: (err: AWSError, data: ECS.Types.StartTaskResponse) => void): Request<ECS.Types.StartTaskResponse, AWSError>;
  /**
   * Starts a new task from the specified task definition on the specified container instance or instances. Alternatively, you can use RunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide.
   */
  startTask(callback?: (err: AWSError, data: ECS.Types.StartTaskResponse) => void): Request<ECS.Types.StartTaskResponse, AWSError>;
  /**
   * Stops a running task. Any tags associated with the task will be deleted. When StopTask is called on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM value and a default 30-second timeout, after which the SIGKILL value is sent and the containers are forcibly stopped. If the container handles the SIGTERM value gracefully and exits within 30 seconds from receiving it, no SIGKILL value is sent.  The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide. 
   */
  stopTask(params: ECS.Types.StopTaskRequest, callback?: (err: AWSError, data: ECS.Types.StopTaskResponse) => void): Request<ECS.Types.StopTaskResponse, AWSError>;
  /**
   * Stops a running task. Any tags associated with the task will be deleted. When StopTask is called on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM value and a default 30-second timeout, after which the SIGKILL value is sent and the containers are forcibly stopped. If the container handles the SIGTERM value gracefully and exits within 30 seconds from receiving it, no SIGKILL value is sent.  The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide. 
   */
  stopTask(callback?: (err: AWSError, data: ECS.Types.StopTaskResponse) => void): Request<ECS.Types.StopTaskResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that an attachment changed states.
   */
  submitAttachmentStateChanges(params: ECS.Types.SubmitAttachmentStateChangesRequest, callback?: (err: AWSError, data: ECS.Types.SubmitAttachmentStateChangesResponse) => void): Request<ECS.Types.SubmitAttachmentStateChangesResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that an attachment changed states.
   */
  submitAttachmentStateChanges(callback?: (err: AWSError, data: ECS.Types.SubmitAttachmentStateChangesResponse) => void): Request<ECS.Types.SubmitAttachmentStateChangesResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a container changed states.
   */
  submitContainerStateChange(params: ECS.Types.SubmitContainerStateChangeRequest, callback?: (err: AWSError, data: ECS.Types.SubmitContainerStateChangeResponse) => void): Request<ECS.Types.SubmitContainerStateChangeResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a container changed states.
   */
  submitContainerStateChange(callback?: (err: AWSError, data: ECS.Types.SubmitContainerStateChangeResponse) => void): Request<ECS.Types.SubmitContainerStateChangeResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a task changed states.
   */
  submitTaskStateChange(params: ECS.Types.SubmitTaskStateChangeRequest, callback?: (err: AWSError, data: ECS.Types.SubmitTaskStateChangeResponse) => void): Request<ECS.Types.SubmitTaskStateChangeResponse, AWSError>;
  /**
   *  This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a task changed states.
   */
  submitTaskStateChange(callback?: (err: AWSError, data: ECS.Types.SubmitTaskStateChangeResponse) => void): Request<ECS.Types.SubmitTaskStateChangeResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   */
  tagResource(params: ECS.Types.TagResourceRequest, callback?: (err: AWSError, data: ECS.Types.TagResourceResponse) => void): Request<ECS.Types.TagResourceResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   */
  tagResource(callback?: (err: AWSError, data: ECS.Types.TagResourceResponse) => void): Request<ECS.Types.TagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(params: ECS.Types.UntagResourceRequest, callback?: (err: AWSError, data: ECS.Types.UntagResourceResponse) => void): Request<ECS.Types.UntagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: ECS.Types.UntagResourceResponse) => void): Request<ECS.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.  UpdateContainerAgent requires the Amazon ECS-optimized AMI or Amazon Linux with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually Updating the Amazon ECS Container Agent in the Amazon Elastic Container Service Developer Guide.
   */
  updateContainerAgent(params: ECS.Types.UpdateContainerAgentRequest, callback?: (err: AWSError, data: ECS.Types.UpdateContainerAgentResponse) => void): Request<ECS.Types.UpdateContainerAgentResponse, AWSError>;
  /**
   * Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.  UpdateContainerAgent requires the Amazon ECS-optimized AMI or Amazon Linux with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually Updating the Amazon ECS Container Agent in the Amazon Elastic Container Service Developer Guide.
   */
  updateContainerAgent(callback?: (err: AWSError, data: ECS.Types.UpdateContainerAgentResponse) => void): Request<ECS.Types.UpdateContainerAgentResponse, AWSError>;
  /**
   * Modifies the status of an Amazon ECS container instance. Once a container instance has reached an ACTIVE state, you can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.  A container instance cannot be changed to DRAINING until it has reached an ACTIVE status. If the instance is in any other status, an error will be received.  When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according to the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. You can change the deployment configuration of your service using UpdateService.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.   Any PENDING or RUNNING tasks that do not belong to a service are not affected. You must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When a container instance has been drained, you can set a container instance to ACTIVE status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.
   */
  updateContainerInstancesState(params: ECS.Types.UpdateContainerInstancesStateRequest, callback?: (err: AWSError, data: ECS.Types.UpdateContainerInstancesStateResponse) => void): Request<ECS.Types.UpdateContainerInstancesStateResponse, AWSError>;
  /**
   * Modifies the status of an Amazon ECS container instance. Once a container instance has reached an ACTIVE state, you can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.  A container instance cannot be changed to DRAINING until it has reached an ACTIVE status. If the instance is in any other status, an error will be received.  When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according to the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. You can change the deployment configuration of your service using UpdateService.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.   Any PENDING or RUNNING tasks that do not belong to a service are not affected. You must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When a container instance has been drained, you can set a container instance to ACTIVE status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.
   */
  updateContainerInstancesState(callback?: (err: AWSError, data: ECS.Types.UpdateContainerInstancesStateResponse) => void): Request<ECS.Types.UpdateContainerInstancesStateResponse, AWSError>;
  /**
   * Modifies the parameters of a service. For services using the rolling update (ECS) deployment controller, the desired count, deployment configuration, network configuration, or task definition used can be updated. For services using the blue/green (CODE_DEPLOY) deployment controller, only the desired count, deployment configuration, and health check grace period can be updated using this API. If the network configuration, platform version, or task definition need to be updated, a new AWS CodeDeploy deployment should be created. For more information, see CreateDeployment in the AWS CodeDeploy API Reference. For services using an external deployment controller, you can update only the desired count and health check grace period using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, you should create a new task set. For more information, see CreateTaskSet. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.  If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, my_image:latest), you do not need to create a new revision of your task definition. You can update the service using the forceNewDeployment option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.  You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).   When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout, after which SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.     When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic:    Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.   Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.  
   */
  updateService(params: ECS.Types.UpdateServiceRequest, callback?: (err: AWSError, data: ECS.Types.UpdateServiceResponse) => void): Request<ECS.Types.UpdateServiceResponse, AWSError>;
  /**
   * Modifies the parameters of a service. For services using the rolling update (ECS) deployment controller, the desired count, deployment configuration, network configuration, or task definition used can be updated. For services using the blue/green (CODE_DEPLOY) deployment controller, only the desired count, deployment configuration, and health check grace period can be updated using this API. If the network configuration, platform version, or task definition need to be updated, a new AWS CodeDeploy deployment should be created. For more information, see CreateDeployment in the AWS CodeDeploy API Reference. For services using an external deployment controller, you can update only the desired count and health check grace period using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, you should create a new task set. For more information, see CreateTaskSet. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.  If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, my_image:latest), you do not need to create a new revision of your task definition. You can update the service using the forceNewDeployment option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.  You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they are in the RUNNING state and the container instance they are hosted on is reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).   When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout, after which SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:   Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.     When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic:    Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.   Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.  
   */
  updateService(callback?: (err: AWSError, data: ECS.Types.UpdateServiceResponse) => void): Request<ECS.Types.UpdateServiceResponse, AWSError>;
  /**
   * Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  updateServicePrimaryTaskSet(params: ECS.Types.UpdateServicePrimaryTaskSetRequest, callback?: (err: AWSError, data: ECS.Types.UpdateServicePrimaryTaskSetResponse) => void): Request<ECS.Types.UpdateServicePrimaryTaskSetResponse, AWSError>;
  /**
   * Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  updateServicePrimaryTaskSet(callback?: (err: AWSError, data: ECS.Types.UpdateServicePrimaryTaskSetResponse) => void): Request<ECS.Types.UpdateServicePrimaryTaskSetResponse, AWSError>;
  /**
   * Modifies a task set. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  updateTaskSet(params: ECS.Types.UpdateTaskSetRequest, callback?: (err: AWSError, data: ECS.Types.UpdateTaskSetResponse) => void): Request<ECS.Types.UpdateTaskSetResponse, AWSError>;
  /**
   * Modifies a task set. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.
   */
  updateTaskSet(callback?: (err: AWSError, data: ECS.Types.UpdateTaskSetResponse) => void): Request<ECS.Types.UpdateTaskSetResponse, AWSError>;
  /**
   * Waits for the tasksRunning state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksRunning", params: ECS.Types.DescribeTasksRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the tasksRunning state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksRunning", callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the tasksStopped state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksStopped", params: ECS.Types.DescribeTasksRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the tasksStopped state by periodically calling the underlying ECS.describeTasksoperation every 6 seconds (at most 100 times).
   */
  waitFor(state: "tasksStopped", callback?: (err: AWSError, data: ECS.Types.DescribeTasksResponse) => void): Request<ECS.Types.DescribeTasksResponse, AWSError>;
  /**
   * Waits for the servicesStable state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesStable", params: ECS.Types.DescribeServicesRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Waits for the servicesStable state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesStable", callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Waits for the servicesInactive state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesInactive", params: ECS.Types.DescribeServicesRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
  /**
   * Waits for the servicesInactive state by periodically calling the underlying ECS.describeServicesoperation every 15 seconds (at most 40 times).
   */
  waitFor(state: "servicesInactive", callback?: (err: AWSError, data: ECS.Types.DescribeServicesResponse) => void): Request<ECS.Types.DescribeServicesResponse, AWSError>;
}
declare namespace ECS {
  export type AgentUpdateStatus = "PENDING"|"STAGING"|"STAGED"|"UPDATING"|"UPDATED"|"FAILED";
  export type AssignPublicIp = "ENABLED"|"DISABLED";
  export interface Attachment {
    /**
     * The unique identifier for the attachment.
     */
    id?: String;
    /**
     * The type of the attachment, such as ElasticNetworkInterface.
     */
    type?: String;
    /**
     *  The status of the attachment. Valid values are PRECREATED, CREATED, ATTACHING, ATTACHED, DETACHING, DETACHED, and DELETED.
     */
    status?: String;
    /**
     * Details of the attachment. For elastic network interfaces, this includes the network interface ID, the MAC address, the subnet ID, and the private IPv4 address.
     */
    details?: AttachmentDetails;
  }
  export type AttachmentDetails = KeyValuePair[];
  export interface AttachmentStateChange {
    /**
     * The Amazon Resource Name (ARN) of the attachment.
     */
    attachmentArn: String;
    /**
     * The status of the attachment.
     */
    status: String;
  }
  export type AttachmentStateChanges = AttachmentStateChange[];
  export type Attachments = Attachment[];
  export interface Attribute {
    /**
     * The name of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, and periods are allowed.
     */
    name: String;
    /**
     * The value of the attribute. Up to 128 letters (uppercase and lowercase), numbers, hyphens, underscores, periods, at signs (@), forward slashes, colons, and spaces are allowed.
     */
    value?: String;
    /**
     * The type of the target with which to attach the attribute. This parameter is required if you use the short form ID for a resource instead of the full ARN.
     */
    targetType?: TargetType;
    /**
     * The ID of the target. You can specify the short form ID for a resource or the full Amazon Resource Name (ARN).
     */
    targetId?: String;
  }
  export type Attributes = Attribute[];
  export interface AwsVpcConfiguration {
    /**
     * The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.  All specified subnets must be from the same VPC. 
     */
    subnets: StringList;
    /**
     * The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.  All specified security groups must be from the same VPC. 
     */
    securityGroups?: StringList;
    /**
     * Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
     */
    assignPublicIp?: AssignPublicIp;
  }
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export type BoxedInteger = number;
  export interface Cluster {
    /**
     * The Amazon Resource Name (ARN) that identifies the cluster. The ARN contains the arn:aws:ecs namespace, followed by the Region of the cluster, the AWS account ID of the cluster owner, the cluster namespace, and then the cluster name. For example, arn:aws:ecs:region:012345678910:cluster/test.
     */
    clusterArn?: String;
    /**
     * A user-generated string that you use to identify your cluster.
     */
    clusterName?: String;
    /**
     * The status of the cluster. The valid values are ACTIVE or INACTIVE. ACTIVE indicates that you can register container instances with the cluster and the associated instances can accept tasks.
     */
    status?: String;
    /**
     * The number of container instances registered into the cluster. This includes container instances in both ACTIVE and DRAINING status.
     */
    registeredContainerInstancesCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the RUNNING state.
     */
    runningTasksCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the PENDING state.
     */
    pendingTasksCount?: Integer;
    /**
     * The number of services that are running on the cluster in an ACTIVE state. You can view these services with ListServices.
     */
    activeServicesCount?: Integer;
    /**
     * Additional information about your clusters that are separated by launch type, including:   runningEC2TasksCount   RunningFargateTasksCount   pendingEC2TasksCount   pendingFargateTasksCount   activeEC2ServiceCount   activeFargateServiceCount   drainingEC2ServiceCount   drainingFargateServiceCount  
     */
    statistics?: Statistics;
    /**
     * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * The settings for the cluster. This parameter indicates whether CloudWatch Container Insights is enabled or disabled for a cluster.
     */
    settings?: ClusterSettings;
  }
  export type ClusterField = "STATISTICS"|"TAGS";
  export type ClusterFieldList = ClusterField[];
  export interface ClusterSetting {
    /**
     * The name of the cluster setting. The only supported value is containerInsights.
     */
    name?: ClusterSettingName;
    /**
     * The value to set for the cluster setting. The supported values are enabled and disabled. If enabled is specified, CloudWatch Container Insights will be enabled for the cluster, otherwise it will be disabled unless the containerInsights account setting is enabled. If a cluster value is specified, it will override the containerInsights value set with PutAccountSetting or PutAccountSettingDefault.
     */
    value?: String;
  }
  export type ClusterSettingName = "containerInsights";
  export type ClusterSettings = ClusterSetting[];
  export type Clusters = Cluster[];
  export type Compatibility = "EC2"|"FARGATE";
  export type CompatibilityList = Compatibility[];
  export type Connectivity = "CONNECTED"|"DISCONNECTED";
  export interface Container {
    /**
     * The Amazon Resource Name (ARN) of the container.
     */
    containerArn?: String;
    /**
     * The ARN of the task.
     */
    taskArn?: String;
    /**
     * The name of the container.
     */
    name?: String;
    /**
     * The last known status of the container.
     */
    lastStatus?: String;
    /**
     * The exit code returned from the container.
     */
    exitCode?: BoxedInteger;
    /**
     * A short (255 max characters) human-readable string to provide additional details about a running or stopped container.
     */
    reason?: String;
    /**
     * The network bindings associated with the container.
     */
    networkBindings?: NetworkBindings;
    /**
     * The network interfaces associated with the container.
     */
    networkInterfaces?: NetworkInterfaces;
    /**
     * The health status of the container. If health checks are not configured for this container in its task definition, then it reports the health status as UNKNOWN.
     */
    healthStatus?: HealthStatus;
    /**
     * The number of CPU units set for the container. The value will be 0 if no value was specified in the container definition when the task definition was registered.
     */
    cpu?: String;
    /**
     * The hard limit (in MiB) of memory set for the container.
     */
    memory?: String;
    /**
     * The soft limit (in MiB) of memory set for the container.
     */
    memoryReservation?: String;
    /**
     * The IDs of each GPU assigned to the container.
     */
    gpuIds?: GpuIds;
  }
  export type ContainerCondition = "START"|"COMPLETE"|"SUCCESS"|"HEALTHY";
  export interface ContainerDefinition {
    /**
     * The name of a container. If you are linking multiple containers together in a task definition, the name of one container can be entered in the links of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This parameter maps to name in the Create a container section of the Docker Remote API and the --name option to docker run. 
     */
    name?: String;
    /**
     * The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either  repository-url/image:tag  or  repository-url/image@digest . Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to Image in the Create a container section of the Docker Remote API and the IMAGE parameter of docker run.   When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image are not propagated to already running tasks.   Images in Amazon ECR repositories can be specified by either using the full registry/repository:tag or registry/repository@digest. For example, 012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;:latest or 012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE.    Images in official repositories on Docker Hub use a single name (for example, ubuntu or mongo).   Images in other repositories on Docker Hub are qualified with an organization name (for example, amazon/amazon-ecs-agent).   Images in other online repositories are qualified further by a domain name (for example, quay.io/assemblyline/ubuntu).  
     */
    image?: String;
    /**
     * The private repository authentication credentials to use.
     */
    repositoryCredentials?: RepositoryCredentials;
    /**
     * The number of cpu units reserved for the container. This parameter maps to CpuShares in the Create a container section of the Docker Remote API and the --cpu-shares option to docker run. This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level cpu value.  You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the Amazon EC2 Instances detail page by 1,024.  For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units. Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units. On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. For more information, see CPU share constraint in the Docker documentation. The minimum valid CPU share value that the Linux kernel allows is 2. However, the CPU parameter is not required, and you can use CPU values below 2 in your container definitions. For CPU values below 2 (including null), the behavior varies based on your Amazon ECS container agent version:    Agent versions less than or equal to 1.1.0: Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.    Agent versions greater than or equal to 1.2.0: Null, zero, and CPU values of 1 are passed to Docker as 2.   On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that is described in the task definition.
     */
    cpu?: Integer;
    /**
     * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task memory value, if one is specified. This parameter maps to Memory in the Create a container section of the Docker Remote API and the --memory option to docker run. If your containers are part of a task using the Fargate launch type, this field is optional. For containers that are part of a task using the EC2 launch type, you must specify a non-zero integer for one or both of memory or memoryReservation in container definitions. If you specify both, memory must be greater than memoryReservation. If you specify memoryReservation, then that value is subtracted from the available memory resources for the container instance on which the container is placed. Otherwise, the value of memory is used. The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers.
     */
    memory?: BoxedInteger;
    /**
     * The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the memory parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to MemoryReservation in the Create a container section of the Docker Remote API and the --memory-reservation option to docker run. You must specify a non-zero integer for one or both of memory or memoryReservation in container definitions. If you specify both, memory must be greater than memoryReservation. If you specify memoryReservation, then that value is subtracted from the available memory resources for the container instance on which the container is placed. Otherwise, the value of memory is used. For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a memoryReservation of 128 MiB, and a memory hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed. The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers. 
     */
    memoryReservation?: BoxedInteger;
    /**
     * The links parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is bridge. The name:internalName construct is analogous to name:alias in Docker links. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. For more information about linking Docker containers, go to Legacy container links in the Docker documentation. This parameter maps to Links in the Create a container section of the Docker Remote API and the --link option to docker run.  This parameter is not supported for Windows containers.   Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings. 
     */
    links?: StringList;
    /**
     * The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic. For task definitions that use the awsvpc network mode, you should only specify the containerPort. The hostPort can be left blank or it must be the same value as the containerPort. Port mappings on Windows use the NetNAT gateway address rather than localhost. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself.  This parameter maps to PortBindings in the Create a container section of the Docker Remote API and the --publish option to docker run. If the network mode of a task definition is set to none, then you can't specify port mappings. If the network mode of a task definition is set to host, then host ports must either be undefined or they must match the container port in the port mapping.  After a task reaches the RUNNING status, manual and automatic host and container port assignments are visible in the Network Bindings section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the networkBindings section DescribeTasks responses. 
     */
    portMappings?: PortMappingList;
    /**
     * If the essential parameter of a container is marked as true, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the essential parameter of a container is marked as false, then its failure does not affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential. All tasks must have at least one essential container. If you have an application that is composed of multiple containers, you should group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see Application Architecture in the Amazon Elastic Container Service Developer Guide.
     */
    essential?: BoxedBoolean;
    /**
     *  Early versions of the Amazon ECS container agent do not properly handle entryPoint parameters. If you have problems using entryPoint, update your container agent or enter your commands and arguments as command array items instead.  The entry point that is passed to the container. This parameter maps to Entrypoint in the Create a container section of the Docker Remote API and the --entrypoint option to docker run. For more information, see https://docs.docker.com/engine/reference/builder/#entrypoint.
     */
    entryPoint?: StringList;
    /**
     * The command that is passed to the container. This parameter maps to Cmd in the Create a container section of the Docker Remote API and the COMMAND parameter to docker run. For more information, see https://docs.docker.com/engine/reference/builder/#cmd. If there are multiple arguments, each argument should be a separated string in the array.
     */
    command?: StringList;
    /**
     * The environment variables to pass to a container. This parameter maps to Env in the Create a container section of the Docker Remote API and the --env option to docker run.  We do not recommend using plaintext environment variables for sensitive information, such as credential data. 
     */
    environment?: EnvironmentVariables;
    /**
     * The mount points for data volumes in your container. This parameter maps to Volumes in the Create a container section of the Docker Remote API and the --volume option to docker run. Windows containers can mount whole directories on the same drive as $env:ProgramData. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives.
     */
    mountPoints?: MountPointList;
    /**
     * Data volumes to mount from another container. This parameter maps to VolumesFrom in the Create a container section of the Docker Remote API and the --volumes-from option to docker run.
     */
    volumesFrom?: VolumeFromList;
    /**
     * Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see KernelCapabilities.  This parameter is not supported for Windows containers. 
     */
    linuxParameters?: LinuxParameters;
    /**
     * The secrets to pass to the container. For more information, see Specifying Sensitive Data in the Amazon Elastic Container Service Developer Guide.
     */
    secrets?: SecretList;
    /**
     * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed. For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see Updating the Amazon ECS Container Agent in the Amazon Elastic Container Service Developer Guide. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ecs-init package. If your container instances are launched from version 20190301 or later, then they contain the required versions of the container agent and ecs-init. For more information, see Amazon ECS-optimized Linux AMI in the Amazon Elastic Container Service Developer Guide. This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later.
     */
    dependsOn?: ContainerDependencies;
    /**
     * Time duration to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a COMPLETE, SUCCESS, or HEALTHY status. If a startTimeout value is specified for containerB and it does not reach the desired status within that time then containerA will give up and not start. This results in the task transitioning to a STOPPED state. For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to enable a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see Updating the Amazon ECS Container Agent in the Amazon Elastic Container Service Developer Guide. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ecs-init package. If your container instances are launched from version 20190301 or later, then they contain the required versions of the container agent and ecs-init. For more information, see Amazon ECS-optimized Linux AMI in the Amazon Elastic Container Service Developer Guide. This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later.
     */
    startTimeout?: BoxedInteger;
    /**
     * Time duration to wait before the container is forcefully killed if it doesn't exit normally on its own. For tasks using the Fargate launch type, the max stopTimeout value is 2 minutes. This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later. For tasks using the EC2 launch type, the stop timeout value for the container takes precedence over the ECS_CONTAINER_STOP_TIMEOUT container agent configuration parameter, if used. Container instances require at least version 1.26.0 of the container agent to enable a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see Updating the Amazon ECS Container Agent in the Amazon Elastic Container Service Developer Guide. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ecs-init package. If your container instances are launched from version 20190301 or later, then they contain the required versions of the container agent and ecs-init. For more information, see Amazon ECS-optimized Linux AMI in the Amazon Elastic Container Service Developer Guide.
     */
    stopTimeout?: BoxedInteger;
    /**
     * The hostname to use for your container. This parameter maps to Hostname in the Create a container section of the Docker Remote API and the --hostname option to docker run.  The hostname parameter is not supported if you are using the awsvpc network mode. 
     */
    hostname?: String;
    /**
     * The user name to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run. You can use the following formats. If specifying a UID or GID, you must specify it as a positive integer.    user     user:group     uid     uid:gid     user:gid     uid:group     This parameter is not supported for Windows containers. 
     */
    user?: String;
    /**
     * The working directory in which to run commands inside the container. This parameter maps to WorkingDir in the Create a container section of the Docker Remote API and the --workdir option to docker run.
     */
    workingDirectory?: String;
    /**
     * When this parameter is true, networking is disabled within the container. This parameter maps to NetworkDisabled in the Create a container section of the Docker Remote API.  This parameter is not supported for Windows containers. 
     */
    disableNetworking?: BoxedBoolean;
    /**
     * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user). This parameter maps to Privileged in the Create a container section of the Docker Remote API and the --privileged option to docker run.  This parameter is not supported for Windows containers or tasks using the Fargate launch type. 
     */
    privileged?: BoxedBoolean;
    /**
     * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ReadonlyRootfs in the Create a container section of the Docker Remote API and the --read-only option to docker run.  This parameter is not supported for Windows containers. 
     */
    readonlyRootFilesystem?: BoxedBoolean;
    /**
     * A list of DNS servers that are presented to the container. This parameter maps to Dns in the Create a container section of the Docker Remote API and the --dns option to docker run.  This parameter is not supported for Windows containers. 
     */
    dnsServers?: StringList;
    /**
     * A list of DNS search domains that are presented to the container. This parameter maps to DnsSearch in the Create a container section of the Docker Remote API and the --dns-search option to docker run.  This parameter is not supported for Windows containers. 
     */
    dnsSearchDomains?: StringList;
    /**
     * A list of hostnames and IP address mappings to append to the /etc/hosts file on the container. This parameter maps to ExtraHosts in the Create a container section of the Docker Remote API and the --add-host option to docker run.  This parameter is not supported for Windows containers or tasks that use the awsvpc network mode. 
     */
    extraHosts?: HostEntryList;
    /**
     * A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This field is not valid for containers in tasks using the Fargate launch type. This parameter maps to SecurityOpt in the Create a container section of the Docker Remote API and the --security-opt option to docker run.  The Amazon ECS container agent running on a container instance must register with the ECS_SELINUX_CAPABLE=true or ECS_APPARMOR_CAPABLE=true environment variables before containers placed on that instance can use these security options. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide.   This parameter is not supported for Windows containers. 
     */
    dockerSecurityOptions?: StringList;
    /**
     * When this parameter is true, this allows you to deploy containerized applications that require stdin or a tty to be allocated. This parameter maps to OpenStdin in the Create a container section of the Docker Remote API and the --interactive option to docker run.
     */
    interactive?: BoxedBoolean;
    /**
     * When this parameter is true, a TTY is allocated. This parameter maps to Tty in the Create a container section of the Docker Remote API and the --tty option to docker run.
     */
    pseudoTerminal?: BoxedBoolean;
    /**
     * A key/value map of labels to add to the container. This parameter maps to Labels in the Create a container section of the Docker Remote API and the --label option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}' 
     */
    dockerLabels?: DockerLabelsMap;
    /**
     * A list of ulimits to set in the container. This parameter maps to Ulimits in the Create a container section of the Docker Remote API and the --ulimit option to docker run. Valid naming values are displayed in the Ulimit data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}'   This parameter is not supported for Windows containers. 
     */
    ulimits?: UlimitList;
    /**
     * The log configuration specification for the container. This parameter maps to LogConfig in the Create a container section of the Docker Remote API and the --log-driver option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see Configure logging drivers in the Docker documentation.  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the LogConfiguration data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}'   The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the ECS_AVAILABLE_LOGGING_DRIVERS environment variable before containers placed on that instance can use these log configuration options. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide. 
     */
    logConfiguration?: LogConfiguration;
    /**
     * The health check command and associated configuration parameters for the container. This parameter maps to HealthCheck in the Create a container section of the Docker Remote API and the HEALTHCHECK parameter of docker run.
     */
    healthCheck?: HealthCheck;
    /**
     * A list of namespaced kernel parameters to set in the container. This parameter maps to Sysctls in the Create a container section of the Docker Remote API and the --sysctl option to docker run.  It is not recommended that you specify network-related systemControls parameters for multiple containers in a single task that also uses either the awsvpc or host network modes. For tasks that use the awsvpc network mode, the container that is started last determines which systemControls parameters take effect. For tasks that use the host network mode, it changes the container instance's namespaced kernel parameters as well as the containers. 
     */
    systemControls?: SystemControls;
    /**
     * The type and amount of a resource to assign to a container. The only supported resource is a GPU.
     */
    resourceRequirements?: ResourceRequirements;
  }
  export type ContainerDefinitions = ContainerDefinition[];
  export type ContainerDependencies = ContainerDependency[];
  export interface ContainerDependency {
    /**
     * The name of a container.
     */
    containerName: String;
    /**
     * The dependency condition of the container. The following are the available conditions and their behavior:    START - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.    COMPLETE - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit.    SUCCESS - This condition is the same as COMPLETE, but it also requires that the container exits with a zero status.    HEALTHY - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.  
     */
    condition: ContainerCondition;
  }
  export interface ContainerInstance {
    /**
     * The Amazon Resource Name (ARN) of the container instance. The ARN contains the arn:aws:ecs namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the container-instance namespace, and then the container instance ID. For example, arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID.
     */
    containerInstanceArn?: String;
    /**
     * The EC2 instance ID of the container instance.
     */
    ec2InstanceId?: String;
    /**
     * The version counter for the container instance. Every time a container instance experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS container instance state with CloudWatch Events, you can compare the version of a container instance reported by the Amazon ECS APIs with the version reported in CloudWatch Events for the container instance (inside the detail object) to verify that the version in your event stream is current.
     */
    version?: Long;
    /**
     * The version information for the Amazon ECS container agent and Docker daemon running on the container instance.
     */
    versionInfo?: VersionInfo;
    /**
     * For CPU and memory resource types, this parameter describes the remaining CPU and memory that has not already been allocated to tasks and is therefore available for new tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent (at instance registration time) and any task containers that have reserved port mappings on the host (with the host or bridge network mode). Any port that is not specified here is available for new tasks.
     */
    remainingResources?: Resources;
    /**
     * For CPU and memory resource types, this parameter describes the amount of each resource that was available on the container instance when the container agent registered it with Amazon ECS. This value represents the total amount of CPU and memory that can be allocated on this container instance to tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent when it registered the container instance with Amazon ECS.
     */
    registeredResources?: Resources;
    /**
     * The status of the container instance. The valid values are REGISTERING, REGISTRATION_FAILED, ACTIVE, INACTIVE, DEREGISTERING, or DRAINING. If your account has opted in to the awsvpcTrunking account setting, then any newly registered container instance will transition to a REGISTERING status while the trunk elastic network interface is provisioned for the instance. If the registration fails, the instance will transition to a REGISTRATION_FAILED status. You can describe the container instance and see the reason for failure in the statusReason parameter. Once the container instance is terminated, the instance transitions to a DEREGISTERING status while the trunk elastic network interface is deprovisioned. The instance then transitions to an INACTIVE status. The ACTIVE status indicates that the container instance can accept tasks. The DRAINING indicates that new tasks are not placed on the container instance and any service tasks running on the container instance are removed if possible. For more information, see Container Instance Draining in the Amazon Elastic Container Service Developer Guide.
     */
    status?: String;
    /**
     * The reason that the container instance reached its current status.
     */
    statusReason?: String;
    /**
     * This parameter returns true if the agent is connected to Amazon ECS. Registered instances with an agent that may be unhealthy or stopped return false. Only instances connected to an agent can accept placement requests.
     */
    agentConnected?: Boolean;
    /**
     * The number of tasks on the container instance that are in the RUNNING status.
     */
    runningTasksCount?: Integer;
    /**
     * The number of tasks on the container instance that are in the PENDING status.
     */
    pendingTasksCount?: Integer;
    /**
     * The status of the most recent agent update. If an update has never been requested, this value is NULL.
     */
    agentUpdateStatus?: AgentUpdateStatus;
    /**
     * The attributes set for the container instance, either by the Amazon ECS container agent at instance registration or manually with the PutAttributes operation.
     */
    attributes?: Attributes;
    /**
     * The Unix timestamp for when the container instance was registered.
     */
    registeredAt?: Timestamp;
    /**
     * The resources attached to a container instance, such as elastic network interfaces.
     */
    attachments?: Attachments;
    /**
     * The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
  }
  export type ContainerInstanceField = "TAGS";
  export type ContainerInstanceFieldList = ContainerInstanceField[];
  export type ContainerInstanceStatus = "ACTIVE"|"DRAINING"|"REGISTERING"|"DEREGISTERING"|"REGISTRATION_FAILED";
  export type ContainerInstances = ContainerInstance[];
  export interface ContainerOverride {
    /**
     * The name of the container that receives the override. This parameter is required if any override is specified.
     */
    name?: String;
    /**
     * The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
     */
    command?: StringList;
    /**
     * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
     */
    environment?: EnvironmentVariables;
    /**
     * The number of cpu units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
     */
    cpu?: BoxedInteger;
    /**
     * The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
     */
    memory?: BoxedInteger;
    /**
     * The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
     */
    memoryReservation?: BoxedInteger;
    /**
     * The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.
     */
    resourceRequirements?: ResourceRequirements;
  }
  export type ContainerOverrides = ContainerOverride[];
  export interface ContainerStateChange {
    /**
     * The name of the container.
     */
    containerName?: String;
    /**
     * The exit code for the container, if the state change is a result of the container exiting.
     */
    exitCode?: BoxedInteger;
    /**
     * Any network bindings associated with the container.
     */
    networkBindings?: NetworkBindings;
    /**
     * The reason for the state change.
     */
    reason?: String;
    /**
     * The status of the container.
     */
    status?: String;
  }
  export type ContainerStateChanges = ContainerStateChange[];
  export type Containers = Container[];
  export interface CreateClusterRequest {
    /**
     * The name of your cluster. If you do not specify a name for your cluster, you create a cluster named default. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. 
     */
    clusterName?: String;
    /**
     * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * The setting to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster. If this value is specified, it will override the containerInsights value set with PutAccountSetting or PutAccountSettingDefault.
     */
    settings?: ClusterSettings;
  }
  export interface CreateClusterResponse {
    /**
     * The full description of your new cluster.
     */
    cluster?: Cluster;
  }
  export interface CreateServiceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
     */
    serviceName: String;
    /**
     * The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used. A task definition must be specified if the service is using the ECS deployment controller.
     */
    taskDefinition?: String;
    /**
     * A load balancer object representing the load balancer to use with your service. If the service is using the ECS deployment controller, you are limited to one load balancer or target group. If the service is using the CODE_DEPLOY deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When creating an AWS CodeDeploy deployment group, you specify two target groups (referred to as a targetGroupPair). During a deployment, AWS CodeDeploy determines which task set in your service has the status PRIMARY and associates one target group with it, and then associates the other target group with the replacement task set. The load balancer can also have up to two listeners: a required listener for production traffic and an optional listener that allows you perform validation tests with Lambda functions before routing production traffic to it. After you create a service using the ECS deployment controller, the load balancer name or target group ARN, container name, and container port specified in the service definition are immutable. If you are using the CODE_DEPLOY deployment controller, these values can be changed when updating the service. For Classic Load Balancers, this object must contain the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance is registered with the load balancer specified here. For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group specified here. Services with tasks that use the awsvpc network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose ip as the target type, not instance, because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.
     */
    loadBalancers?: LoadBalancers;
    /**
     * The details of the service discovery registries to assign to this service. For more information, see Service Discovery.  Service discovery is supported for Fargate tasks if you are using platform version v1.1.0 or later. For more information, see AWS Fargate Platform Versions. 
     */
    serviceRegistries?: ServiceRegistries;
    /**
     * The number of instantiations of the specified task definition to place and keep running on your cluster.
     */
    desiredCount?: BoxedInteger;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 32 ASCII characters are allowed.
     */
    clientToken?: String;
    /**
     * The launch type on which to run your service. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition does not use the awsvpc network mode. If you specify the role parameter, you must also specify a load balancer object with the loadBalancers parameter.  If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here. The service-linked role is required if your task definition uses the awsvpc network mode, in which case you should not specify a role here. For more information, see Using Service-Linked Roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide.  If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name bar has a path of /foo/ then you would specify /foo/bar as the role name. For more information, see Friendly Names and Paths in the IAM User Guide.
     */
    role?: String;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: DeploymentConfiguration;
    /**
     * An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at runtime). 
     */
    placementConstraints?: PlacementConstraints;
    /**
     * The placement strategy objects to use for tasks in your service. You can specify a maximum of five strategy rules per service.
     */
    placementStrategy?: PlacementStrategies;
    /**
     * The network configuration for the service. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 2,147,483,647 seconds. During that time, the ECS service scheduler ignores health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.
     */
    healthCheckGracePeriodSeconds?: BoxedInteger;
    /**
     * The scheduling strategy to use for the service. For more information, see Services. There are two service scheduler strategies available:    REPLICA-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service is using the CODE_DEPLOY or EXTERNAL deployment controller types.    DAEMON-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.  Tasks using the Fargate launch type or the CODE_DEPLOY or EXTERNAL deployment controller types don't support the DAEMON scheduling strategy.   
     */
    schedulingStrategy?: SchedulingStrategy;
    /**
     * The deployment controller to use for the service.
     */
    deploymentController?: DeploymentController;
    /**
     * The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * Specifies whether to enable Amazon ECS managed tags for the tasks within the service. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
     */
    enableECSManagedTags?: Boolean;
    /**
     * Specifies whether to propagate the tags from the task definition or the service to the tasks in the service. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks within the service during service creation. To add tags to a task after service creation, use the TagResource API action.
     */
    propagateTags?: PropagateTags;
  }
  export interface CreateServiceResponse {
    /**
     * The full description of your service following the create call. If a service is using the ECS deployment controller, the deploymentController and taskSets parameters will not be returned. If the service is using the CODE_DEPLOY deployment controller, the deploymentController, taskSets and deployments parameters will be returned, however the deployments parameter will be an empty list.
     */
    service?: Service;
  }
  export interface CreateTaskSetRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
     */
    service: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
     */
    cluster: String;
    /**
     * An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value.
     */
    externalId?: String;
    /**
     * The task definition for the tasks in the task set to use.
     */
    taskDefinition: String;
    networkConfiguration?: NetworkConfiguration;
    /**
     * A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.
     */
    loadBalancers?: LoadBalancers;
    /**
     * The details of the service discovery registries to assign to this task set. For more information, see Service Discovery.
     */
    serviceRegistries?: ServiceRegistries;
    /**
     * The launch type that new tasks in the task set will use. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.
     */
    platformVersion?: String;
    scale?: Scale;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 32 ASCII characters are allowed.
     */
    clientToken?: String;
  }
  export interface CreateTaskSetResponse {
    taskSet?: TaskSet;
  }
  export interface DeleteAccountSettingRequest {
    /**
     * The resource name for which to disable the account setting. If serviceLongArnFormat is specified, the ARN for your Amazon ECS services is affected. If taskLongArnFormat is specified, the ARN and resource ID for your Amazon ECS tasks is affected. If containerInstanceLongArnFormat is specified, the ARN and resource ID for your Amazon ECS container instances is affected. If awsvpcTrunking is specified, the ENI limit for your Amazon ECS container instances is affected.
     */
    name: SettingName;
    /**
     * The ARN of the principal, which can be an IAM user, IAM role, or the root user. If you specify the root user, it disables the account setting for all IAM users, IAM roles, and the root user of the account unless an IAM user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user.
     */
    principalArn?: String;
  }
  export interface DeleteAccountSettingResponse {
    /**
     * The account setting for the specified principal ARN.
     */
    setting?: Setting;
  }
  export interface DeleteAttributesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete attributes. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The attributes to delete from your resource. You can specify up to 10 attributes per request. For custom attributes, specify the attribute name and target ID, but do not specify the value. If you specify the target ID using the short form, you must also specify the target type.
     */
    attributes: Attributes;
  }
  export interface DeleteAttributesResponse {
    /**
     * A list of attribute objects that were successfully deleted from your resource.
     */
    attributes?: Attributes;
  }
  export interface DeleteClusterRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster to delete.
     */
    cluster: String;
  }
  export interface DeleteClusterResponse {
    /**
     * The full description of the deleted cluster.
     */
    cluster?: Cluster;
  }
  export interface DeleteServiceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The name of the service to delete.
     */
    service: String;
    /**
     * If true, allows you to delete a service even if it has not been scaled down to zero tasks. It is only necessary to use this if the service is using the REPLICA scheduling strategy.
     */
    force?: BoxedBoolean;
  }
  export interface DeleteServiceResponse {
    /**
     * The full description of the deleted service.
     */
    service?: Service;
  }
  export interface DeleteTaskSetRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in to delete.
     */
    cluster: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to delete.
     */
    service: String;
    /**
     * The task set ID or full Amazon Resource Name (ARN) of the task set to delete.
     */
    taskSet: String;
    /**
     * If true, this allows you to delete a task set even if it hasn't been scaled down to zero.
     */
    force?: BoxedBoolean;
  }
  export interface DeleteTaskSetResponse {
    taskSet?: TaskSet;
  }
  export interface Deployment {
    /**
     * The ID of the deployment.
     */
    id?: String;
    /**
     * The status of the deployment. The following describes each state:  PRIMARY  The most recent deployment of a service.  ACTIVE  A service deployment that still has running tasks, but are in the process of being replaced with a new PRIMARY deployment.  INACTIVE  A deployment that has been completely replaced.  
     */
    status?: String;
    /**
     * The most recent task definition that was specified for the tasks in the service to use.
     */
    taskDefinition?: String;
    /**
     * The most recent desired count of tasks that was specified for the service to deploy or maintain.
     */
    desiredCount?: Integer;
    /**
     * The number of tasks in the deployment that are in the PENDING status.
     */
    pendingCount?: Integer;
    /**
     * The number of tasks in the deployment that are in the RUNNING status.
     */
    runningCount?: Integer;
    /**
     * The Unix timestamp for when the service deployment was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp for when the service deployment was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The launch type the tasks in the service are using. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version on which your tasks in the service are running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the awsvpc networking mode.
     */
    networkConfiguration?: NetworkConfiguration;
  }
  export interface DeploymentConfiguration {
    /**
     * If a service is using the rolling update (ECS) deployment type, the maximum percent parameter represents an upper limit on the number of tasks in a service that are allowed in the RUNNING or PENDING state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%. If a service is using the blue/green (CODE_DEPLOY) or EXTERNAL deployment types and tasks that use the EC2 launch type, the maximum percent value is set to the default value and is used to define the upper limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the maximum percent value is not used, although it is returned when describing your service.
     */
    maximumPercent?: BoxedInteger;
    /**
     * If a service is using the rolling update (ECS) deployment type, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the RUNNING state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the RUNNING state; tasks for services that do use a load balancer are considered healthy if they are in the RUNNING state and they are reported as healthy by the load balancer. The default value for minimum healthy percent is 100%. If a service is using the blue/green (CODE_DEPLOY) or EXTERNAL deployment types and tasks that use the EC2 launch type, the minimum healthy percent value is set to the default value and is used to define the lower limit on the number of the tasks in the service that remain in the RUNNING state while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.
     */
    minimumHealthyPercent?: BoxedInteger;
  }
  export interface DeploymentController {
    /**
     * The deployment controller type to use. There are three deployment controller types available:  ECS  The rolling update (ECS) deployment type involves replacing the current running version of the container with the latest version. The number of containers Amazon ECS adds or removes from the service during a rolling update is controlled by adjusting the minimum and maximum number of healthy tasks allowed during a service deployment, as specified in the DeploymentConfiguration.  CODE_DEPLOY  The blue/green (CODE_DEPLOY) deployment type uses the blue/green deployment model powered by AWS CodeDeploy, which allows you to verify a new deployment of a service before sending production traffic to it.  EXTERNAL  The external (EXTERNAL) deployment type enables you to use any third-party deployment controller for full control over the deployment process for an Amazon ECS service.  
     */
    type: DeploymentControllerType;
  }
  export type DeploymentControllerType = "ECS"|"CODE_DEPLOY"|"EXTERNAL";
  export type Deployments = Deployment[];
  export interface DeregisterContainerInstanceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to deregister. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The container instance ID or full ARN of the container instance to deregister. The ARN contains the arn:aws:ecs namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the container-instance namespace, and then the container instance ID. For example, arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID.
     */
    containerInstance: String;
    /**
     * Forces the deregistration of the container instance. If you have tasks running on the container instance when you deregister it with the force option, these tasks remain running until you terminate the instance or the tasks stop through some other means, but they are orphaned (no longer monitored or accounted for by Amazon ECS). If an orphaned task on your container instance is part of an Amazon ECS service, then the service scheduler starts another copy of that task, on a different container instance if possible.  Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer target group are deregistered. They begin connection draining according to the settings on the load balancer or target group.
     */
    force?: BoxedBoolean;
  }
  export interface DeregisterContainerInstanceResponse {
    /**
     * The container instance that was deregistered.
     */
    containerInstance?: ContainerInstance;
  }
  export interface DeregisterTaskDefinitionRequest {
    /**
     * The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a revision.
     */
    taskDefinition: String;
  }
  export interface DeregisterTaskDefinitionResponse {
    /**
     * The full description of the deregistered task.
     */
    taskDefinition?: TaskDefinition;
  }
  export interface DescribeClustersRequest {
    /**
     * A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed.
     */
    clusters?: StringList;
    /**
     * Additional information about your clusters to be separated by launch type, including:   runningEC2TasksCount   runningFargateTasksCount   pendingEC2TasksCount   pendingFargateTasksCount   activeEC2ServiceCount   activeFargateServiceCount   drainingEC2ServiceCount   drainingFargateServiceCount  
     */
    include?: ClusterFieldList;
  }
  export interface DescribeClustersResponse {
    /**
     * The list of clusters.
     */
    clusters?: Clusters;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeContainerInstancesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the container instance or container instances you are describing were launched in any cluster other than the default cluster.
     */
    cluster?: String;
    /**
     * A list of up to 100 container instance IDs or full Amazon Resource Name (ARN) entries.
     */
    containerInstances: StringList;
    /**
     * Specifies whether you want to see the resource tags for the container instance. If TAGS is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.
     */
    include?: ContainerInstanceFieldList;
  }
  export interface DescribeContainerInstancesResponse {
    /**
     * The list of container instances.
     */
    containerInstances?: ContainerInstances;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeServicesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster.
     */
    cluster?: String;
    /**
     * A list of services to describe. You may specify up to 10 services to describe in a single operation.
     */
    services: StringList;
    /**
     * Specifies whether you want to see the resource tags for the service. If TAGS is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.
     */
    include?: ServiceFieldList;
  }
  export interface DescribeServicesResponse {
    /**
     * The list of services described.
     */
    services?: Services;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeTaskDefinitionRequest {
    /**
     * The family for the latest ACTIVE revision, family and revision (family:revision) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe.
     */
    taskDefinition: String;
    /**
     * Specifies whether to see the resource tags for the task definition. If TAGS is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.
     */
    include?: TaskDefinitionFieldList;
  }
  export interface DescribeTaskDefinitionResponse {
    /**
     * The full task definition description.
     */
    taskDefinition?: TaskDefinition;
    /**
     * The metadata that is applied to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
  }
  export interface DescribeTaskSetsRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in.
     */
    cluster: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service that the task sets exist in.
     */
    service: String;
    /**
     * The ID or full Amazon Resource Name (ARN) of task sets to describe.
     */
    taskSets?: StringList;
  }
  export interface DescribeTaskSetsResponse {
    /**
     * The list of task sets described.
     */
    taskSets?: TaskSets;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface DescribeTasksRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the task or tasks you are describing were launched in any cluster other than the default cluster.
     */
    cluster?: String;
    /**
     * A list of up to 100 task IDs or full ARN entries.
     */
    tasks: StringList;
    /**
     * Specifies whether you want to see the resource tags for the task. If TAGS is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.
     */
    include?: TaskFieldList;
  }
  export interface DescribeTasksResponse {
    /**
     * The list of tasks.
     */
    tasks?: Tasks;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export type DesiredStatus = "RUNNING"|"PENDING"|"STOPPED";
  export interface Device {
    /**
     * The path for the device on the host container instance.
     */
    hostPath: String;
    /**
     * The path inside the container at which to expose the host device.
     */
    containerPath?: String;
    /**
     * The explicit permissions to provide to the container for the device. By default, the container has permissions for read, write, and mknod for the device.
     */
    permissions?: DeviceCgroupPermissions;
  }
  export type DeviceCgroupPermission = "read"|"write"|"mknod";
  export type DeviceCgroupPermissions = DeviceCgroupPermission[];
  export type DevicesList = Device[];
  export interface DiscoverPollEndpointRequest {
    /**
     * The container instance ID or full ARN of the container instance. The ARN contains the arn:aws:ecs namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the container-instance namespace, and then the container instance ID. For example, arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID.
     */
    containerInstance?: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster to which the container instance belongs.
     */
    cluster?: String;
  }
  export interface DiscoverPollEndpointResponse {
    /**
     * The endpoint for the Amazon ECS agent to poll.
     */
    endpoint?: String;
    /**
     * The telemetry endpoint for the Amazon ECS agent.
     */
    telemetryEndpoint?: String;
  }
  export type DockerLabelsMap = {[key: string]: String};
  export interface DockerVolumeConfiguration {
    /**
     * The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a task are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as shared persist after the task stops.
     */
    scope?: Scope;
    /**
     * If this value is true, the Docker volume is created if it does not already exist.  This field is only used if the scope is shared. 
     */
    autoprovision?: BoxedBoolean;
    /**
     * The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use docker plugin ls to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. For more information, see Docker plugin discovery. This parameter maps to Driver in the Create a volume section of the Docker Remote API and the xxdriver option to docker volume create.
     */
    driver?: String;
    /**
     * A map of Docker driver-specific options passed through. This parameter maps to DriverOpts in the Create a volume section of the Docker Remote API and the xxopt option to docker volume create.
     */
    driverOpts?: StringMap;
    /**
     * Custom metadata to add to your Docker volume. This parameter maps to Labels in the Create a volume section of the Docker Remote API and the xxlabel option to docker volume create.
     */
    labels?: StringMap;
  }
  export type Double = number;
  export type EnvironmentVariables = KeyValuePair[];
  export interface Failure {
    /**
     * The Amazon Resource Name (ARN) of the failed resource.
     */
    arn?: String;
    /**
     * The reason for the failure.
     */
    reason?: String;
  }
  export type Failures = Failure[];
  export type GpuIds = String[];
  export interface HealthCheck {
    /**
     * A string array representing the command that the container runs to determine if it is healthy. The string array must start with CMD to execute the command arguments directly, or CMD-SHELL to run the command with the container's default shell. For example:  [ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]  An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see HealthCheck in the Create a container section of the Docker Remote API.
     */
    command: StringList;
    /**
     * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
     */
    interval?: BoxedInteger;
    /**
     * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5.
     */
    timeout?: BoxedInteger;
    /**
     * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3.
     */
    retries?: BoxedInteger;
    /**
     * The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.  If a health check succeeds within the startPeriod, then the container is considered healthy and any subsequent failures count toward the maximum number of retries. 
     */
    startPeriod?: BoxedInteger;
  }
  export type HealthStatus = "HEALTHY"|"UNHEALTHY"|"UNKNOWN";
  export interface HostEntry {
    /**
     * The hostname to use in the /etc/hosts entry.
     */
    hostname: String;
    /**
     * The IP address to use in the /etc/hosts entry.
     */
    ipAddress: String;
  }
  export type HostEntryList = HostEntry[];
  export interface HostVolumeProperties {
    /**
     * When the host parameter is used, specify a sourcePath to declare the path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported. If you are using the Fargate launch type, the sourcePath parameter is not supported.
     */
    sourcePath?: String;
  }
  export type Integer = number;
  export type IpcMode = "host"|"task"|"none";
  export interface KernelCapabilities {
    /**
     * The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to CapAdd in the Create a container section of the Docker Remote API and the --cap-add option to docker run.  If you are using tasks that use the Fargate launch type, the add parameter is not supported.  Valid values: "ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM" 
     */
    add?: StringList;
    /**
     * The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to CapDrop in the Create a container section of the Docker Remote API and the --cap-drop option to docker run. Valid values: "ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM" 
     */
    drop?: StringList;
  }
  export interface KeyValuePair {
    /**
     * The name of the key-value pair. For environment variables, this is the name of the environment variable.
     */
    name?: String;
    /**
     * The value of the key-value pair. For environment variables, this is the value of the environment variable.
     */
    value?: String;
  }
  export type LaunchType = "EC2"|"FARGATE";
  export interface LinuxParameters {
    /**
     * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.  If you are using tasks that use the Fargate launch type, capabilities is supported but the add parameter is not supported. 
     */
    capabilities?: KernelCapabilities;
    /**
     * Any host devices to expose to the container. This parameter maps to Devices in the Create a container section of the Docker Remote API and the --device option to docker run.  If you are using tasks that use the Fargate launch type, the devices parameter is not supported. 
     */
    devices?: DevicesList;
    /**
     * Run an init process inside the container that forwards signals and reaps processes. This parameter maps to the --init option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}' 
     */
    initProcessEnabled?: BoxedBoolean;
    /**
     * The value for the size (in MiB) of the /dev/shm volume. This parameter maps to the --shm-size option to docker run.  If you are using tasks that use the Fargate launch type, the sharedMemorySize parameter is not supported. 
     */
    sharedMemorySize?: BoxedInteger;
    /**
     * The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the --tmpfs option to docker run.  If you are using tasks that use the Fargate launch type, the tmpfs parameter is not supported. 
     */
    tmpfs?: TmpfsList;
    /**
     * The total amount of swap memory (in MiB) a container can use. This parameter will be translated to the --memory-swap option to docker run where the value would be the sum of the container memory plus the maxSwap value. If a maxSwap value of 0 is specified, the container will not use swap. Accepted values are 0 or any positive integer. If the maxSwap parameter is omitted, the container will use the swap configuration for the container instance it is running on. A maxSwap value must be set for the swappiness parameter to be used.  If you are using tasks that use the Fargate launch type, the maxSwap parameter is not supported. 
     */
    maxSwap?: BoxedInteger;
    /**
     * This allows you to tune a container's memory swappiness behavior. A swappiness value of 0 will cause swapping to not happen unless absolutely necessary. A swappiness value of 100 will cause pages to be swapped very aggressively. Accepted values are whole numbers between 0 and 100. If the swappiness parameter is not specified, a default value of 60 is used. If a value is not specified for maxSwap then this parameter is ignored. This parameter maps to the --memory-swappiness option to docker run.  If you are using tasks that use the Fargate launch type, the swappiness parameter is not supported. 
     */
    swappiness?: BoxedInteger;
  }
  export interface ListAccountSettingsRequest {
    /**
     * The resource name you want to list the account settings for.
     */
    name?: SettingName;
    /**
     * The value of the account settings with which to filter results. You must also specify an account setting name to use this parameter.
     */
    value?: String;
    /**
     * The ARN of the principal, which can be an IAM user, IAM role, or the root user. If this field is omitted, the account settings are listed only for the authenticated user.
     */
    principalArn?: String;
    /**
     * Specifies whether to return the effective settings. If true, the account settings for the root user or the default setting for the principalArn are returned. If false, the account settings for the principalArn are returned if they are set. Otherwise, no account settings are returned.
     */
    effectiveSettings?: Boolean;
    /**
     * The nextToken value returned from a previous paginated ListAccountSettings request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of account setting results returned by ListAccountSettings in paginated output. When this parameter is used, ListAccountSettings only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListAccountSettings request with the returned nextToken value. This value can be between 1 and 10. If this parameter is not used, then ListAccountSettings returns up to 10 results and a nextToken value if applicable.
     */
    maxResults?: Integer;
  }
  export interface ListAccountSettingsResponse {
    /**
     * The account settings for the resource.
     */
    settings?: Settings;
    /**
     * The nextToken value to include in a future ListAccountSettings request. When the results of a ListAccountSettings request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListAttributesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster to list attributes. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The type of the target with which to list attributes.
     */
    targetType: TargetType;
    /**
     * The name of the attribute with which to filter the results. 
     */
    attributeName?: String;
    /**
     * The value of the attribute with which to filter results. You must also specify an attribute name to use this parameter.
     */
    attributeValue?: String;
    /**
     * The nextToken value returned from a previous paginated ListAttributes request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of cluster results returned by ListAttributes in paginated output. When this parameter is used, ListAttributes only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListAttributes request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListAttributes returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListAttributesResponse {
    /**
     * A list of attribute objects that meet the criteria of the request.
     */
    attributes?: Attributes;
    /**
     * The nextToken value to include in a future ListAttributes request. When the results of a ListAttributes request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListClustersRequest {
    /**
     * The nextToken value returned from a previous paginated ListClusters request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of cluster results returned by ListClusters in paginated output. When this parameter is used, ListClusters only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListClusters returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListClustersResponse {
    /**
     * The list of full Amazon Resource Name (ARN) entries for each cluster associated with your account.
     */
    clusterArns?: StringList;
    /**
     * The nextToken value to include in a future ListClusters request. When the results of a ListClusters request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListContainerInstancesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to list. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * You can filter the results of a ListContainerInstances operation with cluster query language statements. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
     */
    filter?: String;
    /**
     * The nextToken value returned from a previous paginated ListContainerInstances request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of container instance results returned by ListContainerInstances in paginated output. When this parameter is used, ListContainerInstances only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListContainerInstances request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListContainerInstances returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
    /**
     * Filters the container instances by status. For example, if you specify the DRAINING status, the results include only container instances that have been set to DRAINING using UpdateContainerInstancesState. If you do not specify this parameter, the default is to include container instances set to all states other than INACTIVE.
     */
    status?: ContainerInstanceStatus;
  }
  export interface ListContainerInstancesResponse {
    /**
     * The list of container instances with full ARN entries for each container instance associated with the specified cluster.
     */
    containerInstanceArns?: StringList;
    /**
     * The nextToken value to include in a future ListContainerInstances request. When the results of a ListContainerInstances request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListServicesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the services to list. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The nextToken value returned from a previous paginated ListServices request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of service results returned by ListServices in paginated output. When this parameter is used, ListServices only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListServices request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListServices returns up to 10 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
    /**
     * The launch type for the services to list.
     */
    launchType?: LaunchType;
    /**
     * The scheduling strategy for services to list.
     */
    schedulingStrategy?: SchedulingStrategy;
  }
  export interface ListServicesResponse {
    /**
     * The list of full ARN entries for each service associated with the specified cluster.
     */
    serviceArns?: StringList;
    /**
     * The nextToken value to include in a future ListServices request. When the results of a ListServices request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon ECS tasks, services, task definitions, clusters, and container instances.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags for the resource.
     */
    tags?: Tags;
  }
  export interface ListTaskDefinitionFamiliesRequest {
    /**
     * The familyPrefix is a string that is used to filter the results of ListTaskDefinitionFamilies. If you specify a familyPrefix, only task definition family names that begin with the familyPrefix string are returned.
     */
    familyPrefix?: String;
    /**
     * The task definition family status with which to filter the ListTaskDefinitionFamilies results. By default, both ACTIVE and INACTIVE task definition families are listed. If this parameter is set to ACTIVE, only task definition families that have an ACTIVE task definition revision are returned. If this parameter is set to INACTIVE, only task definition families that do not have any ACTIVE task definition revisions are returned. If you paginate the resulting output, be sure to keep the status value constant in each subsequent request.
     */
    status?: TaskDefinitionFamilyStatus;
    /**
     * The nextToken value returned from a previous paginated ListTaskDefinitionFamilies request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of task definition family results returned by ListTaskDefinitionFamilies in paginated output. When this parameter is used, ListTaskDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTaskDefinitionFamilies request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListTaskDefinitionFamilies returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListTaskDefinitionFamiliesResponse {
    /**
     * The list of task definition family names that match the ListTaskDefinitionFamilies request.
     */
    families?: StringList;
    /**
     * The nextToken value to include in a future ListTaskDefinitionFamilies request. When the results of a ListTaskDefinitionFamilies request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTaskDefinitionsRequest {
    /**
     * The full family name with which to filter the ListTaskDefinitions results. Specifying a familyPrefix limits the listed task definitions to task definition revisions that belong to that family.
     */
    familyPrefix?: String;
    /**
     * The task definition status with which to filter the ListTaskDefinitions results. By default, only ACTIVE task definitions are listed. By setting this parameter to INACTIVE, you can view task definitions that are INACTIVE as long as an active task or service still references them. If you paginate the resulting output, be sure to keep the status value constant in each subsequent request.
     */
    status?: TaskDefinitionStatus;
    /**
     * The order in which to sort the results. Valid values are ASC and DESC. By default (ASC), task definitions are listed lexicographically by family name and in ascending numerical order by revision so that the newest task definitions in a family are listed last. Setting this parameter to DESC reverses the sort order on family name and revision so that the newest task definitions in a family are listed first.
     */
    sort?: SortOrder;
    /**
     * The nextToken value returned from a previous paginated ListTaskDefinitions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of task definition results returned by ListTaskDefinitions in paginated output. When this parameter is used, ListTaskDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTaskDefinitions request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListTaskDefinitions returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
  }
  export interface ListTaskDefinitionsResponse {
    /**
     * The list of task definition Amazon Resource Name (ARN) entries for the ListTaskDefinitions request.
     */
    taskDefinitionArns?: StringList;
    /**
     * The nextToken value to include in a future ListTaskDefinitions request. When the results of a ListTaskDefinitions request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTasksRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the tasks to list. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The container instance ID or full ARN of the container instance with which to filter the ListTasks results. Specifying a containerInstance limits the results to tasks that belong to that container instance.
     */
    containerInstance?: String;
    /**
     * The name of the family with which to filter the ListTasks results. Specifying a family limits the results to tasks that belong to that family.
     */
    family?: String;
    /**
     * The nextToken value returned from a previous paginated ListTasks request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The maximum number of task results returned by ListTasks in paginated output. When this parameter is used, ListTasks only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTasks request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListTasks returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: BoxedInteger;
    /**
     * The startedBy value with which to filter the task results. Specifying a startedBy value limits the results to tasks that were started with that value.
     */
    startedBy?: String;
    /**
     * The name of the service with which to filter the ListTasks results. Specifying a serviceName limits the results to tasks that belong to that service.
     */
    serviceName?: String;
    /**
     * The task desired status with which to filter the ListTasks results. Specifying a desiredStatus of STOPPED limits the results to tasks that Amazon ECS has set the desired status to STOPPED. This can be useful for debugging tasks that are not starting properly or have died or finished. The default status filter is RUNNING, which shows tasks that Amazon ECS has set the desired status to RUNNING.  Although you can filter results based on a desired status of PENDING, this does not return any results. Amazon ECS never sets the desired status of a task to that value (only a task's lastStatus may have a value of PENDING). 
     */
    desiredStatus?: DesiredStatus;
    /**
     * The launch type for services to list.
     */
    launchType?: LaunchType;
  }
  export interface ListTasksResponse {
    /**
     * The list of task ARN entries for the ListTasks request.
     */
    taskArns?: StringList;
    /**
     * The nextToken value to include in a future ListTasks request. When the results of a ListTasks request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface LoadBalancer {
    /**
     * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an application load balancer or a network load balancer. If you are using a classic load balancer this should be omitted. For services using the ECS deployment controller, you are limited to one target group. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer.  If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance. 
     */
    targetGroupArn?: String;
    /**
     * The name of the load balancer to associate with the Amazon ECS service or task set. A load balancer name is only specified when using a classic load balancer. If you are using an application load balancer or a network load balancer this should be omitted.
     */
    loadBalancerName?: String;
    /**
     * The name of the container (as it appears in a container definition) to associate with the load balancer.
     */
    containerName?: String;
    /**
     * The port on the container to associate with the load balancer. This port must correspond to a containerPort in the service's task definition. Your container instances must allow ingress traffic on the hostPort of the port mapping.
     */
    containerPort?: BoxedInteger;
  }
  export type LoadBalancers = LoadBalancer[];
  export interface LogConfiguration {
    /**
     * The log driver to use for the container. The valid values listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default. For tasks using the Fargate launch type, the supported log drivers are awslogs and splunk. For tasks using the EC2 launch type, the supported log drivers are awslogs, fluentd, gelf, json-file, journald, logentries, syslog, splunk, and syslog. For more information about using the awslogs log driver, see Using the awslogs Log Driver in the Amazon Elastic Container Service Developer Guide.  If you have a custom driver that is not listed above that you would like to work with the Amazon ECS container agent, you can fork the Amazon ECS container agent project that is available on GitHub and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, Amazon Web Services does not currently support running modified copies of this software.  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}' 
     */
    logDriver: LogDriver;
    /**
     * The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version --format '{{.Server.APIVersion}}' 
     */
    options?: LogConfigurationOptionsMap;
    /**
     * The secrets to pass to the log configuration.
     */
    secretOptions?: SecretList;
  }
  export type LogConfigurationOptionsMap = {[key: string]: String};
  export type LogDriver = "json-file"|"syslog"|"journald"|"gelf"|"fluentd"|"awslogs"|"splunk";
  export type Long = number;
  export interface MountPoint {
    /**
     * The name of the volume to mount. Must be a volume name referenced in the name parameter of task definition volume.
     */
    sourceVolume?: String;
    /**
     * The path on the container to mount the host volume at.
     */
    containerPath?: String;
    /**
     * If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false.
     */
    readOnly?: BoxedBoolean;
  }
  export type MountPointList = MountPoint[];
  export interface NetworkBinding {
    /**
     * The IP address that the container is bound to on the container instance.
     */
    bindIP?: String;
    /**
     * The port number on the container that is used with the network binding.
     */
    containerPort?: BoxedInteger;
    /**
     * The port number on the host that is used with the network binding.
     */
    hostPort?: BoxedInteger;
    /**
     * The protocol used for the network binding.
     */
    protocol?: TransportProtocol;
  }
  export type NetworkBindings = NetworkBinding[];
  export interface NetworkConfiguration {
    /**
     * The VPC subnets and security groups associated with a task.  All specified subnets and security groups must be from the same VPC. 
     */
    awsvpcConfiguration?: AwsVpcConfiguration;
  }
  export interface NetworkInterface {
    /**
     * The attachment ID for the network interface.
     */
    attachmentId?: String;
    /**
     * The private IPv4 address for the network interface.
     */
    privateIpv4Address?: String;
    /**
     * The private IPv6 address for the network interface.
     */
    ipv6Address?: String;
  }
  export type NetworkInterfaces = NetworkInterface[];
  export type NetworkMode = "bridge"|"host"|"awsvpc"|"none";
  export type PidMode = "host"|"task";
  export interface PlacementConstraint {
    /**
     * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates. The value distinctInstance is not supported in task definitions.
     */
    type?: PlacementConstraintType;
    /**
     * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
     */
    expression?: String;
  }
  export type PlacementConstraintType = "distinctInstance"|"memberOf";
  export type PlacementConstraints = PlacementConstraint[];
  export type PlacementStrategies = PlacementStrategy[];
  export interface PlacementStrategy {
    /**
     * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
     */
    type?: PlacementStrategyType;
    /**
     * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
     */
    field?: String;
  }
  export type PlacementStrategyType = "random"|"spread"|"binpack";
  export interface PlatformDevice {
    /**
     * The ID for the GPU(s) on the container instance. The available GPU IDs can also be obtained on the container instance in the /var/lib/ecs/gpu/nvidia_gpu_info.json file.
     */
    id: String;
    /**
     * The type of device that is available on the container instance. The only supported value is GPU.
     */
    type: PlatformDeviceType;
  }
  export type PlatformDeviceType = "GPU";
  export type PlatformDevices = PlatformDevice[];
  export interface PortMapping {
    /**
     * The port number on the container that is bound to the user-specified or automatically assigned host port. If you are using containers in a task with the awsvpc or host network mode, exposed ports should be specified using containerPort. If you are using containers in a task with the bridge network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see hostPort. Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.  You cannot expose the same container port for multiple protocols. An error will be returned if this is attempted. 
     */
    containerPort?: BoxedInteger;
    /**
     * The port number on the container instance to reserve for your container. If you are using containers in a task with the awsvpc or host network mode, the hostPort can either be left blank or set to the same value as the containerPort. If you are using containers in a task with the bridge network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the hostPort (or set it to 0) while specifying a containerPort and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version. The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under /proc/sys/net/ipv4/ip_local_port_range. If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.  The default ephemeral port range from 49153 through 65535 is always used for Docker versions before 1.6.0.  The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running (after a task stops, the host port is released). The current reserved ports are displayed in the remainingResources of DescribeContainerInstances output. A container instance can have up to 100 reserved ports at a time, including the default reserved ports. Automatically assigned ports don't count toward the 100 reserved ports limit.
     */
    hostPort?: BoxedInteger;
    /**
     * The protocol used for the port mapping. Valid values are tcp and udp. The default is tcp.
     */
    protocol?: TransportProtocol;
  }
  export type PortMappingList = PortMapping[];
  export type PropagateTags = "TASK_DEFINITION"|"SERVICE";
  export interface ProxyConfiguration {
    /**
     * The proxy type. The only supported value is APPMESH.
     */
    type?: ProxyConfigurationType;
    /**
     * The name of the container that will serve as the App Mesh proxy.
     */
    containerName: String;
    /**
     * The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.    IgnoredUID - (Required) The user ID (UID) of the proxy container as defined by the user parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If IgnoredGID is specified, this field can be empty.    IgnoredGID - (Required) The group ID (GID) of the proxy container as defined by the user parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If IgnoredUID is specified, this field can be empty.    AppPorts - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the ProxyIngressPort and ProxyEgressPort.    ProxyIngressPort - (Required) Specifies the port that incoming traffic to the AppPorts is directed to.    ProxyEgressPort - (Required) Specifies the port that outgoing traffic from the AppPorts is directed to.    EgressIgnoredPorts - (Required) The egress traffic going to the specified ports is ignored and not redirected to the ProxyEgressPort. It can be an empty list.    EgressIgnoredIPs - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the ProxyEgressPort. It can be an empty list.  
     */
    properties?: ProxyConfigurationProperties;
  }
  export type ProxyConfigurationProperties = KeyValuePair[];
  export type ProxyConfigurationType = "APPMESH";
  export interface PutAccountSettingDefaultRequest {
    /**
     * The resource name for which to modify the account setting. If serviceLongArnFormat is specified, the ARN for your Amazon ECS services is affected. If taskLongArnFormat is specified, the ARN and resource ID for your Amazon ECS tasks is affected. If containerInstanceLongArnFormat is specified, the ARN and resource ID for your Amazon ECS container instances is affected. If awsvpcTrunking is specified, the ENI limit for your Amazon ECS container instances is affected. If containerInsights is specified, the default setting for CloudWatch Container Insights for your clusters is affected.
     */
    name: SettingName;
    /**
     * The account setting value for the specified principal ARN. Accepted values are enabled and disabled.
     */
    value: String;
  }
  export interface PutAccountSettingDefaultResponse {
    setting?: Setting;
  }
  export interface PutAccountSettingRequest {
    /**
     * The Amazon ECS resource name for which to modify the account setting. If serviceLongArnFormat is specified, the ARN for your Amazon ECS services is affected. If taskLongArnFormat is specified, the ARN and resource ID for your Amazon ECS tasks is affected. If containerInstanceLongArnFormat is specified, the ARN and resource ID for your Amazon ECS container instances is affected. If awsvpcTrunking is specified, the elastic network interface (ENI) limit for your Amazon ECS container instances is affected. If containerInsights is specified, the default setting for CloudWatch Container Insights for your clusters is affected.
     */
    name: SettingName;
    /**
     * The account setting value for the specified principal ARN. Accepted values are enabled and disabled.
     */
    value: String;
    /**
     * The ARN of the principal, which can be an IAM user, IAM role, or the root user. If you specify the root user, it modifies the account setting for all IAM users, IAM roles, and the root user of the account unless an IAM user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user.
     */
    principalArn?: String;
  }
  export interface PutAccountSettingResponse {
    /**
     * The current account setting for a resource.
     */
    setting?: Setting;
  }
  export interface PutAttributesRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply attributes. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The attributes to apply to your resource. You can specify up to 10 custom attributes per resource. You can specify up to 10 attributes in a single call.
     */
    attributes: Attributes;
  }
  export interface PutAttributesResponse {
    /**
     * The attributes applied to your resource.
     */
    attributes?: Attributes;
  }
  export interface RegisterContainerInstanceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster with which to register your container instance. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/document/ 
     */
    instanceIdentityDocument?: String;
    /**
     * The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/signature/ 
     */
    instanceIdentityDocumentSignature?: String;
    /**
     * The resources available on the instance.
     */
    totalResources?: Resources;
    /**
     * The version information for the Amazon ECS container agent and Docker daemon running on the container instance.
     */
    versionInfo?: VersionInfo;
    /**
     * The ARN of the container instance (if it was previously registered).
     */
    containerInstanceArn?: String;
    /**
     * The container instance attributes that this container instance supports.
     */
    attributes?: Attributes;
    /**
     * The devices that are available on the container instance. The only supported device type is a GPU.
     */
    platformDevices?: PlatformDevices;
    /**
     * The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
  }
  export interface RegisterContainerInstanceResponse {
    /**
     * The container instance that was registered.
     */
    containerInstance?: ContainerInstance;
  }
  export interface RegisterTaskDefinitionRequest {
    /**
     * You must specify a family for a task definition, which allows you to track multiple versions of the same task definition. The family is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.
     */
    family: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide.
     */
    taskRoleArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
     */
    executionRoleArn?: String;
    /**
     * The Docker networking mode to use for the containers in the task. The valid values are none, bridge, awsvpc, and host. The default Docker network mode is bridge. If you are using the Fargate launch type, the awsvpc network mode is required. If you are using the EC2 launch type, any network mode can be used. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The host and awsvpc network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the bridge mode. With the host and awsvpc network modes, exposed container ports are mapped directly to the corresponding host port (for the host network mode) or the attached elastic network interface port (for the awsvpc network mode), so you cannot take advantage of dynamic host port mappings.  If the network mode is awsvpc, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration value when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.  Currently, only Amazon ECS-optimized AMIs, other Amazon Linux variants with the ecs-init package, or AWS Fargate infrastructure support the awsvpc network mode.   If the network mode is host, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used. Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode. If you use the console to register a task definition with Windows containers, you must choose the &lt;default&gt; network mode object.  For more information, see Network settings in the Docker run reference.
     */
    networkMode?: NetworkMode;
    /**
     * A list of container definitions in JSON format that describe the different containers that make up your task.
     */
    containerDefinitions: ContainerDefinitions;
    /**
     * A list of volume definitions in JSON format that containers in your task may use.
     */
    volumes?: VolumeList;
    /**
     * An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at runtime).
     */
    placementConstraints?: TaskDefinitionPlacementConstraints;
    /**
     * The launch type required by the task. If no value is specified, it defaults to EC2.
     */
    requiresCompatibilities?: CompatibilityList;
    /**
     * The number of CPU units used by the task. It can be expressed as an integer using CPU units, for example 1024, or as a string using vCPUs, for example 1 vCPU or 1 vcpu, in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered.  Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.  If you are using the EC2 launch type, this field is optional. Supported values are between 128 CPU units (0.125 vCPUs) and 10240 CPU units (10 vCPUs). If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the memory parameter:   256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)   512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)   1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)   2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)   4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)  
     */
    cpu?: String;
    /**
     * The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB, for example 1024, or as a string using GB, for example 1GB or 1 GB, in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered.  Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.  If using the EC2 launch type, this field is optional. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the cpu parameter:   512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)   1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)   2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)   Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)   Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)  
     */
    memory?: String;
    /**
     * The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * The process namespace to use for the containers in the task. The valid values are host or task. If host is specified, then all containers within the tasks that specified the host PID mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same process namespace. If no value is specified, the default is a private namespace. For more information, see PID settings in the Docker run reference. If the host PID mode is used, be aware that there is a heightened risk of undesired process namespace expose. For more information, see Docker security.  This parameter is not supported for Windows containers or tasks using the Fargate launch type. 
     */
    pidMode?: PidMode;
    /**
     * The IPC resource namespace to use for the containers in the task. The valid values are host, task, or none. If host is specified, then all containers within the tasks that specified the host IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same IPC resources. If none is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. For more information, see IPC settings in the Docker run reference. If the host IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose. For more information, see Docker security. If you are setting namespaced kernel parameters using systemControls for the containers in the task, the following will apply to your IPC resource namespace. For more information, see System Controls in the Amazon Elastic Container Service Developer Guide.   For tasks that use the host IPC mode, IPC namespace related systemControls are not supported.   For tasks that use the task IPC mode, IPC namespace related systemControls will apply to all containers within a task.    This parameter is not supported for Windows containers or tasks using the Fargate launch type. 
     */
    ipcMode?: IpcMode;
    proxyConfiguration?: ProxyConfiguration;
  }
  export interface RegisterTaskDefinitionResponse {
    /**
     * The full description of the registered task definition.
     */
    taskDefinition?: TaskDefinition;
    /**
     * The list of tags associated with the task definition.
     */
    tags?: Tags;
  }
  export interface RepositoryCredentials {
    /**
     * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.  When you are using the Amazon ECS API, AWS CLI, or AWS SDK, if the secret exists in the same Region as the task that you are launching then you can use either the full ARN or the name of the secret. When you are using the AWS Management Console, you must specify the full ARN of the secret. 
     */
    credentialsParameter: String;
  }
  export type RequiresAttributes = Attribute[];
  export interface Resource {
    /**
     * The name of the resource, such as CPU, MEMORY, PORTS, PORTS_UDP, or a user-defined resource.
     */
    name?: String;
    /**
     * The type of the resource, such as INTEGER, DOUBLE, LONG, or STRINGSET.
     */
    type?: String;
    /**
     * When the doubleValue type is set, the value of the resource must be a double precision floating-point type.
     */
    doubleValue?: Double;
    /**
     * When the longValue type is set, the value of the resource must be an extended precision floating-point type.
     */
    longValue?: Long;
    /**
     * When the integerValue type is set, the value of the resource must be an integer.
     */
    integerValue?: Integer;
    /**
     * When the stringSetValue type is set, the value of the resource must be a string type.
     */
    stringSetValue?: StringList;
  }
  export interface ResourceRequirement {
    /**
     * The number of physical GPUs the Amazon ECS container agent will reserve for the container. The number of GPUs reserved for all containers in a task should not exceed the number of available GPUs on the container instance the task is launched on.
     */
    value: String;
    /**
     * The type of resource to assign to a container. The only supported value is GPU.
     */
    type: ResourceType;
  }
  export type ResourceRequirements = ResourceRequirement[];
  export type ResourceType = "GPU";
  export type Resources = Resource[];
  export interface RunTaskRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster on which to run your task. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The family and revision (family:revision) or full ARN of the task definition to run. If a revision is not specified, the latest ACTIVE revision is used.
     */
    taskDefinition: String;
    /**
     * A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a command override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an environment override.  A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure. 
     */
    overrides?: TaskOverride;
    /**
     * The number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks per call.
     */
    count?: BoxedInteger;
    /**
     * An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the startedBy parameter. You can then identify which tasks belong to that job by filtering the results of a ListTasks call with the startedBy value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. If a task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it.
     */
    startedBy?: String;
    /**
     * The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).
     */
    group?: String;
    /**
     * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
     */
    placementConstraints?: PlacementConstraints;
    /**
     * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
     */
    placementStrategy?: PlacementStrategies;
    /**
     * The launch type on which to run your task. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version the task should run. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * The network configuration for the task. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
     */
    enableECSManagedTags?: Boolean;
    /**
     * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.  An error will be received if you specify the SERVICE option when running a task. 
     */
    propagateTags?: PropagateTags;
  }
  export interface RunTaskResponse {
    /**
     * A full description of the tasks that were run. The tasks that were successfully placed on your cluster are described here.
     */
    tasks?: Tasks;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface Scale {
    /**
     * The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100.
     */
    value?: Double;
    /**
     * The unit of measure for the scale value.
     */
    unit?: ScaleUnit;
  }
  export type ScaleUnit = "PERCENT";
  export type SchedulingStrategy = "REPLICA"|"DAEMON";
  export type Scope = "task"|"shared";
  export interface Secret {
    /**
     * The name of the secret.
     */
    name: String;
    /**
     * The secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.  If the AWS Systems Manager Parameter Store parameter exists in the same Region as the task you are launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified. 
     */
    valueFrom: String;
  }
  export type SecretList = Secret[];
  export interface Service {
    /**
     * The ARN that identifies the service. The ARN contains the arn:aws:ecs namespace, followed by the Region of the service, the AWS account ID of the service owner, the service namespace, and then the service name. For example, arn:aws:ecs:region:012345678910:service/my-service.
     */
    serviceArn?: String;
    /**
     * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
     */
    serviceName?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster that hosts the service.
     */
    clusterArn?: String;
    /**
     * A list of Elastic Load Balancing load balancer objects, containing the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer. Services with tasks that use the awsvpc network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose ip as the target type, not instance. Tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.
     */
    loadBalancers?: LoadBalancers;
    /**
     * The details of the service discovery registries to assign to this service. For more information, see Service Discovery.
     */
    serviceRegistries?: ServiceRegistries;
    /**
     * The status of the service. The valid values are ACTIVE, DRAINING, or INACTIVE.
     */
    status?: String;
    /**
     * The desired number of instantiations of the task definition to keep running on the service. This value is specified when the service is created with CreateService, and it can be modified with UpdateService.
     */
    desiredCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the RUNNING state.
     */
    runningCount?: Integer;
    /**
     * The number of tasks in the cluster that are in the PENDING state.
     */
    pendingCount?: Integer;
    /**
     * The launch type on which your service is running. If no value is specified, it will default to EC2. Valid values include EC2 and FARGATE. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version on which to run your service. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * The task definition to use for tasks in the service. This value is specified when the service is created with CreateService, and it can be modified with UpdateService.
     */
    taskDefinition?: String;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: DeploymentConfiguration;
    /**
     * Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an EXTERNAL deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
     */
    taskSets?: TaskSets;
    /**
     * The current state of deployments for the service.
     */
    deployments?: Deployments;
    /**
     * The ARN of the IAM role associated with the service that allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.
     */
    roleArn?: String;
    /**
     * The event stream for your service. A maximum of 100 of the latest events are displayed.
     */
    events?: ServiceEvents;
    /**
     * The Unix timestamp for when the service was created.
     */
    createdAt?: Timestamp;
    /**
     * The placement constraints for the tasks in the service.
     */
    placementConstraints?: PlacementConstraints;
    /**
     * The placement strategy that determines how tasks for the service are placed.
     */
    placementStrategy?: PlacementStrategies;
    /**
     * The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the awsvpc networking mode.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.
     */
    healthCheckGracePeriodSeconds?: BoxedInteger;
    /**
     * The scheduling strategy to use for the service. For more information, see Services. There are two service scheduler strategies available:    REPLICA-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions.    DAEMON-The daemon scheduling strategy deploys exactly one task on each container instance in your cluster. When you are using this strategy, do not specify a desired number of tasks or any task placement strategies.  Fargate tasks do not support the DAEMON scheduling strategy.   
     */
    schedulingStrategy?: SchedulingStrategy;
    /**
     * The deployment controller type the service is using. When using the DescribeServices API, this field is omitted if the service is using the ECS deployment controller type.
     */
    deploymentController?: DeploymentController;
    /**
     * The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * The principal that created the service.
     */
    createdBy?: String;
    /**
     * Specifies whether to enable Amazon ECS managed tags for the tasks in the service. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
     */
    enableECSManagedTags?: Boolean;
    /**
     * Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags are not propagated.
     */
    propagateTags?: PropagateTags;
  }
  export interface ServiceEvent {
    /**
     * The ID string of the event.
     */
    id?: String;
    /**
     * The Unix timestamp for when the event was triggered.
     */
    createdAt?: Timestamp;
    /**
     * The event message.
     */
    message?: String;
  }
  export type ServiceEvents = ServiceEvent[];
  export type ServiceField = "TAGS";
  export type ServiceFieldList = ServiceField[];
  export type ServiceRegistries = ServiceRegistry[];
  export interface ServiceRegistry {
    /**
     * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see CreateService.
     */
    registryArn?: String;
    /**
     * The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.
     */
    port?: BoxedInteger;
    /**
     * The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
     */
    containerName?: String;
    /**
     * The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
     */
    containerPort?: BoxedInteger;
  }
  export type Services = Service[];
  export interface Setting {
    /**
     * The Amazon ECS resource name.
     */
    name?: SettingName;
    /**
     * Whether the account setting is enabled or disabled for the specified resource.
     */
    value?: String;
    /**
     * The ARN of the principal, which can be an IAM user, IAM role, or the root user. If this field is omitted, the authenticated user is assumed.
     */
    principalArn?: String;
  }
  export type SettingName = "serviceLongArnFormat"|"taskLongArnFormat"|"containerInstanceLongArnFormat"|"awsvpcTrunking"|"containerInsights";
  export type Settings = Setting[];
  export type SortOrder = "ASC"|"DESC";
  export type StabilityStatus = "STEADY_STATE"|"STABILIZING";
  export interface StartTaskRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster on which to start your task. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The family and revision (family:revision) or full ARN of the task definition to start. If a revision is not specified, the latest ACTIVE revision is used.
     */
    taskDefinition: String;
    /**
     * A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a command override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an environment override.  A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure. 
     */
    overrides?: TaskOverride;
    /**
     * The container instance IDs or full ARN entries for the container instances on which you would like to place your task. You can specify up to 10 container instances.
     */
    containerInstances: StringList;
    /**
     * An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the startedBy parameter. You can then identify which tasks belong to that job by filtering the results of a ListTasks call with the startedBy value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. If a task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it.
     */
    startedBy?: String;
    /**
     * The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).
     */
    group?: String;
    /**
     * The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the awsvpc networking mode.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
    /**
     * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
     */
    enableECSManagedTags?: Boolean;
    /**
     * Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags are not propagated.
     */
    propagateTags?: PropagateTags;
  }
  export interface StartTaskResponse {
    /**
     * A full description of the tasks that were started. Each task that was successfully placed on your container instances is described.
     */
    tasks?: Tasks;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export type Statistics = KeyValuePair[];
  export interface StopTaskRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The task ID or full Amazon Resource Name (ARN) of the task to stop.
     */
    task: String;
    /**
     * An optional message specified when a task is stopped. For example, if you are using a custom scheduler, you can use this parameter to specify the reason for stopping the task here, and the message appears in subsequent DescribeTasks API operations on this task. Up to 255 characters are allowed in this message.
     */
    reason?: String;
  }
  export interface StopTaskResponse {
    /**
     * The task that was stopped.
     */
    task?: Task;
  }
  export type String = string;
  export type StringList = String[];
  export type StringMap = {[key: string]: String};
  export interface SubmitAttachmentStateChangesRequest {
    /**
     * The short name or full ARN of the cluster that hosts the container instance the attachment belongs to.
     */
    cluster?: String;
    /**
     * Any attachments associated with the state change request.
     */
    attachments: AttachmentStateChanges;
  }
  export interface SubmitAttachmentStateChangesResponse {
    /**
     * Acknowledgement of the state change.
     */
    acknowledgment?: String;
  }
  export interface SubmitContainerStateChangeRequest {
    /**
     * The short name or full ARN of the cluster that hosts the container.
     */
    cluster?: String;
    /**
     * The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.
     */
    task?: String;
    /**
     * The name of the container.
     */
    containerName?: String;
    /**
     * The status of the state change request.
     */
    status?: String;
    /**
     * The exit code returned for the state change request.
     */
    exitCode?: BoxedInteger;
    /**
     * The reason for the state change request.
     */
    reason?: String;
    /**
     * The network bindings of the container.
     */
    networkBindings?: NetworkBindings;
  }
  export interface SubmitContainerStateChangeResponse {
    /**
     * Acknowledgement of the state change.
     */
    acknowledgment?: String;
  }
  export interface SubmitTaskStateChangeRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task.
     */
    cluster?: String;
    /**
     * The task ID or full ARN of the task in the state change request.
     */
    task?: String;
    /**
     * The status of the state change request.
     */
    status?: String;
    /**
     * The reason for the state change request.
     */
    reason?: String;
    /**
     * Any containers associated with the state change request.
     */
    containers?: ContainerStateChanges;
    /**
     * Any attachments associated with the state change request.
     */
    attachments?: AttachmentStateChanges;
    /**
     * The Unix timestamp for when the container image pull began.
     */
    pullStartedAt?: Timestamp;
    /**
     * The Unix timestamp for when the container image pull completed.
     */
    pullStoppedAt?: Timestamp;
    /**
     * The Unix timestamp for when the task execution stopped.
     */
    executionStoppedAt?: Timestamp;
  }
  export interface SubmitTaskStateChangeResponse {
    /**
     * Acknowledgement of the state change.
     */
    acknowledgment?: String;
  }
  export interface SystemControl {
    /**
     * The namespaced kernel parameter for which to set a value.
     */
    namespace?: String;
    /**
     * The value for the namespaced kernel parameter specified in namespace.
     */
    value?: String;
  }
  export type SystemControls = SystemControl[];
  export interface Tag {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     */
    key?: TagKey;
    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     */
    value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon ECS tasks, services, task definitions, clusters, and container instances.
     */
    resourceArn: String;
    /**
     * The tags to add to the resource. A tag is an array of key-value pairs. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export type TargetType = "container-instance";
  export interface Task {
    /**
     * The Amazon Resource Name (ARN) of the task.
     */
    taskArn?: String;
    /**
     * The ARN of the cluster that hosts the task.
     */
    clusterArn?: String;
    /**
     * The ARN of the task definition that creates the task.
     */
    taskDefinitionArn?: String;
    /**
     * The ARN of the container instances that host the task.
     */
    containerInstanceArn?: String;
    /**
     * One or more container overrides.
     */
    overrides?: TaskOverride;
    /**
     * The last known status of the task. For more information, see Task Lifecycle.
     */
    lastStatus?: String;
    /**
     * The desired status of the task. For more information, see Task Lifecycle.
     */
    desiredStatus?: String;
    /**
     * The number of CPU units used by the task as expressed in a task definition. It can be expressed as an integer using CPU units, for example 1024. It can also be expressed as a string using vCPUs, for example 1 vCPU or 1 vcpu. String values are converted to an integer indicating the CPU units when the task definition is registered. If you are using the EC2 launch type, this field is optional. Supported values are between 128 CPU units (0.125 vCPUs) and 10240 CPU units (10 vCPUs). If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the memory parameter:   256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)   512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)   1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)   2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)   4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)  
     */
    cpu?: String;
    /**
     * The amount of memory (in MiB) used by the task as expressed in a task definition. It can be expressed as an integer using MiB, for example 1024. It can also be expressed as a string using GB, for example 1GB or 1 GB. String values are converted to an integer indicating the MiB when the task definition is registered. If you are using the EC2 launch type, this field is optional. If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the cpu parameter:   512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)   1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)   2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)   Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)   Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)  
     */
    memory?: String;
    /**
     * The containers associated with the task.
     */
    containers?: Containers;
    /**
     * The tag specified when a task is started. If the task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it.
     */
    startedBy?: String;
    /**
     * The version counter for the task. Every time a task experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS task state with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS API actionss with the version reported in CloudWatch Events for the task (inside the detail object) to verify that the version in your event stream is current.
     */
    version?: Long;
    /**
     * The reason that the task was stopped.
     */
    stoppedReason?: String;
    /**
     * The stop code indicating why a task was stopped. The stoppedReason may contain additional details.
     */
    stopCode?: TaskStopCode;
    /**
     * The connectivity status of a task.
     */
    connectivity?: Connectivity;
    /**
     * The Unix timestamp for when the task last went into CONNECTED status.
     */
    connectivityAt?: Timestamp;
    /**
     * The Unix timestamp for when the container image pull began.
     */
    pullStartedAt?: Timestamp;
    /**
     * The Unix timestamp for when the container image pull completed.
     */
    pullStoppedAt?: Timestamp;
    /**
     * The Unix timestamp for when the task execution stopped.
     */
    executionStoppedAt?: Timestamp;
    /**
     * The Unix timestamp for when the task was created (the task entered the PENDING state).
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp for when the task started (the task transitioned from the PENDING state to the RUNNING state).
     */
    startedAt?: Timestamp;
    /**
     * The Unix timestamp for when the task stops (transitions from the RUNNING state to STOPPED).
     */
    stoppingAt?: Timestamp;
    /**
     * The Unix timestamp for when the task was stopped (the task transitioned from the RUNNING state to the STOPPED state).
     */
    stoppedAt?: Timestamp;
    /**
     * The name of the task group associated with the task.
     */
    group?: String;
    /**
     * The launch type on which your task is running. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version on which your task is running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * The Elastic Network Adapter associated with the task if the task uses the awsvpc network mode.
     */
    attachments?: Attachments;
    /**
     * The health status for the task, which is determined by the health of the essential containers in the task. If all essential containers in the task are reporting as HEALTHY, then the task status also reports as HEALTHY. If any essential containers in the task are reporting as UNHEALTHY or UNKNOWN, then the task status also reports as UNHEALTHY or UNKNOWN, accordingly.  The Amazon ECS container agent does not monitor or report on Docker health checks that are embedded in a container image (such as those specified in a parent image or from the image's Dockerfile) and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image. 
     */
    healthStatus?: HealthStatus;
    /**
     * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.  
     */
    tags?: Tags;
  }
  export interface TaskDefinition {
    /**
     * The full Amazon Resource Name (ARN) of the task definition.
     */
    taskDefinitionArn?: String;
    /**
     * A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide.
     */
    containerDefinitions?: ContainerDefinitions;
    /**
     * The name of a family that this task definition is registered to. A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.
     */
    family?: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see Amazon ECS Task Role in the Amazon Elastic Container Service Developer Guide. IAM roles for tasks on Windows require that the -EnableTaskIAMRole option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code in order to take advantage of the feature. For more information, see Windows IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide.
     */
    taskRoleArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the task execution role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.
     */
    executionRoleArn?: String;
    /**
     * The Docker networking mode to use for the containers in the task. The valid values are none, bridge, awsvpc, and host. The default Docker network mode is bridge. If you are using the Fargate launch type, the awsvpc network mode is required. If you are using the EC2 launch type, any network mode can be used. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The host and awsvpc network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the bridge mode. With the host and awsvpc network modes, exposed container ports are mapped directly to the corresponding host port (for the host network mode) or the attached elastic network interface port (for the awsvpc network mode), so you cannot take advantage of dynamic host port mappings.  If the network mode is awsvpc, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration value when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.  Currently, only Amazon ECS-optimized AMIs, other Amazon Linux variants with the ecs-init package, or AWS Fargate infrastructure support the awsvpc network mode.   If the network mode is host, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used. Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode. If you use the console to register a task definition with Windows containers, you must choose the &lt;default&gt; network mode object.  For more information, see Network settings in the Docker run reference.
     */
    networkMode?: NetworkMode;
    /**
     * The revision of the task in a particular family. The revision is a version number of a task definition in a family. When you register a task definition for the first time, the revision is 1. Each time that you register a new revision of a task definition in the same family, the revision value always increases by one, even if you have deregistered previous revisions in this family.
     */
    revision?: Integer;
    /**
     * The list of volume definitions for the task. If your tasks are using the Fargate launch type, the host and sourcePath parameters are not supported. For more information about volume definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide.
     */
    volumes?: VolumeList;
    /**
     * The status of the task definition.
     */
    status?: TaskDefinitionStatus;
    /**
     * The container instance attributes required by your task. This field is not valid if you are using the Fargate launch type for your task.
     */
    requiresAttributes?: RequiresAttributes;
    /**
     * An array of placement constraint objects to use for tasks. This field is not valid if you are using the Fargate launch type for your task.
     */
    placementConstraints?: TaskDefinitionPlacementConstraints;
    /**
     * The launch type to use with your task. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    compatibilities?: CompatibilityList;
    /**
     * The launch type the task requires. If no value is specified, it will default to EC2. Valid values include EC2 and FARGATE.
     */
    requiresCompatibilities?: CompatibilityList;
    /**
     * The number of cpu units used by the task. If you are using the EC2 launch type, this field is optional and any value can be used. If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the memory parameter:   256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)   512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)   1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)   2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)   4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)  
     */
    cpu?: String;
    /**
     * The amount (in MiB) of memory used by the task. If using the EC2 launch type, this field is optional and any value can be used. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the cpu parameter:   512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)   1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)   2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)   Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)   Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)  
     */
    memory?: String;
    /**
     * The process namespace to use for the containers in the task. The valid values are host or task. If host is specified, then all containers within the tasks that specified the host PID mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same process namespace. If no value is specified, the default is a private namespace. For more information, see PID settings in the Docker run reference. If the host PID mode is used, be aware that there is a heightened risk of undesired process namespace expose. For more information, see Docker security.  This parameter is not supported for Windows containers or tasks using the Fargate launch type. 
     */
    pidMode?: PidMode;
    /**
     * The IPC resource namespace to use for the containers in the task. The valid values are host, task, or none. If host is specified, then all containers within the tasks that specified the host IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same IPC resources. If none is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. For more information, see IPC settings in the Docker run reference. If the host IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose. For more information, see Docker security. If you are setting namespaced kernel parameters using systemControls for the containers in the task, the following will apply to your IPC resource namespace. For more information, see System Controls in the Amazon Elastic Container Service Developer Guide.   For tasks that use the host IPC mode, IPC namespace related systemControls are not supported.   For tasks that use the task IPC mode, IPC namespace related systemControls will apply to all containers within a task.    This parameter is not supported for Windows containers or tasks using the Fargate launch type. 
     */
    ipcMode?: IpcMode;
    /**
     * The configuration details for the App Mesh proxy. Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the ecs-init package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version 20190301 or later, then they contain the required versions of the container agent and ecs-init. For more information, see Amazon ECS-optimized Linux AMI in the Amazon Elastic Container Service Developer Guide.
     */
    proxyConfiguration?: ProxyConfiguration;
  }
  export type TaskDefinitionFamilyStatus = "ACTIVE"|"INACTIVE"|"ALL";
  export type TaskDefinitionField = "TAGS";
  export type TaskDefinitionFieldList = TaskDefinitionField[];
  export interface TaskDefinitionPlacementConstraint {
    /**
     * The type of constraint. The DistinctInstance constraint ensures that each task in a particular group is running on a different container instance. The MemberOf constraint restricts selection to be from a group of valid candidates.
     */
    type?: TaskDefinitionPlacementConstraintType;
    /**
     * A cluster query language expression to apply to the constraint. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
     */
    expression?: String;
  }
  export type TaskDefinitionPlacementConstraintType = "memberOf";
  export type TaskDefinitionPlacementConstraints = TaskDefinitionPlacementConstraint[];
  export type TaskDefinitionStatus = "ACTIVE"|"INACTIVE";
  export type TaskField = "TAGS";
  export type TaskFieldList = TaskField[];
  export interface TaskOverride {
    /**
     * One or more container overrides sent to a task.
     */
    containerOverrides?: ContainerOverrides;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.
     */
    taskRoleArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
     */
    executionRoleArn?: String;
  }
  export interface TaskSet {
    /**
     * The ID of the task set.
     */
    id?: String;
    /**
     * The Amazon Resource Name (ARN) of the task set.
     */
    taskSetArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the service the task set exists in.
     */
    serviceArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster that the service that hosts the task set exists in.
     */
    clusterArn?: String;
    /**
     * The tag specified when a task set is started. If the task set is created by an AWS CodeDeploy deployment, the startedBy parameter is CODE_DEPLOY. For a task set created for an external deployment, the startedBy field isn't used.
     */
    startedBy?: String;
    /**
     * The external ID associated with the task set. If a task set is created by an AWS CodeDeploy deployment, the externalId parameter contains the AWS CodeDeploy deployment ID. If a task set is created for an external deployment and is associated with a service discovery registry, the externalId parameter contains the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute.
     */
    externalId?: String;
    /**
     * The status of the task set. The following describes each state:  PRIMARY  The task set is serving production traffic.  ACTIVE  The task set is not serving production traffic.  DRAINING  The tasks in the task set are being stopped and their corresponding targets are being deregistered from their target group.  
     */
    status?: String;
    /**
     * The task definition the task set is using.
     */
    taskDefinition?: String;
    /**
     * The computed desired count for the task set. This is calculated by multiplying the service's desiredCount by the task set's scale percentage. The result is always rounded up. For example, if the computed desired count is 1.2, it rounds up to 2 tasks.
     */
    computedDesiredCount?: Integer;
    /**
     * The number of tasks in the task set that are in the PENDING status during a deployment. A task in the PENDING state is preparing to enter the RUNNING state. A task set enters the PENDING status when it launches for the first time or when it is restarted after being in the STOPPED state.
     */
    pendingCount?: Integer;
    /**
     * The number of tasks in the task set that are in the RUNNING status during a deployment. A task in the RUNNING state is running and ready for use.
     */
    runningCount?: Integer;
    /**
     * The Unix timestamp for when the task set was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp for when the task set was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The launch type the tasks in the task set are using. For more information, see Amazon ECS Launch Types in the Amazon Elastic Container Service Developer Guide.
     */
    launchType?: LaunchType;
    /**
     * The platform version on which the tasks in the task set are running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * The network configuration for the task set.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * Details on a load balancer that is used with a task set.
     */
    loadBalancers?: LoadBalancers;
    /**
     * The details of the service discovery registries to assign to this task set. For more information, see Service Discovery.
     */
    serviceRegistries?: ServiceRegistries;
    /**
     * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
     */
    scale?: Scale;
    /**
     * The stability status, which indicates whether the task set has reached a steady state. If the following conditions are met, the task set will be in STEADY_STATE:   The task runningCount is equal to the computedDesiredCount.   The pendingCount is 0.   There are no tasks running on container instances in the DRAINING status.   All tasks are reporting a healthy status from the load balancers, service discovery, and container health checks.   If any of those conditions are not met, the stability status returns STABILIZING.
     */
    stabilityStatus?: StabilityStatus;
    /**
     * The Unix timestamp for when the task set stability status was retrieved.
     */
    stabilityStatusAt?: Timestamp;
  }
  export type TaskSets = TaskSet[];
  export type TaskStopCode = "TaskFailedToStart"|"EssentialContainerExited"|"UserInitiated";
  export type Tasks = Task[];
  export type Timestamp = Date;
  export interface Tmpfs {
    /**
     * The absolute file path where the tmpfs volume is to be mounted.
     */
    containerPath: String;
    /**
     * The size (in MiB) of the tmpfs volume.
     */
    size: Integer;
    /**
     * The list of tmpfs volume mount options. Valid values: "defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol" 
     */
    mountOptions?: StringList;
  }
  export type TmpfsList = Tmpfs[];
  export type TransportProtocol = "tcp"|"udp";
  export interface Ulimit {
    /**
     * The type of the ulimit.
     */
    name: UlimitName;
    /**
     * The soft limit for the ulimit type.
     */
    softLimit: Integer;
    /**
     * The hard limit for the ulimit type.
     */
    hardLimit: Integer;
  }
  export type UlimitList = Ulimit[];
  export type UlimitName = "core"|"cpu"|"data"|"fsize"|"locks"|"memlock"|"msgqueue"|"nice"|"nofile"|"nproc"|"rss"|"rtprio"|"rttime"|"sigpending"|"stack";
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon ECS tasks, services, task definitions, clusters, and container instances.
     */
    resourceArn: String;
    /**
     * The keys of the tags to be removed.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateContainerAgentRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is running on. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The container instance ID or full ARN entries for the container instance on which you would like to update the Amazon ECS container agent.
     */
    containerInstance: String;
  }
  export interface UpdateContainerAgentResponse {
    /**
     * The container instance for which the container agent was updated.
     */
    containerInstance?: ContainerInstance;
  }
  export interface UpdateContainerInstancesStateRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to update. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * A list of container instance IDs or full ARN entries.
     */
    containerInstances: StringList;
    /**
     * The container instance state with which to update the container instance. The only valid values for this action are ACTIVE and DRAINING. A container instance can only be updated to DRAINING status once it has reached an ACTIVE state. If a container instance is in REGISTERING, DEREGISTERING, or REGISTRATION_FAILED state you can describe the container instance but will be unable to update the container instance state.
     */
    status: ContainerInstanceStatus;
  }
  export interface UpdateContainerInstancesStateResponse {
    /**
     * The list of container instances.
     */
    containerInstances?: ContainerInstances;
    /**
     * Any failures associated with the call.
     */
    failures?: Failures;
  }
  export interface UpdateServicePrimaryTaskSetRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.
     */
    cluster: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.
     */
    service: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the deployment.
     */
    primaryTaskSet: String;
  }
  export interface UpdateServicePrimaryTaskSetResponse {
    taskSet?: TaskSet;
  }
  export interface UpdateServiceRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that your service is running on. If you do not specify a cluster, the default cluster is assumed.
     */
    cluster?: String;
    /**
     * The name of the service to update.
     */
    service: String;
    /**
     * The number of instantiations of the task to place and keep running in your service.
     */
    desiredCount?: BoxedInteger;
    /**
     * The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used. If you modify the task definition with UpdateService, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running.
     */
    taskDefinition?: String;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: DeploymentConfiguration;
    /**
     * The network configuration for the service. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide.  Updating a service to add a subnet to a list of existing subnets does not trigger a service deployment. For example, if your network configuration change is to keep the existing subnets and simply add another subnet to the network configuration, this does not trigger a new service deployment. 
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * The platform version on which your tasks in the service are running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the LATEST platform version is used by default. For more information, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    platformVersion?: String;
    /**
     * Whether to force a new deployment of the service. Deployments are not forced by default. You can use this option to trigger a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (my_image:latest) or to roll Fargate tasks onto a newer platform version.
     */
    forceNewDeployment?: Boolean;
    /**
     * The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 1,800 seconds. During that time, the ECS service scheduler ignores the Elastic Load Balancing health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.
     */
    healthCheckGracePeriodSeconds?: BoxedInteger;
  }
  export interface UpdateServiceResponse {
    /**
     * The full description of your service following the update call.
     */
    service?: Service;
  }
  export interface UpdateTaskSetRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.
     */
    cluster: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.
     */
    service: String;
    /**
     * The short name or full Amazon Resource Name (ARN) of the task set to update.
     */
    taskSet: String;
    scale: Scale;
  }
  export interface UpdateTaskSetResponse {
    taskSet?: TaskSet;
  }
  export interface VersionInfo {
    /**
     * The version number of the Amazon ECS container agent.
     */
    agentVersion?: String;
    /**
     * The Git commit hash for the Amazon ECS container agent build on the amazon-ecs-agent  GitHub repository.
     */
    agentHash?: String;
    /**
     * The Docker version running on the container instance.
     */
    dockerVersion?: String;
  }
  export interface Volume {
    /**
     * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This name is referenced in the sourceVolume parameter of container definition mountPoints.
     */
    name?: String;
    /**
     * This parameter is specified when you are using bind mount host volumes. Bind mount host volumes are supported when you are using either the EC2 or Fargate launch types. The contents of the host parameter determine whether your bind mount host volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data is not guaranteed to persist after the containers associated with it stop running. Windows containers can mount whole directories on the same drive as $env:ProgramData. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives. For example, you can mount C:\my\path:C:\my\path and D:\:D:\, but not D:\my\path:C:\my\path or D:\:C:\my\path.
     */
    host?: HostVolumeProperties;
    /**
     * This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the local driver. To use bind mounts, specify a host instead.
     */
    dockerVolumeConfiguration?: DockerVolumeConfiguration;
  }
  export interface VolumeFrom {
    /**
     * The name of another container within the same task definition from which to mount volumes.
     */
    sourceContainer?: String;
    /**
     * If this value is true, the container has read-only access to the volume. If this value is false, then the container can write to the volume. The default value is false.
     */
    readOnly?: BoxedBoolean;
  }
  export type VolumeFromList = VolumeFrom[];
  export type VolumeList = Volume[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-13"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ECS client.
   */
  export import Types = ECS;
}
export = ECS;
