import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class Lambda extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Lambda.Types.ClientConfiguration)
  config: Config & Lambda.Types.ClientConfiguration;
  /**
   * Adds permissions to the resource-based policy of a version of an AWS Lambda layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.
   */
  addLayerVersionPermission(params: Lambda.Types.AddLayerVersionPermissionRequest, callback?: (err: AWSError, data: Lambda.Types.AddLayerVersionPermissionResponse) => void): Request<Lambda.Types.AddLayerVersionPermissionResponse, AWSError>;
  /**
   * Adds permissions to the resource-based policy of a version of an AWS Lambda layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.
   */
  addLayerVersionPermission(callback?: (err: AWSError, data: Lambda.Types.AddLayerVersionPermissionResponse) => void): Request<Lambda.Types.AddLayerVersionPermissionResponse, AWSError>;
  /**
   * Grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. To grant permission to another account, specify the account ID as the Principal. For AWS services, the principal is a domain-style identifier defined by the service, like s3.amazonaws.com or sns.amazonaws.com. For AWS services, you can also specify the ARN or owning account of the associated resource as the SourceArn or SourceAccount. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function. This action adds a statement to a resource-based permission policy for the function. For more information about function policies, see Lambda Function Policies. 
   */
  addPermission(params: Lambda.Types.AddPermissionRequest, callback?: (err: AWSError, data: Lambda.Types.AddPermissionResponse) => void): Request<Lambda.Types.AddPermissionResponse, AWSError>;
  /**
   * Grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. To grant permission to another account, specify the account ID as the Principal. For AWS services, the principal is a domain-style identifier defined by the service, like s3.amazonaws.com or sns.amazonaws.com. For AWS services, you can also specify the ARN or owning account of the associated resource as the SourceArn or SourceAccount. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function. This action adds a statement to a resource-based permission policy for the function. For more information about function policies, see Lambda Function Policies. 
   */
  addPermission(callback?: (err: AWSError, data: Lambda.Types.AddPermissionResponse) => void): Request<Lambda.Types.AddPermissionResponse, AWSError>;
  /**
   * Creates an alias for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version. You can also map an alias to split invocation requests between two versions. Use the RoutingConfig parameter to specify a second version and the percentage of invocation requests that it receives.
   */
  createAlias(params: Lambda.Types.CreateAliasRequest, callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Creates an alias for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version. You can also map an alias to split invocation requests between two versions. Use the RoutingConfig parameter to specify a second version and the percentage of invocation requests that it receives.
   */
  createAlias(callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function. For details about each event source type, see the following topics.    Using AWS Lambda with Amazon Kinesis     Using AWS Lambda with Amazon SQS     Using AWS Lambda with Amazon DynamoDB   
   */
  createEventSourceMapping(params: Lambda.Types.CreateEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function. For details about each event source type, see the following topics.    Using AWS Lambda with Amazon Kinesis     Using AWS Lambda with Amazon SQS     Using AWS Lambda with Amazon DynamoDB   
   */
  createEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing. A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the Publish parameter to create version 1 of your function from its initial configuration. The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with UpdateFunctionConfiguration. Function-level settings apply to both the unpublished and published versions of the function, and include tags (TagResource) and per-function concurrency limits (PutFunctionConcurrency). If another account or an AWS service invokes your function, use AddPermission to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias. To invoke your function directly, use Invoke. To invoke your function in response to events in other AWS services, create an event source mapping (CreateEventSourceMapping), or configure a function trigger in the other service. For more information, see Invoking Functions.
   */
  createFunction(params: Lambda.Types.CreateFunctionRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing. A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the Publish parameter to create version 1 of your function from its initial configuration. The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with UpdateFunctionConfiguration. Function-level settings apply to both the unpublished and published versions of the function, and include tags (TagResource) and per-function concurrency limits (PutFunctionConcurrency). If another account or an AWS service invokes your function, use AddPermission to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias. To invoke your function directly, use Invoke. To invoke your function in response to events in other AWS services, create an event source mapping (CreateEventSourceMapping), or configure a function trigger in the other service. For more information, see Invoking Functions.
   */
  createFunction(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Deletes a Lambda function alias.
   */
  deleteAlias(params: Lambda.Types.DeleteAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Lambda function alias.
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.
   */
  deleteEventSourceMapping(params: Lambda.Types.DeleteEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Deletes an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.
   */
  deleteEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. To delete Lambda event source mappings that invoke a function, use DeleteEventSourceMapping. For AWS services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.
   */
  deleteFunction(params: Lambda.Types.DeleteFunctionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. To delete Lambda event source mappings that invoke a function, use DeleteEventSourceMapping. For AWS services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.
   */
  deleteFunction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a concurrent execution limit from a function.
   */
  deleteFunctionConcurrency(params: Lambda.Types.DeleteFunctionConcurrencyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a concurrent execution limit from a function.
   */
  deleteFunctionConcurrency(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a version of an AWS Lambda layer. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
   */
  deleteLayerVersion(params: Lambda.Types.DeleteLayerVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a version of an AWS Lambda layer. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
   */
  deleteLayerVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves details about your account's limits and usage in an AWS Region.
   */
  getAccountSettings(params: Lambda.Types.GetAccountSettingsRequest, callback?: (err: AWSError, data: Lambda.Types.GetAccountSettingsResponse) => void): Request<Lambda.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Retrieves details about your account's limits and usage in an AWS Region.
   */
  getAccountSettings(callback?: (err: AWSError, data: Lambda.Types.GetAccountSettingsResponse) => void): Request<Lambda.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Returns details about a Lambda function alias.
   */
  getAlias(params: Lambda.Types.GetAliasRequest, callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Returns details about a Lambda function alias.
   */
  getAlias(callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Returns details about an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.
   */
  getEventSourceMapping(params: Lambda.Types.GetEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Returns details about an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.
   */
  getEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
   */
  getFunction(params: Lambda.Types.GetFunctionRequest, callback?: (err: AWSError, data: Lambda.Types.GetFunctionResponse) => void): Request<Lambda.Types.GetFunctionResponse, AWSError>;
  /**
   * Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
   */
  getFunction(callback?: (err: AWSError, data: Lambda.Types.GetFunctionResponse) => void): Request<Lambda.Types.GetFunctionResponse, AWSError>;
  /**
   * Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use UpdateFunctionConfiguration. To get all of a function's details, including function-level settings, use GetFunction.
   */
  getFunctionConfiguration(params: Lambda.Types.GetFunctionConfigurationRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use UpdateFunctionConfiguration. To get all of a function's details, including function-level settings, use GetFunction.
   */
  getFunctionConfiguration(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Returns information about a version of an AWS Lambda layer, with a link to download the layer archive that's valid for 10 minutes.
   */
  getLayerVersion(params: Lambda.Types.GetLayerVersionRequest, callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionResponse) => void): Request<Lambda.Types.GetLayerVersionResponse, AWSError>;
  /**
   * Returns information about a version of an AWS Lambda layer, with a link to download the layer archive that's valid for 10 minutes.
   */
  getLayerVersion(callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionResponse) => void): Request<Lambda.Types.GetLayerVersionResponse, AWSError>;
  /**
   * Returns information about a version of an AWS Lambda layer, with a link to download the layer archive that's valid for 10 minutes.
   */
  getLayerVersionByArn(params: Lambda.Types.GetLayerVersionByArnRequest, callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionResponse) => void): Request<Lambda.Types.GetLayerVersionResponse, AWSError>;
  /**
   * Returns information about a version of an AWS Lambda layer, with a link to download the layer archive that's valid for 10 minutes.
   */
  getLayerVersionByArn(callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionResponse) => void): Request<Lambda.Types.GetLayerVersionResponse, AWSError>;
  /**
   * Returns the permission policy for a version of an AWS Lambda layer. For more information, see AddLayerVersionPermission.
   */
  getLayerVersionPolicy(params: Lambda.Types.GetLayerVersionPolicyRequest, callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionPolicyResponse) => void): Request<Lambda.Types.GetLayerVersionPolicyResponse, AWSError>;
  /**
   * Returns the permission policy for a version of an AWS Lambda layer. For more information, see AddLayerVersionPermission.
   */
  getLayerVersionPolicy(callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionPolicyResponse) => void): Request<Lambda.Types.GetLayerVersionPolicyResponse, AWSError>;
  /**
   * Returns the resource-based IAM policy for a function, version, or alias.
   */
  getPolicy(params: Lambda.Types.GetPolicyRequest, callback?: (err: AWSError, data: Lambda.Types.GetPolicyResponse) => void): Request<Lambda.Types.GetPolicyResponse, AWSError>;
  /**
   * Returns the resource-based IAM policy for a function, version, or alias.
   */
  getPolicy(callback?: (err: AWSError, data: Lambda.Types.GetPolicyResponse) => void): Request<Lambda.Types.GetPolicyResponse, AWSError>;
  /**
   * Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set InvocationType to Event. For synchronous invocation, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the execution log and trace. To record function errors for asynchronous invocations, configure your function with a dead letter queue. When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see Retry Behavior. The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, limit errors, or issues with your function's code and configuration. For example, Lambda returns TooManyRequestsException if executing the function would cause you to exceed a concurrency limit at either the account level (ConcurrentInvocationLimitExceeded) or function level (ReservedFunctionConcurrentInvocationLimitExceeded). For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action.
   */
  invoke(params: Lambda.Types.InvocationRequest, callback?: (err: AWSError, data: Lambda.Types.InvocationResponse) => void): Request<Lambda.Types.InvocationResponse, AWSError>;
  /**
   * Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set InvocationType to Event. For synchronous invocation, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the execution log and trace. To record function errors for asynchronous invocations, configure your function with a dead letter queue. When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see Retry Behavior. The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, limit errors, or issues with your function's code and configuration. For example, Lambda returns TooManyRequestsException if executing the function would cause you to exceed a concurrency limit at either the account level (ConcurrentInvocationLimitExceeded) or function level (ReservedFunctionConcurrentInvocationLimitExceeded). For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action.
   */
  invoke(callback?: (err: AWSError, data: Lambda.Types.InvocationResponse) => void): Request<Lambda.Types.InvocationResponse, AWSError>;
  /**
   *  For asynchronous function invocation, use Invoke.  Invokes a function asynchronously.
   */
  invokeAsync(params: Lambda.Types.InvokeAsyncRequest, callback?: (err: AWSError, data: Lambda.Types.InvokeAsyncResponse) => void): Request<Lambda.Types.InvokeAsyncResponse, AWSError>;
  /**
   *  For asynchronous function invocation, use Invoke.  Invokes a function asynchronously.
   */
  invokeAsync(callback?: (err: AWSError, data: Lambda.Types.InvokeAsyncResponse) => void): Request<Lambda.Types.InvokeAsyncResponse, AWSError>;
  /**
   * Returns a list of aliases for a Lambda function.
   */
  listAliases(params: Lambda.Types.ListAliasesRequest, callback?: (err: AWSError, data: Lambda.Types.ListAliasesResponse) => void): Request<Lambda.Types.ListAliasesResponse, AWSError>;
  /**
   * Returns a list of aliases for a Lambda function.
   */
  listAliases(callback?: (err: AWSError, data: Lambda.Types.ListAliasesResponse) => void): Request<Lambda.Types.ListAliasesResponse, AWSError>;
  /**
   * Lists event source mappings. Specify an EventSourceArn to only show event source mappings for a single event source.
   */
  listEventSourceMappings(params: Lambda.Types.ListEventSourceMappingsRequest, callback?: (err: AWSError, data: Lambda.Types.ListEventSourceMappingsResponse) => void): Request<Lambda.Types.ListEventSourceMappingsResponse, AWSError>;
  /**
   * Lists event source mappings. Specify an EventSourceArn to only show event source mappings for a single event source.
   */
  listEventSourceMappings(callback?: (err: AWSError, data: Lambda.Types.ListEventSourceMappingsResponse) => void): Request<Lambda.Types.ListEventSourceMappingsResponse, AWSError>;
  /**
   * Returns a list of Lambda functions, with the version-specific configuration of each. Set FunctionVersion to ALL to include all published versions of each function in addition to the unpublished version. To get more information about a function or version, use GetFunction.
   */
  listFunctions(params: Lambda.Types.ListFunctionsRequest, callback?: (err: AWSError, data: Lambda.Types.ListFunctionsResponse) => void): Request<Lambda.Types.ListFunctionsResponse, AWSError>;
  /**
   * Returns a list of Lambda functions, with the version-specific configuration of each. Set FunctionVersion to ALL to include all published versions of each function in addition to the unpublished version. To get more information about a function or version, use GetFunction.
   */
  listFunctions(callback?: (err: AWSError, data: Lambda.Types.ListFunctionsResponse) => void): Request<Lambda.Types.ListFunctionsResponse, AWSError>;
  /**
   * Lists the versions of an AWS Lambda layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime.
   */
  listLayerVersions(params: Lambda.Types.ListLayerVersionsRequest, callback?: (err: AWSError, data: Lambda.Types.ListLayerVersionsResponse) => void): Request<Lambda.Types.ListLayerVersionsResponse, AWSError>;
  /**
   * Lists the versions of an AWS Lambda layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime.
   */
  listLayerVersions(callback?: (err: AWSError, data: Lambda.Types.ListLayerVersionsResponse) => void): Request<Lambda.Types.ListLayerVersionsResponse, AWSError>;
  /**
   * Lists AWS Lambda layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime.
   */
  listLayers(params: Lambda.Types.ListLayersRequest, callback?: (err: AWSError, data: Lambda.Types.ListLayersResponse) => void): Request<Lambda.Types.ListLayersResponse, AWSError>;
  /**
   * Lists AWS Lambda layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime.
   */
  listLayers(callback?: (err: AWSError, data: Lambda.Types.ListLayersResponse) => void): Request<Lambda.Types.ListLayersResponse, AWSError>;
  /**
   * Returns a function's tags. You can also view tags with GetFunction.
   */
  listTags(params: Lambda.Types.ListTagsRequest, callback?: (err: AWSError, data: Lambda.Types.ListTagsResponse) => void): Request<Lambda.Types.ListTagsResponse, AWSError>;
  /**
   * Returns a function's tags. You can also view tags with GetFunction.
   */
  listTags(callback?: (err: AWSError, data: Lambda.Types.ListTagsResponse) => void): Request<Lambda.Types.ListTagsResponse, AWSError>;
  /**
   * Returns a list of versions, with the version-specific configuration of each. 
   */
  listVersionsByFunction(params: Lambda.Types.ListVersionsByFunctionRequest, callback?: (err: AWSError, data: Lambda.Types.ListVersionsByFunctionResponse) => void): Request<Lambda.Types.ListVersionsByFunctionResponse, AWSError>;
  /**
   * Returns a list of versions, with the version-specific configuration of each. 
   */
  listVersionsByFunction(callback?: (err: AWSError, data: Lambda.Types.ListVersionsByFunctionResponse) => void): Request<Lambda.Types.ListVersionsByFunctionResponse, AWSError>;
  /**
   * Creates an AWS Lambda layer from a ZIP archive. Each time you call PublishLayerVersion with the same version name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.
   */
  publishLayerVersion(params: Lambda.Types.PublishLayerVersionRequest, callback?: (err: AWSError, data: Lambda.Types.PublishLayerVersionResponse) => void): Request<Lambda.Types.PublishLayerVersionResponse, AWSError>;
  /**
   * Creates an AWS Lambda layer from a ZIP archive. Each time you call PublishLayerVersion with the same version name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.
   */
  publishLayerVersion(callback?: (err: AWSError, data: Lambda.Types.PublishLayerVersionResponse) => void): Request<Lambda.Types.PublishLayerVersionResponse, AWSError>;
  /**
   * Creates a version from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change. AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use UpdateFunctionCode or UpdateFunctionConfiguration to update the function before publishing a version. Clients can invoke versions directly or with an alias. To create an alias, use CreateAlias.
   */
  publishVersion(params: Lambda.Types.PublishVersionRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Creates a version from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change. AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use UpdateFunctionCode or UpdateFunctionConfiguration to update the function before publishing a version. Clients can invoke versions directly or with an alias. To create an alias, use CreateAlias.
   */
  publishVersion(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level. Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use GetFunction to see the current setting for a function. Use GetAccountSettings to see your regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see Managing Concurrency.
   */
  putFunctionConcurrency(params: Lambda.Types.PutFunctionConcurrencyRequest, callback?: (err: AWSError, data: Lambda.Types.Concurrency) => void): Request<Lambda.Types.Concurrency, AWSError>;
  /**
   * Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level. Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use GetFunction to see the current setting for a function. Use GetAccountSettings to see your regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see Managing Concurrency.
   */
  putFunctionConcurrency(callback?: (err: AWSError, data: Lambda.Types.Concurrency) => void): Request<Lambda.Types.Concurrency, AWSError>;
  /**
   * Removes a statement from the permissions policy for a version of an AWS Lambda layer. For more information, see AddLayerVersionPermission.
   */
  removeLayerVersionPermission(params: Lambda.Types.RemoveLayerVersionPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a statement from the permissions policy for a version of an AWS Lambda layer. For more information, see AddLayerVersionPermission.
   */
  removeLayerVersionPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes function-use permission from an AWS service or another account. You can get the ID of the statement from the output of GetPolicy.
   */
  removePermission(params: Lambda.Types.RemovePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes function-use permission from an AWS service or another account. You can get the ID of the statement from the output of GetPolicy.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds tags to a function.
   */
  tagResource(params: Lambda.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds tags to a function.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from a function.
   */
  untagResource(params: Lambda.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from a function.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the configuration of a Lambda function alias.
   */
  updateAlias(params: Lambda.Types.UpdateAliasRequest, callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Updates the configuration of a Lambda function alias.
   */
  updateAlias(callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.
   */
  updateEventSourceMapping(params: Lambda.Types.UpdateEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.
   */
  updateEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Updates a Lambda function's code. The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.
   */
  updateFunctionCode(params: Lambda.Types.UpdateFunctionCodeRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Updates a Lambda function's code. The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.
   */
  updateFunctionCode(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Modify the version-specific settings of a Lambda function. These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version. To configure function concurrency, use PutFunctionConcurrency. To grant invoke permissions to an account or AWS service, use AddPermission.
   */
  updateFunctionConfiguration(params: Lambda.Types.UpdateFunctionConfigurationRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Modify the version-specific settings of a Lambda function. These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version. To configure function concurrency, use PutFunctionConcurrency. To grant invoke permissions to an account or AWS service, use AddPermission.
   */
  updateFunctionConfiguration(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Waits for the functionExists state by periodically calling the underlying Lambda.getFunctionoperation every 1 seconds (at most 20 times).
   */
  waitFor(state: "functionExists", params: Lambda.Types.GetFunctionRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Lambda.Types.GetFunctionResponse) => void): Request<Lambda.Types.GetFunctionResponse, AWSError>;
  /**
   * Waits for the functionExists state by periodically calling the underlying Lambda.getFunctionoperation every 1 seconds (at most 20 times).
   */
  waitFor(state: "functionExists", callback?: (err: AWSError, data: Lambda.Types.GetFunctionResponse) => void): Request<Lambda.Types.GetFunctionResponse, AWSError>;
}
declare namespace Lambda {
  export interface AccountLimit {
    /**
     * The amount of storage space that you can use for all deployment packages and layer archives.
     */
    TotalCodeSize?: Long;
    /**
     * The maximum size of your function's code and layers when they're extracted.
     */
    CodeSizeUnzipped?: Long;
    /**
     * The maximum size of a deployment package when it's uploaded directly to AWS Lambda. Use Amazon S3 for larger files.
     */
    CodeSizeZipped?: Long;
    /**
     * The maximum number of simultaneous function executions.
     */
    ConcurrentExecutions?: Integer;
    /**
     * The maximum number of simultaneous function executions, minus the capacity that's reserved for individual functions with PutFunctionConcurrency.
     */
    UnreservedConcurrentExecutions?: UnreservedConcurrentExecutions;
  }
  export interface AccountUsage {
    /**
     * The amount of storage space, in bytes, that's being used by deployment packages and layer archives.
     */
    TotalCodeSize?: Long;
    /**
     * The number of Lambda functions.
     */
    FunctionCount?: Long;
  }
  export type Action = string;
  export interface AddLayerVersionPermissionRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
    /**
     * An identifier that distinguishes the policy from others on the same layer version.
     */
    StatementId: StatementId;
    /**
     * The API action that grants access to the layer. For example, lambda:GetLayerVersion.
     */
    Action: LayerPermissionAllowedAction;
    /**
     * An account ID, or * to grant permission to all AWS accounts.
     */
    Principal: LayerPermissionAllowedPrincipal;
    /**
     * With the principal set to *, grant permission to all accounts in the specified organization.
     */
    OrganizationId?: OrganizationId;
    /**
     * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface AddLayerVersionPermissionResponse {
    /**
     * The permission statement.
     */
    Statement?: String;
    /**
     * A unique identifier for the current revision of the policy.
     */
    RevisionId?: String;
  }
  export interface AddPermissionRequest {
    /**
     * The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * A statement identifier that differentiates the statement from others in the same policy.
     */
    StatementId: StatementId;
    /**
     * The action that the principal can use on the function. For example, lambda:InvokeFunction or lambda:GetFunction.
     */
    Action: Action;
    /**
     * The AWS service or account that invokes the function. If you specify a service, use SourceArn or SourceAccount to limit who can invoke the function through that service.
     */
    Principal: Principal;
    /**
     * For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
     */
    SourceArn?: Arn;
    /**
     * For AWS services, the ID of the account that owns the resource. Use this instead of SourceArn to grant permission to resources that are owned by another account (for example, all of an account's Amazon S3 buckets). Or use it together with SourceArn to ensure that the resource is owned by the specified account. For example, an Amazon S3 bucket could be deleted by its owner and recreated by another account.
     */
    SourceAccount?: SourceOwner;
    /**
     * For Alexa Smart Home functions, a token that must be supplied by the invoker.
     */
    EventSourceToken?: EventSourceToken;
    /**
     * Specify a version or alias to add permissions to a published version of the function.
     */
    Qualifier?: Qualifier;
    /**
     * Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface AddPermissionResponse {
    /**
     * The permission statement that's added to the function policy.
     */
    Statement?: String;
  }
  export type AdditionalVersion = string;
  export type AdditionalVersionWeights = {[key: string]: Weight};
  export type Alias = string;
  export interface AliasConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the alias.
     */
    AliasArn?: FunctionArn;
    /**
     * The name of the alias.
     */
    Name?: Alias;
    /**
     * The function version that the alias invokes.
     */
    FunctionVersion?: Version;
    /**
     * A description of the alias.
     */
    Description?: Description;
    /**
     * The routing configuration of the alias.
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * A unique identifier that changes when you update the alias.
     */
    RevisionId?: String;
  }
  export type AliasList = AliasConfiguration[];
  export interface AliasRoutingConfiguration {
    /**
     * The name of the second alias, and the percentage of traffic that's routed to it.
     */
    AdditionalVersionWeights?: AdditionalVersionWeights;
  }
  export type Arn = string;
  export type BatchSize = number;
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type BlobStream = Buffer|Uint8Array|Blob|string|Readable;
  export type Boolean = boolean;
  export type CompatibleRuntimes = Runtime[];
  export interface Concurrency {
    /**
     * The number of concurrent executions that are reserved for this function. For more information, see Managing Concurrency.
     */
    ReservedConcurrentExecutions?: ReservedConcurrentExecutions;
  }
  export interface CreateAliasRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The name of the alias.
     */
    Name: Alias;
    /**
     * The function version that the alias invokes.
     */
    FunctionVersion: Version;
    /**
     * A description of the alias.
     */
    Description?: Description;
    /**
     * The routing configuration of the alias.
     */
    RoutingConfig?: AliasRoutingConfiguration;
  }
  export interface CreateEventSourceMappingRequest {
    /**
     * The Amazon Resource Name (ARN) of the event source.    Amazon Kinesis - The ARN of the data stream or a stream consumer.    Amazon DynamoDB Streams - The ARN of the stream.    Amazon Simple Queue Service - The ARN of the queue.  
     */
    EventSourceArn: Arn;
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Disables the event source mapping to pause polling and invocation.
     */
    Enabled?: Enabled;
    /**
     * The maximum number of items to retrieve in a single batch.    Amazon Kinesis - Default 100. Max 10,000.    Amazon DynamoDB Streams - Default 100. Max 1,000.    Amazon Simple Queue Service - Default 10. Max 10.  
     */
    BatchSize?: BatchSize;
    /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. AT_TIMESTAMP is only supported for Amazon Kinesis streams.
     */
    StartingPosition?: EventSourcePosition;
    /**
     * With StartingPosition set to AT_TIMESTAMP, the time from which to start reading.
     */
    StartingPositionTimestamp?: _Date;
  }
  export interface CreateFunctionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The identifier of the function's runtime.
     */
    Runtime: Runtime;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    Role: RoleArn;
    /**
     * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see Programming Model.
     */
    Handler: Handler;
    /**
     * The code for the function.
     */
    Code: FunctionCode;
    /**
     * A description of the function.
     */
    Description?: Description;
    /**
     * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
     */
    Timeout?: Timeout;
    /**
     * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
     */
    MemorySize?: MemorySize;
    /**
     * Set to true to publish the first version of the function during creation.
     */
    Publish?: Boolean;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more information, see VPC Settings.
     */
    VpcConfig?: VpcConfig;
    /**
     * A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead Letter Queues.
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    Environment?: Environment;
    /**
     * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
     */
    KMSKeyArn?: KMSKeyArn;
    /**
     * Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.
     */
    TracingConfig?: TracingConfig;
    /**
     * A list of tags to apply to the function.
     */
    Tags?: Tags;
    /**
     * A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.
     */
    Layers?: LayerList;
  }
  export type _Date = Date;
  export interface DeadLetterConfig {
    /**
     * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
     */
    TargetArn?: ResourceArn;
  }
  export interface DeleteAliasRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The name of the alias.
     */
    Name: Alias;
  }
  export interface DeleteEventSourceMappingRequest {
    /**
     * The identifier of the event source mapping.
     */
    UUID: String;
  }
  export interface DeleteFunctionConcurrencyRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
  }
  export interface DeleteFunctionRequest {
    /**
     * The name of the Lambda function or version.  Name formats     Function name - my-function (name-only), my-function:1 (with version).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Specify a version to delete. You can't delete a version that's referenced by an alias.
     */
    Qualifier?: Qualifier;
  }
  export interface DeleteLayerVersionRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
  }
  export type Description = string;
  export type Enabled = boolean;
  export interface Environment {
    /**
     * Environment variable key-value pairs.
     */
    Variables?: EnvironmentVariables;
  }
  export interface EnvironmentError {
    /**
     * The error code.
     */
    ErrorCode?: String;
    /**
     * The error message.
     */
    Message?: SensitiveString;
  }
  export interface EnvironmentResponse {
    /**
     * Environment variable key-value pairs.
     */
    Variables?: EnvironmentVariables;
    /**
     * Error messages for environment variables that couldn't be applied.
     */
    Error?: EnvironmentError;
  }
  export type EnvironmentVariableName = string;
  export type EnvironmentVariableValue = string;
  export type EnvironmentVariables = {[key: string]: EnvironmentVariableValue};
  export interface EventSourceMappingConfiguration {
    /**
     * The identifier of the event source mapping.
     */
    UUID?: String;
    /**
     * The maximum number of items to retrieve in a single batch.
     */
    BatchSize?: BatchSize;
    /**
     * The Amazon Resource Name (ARN) of the event source.
     */
    EventSourceArn?: Arn;
    /**
     * The ARN of the Lambda function.
     */
    FunctionArn?: FunctionArn;
    /**
     * The date that the event source mapping was last updated.
     */
    LastModified?: _Date;
    /**
     * The result of the last AWS Lambda invocation of your Lambda function.
     */
    LastProcessingResult?: String;
    /**
     * The state of the event source mapping. It can be one of the following: Creating, Enabling, Enabled, Disabling, Disabled, Updating, or Deleting.
     */
    State?: String;
    /**
     * The cause of the last state change, either User initiated or Lambda initiated.
     */
    StateTransitionReason?: String;
  }
  export type EventSourceMappingsList = EventSourceMappingConfiguration[];
  export type EventSourcePosition = "TRIM_HORIZON"|"LATEST"|"AT_TIMESTAMP";
  export type EventSourceToken = string;
  export type FunctionArn = string;
  export interface FunctionCode {
    /**
     * The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.
     */
    ZipFile?: _Blob;
    /**
     * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 key of the deployment package.
     */
    S3Key?: S3Key;
    /**
     * For versioned objects, the version of the deployment package object to use.
     */
    S3ObjectVersion?: S3ObjectVersion;
  }
  export interface FunctionCodeLocation {
    /**
     * The service that's hosting the file.
     */
    RepositoryType?: String;
    /**
     * A presigned URL that you can use to download the deployment package.
     */
    Location?: String;
  }
  export interface FunctionConfiguration {
    /**
     * The name of the function.
     */
    FunctionName?: NamespacedFunctionName;
    /**
     * The function's Amazon Resource Name (ARN).
     */
    FunctionArn?: NameSpacedFunctionArn;
    /**
     * The runtime environment for the Lambda function.
     */
    Runtime?: Runtime;
    /**
     * The function's execution role.
     */
    Role?: RoleArn;
    /**
     * The function that Lambda calls to begin executing your function.
     */
    Handler?: Handler;
    /**
     * The size of the function's deployment package, in bytes.
     */
    CodeSize?: Long;
    /**
     * The function's description.
     */
    Description?: Description;
    /**
     * The amount of time that Lambda allows a function to run before stopping it.
     */
    Timeout?: Timeout;
    /**
     * The memory that's allocated to the function.
     */
    MemorySize?: MemorySize;
    /**
     * The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    LastModified?: Timestamp;
    /**
     * The SHA256 hash of the function's deployment package.
     */
    CodeSha256?: String;
    /**
     * The version of the Lambda function.
     */
    Version?: Version;
    /**
     * The function's networking configuration.
     */
    VpcConfig?: VpcConfigResponse;
    /**
     * The function's dead letter queue.
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * The function's environment variables.
     */
    Environment?: EnvironmentResponse;
    /**
     * The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've configured a customer-managed CMK.
     */
    KMSKeyArn?: KMSKeyArn;
    /**
     * The function's AWS X-Ray tracing configuration.
     */
    TracingConfig?: TracingConfigResponse;
    /**
     * For Lambda@Edge functions, the ARN of the master function.
     */
    MasterArn?: FunctionArn;
    /**
     * The latest updated revision of the function or alias.
     */
    RevisionId?: String;
    /**
     * The function's  layers.
     */
    Layers?: LayersReferenceList;
  }
  export type FunctionList = FunctionConfiguration[];
  export type FunctionName = string;
  export type FunctionVersion = "ALL";
  export interface GetAccountSettingsRequest {
  }
  export interface GetAccountSettingsResponse {
    /**
     * Limits that are related to concurrency and code storage.
     */
    AccountLimit?: AccountLimit;
    /**
     * The number of functions and amount of storage in use.
     */
    AccountUsage?: AccountUsage;
  }
  export interface GetAliasRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The name of the alias.
     */
    Name: Alias;
  }
  export interface GetEventSourceMappingRequest {
    /**
     * The identifier of the event source mapping.
     */
    UUID: String;
  }
  export interface GetFunctionConfigurationRequest {
    /**
     * The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Specify a version or alias to get details about a published version of the function.
     */
    Qualifier?: Qualifier;
  }
  export interface GetFunctionRequest {
    /**
     * The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Specify a version or alias to get details about a published version of the function.
     */
    Qualifier?: Qualifier;
  }
  export interface GetFunctionResponse {
    /**
     * The configuration of the function or version.
     */
    Configuration?: FunctionConfiguration;
    /**
     * The deployment package of the function or version.
     */
    Code?: FunctionCodeLocation;
    /**
     * The function's tags.
     */
    Tags?: Tags;
    /**
     * The function's reserved concurrency.
     */
    Concurrency?: Concurrency;
  }
  export interface GetLayerVersionByArnRequest {
    /**
     * The ARN of the layer version.
     */
    Arn: LayerVersionArn;
  }
  export interface GetLayerVersionPolicyRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
  }
  export interface GetLayerVersionPolicyResponse {
    /**
     * The policy document.
     */
    Policy?: String;
    /**
     * A unique identifier for the current revision of the policy.
     */
    RevisionId?: String;
  }
  export interface GetLayerVersionRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
  }
  export interface GetLayerVersionResponse {
    /**
     * Details about the layer version.
     */
    Content?: LayerVersionContentOutput;
    /**
     * The ARN of the layer.
     */
    LayerArn?: LayerArn;
    /**
     * The ARN of the layer version.
     */
    LayerVersionArn?: LayerVersionArn;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The date that the layer version was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    CreatedDate?: Timestamp;
    /**
     * The version number.
     */
    Version?: LayerVersionNumber;
    /**
     * The layer's compatible runtimes.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's software license.
     */
    LicenseInfo?: LicenseInfo;
  }
  export interface GetPolicyRequest {
    /**
     * The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Specify a version or alias to get the policy for that resource.
     */
    Qualifier?: Qualifier;
  }
  export interface GetPolicyResponse {
    /**
     * The resource-based policy.
     */
    Policy?: String;
    /**
     * A unique identifier for the current revision of the policy.
     */
    RevisionId?: String;
  }
  export type Handler = string;
  export type HttpStatus = number;
  export type Integer = number;
  export interface InvocationRequest {
    /**
     * The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Choose from the following options.    RequestResponse (default) - Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.    Event - Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if it's configured). The API response only includes a status code.    DryRun - Validate parameter values and verify that the user or role has permission to invoke the function.  
     */
    InvocationType?: InvocationType;
    /**
     * Set to Tail to include the execution log in the response.
     */
    LogType?: LogType;
    /**
     * Up to 3583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.
     */
    ClientContext?: String;
    /**
     * The JSON that you want to provide to your Lambda function as input.
     */
    Payload?: _Blob;
    /**
     * Specify a version or alias to invoke a published version of the function.
     */
    Qualifier?: Qualifier;
  }
  export interface InvocationResponse {
    /**
     * The HTTP status code is in the 200 range for a successful request. For the RequestResponse invocation type, this status code is 200. For the Event invocation type, this status code is 202. For the DryRun invocation type, the status code is 204.
     */
    StatusCode?: Integer;
    /**
     * If present, indicates that an error occurred during function execution. Details about the error are included in the response payload.    Handled - The runtime caught an error thrown by the function and formatted it into a JSON document.    Unhandled - The runtime didn't handle the error. For example, the function ran out of memory or timed out.  
     */
    FunctionError?: String;
    /**
     * The last 4 KB of the execution log, which is base64 encoded.
     */
    LogResult?: String;
    /**
     * The response from the function, or an error object.
     */
    Payload?: _Blob;
    /**
     * The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.
     */
    ExecutedVersion?: Version;
  }
  export type InvocationType = "Event"|"RequestResponse"|"DryRun";
  export interface InvokeAsyncRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * The JSON that you want to provide to your Lambda function as input.
     */
    InvokeArgs: BlobStream;
  }
  export interface InvokeAsyncResponse {
    /**
     * The status code.
     */
    Status?: HttpStatus;
  }
  export type KMSKeyArn = string;
  export interface Layer {
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    Arn?: LayerVersionArn;
    /**
     * The size of the layer archive in bytes.
     */
    CodeSize?: Long;
  }
  export type LayerArn = string;
  export type LayerList = LayerVersionArn[];
  export type LayerName = string;
  export type LayerPermissionAllowedAction = string;
  export type LayerPermissionAllowedPrincipal = string;
  export type LayerVersionArn = string;
  export interface LayerVersionContentInput {
    /**
     * The Amazon S3 bucket of the layer archive.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 key of the layer archive.
     */
    S3Key?: S3Key;
    /**
     * For versioned objects, the version of the layer archive object to use.
     */
    S3ObjectVersion?: S3ObjectVersion;
    /**
     * The base64-encoded contents of the layer archive. AWS SDK and AWS CLI clients handle the encoding for you.
     */
    ZipFile?: _Blob;
  }
  export interface LayerVersionContentOutput {
    /**
     * A link to the layer archive in Amazon S3 that is valid for 10 minutes.
     */
    Location?: String;
    /**
     * The SHA-256 hash of the layer archive.
     */
    CodeSha256?: String;
    /**
     * The size of the layer archive in bytes.
     */
    CodeSize?: Long;
  }
  export type LayerVersionNumber = number;
  export type LayerVersionsList = LayerVersionsListItem[];
  export interface LayerVersionsListItem {
    /**
     * The ARN of the layer version.
     */
    LayerVersionArn?: LayerVersionArn;
    /**
     * The version number.
     */
    Version?: LayerVersionNumber;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The date that the version was created, in ISO 8601 format. For example, 2018-11-27T15:10:45.123+0000.
     */
    CreatedDate?: Timestamp;
    /**
     * The layer's compatible runtimes.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's open-source license.
     */
    LicenseInfo?: LicenseInfo;
  }
  export type LayersList = LayersListItem[];
  export interface LayersListItem {
    /**
     * The name of the layer.
     */
    LayerName?: LayerName;
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    LayerArn?: LayerArn;
    /**
     * The newest version of the layer.
     */
    LatestMatchingVersion?: LayerVersionsListItem;
  }
  export type LayersReferenceList = Layer[];
  export type LicenseInfo = string;
  export interface ListAliasesRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Specify a function version to only list aliases that invoke that version.
     */
    FunctionVersion?: Version;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    Marker?: String;
    /**
     * Limit the number of aliases returned.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListAliasesResponse {
    /**
     * The pagination token that's included if more results are available.
     */
    NextMarker?: String;
    /**
     * A list of aliases.
     */
    Aliases?: AliasList;
  }
  export interface ListEventSourceMappingsRequest {
    /**
     * The Amazon Resource Name (ARN) of the event source.    Amazon Kinesis - The ARN of the data stream or a stream consumer.    Amazon DynamoDB Streams - The ARN of the stream.    Amazon Simple Queue Service - The ARN of the queue.  
     */
    EventSourceArn?: Arn;
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName?: FunctionName;
    /**
     * A pagination token returned by a previous call.
     */
    Marker?: String;
    /**
     * The maximum number of event source mappings to return.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListEventSourceMappingsResponse {
    /**
     * A pagination token that's returned when the response doesn't contain all event source mappings.
     */
    NextMarker?: String;
    /**
     * A list of event source mappings.
     */
    EventSourceMappings?: EventSourceMappingsList;
  }
  export interface ListFunctionsRequest {
    /**
     * For Lambda@Edge functions, the AWS Region of the master function. For example, us-east-2 or ALL. If specified, you must set FunctionVersion to ALL.
     */
    MasterRegion?: MasterRegion;
    /**
     * Set to ALL to include entries for all published versions of each function.
     */
    FunctionVersion?: FunctionVersion;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    Marker?: String;
    /**
     * Specify a value between 1 and 50 to limit the number of functions in the response.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListFunctionsResponse {
    /**
     * The pagination token that's included if more results are available.
     */
    NextMarker?: String;
    /**
     * A list of Lambda functions.
     */
    Functions?: FunctionList;
  }
  export interface ListLayerVersionsRequest {
    /**
     * A runtime identifier. For example, go1.x.
     */
    CompatibleRuntime?: Runtime;
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * A pagination token returned by a previous call.
     */
    Marker?: String;
    /**
     * The maximum number of versions to return.
     */
    MaxItems?: MaxLayerListItems;
  }
  export interface ListLayerVersionsResponse {
    /**
     * A pagination token returned when the response doesn't contain all versions.
     */
    NextMarker?: String;
    /**
     * A list of versions.
     */
    LayerVersions?: LayerVersionsList;
  }
  export interface ListLayersRequest {
    /**
     * A runtime identifier. For example, go1.x.
     */
    CompatibleRuntime?: Runtime;
    /**
     * A pagination token returned by a previous call.
     */
    Marker?: String;
    /**
     * The maximum number of layers to return.
     */
    MaxItems?: MaxLayerListItems;
  }
  export interface ListLayersResponse {
    /**
     * A pagination token returned when the response doesn't contain all layers.
     */
    NextMarker?: String;
    /**
     * A list of function layers.
     */
    Layers?: LayersList;
  }
  export interface ListTagsRequest {
    /**
     * The function's Amazon Resource Name (ARN).
     */
    Resource: FunctionArn;
  }
  export interface ListTagsResponse {
    /**
     * The function's tags.
     */
    Tags?: Tags;
  }
  export interface ListVersionsByFunctionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    Marker?: String;
    /**
     * Limit the number of versions that are returned.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListVersionsByFunctionResponse {
    /**
     * The pagination token that's included if more results are available.
     */
    NextMarker?: String;
    /**
     * A list of Lambda function versions.
     */
    Versions?: FunctionList;
  }
  export type LogType = "None"|"Tail";
  export type Long = number;
  export type MasterRegion = string;
  export type MaxLayerListItems = number;
  export type MaxListItems = number;
  export type MemorySize = number;
  export type NameSpacedFunctionArn = string;
  export type NamespacedFunctionName = string;
  export type NamespacedStatementId = string;
  export type OrganizationId = string;
  export type Principal = string;
  export interface PublishLayerVersionRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The function layer archive.
     */
    Content: LayerVersionContentInput;
    /**
     * A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's software license. It can be any of the following:   An SPDX license identifier. For example, MIT.   The URL of a license hosted on the internet. For example, https://opensource.org/licenses/MIT.   The full text of the license.  
     */
    LicenseInfo?: LicenseInfo;
  }
  export interface PublishLayerVersionResponse {
    /**
     * Details about the layer version.
     */
    Content?: LayerVersionContentOutput;
    /**
     * The ARN of the layer.
     */
    LayerArn?: LayerArn;
    /**
     * The ARN of the layer version.
     */
    LayerVersionArn?: LayerVersionArn;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The date that the layer version was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    CreatedDate?: Timestamp;
    /**
     * The version number.
     */
    Version?: LayerVersionNumber;
    /**
     * The layer's compatible runtimes.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's software license.
     */
    LicenseInfo?: LicenseInfo;
  }
  export interface PublishVersionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of UpdateFunctionCode.
     */
    CodeSha256?: String;
    /**
     * A description for the version to override the description in the function configuration.
     */
    Description?: Description;
    /**
     * Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.
     */
    RevisionId?: String;
  }
  export interface PutFunctionConcurrencyRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The number of simultaneous executions to reserve for the function.
     */
    ReservedConcurrentExecutions: ReservedConcurrentExecutions;
  }
  export type Qualifier = string;
  export interface RemoveLayerVersionPermissionRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
    /**
     * The identifier that was specified when the statement was added.
     */
    StatementId: StatementId;
    /**
     * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface RemovePermissionRequest {
    /**
     * The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Statement ID of the permission to remove.
     */
    StatementId: NamespacedStatementId;
    /**
     * Specify a version or alias to remove permissions from a published version of the function.
     */
    Qualifier?: Qualifier;
    /**
     * Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export type ReservedConcurrentExecutions = number;
  export type ResourceArn = string;
  export type RoleArn = string;
  export type Runtime = "nodejs"|"nodejs4.3"|"nodejs6.10"|"nodejs8.10"|"nodejs10.x"|"java8"|"python2.7"|"python3.6"|"python3.7"|"dotnetcore1.0"|"dotnetcore2.0"|"dotnetcore2.1"|"nodejs4.3-edge"|"go1.x"|"ruby2.5"|"provided";
  export type S3Bucket = string;
  export type S3Key = string;
  export type S3ObjectVersion = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SensitiveString = string;
  export type SourceOwner = string;
  export type StatementId = string;
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The function's Amazon Resource Name (ARN).
     */
    Resource: FunctionArn;
    /**
     * A list of tags to apply to the function.
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Timeout = number;
  export type Timestamp = string;
  export interface TracingConfig {
    /**
     * The tracing mode.
     */
    Mode?: TracingMode;
  }
  export interface TracingConfigResponse {
    /**
     * The tracing mode.
     */
    Mode?: TracingMode;
  }
  export type TracingMode = "Active"|"PassThrough";
  export type UnreservedConcurrentExecutions = number;
  export interface UntagResourceRequest {
    /**
     * The function's Amazon Resource Name (ARN).
     */
    Resource: FunctionArn;
    /**
     * A list of tag keys to remove from the function.
     */
    TagKeys: TagKeyList;
  }
  export interface UpdateAliasRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The name of the alias.
     */
    Name: Alias;
    /**
     * The function version that the alias invokes.
     */
    FunctionVersion?: Version;
    /**
     * A description of the alias.
     */
    Description?: Description;
    /**
     * The routing configuration of the alias.
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface UpdateEventSourceMappingRequest {
    /**
     * The identifier of the event source mapping.
     */
    UUID: String;
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName?: FunctionName;
    /**
     * Disables the event source mapping to pause polling and invocation.
     */
    Enabled?: Enabled;
    /**
     * The maximum number of items to retrieve in a single batch.    Amazon Kinesis - Default 100. Max 10,000.    Amazon DynamoDB Streams - Default 100. Max 1,000.    Amazon Simple Queue Service - Default 10. Max 10.  
     */
    BatchSize?: BatchSize;
  }
  export interface UpdateFunctionCodeRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.
     */
    ZipFile?: _Blob;
    /**
     * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 key of the deployment package.
     */
    S3Key?: S3Key;
    /**
     * For versioned objects, the version of the deployment package object to use.
     */
    S3ObjectVersion?: S3ObjectVersion;
    /**
     * Set to true to publish a new version of the function after updating the code. This has the same effect as calling PublishVersion separately.
     */
    Publish?: Boolean;
    /**
     * Set to true to validate the request parameters and access permissions without modifying the function code.
     */
    DryRun?: Boolean;
    /**
     * Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface UpdateFunctionConfigurationRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    Role?: RoleArn;
    /**
     * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see Programming Model.
     */
    Handler?: Handler;
    /**
     * A description of the function.
     */
    Description?: Description;
    /**
     * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
     */
    Timeout?: Timeout;
    /**
     * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
     */
    MemorySize?: MemorySize;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more information, see VPC Settings.
     */
    VpcConfig?: VpcConfig;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    Environment?: Environment;
    /**
     * The identifier of the function's runtime.
     */
    Runtime?: Runtime;
    /**
     * A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead Letter Queues.
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
     */
    KMSKeyArn?: KMSKeyArn;
    /**
     * Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.
     */
    TracingConfig?: TracingConfig;
    /**
     * Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
     */
    RevisionId?: String;
    /**
     * A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.
     */
    Layers?: LayerList;
  }
  export type Version = string;
  export interface VpcConfig {
    /**
     * A list of VPC subnet IDs.
     */
    SubnetIds?: SubnetIds;
    /**
     * A list of VPC security groups IDs.
     */
    SecurityGroupIds?: SecurityGroupIds;
  }
  export interface VpcConfigResponse {
    /**
     * A list of VPC subnet IDs.
     */
    SubnetIds?: SubnetIds;
    /**
     * A list of VPC security groups IDs.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * The ID of the VPC.
     */
    VpcId?: VpcId;
  }
  export type VpcId = string;
  export type Weight = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-11"|"2015-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Lambda client.
   */
  export import Types = Lambda;
}
export = Lambda;
