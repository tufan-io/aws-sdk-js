import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CUR extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CUR.Types.ClientConfiguration)
  config: Config & CUR.Types.ClientConfiguration;
  /**
   * Deletes the specified report.
   */
  deleteReportDefinition(params: CUR.Types.DeleteReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.DeleteReportDefinitionResponse) => void): Request<CUR.Types.DeleteReportDefinitionResponse, AWSError>;
  /**
   * Deletes the specified report.
   */
  deleteReportDefinition(callback?: (err: AWSError, data: CUR.Types.DeleteReportDefinitionResponse) => void): Request<CUR.Types.DeleteReportDefinitionResponse, AWSError>;
  /**
   * Lists the AWS Cost and Usage reports available to this account.
   */
  describeReportDefinitions(params: CUR.Types.DescribeReportDefinitionsRequest, callback?: (err: AWSError, data: CUR.Types.DescribeReportDefinitionsResponse) => void): Request<CUR.Types.DescribeReportDefinitionsResponse, AWSError>;
  /**
   * Lists the AWS Cost and Usage reports available to this account.
   */
  describeReportDefinitions(callback?: (err: AWSError, data: CUR.Types.DescribeReportDefinitionsResponse) => void): Request<CUR.Types.DescribeReportDefinitionsResponse, AWSError>;
  /**
   * Creates a new report using the description that you provide.
   */
  putReportDefinition(params: CUR.Types.PutReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.PutReportDefinitionResponse) => void): Request<CUR.Types.PutReportDefinitionResponse, AWSError>;
  /**
   * Creates a new report using the description that you provide.
   */
  putReportDefinition(callback?: (err: AWSError, data: CUR.Types.PutReportDefinitionResponse) => void): Request<CUR.Types.PutReportDefinitionResponse, AWSError>;
}
declare namespace CUR {
  export type AWSRegion = "us-east-1"|"us-west-1"|"us-west-2"|"eu-central-1"|"eu-west-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"eu-north-1"|"ap-northeast-3";
  export type AdditionalArtifact = "REDSHIFT"|"QUICKSIGHT"|"ATHENA";
  export type AdditionalArtifactList = AdditionalArtifact[];
  export type CompressionFormat = "ZIP"|"GZIP"|"Parquet";
  export interface DeleteReportDefinitionRequest {
    ReportName?: ReportName;
  }
  export interface DeleteReportDefinitionResponse {
    ResponseMessage?: DeleteResponseMessage;
  }
  export type DeleteResponseMessage = string;
  export interface DescribeReportDefinitionsRequest {
    MaxResults?: MaxResults;
    NextToken?: GenericString;
  }
  export interface DescribeReportDefinitionsResponse {
    /**
     * A list of AWS Cost and Usage reports owned by the account.
     */
    ReportDefinitions?: ReportDefinitionList;
    NextToken?: GenericString;
  }
  export type GenericString = string;
  export type MaxResults = number;
  export interface PutReportDefinitionRequest {
    /**
     * Represents the output of the PutReportDefinition operation. The content consists of the detailed metadata and data file information. 
     */
    ReportDefinition: ReportDefinition;
  }
  export interface PutReportDefinitionResponse {
  }
  export type RefreshClosedReports = boolean;
  export interface ReportDefinition {
    ReportName: ReportName;
    TimeUnit: TimeUnit;
    Format: ReportFormat;
    Compression: CompressionFormat;
    /**
     * A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. 
     */
    AdditionalSchemaElements: SchemaElementList;
    S3Bucket: S3Bucket;
    S3Prefix: S3Prefix;
    S3Region: AWSRegion;
    /**
     * A list of manifests that you want Amazon Web Services to create for this report.
     */
    AdditionalArtifacts?: AdditionalArtifactList;
    /**
     * Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.
     */
    RefreshClosedReports?: RefreshClosedReports;
    /**
     * Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
     */
    ReportVersioning?: ReportVersioning;
  }
  export type ReportDefinitionList = ReportDefinition[];
  export type ReportFormat = "textORcsv"|"Parquet";
  export type ReportName = string;
  export type ReportVersioning = "CREATE_NEW_REPORT"|"OVERWRITE_REPORT";
  export type S3Bucket = string;
  export type S3Prefix = string;
  export type SchemaElement = "RESOURCES";
  export type SchemaElementList = SchemaElement[];
  export type TimeUnit = "HOURLY"|"DAILY";
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CUR client.
   */
  export import Types = CUR;
}
export = CUR;
