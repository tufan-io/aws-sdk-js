import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class GroundStation extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: GroundStation.Types.ClientConfiguration)
  config: Config & GroundStation.Types.ClientConfiguration;
  /**
   * Cancels a contact with a specified contact ID.
   */
  cancelContact(params: GroundStation.Types.CancelContactRequest, callback?: (err: AWSError, data: GroundStation.Types.ContactIdResponse) => void): Request<GroundStation.Types.ContactIdResponse, AWSError>;
  /**
   * Cancels a contact with a specified contact ID.
   */
  cancelContact(callback?: (err: AWSError, data: GroundStation.Types.ContactIdResponse) => void): Request<GroundStation.Types.ContactIdResponse, AWSError>;
  /**
   * Creates a Config with the specified configData parameters.
         Only one type of configData can be specified.
   */
  createConfig(params: GroundStation.Types.CreateConfigRequest, callback?: (err: AWSError, data: GroundStation.Types.ConfigIdResponse) => void): Request<GroundStation.Types.ConfigIdResponse, AWSError>;
  /**
   * Creates a Config with the specified configData parameters.
         Only one type of configData can be specified.
   */
  createConfig(callback?: (err: AWSError, data: GroundStation.Types.ConfigIdResponse) => void): Request<GroundStation.Types.ConfigIdResponse, AWSError>;
  /**
   * Creates a DataflowEndpoint group containing the specified list of DataflowEndpoint objects.
         The name field in each endpoint is used in your mission profile DataflowEndpointConfig 
         to specify which endpoints to use during a contact. 
         When a contact uses multiple DataflowEndpointConfig objects, each Config 
         must match a DataflowEndpoint in the same group.
   */
  createDataflowEndpointGroup(params: GroundStation.Types.CreateDataflowEndpointGroupRequest, callback?: (err: AWSError, data: GroundStation.Types.DataflowEndpointGroupIdResponse) => void): Request<GroundStation.Types.DataflowEndpointGroupIdResponse, AWSError>;
  /**
   * Creates a DataflowEndpoint group containing the specified list of DataflowEndpoint objects.
         The name field in each endpoint is used in your mission profile DataflowEndpointConfig 
         to specify which endpoints to use during a contact. 
         When a contact uses multiple DataflowEndpointConfig objects, each Config 
         must match a DataflowEndpoint in the same group.
   */
  createDataflowEndpointGroup(callback?: (err: AWSError, data: GroundStation.Types.DataflowEndpointGroupIdResponse) => void): Request<GroundStation.Types.DataflowEndpointGroupIdResponse, AWSError>;
  /**
   * Creates a mission profile.
         
            dataflowEdges is a list of lists of strings. Each lower level list of strings
         has two elements: a from ARN and a to ARN.
   */
  createMissionProfile(params: GroundStation.Types.CreateMissionProfileRequest, callback?: (err: AWSError, data: GroundStation.Types.MissionProfileIdResponse) => void): Request<GroundStation.Types.MissionProfileIdResponse, AWSError>;
  /**
   * Creates a mission profile.
         
            dataflowEdges is a list of lists of strings. Each lower level list of strings
         has two elements: a from ARN and a to ARN.
   */
  createMissionProfile(callback?: (err: AWSError, data: GroundStation.Types.MissionProfileIdResponse) => void): Request<GroundStation.Types.MissionProfileIdResponse, AWSError>;
  /**
   * Deletes a Config.
   */
  deleteConfig(params: GroundStation.Types.DeleteConfigRequest, callback?: (err: AWSError, data: GroundStation.Types.ConfigIdResponse) => void): Request<GroundStation.Types.ConfigIdResponse, AWSError>;
  /**
   * Deletes a Config.
   */
  deleteConfig(callback?: (err: AWSError, data: GroundStation.Types.ConfigIdResponse) => void): Request<GroundStation.Types.ConfigIdResponse, AWSError>;
  /**
   * Deletes a dataflow endpoint group.
   */
  deleteDataflowEndpointGroup(params: GroundStation.Types.DeleteDataflowEndpointGroupRequest, callback?: (err: AWSError, data: GroundStation.Types.DataflowEndpointGroupIdResponse) => void): Request<GroundStation.Types.DataflowEndpointGroupIdResponse, AWSError>;
  /**
   * Deletes a dataflow endpoint group.
   */
  deleteDataflowEndpointGroup(callback?: (err: AWSError, data: GroundStation.Types.DataflowEndpointGroupIdResponse) => void): Request<GroundStation.Types.DataflowEndpointGroupIdResponse, AWSError>;
  /**
   * Deletes a mission profile.
   */
  deleteMissionProfile(params: GroundStation.Types.DeleteMissionProfileRequest, callback?: (err: AWSError, data: GroundStation.Types.MissionProfileIdResponse) => void): Request<GroundStation.Types.MissionProfileIdResponse, AWSError>;
  /**
   * Deletes a mission profile.
   */
  deleteMissionProfile(callback?: (err: AWSError, data: GroundStation.Types.MissionProfileIdResponse) => void): Request<GroundStation.Types.MissionProfileIdResponse, AWSError>;
  /**
   * Describes an existing contact.
   */
  describeContact(params: GroundStation.Types.DescribeContactRequest, callback?: (err: AWSError, data: GroundStation.Types.DescribeContactResponse) => void): Request<GroundStation.Types.DescribeContactResponse, AWSError>;
  /**
   * Describes an existing contact.
   */
  describeContact(callback?: (err: AWSError, data: GroundStation.Types.DescribeContactResponse) => void): Request<GroundStation.Types.DescribeContactResponse, AWSError>;
  /**
   * Returns Config information.
         Only one Config response can be returned.
   */
  getConfig(params: GroundStation.Types.GetConfigRequest, callback?: (err: AWSError, data: GroundStation.Types.GetConfigResponse) => void): Request<GroundStation.Types.GetConfigResponse, AWSError>;
  /**
   * Returns Config information.
         Only one Config response can be returned.
   */
  getConfig(callback?: (err: AWSError, data: GroundStation.Types.GetConfigResponse) => void): Request<GroundStation.Types.GetConfigResponse, AWSError>;
  /**
   * Returns the dataflow endpoint group.
   */
  getDataflowEndpointGroup(params: GroundStation.Types.GetDataflowEndpointGroupRequest, callback?: (err: AWSError, data: GroundStation.Types.GetDataflowEndpointGroupResponse) => void): Request<GroundStation.Types.GetDataflowEndpointGroupResponse, AWSError>;
  /**
   * Returns the dataflow endpoint group.
   */
  getDataflowEndpointGroup(callback?: (err: AWSError, data: GroundStation.Types.GetDataflowEndpointGroupResponse) => void): Request<GroundStation.Types.GetDataflowEndpointGroupResponse, AWSError>;
  /**
   * Returns a mission profile.
   */
  getMissionProfile(params: GroundStation.Types.GetMissionProfileRequest, callback?: (err: AWSError, data: GroundStation.Types.GetMissionProfileResponse) => void): Request<GroundStation.Types.GetMissionProfileResponse, AWSError>;
  /**
   * Returns a mission profile.
   */
  getMissionProfile(callback?: (err: AWSError, data: GroundStation.Types.GetMissionProfileResponse) => void): Request<GroundStation.Types.GetMissionProfileResponse, AWSError>;
  /**
   * Returns a list of Config objects.
   */
  listConfigs(params: GroundStation.Types.ListConfigsRequest, callback?: (err: AWSError, data: GroundStation.Types.ListConfigsResponse) => void): Request<GroundStation.Types.ListConfigsResponse, AWSError>;
  /**
   * Returns a list of Config objects.
   */
  listConfigs(callback?: (err: AWSError, data: GroundStation.Types.ListConfigsResponse) => void): Request<GroundStation.Types.ListConfigsResponse, AWSError>;
  /**
   * Returns a list of contacts.
         If statusList contains AVAILABLE, the request must include
      groundstation, missionprofileArn, and satelliteArn.
      
   */
  listContacts(params: GroundStation.Types.ListContactsRequest, callback?: (err: AWSError, data: GroundStation.Types.ListContactsResponse) => void): Request<GroundStation.Types.ListContactsResponse, AWSError>;
  /**
   * Returns a list of contacts.
         If statusList contains AVAILABLE, the request must include
      groundstation, missionprofileArn, and satelliteArn.
      
   */
  listContacts(callback?: (err: AWSError, data: GroundStation.Types.ListContactsResponse) => void): Request<GroundStation.Types.ListContactsResponse, AWSError>;
  /**
   * Returns a list of DataflowEndpoint groups.
   */
  listDataflowEndpointGroups(params: GroundStation.Types.ListDataflowEndpointGroupsRequest, callback?: (err: AWSError, data: GroundStation.Types.ListDataflowEndpointGroupsResponse) => void): Request<GroundStation.Types.ListDataflowEndpointGroupsResponse, AWSError>;
  /**
   * Returns a list of DataflowEndpoint groups.
   */
  listDataflowEndpointGroups(callback?: (err: AWSError, data: GroundStation.Types.ListDataflowEndpointGroupsResponse) => void): Request<GroundStation.Types.ListDataflowEndpointGroupsResponse, AWSError>;
  /**
   * Returns a list of mission profiles.
   */
  listMissionProfiles(params: GroundStation.Types.ListMissionProfilesRequest, callback?: (err: AWSError, data: GroundStation.Types.ListMissionProfilesResponse) => void): Request<GroundStation.Types.ListMissionProfilesResponse, AWSError>;
  /**
   * Returns a list of mission profiles.
   */
  listMissionProfiles(callback?: (err: AWSError, data: GroundStation.Types.ListMissionProfilesResponse) => void): Request<GroundStation.Types.ListMissionProfilesResponse, AWSError>;
  /**
   * Reserves a contact using specified parameters.
   */
  reserveContact(params: GroundStation.Types.ReserveContactRequest, callback?: (err: AWSError, data: GroundStation.Types.ContactIdResponse) => void): Request<GroundStation.Types.ContactIdResponse, AWSError>;
  /**
   * Reserves a contact using specified parameters.
   */
  reserveContact(callback?: (err: AWSError, data: GroundStation.Types.ContactIdResponse) => void): Request<GroundStation.Types.ContactIdResponse, AWSError>;
  /**
   * Updates the Config used when scheduling contacts.
         Updating a Config will not update the execution parameters
         for existing future contacts scheduled with this Config.
   */
  updateConfig(params: GroundStation.Types.UpdateConfigRequest, callback?: (err: AWSError, data: GroundStation.Types.ConfigIdResponse) => void): Request<GroundStation.Types.ConfigIdResponse, AWSError>;
  /**
   * Updates the Config used when scheduling contacts.
         Updating a Config will not update the execution parameters
         for existing future contacts scheduled with this Config.
   */
  updateConfig(callback?: (err: AWSError, data: GroundStation.Types.ConfigIdResponse) => void): Request<GroundStation.Types.ConfigIdResponse, AWSError>;
  /**
   * Updates a mission profile.
         Updating a mission profile will not update the execution parameters
         for existing future contacts.
   */
  updateMissionProfile(params: GroundStation.Types.UpdateMissionProfileRequest, callback?: (err: AWSError, data: GroundStation.Types.MissionProfileIdResponse) => void): Request<GroundStation.Types.MissionProfileIdResponse, AWSError>;
  /**
   * Updates a mission profile.
         Updating a mission profile will not update the execution parameters
         for existing future contacts.
   */
  updateMissionProfile(callback?: (err: AWSError, data: GroundStation.Types.MissionProfileIdResponse) => void): Request<GroundStation.Types.MissionProfileIdResponse, AWSError>;
  /**
   * Returns the number of minutes used by account.
   */
  getMinuteUsage(params: GroundStation.Types.GetMinuteUsageRequest, callback?: (err: AWSError, data: GroundStation.Types.GetMinuteUsageResponse) => void): Request<GroundStation.Types.GetMinuteUsageResponse, AWSError>;
  /**
   * Returns the number of minutes used by account.
   */
  getMinuteUsage(callback?: (err: AWSError, data: GroundStation.Types.GetMinuteUsageResponse) => void): Request<GroundStation.Types.GetMinuteUsageResponse, AWSError>;
  /**
   * Returns a satellite.
   */
  getSatellite(params: GroundStation.Types.GetSatelliteRequest, callback?: (err: AWSError, data: GroundStation.Types.GetSatelliteResponse) => void): Request<GroundStation.Types.GetSatelliteResponse, AWSError>;
  /**
   * Returns a satellite.
   */
  getSatellite(callback?: (err: AWSError, data: GroundStation.Types.GetSatelliteResponse) => void): Request<GroundStation.Types.GetSatelliteResponse, AWSError>;
  /**
   * Returns a list of ground stations. 
   */
  listGroundStations(params: GroundStation.Types.ListGroundStationsRequest, callback?: (err: AWSError, data: GroundStation.Types.ListGroundStationsResponse) => void): Request<GroundStation.Types.ListGroundStationsResponse, AWSError>;
  /**
   * Returns a list of ground stations. 
   */
  listGroundStations(callback?: (err: AWSError, data: GroundStation.Types.ListGroundStationsResponse) => void): Request<GroundStation.Types.ListGroundStationsResponse, AWSError>;
  /**
   * Returns a list of satellites.
   */
  listSatellites(params: GroundStation.Types.ListSatellitesRequest, callback?: (err: AWSError, data: GroundStation.Types.ListSatellitesResponse) => void): Request<GroundStation.Types.ListSatellitesResponse, AWSError>;
  /**
   * Returns a list of satellites.
   */
  listSatellites(callback?: (err: AWSError, data: GroundStation.Types.ListSatellitesResponse) => void): Request<GroundStation.Types.ListSatellitesResponse, AWSError>;
  /**
   * Returns a list of tags or a specified resource.
   */
  listTagsForResource(params: GroundStation.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: GroundStation.Types.ListTagsForResourceResponse) => void): Request<GroundStation.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of tags or a specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: GroundStation.Types.ListTagsForResourceResponse) => void): Request<GroundStation.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Assigns a tag to a resource.
   */
  tagResource(params: GroundStation.Types.TagResourceRequest, callback?: (err: AWSError, data: GroundStation.Types.TagResourceResponse) => void): Request<GroundStation.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns a tag to a resource.
   */
  tagResource(callback?: (err: AWSError, data: GroundStation.Types.TagResourceResponse) => void): Request<GroundStation.Types.TagResourceResponse, AWSError>;
  /**
   * Deassigns a resource tag.
   */
  untagResource(params: GroundStation.Types.UntagResourceRequest, callback?: (err: AWSError, data: GroundStation.Types.UntagResourceResponse) => void): Request<GroundStation.Types.UntagResourceResponse, AWSError>;
  /**
   * Deassigns a resource tag.
   */
  untagResource(callback?: (err: AWSError, data: GroundStation.Types.UntagResourceResponse) => void): Request<GroundStation.Types.UntagResourceResponse, AWSError>;
}
declare namespace GroundStation {
  export interface UpdateConfigRequest {
    /**
     * Parameters for a Config.
     */
    configData: ConfigTypeData;
    /**
     * UUID of a Config.
     */
    configId: String;
    /**
     * Type of a Config.
     */
    configType: ConfigCapabilityType;
    /**
     * Name of a Config.
     */
    name: SafeName;
  }
  export interface ConfigTypeData {
    /**
     * Information about how AWS Ground Station should configure an antenna for downlink during a contact.
     */
    antennaDownlinkConfig?: AntennaDownlinkConfig;
    /**
     * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
     */
    antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig;
    /**
     * Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.
     */
    antennaUplinkConfig?: AntennaUplinkConfig;
    /**
     * Information about the dataflow endpoint Config.
     */
    dataflowEndpointConfig?: DataflowEndpointConfig;
    /**
     * Object that determines whether tracking should be used during a contact executed with this Config in the mission profile. 
     */
    trackingConfig?: TrackingConfig;
    /**
     * Information about an uplink echo Config.
         Parameters from the AntennaUplinkConfig, corresponding to the specified AntennaUplinkConfigArn, are used when this UplinkEchoConfig is used in a contact.
     */
    uplinkEchoConfig?: UplinkEchoConfig;
  }
  export type noradSatelliteID = number;
  export interface GroundStationData {
    /**
     * ID of a ground station.
     */
    groundStationId?: String;
    /**
     * Name of a ground station.
     */
    groundStationName?: String;
    /**
     * Ground station Region.
     */
    region?: String;
  }
  export interface GetConfigRequest {
    /**
     * UUID of a Config.
     */
    configId: String;
    /**
     * Type of a Config.
     */
    configType: ConfigCapabilityType;
  }
  export type GroundStationList = GroundStationData[];
  export type SecurityGroupIdList = String[];
  export interface EndpointDetails {
    /**
     * A dataflow endpoint.
     */
    endpoint?: DataflowEndpoint;
    /**
     * Endpoint security details.
     */
    securityDetails?: SecurityDetails;
  }
  export type DataflowEndpointGroupArn = string;
  export interface GetMinuteUsageResponse {
    /**
     * Estimated number of minutes remaining for an account, specific to the month being requested.
     */
    estimatedMinutesRemaining?: Integer;
    /**
     * Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.
     */
    isReservedMinutesCustomer?: Boolean;
    /**
     * Total number of reserved minutes allocated, specific to the month being requested.
     */
    totalReservedMinuteAllocation?: Integer;
    /**
     * Total scheduled minutes for an account, specific to the month being requested.
     */
    totalScheduledMinutes?: Integer;
    /**
     * Upcoming minutes scheduled for an account, specific to the month being requested.
     */
    upcomingMinutesScheduled?: Integer;
  }
  export interface MissionProfileListItem {
    /**
     * ARN of a mission profile.
     */
    missionProfileArn?: MissionProfileArn;
    /**
     * ID of a mission profile.
     */
    missionProfileId?: String;
    /**
     * Name of a mission profile.
     */
    name?: String;
    /**
     * Region of a mission profile.
     */
    region?: String;
  }
  export type SatelliteList = SatelliteListItem[];
  export interface ListDataflowEndpointGroupsResponse {
    /**
     * A list of dataflow endpoint groups.
     */
    dataflowEndpointGroupList?: DataflowEndpointGroupList;
    /**
     * Next token returned in the response of a previous ListDataflowEndpointGroups call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export interface AntennaDownlinkDemodDecodeConfig {
    /**
     * Information about the decode Config.
     */
    decodeConfig: DecodeConfig;
    /**
     * Information about the demodulation Config.
     */
    demodulationConfig: DemodulationConfig;
    /**
     * Information about the spectral Config.
     */
    spectrumConfig: SpectrumConfig;
  }
  export interface MissionProfileIdResponse {
    /**
     * ID of a mission profile.
     */
    missionProfileId?: String;
  }
  export type SubnetList = String[];
  export type Polarization = "LEFT_HAND"|"NONE"|"RIGHT_HAND";
  export type ConfigList = ConfigListItem[];
  export interface AntennaUplinkConfig {
    /**
     * Information about the uplink spectral Config.
     */
    spectrumConfig: UplinkSpectrumConfig;
    /**
     * EIRP of the target.
     */
    targetEirp: Eirp;
  }
  export type Integer = number;
  export interface AntennaDownlinkConfig {
    /**
     * Object that describes a spectral Config.
     */
    spectrumConfig: SpectrumConfig;
  }
  export type Boolean = boolean;
  export type EndpointStatus = "created"|"creating"|"deleted"|"deleting"|"failed";
  export interface UplinkEchoConfig {
    /**
     * ARN of an uplink Config.
     */
    antennaUplinkConfigArn: ConfigArn;
    /**
     * Whether or not an uplink Config is enabled.
     */
    enabled: Boolean;
  }
  export interface DecodeConfig {
    /**
     * Unvalidated JSON of a decode Config.
     */
    unvalidatedJSON: JsonString;
  }
  export interface DeleteDataflowEndpointGroupRequest {
    /**
     * ID of a dataflow endpoint group.
     */
    dataflowEndpointGroupId: String;
  }
  export type ContactStatus = "AVAILABLE"|"AWS_CANCELLED"|"CANCELLED"|"COMPLETED"|"FAILED"|"FAILED_TO_SCHEDULE"|"PASS"|"POSTPASS"|"PREPASS"|"SCHEDULED"|"SCHEDULING";
  export type MissionProfileList = MissionProfileListItem[];
  export interface CreateConfigRequest {
    /**
     * Parameters of a Config.
     */
    configData: ConfigTypeData;
    /**
     * Name of a Config.
     */
    name: SafeName;
    /**
     * Tags assigned to a Config.
     */
    tags?: TagsMap;
  }
  export interface Frequency {
    /**
     * Frequency units.
     */
    units: FrequencyUnits;
    /**
     * Frequency value.
     */
    value: Double;
  }
  export interface UntagResourceResponse {
  }
  export interface ConfigIdResponse {
    /**
     * ARN of a Config.
     */
    configArn?: ConfigArn;
    /**
     * UUID of a Config.
     */
    configId?: String;
    /**
     * Type of a Config.
     */
    configType?: ConfigCapabilityType;
  }
  export interface SecurityDetails {
    /**
     * ARN to a role needed for connecting streams to your instances. 
     */
    roleArn: RoleArn;
    /**
     * The security groups to attach to the elastic network interfaces.
     */
    securityGroupIds: SecurityGroupIdList;
    /**
     * A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.
     */
    subnetIds: SubnetList;
  }
  export interface TrackingConfig {
    /**
     * Current setting for autotrack.
     */
    autotrack: Criticality;
  }
  export interface CreateDataflowEndpointGroupRequest {
    /**
     * Endpoint details of each endpoint in the dataflow endpoint group.
     */
    endpointDetails: EndpointDetailsList;
    /**
     * Tags of a dataflow endpoint group.
     */
    tags?: TagsMap;
  }
  export interface Elevation {
    /**
     * Elevation angle units.
     */
    unit: AngleUnits;
    /**
     * Elevation angle value.
     */
    value: Double;
  }
  export type JsonString = string;
  export interface GetSatelliteRequest {
    /**
     * UUID of a satellite.
     */
    satelliteId: String;
  }
  export interface CancelContactRequest {
    /**
     * UUID of a contact.
     */
    contactId: String;
  }
  export interface UplinkSpectrumConfig {
    /**
     * Center frequency of an uplink spectral Config.
     */
    centerFrequency: Frequency;
    /**
     * Polarization of an uplink spectral Config.
     */
    polarization?: Polarization;
  }
  export interface UntagResourceRequest {
    /**
     * ARN of a resource.
     */
    resourceArn: String;
    /**
     * Keys of a resource tag.
     */
    tagKeys: TagKeys;
  }
  export type satelliteArn = string;
  export interface GetMissionProfileResponse {
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    contactPostPassDurationSeconds?: DurationInSeconds;
    /**
     * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
     */
    contactPrePassDurationSeconds?: DurationInSeconds;
    /**
     * A list of lists of ARNs. Each list of ARNs is an edge, with a from Config and a to 
         Config.
     */
    dataflowEdges?: DataflowEdgeList;
    /**
     * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
     */
    minimumViableContactDurationSeconds?: DurationInSeconds;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn?: MissionProfileArn;
    /**
     * ID of a mission profile.
     */
    missionProfileId?: String;
    /**
     * Name of a mission profile.
     */
    name?: String;
    /**
     * Region of a mission profile.
     */
    region?: String;
    /**
     * Tags assigned to a mission profile.
     */
    tags?: TagsMap;
    /**
     * ARN of a tracking Config.
     */
    trackingConfigArn?: ConfigArn;
  }
  export interface ContactIdResponse {
    /**
     * UUID of a contact.
     */
    contactId?: String;
  }
  export type EndpointDetailsList = EndpointDetails[];
  export interface ListGroundStationsRequest {
    /**
     * Maximum number of ground stations returned.
     */
    maxResults?: Integer;
    /**
     * Next token that can be supplied in the next call to get the next page of ground stations.
     */
    nextToken?: String;
  }
  export interface DescribeContactRequest {
    /**
     * UUID of a contact.
     */
    contactId: String;
  }
  export type Timestamp = Date;
  export interface DeleteConfigRequest {
    /**
     * UUID of a Config.
     */
    configId: String;
    /**
     * Type of a Config.
     */
    configType: ConfigCapabilityType;
  }
  export type BandwidthUnits = "GHz"|"MHz"|"kHz";
  export interface SpectrumConfig {
    /**
     * Bandwidth of a spectral Config.
     */
    bandwidth: FrequencyBandwidth;
    /**
     * Center frequency of a spectral Config.
     */
    centerFrequency: Frequency;
    /**
     * Polarization of a spectral Config.
     */
    polarization?: Polarization;
  }
  export interface DemodulationConfig {
    /**
     * Unvalidated JSON of a demodulation Config.
     */
    unvalidatedJSON: JsonString;
  }
  export interface ListMissionProfilesResponse {
    /**
     * List of mission profiles
     */
    missionProfileList?: MissionProfileList;
    /**
     * Next token returned in the response of a previous ListMissionProfiles call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export interface ListConfigsResponse {
    /**
     * List of Config items.
     */
    configList?: ConfigList;
    /**
     * Next token returned in the response of a previous ListConfigs call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export type DataflowEdge = ConfigArn[];
  export type SafeName = string;
  export interface Eirp {
    /**
     * Units of an EIRP.
     */
    units: EirpUnits;
    /**
     * Value of an EIRP.
     */
    value: Double;
  }
  export type RoleArn = string;
  export interface ListMissionProfilesRequest {
    /**
     * Maximum number of mission profiles returned.
     */
    maxResults?: Integer;
    /**
     * Next token returned in the request of a previous ListMissionProfiles call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export interface GetSatelliteResponse {
    /**
     * When a satellite was created.
     */
    dateCreated?: Timestamp;
    /**
     * When a satellite was last updated.
     */
    lastUpdated?: Timestamp;
    /**
     * NORAD satellite ID number.
     */
    noradSatelliteID?: noradSatelliteID;
    /**
     * ARN of a satellite.
     */
    satelliteArn?: satelliteArn;
    /**
     * UUID of a satellite.
     */
    satelliteId?: Uuid;
    /**
     * Tags assigned to a satellite.
     */
    tags?: TagsMap;
  }
  export type StatusList = ContactStatus[];
  export interface ListContactsRequest {
    /**
     * End time of a contact.
     */
    endTime: Timestamp;
    /**
     * Name of a ground station.
     */
    groundStation?: String;
    /**
     * Maximum number of contacts returned.
     */
    maxResults?: Integer;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn?: MissionProfileArn;
    /**
     * Next token returned in the request of a previous ListContacts call. Used to get the next page of results.
     */
    nextToken?: String;
    /**
     * ARN of a satellite.
     */
    satelliteArn?: satelliteArn;
    /**
     * Start time of a contact.
     */
    startTime: Timestamp;
    /**
     * Status of a contact reservation.
     */
    statusList: StatusList;
  }
  export interface ContactData {
    /**
     * UUID of a contact.
     */
    contactId?: String;
    /**
     * Status of a contact.
     */
    contactStatus?: ContactStatus;
    /**
     * End time of a contact.
     */
    endTime?: Timestamp;
    /**
     * Error message of a contact.
     */
    errorMessage?: String;
    /**
     * Name of a ground station.
     */
    groundStation?: String;
    /**
     * Maximum elevation angle of a contact.
     */
    maximumElevation?: Elevation;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn?: MissionProfileArn;
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    postPassEndTime?: Timestamp;
    /**
     * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
     */
    prePassStartTime?: Timestamp;
    /**
     * ARN of a satellite.
     */
    satelliteArn?: satelliteArn;
    /**
     * Start time of a contact.
     */
    startTime?: Timestamp;
    /**
     * Tags assigned to a contact.
     */
    tags?: TagsMap;
  }
  export interface ListGroundStationsResponse {
    /**
     * List of ground stations.
     */
    groundStationList?: GroundStationList;
    /**
     * Next token that can be supplied in the next call to get the next page of ground stations.
     */
    nextToken?: String;
  }
  export interface DataflowEndpoint {
    /**
     * Socket address of a dataflow endpoint.
     */
    address?: SocketAddress;
    /**
     * Name of a dataflow endpoint.
     */
    name?: SafeName;
    /**
     * Status of a dataflow endpoint.
     */
    status?: EndpointStatus;
  }
  export interface ListConfigsRequest {
    /**
     * Maximum number of Configs returned.
     */
    maxResults?: Integer;
    /**
     * Next token returned in the request of a previous ListConfigs call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export interface SocketAddress {
    /**
     * Name of a socket address.
     */
    name: String;
    /**
     * Port of a socket address.
     */
    port: Integer;
  }
  export interface GetConfigResponse {
    /**
     * ARN of a Config
         
     */
    configArn: ConfigArn;
    /**
     * Data elements in a Config.
     */
    configData: ConfigTypeData;
    /**
     * UUID of a Config.
     */
    configId: String;
    /**
     * Type of a Config.
     */
    configType?: ConfigCapabilityType;
    /**
     * Name of a Config.
     */
    name: String;
    /**
     * Tags assigned to a Config.
     */
    tags?: TagsMap;
  }
  export type TagsMap = {[key: string]: String};
  export interface TagResourceResponse {
  }
  export interface DeleteMissionProfileRequest {
    /**
     * UUID of a mission profile.
     */
    missionProfileId: String;
  }
  export type DataflowEndpointGroupList = DataflowEndpointListItem[];
  export type ContactList = ContactData[];
  export type DurationInSeconds = number;
  export interface SatelliteListItem {
    /**
     * NORAD satellite ID number.
     */
    noradSatelliteID?: noradSatelliteID;
    /**
     * ARN of a satellite.
     */
    satelliteArn?: satelliteArn;
    /**
     * ID of a satellite.
     */
    satelliteId?: Uuid;
  }
  export interface GetMissionProfileRequest {
    /**
     * UUID of a mission profile.
     */
    missionProfileId: String;
  }
  export type Double = number;
  export interface ListSatellitesResponse {
    /**
     * Next token that can be supplied in the next call to get the next page of satellites.
     */
    nextToken?: String;
    /**
     * List of satellites.
     */
    satellites?: SatelliteList;
  }
  export interface CreateMissionProfileRequest {
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    contactPostPassDurationSeconds?: DurationInSeconds;
    /**
     * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
     */
    contactPrePassDurationSeconds?: DurationInSeconds;
    /**
     * A list of lists of ARNs. Each list of ARNs is an edge, with a from Config and a to 
         Config.
     */
    dataflowEdges: DataflowEdgeList;
    /**
     * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
     */
    minimumViableContactDurationSeconds: DurationInSeconds;
    /**
     * Name of a mission profile.
     */
    name: SafeName;
    /**
     * Tags assigned to a mission profile.
     */
    tags?: TagsMap;
    /**
     * ARN of a tracking Config.
     */
    trackingConfigArn: ConfigArn;
  }
  export interface ReserveContactRequest {
    /**
     * End time of a contact.
     */
    endTime: Timestamp;
    /**
     * Name of a ground station.
     */
    groundStation: String;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn: MissionProfileArn;
    /**
     * ARN of a satellite
     */
    satelliteArn: satelliteArn;
    /**
     * Start time of a contact.
     */
    startTime: Timestamp;
    /**
     * Tags assigned to a contact.
     */
    tags?: TagsMap;
  }
  export interface DataflowEndpointConfig {
    /**
     * Name of a dataflow endpoint.
     */
    dataflowEndpointName: String;
  }
  export type Uuid = string;
  export interface ListTagsForResourceResponse {
    /**
     * Tags assigned to a resource.
     */
    tags?: TagsMap;
  }
  export type MissionProfileArn = string;
  export interface ListContactsResponse {
    /**
     * List of contacts.
     */
    contactList?: ContactList;
    /**
     * Next token returned in the response of a previous ListContacts call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export type DataflowEdgeList = DataflowEdge[];
  export interface DescribeContactResponse {
    /**
     * UUID of a contact.
     */
    contactId?: String;
    /**
     * Status of a contact.
     */
    contactStatus?: ContactStatus;
    /**
     * End time of a contact.
     */
    endTime?: Timestamp;
    /**
     * Error message for a contact.
     */
    errorMessage?: String;
    /**
     * Ground station for a contact.
     */
    groundStation?: String;
    /**
     * Maximum elevation angle of a contact.
     */
    maximumElevation?: Elevation;
    /**
     * ARN of a mission profile.
     */
    missionProfileArn?: MissionProfileArn;
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    postPassEndTime?: Timestamp;
    /**
     * Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
     */
    prePassStartTime?: Timestamp;
    /**
     * ARN of a satellite.
     */
    satelliteArn?: satelliteArn;
    /**
     * Start time of a contact.
     */
    startTime?: Timestamp;
    /**
     * Tags assigned to a contact.
     */
    tags?: TagsMap;
  }
  export interface ConfigListItem {
    /**
     * ARN of a Config.
     */
    configArn?: ConfigArn;
    /**
     * UUID of a Config.
     */
    configId?: String;
    /**
     * Type of a Config.
     */
    configType?: ConfigCapabilityType;
    /**
     * Name of a Config.
     */
    name?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * ARN of a resource.
     */
    resourceArn: String;
  }
  export interface ListDataflowEndpointGroupsRequest {
    /**
     * Maximum number of dataflow endpoint groups returned.
     */
    maxResults?: Integer;
    /**
     * Next token returned in the request of a previous ListDataflowEndpointGroups call. Used to get the next page of results.
     */
    nextToken?: String;
  }
  export interface FrequencyBandwidth {
    /**
     * Frequency bandwidth units.
     */
    units: BandwidthUnits;
    /**
     * Frequency bandwidth value.
     */
    value: Double;
  }
  export type String = string;
  export interface ListSatellitesRequest {
    /**
     * Maximum number of satellites returned.
     */
    maxResults?: Integer;
    /**
     * Next token that can be supplied in the next call to get the next page of satellites.
     */
    nextToken?: String;
  }
  export interface UpdateMissionProfileRequest {
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    contactPostPassDurationSeconds?: DurationInSeconds;
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    contactPrePassDurationSeconds?: DurationInSeconds;
    /**
     * A list of lists of ARNs. Each list of ARNs is an edge, with a from Config and a to 
         Config.
     */
    dataflowEdges?: DataflowEdgeList;
    /**
     * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
     */
    minimumViableContactDurationSeconds?: DurationInSeconds;
    /**
     * ID of a mission profile.
     */
    missionProfileId: String;
    /**
     * Name of a mission profile.
     */
    name?: SafeName;
    /**
     * ARN of a tracking Config.
     */
    trackingConfigArn?: ConfigArn;
  }
  export type FrequencyUnits = "GHz"|"MHz"|"kHz";
  export interface TagResourceRequest {
    /**
     * ARN of a resource tag.
     */
    resourceArn: String;
    /**
     * Tags assigned to a resource.
     */
    tags?: TagsMap;
  }
  export type Criticality = "PREFERRED"|"REMOVED"|"REQUIRED";
  export type ConfigCapabilityType = "antenna-downlink"|"antenna-downlink-demod-decode"|"antenna-uplink"|"dataflow-endpoint"|"tracking"|"uplink-echo";
  export type TagKeys = String[];
  export type AngleUnits = "DEGREE_ANGLE"|"RADIAN";
  export interface DataflowEndpointListItem {
    /**
     * ARN of a dataflow endpoint group.
     */
    dataflowEndpointGroupArn?: DataflowEndpointGroupArn;
    /**
     * UUID of a dataflow endpoint group.
     */
    dataflowEndpointGroupId?: String;
  }
  export interface GetDataflowEndpointGroupResponse {
    /**
     * ARN of a dataflow endpoint group.
     */
    dataflowEndpointGroupArn?: DataflowEndpointGroupArn;
    /**
     * UUID of a dataflow endpoint group.
     */
    dataflowEndpointGroupId?: String;
    /**
     * Details of a dataflow endpoint.
     */
    endpointsDetails?: EndpointDetailsList;
    /**
     * Tags assigned to a dataflow endpoint group.
     */
    tags?: TagsMap;
  }
  export interface GetDataflowEndpointGroupRequest {
    /**
     * UUID of a dataflow endpoint group.
     */
    dataflowEndpointGroupId: String;
  }
  export type ConfigArn = string;
  export interface GetMinuteUsageRequest {
    /**
     * The month being requested, with a value of 1-12.
     */
    month: Integer;
    /**
     * The year being requested, in the format of YYYY.
     */
    year: Integer;
  }
  export interface DataflowEndpointGroupIdResponse {
    /**
     * ID of a dataflow endpoint group.
     */
    dataflowEndpointGroupId?: String;
  }
  export type EirpUnits = "dBW";
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-05-23"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the GroundStation client.
   */
  export import Types = GroundStation;
}
export = GroundStation;
