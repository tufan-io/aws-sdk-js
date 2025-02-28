import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Kafka extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Kafka.Types.ClientConfiguration)
  config: Config & Kafka.Types.ClientConfiguration;
  /**
   * 
            Creates a new MSK cluster.
         
   */
  createCluster(params: Kafka.Types.CreateClusterRequest, callback?: (err: AWSError, data: Kafka.Types.CreateClusterResponse) => void): Request<Kafka.Types.CreateClusterResponse, AWSError>;
  /**
   * 
            Creates a new MSK cluster.
         
   */
  createCluster(callback?: (err: AWSError, data: Kafka.Types.CreateClusterResponse) => void): Request<Kafka.Types.CreateClusterResponse, AWSError>;
  /**
   * 
            Creates a new MSK configuration.
         
   */
  createConfiguration(params: Kafka.Types.CreateConfigurationRequest, callback?: (err: AWSError, data: Kafka.Types.CreateConfigurationResponse) => void): Request<Kafka.Types.CreateConfigurationResponse, AWSError>;
  /**
   * 
            Creates a new MSK configuration.
         
   */
  createConfiguration(callback?: (err: AWSError, data: Kafka.Types.CreateConfigurationResponse) => void): Request<Kafka.Types.CreateConfigurationResponse, AWSError>;
  /**
   * 
            Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.
         
   */
  deleteCluster(params: Kafka.Types.DeleteClusterRequest, callback?: (err: AWSError, data: Kafka.Types.DeleteClusterResponse) => void): Request<Kafka.Types.DeleteClusterResponse, AWSError>;
  /**
   * 
            Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.
         
   */
  deleteCluster(callback?: (err: AWSError, data: Kafka.Types.DeleteClusterResponse) => void): Request<Kafka.Types.DeleteClusterResponse, AWSError>;
  /**
   * 
            Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.
         
   */
  describeCluster(params: Kafka.Types.DescribeClusterRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeClusterResponse) => void): Request<Kafka.Types.DescribeClusterResponse, AWSError>;
  /**
   * 
            Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.
         
   */
  describeCluster(callback?: (err: AWSError, data: Kafka.Types.DescribeClusterResponse) => void): Request<Kafka.Types.DescribeClusterResponse, AWSError>;
  /**
   * 
            Returns a description of the cluster operation specified by the ARN.
         
   */
  describeClusterOperation(params: Kafka.Types.DescribeClusterOperationRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeClusterOperationResponse) => void): Request<Kafka.Types.DescribeClusterOperationResponse, AWSError>;
  /**
   * 
            Returns a description of the cluster operation specified by the ARN.
         
   */
  describeClusterOperation(callback?: (err: AWSError, data: Kafka.Types.DescribeClusterOperationResponse) => void): Request<Kafka.Types.DescribeClusterOperationResponse, AWSError>;
  /**
   * 
            Returns a description of this MSK configuration.
         
   */
  describeConfiguration(params: Kafka.Types.DescribeConfigurationRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationResponse) => void): Request<Kafka.Types.DescribeConfigurationResponse, AWSError>;
  /**
   * 
            Returns a description of this MSK configuration.
         
   */
  describeConfiguration(callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationResponse) => void): Request<Kafka.Types.DescribeConfigurationResponse, AWSError>;
  /**
   * 
            Returns a description of this revision of the configuration.
         
   */
  describeConfigurationRevision(params: Kafka.Types.DescribeConfigurationRevisionRequest, callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationRevisionResponse) => void): Request<Kafka.Types.DescribeConfigurationRevisionResponse, AWSError>;
  /**
   * 
            Returns a description of this revision of the configuration.
         
   */
  describeConfigurationRevision(callback?: (err: AWSError, data: Kafka.Types.DescribeConfigurationRevisionResponse) => void): Request<Kafka.Types.DescribeConfigurationRevisionResponse, AWSError>;
  /**
   * 
            A list of brokers that a client application can use to bootstrap.
         
   */
  getBootstrapBrokers(params: Kafka.Types.GetBootstrapBrokersRequest, callback?: (err: AWSError, data: Kafka.Types.GetBootstrapBrokersResponse) => void): Request<Kafka.Types.GetBootstrapBrokersResponse, AWSError>;
  /**
   * 
            A list of brokers that a client application can use to bootstrap.
         
   */
  getBootstrapBrokers(callback?: (err: AWSError, data: Kafka.Types.GetBootstrapBrokersResponse) => void): Request<Kafka.Types.GetBootstrapBrokersResponse, AWSError>;
  /**
   * 
            Returns a list of all the operations that have been performed on the specified MSK cluster.
         
   */
  listClusterOperations(params: Kafka.Types.ListClusterOperationsRequest, callback?: (err: AWSError, data: Kafka.Types.ListClusterOperationsResponse) => void): Request<Kafka.Types.ListClusterOperationsResponse, AWSError>;
  /**
   * 
            Returns a list of all the operations that have been performed on the specified MSK cluster.
         
   */
  listClusterOperations(callback?: (err: AWSError, data: Kafka.Types.ListClusterOperationsResponse) => void): Request<Kafka.Types.ListClusterOperationsResponse, AWSError>;
  /**
   * 
            Returns a list of all the MSK clusters in the current Region.
         
   */
  listClusters(params: Kafka.Types.ListClustersRequest, callback?: (err: AWSError, data: Kafka.Types.ListClustersResponse) => void): Request<Kafka.Types.ListClustersResponse, AWSError>;
  /**
   * 
            Returns a list of all the MSK clusters in the current Region.
         
   */
  listClusters(callback?: (err: AWSError, data: Kafka.Types.ListClustersResponse) => void): Request<Kafka.Types.ListClustersResponse, AWSError>;
  /**
   * 
            Returns a list of all the MSK configurations in this Region.
         
   */
  listConfigurationRevisions(params: Kafka.Types.ListConfigurationRevisionsRequest, callback?: (err: AWSError, data: Kafka.Types.ListConfigurationRevisionsResponse) => void): Request<Kafka.Types.ListConfigurationRevisionsResponse, AWSError>;
  /**
   * 
            Returns a list of all the MSK configurations in this Region.
         
   */
  listConfigurationRevisions(callback?: (err: AWSError, data: Kafka.Types.ListConfigurationRevisionsResponse) => void): Request<Kafka.Types.ListConfigurationRevisionsResponse, AWSError>;
  /**
   * 
            Returns a list of all the MSK configurations in this Region.
         
   */
  listConfigurations(params: Kafka.Types.ListConfigurationsRequest, callback?: (err: AWSError, data: Kafka.Types.ListConfigurationsResponse) => void): Request<Kafka.Types.ListConfigurationsResponse, AWSError>;
  /**
   * 
            Returns a list of all the MSK configurations in this Region.
         
   */
  listConfigurations(callback?: (err: AWSError, data: Kafka.Types.ListConfigurationsResponse) => void): Request<Kafka.Types.ListConfigurationsResponse, AWSError>;
  /**
   * 
            Returns a list of the broker nodes in the cluster.
         
   */
  listNodes(params: Kafka.Types.ListNodesRequest, callback?: (err: AWSError, data: Kafka.Types.ListNodesResponse) => void): Request<Kafka.Types.ListNodesResponse, AWSError>;
  /**
   * 
            Returns a list of the broker nodes in the cluster.
         
   */
  listNodes(callback?: (err: AWSError, data: Kafka.Types.ListNodesResponse) => void): Request<Kafka.Types.ListNodesResponse, AWSError>;
  /**
   * 
            Returns a list of the tags associated with the specified resource.
         
   */
  listTagsForResource(params: Kafka.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Kafka.Types.ListTagsForResourceResponse) => void): Request<Kafka.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * 
            Returns a list of the tags associated with the specified resource.
         
   */
  listTagsForResource(callback?: (err: AWSError, data: Kafka.Types.ListTagsForResourceResponse) => void): Request<Kafka.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * 
            Adds tags to the specified MSK resource.
         
   */
  tagResource(params: Kafka.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
            Adds tags to the specified MSK resource.
         
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
            Removes the tags associated with the keys that are provided in the query.
         
   */
  untagResource(params: Kafka.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
            Removes the tags associated with the keys that are provided in the query.
         
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * 
            Updates the EBS storage associated with MSK brokers.
         
   */
  updateBrokerStorage(params: Kafka.Types.UpdateBrokerStorageRequest, callback?: (err: AWSError, data: Kafka.Types.UpdateBrokerStorageResponse) => void): Request<Kafka.Types.UpdateBrokerStorageResponse, AWSError>;
  /**
   * 
            Updates the EBS storage associated with MSK brokers.
         
   */
  updateBrokerStorage(callback?: (err: AWSError, data: Kafka.Types.UpdateBrokerStorageResponse) => void): Request<Kafka.Types.UpdateBrokerStorageResponse, AWSError>;
  /**
   * 
            Updates the cluster with the configuration that is specified in the request body.
         
   */
  updateClusterConfiguration(params: Kafka.Types.UpdateClusterConfigurationRequest, callback?: (err: AWSError, data: Kafka.Types.UpdateClusterConfigurationResponse) => void): Request<Kafka.Types.UpdateClusterConfigurationResponse, AWSError>;
  /**
   * 
            Updates the cluster with the configuration that is specified in the request body.
         
   */
  updateClusterConfiguration(callback?: (err: AWSError, data: Kafka.Types.UpdateClusterConfigurationResponse) => void): Request<Kafka.Types.UpdateClusterConfigurationResponse, AWSError>;
}
declare namespace Kafka {
  export type BrokerAZDistribution = "DEFAULT";
  export interface BrokerEBSVolumeInfo {
    /**
     * 
            The ID of the broker to update.
         
     */
    KafkaBrokerNodeId: __string;
    /**
     * 
            Size of the EBS volume to update.
         
     */
    VolumeSizeGB: __integer;
  }
  export interface BrokerNodeGroupInfo {
    /**
     * 
            The distribution of broker nodes across Availability Zones.
         
     */
    BrokerAZDistribution?: BrokerAZDistribution;
    /**
     * 
            The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e.
         
     */
    ClientSubnets: __listOf__string;
    /**
     * 
            The type of Amazon EC2 instances to use for Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.
         
     */
    InstanceType: __stringMin5Max32;
    /**
     * 
            The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.
         
     */
    SecurityGroups?: __listOf__string;
    /**
     * 
            Contains information about storage volumes attached to MSK broker nodes.
         
     */
    StorageInfo?: StorageInfo;
  }
  export interface BrokerNodeInfo {
    /**
     * 
            The attached elastic network interface of the broker.
         
     */
    AttachedENIId?: __string;
    /**
     * 
            The ID of the broker.
         
     */
    BrokerId?: __double;
    /**
     * 
            The client subnet to which this broker node belongs.
         
     */
    ClientSubnet?: __string;
    /**
     * 
            The virtual private cloud (VPC) of the client.
         
     */
    ClientVpcIpAddress?: __string;
    /**
     * 
            Information about the version of software currently deployed on the Kafka brokers in the cluster.
         
     */
    CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
    /**
     * 
            Endpoints for accessing the broker.
         
     */
    Endpoints?: __listOf__string;
  }
  export interface BrokerSoftwareInfo {
    /**
     * 
            The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.
         
     */
    ConfigurationArn?: __string;
    /**
     * 
            The revision of the configuration to use. This field isn't visible in this preview release.
         
     */
    ConfigurationRevision?: __long;
    /**
     * 
            The version of Apache Kafka.
         
     */
    KafkaVersion?: __string;
  }
  export interface ClientAuthentication {
    /**
     * 
            Details for ClientAuthentication using TLS.
         
     */
    Tls?: Tls;
  }
  export type ClientBroker = "TLS"|"TLS_PLAINTEXT"|"PLAINTEXT";
  export interface ClusterInfo {
    /**
     * 
            Arn of active cluster operation.
         
     */
    ActiveOperationArn?: __string;
    /**
     * 
            Information about the broker nodes.
         
     */
    BrokerNodeGroupInfo?: BrokerNodeGroupInfo;
    /**
     * 
            Includes all client authentication information.
         
     */
    ClientAuthentication?: ClientAuthentication;
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn?: __string;
    /**
     * 
            The name of the cluster.
         
     */
    ClusterName?: __string;
    /**
     * 
            The time when the cluster was created.
         
     */
    CreationTime?: __timestampIso8601;
    /**
     * 
            Information about the version of software currently deployed on the Kafka brokers in the cluster.
         
     */
    CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
    /**
     * 
            The current version of the MSK cluster.
         
     */
    CurrentVersion?: __string;
    /**
     * 
            Includes all encryption-related information.
         
     */
    EncryptionInfo?: EncryptionInfo;
    /**
     * 
            Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see Monitoring.
         
     */
    EnhancedMonitoring?: EnhancedMonitoring;
    /**
     * 
            The number of broker nodes in the cluster.
         
     */
    NumberOfBrokerNodes?: __integer;
    /**
     * 
            The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.
         
     */
    State?: ClusterState;
    /**
     * 
            Tags attached to the cluster.
         
     */
    Tags?: __mapOf__string;
    /**
     * 
            The connection string to use to connect to the Apache ZooKeeper cluster.
         
     */
    ZookeeperConnectString?: __string;
  }
  export interface ClusterOperationInfo {
    /**
     * 
            The ID of the API request that triggered this operation.
         
     */
    ClientRequestId?: __string;
    /**
     * 
            ARN of the cluster.
         
     */
    ClusterArn?: __string;
    /**
     * 
            The time that the operation was created.
         
     */
    CreationTime?: __timestampIso8601;
    /**
     * 
            The time at which the operation finished.
         
     */
    EndTime?: __timestampIso8601;
    /**
     * 
            Describes the error if the operation fails.
         
     */
    ErrorInfo?: ErrorInfo;
    /**
     * 
            ARN of the cluster operation.
         
     */
    OperationArn?: __string;
    /**
     * 
            State of the cluster operation.
         
     */
    OperationState?: __string;
    /**
     * 
            Type of the cluster operation.
         
     */
    OperationType?: __string;
    /**
     * 
            Information about cluster attributes before a cluster is updated.
         
     */
    SourceClusterInfo?: MutableClusterInfo;
    /**
     * 
            Information about cluster attributes after a cluster is updated.
         
     */
    TargetClusterInfo?: MutableClusterInfo;
  }
  export type ClusterState = "ACTIVE"|"CREATING"|"UPDATING"|"DELETING"|"FAILED";
  export interface Configuration {
    /**
     * 
            The Amazon Resource Name (ARN) of the configuration.
         
     */
    Arn: __string;
    /**
     * 
            The time when the configuration was created.
         
     */
    CreationTime: __timestampIso8601;
    /**
     * 
            The description of the configuration.
         
     */
    Description: __string;
    /**
     * 
            An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.
         
     */
    KafkaVersions: __listOf__string;
    /**
     * 
            Latest revision of the configuration.
         
     */
    LatestRevision: ConfigurationRevision;
    /**
     * 
            The name of the configuration.
         
     */
    Name: __string;
  }
  export interface ConfigurationInfo {
    /**
     * 
            ARN of the configuration to use.
         
     */
    Arn: __string;
    /**
     * 
            The revision of the configuration to use.
         
     */
    Revision: __long;
  }
  export interface ConfigurationRevision {
    /**
     * 
            The time when the configuration revision was created.
         
     */
    CreationTime: __timestampIso8601;
    /**
     * 
            The description of the configuration revision.
         
     */
    Description?: __string;
    /**
     * 
            The revision number.
         
     */
    Revision: __long;
  }
  export interface CreateClusterRequest {
    /**
     * 
            Information about the broker nodes in the cluster.
         
     */
    BrokerNodeGroupInfo: BrokerNodeGroupInfo;
    /**
     * 
            Includes all client authentication related information.
         
     */
    ClientAuthentication?: ClientAuthentication;
    /**
     * 
            The name of the cluster.
         
     */
    ClusterName: __stringMin1Max64;
    /**
     * 
            Represents the configuration that you want MSK to use for the brokers in a cluster.
         
     */
    ConfigurationInfo?: ConfigurationInfo;
    /**
     * 
            Includes all encryption-related information.
         
     */
    EncryptionInfo?: EncryptionInfo;
    /**
     * 
            Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.
         
     */
    EnhancedMonitoring?: EnhancedMonitoring;
    /**
     * 
            The version of Apache Kafka.
         
     */
    KafkaVersion: __stringMin1Max128;
    /**
     * 
            The number of broker nodes in the cluster.
         
     */
    NumberOfBrokerNodes: __integerMin1Max15;
    /**
     * 
            Create tags when creating the cluster.
         
     */
    Tags?: __mapOf__string;
  }
  export interface CreateClusterResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the cluster.
         
     */
    ClusterArn?: __string;
    /**
     * 
            The name of the MSK cluster.
         
     */
    ClusterName?: __string;
    /**
     * 
            The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.
         
     */
    State?: ClusterState;
  }
  export interface CreateConfigurationRequest {
    /**
     * 
            The description of the configuration.
         
     */
    Description?: __string;
    /**
     * 
            The versions of Apache Kafka with which you can use this MSK configuration.
         
     */
    KafkaVersions: __listOf__string;
    /**
     * 
            The name of the configuration.
         
     */
    Name: __string;
    /**
     * 
            Contents of the server.properties file. When using the API, you must ensure that the contents of the file are base64 encoded. 
               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of server.properties can be in plaintext.
         
     */
    ServerProperties: __blob;
  }
  export interface CreateConfigurationResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the configuration.
         
     */
    Arn?: __string;
    /**
     * 
            The time when the configuration was created.
         
     */
    CreationTime?: __timestampIso8601;
    /**
     * 
            Latest revision of the configuration.
         
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * 
            The name of the configuration.
         
     */
    Name?: __string;
  }
  export interface DeleteClusterRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
    /**
     * 
            The current version of the MSK cluster.
         
     */
    CurrentVersion?: __string;
  }
  export interface DeleteClusterResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the cluster.
         
     */
    ClusterArn?: __string;
    /**
     * 
            The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.
         
     */
    State?: ClusterState;
  }
  export interface DescribeClusterOperationRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.
         
     */
    ClusterOperationArn: __string;
  }
  export interface DescribeClusterOperationResponse {
    /**
     * 
            Cluster operation information
         
     */
    ClusterOperationInfo?: ClusterOperationInfo;
  }
  export interface DescribeClusterRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
  }
  export interface DescribeClusterResponse {
    /**
     * 
            The cluster information.
         
     */
    ClusterInfo?: ClusterInfo;
  }
  export interface DescribeConfigurationRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
         
     */
    Arn: __string;
  }
  export interface DescribeConfigurationResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the configuration.
         
     */
    Arn?: __string;
    /**
     * 
            The time when the configuration was created.
         
     */
    CreationTime?: __timestampIso8601;
    /**
     * 
            The description of the configuration.
         
     */
    Description?: __string;
    /**
     * 
            The versions of Apache Kafka with which you can use this MSK configuration.
         
     */
    KafkaVersions?: __listOf__string;
    /**
     * 
            Latest revision of the configuration.
         
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * 
            The name of the configuration.
         
     */
    Name?: __string;
  }
  export interface DescribeConfigurationRevisionRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
         
     */
    Arn: __string;
    /**
     * 
            A string that uniquely identifies a revision of an MSK configuration.
         
     */
    Revision: __long;
  }
  export interface DescribeConfigurationRevisionResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the configuration.
         
     */
    Arn?: __string;
    /**
     * 
            The time when the configuration was created.
         
     */
    CreationTime?: __timestampIso8601;
    /**
     * 
            The description of the configuration.
         
     */
    Description?: __string;
    /**
     * 
            The revision number.
         
     */
    Revision?: __long;
    /**
     * 
            Contents of the server.properties file. When using the API, you must ensure that the contents of the file are base64 encoded. 
               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of server.properties can be in plaintext.
         
     */
    ServerProperties?: __blob;
  }
  export interface EBSStorageInfo {
    /**
     * 
            The size in GiB of the EBS volume for the data drive on each broker node.
         
     */
    VolumeSize?: __integerMin1Max16384;
  }
  export interface EncryptionAtRest {
    /**
     * 
            The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.
         
     */
    DataVolumeKMSKeyId: __string;
  }
  export interface EncryptionInTransit {
    /**
     * 
            Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.
            
               TLS means that client-broker communication is enabled with TLS only.
            
               TLS_PLAINTEXT means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.
            
               PLAINTEXT means that client-broker communication is enabled in plaintext only.
            The default value is TLS_PLAINTEXT.
         
     */
    ClientBroker?: ClientBroker;
    /**
     * 
            When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.
            The default value is true.
         
     */
    InCluster?: __boolean;
  }
  export interface EncryptionInfo {
    /**
     * 
            The data-volume encryption details.
         
     */
    EncryptionAtRest?: EncryptionAtRest;
    /**
     * 
            The details for encryption in transit.
         
     */
    EncryptionInTransit?: EncryptionInTransit;
  }
  export type EnhancedMonitoring = "DEFAULT"|"PER_BROKER"|"PER_TOPIC_PER_BROKER";
  export interface ErrorInfo {
    /**
     * 
            A number describing the error programmatically.
         
     */
    ErrorCode?: __string;
    /**
     * 
            An optional field to provide more details about the error.
         
     */
    ErrorString?: __string;
  }
  export interface GetBootstrapBrokersRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
  }
  export interface GetBootstrapBrokersResponse {
    /**
     * 
            A string containing one or more hostname:port pairs.
         
     */
    BootstrapBrokerString?: __string;
    /**
     * 
            A string containing one or more DNS names (or IP) and TLS port pairs.
         
     */
    BootstrapBrokerStringTls?: __string;
  }
  export interface ListClusterOperationsRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
    /**
     * 
            The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
         
     */
    MaxResults?: MaxResults;
    /**
     * 
            The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
            To get the next batch, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListClusterOperationsResponse {
    /**
     * 
            An array of cluster operation information objects.
         
     */
    ClusterOperationInfoList?: __listOfClusterOperationInfo;
    /**
     * 
            If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.
         
     */
    NextToken?: __string;
  }
  export interface ListClustersRequest {
    /**
     * 
            Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.
         
     */
    ClusterNameFilter?: __string;
    /**
     * 
            The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
         
     */
    MaxResults?: MaxResults;
    /**
     * 
            The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
            To get the next batch, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListClustersResponse {
    /**
     * 
            Information on each of the MSK clusters in the response.
         
     */
    ClusterInfoList?: __listOfClusterInfo;
    /**
     * 
            The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. 
               To get another batch of clusters, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListConfigurationRevisionsRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
         
     */
    Arn: __string;
    /**
     * 
            The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
         
     */
    MaxResults?: MaxResults;
    /**
     * 
            The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
            To get the next batch, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListConfigurationRevisionsResponse {
    /**
     * 
            Paginated results marker.
         
     */
    NextToken?: __string;
    /**
     * 
            List of ConfigurationRevision objects.
         
     */
    Revisions?: __listOfConfigurationRevision;
  }
  export interface ListConfigurationsRequest {
    /**
     * 
            The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
         
     */
    MaxResults?: MaxResults;
    /**
     * 
            The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
            To get the next batch, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListConfigurationsResponse {
    /**
     * 
            An array of MSK configurations.
         
     */
    Configurations?: __listOfConfiguration;
    /**
     * 
            The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response. 
               To get another batch of configurations, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListNodesRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
    /**
     * 
            The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
         
     */
    MaxResults?: MaxResults;
    /**
     * 
            The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
            To get the next batch, provide this token in your next request.
         
     */
    NextToken?: __string;
  }
  export interface ListNodesResponse {
    /**
     * 
            The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response. 
               To get another batch of nodes, provide this token in your next request.
         
     */
    NextToken?: __string;
    /**
     * 
            List containing a NodeInfo object.
         
     */
    NodeInfoList?: __listOfNodeInfo;
  }
  export interface ListTagsForResourceRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.
         
     */
    ResourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    /**
     * 
            The key-value pair for the resource tag.
         
     */
    Tags?: __mapOf__string;
  }
  export type MaxResults = number;
  export interface MutableClusterInfo {
    /**
     * 
            Specifies the size of the EBS volume and the ID of the associated broker.
         
     */
    BrokerEBSVolumeInfo?: __listOfBrokerEBSVolumeInfo;
    /**
     * 
            Information about the changes in the configuration of the brokers.
         
     */
    ConfigurationInfo?: ConfigurationInfo;
    /**
     * 
            The number of broker nodes in the cluster.
         
     */
    NumberOfBrokerNodes?: __integer;
  }
  export interface NodeInfo {
    /**
     * 
            The start time.
         
     */
    AddedToClusterTime?: __string;
    /**
     * 
            The broker node info.
         
     */
    BrokerNodeInfo?: BrokerNodeInfo;
    /**
     * 
            The instance type.
         
     */
    InstanceType?: __string;
    /**
     * 
            The Amazon Resource Name (ARN) of the node.
         
     */
    NodeARN?: __string;
    /**
     * 
            The node type.
         
     */
    NodeType?: NodeType;
    /**
     * 
            The ZookeeperNodeInfo.
         
     */
    ZookeeperNodeInfo?: ZookeeperNodeInfo;
  }
  export type NodeType = "BROKER";
  export interface StorageInfo {
    /**
     * 
            EBS volume information.
         
     */
    EbsStorageInfo?: EBSStorageInfo;
  }
  export interface TagResourceRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.
         
     */
    ResourceArn: __string;
    /**
     * 
            The key-value pair for the resource tag.
         
     */
    Tags: __mapOf__string;
  }
  export interface Tls {
    /**
     * 
            List of ACM Certificate Authority ARNs.
         
     */
    CertificateAuthorityArnList?: __listOf__string;
  }
  export interface UntagResourceRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.
         
     */
    ResourceArn: __string;
    /**
     * 
            Tag keys must be unique for a given cluster. In addition, the following restrictions apply:
            
               
                  Each tag key must be unique. If you add a tag with a key that's already in
                  use, your new tag overwrites the existing key-value pair. 
               
               
                  You can't start a tag key with aws: because this prefix is reserved for use
                  by  AWS.  AWS creates tags that begin with this prefix on your behalf, but
                  you can't edit or delete them.
               
               
                  Tag keys must be between 1 and 128 Unicode characters in length.
               
               
                  Tag keys must consist of the following characters: Unicode letters, digits,
                  white space, and the following special characters: _ . / = + -
                     @.
               
            
         
     */
    TagKeys: __listOf__string;
  }
  export interface UpdateBrokerStorageRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
    /**
     * 
            The version of cluster to update from. A successful operation will then generate a new version.
         
     */
    CurrentVersion: __string;
    /**
     * 
            Describes the target volume size and the ID of the broker to apply the update to.
         
     */
    TargetBrokerEBSVolumeInfo: __listOfBrokerEBSVolumeInfo;
  }
  export interface UpdateBrokerStorageResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the cluster.
         
     */
    ClusterArn?: __string;
    /**
     * 
            The Amazon Resource Name (ARN) of the cluster operation.
         
     */
    ClusterOperationArn?: __string;
  }
  export interface UpdateClusterConfigurationRequest {
    /**
     * 
            The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         
     */
    ClusterArn: __string;
    /**
     * 
            Represents the configuration that you want MSK to use for the brokers in a cluster.
         
     */
    ConfigurationInfo: ConfigurationInfo;
    /**
     * 
            The version of the cluster that needs to be updated.
         
     */
    CurrentVersion: __string;
  }
  export interface UpdateClusterConfigurationResponse {
    /**
     * 
            The Amazon Resource Name (ARN) of the cluster.
         
     */
    ClusterArn?: __string;
    /**
     * 
            The Amazon Resource Name (ARN) of the cluster operation.
         
     */
    ClusterOperationArn?: __string;
  }
  export interface ZookeeperNodeInfo {
    /**
     * 
            The attached elastic network interface of the broker.
         
     */
    AttachedENIId?: __string;
    /**
     * 
            The virtual private cloud (VPC) IP address of the client.
         
     */
    ClientVpcIpAddress?: __string;
    /**
     * 
            Endpoints for accessing the ZooKeeper.
         
     */
    Endpoints?: __listOf__string;
    /**
     * 
            The role-specific ID for Zookeeper.
         
     */
    ZookeeperId?: __double;
    /**
     * 
            The version of Zookeeper.
         
     */
    ZookeeperVersion?: __string;
  }
  export type __boolean = boolean;
  export type __blob = Buffer|Uint8Array|Blob|string;
  export type __double = number;
  export type __integer = number;
  export type __integerMin1Max15 = number;
  export type __integerMin1Max16384 = number;
  export type __listOfBrokerEBSVolumeInfo = BrokerEBSVolumeInfo[];
  export type __listOfClusterInfo = ClusterInfo[];
  export type __listOfClusterOperationInfo = ClusterOperationInfo[];
  export type __listOfConfiguration = Configuration[];
  export type __listOfConfigurationRevision = ConfigurationRevision[];
  export type __listOfNodeInfo = NodeInfo[];
  export type __listOf__string = __string[];
  export type __long = number;
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  export type __stringMin1Max128 = string;
  export type __stringMin1Max64 = string;
  export type __stringMin5Max32 = string;
  export type __timestampIso8601 = Date;
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
   * Contains interfaces for use with the Kafka client.
   */
  export import Types = Kafka;
}
export = Kafka;
