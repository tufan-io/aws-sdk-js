import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudWatch extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudWatch.Types.ClientConfiguration)
  config: Config & CloudWatch.Types.ClientConfiguration;
  /**
   * Deletes the specified alarms. You can delete up to 50 alarms in one operation. In the event of an error, no alarms are deleted.
   */
  deleteAlarms(params: CloudWatch.Types.DeleteAlarmsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified alarms. You can delete up to 50 alarms in one operation. In the event of an error, no alarms are deleted.
   */
  deleteAlarms(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified anomaly detection model from your account.
   */
  deleteAnomalyDetector(params: CloudWatch.Types.DeleteAnomalyDetectorInput, callback?: (err: AWSError, data: CloudWatch.Types.DeleteAnomalyDetectorOutput) => void): Request<CloudWatch.Types.DeleteAnomalyDetectorOutput, AWSError>;
  /**
   * Deletes the specified anomaly detection model from your account.
   */
  deleteAnomalyDetector(callback?: (err: AWSError, data: CloudWatch.Types.DeleteAnomalyDetectorOutput) => void): Request<CloudWatch.Types.DeleteAnomalyDetectorOutput, AWSError>;
  /**
   * Deletes all dashboards that you specify. You may specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.
   */
  deleteDashboards(params: CloudWatch.Types.DeleteDashboardsInput, callback?: (err: AWSError, data: CloudWatch.Types.DeleteDashboardsOutput) => void): Request<CloudWatch.Types.DeleteDashboardsOutput, AWSError>;
  /**
   * Deletes all dashboards that you specify. You may specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.
   */
  deleteDashboards(callback?: (err: AWSError, data: CloudWatch.Types.DeleteDashboardsOutput) => void): Request<CloudWatch.Types.DeleteDashboardsOutput, AWSError>;
  /**
   * Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for all alarms are returned. CloudWatch retains the history of an alarm even if you delete the alarm.
   */
  describeAlarmHistory(params: CloudWatch.Types.DescribeAlarmHistoryInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmHistoryOutput) => void): Request<CloudWatch.Types.DescribeAlarmHistoryOutput, AWSError>;
  /**
   * Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for all alarms are returned. CloudWatch retains the history of an alarm even if you delete the alarm.
   */
  describeAlarmHistory(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmHistoryOutput) => void): Request<CloudWatch.Types.DescribeAlarmHistoryOutput, AWSError>;
  /**
   * Retrieves the specified alarms. If no alarms are specified, all alarms are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.
   */
  describeAlarms(params: CloudWatch.Types.DescribeAlarmsInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Retrieves the specified alarms. If no alarms are specified, all alarms are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.
   */
  describeAlarms(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.
   */
  describeAlarmsForMetric(params: CloudWatch.Types.DescribeAlarmsForMetricInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsForMetricOutput) => void): Request<CloudWatch.Types.DescribeAlarmsForMetricOutput, AWSError>;
  /**
   * Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.
   */
  describeAlarmsForMetric(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsForMetricOutput) => void): Request<CloudWatch.Types.DescribeAlarmsForMetricOutput, AWSError>;
  /**
   * Lists the anomaly detection models that you have created in your account. You can list all models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension.
   */
  describeAnomalyDetectors(params: CloudWatch.Types.DescribeAnomalyDetectorsInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAnomalyDetectorsOutput) => void): Request<CloudWatch.Types.DescribeAnomalyDetectorsOutput, AWSError>;
  /**
   * Lists the anomaly detection models that you have created in your account. You can list all models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension.
   */
  describeAnomalyDetectors(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAnomalyDetectorsOutput) => void): Request<CloudWatch.Types.DescribeAnomalyDetectorsOutput, AWSError>;
  /**
   * Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
   */
  disableAlarmActions(params: CloudWatch.Types.DisableAlarmActionsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
   */
  disableAlarmActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the actions for the specified alarms.
   */
  enableAlarmActions(params: CloudWatch.Types.EnableAlarmActionsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the actions for the specified alarms.
   */
  enableAlarmActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Displays the details of the dashboard that you specify. To copy an existing dashboard, use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard to create the copy.
   */
  getDashboard(params: CloudWatch.Types.GetDashboardInput, callback?: (err: AWSError, data: CloudWatch.Types.GetDashboardOutput) => void): Request<CloudWatch.Types.GetDashboardOutput, AWSError>;
  /**
   * Displays the details of the dashboard that you specify. To copy an existing dashboard, use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard to create the copy.
   */
  getDashboard(callback?: (err: AWSError, data: CloudWatch.Types.GetDashboardOutput) => void): Request<CloudWatch.Types.GetDashboardOutput, AWSError>;
  /**
   * You can use the GetMetricData API to retrieve as many as 100 different metrics in a single request, with a total of as many as 100,800 datapoints. You can also optionally perform math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. Calls to the GetMetricData API have a different pricing structure than calls to GetMetricStatistics. For more information about pricing, see Amazon CloudWatch Pricing. Amazon CloudWatch retains metric data as follows:   Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).   Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. If you omit Unit in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
   */
  getMetricData(params: CloudWatch.Types.GetMetricDataInput, callback?: (err: AWSError, data: CloudWatch.Types.GetMetricDataOutput) => void): Request<CloudWatch.Types.GetMetricDataOutput, AWSError>;
  /**
   * You can use the GetMetricData API to retrieve as many as 100 different metrics in a single request, with a total of as many as 100,800 datapoints. You can also optionally perform math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. Calls to the GetMetricData API have a different pricing structure than calls to GetMetricStatistics. For more information about pricing, see Amazon CloudWatch Pricing. Amazon CloudWatch retains metric data as follows:   Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).   Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. If you omit Unit in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
   */
  getMetricData(callback?: (err: AWSError, data: CloudWatch.Types.GetMetricDataOutput) => void): Request<CloudWatch.Types.GetMetricDataOutput, AWSError>;
  /**
   * Gets statistics for the specified metric. The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order. CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:   The SampleCount value of the statistic set is 1.   The Min and the Max values of the statistic set are equal.   Percentile statistics are not available for metrics when any of the metric values are negative numbers. Amazon CloudWatch retains metric data as follows:   Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).   Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016. For information about metrics and dimensions supported by AWS services, see the Amazon CloudWatch Metrics and Dimensions Reference in the Amazon CloudWatch User Guide.
   */
  getMetricStatistics(params: CloudWatch.Types.GetMetricStatisticsInput, callback?: (err: AWSError, data: CloudWatch.Types.GetMetricStatisticsOutput) => void): Request<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>;
  /**
   * Gets statistics for the specified metric. The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order. CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:   The SampleCount value of the statistic set is 1.   The Min and the Max values of the statistic set are equal.   Percentile statistics are not available for metrics when any of the metric values are negative numbers. Amazon CloudWatch retains metric data as follows:   Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).   Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016. For information about metrics and dimensions supported by AWS services, see the Amazon CloudWatch Metrics and Dimensions Reference in the Amazon CloudWatch User Guide.
   */
  getMetricStatistics(callback?: (err: AWSError, data: CloudWatch.Types.GetMetricStatisticsOutput) => void): Request<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>;
  /**
   * You can use the GetMetricWidgetImage API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard. The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations. There is a limit of 20 transactions per second for this API. Each GetMetricWidgetImage action has the following limits:   As many as 100 metrics in the graph.   Up to 100 KB uncompressed payload.  
   */
  getMetricWidgetImage(params: CloudWatch.Types.GetMetricWidgetImageInput, callback?: (err: AWSError, data: CloudWatch.Types.GetMetricWidgetImageOutput) => void): Request<CloudWatch.Types.GetMetricWidgetImageOutput, AWSError>;
  /**
   * You can use the GetMetricWidgetImage API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard. The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations. There is a limit of 20 transactions per second for this API. Each GetMetricWidgetImage action has the following limits:   As many as 100 metrics in the graph.   Up to 100 KB uncompressed payload.  
   */
  getMetricWidgetImage(callback?: (err: AWSError, data: CloudWatch.Types.GetMetricWidgetImageOutput) => void): Request<CloudWatch.Types.GetMetricWidgetImageOutput, AWSError>;
  /**
   * Returns a list of the dashboards for your account. If you include DashboardNamePrefix, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed.   ListDashboards returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call ListDashboards again and include the value you received for NextToken in the first call, to receive the next 1000 results.
   */
  listDashboards(params: CloudWatch.Types.ListDashboardsInput, callback?: (err: AWSError, data: CloudWatch.Types.ListDashboardsOutput) => void): Request<CloudWatch.Types.ListDashboardsOutput, AWSError>;
  /**
   * Returns a list of the dashboards for your account. If you include DashboardNamePrefix, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed.   ListDashboards returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call ListDashboards again and include the value you received for NextToken in the first call, to receive the next 1000 results.
   */
  listDashboards(callback?: (err: AWSError, data: CloudWatch.Types.ListDashboardsOutput) => void): Request<CloudWatch.Types.ListDashboardsOutput, AWSError>;
  /**
   * List the specified metrics. You can use the returned metrics with GetMetricData or GetMetricStatistics to obtain statistical data. Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls. After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using GetMetricData or GetMetricStatistics.
   */
  listMetrics(params: CloudWatch.Types.ListMetricsInput, callback?: (err: AWSError, data: CloudWatch.Types.ListMetricsOutput) => void): Request<CloudWatch.Types.ListMetricsOutput, AWSError>;
  /**
   * List the specified metrics. You can use the returned metrics with GetMetricData or GetMetricStatistics to obtain statistical data. Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls. After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using GetMetricData or GetMetricStatistics.
   */
  listMetrics(callback?: (err: AWSError, data: CloudWatch.Types.ListMetricsOutput) => void): Request<CloudWatch.Types.ListMetricsOutput, AWSError>;
  /**
   * Displays the tags associated with a CloudWatch resource. Alarms support tagging.
   */
  listTagsForResource(params: CloudWatch.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: CloudWatch.Types.ListTagsForResourceOutput) => void): Request<CloudWatch.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Displays the tags associated with a CloudWatch resource. Alarms support tagging.
   */
  listTagsForResource(callback?: (err: AWSError, data: CloudWatch.Types.ListTagsForResourceOutput) => void): Request<CloudWatch.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed. For more information, see CloudWatch Anomaly Detection.
   */
  putAnomalyDetector(params: CloudWatch.Types.PutAnomalyDetectorInput, callback?: (err: AWSError, data: CloudWatch.Types.PutAnomalyDetectorOutput) => void): Request<CloudWatch.Types.PutAnomalyDetectorOutput, AWSError>;
  /**
   * Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed. For more information, see CloudWatch Anomaly Detection.
   */
  putAnomalyDetector(callback?: (err: AWSError, data: CloudWatch.Types.PutAnomalyDetectorOutput) => void): Request<CloudWatch.Types.PutAnomalyDetectorOutput, AWSError>;
  /**
   * Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here. All dashboards in your account are global, not region-specific. A simple way to create a dashboard using PutDashboard is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard. When you create a dashboard with PutDashboard, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the DashboardBody script or the CloudFormation template used to create the dashboard.
   */
  putDashboard(params: CloudWatch.Types.PutDashboardInput, callback?: (err: AWSError, data: CloudWatch.Types.PutDashboardOutput) => void): Request<CloudWatch.Types.PutDashboardOutput, AWSError>;
  /**
   * Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here. All dashboards in your account are global, not region-specific. A simple way to create a dashboard using PutDashboard is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard. When you create a dashboard with PutDashboard, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the DashboardBody script or the CloudFormation template used to create the dashboard.
   */
  putDashboard(callback?: (err: AWSError, data: CloudWatch.Types.PutDashboardOutput) => void): Request<CloudWatch.Types.PutDashboardOutput, AWSError>;
  /**
   * Creates or updates an alarm and associates it with the specified metric, metric math expression, or anomaly detection model. Alarms based on anomaly detection models cannot have Auto Scaling actions. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:    iam:CreateServiceLinkedRole for all alarms with EC2 actions    ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on EC2 instance status metrics    ec2:StopInstances for alarms with stop actions    ec2:TerminateInstances for alarms with terminate actions   No specific permissions are needed for alarms with recover actions   If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions are not performed. However, if you are later granted the required permissions, the alarm actions that you created earlier are performed. If you are using an IAM role (for example, an EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies. If you are using temporary security credentials granted using AWS STS, you cannot stop or terminate an EC2 instance using alarm actions. The first time you create an alarm in the AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked role is called AWSServiceRoleForCloudWatchEvents. For more information, see AWS service-linked role.
   */
  putMetricAlarm(params: CloudWatch.Types.PutMetricAlarmInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates an alarm and associates it with the specified metric, metric math expression, or anomaly detection model. Alarms based on anomaly detection models cannot have Auto Scaling actions. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:    iam:CreateServiceLinkedRole for all alarms with EC2 actions    ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on EC2 instance status metrics    ec2:StopInstances for alarms with stop actions    ec2:TerminateInstances for alarms with terminate actions   No specific permissions are needed for alarms with recover actions   If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions are not performed. However, if you are later granted the required permissions, the alarm actions that you created earlier are performed. If you are using an IAM role (for example, an EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies. If you are using temporary security credentials granted using AWS STS, you cannot stop or terminate an EC2 instance using alarm actions. The first time you create an alarm in the AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked role is called AWSServiceRoleForCloudWatchEvents. For more information, see AWS service-linked role.
   */
  putMetricAlarm(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. You can publish either individual data points in the Value field, or arrays of values and the number of times each value occurred during the period by using the Values and Counts fields in the MetricDatum structure. Using the Values and Counts method enables you to publish up to 150 values per metric with one PutMetricData request, and supports retrieving percentile statistics on this data. Each PutMetricData request is limited to 40 KB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 20 different metrics. Although the Value parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported. You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricData or GetMetricStatistics from the time they are submitted. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:   The SampleCount value of the statistic set is 1 and Min, Max, and Sum are all equal.   The Min and Max are equal, and Sum is equal to Min multiplied by SampleCount.  
   */
  putMetricData(params: CloudWatch.Types.PutMetricDataInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. You can publish either individual data points in the Value field, or arrays of values and the number of times each value occurred during the period by using the Values and Counts fields in the MetricDatum structure. Using the Values and Counts method enables you to publish up to 150 values per metric with one PutMetricData request, and supports retrieving percentile statistics on this data. Each PutMetricData request is limited to 40 KB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 20 different metrics. Although the Value parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported. You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricData or GetMetricStatistics from the time they are submitted. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:   The SampleCount value of the statistic set is 1 and Min, Max, and Sum are all equal.   The Min and Max are equal, and Sum is equal to Min multiplied by SampleCount.  
   */
  putMetricData(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory.
   */
  setAlarmState(params: CloudWatch.Types.SetAlarmStateInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory.
   */
  setAlarmState(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. In CloudWatch, alarms can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.
   */
  tagResource(params: CloudWatch.Types.TagResourceInput, callback?: (err: AWSError, data: CloudWatch.Types.TagResourceOutput) => void): Request<CloudWatch.Types.TagResourceOutput, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. In CloudWatch, alarms can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.
   */
  tagResource(callback?: (err: AWSError, data: CloudWatch.Types.TagResourceOutput) => void): Request<CloudWatch.Types.TagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified resource.
   */
  untagResource(params: CloudWatch.Types.UntagResourceInput, callback?: (err: AWSError, data: CloudWatch.Types.UntagResourceOutput) => void): Request<CloudWatch.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: CloudWatch.Types.UntagResourceOutput) => void): Request<CloudWatch.Types.UntagResourceOutput, AWSError>;
  /**
   * Waits for the alarmExists state by periodically calling the underlying CloudWatch.describeAlarmsoperation every 5 seconds (at most 40 times).
   */
  waitFor(state: "alarmExists", params: CloudWatch.Types.DescribeAlarmsInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Waits for the alarmExists state by periodically calling the underlying CloudWatch.describeAlarmsoperation every 5 seconds (at most 40 times).
   */
  waitFor(state: "alarmExists", callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
}
declare namespace CloudWatch {
  export type ActionPrefix = string;
  export type ActionsEnabled = boolean;
  export type AlarmArn = string;
  export type AlarmDescription = string;
  export interface AlarmHistoryItem {
    /**
     * The descriptive name for the alarm.
     */
    AlarmName?: AlarmName;
    /**
     * The time stamp for the alarm history item.
     */
    Timestamp?: Timestamp;
    /**
     * The type of alarm history item.
     */
    HistoryItemType?: HistoryItemType;
    /**
     * A summary of the alarm history, in text format.
     */
    HistorySummary?: HistorySummary;
    /**
     * Data about the alarm, in JSON format.
     */
    HistoryData?: HistoryData;
  }
  export type AlarmHistoryItems = AlarmHistoryItem[];
  export type AlarmName = string;
  export type AlarmNamePrefix = string;
  export type AlarmNames = AlarmName[];
  export type AmazonResourceName = string;
  export interface AnomalyDetector {
    /**
     * The namespace of the metric associated with the anomaly detection model.
     */
    Namespace?: Namespace;
    /**
     * The name of the metric associated with the anomaly detection model.
     */
    MetricName?: MetricName;
    /**
     * The metric dimensions associated with the anomaly detection model.
     */
    Dimensions?: Dimensions;
    /**
     * The statistic associated with the anomaly detection model.
     */
    Stat?: Stat;
    /**
     * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model, and the time zone to use for the metric.
     */
    Configuration?: AnomalyDetectorConfiguration;
  }
  export interface AnomalyDetectorConfiguration {
    /**
     * An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.
     */
    ExcludedTimeRanges?: AnomalyDetectorExcludedTimeRanges;
    /**
     * The time zone to use for the metric. This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes. To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see tz database.
     */
    MetricTimezone?: AnomalyDetectorMetricTimezone;
  }
  export type AnomalyDetectorExcludedTimeRanges = Range[];
  export type AnomalyDetectorMetricTimezone = string;
  export type AnomalyDetectors = AnomalyDetector[];
  export type ComparisonOperator = "GreaterThanOrEqualToThreshold"|"GreaterThanThreshold"|"LessThanThreshold"|"LessThanOrEqualToThreshold"|"LessThanLowerOrGreaterThanUpperThreshold"|"LessThanLowerThreshold"|"GreaterThanUpperThreshold";
  export type Counts = DatapointValue[];
  export type DashboardArn = string;
  export type DashboardBody = string;
  export type DashboardEntries = DashboardEntry[];
  export interface DashboardEntry {
    /**
     * The name of the dashboard.
     */
    DashboardName?: DashboardName;
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: DashboardArn;
    /**
     * The time stamp of when the dashboard was last modified, either by an API call or through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
     */
    LastModified?: LastModified;
    /**
     * The size of the dashboard, in bytes.
     */
    Size?: Size;
  }
  export type DashboardName = string;
  export type DashboardNamePrefix = string;
  export type DashboardNames = DashboardName[];
  export interface DashboardValidationMessage {
    /**
     * The data path related to the message.
     */
    DataPath?: DataPath;
    /**
     * A message describing the error or warning.
     */
    Message?: Message;
  }
  export type DashboardValidationMessages = DashboardValidationMessage[];
  export type DataPath = string;
  export interface Datapoint {
    /**
     * The time stamp used for the data point.
     */
    Timestamp?: Timestamp;
    /**
     * The number of metric values that contributed to the aggregate value of this data point.
     */
    SampleCount?: DatapointValue;
    /**
     * The average of the metric values that correspond to the data point.
     */
    Average?: DatapointValue;
    /**
     * The sum of the metric values for the data point.
     */
    Sum?: DatapointValue;
    /**
     * The minimum metric value for the data point.
     */
    Minimum?: DatapointValue;
    /**
     * The maximum metric value for the data point.
     */
    Maximum?: DatapointValue;
    /**
     * The standard unit for the data point.
     */
    Unit?: StandardUnit;
    /**
     * The percentile statistic for the data point.
     */
    ExtendedStatistics?: DatapointValueMap;
  }
  export type DatapointValue = number;
  export type DatapointValueMap = {[key: string]: DatapointValue};
  export type DatapointValues = DatapointValue[];
  export type Datapoints = Datapoint[];
  export type DatapointsToAlarm = number;
  export interface DeleteAlarmsInput {
    /**
     * The alarms to be deleted.
     */
    AlarmNames: AlarmNames;
  }
  export interface DeleteAnomalyDetectorInput {
    /**
     * The namespace associated with the anomaly detection model to delete.
     */
    Namespace: Namespace;
    /**
     * The metric name associated with the anomaly detection model to delete.
     */
    MetricName: MetricName;
    /**
     * The metric dimensions associated with the anomaly detection model to delete.
     */
    Dimensions?: Dimensions;
    /**
     * The statistic associated with the anomaly detection model to delete.
     */
    Stat: Stat;
  }
  export interface DeleteAnomalyDetectorOutput {
  }
  export interface DeleteDashboardsInput {
    /**
     * The dashboards to be deleted. This parameter is required.
     */
    DashboardNames: DashboardNames;
  }
  export interface DeleteDashboardsOutput {
  }
  export interface DescribeAlarmHistoryInput {
    /**
     * The name of the alarm.
     */
    AlarmName?: AlarmName;
    /**
     * The type of alarm histories to retrieve.
     */
    HistoryItemType?: HistoryItemType;
    /**
     * The starting date to retrieve alarm history.
     */
    StartDate?: Timestamp;
    /**
     * The ending date to retrieve alarm history.
     */
    EndDate?: Timestamp;
    /**
     * The maximum number of alarm history records to retrieve.
     */
    MaxRecords?: MaxRecords;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAlarmHistoryOutput {
    /**
     * The alarm histories, in JSON format.
     */
    AlarmHistoryItems?: AlarmHistoryItems;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAlarmsForMetricInput {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric.
     */
    Namespace: Namespace;
    /**
     * The statistic for the metric, other than percentiles. For percentile statistics, use ExtendedStatistics.
     */
    Statistic?: Statistic;
    /**
     * The percentile statistic for the metric. Specify a value between p0.0 and p100.
     */
    ExtendedStatistic?: ExtendedStatistic;
    /**
     * The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.
     */
    Dimensions?: Dimensions;
    /**
     * The period, in seconds, over which the statistic is applied.
     */
    Period?: Period;
    /**
     * The unit for the metric.
     */
    Unit?: StandardUnit;
  }
  export interface DescribeAlarmsForMetricOutput {
    /**
     * The information for each alarm with the specified metric.
     */
    MetricAlarms?: MetricAlarms;
  }
  export interface DescribeAlarmsInput {
    /**
     * The names of the alarms.
     */
    AlarmNames?: AlarmNames;
    /**
     * The alarm name prefix. If this parameter is specified, you cannot specify AlarmNames.
     */
    AlarmNamePrefix?: AlarmNamePrefix;
    /**
     * The state value to be used in matching alarms.
     */
    StateValue?: StateValue;
    /**
     * The action name prefix.
     */
    ActionPrefix?: ActionPrefix;
    /**
     * The maximum number of alarm descriptions to retrieve.
     */
    MaxRecords?: MaxRecords;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAlarmsOutput {
    /**
     * The information for the specified alarms.
     */
    MetricAlarms?: MetricAlarms;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAnomalyDetectorsInput {
    /**
     * Use the token returned by the previous operation to request the next page of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in one operation. The maximum value you can specify is 10. To retrieve the remaining results, make another call with the returned NextToken value. 
     */
    MaxResults?: MaxReturnedResultsCount;
    /**
     * Limits the results to only the anomaly detection models that are associated with the specified namespace.
     */
    Namespace?: Namespace;
    /**
     * Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned.
     */
    MetricName?: MetricName;
    /**
     * Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned.
     */
    Dimensions?: Dimensions;
  }
  export interface DescribeAnomalyDetectorsOutput {
    /**
     * The list of anomaly detection models returned by the operation.
     */
    AnomalyDetectors?: AnomalyDetectors;
    /**
     * A token that you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface Dimension {
    /**
     * The name of the dimension.
     */
    Name: DimensionName;
    /**
     * The value representing the dimension measurement.
     */
    Value: DimensionValue;
  }
  export interface DimensionFilter {
    /**
     * The dimension name to be matched.
     */
    Name: DimensionName;
    /**
     * The value of the dimension to be matched.
     */
    Value?: DimensionValue;
  }
  export type DimensionFilters = DimensionFilter[];
  export type DimensionName = string;
  export type DimensionValue = string;
  export type Dimensions = Dimension[];
  export interface DisableAlarmActionsInput {
    /**
     * The names of the alarms.
     */
    AlarmNames: AlarmNames;
  }
  export interface EnableAlarmActionsInput {
    /**
     * The names of the alarms.
     */
    AlarmNames: AlarmNames;
  }
  export type EvaluateLowSampleCountPercentile = string;
  export type EvaluationPeriods = number;
  export type ExtendedStatistic = string;
  export type ExtendedStatistics = ExtendedStatistic[];
  export interface GetDashboardInput {
    /**
     * The name of the dashboard to be described.
     */
    DashboardName: DashboardName;
  }
  export interface GetDashboardOutput {
    /**
     * The Amazon Resource Name (ARN) of the dashboard.
     */
    DashboardArn?: DashboardArn;
    /**
     * The detailed information about the dashboard, including what widgets are included and their location on the dashboard. For more information about the DashboardBody syntax, see CloudWatch-Dashboard-Body-Structure. 
     */
    DashboardBody?: DashboardBody;
    /**
     * The name of the dashboard.
     */
    DashboardName?: DashboardName;
  }
  export interface GetMetricDataInput {
    /**
     * The metric queries to be returned. A single GetMetricData call can include as many as 100 MetricDataQuery structures. Each of these structures can specify either a metric to retrieve, or a math expression to perform on retrieved data. 
     */
    MetricDataQueries: MetricDataQueries;
    /**
     * The time stamp indicating the earliest data to be returned. The value specified is inclusive; results include data points with the specified time stamp.  CloudWatch rounds the specified time stamp as follows:   Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.   Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.   Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.   If you set Period to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15.  For better performance, specify StartTime and EndTime values that align with the value of the metric's Period and sync up with the beginning and end of an hour. For example, if the Period of a metric is 5 minutes, specifying 12:05 or 12:30 as StartTime can get a faster response from CloudWatch than setting 12:07 or 12:29 as the StartTime.
     */
    StartTime: Timestamp;
    /**
     * The time stamp indicating the latest data to be returned. The value specified is exclusive; results include data points up to the specified time stamp. For better performance, specify StartTime and EndTime values that align with the value of the metric's Period and sync up with the beginning and end of an hour. For example, if the Period of a metric is 5 minutes, specifying 12:05 or 12:30 as EndTime can get a faster response from CloudWatch than setting 12:07 or 12:29 as the EndTime.
     */
    EndTime: Timestamp;
    /**
     * Include this value, if it was returned by the previous call, to get the next set of data points.
     */
    NextToken?: NextToken;
    /**
     * The order in which data points should be returned. TimestampDescending returns the newest data first and paginates when the MaxDatapoints limit is reached. TimestampAscending returns the oldest data first and paginates when the MaxDatapoints limit is reached.
     */
    ScanBy?: ScanBy;
    /**
     * The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.
     */
    MaxDatapoints?: GetMetricDataMaxDatapoints;
  }
  export type GetMetricDataMaxDatapoints = number;
  export interface GetMetricDataOutput {
    /**
     * The metrics that are returned, including the metric name, namespace, and dimensions.
     */
    MetricDataResults?: MetricDataResults;
    /**
     * A token that marks the next batch of returned results.
     */
    NextToken?: NextToken;
    /**
     * Contains a message about this GetMetricData operation, if the operation results in such a message. An example of a message that may be returned is Maximum number of allowed metrics exceeded. If there is a message, as much of the operation as possible is still executed. A message appears here only if it is related to the global GetMetricData operation. Any message about a specific metric returned by the operation appears in the MetricDataResult object returned for that metric.
     */
    Messages?: MetricDataResultMessages;
  }
  export interface GetMetricStatisticsInput {
    /**
     * The namespace of the metric, with or without spaces.
     */
    Namespace: Namespace;
    /**
     * The name of the metric, with or without spaces.
     */
    MetricName: MetricName;
    /**
     * The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can't retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see Dimension Combinations in the Amazon CloudWatch User Guide. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide.
     */
    Dimensions?: Dimensions;
    /**
     * The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request. The value specified is inclusive; results include data points with the specified time stamp. The time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z). CloudWatch rounds the specified time stamp as follows:   Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.   Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.   Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.   If you set Period to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. 
     */
    StartTime: Timestamp;
    /**
     * The time stamp that determines the last data point to return. The value specified is exclusive; results include data points up to the specified time stamp. The time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).
     */
    EndTime: Timestamp;
    /**
     * The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a PutMetricData call that includes a StorageResolution of 1 second. If the StartTime parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:   Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).   Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).   Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).  
     */
    Period: Period;
    /**
     * The metric statistics, other than percentile. For percentile statistics, use ExtendedStatistics. When calling GetMetricStatistics, you must specify either Statistics or ExtendedStatistics, but not both.
     */
    Statistics?: Statistics;
    /**
     * The percentile statistics. Specify values between p0.0 and p100. When calling GetMetricStatistics, you must specify either Statistics or ExtendedStatistics, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers.
     */
    ExtendedStatistics?: ExtendedStatistics;
    /**
     * The unit for a given metric. If you omit Unit, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
     */
    Unit?: StandardUnit;
  }
  export interface GetMetricStatisticsOutput {
    /**
     * A label for the specified metric.
     */
    Label?: MetricLabel;
    /**
     * The data points for the specified metric.
     */
    Datapoints?: Datapoints;
  }
  export interface GetMetricWidgetImageInput {
    /**
     * A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one MetricWidget parameter in each GetMetricWidgetImage call. For more information about the syntax of MetricWidget see CloudWatch-Metric-Widget-Structure. If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend.
     */
    MetricWidget: MetricWidget;
    /**
     * The format of the resulting image. Only PNG images are supported. The default is png. If you specify png, the API returns an HTTP response with the content-type set to text/xml. The image data is in a MetricWidgetImage field. For example:   &lt;GetMetricWidgetImageResponse xmlns=&lt;URLstring&gt;&gt;    &lt;GetMetricWidgetImageResult&gt;    &lt;MetricWidgetImage&gt;    iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...    &lt;/MetricWidgetImage&gt;    &lt;/GetMetricWidgetImageResult&gt;    &lt;ResponseMetadata&gt;    &lt;RequestId&gt;6f0d4192-4d42-11e8-82c1-f539a07e0e3b&lt;/RequestId&gt;    &lt;/ResponseMetadata&gt;   &lt;/GetMetricWidgetImageResponse&gt;  The image/png setting is intended only for custom HTTP requests. For most use cases, and all actions using an AWS SDK, you should use png. If you specify image/png, the HTTP response has a content-type set to image/png, and the body of the response is a PNG image. 
     */
    OutputFormat?: OutputFormat;
  }
  export interface GetMetricWidgetImageOutput {
    /**
     * The image of the graph, in the output format specified.
     */
    MetricWidgetImage?: MetricWidgetImage;
  }
  export type HistoryData = string;
  export type HistoryItemType = "ConfigurationUpdate"|"StateUpdate"|"Action";
  export type HistorySummary = string;
  export type LastModified = Date;
  export interface ListDashboardsInput {
    /**
     * If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_". 
     */
    DashboardNamePrefix?: DashboardNamePrefix;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface ListDashboardsOutput {
    /**
     * The list of matching dashboards.
     */
    DashboardEntries?: DashboardEntries;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface ListMetricsInput {
    /**
     * The namespace to filter against.
     */
    Namespace?: Namespace;
    /**
     * The name of the metric to filter against.
     */
    MetricName?: MetricName;
    /**
     * The dimensions to filter against.
     */
    Dimensions?: DimensionFilters;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface ListMetricsOutput {
    /**
     * The metrics.
     */
    Metrics?: Metrics;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceInput {
    /**
     * The ARN of the CloudWatch resource that you want to view tags for. For more information on ARN format, see Example ARNs in the Amazon Web Services General Reference.
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The list of tag keys and values associated with the resource you specified.
     */
    Tags?: TagList;
  }
  export type MaxRecords = number;
  export type MaxReturnedResultsCount = number;
  export type Message = string;
  export interface MessageData {
    /**
     * The error code or status code associated with the message.
     */
    Code?: MessageDataCode;
    /**
     * The message text.
     */
    Value?: MessageDataValue;
  }
  export type MessageDataCode = string;
  export type MessageDataValue = string;
  export interface Metric {
    /**
     * The namespace of the metric.
     */
    Namespace?: Namespace;
    /**
     * The name of the metric. This is a required field.
     */
    MetricName?: MetricName;
    /**
     * The dimensions for the metric.
     */
    Dimensions?: Dimensions;
  }
  export interface MetricAlarm {
    /**
     * The name of the alarm.
     */
    AlarmName?: AlarmName;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     */
    AlarmArn?: AlarmArn;
    /**
     * The description of the alarm.
     */
    AlarmDescription?: AlarmDescription;
    /**
     * The time stamp of the last update to the alarm configuration.
     */
    AlarmConfigurationUpdatedTimestamp?: Timestamp;
    /**
     * Indicates whether actions should be executed during any changes to the alarm state.
     */
    ActionsEnabled?: ActionsEnabled;
    /**
     * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    OKActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    AlarmActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    InsufficientDataActions?: ResourceList;
    /**
     * The state value for the alarm.
     */
    StateValue?: StateValue;
    /**
     * An explanation for the alarm state, in text format.
     */
    StateReason?: StateReason;
    /**
     * An explanation for the alarm state, in JSON format.
     */
    StateReasonData?: StateReasonData;
    /**
     * The time stamp of the last update to the alarm state.
     */
    StateUpdatedTimestamp?: Timestamp;
    /**
     * The name of the metric associated with the alarm, if this is an alarm based on a single metric.
     */
    MetricName?: MetricName;
    /**
     * The namespace of the metric associated with the alarm.
     */
    Namespace?: Namespace;
    /**
     * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ExtendedStatistic.
     */
    Statistic?: Statistic;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    ExtendedStatistic?: ExtendedStatistic;
    /**
     * The dimensions for the metric associated with the alarm.
     */
    Dimensions?: Dimensions;
    /**
     * The period, in seconds, over which the statistic is applied.
     */
    Period?: Period;
    /**
     * The unit of the metric associated with the alarm.
     */
    Unit?: StandardUnit;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    EvaluationPeriods?: EvaluationPeriods;
    /**
     * The number of datapoints that must be breaching to trigger the alarm.
     */
    DatapointsToAlarm?: DatapointsToAlarm;
    /**
     * The value to compare with the specified statistic.
     */
    Threshold?: Threshold;
    /**
     * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
     */
    ComparisonOperator?: ComparisonOperator;
    /**
     * Sets how this alarm is to handle missing data points. If this parameter is omitted, the default behavior of missing is used.
     */
    TreatMissingData?: TreatMissingData;
    /**
     * Used only for alarms based on percentiles. If ignore, the alarm state does not change during periods with too few data points to be statistically significant. If evaluate or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
     */
    EvaluateLowSampleCountPercentile?: EvaluateLowSampleCountPercentile;
    /**
     * An array of MetricDataQuery structures, used in an alarm based on a metric math expression. Each structure either retrieves a metric or performs a math expression. One item in the Metrics array is the math expression that the alarm watches. This expression by designated by having ReturnValue set to true.
     */
    Metrics?: MetricDataQueries;
    /**
     * In an alarm based on an anomaly detection model, this is the ID of the ANOMALY_DETECTION_BAND function used as the threshold for the alarm.
     */
    ThresholdMetricId?: MetricId;
  }
  export type MetricAlarms = MetricAlarm[];
  export type MetricData = MetricDatum[];
  export type MetricDataQueries = MetricDataQuery[];
  export interface MetricDataQuery {
    /**
     * A short name used to tie this object to the results in the response. This name must be unique within a single call to GetMetricData. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
     */
    Id: MetricId;
    /**
     * The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data. Within one MetricDataQuery object, you must specify either Expression or MetricStat but not both.
     */
    MetricStat?: MetricStat;
    /**
     * The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the Id of the other metrics to refer to those metrics, and can also use the Id of other expressions to use the result of those expressions. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. Within each MetricDataQuery object, you must specify either Expression or MetricStat but not both.
     */
    Expression?: MetricExpression;
    /**
     * A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.
     */
    Label?: MetricLabel;
    /**
     * When used in GetMetricData, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify False. If you omit this, the default of True is used. When used in PutMetricAlarm, specify True for the one expression result to use as the alarm. For all other metrics and expressions in the same PutMetricAlarm operation, specify ReturnData as False.
     */
    ReturnData?: ReturnData;
  }
  export interface MetricDataResult {
    /**
     * The short name you specified to represent this metric.
     */
    Id?: MetricId;
    /**
     * The human-readable label associated with the data.
     */
    Label?: MetricLabel;
    /**
     * The timestamps for the data points, formatted in Unix timestamp format. The number of timestamps always matches the number of values and the value for Timestamps[x] is Values[x].
     */
    Timestamps?: Timestamps;
    /**
     * The data points for the metric corresponding to Timestamps. The number of values always matches the number of timestamps and the timestamp for Values[x] is Timestamps[x].
     */
    Values?: DatapointValues;
    /**
     * The status of the returned data. Complete indicates that all data points in the requested time range were returned. PartialData means that an incomplete set of data points were returned. You can use the NextToken value that was returned and repeat your request to get more data points. NextToken is not returned if you are performing a math expression. InternalError indicates that an error occurred. Retry your request using NextToken, if present.
     */
    StatusCode?: StatusCode;
    /**
     * A list of messages with additional information about the data returned.
     */
    Messages?: MetricDataResultMessages;
  }
  export type MetricDataResultMessages = MessageData[];
  export type MetricDataResults = MetricDataResult[];
  export interface MetricDatum {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The dimensions associated with the metric.
     */
    Dimensions?: Dimensions;
    /**
     * The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
     */
    Timestamp?: Timestamp;
    /**
     * The value for the metric. Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.
     */
    Value?: DatapointValue;
    /**
     * The statistical values for the metric.
     */
    StatisticValues?: StatisticSet;
    /**
     * Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the Counts array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each PutMetricData action that specifies a Values array. Although the Values array accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.
     */
    Values?: Values;
    /**
     * Array of numbers that is used along with the Values array. Each number in the Count array is the number of times the corresponding value in the Values array occurred during the period.  If you omit the Counts array, the default of 1 is used as the value for each count. If you include a Counts array, it must include the same amount of values as the Values array.
     */
    Counts?: Counts;
    /**
     * When you are using a Put operation, this defines what unit you want to use when storing the metric. In a Get operation, this displays the unit that is used for the metric.
     */
    Unit?: StandardUnit;
    /**
     * Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see High-Resolution Metrics in the Amazon CloudWatch User Guide.  This field is optional, if you do not specify it the default of 60 is used.
     */
    StorageResolution?: StorageResolution;
  }
  export type MetricExpression = string;
  export type MetricId = string;
  export type MetricLabel = string;
  export type MetricName = string;
  export interface MetricStat {
    /**
     * The metric to return, including the metric name, namespace, and dimensions.
     */
    Metric: Metric;
    /**
     * The period, in seconds, to use when retrieving the metric.
     */
    Period: Period;
    /**
     * The statistic to return. It can include any CloudWatch statistic or extended statistic.
     */
    Stat: Stat;
    /**
     * When you are using a Put operation, this defines what unit you want to use when storing the metric. In a Get operation, if you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
     */
    Unit?: StandardUnit;
  }
  export type MetricWidget = string;
  export type MetricWidgetImage = Buffer|Uint8Array|Blob|string;
  export type Metrics = Metric[];
  export type Namespace = string;
  export type NextToken = string;
  export type OutputFormat = string;
  export type Period = number;
  export interface PutAnomalyDetectorInput {
    /**
     * The namespace of the metric to create the anomaly detection model for.
     */
    Namespace: Namespace;
    /**
     * The name of the metric to create the anomaly detection model for.
     */
    MetricName: MetricName;
    /**
     * The metric dimensions to create the anomaly detection model for.
     */
    Dimensions?: Dimensions;
    /**
     * The statistic to use for the metric and the anomaly detection model.
     */
    Stat: Stat;
    /**
     * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges. The configuration can also include the time zone to use for the metric. You can in
     */
    Configuration?: AnomalyDetectorConfiguration;
  }
  export interface PutAnomalyDetectorOutput {
  }
  export interface PutDashboardInput {
    /**
     * The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required.
     */
    DashboardName: DashboardName;
    /**
     * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required. For more information about the syntax, see CloudWatch-Dashboard-Body-Structure.
     */
    DashboardBody: DashboardBody;
  }
  export interface PutDashboardOutput {
    /**
     * If the input for PutDashboard was correct and the dashboard was successfully created or modified, this result is empty. If this result includes only warning messages, then the input was valid enough for the dashboard to be created or modified, but some elements of the dashboard may not render. If this result includes error messages, the input was not valid and the operation failed.
     */
    DashboardValidationMessages?: DashboardValidationMessages;
  }
  export interface PutMetricAlarmInput {
    /**
     * The name for the alarm. This name must be unique within your AWS account.
     */
    AlarmName: AlarmName;
    /**
     * The description for the alarm.
     */
    AlarmDescription?: AlarmDescription;
    /**
     * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
     */
    ActionsEnabled?: ActionsEnabled;
    /**
     * The actions to execute when this alarm transitions to an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: arn:aws:automate:region:ec2:stop | arn:aws:automate:region:ec2:terminate | arn:aws:automate:region:ec2:recover | arn:aws:automate:region:ec2:reboot | arn:aws:sns:region:account-id:sns-topic-name  | arn:aws:autoscaling:region:account-id:scalingPolicy:policy-idautoScalingGroupName/group-friendly-name:policyName/policy-friendly-name   Valid Values (for use with IAM roles): arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0 
     */
    OKActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: arn:aws:automate:region:ec2:stop | arn:aws:automate:region:ec2:terminate | arn:aws:automate:region:ec2:recover | arn:aws:automate:region:ec2:reboot | arn:aws:sns:region:account-id:sns-topic-name  | arn:aws:autoscaling:region:account-id:scalingPolicy:policy-idautoScalingGroupName/group-friendly-name:policyName/policy-friendly-name   Valid Values (for use with IAM roles): arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0 
     */
    AlarmActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: arn:aws:automate:region:ec2:stop | arn:aws:automate:region:ec2:terminate | arn:aws:automate:region:ec2:recover | arn:aws:automate:region:ec2:reboot | arn:aws:sns:region:account-id:sns-topic-name  | arn:aws:autoscaling:region:account-id:scalingPolicy:policy-idautoScalingGroupName/group-friendly-name:policyName/policy-friendly-name   Valid Values (for use with IAM roles): &gt;arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0 
     */
    InsufficientDataActions?: ResourceList;
    /**
     * The name for the metric associated with the alarm. For each PutMetricAlarm operation, you must specify either MetricName or a Metrics array. If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the Dimensions, Period, Namespace, Statistic, or ExtendedStatistic parameters. Instead, you specify all this information in the Metrics array.
     */
    MetricName?: MetricName;
    /**
     * The namespace for the metric associated specified in MetricName.
     */
    Namespace?: Namespace;
    /**
     * The statistic for the metric specified in MetricName, other than percentile. For percentile statistics, use ExtendedStatistic. When you call PutMetricAlarm and specify a MetricName, you must specify either Statistic or ExtendedStatistic, but not both.
     */
    Statistic?: Statistic;
    /**
     * The percentile statistic for the metric specified in MetricName. Specify a value between p0.0 and p100. When you call PutMetricAlarm and specify a MetricName, you must specify either Statistic or ExtendedStatistic, but not both.
     */
    ExtendedStatistic?: ExtendedStatistic;
    /**
     * The dimensions for the metric specified in MetricName.
     */
    Dimensions?: Dimensions;
    /**
     * The length, in seconds, used each time the metric specified in MetricName is evaluated. Valid values are 10, 30, and any multiple of 60.  Period is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the Metrics array. Be sure to specify 10 or 30 only for metrics that are stored by a PutMetricData call with a StorageResolution of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm may often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see Amazon CloudWatch Pricing. An alarm's total current evaluation period can be no longer than one day, so Period multiplied by EvaluationPeriods cannot be more than 86,400 seconds.
     */
    Period?: Period;
    /**
     * The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately. If you don't specify Unit, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually metrics are published with only one unit, so the alarm will work as intended. However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and will behave un-predictably. We recommend omitting Unit so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the INSUFFICIENT DATA state.
     */
    Unit?: StandardUnit;
    /**
     * The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N. An alarm's total current evaluation period can be no longer than one day, so this number multiplied by Period cannot be more than 86,400 seconds.
     */
    EvaluationPeriods: EvaluationPeriods;
    /**
     * The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see Evaluating an Alarm in the Amazon CloudWatch User Guide.
     */
    DatapointsToAlarm?: DatapointsToAlarm;
    /**
     * The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.
     */
    Threshold?: Threshold;
    /**
     *  The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand. The values LessThanLowerOrGreaterThanUpperThreshold, LessThanLowerThreshold, and GreaterThanUpperThreshold are used only for alarms based on anomaly detection models.
     */
    ComparisonOperator: ComparisonOperator;
    /**
     *  Sets how this alarm is to handle missing data points. If TreatMissingData is omitted, the default behavior of missing is used. For more information, see Configuring How CloudWatch Alarms Treats Missing Data. Valid Values: breaching | notBreaching | ignore | missing 
     */
    TreatMissingData?: TreatMissingData;
    /**
     *  Used only for alarms based on percentiles. If you specify ignore, the alarm state does not change during periods with too few data points to be statistically significant. If you specify evaluate or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see Percentile-Based CloudWatch Alarms and Low Data Samples. Valid Values: evaluate | ignore 
     */
    EvaluateLowSampleCountPercentile?: EvaluateLowSampleCountPercentile;
    /**
     * An array of MetricDataQuery structures that enable you to create an alarm based on the result of a metric math expression. For each PutMetricAlarm operation, you must specify either MetricName or a Metrics array. Each item in the Metrics array either retrieves a metric or performs a math expression. One item in the Metrics array is the expression that the alarm watches. You designate this expression by setting ReturnValue to true for this object in the array. For more information, see MetricDataQuery. If you use the Metrics parameter, you cannot include the MetricName, Dimensions, Period, Namespace, Statistic, or ExtendedStatistic parameters of PutMetricAlarm in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the Metrics array.
     */
    Metrics?: MetricDataQueries;
    /**
     * A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.
     */
    Tags?: TagList;
    /**
     * If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function. For an example of how to use this parameter, see the Anomaly Detection Model Alarm example on this page. If your alarm uses this parameter, it cannot have Auto Scaling actions.
     */
    ThresholdMetricId?: MetricId;
  }
  export interface PutMetricDataInput {
    /**
     * The namespace for the metric data. To avoid conflicts with AWS service namespaces, you should not specify a namespace that begins with AWS/ 
     */
    Namespace: Namespace;
    /**
     * The data for the metric. The array can include no more than 20 metrics per call.
     */
    MetricData: MetricData;
  }
  export interface Range {
    /**
     * The start time of the range to exclude. The format is yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59.
     */
    StartTime: Timestamp;
    /**
     * The end time of the range to exclude. The format is yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59.
     */
    EndTime: Timestamp;
  }
  export type ResourceList = ResourceName[];
  export type ResourceName = string;
  export type ReturnData = boolean;
  export type ScanBy = "TimestampDescending"|"TimestampAscending";
  export interface SetAlarmStateInput {
    /**
     * The name for the alarm. This name must be unique within the AWS account. The maximum length is 255 characters.
     */
    AlarmName: AlarmName;
    /**
     * The value of the state.
     */
    StateValue: StateValue;
    /**
     * The reason that this alarm is set to this specific state, in text format.
     */
    StateReason: StateReason;
    /**
     * The reason that this alarm is set to this specific state, in JSON format.
     */
    StateReasonData?: StateReasonData;
  }
  export type Size = number;
  export type StandardUnit = "Seconds"|"Microseconds"|"Milliseconds"|"Bytes"|"Kilobytes"|"Megabytes"|"Gigabytes"|"Terabytes"|"Bits"|"Kilobits"|"Megabits"|"Gigabits"|"Terabits"|"Percent"|"Count"|"Bytes/Second"|"Kilobytes/Second"|"Megabytes/Second"|"Gigabytes/Second"|"Terabytes/Second"|"Bits/Second"|"Kilobits/Second"|"Megabits/Second"|"Gigabits/Second"|"Terabits/Second"|"Count/Second"|"None";
  export type Stat = string;
  export type StateReason = string;
  export type StateReasonData = string;
  export type StateValue = "OK"|"ALARM"|"INSUFFICIENT_DATA";
  export type Statistic = "SampleCount"|"Average"|"Sum"|"Minimum"|"Maximum";
  export interface StatisticSet {
    /**
     * The number of samples used for the statistic set.
     */
    SampleCount: DatapointValue;
    /**
     * The sum of values for the sample set.
     */
    Sum: DatapointValue;
    /**
     * The minimum value of the sample set.
     */
    Minimum: DatapointValue;
    /**
     * The maximum value of the sample set.
     */
    Maximum: DatapointValue;
  }
  export type Statistics = Statistic[];
  export type StatusCode = "Complete"|"InternalError"|"PartialData";
  export type StorageResolution = number;
  export interface Tag {
    /**
     * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
     */
    Key: TagKey;
    /**
     * The value for the specified tag key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceInput {
    /**
     * The ARN of the CloudWatch resource that you're adding tags to. For more information on ARN format, see Example ARNs in the Amazon Web Services General Reference.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The list of key-value pairs to associate with the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Threshold = number;
  export type Timestamp = Date;
  export type Timestamps = Timestamp[];
  export type TreatMissingData = string;
  export interface UntagResourceInput {
    /**
     * The ARN of the CloudWatch resource that you're removing tags from. For more information on ARN format, see Example ARNs in the Amazon Web Services General Reference.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The list of tag keys to remove from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export type Values = DatapointValue[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudWatch client.
   */
  export import Types = CloudWatch;
}
export = CloudWatch;
