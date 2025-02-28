import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class PI extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PI.Types.ClientConfiguration)
  config: Config & PI.Types.ClientConfiguration;
  /**
   * For a specific time period, retrieve the top N dimension keys for a metric.
   */
  describeDimensionKeys(params: PI.Types.DescribeDimensionKeysRequest, callback?: (err: AWSError, data: PI.Types.DescribeDimensionKeysResponse) => void): Request<PI.Types.DescribeDimensionKeysResponse, AWSError>;
  /**
   * For a specific time period, retrieve the top N dimension keys for a metric.
   */
  describeDimensionKeys(callback?: (err: AWSError, data: PI.Types.DescribeDimensionKeysResponse) => void): Request<PI.Types.DescribeDimensionKeysResponse, AWSError>;
  /**
   * Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.
   */
  getResourceMetrics(params: PI.Types.GetResourceMetricsRequest, callback?: (err: AWSError, data: PI.Types.GetResourceMetricsResponse) => void): Request<PI.Types.GetResourceMetricsResponse, AWSError>;
  /**
   * Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.
   */
  getResourceMetrics(callback?: (err: AWSError, data: PI.Types.GetResourceMetricsResponse) => void): Request<PI.Types.GetResourceMetricsResponse, AWSError>;
}
declare namespace PI {
  export interface DataPoint {
    /**
     * The time, in epoch format, associated with a particular Value.
     */
    Timestamp: ISOTimestamp;
    /**
     * The actual value associated with a particular Timestamp.
     */
    Value: Double;
  }
  export type DataPointsList = DataPoint[];
  export interface DescribeDimensionKeysRequest {
    /**
     * The AWS service for which Performance Insights will return metrics. The only valid value for ServiceType is: RDS 
     */
    ServiceType: ServiceType;
    /**
     * An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value - for example: db-FAIHNTYBKTGAUSUZQYPDS2GW4A 
     */
    Identifier: String;
    /**
     * The date and time specifying the beginning of the requested time series data. You can't specify a StartTime that's earlier than 7 days ago. The value specified is inclusive - data points equal to or greater than StartTime will be returned. The value for StartTime must be earlier than the value for EndTime.
     */
    StartTime: ISOTimestamp;
    /**
     * The date and time specifying the end of the requested time series data. The value specified is exclusive - data points less than (but not equal to) EndTime will be returned. The value for EndTime must be later than the value for StartTime.
     */
    EndTime: ISOTimestamp;
    /**
     * The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.    db.sampledload.avg - the raw number of active sessions for the database engine.  
     */
    Metric: String;
    /**
     * The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:    1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.
     */
    PeriodInSeconds?: Integer;
    /**
     * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.
     */
    GroupBy: DimensionGroup;
    /**
     * For each dimension specified in GroupBy, specify a secondary dimension to further subdivide the partition keys in the response.
     */
    PartitionBy?: DimensionGroup;
    /**
     * One or more filters to apply in the request. Restrictions:   Any number of filters by the same dimension, as specified in the GroupBy or Partition parameters.   A single filter for any other dimension in this dimension group.  
     */
    Filter?: MetricQueryFilterMap;
    /**
     * The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved. 
     */
    MaxResults?: MaxResults;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.
     */
    NextToken?: String;
  }
  export interface DescribeDimensionKeysResponse {
    /**
     * The start time for the returned dimension keys, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedStartTime will be less than or equal to the value of the user-specified StartTime.
     */
    AlignedStartTime?: ISOTimestamp;
    /**
     * The end time for the returned dimension keys, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedEndTime will be greater than or equal to the value of the user-specified Endtime.
     */
    AlignedEndTime?: ISOTimestamp;
    /**
     * If PartitionBy was present in the request, PartitionKeys contains the breakdown of dimension keys by the specified partitions.
     */
    PartitionKeys?: ResponsePartitionKeyList;
    /**
     * The dimension keys that were requested.
     */
    Keys?: DimensionKeyDescriptionList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.
     */
    NextToken?: String;
  }
  export interface DimensionGroup {
    /**
     * The name of the dimension group. Valid values are:    db.user     db.host     db.sql     db.sql_tokenized     db.wait_event     db.wait_event_type   
     */
    Group: String;
    /**
     * A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested, or are present in the response. Valid values for elements in the Dimensions array are:   db.user.id   db.user.name   db.host.id   db.host.name   db.sql.id   db.sql.db_id   db.sql.statement   db.sql.tokenized_id   db.sql_tokenized.id   db.sql_tokenized.db_id   db.sql_tokenized.statement   db.wait_event.name   db.wait_event.type   db.wait_event_type.name  
     */
    Dimensions?: StringList;
    /**
     * The maximum number of items to fetch for this dimension group.
     */
    Limit?: Limit;
  }
  export interface DimensionKeyDescription {
    /**
     * A map of name-value pairs for the dimensions in the group.
     */
    Dimensions?: DimensionMap;
    /**
     * The aggregated metric value for the dimension(s), over the requested time range.
     */
    Total?: Double;
    /**
     * If PartitionBy was specified, PartitionKeys contains the dimensions that were.
     */
    Partitions?: MetricValuesList;
  }
  export type DimensionKeyDescriptionList = DimensionKeyDescription[];
  export type DimensionMap = {[key: string]: String};
  export type Double = number;
  export interface GetResourceMetricsRequest {
    /**
     * The AWS service for which Performance Insights will return metrics. The only valid value for ServiceType is: RDS 
     */
    ServiceType: ServiceType;
    /**
     * An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value - for example: db-FAIHNTYBKTGAUSUZQYPDS2GW4A 
     */
    Identifier: String;
    /**
     * An array of one or more queries to perform. Each query must specify a Performance Insights metric, and can optionally specify aggregation and filtering criteria.
     */
    MetricQueries: MetricQueryList;
    /**
     * The date and time specifying the beginning of the requested time series data. You can't specify a StartTime that's earlier than 7 days ago. The value specified is inclusive - data points equal to or greater than StartTime will be returned. The value for StartTime must be earlier than the value for EndTime.
     */
    StartTime: ISOTimestamp;
    /**
     * The date and time specifiying the end of the requested time series data. The value specified is exclusive - data points less than (but not equal to) EndTime will be returned. The value for EndTime must be later than the value for StartTime.
     */
    EndTime: ISOTimestamp;
    /**
     * The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:    1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.
     */
    PeriodInSeconds?: Integer;
    /**
     * The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved. 
     */
    MaxResults?: MaxResults;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.
     */
    NextToken?: String;
  }
  export interface GetResourceMetricsResponse {
    /**
     * The start time for the returned metrics, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedStartTime will be less than or equal to the value of the user-specified StartTime.
     */
    AlignedStartTime?: ISOTimestamp;
    /**
     * The end time for the returned metrics, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedEndTime will be greater than or equal to the value of the user-specified Endtime.
     */
    AlignedEndTime?: ISOTimestamp;
    /**
     * An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value - for example: db-FAIHNTYBKTGAUSUZQYPDS2GW4A 
     */
    Identifier?: String;
    /**
     * An array of metric results,, where each array element contains all of the data points for a particular dimension.
     */
    MetricList?: MetricKeyDataPointsList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.
     */
    NextToken?: String;
  }
  export type ISOTimestamp = Date;
  export type Integer = number;
  export type Limit = number;
  export type MaxResults = number;
  export interface MetricKeyDataPoints {
    /**
     * The dimension(s) to which the data points apply.
     */
    Key?: ResponseResourceMetricKey;
    /**
     * An array of timestamp-value pairs, representing measurements over a period of time.
     */
    DataPoints?: DataPointsList;
  }
  export type MetricKeyDataPointsList = MetricKeyDataPoints[];
  export interface MetricQuery {
    /**
     * The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.    db.sampledload.avg - the raw number of active sessions for the database engine.  
     */
    Metric: String;
    /**
     * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.
     */
    GroupBy?: DimensionGroup;
    /**
     * One or more filters to apply in the request. Restrictions:   Any number of filters by the same dimension, as specified in the GroupBy parameter.   A single filter for any other dimension in this dimension group.  
     */
    Filter?: MetricQueryFilterMap;
  }
  export type MetricQueryFilterMap = {[key: string]: String};
  export type MetricQueryList = MetricQuery[];
  export type MetricValuesList = Double[];
  export interface ResponsePartitionKey {
    /**
     * A dimension map that contains the dimension(s) for this partition.
     */
    Dimensions: DimensionMap;
  }
  export type ResponsePartitionKeyList = ResponsePartitionKey[];
  export interface ResponseResourceMetricKey {
    /**
     * The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.    db.sampledload.avg - the raw number of active sessions for the database engine.  
     */
    Metric: String;
    /**
     * The valid dimensions for the metric.
     */
    Dimensions?: DimensionMap;
  }
  export type ServiceType = "RDS";
  export type String = string;
  export type StringList = String[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-02-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PI client.
   */
  export import Types = PI;
}
export = PI;
