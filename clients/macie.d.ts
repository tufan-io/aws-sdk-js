import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Macie extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Macie.Types.ClientConfiguration)
  config: Config & Macie.Types.ClientConfiguration;
  /**
   * Associates a specified AWS account with Amazon Macie as a member account.
   */
  associateMemberAccount(params: Macie.Types.AssociateMemberAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a specified AWS account with Amazon Macie as a member account.
   */
  associateMemberAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates specified S3 resources with Amazon Macie for monitoring and data classification. If memberAccountId isn't specified, the action associates specified S3 resources with Macie for the current master account. If memberAccountId is specified, the action associates specified S3 resources with Macie for the specified member account. 
   */
  associateS3Resources(params: Macie.Types.AssociateS3ResourcesRequest, callback?: (err: AWSError, data: Macie.Types.AssociateS3ResourcesResult) => void): Request<Macie.Types.AssociateS3ResourcesResult, AWSError>;
  /**
   * Associates specified S3 resources with Amazon Macie for monitoring and data classification. If memberAccountId isn't specified, the action associates specified S3 resources with Macie for the current master account. If memberAccountId is specified, the action associates specified S3 resources with Macie for the specified member account. 
   */
  associateS3Resources(callback?: (err: AWSError, data: Macie.Types.AssociateS3ResourcesResult) => void): Request<Macie.Types.AssociateS3ResourcesResult, AWSError>;
  /**
   * Removes the specified member account from Amazon Macie.
   */
  disassociateMemberAccount(params: Macie.Types.DisassociateMemberAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified member account from Amazon Macie.
   */
  disassociateMemberAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes specified S3 resources from being monitored by Amazon Macie. If memberAccountId isn't specified, the action removes specified S3 resources from Macie for the current master account. If memberAccountId is specified, the action removes specified S3 resources from Macie for the specified member account.
   */
  disassociateS3Resources(params: Macie.Types.DisassociateS3ResourcesRequest, callback?: (err: AWSError, data: Macie.Types.DisassociateS3ResourcesResult) => void): Request<Macie.Types.DisassociateS3ResourcesResult, AWSError>;
  /**
   * Removes specified S3 resources from being monitored by Amazon Macie. If memberAccountId isn't specified, the action removes specified S3 resources from Macie for the current master account. If memberAccountId is specified, the action removes specified S3 resources from Macie for the specified member account.
   */
  disassociateS3Resources(callback?: (err: AWSError, data: Macie.Types.DisassociateS3ResourcesResult) => void): Request<Macie.Types.DisassociateS3ResourcesResult, AWSError>;
  /**
   * Lists all Amazon Macie member accounts for the current Amazon Macie master account.
   */
  listMemberAccounts(params: Macie.Types.ListMemberAccountsRequest, callback?: (err: AWSError, data: Macie.Types.ListMemberAccountsResult) => void): Request<Macie.Types.ListMemberAccountsResult, AWSError>;
  /**
   * Lists all Amazon Macie member accounts for the current Amazon Macie master account.
   */
  listMemberAccounts(callback?: (err: AWSError, data: Macie.Types.ListMemberAccountsResult) => void): Request<Macie.Types.ListMemberAccountsResult, AWSError>;
  /**
   * Lists all the S3 resources associated with Amazon Macie. If memberAccountId isn't specified, the action lists the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action lists the S3 resources associated with Amazon Macie for the specified member account. 
   */
  listS3Resources(params: Macie.Types.ListS3ResourcesRequest, callback?: (err: AWSError, data: Macie.Types.ListS3ResourcesResult) => void): Request<Macie.Types.ListS3ResourcesResult, AWSError>;
  /**
   * Lists all the S3 resources associated with Amazon Macie. If memberAccountId isn't specified, the action lists the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action lists the S3 resources associated with Amazon Macie for the specified member account. 
   */
  listS3Resources(callback?: (err: AWSError, data: Macie.Types.ListS3ResourcesResult) => void): Request<Macie.Types.ListS3ResourcesResult, AWSError>;
  /**
   * Updates the classification types for the specified S3 resources. If memberAccountId isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the specified member account. 
   */
  updateS3Resources(params: Macie.Types.UpdateS3ResourcesRequest, callback?: (err: AWSError, data: Macie.Types.UpdateS3ResourcesResult) => void): Request<Macie.Types.UpdateS3ResourcesResult, AWSError>;
  /**
   * Updates the classification types for the specified S3 resources. If memberAccountId isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the specified member account. 
   */
  updateS3Resources(callback?: (err: AWSError, data: Macie.Types.UpdateS3ResourcesResult) => void): Request<Macie.Types.UpdateS3ResourcesResult, AWSError>;
}
declare namespace Macie {
  export type AWSAccountId = string;
  export interface AssociateMemberAccountRequest {
    /**
     * The ID of the AWS account that you want to associate with Amazon Macie as a member account.
     */
    memberAccountId: AWSAccountId;
  }
  export interface AssociateS3ResourcesRequest {
    /**
     * The ID of the Amazon Macie member account whose resources you want to associate with Macie. 
     */
    memberAccountId?: AWSAccountId;
    /**
     * The S3 resources that you want to associate with Amazon Macie for monitoring and data classification. 
     */
    s3Resources: S3ResourcesClassification;
  }
  export interface AssociateS3ResourcesResult {
    /**
     * S3 resources that couldn't be associated with Amazon Macie. An error code and an error message are provided for each failed item. 
     */
    failedS3Resources?: FailedS3Resources;
  }
  export type BucketName = string;
  export interface ClassificationType {
    /**
     * A one-time classification of all of the existing objects in a specified S3 bucket. 
     */
    oneTime: S3OneTimeClassificationType;
    /**
     * A continuous classification of the objects that are added to a specified S3 bucket. Amazon Macie begins performing continuous classification after a bucket is successfully associated with Amazon Macie. 
     */
    continuous: S3ContinuousClassificationType;
  }
  export interface ClassificationTypeUpdate {
    /**
     * A one-time classification of all of the existing objects in a specified S3 bucket. 
     */
    oneTime?: S3OneTimeClassificationType;
    /**
     * A continuous classification of the objects that are added to a specified S3 bucket. Amazon Macie begins performing continuous classification after a bucket is successfully associated with Amazon Macie. 
     */
    continuous?: S3ContinuousClassificationType;
  }
  export interface DisassociateMemberAccountRequest {
    /**
     * The ID of the member account that you want to remove from Amazon Macie.
     */
    memberAccountId: AWSAccountId;
  }
  export interface DisassociateS3ResourcesRequest {
    /**
     * The ID of the Amazon Macie member account whose resources you want to remove from being monitored by Amazon Macie. 
     */
    memberAccountId?: AWSAccountId;
    /**
     * The S3 resources (buckets or prefixes) that you want to remove from being monitored and classified by Amazon Macie. 
     */
    associatedS3Resources: S3Resources;
  }
  export interface DisassociateS3ResourcesResult {
    /**
     * S3 resources that couldn't be removed from being monitored and classified by Amazon Macie. An error code and an error message are provided for each failed item. 
     */
    failedS3Resources?: FailedS3Resources;
  }
  export type ErrorCode = string;
  export type ExceptionMessage = string;
  export interface FailedS3Resource {
    /**
     * The failed S3 resources.
     */
    failedItem?: S3Resource;
    /**
     * The status code of a failed item.
     */
    errorCode?: ErrorCode;
    /**
     * The error message of a failed item.
     */
    errorMessage?: ExceptionMessage;
  }
  export type FailedS3Resources = FailedS3Resource[];
  export interface ListMemberAccountsRequest {
    /**
     * Use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListMemberAccounts action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data. 
     */
    nextToken?: NextToken;
    /**
     * Use this parameter to indicate the maximum number of items that you want in the response. The default value is 250. 
     */
    maxResults?: MaxResults;
  }
  export interface ListMemberAccountsResult {
    /**
     * A list of the Amazon Macie member accounts returned by the action. The current master account is also included in this list. 
     */
    memberAccounts?: MemberAccounts;
    /**
     * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null. 
     */
    nextToken?: NextToken;
  }
  export interface ListS3ResourcesRequest {
    /**
     * The Amazon Macie member account ID whose associated S3 resources you want to list. 
     */
    memberAccountId?: AWSAccountId;
    /**
     * Use this parameter when paginating results. Set its value to null on your first call to the ListS3Resources action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data. 
     */
    nextToken?: NextToken;
    /**
     * Use this parameter to indicate the maximum number of items that you want in the response. The default value is 250. 
     */
    maxResults?: MaxResults;
  }
  export interface ListS3ResourcesResult {
    /**
     * A list of the associated S3 resources returned by the action.
     */
    s3Resources?: S3ResourcesClassification;
    /**
     * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null. 
     */
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export interface MemberAccount {
    /**
     * The AWS account ID of the Amazon Macie member account.
     */
    accountId?: AWSAccountId;
  }
  export type MemberAccounts = MemberAccount[];
  export type NextToken = string;
  export type Prefix = string;
  export type S3ContinuousClassificationType = "FULL";
  export type S3OneTimeClassificationType = "FULL"|"NONE";
  export interface S3Resource {
    /**
     * The name of the S3 bucket.
     */
    bucketName: BucketName;
    /**
     * The prefix of the S3 bucket. 
     */
    prefix?: Prefix;
  }
  export interface S3ResourceClassification {
    /**
     * The name of the S3 bucket that you want to associate with Amazon Macie.
     */
    bucketName: BucketName;
    /**
     * The prefix of the S3 bucket that you want to associate with Amazon Macie.
     */
    prefix?: Prefix;
    /**
     * The classification type that you want to specify for the resource associated with Amazon Macie. 
     */
    classificationType: ClassificationType;
  }
  export interface S3ResourceClassificationUpdate {
    /**
     * The name of the S3 bucket whose classification types you want to update.
     */
    bucketName: BucketName;
    /**
     * The prefix of the S3 bucket whose classification types you want to update.
     */
    prefix?: Prefix;
    /**
     * The classification type that you want to update for the resource associated with Amazon Macie. 
     */
    classificationTypeUpdate: ClassificationTypeUpdate;
  }
  export type S3Resources = S3Resource[];
  export type S3ResourcesClassification = S3ResourceClassification[];
  export type S3ResourcesClassificationUpdate = S3ResourceClassificationUpdate[];
  export interface UpdateS3ResourcesRequest {
    /**
     * The AWS ID of the Amazon Macie member account whose S3 resources' classification types you want to update. 
     */
    memberAccountId?: AWSAccountId;
    /**
     * The S3 resources whose classification types you want to update.
     */
    s3ResourcesUpdate: S3ResourcesClassificationUpdate;
  }
  export interface UpdateS3ResourcesResult {
    /**
     * The S3 resources whose classification types can't be updated. An error code and an error message are provided for each failed item. 
     */
    failedS3Resources?: FailedS3Resources;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-12-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Macie client.
   */
  export import Types = Macie;
}
export = Macie;
