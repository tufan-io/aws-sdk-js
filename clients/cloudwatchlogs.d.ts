import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudWatchLogs extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudWatchLogs.Types.ClientConfiguration)
  config: Config & CloudWatchLogs.Types.ClientConfiguration;
  /**
   * Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group. Associating an AWS KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested. Note that it can take up to 5 minutes for this operation to take effect. If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you will receive an InvalidParameterException error. 
   */
  associateKmsKey(params: CloudWatchLogs.Types.AssociateKmsKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group. Associating an AWS KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested. Note that it can take up to 5 minutes for this operation to take effect. If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you will receive an InvalidParameterException error. 
   */
  associateKmsKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels the specified export task. The task must be in the PENDING or RUNNING state.
   */
  cancelExportTask(params: CloudWatchLogs.Types.CancelExportTaskRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels the specified export task. The task must be in the PENDING or RUNNING state.
   */
  cancelExportTask(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket. This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING) export task at a time. To cancel an export task, use CancelExportTask. You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects. Exporting to S3 buckets that are encrypted with AES-256 is supported. Exporting to S3 buckets encrypted with SSE-KMS is not supported. 
   */
  createExportTask(params: CloudWatchLogs.Types.CreateExportTaskRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.CreateExportTaskResponse) => void): Request<CloudWatchLogs.Types.CreateExportTaskResponse, AWSError>;
  /**
   * Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket. This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING) export task at a time. To cancel an export task, use CancelExportTask. You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects. Exporting to S3 buckets that are encrypted with AES-256 is supported. Exporting to S3 buckets encrypted with SSE-KMS is not supported. 
   */
  createExportTask(callback?: (err: AWSError, data: CloudWatchLogs.Types.CreateExportTaskResponse) => void): Request<CloudWatchLogs.Types.CreateExportTaskResponse, AWSError>;
  /**
   * Creates a log group with the specified name. You can create up to 5000 log groups per account. You must use the following guidelines when naming a log group:   Log group names must be unique within a region for an AWS account.   Log group names can be between 1 and 512 characters long.   Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).   If you associate a AWS Key Management Service (AWS KMS) customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested. If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you will receive an InvalidParameterException error. 
   */
  createLogGroup(params: CloudWatchLogs.Types.CreateLogGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a log group with the specified name. You can create up to 5000 log groups per account. You must use the following guidelines when naming a log group:   Log group names must be unique within a region for an AWS account.   Log group names can be between 1 and 512 characters long.   Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).   If you associate a AWS Key Management Service (AWS KMS) customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested. If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you will receive an InvalidParameterException error. 
   */
  createLogGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a log stream for the specified log group. There is no limit on the number of log streams that you can create for a log group. You must use the following guidelines when naming a log stream:   Log stream names must be unique within the log group.   Log stream names can be between 1 and 512 characters long.   The ':' (colon) and '*' (asterisk) characters are not allowed.  
   */
  createLogStream(params: CloudWatchLogs.Types.CreateLogStreamRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a log stream for the specified log group. There is no limit on the number of log streams that you can create for a log group. You must use the following guidelines when naming a log stream:   Log stream names must be unique within the log group.   Log stream names can be between 1 and 512 characters long.   The ':' (colon) and '*' (asterisk) characters are not allowed.  
   */
  createLogStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.
   */
  deleteDestination(params: CloudWatchLogs.Types.DeleteDestinationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.
   */
  deleteDestination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
   */
  deleteLogGroup(params: CloudWatchLogs.Types.DeleteLogGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
   */
  deleteLogGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
   */
  deleteLogStream(params: CloudWatchLogs.Types.DeleteLogStreamRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
   */
  deleteLogStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified metric filter.
   */
  deleteMetricFilter(params: CloudWatchLogs.Types.DeleteMetricFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified metric filter.
   */
  deleteMetricFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.
   */
  deleteResourcePolicy(params: CloudWatchLogs.Types.DeleteResourcePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.
   */
  deleteResourcePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified retention policy. Log events do not expire if they belong to log groups without a retention policy.
   */
  deleteRetentionPolicy(params: CloudWatchLogs.Types.DeleteRetentionPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified retention policy. Log events do not expire if they belong to log groups without a retention policy.
   */
  deleteRetentionPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified subscription filter.
   */
  deleteSubscriptionFilter(params: CloudWatchLogs.Types.DeleteSubscriptionFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified subscription filter.
   */
  deleteSubscriptionFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists all your destinations. The results are ASCII-sorted by destination name.
   */
  describeDestinations(params: CloudWatchLogs.Types.DescribeDestinationsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeDestinationsResponse) => void): Request<CloudWatchLogs.Types.DescribeDestinationsResponse, AWSError>;
  /**
   * Lists all your destinations. The results are ASCII-sorted by destination name.
   */
  describeDestinations(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeDestinationsResponse) => void): Request<CloudWatchLogs.Types.DescribeDestinationsResponse, AWSError>;
  /**
   * Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.
   */
  describeExportTasks(params: CloudWatchLogs.Types.DescribeExportTasksRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeExportTasksResponse) => void): Request<CloudWatchLogs.Types.DescribeExportTasksResponse, AWSError>;
  /**
   * Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.
   */
  describeExportTasks(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeExportTasksResponse) => void): Request<CloudWatchLogs.Types.DescribeExportTasksResponse, AWSError>;
  /**
   * Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.
   */
  describeLogGroups(params: CloudWatchLogs.Types.DescribeLogGroupsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeLogGroupsResponse) => void): Request<CloudWatchLogs.Types.DescribeLogGroupsResponse, AWSError>;
  /**
   * Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.
   */
  describeLogGroups(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeLogGroupsResponse) => void): Request<CloudWatchLogs.Types.DescribeLogGroupsResponse, AWSError>;
  /**
   * Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered. This operation has a limit of five transactions per second, after which transactions are throttled.
   */
  describeLogStreams(params: CloudWatchLogs.Types.DescribeLogStreamsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeLogStreamsResponse) => void): Request<CloudWatchLogs.Types.DescribeLogStreamsResponse, AWSError>;
  /**
   * Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered. This operation has a limit of five transactions per second, after which transactions are throttled.
   */
  describeLogStreams(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeLogStreamsResponse) => void): Request<CloudWatchLogs.Types.DescribeLogStreamsResponse, AWSError>;
  /**
   * Lists the specified metric filters. You can list all the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
   */
  describeMetricFilters(params: CloudWatchLogs.Types.DescribeMetricFiltersRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeMetricFiltersResponse) => void): Request<CloudWatchLogs.Types.DescribeMetricFiltersResponse, AWSError>;
  /**
   * Lists the specified metric filters. You can list all the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
   */
  describeMetricFilters(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeMetricFiltersResponse) => void): Request<CloudWatchLogs.Types.DescribeMetricFiltersResponse, AWSError>;
  /**
   * Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.
   */
  describeQueries(params: CloudWatchLogs.Types.DescribeQueriesRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeQueriesResponse) => void): Request<CloudWatchLogs.Types.DescribeQueriesResponse, AWSError>;
  /**
   * Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.
   */
  describeQueries(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeQueriesResponse) => void): Request<CloudWatchLogs.Types.DescribeQueriesResponse, AWSError>;
  /**
   * Lists the resource policies in this account.
   */
  describeResourcePolicies(params: CloudWatchLogs.Types.DescribeResourcePoliciesRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeResourcePoliciesResponse) => void): Request<CloudWatchLogs.Types.DescribeResourcePoliciesResponse, AWSError>;
  /**
   * Lists the resource policies in this account.
   */
  describeResourcePolicies(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeResourcePoliciesResponse) => void): Request<CloudWatchLogs.Types.DescribeResourcePoliciesResponse, AWSError>;
  /**
   * Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.
   */
  describeSubscriptionFilters(params: CloudWatchLogs.Types.DescribeSubscriptionFiltersRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeSubscriptionFiltersResponse) => void): Request<CloudWatchLogs.Types.DescribeSubscriptionFiltersResponse, AWSError>;
  /**
   * Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.
   */
  describeSubscriptionFilters(callback?: (err: AWSError, data: CloudWatchLogs.Types.DescribeSubscriptionFiltersResponse) => void): Request<CloudWatchLogs.Types.DescribeSubscriptionFiltersResponse, AWSError>;
  /**
   * Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group. After the AWS KMS CMK is disassociated from the log group, AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested. Note that it can take up to 5 minutes for this operation to take effect.
   */
  disassociateKmsKey(params: CloudWatchLogs.Types.DisassociateKmsKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group. After the AWS KMS CMK is disassociated from the log group, AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested. Note that it can take up to 5 minutes for this operation to take effect.
   */
  disassociateKmsKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream. By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events), or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call.
   */
  filterLogEvents(params: CloudWatchLogs.Types.FilterLogEventsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.FilterLogEventsResponse) => void): Request<CloudWatchLogs.Types.FilterLogEventsResponse, AWSError>;
  /**
   * Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream. By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events), or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call.
   */
  filterLogEvents(callback?: (err: AWSError, data: CloudWatchLogs.Types.FilterLogEventsResponse) => void): Request<CloudWatchLogs.Types.FilterLogEventsResponse, AWSError>;
  /**
   * Lists log events from the specified log stream. You can list all the log events or filter using a time range. By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call.
   */
  getLogEvents(params: CloudWatchLogs.Types.GetLogEventsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.GetLogEventsResponse) => void): Request<CloudWatchLogs.Types.GetLogEventsResponse, AWSError>;
  /**
   * Lists log events from the specified log stream. You can list all the log events or filter using a time range. By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call.
   */
  getLogEvents(callback?: (err: AWSError, data: CloudWatchLogs.Types.GetLogEventsResponse) => void): Request<CloudWatchLogs.Types.GetLogEventsResponse, AWSError>;
  /**
   * Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify. In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, @timestamp is the timestamp of each log event. The response results are sorted by the frequency percentage, starting with the highest percentage.
   */
  getLogGroupFields(params: CloudWatchLogs.Types.GetLogGroupFieldsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.GetLogGroupFieldsResponse) => void): Request<CloudWatchLogs.Types.GetLogGroupFieldsResponse, AWSError>;
  /**
   * Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify. In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, @timestamp is the timestamp of each log event. The response results are sorted by the frequency percentage, starting with the highest percentage.
   */
  getLogGroupFields(callback?: (err: AWSError, data: CloudWatchLogs.Types.GetLogGroupFieldsResponse) => void): Request<CloudWatchLogs.Types.GetLogGroupFieldsResponse, AWSError>;
  /**
   * Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs. Additionally, the entire unparsed log event is returned within @message.
   */
  getLogRecord(params: CloudWatchLogs.Types.GetLogRecordRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.GetLogRecordResponse) => void): Request<CloudWatchLogs.Types.GetLogRecordResponse, AWSError>;
  /**
   * Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs. Additionally, the entire unparsed log event is returned within @message.
   */
  getLogRecord(callback?: (err: AWSError, data: CloudWatchLogs.Types.GetLogRecordResponse) => void): Request<CloudWatchLogs.Types.GetLogRecordResponse, AWSError>;
  /**
   * Returns the results from the specified query. Only the fields requested in the query are returned, along with a @ptr field which is the identifier for the log record. You can use the value of @ptr in a operation to get the full log record.  GetQueryResults does not start a query execution. To run a query, use . If the value of the Status field in the output is Running, this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results. 
   */
  getQueryResults(params: CloudWatchLogs.Types.GetQueryResultsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.GetQueryResultsResponse) => void): Request<CloudWatchLogs.Types.GetQueryResultsResponse, AWSError>;
  /**
   * Returns the results from the specified query. Only the fields requested in the query are returned, along with a @ptr field which is the identifier for the log record. You can use the value of @ptr in a operation to get the full log record.  GetQueryResults does not start a query execution. To run a query, use . If the value of the Status field in the output is Running, this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results. 
   */
  getQueryResults(callback?: (err: AWSError, data: CloudWatchLogs.Types.GetQueryResultsResponse) => void): Request<CloudWatchLogs.Types.GetQueryResultsResponse, AWSError>;
  /**
   * Lists the tags for the specified log group.
   */
  listTagsLogGroup(params: CloudWatchLogs.Types.ListTagsLogGroupRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.ListTagsLogGroupResponse) => void): Request<CloudWatchLogs.Types.ListTagsLogGroupResponse, AWSError>;
  /**
   * Lists the tags for the specified log group.
   */
  listTagsLogGroup(callback?: (err: AWSError, data: CloudWatchLogs.Types.ListTagsLogGroupResponse) => void): Request<CloudWatchLogs.Types.ListTagsLogGroupResponse, AWSError>;
  /**
   * Creates or updates a destination. A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents. A destination can be an Amazon Kinesis stream, Amazon Kinesis Data Firehose strea, or an AWS Lambda function. Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination.
   */
  putDestination(params: CloudWatchLogs.Types.PutDestinationRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.PutDestinationResponse) => void): Request<CloudWatchLogs.Types.PutDestinationResponse, AWSError>;
  /**
   * Creates or updates a destination. A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents. A destination can be an Amazon Kinesis stream, Amazon Kinesis Data Firehose strea, or an AWS Lambda function. Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination.
   */
  putDestination(callback?: (err: AWSError, data: CloudWatchLogs.Types.PutDestinationResponse) => void): Request<CloudWatchLogs.Types.PutDestinationResponse, AWSError>;
  /**
   * Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.
   */
  putDestinationPolicy(params: CloudWatchLogs.Types.PutDestinationPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.
   */
  putDestinationPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Uploads a batch of log events to the specified log stream. You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using DescribeLogStreams. If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken, both calls may be successful, or one may be rejected. The batch of events must satisfy the following constraints:   The maximum batch size is 1,048,576 bytes, and this size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.   None of the log events in the batch can be more than 2 hours in the future.   None of the log events in the batch can be older than 14 days or older than the retention period of the log group.   The log events in the batch must be in chronological ordered by their timestamp. The timestamp is the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In AWS Tools for PowerShell and the AWS SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.)    The maximum number of log events in a batch is 10,000.   A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.   If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is an invalid AWS access key ID or secret key. 
   */
  putLogEvents(params: CloudWatchLogs.Types.PutLogEventsRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.PutLogEventsResponse) => void): Request<CloudWatchLogs.Types.PutLogEventsResponse, AWSError>;
  /**
   * Uploads a batch of log events to the specified log stream. You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using DescribeLogStreams. If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken, both calls may be successful, or one may be rejected. The batch of events must satisfy the following constraints:   The maximum batch size is 1,048,576 bytes, and this size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.   None of the log events in the batch can be more than 2 hours in the future.   None of the log events in the batch can be older than 14 days or older than the retention period of the log group.   The log events in the batch must be in chronological ordered by their timestamp. The timestamp is the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In AWS Tools for PowerShell and the AWS SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.)    The maximum number of log events in a batch is 10,000.   A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.   If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is an invalid AWS access key ID or secret key. 
   */
  putLogEvents(callback?: (err: AWSError, data: CloudWatchLogs.Types.PutLogEventsResponse) => void): Request<CloudWatchLogs.Types.PutLogEventsResponse, AWSError>;
  /**
   * Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through PutLogEvents. The maximum number of metric filters that can be associated with a log group is 100.
   */
  putMetricFilter(params: CloudWatchLogs.Types.PutMetricFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through PutLogEvents. The maximum number of metric filters that can be associated with a log group is 100.
   */
  putMetricFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a resource policy allowing other AWS services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per region.
   */
  putResourcePolicy(params: CloudWatchLogs.Types.PutResourcePolicyRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.PutResourcePolicyResponse) => void): Request<CloudWatchLogs.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Creates or updates a resource policy allowing other AWS services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per region.
   */
  putResourcePolicy(callback?: (err: AWSError, data: CloudWatchLogs.Types.PutResourcePolicyResponse) => void): Request<CloudWatchLogs.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group.
   */
  putRetentionPolicy(params: CloudWatchLogs.Types.PutRetentionPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group.
   */
  putRetentionPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination that belongs to a different account, for cross-account delivery.   An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.   An AWS Lambda function that belongs to the same account as the subscription filter, for same-account delivery.   There can only be one subscription filter associated with a log group. If you are updating an existing filter, you must specify the correct name in filterName. Otherwise, the call fails because you cannot associate a second filter with a log group.
   */
  putSubscriptionFilter(params: CloudWatchLogs.Types.PutSubscriptionFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination that belongs to a different account, for cross-account delivery.   An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.   An AWS Lambda function that belongs to the same account as the subscription filter, for same-account delivery.   There can only be one subscription filter associated with a log group. If you are updating an existing filter, you must specify the correct name in filterName. Otherwise, the call fails because you cannot associate a second filter with a log group.
   */
  putSubscriptionFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use. For more information, see CloudWatch Logs Insights Query Syntax. Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched, or partition your query into a number of queries.
   */
  startQuery(params: CloudWatchLogs.Types.StartQueryRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.StartQueryResponse) => void): Request<CloudWatchLogs.Types.StartQueryResponse, AWSError>;
  /**
   * Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use. For more information, see CloudWatch Logs Insights Query Syntax. Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched, or partition your query into a number of queries.
   */
  startQuery(callback?: (err: AWSError, data: CloudWatchLogs.Types.StartQueryResponse) => void): Request<CloudWatchLogs.Types.StartQueryResponse, AWSError>;
  /**
   * Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
   */
  stopQuery(params: CloudWatchLogs.Types.StopQueryRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.StopQueryResponse) => void): Request<CloudWatchLogs.Types.StopQueryResponse, AWSError>;
  /**
   * Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
   */
  stopQuery(callback?: (err: AWSError, data: CloudWatchLogs.Types.StopQueryResponse) => void): Request<CloudWatchLogs.Types.StopQueryResponse, AWSError>;
  /**
   * Adds or updates the specified tags for the specified log group. To list the tags for a log group, use ListTagsLogGroup. To remove tags, use UntagLogGroup. For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide.
   */
  tagLogGroup(params: CloudWatchLogs.Types.TagLogGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates the specified tags for the specified log group. To list the tags for a log group, use ListTagsLogGroup. To remove tags, use UntagLogGroup. For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide.
   */
  tagLogGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
   */
  testMetricFilter(params: CloudWatchLogs.Types.TestMetricFilterRequest, callback?: (err: AWSError, data: CloudWatchLogs.Types.TestMetricFilterResponse) => void): Request<CloudWatchLogs.Types.TestMetricFilterResponse, AWSError>;
  /**
   * Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
   */
  testMetricFilter(callback?: (err: AWSError, data: CloudWatchLogs.Types.TestMetricFilterResponse) => void): Request<CloudWatchLogs.Types.TestMetricFilterResponse, AWSError>;
  /**
   * Removes the specified tags from the specified log group. To list the tags for a log group, use ListTagsLogGroup. To add tags, use UntagLogGroup.
   */
  untagLogGroup(params: CloudWatchLogs.Types.UntagLogGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified log group. To list the tags for a log group, use ListTagsLogGroup. To add tags, use UntagLogGroup.
   */
  untagLogGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace CloudWatchLogs {
  export type AccessPolicy = string;
  export type Arn = string;
  export interface AssociateKmsKeyRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. For more information, see Amazon Resource Names - AWS Key Management Service (AWS KMS).
     */
    kmsKeyId: KmsKeyId;
  }
  export interface CancelExportTaskRequest {
    /**
     * The ID of the export task.
     */
    taskId: ExportTaskId;
  }
  export interface CreateExportTaskRequest {
    /**
     * The name of the export task.
     */
    taskName?: ExportTaskName;
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * Export only log streams that match the provided prefix. If you don't specify a value, no prefix filter is applied.
     */
    logStreamNamePrefix?: LogStreamName;
    /**
     * The start time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not exported.
     */
    from: Timestamp;
    /**
     * The end time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.
     */
    to: Timestamp;
    /**
     * The name of S3 bucket for the exported log data. The bucket must be in the same AWS region.
     */
    destination: ExportDestinationBucket;
    /**
     * The prefix used as the start of the key for every object exported. If you don't specify a value, the default is exportedlogs.
     */
    destinationPrefix?: ExportDestinationPrefix;
  }
  export interface CreateExportTaskResponse {
    /**
     * The ID of the export task.
     */
    taskId?: ExportTaskId;
  }
  export interface CreateLogGroupRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. For more information, see Amazon Resource Names - AWS Key Management Service (AWS KMS).
     */
    kmsKeyId?: KmsKeyId;
    /**
     * The key-value pairs to use for the tags.
     */
    tags?: Tags;
  }
  export interface CreateLogStreamRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream.
     */
    logStreamName: LogStreamName;
  }
  export type Days = number;
  export type DefaultValue = number;
  export interface DeleteDestinationRequest {
    /**
     * The name of the destination.
     */
    destinationName: DestinationName;
  }
  export interface DeleteLogGroupRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
  }
  export interface DeleteLogStreamRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream.
     */
    logStreamName: LogStreamName;
  }
  export interface DeleteMetricFilterRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the metric filter.
     */
    filterName: FilterName;
  }
  export interface DeleteResourcePolicyRequest {
    /**
     * The name of the policy to be revoked. This parameter is required.
     */
    policyName?: PolicyName;
  }
  export interface DeleteRetentionPolicyRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
  }
  export interface DeleteSubscriptionFilterRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the subscription filter.
     */
    filterName: FilterName;
  }
  export type Descending = boolean;
  export interface DescribeDestinationsRequest {
    /**
     * The prefix to match. If you don't specify a value, no prefix filter is applied.
     */
    DestinationNamePrefix?: DestinationName;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeDestinationsResponse {
    /**
     * The destinations.
     */
    destinations?: Destinations;
    nextToken?: NextToken;
  }
  export interface DescribeExportTasksRequest {
    /**
     * The ID of the export task. Specifying a task ID filters the results to zero or one export tasks.
     */
    taskId?: ExportTaskId;
    /**
     * The status code of the export task. Specifying a status code filters the results to zero or more export tasks.
     */
    statusCode?: ExportTaskStatusCode;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeExportTasksResponse {
    /**
     * The export tasks.
     */
    exportTasks?: ExportTasks;
    nextToken?: NextToken;
  }
  export type DescribeLimit = number;
  export interface DescribeLogGroupsRequest {
    /**
     * The prefix to match.
     */
    logGroupNamePrefix?: LogGroupName;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeLogGroupsResponse {
    /**
     * The log groups.
     */
    logGroups?: LogGroups;
    nextToken?: NextToken;
  }
  export interface DescribeLogStreamsRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The prefix to match. If orderBy is LastEventTime,you cannot specify this parameter.
     */
    logStreamNamePrefix?: LogStreamName;
    /**
     * If the value is LogStreamName, the results are ordered by log stream name. If the value is LastEventTime, the results are ordered by the event time. The default value is LogStreamName. If you order the results by event time, you cannot specify the logStreamNamePrefix parameter. lastEventTimestamp represents the time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. lastEventTimeStamp updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but may take longer in some rare situations.
     */
    orderBy?: OrderBy;
    /**
     * If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false.
     */
    descending?: Descending;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeLogStreamsResponse {
    /**
     * The log streams.
     */
    logStreams?: LogStreams;
    nextToken?: NextToken;
  }
  export interface DescribeMetricFiltersRequest {
    /**
     * The name of the log group.
     */
    logGroupName?: LogGroupName;
    /**
     * The prefix to match.
     */
    filterNamePrefix?: FilterName;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
     */
    limit?: DescribeLimit;
    /**
     * Filters results to include only those with the specified metric name. If you include this parameter in your request, you must also include the metricNamespace parameter.
     */
    metricName?: MetricName;
    /**
     * Filters results to include only those in the specified namespace. If you include this parameter in your request, you must also include the metricName parameter.
     */
    metricNamespace?: MetricNamespace;
  }
  export interface DescribeMetricFiltersResponse {
    /**
     * The metric filters.
     */
    metricFilters?: MetricFilters;
    nextToken?: NextToken;
  }
  export type DescribeQueriesMaxResults = number;
  export interface DescribeQueriesRequest {
    /**
     * Limits the returned queries to only those for the specified log group.
     */
    logGroupName?: LogGroupName;
    /**
     * Limits the returned queries to only those that have the specified status. Valid values are Cancelled, Complete, Failed, Running, and Scheduled.
     */
    status?: QueryStatus;
    /**
     * Limits the number of returned queries to the specified number.
     */
    maxResults?: DescribeQueriesMaxResults;
    nextToken?: NextToken;
  }
  export interface DescribeQueriesResponse {
    /**
     * The list of queries that match the request.
     */
    queries?: QueryInfoList;
    nextToken?: NextToken;
  }
  export interface DescribeResourcePoliciesRequest {
    nextToken?: NextToken;
    /**
     * The maximum number of resource policies to be displayed with one call of this API.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeResourcePoliciesResponse {
    /**
     * The resource policies that exist in this account.
     */
    resourcePolicies?: ResourcePolicies;
    nextToken?: NextToken;
  }
  export interface DescribeSubscriptionFiltersRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The prefix to match. If you don't specify a value, no prefix filter is applied.
     */
    filterNamePrefix?: FilterName;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeSubscriptionFiltersResponse {
    /**
     * The subscription filters.
     */
    subscriptionFilters?: SubscriptionFilters;
    nextToken?: NextToken;
  }
  export interface Destination {
    /**
     * The name of the destination.
     */
    destinationName?: DestinationName;
    /**
     * The Amazon Resource Name (ARN) of the physical target to where the log events are delivered (for example, a Kinesis stream).
     */
    targetArn?: TargetArn;
    /**
     * A role for impersonation, used when delivering log events to the target.
     */
    roleArn?: RoleArn;
    /**
     * An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
     */
    accessPolicy?: AccessPolicy;
    /**
     * The ARN of this destination.
     */
    arn?: Arn;
    /**
     * The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    creationTime?: Timestamp;
  }
  export type DestinationArn = string;
  export type DestinationName = string;
  export type Destinations = Destination[];
  export interface DisassociateKmsKeyRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
  }
  export type Distribution = "Random"|"ByLogStream";
  export type EventId = string;
  export type EventMessage = string;
  export type EventNumber = number;
  export type EventsLimit = number;
  export type ExportDestinationBucket = string;
  export type ExportDestinationPrefix = string;
  export interface ExportTask {
    /**
     * The ID of the export task.
     */
    taskId?: ExportTaskId;
    /**
     * The name of the export task.
     */
    taskName?: ExportTaskName;
    /**
     * The name of the log group from which logs data was exported.
     */
    logGroupName?: LogGroupName;
    /**
     * The start time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not exported.
     */
    from?: Timestamp;
    /**
     * The end time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.
     */
    to?: Timestamp;
    /**
     * The name of Amazon S3 bucket to which the log data was exported.
     */
    destination?: ExportDestinationBucket;
    /**
     * The prefix that was used as the start of Amazon S3 key for every object exported.
     */
    destinationPrefix?: ExportDestinationPrefix;
    /**
     * The status of the export task.
     */
    status?: ExportTaskStatus;
    /**
     * Execution info about the export task.
     */
    executionInfo?: ExportTaskExecutionInfo;
  }
  export interface ExportTaskExecutionInfo {
    /**
     * The creation time of the export task, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    creationTime?: Timestamp;
    /**
     * The completion time of the export task, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    completionTime?: Timestamp;
  }
  export type ExportTaskId = string;
  export type ExportTaskName = string;
  export interface ExportTaskStatus {
    /**
     * The status code of the export task.
     */
    code?: ExportTaskStatusCode;
    /**
     * The status message related to the status code.
     */
    message?: ExportTaskStatusMessage;
  }
  export type ExportTaskStatusCode = "CANCELLED"|"COMPLETED"|"FAILED"|"PENDING"|"PENDING_CANCEL"|"RUNNING";
  export type ExportTaskStatusMessage = string;
  export type ExportTasks = ExportTask[];
  export type ExtractedValues = {[key: string]: Value};
  export type Field = string;
  export type FilterCount = number;
  export interface FilterLogEventsRequest {
    /**
     * The name of the log group to search.
     */
    logGroupName: LogGroupName;
    /**
     * Filters the results to only logs from the log streams in this list. If you specify a value for both logStreamNamePrefix and logStreamNames, the action returns an InvalidParameterException error.
     */
    logStreamNames?: InputLogStreamNames;
    /**
     * Filters the results to include only events from log streams that have names starting with this prefix. If you specify a value for both logStreamNamePrefix and logStreamNames, but the value for logStreamNamePrefix does not match any log stream names specified in logStreamNames, the action returns an InvalidParameterException error.
     */
    logStreamNamePrefix?: LogStreamName;
    /**
     * The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not returned.
     */
    startTime?: Timestamp;
    /**
     * The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not returned.
     */
    endTime?: Timestamp;
    /**
     * The filter pattern to use. For more information, see Filter and Pattern Syntax. If not provided, all the events are matched.
     */
    filterPattern?: FilterPattern;
    /**
     * The token for the next set of events to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of events to return. The default is 10,000 events.
     */
    limit?: EventsLimit;
    /**
     * If the value is true, the operation makes a best effort to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on. The default is false.  IMPORTANT: Starting on June 17, 2019, this parameter will be ignored and the value will be assumed to be true. The response from this operation will always interleave events from multiple log streams within a log group.
     */
    interleaved?: Interleaved;
  }
  export interface FilterLogEventsResponse {
    /**
     * The matched events.
     */
    events?: FilteredLogEvents;
    /**
     * Indicates which log streams have been searched and whether each has been searched completely.
     */
    searchedLogStreams?: SearchedLogStreams;
    /**
     * The token to use when requesting the next set of items. The token expires after 24 hours.
     */
    nextToken?: NextToken;
  }
  export type FilterName = string;
  export type FilterPattern = string;
  export interface FilteredLogEvent {
    /**
     * The name of the log stream to which this event belongs.
     */
    logStreamName?: LogStreamName;
    /**
     * The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    timestamp?: Timestamp;
    /**
     * The data contained in the log event.
     */
    message?: EventMessage;
    /**
     * The time the event was ingested, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    ingestionTime?: Timestamp;
    /**
     * The ID of the event.
     */
    eventId?: EventId;
  }
  export type FilteredLogEvents = FilteredLogEvent[];
  export interface GetLogEventsRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream.
     */
    logStreamName: LogStreamName;
    /**
     * The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to this time or later than this time are included. Events with a timestamp earlier than this time are not included.
     */
    startTime?: Timestamp;
    /**
     * The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to or later than this time are not included.
     */
    endTime?: Timestamp;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The maximum number of log events returned. If you don't specify a value, the maximum is as many log events as can fit in a response size of 1 MB, up to 10,000 log events.
     */
    limit?: EventsLimit;
    /**
     * If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false. If you are using nextToken in this operation, you must specify true for startFromHead.
     */
    startFromHead?: StartFromHead;
  }
  export interface GetLogEventsResponse {
    /**
     * The events.
     */
    events?: OutputLogEvents;
    /**
     * The token for the next set of items in the forward direction. The token expires after 24 hours. If you have reached the end of the stream, it will return the same token you passed in.
     */
    nextForwardToken?: NextToken;
    /**
     * The token for the next set of items in the backward direction. The token expires after 24 hours. This token will never be null. If you have reached the end of the stream, it will return the same token you passed in.
     */
    nextBackwardToken?: NextToken;
  }
  export interface GetLogGroupFieldsRequest {
    /**
     * The name of the log group to search.
     */
    logGroupName: LogGroupName;
    /**
     * The time to set as the center of the query. If you specify time, the 8 minutes before and 8 minutes after this time are searched. If you omit time, the past 15 minutes are queried. The time value is specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.
     */
    time?: Timestamp;
  }
  export interface GetLogGroupFieldsResponse {
    /**
     * The array of fields found in the query. Each object in the array contains the name of the field, along with the percentage of time it appeared in the log events that were queried.
     */
    logGroupFields?: LogGroupFieldList;
  }
  export interface GetLogRecordRequest {
    /**
     * The pointer corresponding to the log event record you want to retrieve. You get this from the response of a GetQueryResults operation. In that response, the value of the @ptr field for a log event is the value to use as logRecordPointer to retrieve that complete log event record.
     */
    logRecordPointer: LogRecordPointer;
  }
  export interface GetLogRecordResponse {
    /**
     * The requested log event, as a JSON string.
     */
    logRecord?: LogRecord;
  }
  export interface GetQueryResultsRequest {
    /**
     * The ID number of the query.
     */
    queryId: QueryId;
  }
  export interface GetQueryResultsResponse {
    /**
     * The log events that matched the query criteria during the most recent time it ran. The results value is an array of arrays. Each log event is one object in the top-level array. Each of these log event objects is an array of field/value pairs.
     */
    results?: QueryResults;
    /**
     * Includes the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
     */
    statistics?: QueryStatistics;
    /**
     * The status of the most recent running of the query. Possible values are Cancelled, Complete, Failed, Running, Scheduled, Timeout, and Unknown. Queries time out after 15 minutes of execution. To avoid having your queries time out, reduce the time range being searched, or partition your query into a number of queries.
     */
    status?: QueryStatus;
  }
  export interface InputLogEvent {
    /**
     * The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    timestamp: Timestamp;
    /**
     * The raw event message.
     */
    message: EventMessage;
  }
  export type InputLogEvents = InputLogEvent[];
  export type InputLogStreamNames = LogStreamName[];
  export type Interleaved = boolean;
  export type KmsKeyId = string;
  export interface ListTagsLogGroupRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
  }
  export interface ListTagsLogGroupResponse {
    /**
     * The tags for the log group.
     */
    tags?: Tags;
  }
  export type LogEventIndex = number;
  export interface LogGroup {
    /**
     * The name of the log group.
     */
    logGroupName?: LogGroupName;
    /**
     * The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    creationTime?: Timestamp;
    retentionInDays?: Days;
    /**
     * The number of metric filters.
     */
    metricFilterCount?: FilterCount;
    /**
     * The Amazon Resource Name (ARN) of the log group.
     */
    arn?: Arn;
    /**
     * The number of bytes stored.
     */
    storedBytes?: StoredBytes;
    /**
     * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
     */
    kmsKeyId?: KmsKeyId;
  }
  export interface LogGroupField {
    /**
     * The name of a log field.
     */
    name?: Field;
    /**
     * The percentage of log events queried that contained the field.
     */
    percent?: Percentage;
  }
  export type LogGroupFieldList = LogGroupField[];
  export type LogGroupName = string;
  export type LogGroupNames = LogGroupName[];
  export type LogGroups = LogGroup[];
  export type LogRecord = {[key: string]: Value};
  export type LogRecordPointer = string;
  export interface LogStream {
    /**
     * The name of the log stream.
     */
    logStreamName?: LogStreamName;
    /**
     * The creation time of the stream, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    creationTime?: Timestamp;
    /**
     * The time of the first event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    firstEventTimestamp?: Timestamp;
    /**
     * The time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. The lastEventTime value updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but may take longer in some rare situations.
     */
    lastEventTimestamp?: Timestamp;
    /**
     * The ingestion time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    lastIngestionTime?: Timestamp;
    /**
     * The sequence token.
     */
    uploadSequenceToken?: SequenceToken;
    /**
     * The Amazon Resource Name (ARN) of the log stream.
     */
    arn?: Arn;
    /**
     * The number of bytes stored.  IMPORTANT: Starting on June 17, 2019, this parameter will be deprecated for log streams, and will be reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.
     */
    storedBytes?: StoredBytes;
  }
  export type LogStreamName = string;
  export type LogStreamSearchedCompletely = boolean;
  export type LogStreams = LogStream[];
  export interface MetricFilter {
    /**
     * The name of the metric filter.
     */
    filterName?: FilterName;
    filterPattern?: FilterPattern;
    /**
     * The metric transformations.
     */
    metricTransformations?: MetricTransformations;
    /**
     * The creation time of the metric filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    creationTime?: Timestamp;
    /**
     * The name of the log group.
     */
    logGroupName?: LogGroupName;
  }
  export interface MetricFilterMatchRecord {
    /**
     * The event number.
     */
    eventNumber?: EventNumber;
    /**
     * The raw event data.
     */
    eventMessage?: EventMessage;
    /**
     * The values extracted from the event data by the filter.
     */
    extractedValues?: ExtractedValues;
  }
  export type MetricFilterMatches = MetricFilterMatchRecord[];
  export type MetricFilters = MetricFilter[];
  export type MetricName = string;
  export type MetricNamespace = string;
  export interface MetricTransformation {
    /**
     * The name of the CloudWatch metric.
     */
    metricName: MetricName;
    /**
     * The namespace of the CloudWatch metric.
     */
    metricNamespace: MetricNamespace;
    /**
     * The value to publish to the CloudWatch metric when a filter pattern matches a log event.
     */
    metricValue: MetricValue;
    /**
     * (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
     */
    defaultValue?: DefaultValue;
  }
  export type MetricTransformations = MetricTransformation[];
  export type MetricValue = string;
  export type NextToken = string;
  export type OrderBy = "LogStreamName"|"LastEventTime";
  export interface OutputLogEvent {
    /**
     * The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    timestamp?: Timestamp;
    /**
     * The data contained in the log event.
     */
    message?: EventMessage;
    /**
     * The time the event was ingested, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    ingestionTime?: Timestamp;
  }
  export type OutputLogEvents = OutputLogEvent[];
  export type Percentage = number;
  export type PolicyDocument = string;
  export type PolicyName = string;
  export interface PutDestinationPolicyRequest {
    /**
     * A name for an existing destination.
     */
    destinationName: DestinationName;
    /**
     * An IAM policy document that authorizes cross-account users to deliver their log events to the associated destination.
     */
    accessPolicy: AccessPolicy;
  }
  export interface PutDestinationRequest {
    /**
     * A name for the destination.
     */
    destinationName: DestinationName;
    /**
     * The ARN of an Amazon Kinesis stream to which to deliver matching log events.
     */
    targetArn: TargetArn;
    /**
     * The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon Kinesis PutRecord operation on the destination stream.
     */
    roleArn: RoleArn;
  }
  export interface PutDestinationResponse {
    /**
     * The destination.
     */
    destination?: Destination;
  }
  export interface PutLogEventsRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream.
     */
    logStreamName: LogStreamName;
    /**
     * The log events.
     */
    logEvents: InputLogEvents;
    /**
     * The sequence token obtained from the response of the previous PutLogEvents call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using DescribeLogStreams. If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken, both calls may be successful, or one may be rejected.
     */
    sequenceToken?: SequenceToken;
  }
  export interface PutLogEventsResponse {
    /**
     * The next sequence token.
     */
    nextSequenceToken?: SequenceToken;
    /**
     * The rejected events.
     */
    rejectedLogEventsInfo?: RejectedLogEventsInfo;
  }
  export interface PutMetricFilterRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * A name for the metric filter.
     */
    filterName: FilterName;
    /**
     * A filter pattern for extracting metric data out of ingested log events.
     */
    filterPattern: FilterPattern;
    /**
     * A collection of information that defines how metric data gets emitted.
     */
    metricTransformations: MetricTransformations;
  }
  export interface PutResourcePolicyRequest {
    /**
     * Name of the new policy. This parameter is required.
     */
    policyName?: PolicyName;
    /**
     * Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. This parameter is required. The following example creates a resource policy enabling the Route 53 service to put DNS query logs in to the specified log group. Replace "logArn" with the ARN of your CloudWatch Logs resource, such as a log group or log stream.  { "Version": "2012-10-17", "Statement": [ { "Sid": "Route53LogsToCloudWatchLogs", "Effect": "Allow", "Principal": { "Service": [ "route53.amazonaws.com" ] }, "Action":"logs:PutLogEvents", "Resource": "logArn" } ] }  
     */
    policyDocument?: PolicyDocument;
  }
  export interface PutResourcePolicyResponse {
    /**
     * The new policy.
     */
    resourcePolicy?: ResourcePolicy;
  }
  export interface PutRetentionPolicyRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    retentionInDays: Days;
  }
  export interface PutSubscriptionFilterRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * A name for the subscription filter. If you are updating an existing filter, you must specify the correct name in filterName. Otherwise, the call fails because you cannot associate a second filter with a log group. To find the name of the filter currently associated with a log group, use DescribeSubscriptionFilters.
     */
    filterName: FilterName;
    /**
     * A filter pattern for subscribing to a filtered stream of log events.
     */
    filterPattern: FilterPattern;
    /**
     * The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination (specified using an ARN) belonging to a different account, for cross-account delivery.   An Amazon Kinesis Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.   An AWS Lambda function belonging to the same account as the subscription filter, for same-account delivery.  
     */
    destinationArn: DestinationArn;
    /**
     * The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
     */
    roleArn?: RoleArn;
    /**
     * The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. 
     */
    distribution?: Distribution;
  }
  export type QueryId = string;
  export interface QueryInfo {
    /**
     * The unique ID number of this query.
     */
    queryId?: QueryId;
    /**
     * The query string used in this query.
     */
    queryString?: QueryString;
    /**
     * The status of this query. Possible values are Cancelled, Complete, Failed, Running, Scheduled, and Unknown.
     */
    status?: QueryStatus;
    /**
     * The date and time that this query was created.
     */
    createTime?: Timestamp;
    /**
     * The name of the log group scanned by this query.
     */
    logGroupName?: LogGroupName;
  }
  export type QueryInfoList = QueryInfo[];
  export type QueryResults = ResultRows[];
  export interface QueryStatistics {
    /**
     * The number of log events that matched the query string.
     */
    recordsMatched?: StatsValue;
    /**
     * The total number of log events scanned during the query.
     */
    recordsScanned?: StatsValue;
    /**
     * The total number of bytes in the log events scanned during the query.
     */
    bytesScanned?: StatsValue;
  }
  export type QueryStatus = "Scheduled"|"Running"|"Complete"|"Failed"|"Cancelled";
  export type QueryString = string;
  export interface RejectedLogEventsInfo {
    /**
     * The log events that are too new.
     */
    tooNewLogEventStartIndex?: LogEventIndex;
    /**
     * The log events that are too old.
     */
    tooOldLogEventEndIndex?: LogEventIndex;
    /**
     * The expired log events.
     */
    expiredLogEventEndIndex?: LogEventIndex;
  }
  export type ResourcePolicies = ResourcePolicy[];
  export interface ResourcePolicy {
    /**
     * The name of the resource policy.
     */
    policyName?: PolicyName;
    /**
     * The details of the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * Timestamp showing when this policy was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    lastUpdatedTime?: Timestamp;
  }
  export interface ResultField {
    /**
     * The log event field.
     */
    field?: Field;
    /**
     * The value of this field.
     */
    value?: Value;
  }
  export type ResultRows = ResultField[];
  export type RoleArn = string;
  export interface SearchedLogStream {
    /**
     * The name of the log stream.
     */
    logStreamName?: LogStreamName;
    /**
     * Indicates whether all the events in this log stream were searched.
     */
    searchedCompletely?: LogStreamSearchedCompletely;
  }
  export type SearchedLogStreams = SearchedLogStream[];
  export type SequenceToken = string;
  export type StartFromHead = boolean;
  export interface StartQueryRequest {
    /**
     * The log group on which to perform the query. A StartQuery operation must include a logGroupNames or a logGroupName parameter, but not both.
     */
    logGroupName?: LogGroupName;
    /**
     * The list of log groups to be queried. You can include up to 20 log groups. A StartQuery operation must include a logGroupNames or a logGroupName parameter, but not both.
     */
    logGroupNames?: LogGroupNames;
    /**
     * The beginning of the time range to query. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.
     */
    startTime: Timestamp;
    /**
     * The end of the time range to query. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.
     */
    endTime: Timestamp;
    /**
     * The query string to use. For more information, see CloudWatch Logs Insights Query Syntax.
     */
    queryString: QueryString;
    /**
     * The maximum number of log events to return in the query. If the query string uses the fields command, only the specified fields and their values are returned.
     */
    limit?: EventsLimit;
  }
  export interface StartQueryResponse {
    /**
     * The unique ID of the query. 
     */
    queryId?: QueryId;
  }
  export type StatsValue = number;
  export interface StopQueryRequest {
    /**
     * The ID number of the query to stop. If necessary, you can use DescribeQueries to find this ID number.
     */
    queryId: QueryId;
  }
  export interface StopQueryResponse {
    /**
     * This is true if the query was stopped by the StopQuery operation.
     */
    success?: Success;
  }
  export type StoredBytes = number;
  export interface SubscriptionFilter {
    /**
     * The name of the subscription filter.
     */
    filterName?: FilterName;
    /**
     * The name of the log group.
     */
    logGroupName?: LogGroupName;
    filterPattern?: FilterPattern;
    /**
     * The Amazon Resource Name (ARN) of the destination.
     */
    destinationArn?: DestinationArn;
    /**
     * 
     */
    roleArn?: RoleArn;
    distribution?: Distribution;
    /**
     * The creation time of the subscription filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
     */
    creationTime?: Timestamp;
  }
  export type SubscriptionFilters = SubscriptionFilter[];
  export type Success = boolean;
  export type TagKey = string;
  export type TagList = TagKey[];
  export interface TagLogGroupRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The key-value pairs to use for the tags.
     */
    tags: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type TargetArn = string;
  export type TestEventMessages = EventMessage[];
  export interface TestMetricFilterRequest {
    filterPattern: FilterPattern;
    /**
     * The log event messages to test.
     */
    logEventMessages: TestEventMessages;
  }
  export interface TestMetricFilterResponse {
    /**
     * The matched events.
     */
    matches?: MetricFilterMatches;
  }
  export type Timestamp = number;
  export type Token = string;
  export interface UntagLogGroupRequest {
    /**
     * The name of the log group.
     */
    logGroupName: LogGroupName;
    /**
     * The tag keys. The corresponding tags are removed from the log group.
     */
    tags: TagList;
  }
  export type Value = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-03-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudWatchLogs client.
   */
  export import Types = CloudWatchLogs;
}
export = CloudWatchLogs;
