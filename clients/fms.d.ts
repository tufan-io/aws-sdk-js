import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class FMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FMS.Types.ClientConfiguration)
  config: Config & FMS.Types.ClientConfiguration;
  /**
   * Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account. The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. 
   */
  associateAdminAccount(params: FMS.Types.AssociateAdminAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account. The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. 
   */
  associateAdminAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  deleteNotificationChannel(params: FMS.Types.DeleteNotificationChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  deleteNotificationChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager policy. 
   */
  deletePolicy(params: FMS.Types.DeletePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager policy. 
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates the account that has been set as the AWS Firewall Manager administrator account. To set a different account as the administrator account, you must submit an AssociateAdminAccount request .
   */
  disassociateAdminAccount(params: FMS.Types.DisassociateAdminAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates the account that has been set as the AWS Firewall Manager administrator account. To set a different account as the administrator account, you must submit an AssociateAdminAccount request .
   */
  disassociateAdminAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
   */
  getAdminAccount(params: FMS.Types.GetAdminAccountRequest, callback?: (err: AWSError, data: FMS.Types.GetAdminAccountResponse) => void): Request<FMS.Types.GetAdminAccountResponse, AWSError>;
  /**
   * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
   */
  getAdminAccount(callback?: (err: AWSError, data: FMS.Types.GetAdminAccountResponse) => void): Request<FMS.Types.GetAdminAccountResponse, AWSError>;
  /**
   * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered non-compliant if the specified policy has not been applied to them.
   */
  getComplianceDetail(params: FMS.Types.GetComplianceDetailRequest, callback?: (err: AWSError, data: FMS.Types.GetComplianceDetailResponse) => void): Request<FMS.Types.GetComplianceDetailResponse, AWSError>;
  /**
   * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered non-compliant if the specified policy has not been applied to them.
   */
  getComplianceDetail(callback?: (err: AWSError, data: FMS.Types.GetComplianceDetailResponse) => void): Request<FMS.Types.GetComplianceDetailResponse, AWSError>;
  /**
   * Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  getNotificationChannel(params: FMS.Types.GetNotificationChannelRequest, callback?: (err: AWSError, data: FMS.Types.GetNotificationChannelResponse) => void): Request<FMS.Types.GetNotificationChannelResponse, AWSError>;
  /**
   * Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  getNotificationChannel(callback?: (err: AWSError, data: FMS.Types.GetNotificationChannelResponse) => void): Request<FMS.Types.GetNotificationChannelResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager policy.
   */
  getPolicy(params: FMS.Types.GetPolicyRequest, callback?: (err: AWSError, data: FMS.Types.GetPolicyResponse) => void): Request<FMS.Types.GetPolicyResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager policy.
   */
  getPolicy(callback?: (err: AWSError, data: FMS.Types.GetPolicyResponse) => void): Request<FMS.Types.GetPolicyResponse, AWSError>;
  /**
   * If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack.
   */
  getProtectionStatus(params: FMS.Types.GetProtectionStatusRequest, callback?: (err: AWSError, data: FMS.Types.GetProtectionStatusResponse) => void): Request<FMS.Types.GetProtectionStatusResponse, AWSError>;
  /**
   * If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack.
   */
  getProtectionStatus(callback?: (err: AWSError, data: FMS.Types.GetProtectionStatusResponse) => void): Request<FMS.Types.GetProtectionStatusResponse, AWSError>;
  /**
   * Returns an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy. 
   */
  listComplianceStatus(params: FMS.Types.ListComplianceStatusRequest, callback?: (err: AWSError, data: FMS.Types.ListComplianceStatusResponse) => void): Request<FMS.Types.ListComplianceStatusResponse, AWSError>;
  /**
   * Returns an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy. 
   */
  listComplianceStatus(callback?: (err: AWSError, data: FMS.Types.ListComplianceStatusResponse) => void): Request<FMS.Types.ListComplianceStatusResponse, AWSError>;
  /**
   * Returns a MemberAccounts object that lists the member accounts in the administrator's AWS organization. The ListMemberAccounts must be submitted by the account that is set as the AWS Firewall Manager administrator.
   */
  listMemberAccounts(params: FMS.Types.ListMemberAccountsRequest, callback?: (err: AWSError, data: FMS.Types.ListMemberAccountsResponse) => void): Request<FMS.Types.ListMemberAccountsResponse, AWSError>;
  /**
   * Returns a MemberAccounts object that lists the member accounts in the administrator's AWS organization. The ListMemberAccounts must be submitted by the account that is set as the AWS Firewall Manager administrator.
   */
  listMemberAccounts(callback?: (err: AWSError, data: FMS.Types.ListMemberAccountsResponse) => void): Request<FMS.Types.ListMemberAccountsResponse, AWSError>;
  /**
   * Returns an array of PolicySummary objects in the response.
   */
  listPolicies(params: FMS.Types.ListPoliciesRequest, callback?: (err: AWSError, data: FMS.Types.ListPoliciesResponse) => void): Request<FMS.Types.ListPoliciesResponse, AWSError>;
  /**
   * Returns an array of PolicySummary objects in the response.
   */
  listPolicies(callback?: (err: AWSError, data: FMS.Types.ListPoliciesResponse) => void): Request<FMS.Types.ListPoliciesResponse, AWSError>;
  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
   */
  putNotificationChannel(params: FMS.Types.PutNotificationChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
   */
  putNotificationChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an AWS Firewall Manager policy. Firewall Manager provides two types of policies: A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources, or a WAF policy, which contains a rule group and defines which resources are to be protected by that rule group. A policy is specific to either WAF or Shield Advanced. If you want to enforce both WAF rules and Shield Advanced protection across accounts, you can create multiple policies. You can create one or more policies for WAF rules, and one or more policies for Shield Advanced. You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information on subscribing to Shield Advanced, see CreateSubscription.
   */
  putPolicy(params: FMS.Types.PutPolicyRequest, callback?: (err: AWSError, data: FMS.Types.PutPolicyResponse) => void): Request<FMS.Types.PutPolicyResponse, AWSError>;
  /**
   * Creates an AWS Firewall Manager policy. Firewall Manager provides two types of policies: A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources, or a WAF policy, which contains a rule group and defines which resources are to be protected by that rule group. A policy is specific to either WAF or Shield Advanced. If you want to enforce both WAF rules and Shield Advanced protection across accounts, you can create multiple policies. You can create one or more policies for WAF rules, and one or more policies for Shield Advanced. You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information on subscribing to Shield Advanced, see CreateSubscription.
   */
  putPolicy(callback?: (err: AWSError, data: FMS.Types.PutPolicyResponse) => void): Request<FMS.Types.PutPolicyResponse, AWSError>;
}
declare namespace FMS {
  export type AWSAccountId = string;
  export type AccountRoleStatus = "READY"|"CREATING"|"PENDING_DELETION"|"DELETING"|"DELETED";
  export interface AssociateAdminAccountRequest {
    /**
     * The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. For more information about AWS Organizations and master accounts, see Managing the AWS Accounts in Your Organization.
     */
    AdminAccount: AWSAccountId;
  }
  export type Boolean = boolean;
  export interface ComplianceViolator {
    /**
     * The resource ID.
     */
    ResourceId?: ResourceId;
    /**
     * The reason that the resource is not protected by the policy.
     */
    ViolationReason?: ViolationReason;
    /**
     * The resource type. This is in the format shown in AWS Resource Types Reference. For example: AWS::ElasticLoadBalancingV2::LoadBalancer or AWS::CloudFront::Distribution.
     */
    ResourceType?: ResourceType;
  }
  export type ComplianceViolators = ComplianceViolator[];
  export type CustomerPolicyScopeId = string;
  export type CustomerPolicyScopeIdList = CustomerPolicyScopeId[];
  export type CustomerPolicyScopeIdType = "ACCOUNT";
  export type CustomerPolicyScopeMap = {[key: string]: CustomerPolicyScopeIdList};
  export interface DeleteNotificationChannelRequest {
  }
  export interface DeletePolicyRequest {
    /**
     * The ID of the policy that you want to delete. PolicyId is returned by PutPolicy and by ListPolicies.
     */
    PolicyId: PolicyId;
    /**
     * If True, the request will also perform a clean-up process that will:   Delete rule groups created by AWS Firewall Manager   Remove web ACLs from in-scope resources   Delete web ACLs that contain no rules or rule groups   After the cleanup, in-scope resources will no longer be protected by web ACLs in this policy. Protection of out-of-scope resources will remain unchanged. Scope is determined by tags and accounts associated with the policy. When creating the policy, if you specified that only resources in specific accounts or with specific tags be protected by the policy, those resources are in-scope. All others are out of scope. If you did not specify tags or accounts, all resources are in-scope. 
     */
    DeleteAllPolicyResources?: Boolean;
  }
  export type DependentServiceName = "AWSCONFIG"|"AWSWAF"|"AWSSHIELD_ADVANCED";
  export type DetailedInfo = string;
  export interface DisassociateAdminAccountRequest {
  }
  export interface EvaluationResult {
    /**
     * Describes an AWS account's compliance with the AWS Firewall Manager policy.
     */
    ComplianceStatus?: PolicyComplianceStatusType;
    /**
     * Number of resources that are non-compliant with the specified policy. A resource is considered non-compliant if it is not associated with the specified policy.
     */
    ViolatorCount?: ResourceCount;
    /**
     * Indicates that over 100 resources are non-compliant with the AWS Firewall Manager policy.
     */
    EvaluationLimitExceeded?: Boolean;
  }
  export type EvaluationResults = EvaluationResult[];
  export interface GetAdminAccountRequest {
  }
  export interface GetAdminAccountResponse {
    /**
     * The AWS account that is set as the AWS Firewall Manager administrator.
     */
    AdminAccount?: AWSAccountId;
    /**
     * The status of the AWS account that you set as the AWS Firewall Manager administrator.
     */
    RoleStatus?: AccountRoleStatus;
  }
  export interface GetComplianceDetailRequest {
    /**
     * The ID of the policy that you want to get the details for. PolicyId is returned by PutPolicy and by ListPolicies.
     */
    PolicyId: PolicyId;
    /**
     * The AWS account that owns the resources that you want to get the details for.
     */
    MemberAccount: AWSAccountId;
  }
  export interface GetComplianceDetailResponse {
    /**
     * Information about the resources and the policy that you specified in the GetComplianceDetail request.
     */
    PolicyComplianceDetail?: PolicyComplianceDetail;
  }
  export interface GetNotificationChannelRequest {
  }
  export interface GetNotificationChannelResponse {
    /**
     * The SNS topic that records AWS Firewall Manager activity. 
     */
    SnsTopicArn?: ResourceArn;
    /**
     * The IAM role that is used by AWS Firewall Manager to record activity to SNS.
     */
    SnsRoleName?: ResourceArn;
  }
  export interface GetPolicyRequest {
    /**
     * The ID of the AWS Firewall Manager policy that you want the details for.
     */
    PolicyId: PolicyId;
  }
  export interface GetPolicyResponse {
    /**
     * Information about the specified AWS Firewall Manager policy.
     */
    Policy?: Policy;
    /**
     * The Amazon Resource Name (ARN) of the specified policy.
     */
    PolicyArn?: ResourceArn;
  }
  export interface GetProtectionStatusRequest {
    /**
     * The ID of the policy for which you want to get the attack information.
     */
    PolicyId: PolicyId;
    /**
     * The AWS account that is in scope of the policy that you want to get the details for.
     */
    MemberAccountId?: AWSAccountId;
    /**
     * The start of the time period to query for the attacks. This is a timestamp type. The sample request above indicates a number type because the default used by AWS Firewall Manager is Unix time in seconds. However, any valid timestamp format is allowed.
     */
    StartTime?: TimeStamp;
    /**
     * The end of the time period to query for the attacks. This is a timestamp type. The sample request above indicates a number type because the default used by AWS Firewall Manager is Unix time in seconds. However, any valid timestamp format is allowed.
     */
    EndTime?: TimeStamp;
    /**
     * If you specify a value for MaxResults and you have more objects than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of objects. For the second and subsequent GetProtectionStatus requests, specify the value of NextToken from the previous response to get information about another batch of objects.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of objects that you want AWS Firewall Manager to return for this request. If you have more objects than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of objects.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface GetProtectionStatusResponse {
    /**
     * The ID of the AWS Firewall administrator account for this policy.
     */
    AdminAccountId?: AWSAccountId;
    /**
     * The service type that is protected by the policy. Currently, this is always SHIELD_ADVANCED.
     */
    ServiceType?: SecurityServiceType;
    /**
     * Details about the attack, including the following:   Attack type   Account ID   ARN of the resource attacked   Start time of the attack   End time of the attack (ongoing attacks will not have an end time)   The details are in JSON format. An example is shown in the Examples section below.
     */
    Data?: ProtectionData;
    /**
     * If you have more objects than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more objects, submit another GetProtectionStatus request, and specify the NextToken value from the response in the NextToken value in the next request. AWS SDKs provide auto-pagination that identify NextToken in a response and make subsequent request calls automatically on your behalf. However, this feature is not supported by GetProtectionStatus. You must submit subsequent requests with NextToken using your own processes. 
     */
    NextToken?: PaginationToken;
  }
  export type IssueInfoMap = {[key: string]: DetailedInfo};
  export interface ListComplianceStatusRequest {
    /**
     * The ID of the AWS Firewall Manager policy that you want the details for.
     */
    PolicyId: PolicyId;
    /**
     * If you specify a value for MaxResults and you have more PolicyComplianceStatus objects than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of PolicyComplianceStatus objects. For the second and subsequent ListComplianceStatus requests, specify the value of NextToken from the previous response to get information about another batch of PolicyComplianceStatus objects.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of PolicyComplianceStatus objects that you want AWS Firewall Manager to return for this request. If you have more PolicyComplianceStatus objects than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of PolicyComplianceStatus objects.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface ListComplianceStatusResponse {
    /**
     * An array of PolicyComplianceStatus objects.
     */
    PolicyComplianceStatusList?: PolicyComplianceStatusList;
    /**
     * If you have more PolicyComplianceStatus objects than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more PolicyComplianceStatus objects, submit another ListComplianceStatus request, and specify the NextToken value from the response in the NextToken value in the next request.
     */
    NextToken?: PaginationToken;
  }
  export interface ListMemberAccountsRequest {
    /**
     * If you specify a value for MaxResults and you have more account IDs than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of IDs. For the second and subsequent ListMemberAccountsRequest requests, specify the value of NextToken from the previous response to get information about another batch of member account IDs.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of member account IDs that you want AWS Firewall Manager to return for this request. If you have more IDs than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of member account IDs.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface ListMemberAccountsResponse {
    /**
     * An array of account IDs.
     */
    MemberAccounts?: MemberAccounts;
    /**
     * If you have more member account IDs than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more IDs, submit another ListMemberAccounts request, and specify the NextToken value from the response in the NextToken value in the next request.
     */
    NextToken?: PaginationToken;
  }
  export interface ListPoliciesRequest {
    /**
     * If you specify a value for MaxResults and you have more PolicySummary objects than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of PolicySummary objects. For the second and subsequent ListPolicies requests, specify the value of NextToken from the previous response to get information about another batch of PolicySummary objects.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of PolicySummary objects that you want AWS Firewall Manager to return for this request. If you have more PolicySummary objects than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of PolicySummary objects.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface ListPoliciesResponse {
    /**
     * An array of PolicySummary objects.
     */
    PolicyList?: PolicySummaryList;
    /**
     * If you have more PolicySummary objects than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more PolicySummary objects, submit another ListPolicies request, and specify the NextToken value from the response in the NextToken value in the next request.
     */
    NextToken?: PaginationToken;
  }
  export type ManagedServiceData = string;
  export type MemberAccounts = AWSAccountId[];
  export type PaginationMaxResults = number;
  export type PaginationToken = string;
  export interface Policy {
    /**
     * The ID of the AWS Firewall Manager policy.
     */
    PolicyId?: PolicyId;
    /**
     * The friendly name of the AWS Firewall Manager policy.
     */
    PolicyName: ResourceName;
    /**
     * A unique identifier for each update to the policy. When issuing a PutPolicy request, the PolicyUpdateToken in the request must match the PolicyUpdateToken of the current policy version. To get the PolicyUpdateToken of the current policy version, use a GetPolicy request.
     */
    PolicyUpdateToken?: PolicyUpdateToken;
    /**
     * Details about the security service that is being used to protect the resources.
     */
    SecurityServicePolicyData: SecurityServicePolicyData;
    /**
     * The type of resource to protect with the policy. This is in the format shown in AWS Resource Types Reference. For example: AWS::ElasticLoadBalancingV2::LoadBalancer or AWS::CloudFront::Distribution.
     */
    ResourceType: ResourceType;
    /**
     * An array of ResourceType.
     */
    ResourceTypeList?: ResourceTypeList;
    /**
     * An array of ResourceTag objects.
     */
    ResourceTags?: ResourceTags;
    /**
     * If set to True, resources with the tags that are specified in the ResourceTag array are not protected by the policy. If set to False, and the ResourceTag array is not null, only resources with the specified tags are associated with the policy.
     */
    ExcludeResourceTags: Boolean;
    /**
     * Indicates if the policy should be automatically applied to new resources.
     */
    RemediationEnabled: Boolean;
    /**
     * Specifies the AWS account IDs to include in the policy. If IncludeMap is null, all accounts in the organization in AWS Organizations are included in the policy. If IncludeMap is not null, only values listed in IncludeMap are included in the policy. The key to the map is ACCOUNT. For example, a valid IncludeMap would be {“ACCOUNT” : [“accountID1”, “accountID2”]}.
     */
    IncludeMap?: CustomerPolicyScopeMap;
    /**
     * Specifies the AWS account IDs to exclude from the policy. The IncludeMap values are evaluated first, with all the appropriate account IDs added to the policy. Then the accounts listed in ExcludeMap are removed, resulting in the final list of accounts to add to the policy. The key to the map is ACCOUNT. For example, a valid ExcludeMap would be {“ACCOUNT” : [“accountID1”, “accountID2”]}.
     */
    ExcludeMap?: CustomerPolicyScopeMap;
  }
  export interface PolicyComplianceDetail {
    /**
     * The AWS account that created the AWS Firewall Manager policy.
     */
    PolicyOwner?: AWSAccountId;
    /**
     * The ID of the AWS Firewall Manager policy.
     */
    PolicyId?: PolicyId;
    /**
     * The AWS account ID.
     */
    MemberAccount?: AWSAccountId;
    /**
     * An array of resources that are not protected by the policy.
     */
    Violators?: ComplianceViolators;
    /**
     * Indicates if over 100 resources are non-compliant with the AWS Firewall Manager policy.
     */
    EvaluationLimitExceeded?: Boolean;
    /**
     * A time stamp that indicates when the returned information should be considered out-of-date.
     */
    ExpiredAt?: TimeStamp;
    /**
     * Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.
     */
    IssueInfoMap?: IssueInfoMap;
  }
  export interface PolicyComplianceStatus {
    /**
     * The AWS account that created the AWS Firewall Manager policy.
     */
    PolicyOwner?: AWSAccountId;
    /**
     * The ID of the AWS Firewall Manager policy.
     */
    PolicyId?: PolicyId;
    /**
     * The friendly name of the AWS Firewall Manager policy.
     */
    PolicyName?: ResourceName;
    /**
     * The member account ID.
     */
    MemberAccount?: AWSAccountId;
    /**
     * An array of EvaluationResult objects.
     */
    EvaluationResults?: EvaluationResults;
    /**
     * Time stamp of the last update to the EvaluationResult objects.
     */
    LastUpdated?: TimeStamp;
    /**
     * Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be non-compliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.
     */
    IssueInfoMap?: IssueInfoMap;
  }
  export type PolicyComplianceStatusList = PolicyComplianceStatus[];
  export type PolicyComplianceStatusType = "COMPLIANT"|"NON_COMPLIANT";
  export type PolicyId = string;
  export interface PolicySummary {
    /**
     * The Amazon Resource Name (ARN) of the specified policy.
     */
    PolicyArn?: ResourceArn;
    /**
     * The ID of the specified policy.
     */
    PolicyId?: PolicyId;
    /**
     * The friendly name of the specified policy.
     */
    PolicyName?: ResourceName;
    /**
     * The type of resource to protect with the policy. This is in the format shown in AWS Resource Types Reference. For example: AWS::ElasticLoadBalancingV2::LoadBalancer or AWS::CloudFront::Distribution.
     */
    ResourceType?: ResourceType;
    /**
     * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either a WAF policy or Shield Advanced policy.
     */
    SecurityServiceType?: SecurityServiceType;
    /**
     * Indicates if the policy should be automatically applied to new resources.
     */
    RemediationEnabled?: Boolean;
  }
  export type PolicySummaryList = PolicySummary[];
  export type PolicyUpdateToken = string;
  export type ProtectionData = string;
  export interface PutNotificationChannelRequest {
    /**
     * The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS Firewall Manager.
     */
    SnsTopicArn: ResourceArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS Firewall Manager activity. 
     */
    SnsRoleName: ResourceArn;
  }
  export interface PutPolicyRequest {
    /**
     * The details of the AWS Firewall Manager policy to be created.
     */
    Policy: Policy;
  }
  export interface PutPolicyResponse {
    /**
     * The details of the AWS Firewall Manager policy that was created.
     */
    Policy?: Policy;
    /**
     * The Amazon Resource Name (ARN) of the policy that was created.
     */
    PolicyArn?: ResourceArn;
  }
  export type ResourceArn = string;
  export type ResourceCount = number;
  export type ResourceId = string;
  export type ResourceName = string;
  export interface ResourceTag {
    /**
     * The resource tag key.
     */
    Key: TagKey;
    /**
     * The resource tag value.
     */
    Value?: TagValue;
  }
  export type ResourceTags = ResourceTag[];
  export type ResourceType = string;
  export type ResourceTypeList = ResourceType[];
  export interface SecurityServicePolicyData {
    /**
     * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either a WAF policy or Shield Advanced policy.
     */
    Type: SecurityServiceType;
    /**
     * Details about the service. This contains WAF data in JSON format, as shown in the following example:  ManagedServiceData": "{\"type\": \"WAF\", \"ruleGroups\": [{\"id\": \"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}  If this is a Shield Advanced policy, this string will be empty.
     */
    ManagedServiceData?: ManagedServiceData;
  }
  export type SecurityServiceType = "WAF"|"SHIELD_ADVANCED";
  export type TagKey = string;
  export type TagValue = string;
  export type TimeStamp = Date;
  export type ViolationReason = "WEB_ACL_MISSING_RULE_GROUP"|"RESOURCE_MISSING_WEB_ACL"|"RESOURCE_INCORRECT_WEB_ACL"|"RESOURCE_MISSING_SHIELD_PROTECTION";
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the FMS client.
   */
  export import Types = FMS;
}
export = FMS;
