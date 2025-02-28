import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MediaConnect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaConnect.Types.ClientConfiguration)
  config: Config & MediaConnect.Types.ClientConfiguration;
  /**
   * Adds outputs to an existing flow. You can create up to 20 outputs per flow.
   */
  addFlowOutputs(params: MediaConnect.Types.AddFlowOutputsRequest, callback?: (err: AWSError, data: MediaConnect.Types.AddFlowOutputsResponse) => void): Request<MediaConnect.Types.AddFlowOutputsResponse, AWSError>;
  /**
   * Adds outputs to an existing flow. You can create up to 20 outputs per flow.
   */
  addFlowOutputs(callback?: (err: AWSError, data: MediaConnect.Types.AddFlowOutputsResponse) => void): Request<MediaConnect.Types.AddFlowOutputsResponse, AWSError>;
  /**
   * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 20) and entitlements (up to 50).
   */
  createFlow(params: MediaConnect.Types.CreateFlowRequest, callback?: (err: AWSError, data: MediaConnect.Types.CreateFlowResponse) => void): Request<MediaConnect.Types.CreateFlowResponse, AWSError>;
  /**
   * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 20) and entitlements (up to 50).
   */
  createFlow(callback?: (err: AWSError, data: MediaConnect.Types.CreateFlowResponse) => void): Request<MediaConnect.Types.CreateFlowResponse, AWSError>;
  /**
   * Deletes a flow. Before you can delete a flow, you must stop the flow.
   */
  deleteFlow(params: MediaConnect.Types.DeleteFlowRequest, callback?: (err: AWSError, data: MediaConnect.Types.DeleteFlowResponse) => void): Request<MediaConnect.Types.DeleteFlowResponse, AWSError>;
  /**
   * Deletes a flow. Before you can delete a flow, you must stop the flow.
   */
  deleteFlow(callback?: (err: AWSError, data: MediaConnect.Types.DeleteFlowResponse) => void): Request<MediaConnect.Types.DeleteFlowResponse, AWSError>;
  /**
   * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
   */
  describeFlow(params: MediaConnect.Types.DescribeFlowRequest, callback?: (err: AWSError, data: MediaConnect.Types.DescribeFlowResponse) => void): Request<MediaConnect.Types.DescribeFlowResponse, AWSError>;
  /**
   * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
   */
  describeFlow(callback?: (err: AWSError, data: MediaConnect.Types.DescribeFlowResponse) => void): Request<MediaConnect.Types.DescribeFlowResponse, AWSError>;
  /**
   * Grants entitlements to an existing flow.
   */
  grantFlowEntitlements(params: MediaConnect.Types.GrantFlowEntitlementsRequest, callback?: (err: AWSError, data: MediaConnect.Types.GrantFlowEntitlementsResponse) => void): Request<MediaConnect.Types.GrantFlowEntitlementsResponse, AWSError>;
  /**
   * Grants entitlements to an existing flow.
   */
  grantFlowEntitlements(callback?: (err: AWSError, data: MediaConnect.Types.GrantFlowEntitlementsResponse) => void): Request<MediaConnect.Types.GrantFlowEntitlementsResponse, AWSError>;
  /**
   * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
   */
  listEntitlements(params: MediaConnect.Types.ListEntitlementsRequest, callback?: (err: AWSError, data: MediaConnect.Types.ListEntitlementsResponse) => void): Request<MediaConnect.Types.ListEntitlementsResponse, AWSError>;
  /**
   * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
   */
  listEntitlements(callback?: (err: AWSError, data: MediaConnect.Types.ListEntitlementsResponse) => void): Request<MediaConnect.Types.ListEntitlementsResponse, AWSError>;
  /**
   * Displays a list of flows that are associated with this account. This request returns a paginated result.
   */
  listFlows(params: MediaConnect.Types.ListFlowsRequest, callback?: (err: AWSError, data: MediaConnect.Types.ListFlowsResponse) => void): Request<MediaConnect.Types.ListFlowsResponse, AWSError>;
  /**
   * Displays a list of flows that are associated with this account. This request returns a paginated result.
   */
  listFlows(callback?: (err: AWSError, data: MediaConnect.Types.ListFlowsResponse) => void): Request<MediaConnect.Types.ListFlowsResponse, AWSError>;
  /**
   * List all tags on an AWS Elemental MediaConnect resource
   */
  listTagsForResource(params: MediaConnect.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: MediaConnect.Types.ListTagsForResourceResponse) => void): Request<MediaConnect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List all tags on an AWS Elemental MediaConnect resource
   */
  listTagsForResource(callback?: (err: AWSError, data: MediaConnect.Types.ListTagsForResourceResponse) => void): Request<MediaConnect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
   */
  removeFlowOutput(params: MediaConnect.Types.RemoveFlowOutputRequest, callback?: (err: AWSError, data: MediaConnect.Types.RemoveFlowOutputResponse) => void): Request<MediaConnect.Types.RemoveFlowOutputResponse, AWSError>;
  /**
   * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
   */
  removeFlowOutput(callback?: (err: AWSError, data: MediaConnect.Types.RemoveFlowOutputResponse) => void): Request<MediaConnect.Types.RemoveFlowOutputResponse, AWSError>;
  /**
   * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
   */
  revokeFlowEntitlement(params: MediaConnect.Types.RevokeFlowEntitlementRequest, callback?: (err: AWSError, data: MediaConnect.Types.RevokeFlowEntitlementResponse) => void): Request<MediaConnect.Types.RevokeFlowEntitlementResponse, AWSError>;
  /**
   * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
   */
  revokeFlowEntitlement(callback?: (err: AWSError, data: MediaConnect.Types.RevokeFlowEntitlementResponse) => void): Request<MediaConnect.Types.RevokeFlowEntitlementResponse, AWSError>;
  /**
   * Starts a flow.
   */
  startFlow(params: MediaConnect.Types.StartFlowRequest, callback?: (err: AWSError, data: MediaConnect.Types.StartFlowResponse) => void): Request<MediaConnect.Types.StartFlowResponse, AWSError>;
  /**
   * Starts a flow.
   */
  startFlow(callback?: (err: AWSError, data: MediaConnect.Types.StartFlowResponse) => void): Request<MediaConnect.Types.StartFlowResponse, AWSError>;
  /**
   * Stops a flow.
   */
  stopFlow(params: MediaConnect.Types.StopFlowRequest, callback?: (err: AWSError, data: MediaConnect.Types.StopFlowResponse) => void): Request<MediaConnect.Types.StopFlowResponse, AWSError>;
  /**
   * Stops a flow.
   */
  stopFlow(callback?: (err: AWSError, data: MediaConnect.Types.StopFlowResponse) => void): Request<MediaConnect.Types.StopFlowResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   */
  tagResource(params: MediaConnect.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(params: MediaConnect.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
   */
  updateFlowEntitlement(params: MediaConnect.Types.UpdateFlowEntitlementRequest, callback?: (err: AWSError, data: MediaConnect.Types.UpdateFlowEntitlementResponse) => void): Request<MediaConnect.Types.UpdateFlowEntitlementResponse, AWSError>;
  /**
   * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
   */
  updateFlowEntitlement(callback?: (err: AWSError, data: MediaConnect.Types.UpdateFlowEntitlementResponse) => void): Request<MediaConnect.Types.UpdateFlowEntitlementResponse, AWSError>;
  /**
   * Updates an existing flow output.
   */
  updateFlowOutput(params: MediaConnect.Types.UpdateFlowOutputRequest, callback?: (err: AWSError, data: MediaConnect.Types.UpdateFlowOutputResponse) => void): Request<MediaConnect.Types.UpdateFlowOutputResponse, AWSError>;
  /**
   * Updates an existing flow output.
   */
  updateFlowOutput(callback?: (err: AWSError, data: MediaConnect.Types.UpdateFlowOutputResponse) => void): Request<MediaConnect.Types.UpdateFlowOutputResponse, AWSError>;
  /**
   * Updates the source of a flow.
   */
  updateFlowSource(params: MediaConnect.Types.UpdateFlowSourceRequest, callback?: (err: AWSError, data: MediaConnect.Types.UpdateFlowSourceResponse) => void): Request<MediaConnect.Types.UpdateFlowSourceResponse, AWSError>;
  /**
   * Updates the source of a flow.
   */
  updateFlowSource(callback?: (err: AWSError, data: MediaConnect.Types.UpdateFlowSourceResponse) => void): Request<MediaConnect.Types.UpdateFlowSourceResponse, AWSError>;
}
declare namespace MediaConnect {
  export interface AddFlowOutputsRequest {
    /**
     * The flow that you want to add outputs to.
     */
    FlowArn: __string;
    /**
     * A list of outputs that you want to add.
     */
    Outputs: __listOfAddOutputRequest;
  }
  export interface AddFlowOutputsResponse {
    /**
     * The ARN of the flow that these outputs were added to.
     */
    FlowArn?: __string;
    /**
     * The details of the newly added outputs.
     */
    Outputs?: __listOfOutput;
  }
  export interface AddOutputRequest {
    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: __listOf__string;
    /**
     * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
     */
    Description?: __string;
    /**
     * The IP address from which video will be sent to output destinations.
     */
    Destination?: __string;
    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: Encryption;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: __integer;
    /**
     * The name of the output. This value must be unique within the current flow.
     */
    Name?: __string;
    /**
     * The port to use when content is distributed to this output.
     */
    Port?: __integer;
    /**
     * The protocol to use for the output.
     */
    Protocol: Protocol;
    /**
     * The remote ID for the Zixi-pull output stream.
     */
    RemoteId?: __string;
    /**
     * The smoothing latency in milliseconds for RTP and RTP-FEC streams.
     */
    SmoothingLatency?: __integer;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: __string;
  }
  export type Algorithm = "aes128"|"aes192"|"aes256";
  export interface CreateFlowRequest {
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
     */
    AvailabilityZone?: __string;
    /**
     * The entitlements that you want to grant on a flow.
     */
    Entitlements?: __listOfGrantEntitlementRequest;
    /**
     * The name of the flow.
     */
    Name: __string;
    /**
     * The outputs that you want to add to this flow.
     */
    Outputs?: __listOfAddOutputRequest;
    Source: SetSourceRequest;
  }
  export interface CreateFlowResponse {
    Flow?: Flow;
  }
  export interface DeleteFlowRequest {
    /**
     * The ARN of the flow that you want to delete.
     */
    FlowArn: __string;
  }
  export interface DeleteFlowResponse {
    /**
     * The ARN of the flow that was deleted.
     */
    FlowArn?: __string;
    /**
     * The status of the flow when the DeleteFlow process begins.
     */
    Status?: Status;
  }
  export interface DescribeFlowRequest {
    /**
     * The ARN of the flow that you want to describe.
     */
    FlowArn: __string;
  }
  export interface DescribeFlowResponse {
    Flow?: Flow;
    Messages?: Messages;
  }
  export interface Encryption {
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm: Algorithm;
    /**
     * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     */
    ConstantInitializationVector?: __string;
    /**
     * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    DeviceId?: __string;
    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: KeyType;
    /**
     * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Region?: __string;
    /**
     * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    ResourceId?: __string;
    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn: __string;
    /**
     * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn?: __string;
    /**
     * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Url?: __string;
  }
  export interface Entitlement {
    /**
     * A description of the entitlement.
     */
    Description?: __string;
    /**
     * The type of encryption that will be used on the output that is associated with this entitlement.
     */
    Encryption?: Encryption;
    /**
     * The ARN of the entitlement.
     */
    EntitlementArn: __string;
    /**
     * The name of the entitlement.
     */
    Name: __string;
    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
     */
    Subscribers: __listOf__string;
  }
  export interface Flow {
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
     */
    AvailabilityZone: __string;
    /**
     * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: __string;
    /**
     * The IP address from which video will be sent to output destinations.
     */
    EgressIp?: __string;
    /**
     * The entitlements in this flow.
     */
    Entitlements: __listOfEntitlement;
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     */
    FlowArn: __string;
    /**
     * The name of the flow.
     */
    Name: __string;
    /**
     * The outputs in this flow.
     */
    Outputs: __listOfOutput;
    Source: Source;
    /**
     * The current status of the flow.
     */
    Status: Status;
  }
  export interface GrantEntitlementRequest {
    /**
     * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
     */
    Description?: __string;
    /**
     * The type of encryption that will be used on the output that is associated with this entitlement.
     */
    Encryption?: Encryption;
    /**
     * The name of the entitlement. This value must be unique within the current flow.
     */
    Name?: __string;
    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
     */
    Subscribers: __listOf__string;
  }
  export interface GrantFlowEntitlementsRequest {
    /**
     * The list of entitlements that you want to grant.
     */
    Entitlements: __listOfGrantEntitlementRequest;
    /**
     * The flow that you want to grant entitlements on.
     */
    FlowArn: __string;
  }
  export interface GrantFlowEntitlementsResponse {
    /**
     * The entitlements that were just granted.
     */
    Entitlements?: __listOfEntitlement;
    /**
     * The ARN of the flow that these entitlements were granted to.
     */
    FlowArn?: __string;
  }
  export type KeyType = "speke"|"static-key";
  export interface ListEntitlementsRequest {
    /**
     * The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
     */
    MaxResults?: MaxResults;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
     */
    NextToken?: __string;
  }
  export interface ListEntitlementsResponse {
    /**
     * A list of entitlements that have been granted to you from other AWS accounts.
     */
    Entitlements?: __listOfListedEntitlement;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
     */
    NextToken?: __string;
  }
  export interface ListFlowsRequest {
    /**
     * The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
     */
    MaxResults?: MaxResults;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
     */
    NextToken?: __string;
  }
  export interface ListFlowsResponse {
    /**
     * A list of flow summaries.
     */
    Flows?: __listOfListedFlow;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
     */
    NextToken?: __string;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
     */
    ResourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    Tags?: __mapOf__string;
  }
  export interface ListedEntitlement {
    /**
     * The ARN of the entitlement.
     */
    EntitlementArn: __string;
    /**
     * The name of the entitlement.
     */
    EntitlementName: __string;
  }
  export interface ListedFlow {
    /**
     * The Availability Zone that the flow was created in.
     */
    AvailabilityZone: __string;
    /**
     * A description of the flow.
     */
    Description: __string;
    /**
     * The ARN of the flow.
     */
    FlowArn: __string;
    /**
     * The name of the flow.
     */
    Name: __string;
    /**
     * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
     */
    SourceType: SourceType;
    /**
     * The current status of the flow.
     */
    Status: Status;
  }
  export type MaxResults = number;
  export interface Messages {
    /**
     * A list of errors that might have been generated from processes on this flow.
     */
    Errors: __listOf__string;
  }
  export interface Output {
    /**
     * A description of the output.
     */
    Description?: __string;
    /**
     * The address where you want to send the output.
     */
    Destination?: __string;
    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: Encryption;
    /**
     * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
     */
    EntitlementArn?: __string;
    /**
     * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
     */
    MediaLiveInputArn?: __string;
    /**
     * The name of the output. This value must be unique within the current flow.
     */
    Name: __string;
    /**
     * The ARN of the output.
     */
    OutputArn: __string;
    /**
     * The port to use when content is distributed to this output.
     */
    Port?: __integer;
    /**
     * Attributes related to the transport stream that are used in the output.
     */
    Transport?: Transport;
  }
  export type Protocol = "zixi-push"|"rtp-fec"|"rtp"|"zixi-pull";
  export interface RemoveFlowOutputRequest {
    /**
     * The flow that you want to remove an output from.
     */
    FlowArn: __string;
    /**
     * The ARN of the output that you want to remove.
     */
    OutputArn: __string;
  }
  export interface RemoveFlowOutputResponse {
    /**
     * The ARN of the flow that is associated with the output you removed.
     */
    FlowArn?: __string;
    /**
     * The ARN of the output that was removed.
     */
    OutputArn?: __string;
  }
  export interface RevokeFlowEntitlementRequest {
    /**
     * The ARN of the entitlement that you want to revoke.
     */
    EntitlementArn: __string;
    /**
     * The flow that you want to revoke an entitlement from.
     */
    FlowArn: __string;
  }
  export interface RevokeFlowEntitlementResponse {
    /**
     * The ARN of the entitlement that was revoked.
     */
    EntitlementArn?: __string;
    /**
     * The ARN of the flow that the entitlement was revoked from.
     */
    FlowArn?: __string;
  }
  export interface SetSourceRequest {
    /**
     * The type of encryption that is used on the content ingested from this source.
     */
    Decryption?: Encryption;
    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: __string;
    /**
     * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: __string;
    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: __integer;
    /**
     * The smoothing max bitrate for RTP and RTP-FEC streams.
     */
    MaxBitrate?: __integer;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: __integer;
    /**
     * The name of the source.
     */
    Name?: __string;
    /**
     * The protocol that is used by the source.
     */
    Protocol?: Protocol;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: __string;
    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: __string;
  }
  export interface Source {
    /**
     * The type of encryption that is used on the content ingested from this source.
     */
    Decryption?: Encryption;
    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: __string;
    /**
     * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: __string;
    /**
     * The IP address that the flow will be listening on for incoming content.
     */
    IngestIp?: __string;
    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: __integer;
    /**
     * The name of the source.
     */
    Name: __string;
    /**
     * The ARN of the source.
     */
    SourceArn: __string;
    /**
     * Attributes related to the transport stream that are used in the source.
     */
    Transport?: Transport;
    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: __string;
  }
  export type SourceType = "OWNED"|"ENTITLED";
  export interface StartFlowRequest {
    /**
     * The ARN of the flow that you want to start.
     */
    FlowArn: __string;
  }
  export interface StartFlowResponse {
    /**
     * The ARN of the flow that you started.
     */
    FlowArn?: __string;
    /**
     * The status of the flow when the StartFlow process begins.
     */
    Status?: Status;
  }
  export type Status = "STANDBY"|"ACTIVE"|"UPDATING"|"DELETING"|"STARTING"|"STOPPING"|"ERROR";
  export interface StopFlowRequest {
    /**
     * The ARN of the flow that you want to stop.
     */
    FlowArn: __string;
  }
  export interface StopFlowResponse {
    /**
     * The ARN of the flow that you stopped.
     */
    FlowArn?: __string;
    /**
     * The status of the flow when the StopFlow process begins.
     */
    Status?: Status;
  }
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
     */
    ResourceArn: __string;
    /**
     * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    Tags: __mapOf__string;
  }
  export interface Transport {
    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: __listOf__string;
    /**
     * The smoothing max bitrate for RTP and RTP-FEC streams.
     */
    MaxBitrate?: __integer;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: __integer;
    /**
     * The protocol that is used by the source or output.
     */
    Protocol: Protocol;
    /**
     * The remote ID for the Zixi-pull stream.
     */
    RemoteId?: __string;
    /**
     * The smoothing latency in milliseconds for RTP and RTP-FEC streams.
     */
    SmoothingLatency?: __integer;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: __string;
  }
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
     */
    ResourceArn: __string;
    /**
     * The keys of the tags to be removed.
     */
    TagKeys: __listOf__string;
  }
  export interface UpdateEncryption {
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm?: Algorithm;
    /**
     * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     */
    ConstantInitializationVector?: __string;
    /**
     * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    DeviceId?: __string;
    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: KeyType;
    /**
     * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Region?: __string;
    /**
     * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    ResourceId?: __string;
    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn?: __string;
    /**
     * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn?: __string;
    /**
     * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Url?: __string;
  }
  export interface UpdateFlowEntitlementRequest {
    /**
     * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
     */
    Description?: __string;
    /**
     * The type of encryption that will be used on the output associated with this entitlement.
     */
    Encryption?: UpdateEncryption;
    /**
     * The ARN of the entitlement that you want to update.
     */
    EntitlementArn: __string;
    /**
     * The flow that is associated with the entitlement that you want to update.
     */
    FlowArn: __string;
    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
     */
    Subscribers?: __listOf__string;
  }
  export interface UpdateFlowEntitlementResponse {
    Entitlement?: Entitlement;
    /**
     * The ARN of the flow that this entitlement was granted on.
     */
    FlowArn?: __string;
  }
  export interface UpdateFlowOutputRequest {
    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: __listOf__string;
    /**
     * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
     */
    Description?: __string;
    /**
     * The IP address where you want to send the output.
     */
    Destination?: __string;
    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: UpdateEncryption;
    /**
     * The flow that is associated with the output that you want to update.
     */
    FlowArn: __string;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: __integer;
    /**
     * The ARN of the output that you want to update.
     */
    OutputArn: __string;
    /**
     * The port to use when content is distributed to this output.
     */
    Port?: __integer;
    /**
     * The protocol to use for the output.
     */
    Protocol?: Protocol;
    /**
     * The remote ID for the Zixi-pull stream.
     */
    RemoteId?: __string;
    /**
     * The smoothing latency in milliseconds for RTP and RTP-FEC streams.
     */
    SmoothingLatency?: __integer;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: __string;
  }
  export interface UpdateFlowOutputResponse {
    /**
     * The ARN of the flow that is associated with the updated output.
     */
    FlowArn?: __string;
    Output?: Output;
  }
  export interface UpdateFlowSourceRequest {
    /**
     * The type of encryption used on the content ingested from this source.
     */
    Decryption?: UpdateEncryption;
    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: __string;
    /**
     * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: __string;
    /**
     * The flow that is associated with the source that you want to update.
     */
    FlowArn: __string;
    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: __integer;
    /**
     * The smoothing max bitrate for RTP and RTP-FEC streams.
     */
    MaxBitrate?: __integer;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: __integer;
    /**
     * The protocol that is used by the source.
     */
    Protocol?: Protocol;
    /**
     * The ARN of the source that you want to update.
     */
    SourceArn: __string;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: __string;
    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: __string;
  }
  export interface UpdateFlowSourceResponse {
    /**
     * The ARN of the flow that you want to update.
     */
    FlowArn?: __string;
    /**
     * The settings for the source of the flow.
     */
    Source?: Source;
  }
  export type __integer = number;
  export type __listOfAddOutputRequest = AddOutputRequest[];
  export type __listOfEntitlement = Entitlement[];
  export type __listOfGrantEntitlementRequest = GrantEntitlementRequest[];
  export type __listOfListedEntitlement = ListedEntitlement[];
  export type __listOfListedFlow = ListedFlow[];
  export type __listOfOutput = Output[];
  export type __listOf__string = __string[];
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaConnect client.
   */
  export import Types = MediaConnect;
}
export = MediaConnect;
