import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class StorageGateway extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: StorageGateway.Types.ClientConfiguration)
  config: Config & StorageGateway.Types.ClientConfiguration;
  /**
   * Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the region you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account; for more information, see UpdateGatewayInformation.  You must turn on the gateway VM before you can activate your gateway. 
   */
  activateGateway(params: StorageGateway.Types.ActivateGatewayInput, callback?: (err: AWSError, data: StorageGateway.Types.ActivateGatewayOutput) => void): Request<StorageGateway.Types.ActivateGatewayOutput, AWSError>;
  /**
   * Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the region you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account; for more information, see UpdateGatewayInformation.  You must turn on the gateway VM before you can activate your gateway. 
   */
  activateGateway(callback?: (err: AWSError, data: StorageGateway.Types.ActivateGatewayOutput) => void): Request<StorageGateway.Types.ActivateGatewayOutput, AWSError>;
  /**
   * Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape and file gateway type (see Storage Gateway Concepts). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.
   */
  addCache(params: StorageGateway.Types.AddCacheInput, callback?: (err: AWSError, data: StorageGateway.Types.AddCacheOutput) => void): Request<StorageGateway.Types.AddCacheOutput, AWSError>;
  /**
   * Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape and file gateway type (see Storage Gateway Concepts). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.
   */
  addCache(callback?: (err: AWSError, data: StorageGateway.Types.AddCacheOutput) => void): Request<StorageGateway.Types.AddCacheOutput, AWSError>;
  /**
   * Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following AWS Storage Gateway resources:   Storage gateways of all types   Storage volumes   Virtual tapes   NFS and SMB file shares   You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.
   */
  addTagsToResource(params: StorageGateway.Types.AddTagsToResourceInput, callback?: (err: AWSError, data: StorageGateway.Types.AddTagsToResourceOutput) => void): Request<StorageGateway.Types.AddTagsToResourceOutput, AWSError>;
  /**
   * Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following AWS Storage Gateway resources:   Storage gateways of all types   Storage volumes   Virtual tapes   NFS and SMB file shares   You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.
   */
  addTagsToResource(callback?: (err: AWSError, data: StorageGateway.Types.AddTagsToResourceOutput) => void): Request<StorageGateway.Types.AddTagsToResourceOutput, AWSError>;
  /**
   * Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.
   */
  addUploadBuffer(params: StorageGateway.Types.AddUploadBufferInput, callback?: (err: AWSError, data: StorageGateway.Types.AddUploadBufferOutput) => void): Request<StorageGateway.Types.AddUploadBufferOutput, AWSError>;
  /**
   * Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.
   */
  addUploadBuffer(callback?: (err: AWSError, data: StorageGateway.Types.AddUploadBufferOutput) => void): Request<StorageGateway.Types.AddUploadBufferOutput, AWSError>;
  /**
   * Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use AddUploadBuffer instead.  Working storage is also referred to as upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored volume gateway.  In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.
   */
  addWorkingStorage(params: StorageGateway.Types.AddWorkingStorageInput, callback?: (err: AWSError, data: StorageGateway.Types.AddWorkingStorageOutput) => void): Request<StorageGateway.Types.AddWorkingStorageOutput, AWSError>;
  /**
   * Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use AddUploadBuffer instead.  Working storage is also referred to as upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored volume gateway.  In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.
   */
  addWorkingStorage(callback?: (err: AWSError, data: StorageGateway.Types.AddWorkingStorageOutput) => void): Request<StorageGateway.Types.AddWorkingStorageOutput, AWSError>;
  /**
   * Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
   */
  assignTapePool(params: StorageGateway.Types.AssignTapePoolInput, callback?: (err: AWSError, data: StorageGateway.Types.AssignTapePoolOutput) => void): Request<StorageGateway.Types.AssignTapePoolOutput, AWSError>;
  /**
   * Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
   */
  assignTapePool(callback?: (err: AWSError, data: StorageGateway.Types.AssignTapePoolOutput) => void): Request<StorageGateway.Types.AssignTapePoolOutput, AWSError>;
  /**
   * Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
   */
  attachVolume(params: StorageGateway.Types.AttachVolumeInput, callback?: (err: AWSError, data: StorageGateway.Types.AttachVolumeOutput) => void): Request<StorageGateway.Types.AttachVolumeOutput, AWSError>;
  /**
   * Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
   */
  attachVolume(callback?: (err: AWSError, data: StorageGateway.Types.AttachVolumeOutput) => void): Request<StorageGateway.Types.AttachVolumeOutput, AWSError>;
  /**
   * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.
   */
  cancelArchival(params: StorageGateway.Types.CancelArchivalInput, callback?: (err: AWSError, data: StorageGateway.Types.CancelArchivalOutput) => void): Request<StorageGateway.Types.CancelArchivalOutput, AWSError>;
  /**
   * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.
   */
  cancelArchival(callback?: (err: AWSError, data: StorageGateway.Types.CancelArchivalOutput) => void): Request<StorageGateway.Types.CancelArchivalOutput, AWSError>;
  /**
   * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.
   */
  cancelRetrieval(params: StorageGateway.Types.CancelRetrievalInput, callback?: (err: AWSError, data: StorageGateway.Types.CancelRetrievalOutput) => void): Request<StorageGateway.Types.CancelRetrievalOutput, AWSError>;
  /**
   * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.
   */
  cancelRetrieval(callback?: (err: AWSError, data: StorageGateway.Types.CancelRetrievalOutput) => void): Request<StorageGateway.Types.CancelRetrievalOutput, AWSError>;
  /**
   * Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.  Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway.   In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.
   */
  createCachediSCSIVolume(params: StorageGateway.Types.CreateCachediSCSIVolumeInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateCachediSCSIVolumeOutput) => void): Request<StorageGateway.Types.CreateCachediSCSIVolumeOutput, AWSError>;
  /**
   * Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.  Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway.   In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.
   */
  createCachediSCSIVolume(callback?: (err: AWSError, data: StorageGateway.Types.CreateCachediSCSIVolumeOutput) => void): Request<StorageGateway.Types.CreateCachediSCSIVolumeOutput, AWSError>;
  /**
   * Creates a Network File System (NFS) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using a NFS interface. This operation is only supported for file gateways.  File gateway requires AWS Security Token Service (AWS STS) to be activated to enable you create a file share. Make sure AWS STS is activated in the region you are creating your file gateway in. If AWS STS is not activated in the region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  File gateway does not support creating hard or symbolic links on a file share. 
   */
  createNFSFileShare(params: StorageGateway.Types.CreateNFSFileShareInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateNFSFileShareOutput) => void): Request<StorageGateway.Types.CreateNFSFileShareOutput, AWSError>;
  /**
   * Creates a Network File System (NFS) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using a NFS interface. This operation is only supported for file gateways.  File gateway requires AWS Security Token Service (AWS STS) to be activated to enable you create a file share. Make sure AWS STS is activated in the region you are creating your file gateway in. If AWS STS is not activated in the region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  File gateway does not support creating hard or symbolic links on a file share. 
   */
  createNFSFileShare(callback?: (err: AWSError, data: StorageGateway.Types.CreateNFSFileShareOutput) => void): Request<StorageGateway.Types.CreateNFSFileShareOutput, AWSError>;
  /**
   * Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway expose file shares using a SMB interface. This operation is only supported for file gateways.  File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  File gateways don't support creating hard or symbolic links on a file share. 
   */
  createSMBFileShare(params: StorageGateway.Types.CreateSMBFileShareInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateSMBFileShareOutput) => void): Request<StorageGateway.Types.CreateSMBFileShareOutput, AWSError>;
  /**
   * Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway expose file shares using a SMB interface. This operation is only supported for file gateways.  File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  File gateways don't support creating hard or symbolic links on a file share. 
   */
  createSMBFileShare(callback?: (err: AWSError, data: StorageGateway.Types.CreateSMBFileShareOutput) => void): Request<StorageGateway.Types.CreateSMBFileShareOutput, AWSError>;
  /**
   * Initiates a snapshot of a volume. AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (S3) for durable off-site recovery, as well as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take ad-hoc snapshot. For more information, see Editing a Snapshot Schedule. In the CreateSnapshot request you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.  To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the EC2 API reference.   Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the Welcome page. 
   */
  createSnapshot(params: StorageGateway.Types.CreateSnapshotInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateSnapshotOutput) => void): Request<StorageGateway.Types.CreateSnapshotOutput, AWSError>;
  /**
   * Initiates a snapshot of a volume. AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (S3) for durable off-site recovery, as well as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take ad-hoc snapshot. For more information, see Editing a Snapshot Schedule. In the CreateSnapshot request you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.  To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the EC2 API reference.   Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the Welcome page. 
   */
  createSnapshot(callback?: (err: AWSError, data: StorageGateway.Types.CreateSnapshotOutput) => void): Request<StorageGateway.Types.CreateSnapshotOutput, AWSError>;
  /**
   * Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the AWS Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.  To list or delete a snapshot, you must use the Amazon EC2 API. For more information, in Amazon Elastic Compute Cloud API Reference. 
   */
  createSnapshotFromVolumeRecoveryPoint(params: StorageGateway.Types.CreateSnapshotFromVolumeRecoveryPointInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateSnapshotFromVolumeRecoveryPointOutput) => void): Request<StorageGateway.Types.CreateSnapshotFromVolumeRecoveryPointOutput, AWSError>;
  /**
   * Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the AWS Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.  To list or delete a snapshot, you must use the Amazon EC2 API. For more information, in Amazon Elastic Compute Cloud API Reference. 
   */
  createSnapshotFromVolumeRecoveryPoint(callback?: (err: AWSError, data: StorageGateway.Types.CreateSnapshotFromVolumeRecoveryPointOutput) => void): Request<StorageGateway.Types.CreateSnapshotFromVolumeRecoveryPointOutput, AWSError>;
  /**
   * Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.
   */
  createStorediSCSIVolume(params: StorageGateway.Types.CreateStorediSCSIVolumeInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateStorediSCSIVolumeOutput) => void): Request<StorageGateway.Types.CreateStorediSCSIVolumeOutput, AWSError>;
  /**
   * Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.
   */
  createStorediSCSIVolume(callback?: (err: AWSError, data: StorageGateway.Types.CreateStorediSCSIVolumeOutput) => void): Request<StorageGateway.Types.CreateStorediSCSIVolumeOutput, AWSError>;
  /**
   * Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and can not be reused if it has already been used on a tape . This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.  Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway. 
   */
  createTapeWithBarcode(params: StorageGateway.Types.CreateTapeWithBarcodeInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateTapeWithBarcodeOutput) => void): Request<StorageGateway.Types.CreateTapeWithBarcodeOutput, AWSError>;
  /**
   * Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and can not be reused if it has already been used on a tape . This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.  Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway. 
   */
  createTapeWithBarcode(callback?: (err: AWSError, data: StorageGateway.Types.CreateTapeWithBarcodeOutput) => void): Request<StorageGateway.Types.CreateTapeWithBarcodeOutput, AWSError>;
  /**
   * Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.  Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.  
   */
  createTapes(params: StorageGateway.Types.CreateTapesInput, callback?: (err: AWSError, data: StorageGateway.Types.CreateTapesOutput) => void): Request<StorageGateway.Types.CreateTapesOutput, AWSError>;
  /**
   * Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.  Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.  
   */
  createTapes(callback?: (err: AWSError, data: StorageGateway.Types.CreateTapesOutput) => void): Request<StorageGateway.Types.CreateTapesOutput, AWSError>;
  /**
   * Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  deleteBandwidthRateLimit(params: StorageGateway.Types.DeleteBandwidthRateLimitInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteBandwidthRateLimitOutput) => void): Request<StorageGateway.Types.DeleteBandwidthRateLimitOutput, AWSError>;
  /**
   * Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  deleteBandwidthRateLimit(callback?: (err: AWSError, data: StorageGateway.Types.DeleteBandwidthRateLimitOutput) => void): Request<StorageGateway.Types.DeleteBandwidthRateLimitOutput, AWSError>;
  /**
   * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.
   */
  deleteChapCredentials(params: StorageGateway.Types.DeleteChapCredentialsInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteChapCredentialsOutput) => void): Request<StorageGateway.Types.DeleteChapCredentialsOutput, AWSError>;
  /**
   * Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.
   */
  deleteChapCredentials(callback?: (err: AWSError, data: StorageGateway.Types.DeleteChapCredentialsOutput) => void): Request<StorageGateway.Types.DeleteChapCredentialsOutput, AWSError>;
  /**
   * Deletes a file share from a file gateway. This operation is only supported for file gateways.
   */
  deleteFileShare(params: StorageGateway.Types.DeleteFileShareInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteFileShareOutput) => void): Request<StorageGateway.Types.DeleteFileShareOutput, AWSError>;
  /**
   * Deletes a file share from a file gateway. This operation is only supported for file gateways.
   */
  deleteFileShare(callback?: (err: AWSError, data: StorageGateway.Types.DeleteFileShareOutput) => void): Request<StorageGateway.Types.DeleteFileShareOutput, AWSError>;
  /**
   * Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.  You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the  AWS Storage Gateway Detail Page.  
   */
  deleteGateway(params: StorageGateway.Types.DeleteGatewayInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteGatewayOutput) => void): Request<StorageGateway.Types.DeleteGatewayOutput, AWSError>;
  /**
   * Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.  You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the  AWS Storage Gateway Detail Page.  
   */
  deleteGateway(callback?: (err: AWSError, data: StorageGateway.Types.DeleteGatewayOutput) => void): Request<StorageGateway.Types.DeleteGatewayOutput, AWSError>;
  /**
   * Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Working with Snapshots. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported in stored and cached volume gateway types.  To list or delete a snapshot, you must use the Amazon EC2 API. in Amazon Elastic Compute Cloud API Reference. 
   */
  deleteSnapshotSchedule(params: StorageGateway.Types.DeleteSnapshotScheduleInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteSnapshotScheduleOutput) => void): Request<StorageGateway.Types.DeleteSnapshotScheduleOutput, AWSError>;
  /**
   * Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Working with Snapshots. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported in stored and cached volume gateway types.  To list or delete a snapshot, you must use the Amazon EC2 API. in Amazon Elastic Compute Cloud API Reference. 
   */
  deleteSnapshotSchedule(callback?: (err: AWSError, data: StorageGateway.Types.DeleteSnapshotScheduleOutput) => void): Request<StorageGateway.Types.DeleteSnapshotScheduleOutput, AWSError>;
  /**
   * Deletes the specified virtual tape. This operation is only supported in the tape gateway type.
   */
  deleteTape(params: StorageGateway.Types.DeleteTapeInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteTapeOutput) => void): Request<StorageGateway.Types.DeleteTapeOutput, AWSError>;
  /**
   * Deletes the specified virtual tape. This operation is only supported in the tape gateway type.
   */
  deleteTape(callback?: (err: AWSError, data: StorageGateway.Types.DeleteTapeOutput) => void): Request<StorageGateway.Types.DeleteTapeOutput, AWSError>;
  /**
   * Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.
   */
  deleteTapeArchive(params: StorageGateway.Types.DeleteTapeArchiveInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteTapeArchiveOutput) => void): Request<StorageGateway.Types.DeleteTapeArchiveOutput, AWSError>;
  /**
   * Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.
   */
  deleteTapeArchive(callback?: (err: AWSError, data: StorageGateway.Types.DeleteTapeArchiveOutput) => void): Request<StorageGateway.Types.DeleteTapeArchiveOutput, AWSError>;
  /**
   * Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume.  Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.
   */
  deleteVolume(params: StorageGateway.Types.DeleteVolumeInput, callback?: (err: AWSError, data: StorageGateway.Types.DeleteVolumeOutput) => void): Request<StorageGateway.Types.DeleteVolumeOutput, AWSError>;
  /**
   * Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume.  Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.
   */
  deleteVolume(callback?: (err: AWSError, data: StorageGateway.Types.DeleteVolumeOutput) => void): Request<StorageGateway.Types.DeleteVolumeOutput, AWSError>;
  /**
   * Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation only returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  describeBandwidthRateLimit(params: StorageGateway.Types.DescribeBandwidthRateLimitInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeBandwidthRateLimitOutput) => void): Request<StorageGateway.Types.DescribeBandwidthRateLimitOutput, AWSError>;
  /**
   * Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation only returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  describeBandwidthRateLimit(callback?: (err: AWSError, data: StorageGateway.Types.DescribeBandwidthRateLimitOutput) => void): Request<StorageGateway.Types.DescribeBandwidthRateLimitOutput, AWSError>;
  /**
   * Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.
   */
  describeCache(params: StorageGateway.Types.DescribeCacheInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeCacheOutput) => void): Request<StorageGateway.Types.DescribeCacheOutput, AWSError>;
  /**
   * Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.
   */
  describeCache(callback?: (err: AWSError, data: StorageGateway.Types.DescribeCacheOutput) => void): Request<StorageGateway.Types.DescribeCacheOutput, AWSError>;
  /**
   * Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).
   */
  describeCachediSCSIVolumes(params: StorageGateway.Types.DescribeCachediSCSIVolumesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeCachediSCSIVolumesOutput) => void): Request<StorageGateway.Types.DescribeCachediSCSIVolumesOutput, AWSError>;
  /**
   * Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).
   */
  describeCachediSCSIVolumes(callback?: (err: AWSError, data: StorageGateway.Types.DescribeCachediSCSIVolumesOutput) => void): Request<StorageGateway.Types.DescribeCachediSCSIVolumesOutput, AWSError>;
  /**
   * Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.
   */
  describeChapCredentials(params: StorageGateway.Types.DescribeChapCredentialsInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeChapCredentialsOutput) => void): Request<StorageGateway.Types.DescribeChapCredentialsOutput, AWSError>;
  /**
   * Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.
   */
  describeChapCredentials(callback?: (err: AWSError, data: StorageGateway.Types.DescribeChapCredentialsOutput) => void): Request<StorageGateway.Types.DescribeChapCredentialsOutput, AWSError>;
  /**
   * Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  describeGatewayInformation(params: StorageGateway.Types.DescribeGatewayInformationInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeGatewayInformationOutput) => void): Request<StorageGateway.Types.DescribeGatewayInformationOutput, AWSError>;
  /**
   * Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  describeGatewayInformation(callback?: (err: AWSError, data: StorageGateway.Types.DescribeGatewayInformationOutput) => void): Request<StorageGateway.Types.DescribeGatewayInformationOutput, AWSError>;
  /**
   * Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.
   */
  describeMaintenanceStartTime(params: StorageGateway.Types.DescribeMaintenanceStartTimeInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeMaintenanceStartTimeOutput) => void): Request<StorageGateway.Types.DescribeMaintenanceStartTimeOutput, AWSError>;
  /**
   * Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.
   */
  describeMaintenanceStartTime(callback?: (err: AWSError, data: StorageGateway.Types.DescribeMaintenanceStartTimeOutput) => void): Request<StorageGateway.Types.DescribeMaintenanceStartTimeOutput, AWSError>;
  /**
   * Gets a description for one or more Network File System (NFS) file shares from a file gateway. This operation is only supported for file gateways.
   */
  describeNFSFileShares(params: StorageGateway.Types.DescribeNFSFileSharesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeNFSFileSharesOutput) => void): Request<StorageGateway.Types.DescribeNFSFileSharesOutput, AWSError>;
  /**
   * Gets a description for one or more Network File System (NFS) file shares from a file gateway. This operation is only supported for file gateways.
   */
  describeNFSFileShares(callback?: (err: AWSError, data: StorageGateway.Types.DescribeNFSFileSharesOutput) => void): Request<StorageGateway.Types.DescribeNFSFileSharesOutput, AWSError>;
  /**
   * Gets a description for one or more Server Message Block (SMB) file shares from a file gateway. This operation is only supported for file gateways.
   */
  describeSMBFileShares(params: StorageGateway.Types.DescribeSMBFileSharesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeSMBFileSharesOutput) => void): Request<StorageGateway.Types.DescribeSMBFileSharesOutput, AWSError>;
  /**
   * Gets a description for one or more Server Message Block (SMB) file shares from a file gateway. This operation is only supported for file gateways.
   */
  describeSMBFileShares(callback?: (err: AWSError, data: StorageGateway.Types.DescribeSMBFileSharesOutput) => void): Request<StorageGateway.Types.DescribeSMBFileSharesOutput, AWSError>;
  /**
   * Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.
   */
  describeSMBSettings(params: StorageGateway.Types.DescribeSMBSettingsInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeSMBSettingsOutput) => void): Request<StorageGateway.Types.DescribeSMBSettingsOutput, AWSError>;
  /**
   * Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.
   */
  describeSMBSettings(callback?: (err: AWSError, data: StorageGateway.Types.DescribeSMBSettingsOutput) => void): Request<StorageGateway.Types.DescribeSMBSettingsOutput, AWSError>;
  /**
   * Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.
   */
  describeSnapshotSchedule(params: StorageGateway.Types.DescribeSnapshotScheduleInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeSnapshotScheduleOutput) => void): Request<StorageGateway.Types.DescribeSnapshotScheduleOutput, AWSError>;
  /**
   * Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.
   */
  describeSnapshotSchedule(callback?: (err: AWSError, data: StorageGateway.Types.DescribeSnapshotScheduleOutput) => void): Request<StorageGateway.Types.DescribeSnapshotScheduleOutput, AWSError>;
  /**
   * Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.
   */
  describeStorediSCSIVolumes(params: StorageGateway.Types.DescribeStorediSCSIVolumesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeStorediSCSIVolumesOutput) => void): Request<StorageGateway.Types.DescribeStorediSCSIVolumesOutput, AWSError>;
  /**
   * Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.
   */
  describeStorediSCSIVolumes(callback?: (err: AWSError, data: StorageGateway.Types.DescribeStorediSCSIVolumesOutput) => void): Request<StorageGateway.Types.DescribeStorediSCSIVolumesOutput, AWSError>;
  /**
   * Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, AWS Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.
   */
  describeTapeArchives(params: StorageGateway.Types.DescribeTapeArchivesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeTapeArchivesOutput) => void): Request<StorageGateway.Types.DescribeTapeArchivesOutput, AWSError>;
  /**
   * Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, AWS Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.
   */
  describeTapeArchives(callback?: (err: AWSError, data: StorageGateway.Types.DescribeTapeArchivesOutput) => void): Request<StorageGateway.Types.DescribeTapeArchivesOutput, AWSError>;
  /**
   * Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.
   */
  describeTapeRecoveryPoints(params: StorageGateway.Types.DescribeTapeRecoveryPointsInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeTapeRecoveryPointsOutput) => void): Request<StorageGateway.Types.DescribeTapeRecoveryPointsOutput, AWSError>;
  /**
   * Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.
   */
  describeTapeRecoveryPoints(callback?: (err: AWSError, data: StorageGateway.Types.DescribeTapeRecoveryPointsOutput) => void): Request<StorageGateway.Types.DescribeTapeRecoveryPointsOutput, AWSError>;
  /**
   * Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a TapeARN is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.
   */
  describeTapes(params: StorageGateway.Types.DescribeTapesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeTapesOutput) => void): Request<StorageGateway.Types.DescribeTapesOutput, AWSError>;
  /**
   * Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a TapeARN is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.
   */
  describeTapes(callback?: (err: AWSError, data: StorageGateway.Types.DescribeTapesOutput) => void): Request<StorageGateway.Types.DescribeTapesOutput, AWSError>;
  /**
   * Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.
   */
  describeUploadBuffer(params: StorageGateway.Types.DescribeUploadBufferInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeUploadBufferOutput) => void): Request<StorageGateway.Types.DescribeUploadBufferOutput, AWSError>;
  /**
   * Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.
   */
  describeUploadBuffer(callback?: (err: AWSError, data: StorageGateway.Types.DescribeUploadBufferOutput) => void): Request<StorageGateway.Types.DescribeUploadBufferOutput, AWSError>;
  /**
   * Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, AWS Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.
   */
  describeVTLDevices(params: StorageGateway.Types.DescribeVTLDevicesInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeVTLDevicesOutput) => void): Request<StorageGateway.Types.DescribeVTLDevicesOutput, AWSError>;
  /**
   * Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, AWS Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.
   */
  describeVTLDevices(callback?: (err: AWSError, data: StorageGateway.Types.DescribeVTLDevicesOutput) => void): Request<StorageGateway.Types.DescribeVTLDevicesOutput, AWSError>;
  /**
   * Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.  Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.  The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.
   */
  describeWorkingStorage(params: StorageGateway.Types.DescribeWorkingStorageInput, callback?: (err: AWSError, data: StorageGateway.Types.DescribeWorkingStorageOutput) => void): Request<StorageGateway.Types.DescribeWorkingStorageOutput, AWSError>;
  /**
   * Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.  Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.  The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.
   */
  describeWorkingStorage(callback?: (err: AWSError, data: StorageGateway.Types.DescribeWorkingStorageOutput) => void): Request<StorageGateway.Types.DescribeWorkingStorageOutput, AWSError>;
  /**
   * Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
   */
  detachVolume(params: StorageGateway.Types.DetachVolumeInput, callback?: (err: AWSError, data: StorageGateway.Types.DetachVolumeOutput) => void): Request<StorageGateway.Types.DetachVolumeOutput, AWSError>;
  /**
   * Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.
   */
  detachVolume(callback?: (err: AWSError, data: StorageGateway.Types.DetachVolumeOutput) => void): Request<StorageGateway.Types.DetachVolumeOutput, AWSError>;
  /**
   * Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.  Once a gateway is disabled it cannot be enabled. 
   */
  disableGateway(params: StorageGateway.Types.DisableGatewayInput, callback?: (err: AWSError, data: StorageGateway.Types.DisableGatewayOutput) => void): Request<StorageGateway.Types.DisableGatewayOutput, AWSError>;
  /**
   * Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.  Once a gateway is disabled it cannot be enabled. 
   */
  disableGateway(callback?: (err: AWSError, data: StorageGateway.Types.DisableGatewayOutput) => void): Request<StorageGateway.Types.DisableGatewayOutput, AWSError>;
  /**
   * Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.
   */
  joinDomain(params: StorageGateway.Types.JoinDomainInput, callback?: (err: AWSError, data: StorageGateway.Types.JoinDomainOutput) => void): Request<StorageGateway.Types.JoinDomainOutput, AWSError>;
  /**
   * Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.
   */
  joinDomain(callback?: (err: AWSError, data: StorageGateway.Types.JoinDomainOutput) => void): Request<StorageGateway.Types.JoinDomainOutput, AWSError>;
  /**
   * Gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account. This operation is only supported for file gateways.
   */
  listFileShares(params: StorageGateway.Types.ListFileSharesInput, callback?: (err: AWSError, data: StorageGateway.Types.ListFileSharesOutput) => void): Request<StorageGateway.Types.ListFileSharesOutput, AWSError>;
  /**
   * Gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account. This operation is only supported for file gateways.
   */
  listFileShares(callback?: (err: AWSError, data: StorageGateway.Types.ListFileSharesOutput) => void): Request<StorageGateway.Types.ListFileSharesOutput, AWSError>;
  /**
   * Lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.
   */
  listGateways(params: StorageGateway.Types.ListGatewaysInput, callback?: (err: AWSError, data: StorageGateway.Types.ListGatewaysOutput) => void): Request<StorageGateway.Types.ListGatewaysOutput, AWSError>;
  /**
   * Lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.
   */
  listGateways(callback?: (err: AWSError, data: StorageGateway.Types.ListGatewaysOutput) => void): Request<StorageGateway.Types.ListGatewaysOutput, AWSError>;
  /**
   * Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a DiskStatus field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).
   */
  listLocalDisks(params: StorageGateway.Types.ListLocalDisksInput, callback?: (err: AWSError, data: StorageGateway.Types.ListLocalDisksOutput) => void): Request<StorageGateway.Types.ListLocalDisksOutput, AWSError>;
  /**
   * Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a DiskStatus field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).
   */
  listLocalDisks(callback?: (err: AWSError, data: StorageGateway.Types.ListLocalDisksOutput) => void): Request<StorageGateway.Types.ListLocalDisksOutput, AWSError>;
  /**
   * Lists the tags that have been added to the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway type.
   */
  listTagsForResource(params: StorageGateway.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: StorageGateway.Types.ListTagsForResourceOutput) => void): Request<StorageGateway.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the tags that have been added to the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway type.
   */
  listTagsForResource(callback?: (err: AWSError, data: StorageGateway.Types.ListTagsForResourceOutput) => void): Request<StorageGateway.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.
   */
  listTapes(params: StorageGateway.Types.ListTapesInput, callback?: (err: AWSError, data: StorageGateway.Types.ListTapesOutput) => void): Request<StorageGateway.Types.ListTapesOutput, AWSError>;
  /**
   * Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.
   */
  listTapes(callback?: (err: AWSError, data: StorageGateway.Types.ListTapesOutput) => void): Request<StorageGateway.Types.ListTapesOutput, AWSError>;
  /**
   * Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.
   */
  listVolumeInitiators(params: StorageGateway.Types.ListVolumeInitiatorsInput, callback?: (err: AWSError, data: StorageGateway.Types.ListVolumeInitiatorsOutput) => void): Request<StorageGateway.Types.ListVolumeInitiatorsOutput, AWSError>;
  /**
   * Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.
   */
  listVolumeInitiators(callback?: (err: AWSError, data: StorageGateway.Types.ListVolumeInitiatorsOutput) => void): Request<StorageGateway.Types.ListVolumeInitiatorsOutput, AWSError>;
  /**
   * Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint operation.
   */
  listVolumeRecoveryPoints(params: StorageGateway.Types.ListVolumeRecoveryPointsInput, callback?: (err: AWSError, data: StorageGateway.Types.ListVolumeRecoveryPointsOutput) => void): Request<StorageGateway.Types.ListVolumeRecoveryPointsOutput, AWSError>;
  /**
   * Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint operation.
   */
  listVolumeRecoveryPoints(callback?: (err: AWSError, data: StorageGateway.Types.ListVolumeRecoveryPointsOutput) => void): Request<StorageGateway.Types.ListVolumeRecoveryPointsOutput, AWSError>;
  /**
   * Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.
   */
  listVolumes(params: StorageGateway.Types.ListVolumesInput, callback?: (err: AWSError, data: StorageGateway.Types.ListVolumesOutput) => void): Request<StorageGateway.Types.ListVolumesOutput, AWSError>;
  /**
   * Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.
   */
  listVolumes(callback?: (err: AWSError, data: StorageGateway.Types.ListVolumesOutput) => void): Request<StorageGateway.Types.ListVolumesOutput, AWSError>;
  /**
   * Sends you notification through CloudWatch Events when all files written to your file share have been uploaded to Amazon S3. AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or AWS Lambda function. This operation is only supported for file gateways. For more information, see Getting File Upload Notification in the Storage Gateway User Guide (https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification). 
   */
  notifyWhenUploaded(params: StorageGateway.Types.NotifyWhenUploadedInput, callback?: (err: AWSError, data: StorageGateway.Types.NotifyWhenUploadedOutput) => void): Request<StorageGateway.Types.NotifyWhenUploadedOutput, AWSError>;
  /**
   * Sends you notification through CloudWatch Events when all files written to your file share have been uploaded to Amazon S3. AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or AWS Lambda function. This operation is only supported for file gateways. For more information, see Getting File Upload Notification in the Storage Gateway User Guide (https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification). 
   */
  notifyWhenUploaded(callback?: (err: AWSError, data: StorageGateway.Types.NotifyWhenUploadedOutput) => void): Request<StorageGateway.Types.NotifyWhenUploadedOutput, AWSError>;
  /**
   * Refreshes the cache for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed or replaced since the gateway last listed the bucket's contents and cached the results. This operation is only supported in the file gateway type. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting Notified About File Operations. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through an CloudWatch event when your RefreshCache operation completes. 
   */
  refreshCache(params: StorageGateway.Types.RefreshCacheInput, callback?: (err: AWSError, data: StorageGateway.Types.RefreshCacheOutput) => void): Request<StorageGateway.Types.RefreshCacheOutput, AWSError>;
  /**
   * Refreshes the cache for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed or replaced since the gateway last listed the bucket's contents and cached the results. This operation is only supported in the file gateway type. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting Notified About File Operations. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through an CloudWatch event when your RefreshCache operation completes. 
   */
  refreshCache(callback?: (err: AWSError, data: StorageGateway.Types.RefreshCacheOutput) => void): Request<StorageGateway.Types.RefreshCacheOutput, AWSError>;
  /**
   * Removes one or more tags from the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway types.
   */
  removeTagsFromResource(params: StorageGateway.Types.RemoveTagsFromResourceInput, callback?: (err: AWSError, data: StorageGateway.Types.RemoveTagsFromResourceOutput) => void): Request<StorageGateway.Types.RemoveTagsFromResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway types.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: StorageGateway.Types.RemoveTagsFromResourceOutput) => void): Request<StorageGateway.Types.RemoveTagsFromResourceOutput, AWSError>;
  /**
   * Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters a error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.  If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly. 
   */
  resetCache(params: StorageGateway.Types.ResetCacheInput, callback?: (err: AWSError, data: StorageGateway.Types.ResetCacheOutput) => void): Request<StorageGateway.Types.ResetCacheOutput, AWSError>;
  /**
   * Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters a error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.  If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly. 
   */
  resetCache(callback?: (err: AWSError, data: StorageGateway.Types.ResetCacheOutput) => void): Request<StorageGateway.Types.ResetCacheOutput, AWSError>;
  /**
   * Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.
   */
  retrieveTapeArchive(params: StorageGateway.Types.RetrieveTapeArchiveInput, callback?: (err: AWSError, data: StorageGateway.Types.RetrieveTapeArchiveOutput) => void): Request<StorageGateway.Types.RetrieveTapeArchiveOutput, AWSError>;
  /**
   * Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.
   */
  retrieveTapeArchive(callback?: (err: AWSError, data: StorageGateway.Types.RetrieveTapeArchiveOutput) => void): Request<StorageGateway.Types.RetrieveTapeArchiveOutput, AWSError>;
  /**
   * Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.  The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points. 
   */
  retrieveTapeRecoveryPoint(params: StorageGateway.Types.RetrieveTapeRecoveryPointInput, callback?: (err: AWSError, data: StorageGateway.Types.RetrieveTapeRecoveryPointOutput) => void): Request<StorageGateway.Types.RetrieveTapeRecoveryPointOutput, AWSError>;
  /**
   * Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.  The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points. 
   */
  retrieveTapeRecoveryPoint(callback?: (err: AWSError, data: StorageGateway.Types.RetrieveTapeRecoveryPointOutput) => void): Request<StorageGateway.Types.RetrieveTapeRecoveryPointOutput, AWSError>;
  /**
   * Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.
   */
  setLocalConsolePassword(params: StorageGateway.Types.SetLocalConsolePasswordInput, callback?: (err: AWSError, data: StorageGateway.Types.SetLocalConsolePasswordOutput) => void): Request<StorageGateway.Types.SetLocalConsolePasswordOutput, AWSError>;
  /**
   * Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.
   */
  setLocalConsolePassword(callback?: (err: AWSError, data: StorageGateway.Types.SetLocalConsolePasswordOutput) => void): Request<StorageGateway.Types.SetLocalConsolePasswordOutput, AWSError>;
  /**
   * Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess.
   */
  setSMBGuestPassword(params: StorageGateway.Types.SetSMBGuestPasswordInput, callback?: (err: AWSError, data: StorageGateway.Types.SetSMBGuestPasswordOutput) => void): Request<StorageGateway.Types.SetSMBGuestPasswordOutput, AWSError>;
  /**
   * Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess.
   */
  setSMBGuestPassword(callback?: (err: AWSError, data: StorageGateway.Types.SetSMBGuestPasswordOutput) => void): Request<StorageGateway.Types.SetSMBGuestPasswordOutput, AWSError>;
  /**
   * Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.  If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.  After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.  When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway.  If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the gateway.
   */
  shutdownGateway(params: StorageGateway.Types.ShutdownGatewayInput, callback?: (err: AWSError, data: StorageGateway.Types.ShutdownGatewayOutput) => void): Request<StorageGateway.Types.ShutdownGatewayOutput, AWSError>;
  /**
   * Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.  If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.  After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.  When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway.  If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the gateway.
   */
  shutdownGateway(callback?: (err: AWSError, data: StorageGateway.Types.ShutdownGatewayOutput) => void): Request<StorageGateway.Types.ShutdownGatewayOutput, AWSError>;
  /**
   * Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.  When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway.  To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  startGateway(params: StorageGateway.Types.StartGatewayInput, callback?: (err: AWSError, data: StorageGateway.Types.StartGatewayOutput) => void): Request<StorageGateway.Types.StartGatewayOutput, AWSError>;
  /**
   * Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.  When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway.  To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  startGateway(callback?: (err: AWSError, data: StorageGateway.Types.StartGatewayOutput) => void): Request<StorageGateway.Types.StartGatewayOutput, AWSError>;
  /**
   * Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  updateBandwidthRateLimit(params: StorageGateway.Types.UpdateBandwidthRateLimitInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateBandwidthRateLimitOutput) => void): Request<StorageGateway.Types.UpdateBandwidthRateLimitOutput, AWSError>;
  /**
   * Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.
   */
  updateBandwidthRateLimit(callback?: (err: AWSError, data: StorageGateway.Types.UpdateBandwidthRateLimitOutput) => void): Request<StorageGateway.Types.UpdateBandwidthRateLimitOutput, AWSError>;
  /**
   * Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it.  When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials. 
   */
  updateChapCredentials(params: StorageGateway.Types.UpdateChapCredentialsInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateChapCredentialsOutput) => void): Request<StorageGateway.Types.UpdateChapCredentialsOutput, AWSError>;
  /**
   * Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it.  When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials. 
   */
  updateChapCredentials(callback?: (err: AWSError, data: StorageGateway.Types.UpdateChapCredentialsOutput) => void): Request<StorageGateway.Types.UpdateChapCredentialsOutput, AWSError>;
  /**
   * Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.  For Gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN. 
   */
  updateGatewayInformation(params: StorageGateway.Types.UpdateGatewayInformationInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateGatewayInformationOutput) => void): Request<StorageGateway.Types.UpdateGatewayInformationOutput, AWSError>;
  /**
   * Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.  For Gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN. 
   */
  updateGatewayInformation(callback?: (err: AWSError, data: StorageGateway.Types.UpdateGatewayInformationOutput) => void): Request<StorageGateway.Types.UpdateGatewayInformationOutput, AWSError>;
  /**
   * Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.  When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.   A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing Your Windows iSCSI Settings and Customizing Your Linux iSCSI Settings, respectively. 
   */
  updateGatewaySoftwareNow(params: StorageGateway.Types.UpdateGatewaySoftwareNowInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateGatewaySoftwareNowOutput) => void): Request<StorageGateway.Types.UpdateGatewaySoftwareNowOutput, AWSError>;
  /**
   * Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.  When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state.   A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing Your Windows iSCSI Settings and Customizing Your Linux iSCSI Settings, respectively. 
   */
  updateGatewaySoftwareNow(callback?: (err: AWSError, data: StorageGateway.Types.UpdateGatewaySoftwareNowOutput) => void): Request<StorageGateway.Types.UpdateGatewaySoftwareNowOutput, AWSError>;
  /**
   * Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.
   */
  updateMaintenanceStartTime(params: StorageGateway.Types.UpdateMaintenanceStartTimeInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateMaintenanceStartTimeOutput) => void): Request<StorageGateway.Types.UpdateMaintenanceStartTimeOutput, AWSError>;
  /**
   * Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.
   */
  updateMaintenanceStartTime(callback?: (err: AWSError, data: StorageGateway.Types.UpdateMaintenanceStartTimeOutput) => void): Request<StorageGateway.Types.UpdateMaintenanceStartTimeOutput, AWSError>;
  /**
   * Updates a Network File System (NFS) file share. This operation is only supported in the file gateway type.  To leave a file share field unchanged, set the corresponding input field to null.  Updates the following file share setting:   Default storage class for your S3 bucket   Metadata defaults for your S3 bucket   Allowed NFS clients for your file share   Squash settings   Write status of your file share    To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported in file gateways. 
   */
  updateNFSFileShare(params: StorageGateway.Types.UpdateNFSFileShareInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateNFSFileShareOutput) => void): Request<StorageGateway.Types.UpdateNFSFileShareOutput, AWSError>;
  /**
   * Updates a Network File System (NFS) file share. This operation is only supported in the file gateway type.  To leave a file share field unchanged, set the corresponding input field to null.  Updates the following file share setting:   Default storage class for your S3 bucket   Metadata defaults for your S3 bucket   Allowed NFS clients for your file share   Squash settings   Write status of your file share    To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported in file gateways. 
   */
  updateNFSFileShare(callback?: (err: AWSError, data: StorageGateway.Types.UpdateNFSFileShareOutput) => void): Request<StorageGateway.Types.UpdateNFSFileShareOutput, AWSError>;
  /**
   * Updates a Server Message Block (SMB) file share.  To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported for file gateways.   File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  File gateways don't support creating hard or symbolic links on a file share. 
   */
  updateSMBFileShare(params: StorageGateway.Types.UpdateSMBFileShareInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateSMBFileShareOutput) => void): Request<StorageGateway.Types.UpdateSMBFileShareOutput, AWSError>;
  /**
   * Updates a Server Message Block (SMB) file share.  To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported for file gateways.   File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  File gateways don't support creating hard or symbolic links on a file share. 
   */
  updateSMBFileShare(callback?: (err: AWSError, data: StorageGateway.Types.UpdateSMBFileShareOutput) => void): Request<StorageGateway.Types.UpdateSMBFileShareOutput, AWSError>;
  /**
   * Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.  This API is called Security level in the User Guide. A higher security level can affect performance of the gateway. 
   */
  updateSMBSecurityStrategy(params: StorageGateway.Types.UpdateSMBSecurityStrategyInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateSMBSecurityStrategyOutput) => void): Request<StorageGateway.Types.UpdateSMBSecurityStrategyOutput, AWSError>;
  /**
   * Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.  This API is called Security level in the User Guide. A higher security level can affect performance of the gateway. 
   */
  updateSMBSecurityStrategy(callback?: (err: AWSError, data: StorageGateway.Types.UpdateSMBSecurityStrategyOutput) => void): Request<StorageGateway.Types.UpdateSMBSecurityStrategyOutput, AWSError>;
  /**
   * Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.
   */
  updateSnapshotSchedule(params: StorageGateway.Types.UpdateSnapshotScheduleInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateSnapshotScheduleOutput) => void): Request<StorageGateway.Types.UpdateSnapshotScheduleOutput, AWSError>;
  /**
   * Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.
   */
  updateSnapshotSchedule(callback?: (err: AWSError, data: StorageGateway.Types.UpdateSnapshotScheduleOutput) => void): Request<StorageGateway.Types.UpdateSnapshotScheduleOutput, AWSError>;
  /**
   * Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.
   */
  updateVTLDeviceType(params: StorageGateway.Types.UpdateVTLDeviceTypeInput, callback?: (err: AWSError, data: StorageGateway.Types.UpdateVTLDeviceTypeOutput) => void): Request<StorageGateway.Types.UpdateVTLDeviceTypeOutput, AWSError>;
  /**
   * Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.
   */
  updateVTLDeviceType(callback?: (err: AWSError, data: StorageGateway.Types.UpdateVTLDeviceTypeOutput) => void): Request<StorageGateway.Types.UpdateVTLDeviceTypeOutput, AWSError>;
}
declare namespace StorageGateway {
  export interface ActivateGatewayInput {
    /**
     * Your gateway activation key. You can obtain the activation key by sending an HTTP GET request with redirects enabled to the gateway IP address (port 80). The redirect URL returned in the response provides you the activation key for your gateway in the query string parameter activationKey. It may also include other activation-related parameters, however, these are merely defaults -- the arguments you pass to the ActivateGateway API call determine the actual configuration of your gateway.  For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html in the Storage Gateway User Guide.
     */
    ActivationKey: ActivationKey;
    /**
     * The name you configured for your gateway.
     */
    GatewayName: GatewayName;
    /**
     * A value that indicates the time zone you want to set for the gateway. The time zone is of the format "GMT-hr:mm" or "GMT+hr:mm". For example, GMT-4:00 indicates the time is 4 hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
     */
    GatewayTimezone: GatewayTimezone;
    /**
     * A value that indicates the region where you want to store your data. The gateway region specified must be the same region as the region in your Host header in the request. For more information about available regions and endpoints for AWS Storage Gateway, see Regions and Endpoints in the Amazon Web Services Glossary.  Valid Values: See AWS Storage Gateway Regions and Endpoints in the AWS General Reference. 
     */
    GatewayRegion: RegionId;
    /**
     * A value that defines the type of gateway to activate. The type specified is critical to all later functions of the gateway and cannot be changed after activation. The default value is CACHED.   Valid Values: "STORED", "CACHED", "VTL", "FILE_S3"
     */
    GatewayType?: GatewayType;
    /**
     * The value that indicates the type of tape drive to use for tape gateway. This field is optional.  Valid Values: "IBM-ULT3580-TD5" 
     */
    TapeDriveType?: TapeDriveType;
    /**
     * The value that indicates the type of medium changer to use for tape gateway. This field is optional.  Valid Values: "STK-L700", "AWS-Gateway-VTL"
     */
    MediumChangerType?: MediumChangerType;
    /**
     * A list of up to 50 tags that can be assigned to the gateway. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface ActivateGatewayOutput {
    GatewayARN?: GatewayARN;
  }
  export type ActivationKey = string;
  export interface AddCacheInput {
    GatewayARN: GatewayARN;
    /**
     * An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
     */
    DiskIds: DiskIds;
  }
  export interface AddCacheOutput {
    GatewayARN?: GatewayARN;
  }
  export interface AddTagsToResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource you want to add tags to.
     */
    ResourceARN: ResourceARN;
    /**
     * The key-value pair that represents the tag you want to add to the resource. The value can be an empty string.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags: Tags;
  }
  export interface AddTagsToResourceOutput {
    /**
     * The Amazon Resource Name (ARN) of the resource you want to add tags to.
     */
    ResourceARN?: ResourceARN;
  }
  export interface AddUploadBufferInput {
    GatewayARN: GatewayARN;
    /**
     * An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
     */
    DiskIds: DiskIds;
  }
  export interface AddUploadBufferOutput {
    GatewayARN?: GatewayARN;
  }
  export interface AddWorkingStorageInput {
    GatewayARN: GatewayARN;
    /**
     * An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
     */
    DiskIds: DiskIds;
  }
  export interface AddWorkingStorageOutput {
    GatewayARN?: GatewayARN;
  }
  export interface AssignTapePoolInput {
    /**
     * The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the tape pool.
     */
    TapeARN: TapeARN;
    /**
     * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
     */
    PoolId: PoolId;
  }
  export interface AssignTapePoolOutput {
    /**
     * The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape pool.
     */
    TapeARN?: TapeARN;
  }
  export interface AttachVolumeInput {
    /**
     * The Amazon Resource Name (ARN) of the gateway that you want to attach the volume to.
     */
    GatewayARN: GatewayARN;
    /**
     * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
     */
    TargetName?: TargetName;
    /**
     * The Amazon Resource Name (ARN) of the volume to attach to the specified gateway.
     */
    VolumeARN: VolumeARN;
    /**
     * The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway.  Valid Values: A valid IP address.
     */
    NetworkInterfaceId: NetworkInterfaceId;
    /**
     * The unique device ID or other distinguishing data that identifies the local disk used to create the volume. This value is only required when you are attaching a stored volume.
     */
    DiskId?: DiskId;
  }
  export interface AttachVolumeOutput {
    /**
     * The Amazon Resource Name (ARN) of the volume that was attached to the gateway.
     */
    VolumeARN?: VolumeARN;
    /**
     * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for the initiator that was used to connect to the target.
     */
    TargetARN?: TargetARN;
  }
  export type Authentication = string;
  export type BandwidthDownloadRateLimit = number;
  export type BandwidthType = string;
  export type BandwidthUploadRateLimit = number;
  export type Boolean = boolean;
  export interface CachediSCSIVolume {
    /**
     * The Amazon Resource Name (ARN) of the storage volume.
     */
    VolumeARN?: VolumeARN;
    /**
     * The unique identifier of the volume, e.g. vol-AE4B946D.
     */
    VolumeId?: VolumeId;
    /**
     * One of the VolumeType enumeration values that describes the type of the volume.
     */
    VolumeType?: VolumeType;
    /**
     * One of the VolumeStatus values that indicates the state of the storage volume.
     */
    VolumeStatus?: VolumeStatus;
    /**
     * A value that indicates whether a storage volume is attached to or detached from a gateway. For more information, see Moving Your Volumes to a Different Gateway.
     */
    VolumeAttachmentStatus?: VolumeAttachmentStatus;
    /**
     * The size, in bytes, of the volume capacity.
     */
    VolumeSizeInBytes?: long;
    /**
     * Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the cached volume is not restoring or bootstrapping.
     */
    VolumeProgress?: DoubleObject;
    /**
     * If the cached volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.
     */
    SourceSnapshotId?: SnapshotId;
    /**
     * An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume.
     */
    VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
    /**
     * The date the volume was created. Volumes created prior to March 28, 2017 don’t have this time stamp.
     */
    CreatedDate?: CreatedDate;
    /**
     * The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. VolumeUsedInBytes is different from the compressed size of the volume, which is the value that is used to calculate your bill.  This value is not available for volumes created prior to May 13, 2015, until you store data on the volume. 
     */
    VolumeUsedInBytes?: VolumeUsedInBytes;
    KMSKey?: KMSKey;
    /**
     * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
     */
    TargetName?: TargetName;
  }
  export type CachediSCSIVolumes = CachediSCSIVolume[];
  export interface CancelArchivalInput {
    GatewayARN: GatewayARN;
    /**
     * The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for.
     */
    TapeARN: TapeARN;
  }
  export interface CancelArchivalOutput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape for which archiving was canceled.
     */
    TapeARN?: TapeARN;
  }
  export interface CancelRetrievalInput {
    GatewayARN: GatewayARN;
    /**
     * The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval for.
     */
    TapeARN: TapeARN;
  }
  export interface CancelRetrievalOutput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape for which retrieval was canceled.
     */
    TapeARN?: TapeARN;
  }
  export type ChapCredentials = ChapInfo[];
  export interface ChapInfo {
    /**
     * The Amazon Resource Name (ARN) of the volume.  Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
     */
    TargetARN?: TargetARN;
    /**
     * The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.
     */
    SecretToAuthenticateInitiator?: ChapSecret;
    /**
     * The iSCSI initiator that connects to the target.
     */
    InitiatorName?: IqnName;
    /**
     * The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).
     */
    SecretToAuthenticateTarget?: ChapSecret;
  }
  export type ChapSecret = string;
  export type ClientToken = string;
  export interface CreateCachediSCSIVolumeInput {
    GatewayARN: GatewayARN;
    /**
     * The size of the volume in bytes.
     */
    VolumeSizeInBytes: long;
    /**
     * The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached volume. Specify this field if you want to create the iSCSI storage volume from a snapshot otherwise do not include this field. To list snapshots for your account use DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.
     */
    SnapshotId?: SnapshotId;
    /**
     * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
     */
    TargetName: TargetName;
    /**
     * The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The VolumeSizeInBytes value for this new volume must be equal to or larger than the size of the existing volume, in bytes.
     */
    SourceVolumeARN?: VolumeARN;
    /**
     * The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway.  Valid Values: A valid IP address.
     */
    NetworkInterfaceId: NetworkInterfaceId;
    /**
     * A unique identifier that you use to retry a request. If you retry a request, use the same ClientToken you specified in the initial request.
     */
    ClientToken: ClientToken;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * A list of up to 50 tags that can be assigned to a cached volume. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateCachediSCSIVolumeOutput {
    /**
     * The Amazon Resource Name (ARN) of the configured volume.
     */
    VolumeARN?: VolumeARN;
    /**
     * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.
     */
    TargetARN?: TargetARN;
  }
  export interface CreateNFSFileShareInput {
    /**
     * A unique string value that you supply that is used by file gateway to ensure idempotent file share creation.
     */
    ClientToken: ClientToken;
    /**
     * File share default values. Optional.
     */
    NFSFileShareDefaults?: NFSFileShareDefaults;
    /**
     * The Amazon Resource Name (ARN) of the file gateway on which you want to create a file share.
     */
    GatewayARN: GatewayARN;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. 
     */
    Role: Role;
    /**
     * The ARN of the backed storage used for storing file data. 
     */
    LocationARN: LocationARN;
    /**
     * The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are S3_STANDARD, S3_STANDARD_IA, or S3_ONEZONE_IA. If this field is not populated, the default value S3_STANDARD is used. Optional.
     */
    DefaultStorageClass?: StorageClass;
    /**
     * A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private".
     */
    ObjectACL?: ObjectACL;
    /**
     * The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. 
     */
    ClientList?: FileShareClientList;
    /**
     * A value that maps a user to anonymous user. Valid options are the following:     RootSquash - Only root is mapped to anonymous user.    NoSquash - No one is mapped to anonymous user    AllSquash - Everyone is mapped to anonymous user.  
     */
    Squash?: Squash;
    /**
     * A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.
     */
    ReadOnly?: Boolean;
    /**
     * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.
     */
    GuessMIMETypeEnabled?: Boolean;
    /**
     * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.   RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. 
     */
    RequesterPays?: Boolean;
    /**
     * A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateNFSFileShareOutput {
    /**
     * The Amazon Resource Name (ARN) of the newly created file share. 
     */
    FileShareARN?: FileShareARN;
  }
  export interface CreateSMBFileShareInput {
    /**
     * A unique string value that you supply that is used by file gateway to ensure idempotent file share creation.
     */
    ClientToken: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the file gateway on which you want to create a file share.
     */
    GatewayARN: GatewayARN;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. 
     */
    Role: Role;
    /**
     * The ARN of the backed storage used for storing file data. 
     */
    LocationARN: LocationARN;
    /**
     * The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are S3_STANDARD, S3_STANDARD_IA, or S3_ONEZONE_IA. If this field is not populated, the default value S3_STANDARD is used. Optional.
     */
    DefaultStorageClass?: StorageClass;
    /**
     * A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private".
     */
    ObjectACL?: ObjectACL;
    /**
     * A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.
     */
    ReadOnly?: Boolean;
    /**
     * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.
     */
    GuessMIMETypeEnabled?: Boolean;
    /**
     * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.   RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. 
     */
    RequesterPays?: Boolean;
    /**
     * Set this value to "true to enable ACL (access control list) on the SMB file share. Set it to "false" to map file and directory permissions to the POSIX permissions. For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html in the Storage Gateway User Guide.
     */
    SMBACLEnabled?: Boolean;
    /**
     * A list of users in the Active Directory that will be granted administrator privileges on the file share. These users can do all file operations as the super-user.   Use this option very carefully, because any user in this list can do anything they like on the file share, regardless of file permissions. 
     */
    AdminUserList?: FileShareUserList;
    /**
     * A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    ValidUserList?: FileShareUserList;
    /**
     * A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    InvalidUserList?: FileShareUserList;
    /**
     * The authentication method that users use to access the file share. Valid values are ActiveDirectory or GuestAccess. The default is ActiveDirectory.
     */
    Authentication?: Authentication;
    /**
     * A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateSMBFileShareOutput {
    /**
     * The Amazon Resource Name (ARN) of the newly created file share. 
     */
    FileShareARN?: FileShareARN;
  }
  export interface CreateSnapshotFromVolumeRecoveryPointInput {
    /**
     * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
     */
    VolumeARN: VolumeARN;
    /**
     * Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the Description field, and in the AWS Storage Gateway snapshot Details pane, Description field
     */
    SnapshotDescription: SnapshotDescription;
    /**
     * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateSnapshotFromVolumeRecoveryPointOutput {
    /**
     * The ID of the snapshot.
     */
    SnapshotId?: SnapshotId;
    /**
     * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
     */
    VolumeARN?: VolumeARN;
    /**
     * The time the volume was created from the recovery point.
     */
    VolumeRecoveryPointTime?: string;
  }
  export interface CreateSnapshotInput {
    /**
     * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
     */
    VolumeARN: VolumeARN;
    /**
     * Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the Description field, and in the AWS Storage Gateway snapshot Details pane, Description field
     */
    SnapshotDescription: SnapshotDescription;
    /**
     * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateSnapshotOutput {
    /**
     * The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.
     */
    VolumeARN?: VolumeARN;
    /**
     * The snapshot ID that is used to refer to the snapshot in future operations such as describing snapshots (Amazon Elastic Compute Cloud API DescribeSnapshots) or creating a volume from a snapshot (CreateStorediSCSIVolume).
     */
    SnapshotId?: SnapshotId;
  }
  export interface CreateStorediSCSIVolumeInput {
    GatewayARN: GatewayARN;
    /**
     * The unique identifier for the gateway local disk that is configured as a stored volume. Use ListLocalDisks to list disk IDs for a gateway.
     */
    DiskId: DiskId;
    /**
     * The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot otherwise do not include this field. To list snapshots for your account use DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.
     */
    SnapshotId?: SnapshotId;
    /**
     * Specify this field as true if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.  Valid Values: true, false
     */
    PreserveExistingData: boolean;
    /**
     * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
     */
    TargetName: TargetName;
    /**
     * The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway.  Valid Values: A valid IP address.
     */
    NetworkInterfaceId: NetworkInterfaceId;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateStorediSCSIVolumeOutput {
    /**
     * The Amazon Resource Name (ARN) of the configured volume.
     */
    VolumeARN?: VolumeARN;
    /**
     * The size of the volume in bytes.
     */
    VolumeSizeInBytes?: long;
    /**
     * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to connect to the target.
     */
    TargetARN?: TargetARN;
  }
  export interface CreateTapeWithBarcodeInput {
    /**
     * The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tape with. Use the ListGateways operation to return a list of gateways for your account and region.
     */
    GatewayARN: GatewayARN;
    /**
     * The size, in bytes, of the virtual tape that you want to create.  The size must be aligned by gigabyte (1024*1024*1024 byte). 
     */
    TapeSizeInBytes: TapeSize;
    /**
     * The barcode that you want to assign to the tape.  Barcodes cannot be reused. This includes barcodes used for tapes that have been deleted. 
     */
    TapeBarcode: TapeBarcode;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS Key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
     */
    PoolId?: PoolId;
    /**
     * A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateTapeWithBarcodeOutput {
    /**
     * A unique Amazon Resource Name (ARN) that represents the virtual tape that was created.
     */
    TapeARN?: TapeARN;
  }
  export interface CreateTapesInput {
    /**
     * The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tapes with. Use the ListGateways operation to return a list of gateways for your account and region.
     */
    GatewayARN: GatewayARN;
    /**
     * The size, in bytes, of the virtual tapes that you want to create.  The size must be aligned by gigabyte (1024*1024*1024 byte). 
     */
    TapeSizeInBytes: TapeSize;
    /**
     * A unique identifier that you use to retry a request. If you retry a request, use the same ClientToken you specified in the initial request.  Using the same ClientToken prevents creating the tape multiple times. 
     */
    ClientToken: ClientToken;
    /**
     * The number of virtual tapes that you want to create.
     */
    NumTapesToCreate: NumTapesToCreate;
    /**
     * A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode unique.  The prefix must be 1 to 4 characters in length and must be one of the uppercase letters from A to Z. 
     */
    TapeBarcodePrefix: TapeBarcodePrefix;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
     */
    PoolId?: PoolId;
    /**
     * A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface CreateTapesOutput {
    /**
     * A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were created.
     */
    TapeARNs?: TapeARNs;
  }
  export type CreatedDate = Date;
  export type DayOfMonth = number;
  export type DayOfWeek = number;
  export interface DeleteBandwidthRateLimitInput {
    GatewayARN: GatewayARN;
    /**
     * One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete. Valid Values: Upload, Download, All.
     */
    BandwidthType: BandwidthType;
  }
  export interface DeleteBandwidthRateLimitOutput {
    GatewayARN?: GatewayARN;
  }
  export interface DeleteChapCredentialsInput {
    /**
     * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
     */
    TargetARN: TargetARN;
    /**
     * The iSCSI initiator that connects to the target.
     */
    InitiatorName: IqnName;
  }
  export interface DeleteChapCredentialsOutput {
    /**
     * The Amazon Resource Name (ARN) of the target.
     */
    TargetARN?: TargetARN;
    /**
     * The iSCSI initiator that connects to the target.
     */
    InitiatorName?: IqnName;
  }
  export interface DeleteFileShareInput {
    /**
     * The Amazon Resource Name (ARN) of the file share to be deleted. 
     */
    FileShareARN: FileShareARN;
    /**
     * If this value is set to true, the operation deletes a file share immediately and aborts all data uploads to AWS. Otherwise, the file share is not deleted until all data is uploaded to AWS. This process aborts the data upload process, and the file share enters the FORCE_DELETING status.
     */
    ForceDelete?: boolean;
  }
  export interface DeleteFileShareOutput {
    /**
     * The Amazon Resource Name (ARN) of the deleted file share. 
     */
    FileShareARN?: FileShareARN;
  }
  export interface DeleteGatewayInput {
    GatewayARN: GatewayARN;
  }
  export interface DeleteGatewayOutput {
    GatewayARN?: GatewayARN;
  }
  export interface DeleteSnapshotScheduleInput {
    /**
     * The volume which snapshot schedule to delete.
     */
    VolumeARN: VolumeARN;
  }
  export interface DeleteSnapshotScheduleOutput {
    /**
     * The volume which snapshot schedule was deleted.
     */
    VolumeARN?: VolumeARN;
  }
  export interface DeleteTapeArchiveInput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS).
     */
    TapeARN: TapeARN;
  }
  export interface DeleteTapeArchiveOutput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf (VTS).
     */
    TapeARN?: TapeARN;
  }
  export interface DeleteTapeInput {
    /**
     * The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is associated with. Use the ListGateways operation to return a list of gateways for your account and region.
     */
    GatewayARN: GatewayARN;
    /**
     * The Amazon Resource Name (ARN) of the virtual tape to delete.
     */
    TapeARN: TapeARN;
  }
  export interface DeleteTapeOutput {
    /**
     * The Amazon Resource Name (ARN) of the deleted virtual tape.
     */
    TapeARN?: TapeARN;
  }
  export interface DeleteVolumeInput {
    /**
     * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
     */
    VolumeARN: VolumeARN;
  }
  export interface DeleteVolumeOutput {
    /**
     * The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the request.
     */
    VolumeARN?: VolumeARN;
  }
  export interface DescribeBandwidthRateLimitInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeBandwidthRateLimitOutput {
    GatewayARN?: GatewayARN;
    /**
     * The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the upload rate limit is not set.
     */
    AverageUploadRateLimitInBitsPerSec?: BandwidthUploadRateLimit;
    /**
     * The average download bandwidth rate limit in bits per second. This field does not appear in the response if the download rate limit is not set.
     */
    AverageDownloadRateLimitInBitsPerSec?: BandwidthDownloadRateLimit;
  }
  export interface DescribeCacheInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeCacheOutput {
    GatewayARN?: GatewayARN;
    /**
     * An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs from the ListLocalDisks API.
     */
    DiskIds?: DiskIds;
    /**
     * The amount of cache in bytes allocated to the a gateway.
     */
    CacheAllocatedInBytes?: long;
    /**
     * Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The sample is taken at the end of the reporting period.
     */
    CacheUsedPercentage?: double;
    /**
     * The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to AWS. The sample is taken at the end of the reporting period.
     */
    CacheDirtyPercentage?: double;
    /**
     * Percent of application read operations from the file shares that are served from cache. The sample is taken at the end of the reporting period.
     */
    CacheHitPercentage?: double;
    /**
     * Percent of application read operations from the file shares that are not served from cache. The sample is taken at the end of the reporting period.
     */
    CacheMissPercentage?: double;
  }
  export interface DescribeCachediSCSIVolumesInput {
    /**
     * An array of strings where each string represents the Amazon Resource Name (ARN) of a cached volume. All of the specified cached volumes must from the same gateway. Use ListVolumes to get volume ARNs for a gateway.
     */
    VolumeARNs: VolumeARNs;
  }
  export interface DescribeCachediSCSIVolumesOutput {
    /**
     * An array of objects where each object contains metadata about one cached volume.
     */
    CachediSCSIVolumes?: CachediSCSIVolumes;
  }
  export interface DescribeChapCredentialsInput {
    /**
     * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
     */
    TargetARN: TargetARN;
  }
  export interface DescribeChapCredentialsOutput {
    /**
     * An array of ChapInfo objects that represent CHAP credentials. Each object in the array contains CHAP credential information for one target-initiator pair. If no CHAP credentials are set, an empty array is returned. CHAP credential information is provided in a JSON object with the following fields:    InitiatorName: The iSCSI initiator that connects to the target.    SecretToAuthenticateInitiator: The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.    SecretToAuthenticateTarget: The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).    TargetARN: The Amazon Resource Name (ARN) of the storage volume.  
     */
    ChapCredentials?: ChapCredentials;
  }
  export interface DescribeGatewayInformationInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeGatewayInformationOutput {
    GatewayARN?: GatewayARN;
    /**
     * The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
     */
    GatewayId?: GatewayId;
    /**
     * The name you configured for your gateway.
     */
    GatewayName?: string;
    /**
     * A value that indicates the time zone configured for the gateway.
     */
    GatewayTimezone?: GatewayTimezone;
    /**
     * A value that indicates the operating state of the gateway.
     */
    GatewayState?: GatewayState;
    /**
     * A NetworkInterface array that contains descriptions of the gateway network interfaces.
     */
    GatewayNetworkInterfaces?: GatewayNetworkInterfaces;
    /**
     * The type of the gateway.
     */
    GatewayType?: GatewayType;
    /**
     * The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.
     */
    NextUpdateAvailabilityDate?: NextUpdateAvailabilityDate;
    /**
     * The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response.
     */
    LastSoftwareUpdate?: LastSoftwareUpdate;
    /**
     * The ID of the Amazon EC2 instance that was used to launch the gateway.
     */
    Ec2InstanceId?: Ec2InstanceId;
    /**
     * The AWS Region where the Amazon EC2 instance is located.
     */
    Ec2InstanceRegion?: Ec2InstanceRegion;
    /**
     * A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
     */
    Tags?: Tags;
    /**
     * The configuration settings for the virtual private cloud (VPC) endpoint for your gateway. 
     */
    VPCEndpoint?: string;
  }
  export interface DescribeMaintenanceStartTimeInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeMaintenanceStartTimeOutput {
    GatewayARN?: GatewayARN;
    /**
     * The hour component of the maintenance start time represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
     */
    HourOfDay?: HourOfDay;
    /**
     * The minute component of the maintenance start time represented as mm, where mm is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.
     */
    MinuteOfHour?: MinuteOfHour;
    /**
     * An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.
     */
    DayOfWeek?: DayOfWeek;
    /**
     * The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.  This value is only available for tape and volume gateways. 
     */
    DayOfMonth?: DayOfMonth;
    /**
     * A value that indicates the time zone that is set for the gateway. The start time and day of week specified should be in the time zone of the gateway.
     */
    Timezone?: GatewayTimezone;
  }
  export interface DescribeNFSFileSharesInput {
    /**
     * An array containing the Amazon Resource Name (ARN) of each file share to be described. 
     */
    FileShareARNList: FileShareARNList;
  }
  export interface DescribeNFSFileSharesOutput {
    /**
     * An array containing a description for each requested file share. 
     */
    NFSFileShareInfoList?: NFSFileShareInfoList;
  }
  export interface DescribeSMBFileSharesInput {
    /**
     * An array containing the Amazon Resource Name (ARN) of each file share to be described. 
     */
    FileShareARNList: FileShareARNList;
  }
  export interface DescribeSMBFileSharesOutput {
    /**
     * An array containing a description for each requested file share. 
     */
    SMBFileShareInfoList?: SMBFileShareInfoList;
  }
  export interface DescribeSMBSettingsInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeSMBSettingsOutput {
    GatewayARN?: GatewayARN;
    /**
     * The name of the domain that the gateway is joined to.
     */
    DomainName?: DomainName;
    /**
     * This value is true if a password for the guest user “smbguest” is set, and otherwise false.
     */
    SMBGuestPasswordSet?: Boolean;
    /**
     * The type of security strategy that was specified for file gateway. ClientSpecified: if you use this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment.  MandatorySigning: if you use this option, file gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.  MandatoryEncryption: if you use this option, file gateway only allows connections from SMBv3 clients that have encryption enabled. This option is highly recommended for environments that handle sensitive data. This option works with SMB clients on Microsoft Windows 8, Windows Server 2012 or newer. 
     */
    SMBSecurityStrategy?: SMBSecurityStrategy;
  }
  export interface DescribeSnapshotScheduleInput {
    /**
     * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
     */
    VolumeARN: VolumeARN;
  }
  export interface DescribeSnapshotScheduleOutput {
    /**
     * The Amazon Resource Name (ARN) of the volume that was specified in the request.
     */
    VolumeARN?: VolumeARN;
    /**
     * The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
     */
    StartAt?: HourOfDay;
    /**
     * The number of hours between snapshots.
     */
    RecurrenceInHours?: RecurrenceInHours;
    /**
     * The snapshot description.
     */
    Description?: Description;
    /**
     * A value that indicates the time zone of the gateway.
     */
    Timezone?: GatewayTimezone;
    /**
     * A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
     */
    Tags?: Tags;
  }
  export interface DescribeStorediSCSIVolumesInput {
    /**
     * An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the specified stored volumes must from the same gateway. Use ListVolumes to get volume ARNs for a gateway.
     */
    VolumeARNs: VolumeARNs;
  }
  export interface DescribeStorediSCSIVolumesOutput {
    /**
     * Describes a single unit of output from DescribeStorediSCSIVolumes. The following fields are returned:    ChapEnabled: Indicates whether mutual CHAP is enabled for the iSCSI target.    LunNumber: The logical disk number.    NetworkInterfaceId: The network interface ID of the stored volume that initiator use to map the stored volume as an iSCSI target.    NetworkInterfacePort: The port used to communicate with iSCSI targets.    PreservedExistingData: Indicates if when the stored volume was created, existing data on the underlying local disk was preserved.    SourceSnapshotId: If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-1122aabb. Otherwise, this field is not included.    StorediSCSIVolumes: An array of StorediSCSIVolume objects where each object contains metadata about one stored volume.    TargetARN: The Amazon Resource Name (ARN) of the volume target.    VolumeARN: The Amazon Resource Name (ARN) of the stored volume.    VolumeDiskId: The disk ID of the local disk that was specified in the CreateStorediSCSIVolume operation.    VolumeId: The unique identifier of the storage volume, e.g. vol-1122AABB.    VolumeiSCSIAttributes: An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume.    VolumeProgress: Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.    VolumeSizeInBytes: The size of the volume in bytes.    VolumeStatus: One of the VolumeStatus values that indicates the state of the volume.    VolumeType: One of the enumeration values describing the type of the volume. Currently, on STORED volumes are supported.  
     */
    StorediSCSIVolumes?: StorediSCSIVolumes;
  }
  export interface DescribeTapeArchivesInput {
    /**
     * Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.
     */
    TapeARNs?: TapeARNs;
    /**
     * An opaque string that indicates the position at which to begin describing virtual tapes.
     */
    Marker?: Marker;
    /**
     * Specifies that the number of virtual tapes descried be limited to the specified number.
     */
    Limit?: PositiveIntObject;
  }
  export interface DescribeTapeArchivesOutput {
    /**
     * An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the tapes, progress of the description and tape barcode.
     */
    TapeArchives?: TapeArchives;
    /**
     * An opaque string that indicates the position at which the virtual tapes that were fetched for description ended. Use this marker in your next request to fetch the next set of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to describe, this field does not appear in the response.
     */
    Marker?: Marker;
  }
  export interface DescribeTapeRecoveryPointsInput {
    GatewayARN: GatewayARN;
    /**
     * An opaque string that indicates the position at which to begin describing the virtual tape recovery points.
     */
    Marker?: Marker;
    /**
     * Specifies that the number of virtual tape recovery points that are described be limited to the specified number.
     */
    Limit?: PositiveIntObject;
  }
  export interface DescribeTapeRecoveryPointsOutput {
    GatewayARN?: GatewayARN;
    /**
     * An array of TapeRecoveryPointInfos that are available for the specified gateway.
     */
    TapeRecoveryPointInfos?: TapeRecoveryPointInfos;
    /**
     * An opaque string that indicates the position at which the virtual tape recovery points that were listed for description ended. Use this marker in your next request to list the next set of virtual tape recovery points in the list. If there are no more recovery points to describe, this field does not appear in the response.
     */
    Marker?: Marker;
  }
  export interface DescribeTapesInput {
    GatewayARN: GatewayARN;
    /**
     * Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe. If this parameter is not specified, Tape gateway returns a description of all virtual tapes associated with the specified gateway.
     */
    TapeARNs?: TapeARNs;
    /**
     * A marker value, obtained in a previous call to DescribeTapes. This marker indicates which page of results to retrieve.  If not specified, the first page of results is retrieved.
     */
    Marker?: Marker;
    /**
     * Specifies that the number of virtual tapes described be limited to the specified number.  Amazon Web Services may impose its own limit, if this field is not set. 
     */
    Limit?: PositiveIntObject;
  }
  export interface DescribeTapesOutput {
    /**
     * An array of virtual tape descriptions.
     */
    Tapes?: Tapes;
    /**
     * An opaque string which can be used as part of a subsequent DescribeTapes call to retrieve the next page of results. If a response does not contain a marker, then there are no more results to be retrieved.
     */
    Marker?: Marker;
  }
  export interface DescribeUploadBufferInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeUploadBufferOutput {
    GatewayARN?: GatewayARN;
    /**
     * An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.
     */
    DiskIds?: DiskIds;
    /**
     * The total number of bytes being used in the gateway's upload buffer.
     */
    UploadBufferUsedInBytes?: long;
    /**
     * The total number of bytes allocated in the gateway's as upload buffer.
     */
    UploadBufferAllocatedInBytes?: long;
  }
  export interface DescribeVTLDevicesInput {
    GatewayARN: GatewayARN;
    /**
     * An array of strings, where each string represents the Amazon Resource Name (ARN) of a VTL device.  All of the specified VTL devices must be from the same gateway. If no VTL devices are specified, the result will contain all devices on the specified gateway. 
     */
    VTLDeviceARNs?: VTLDeviceARNs;
    /**
     * An opaque string that indicates the position at which to begin describing the VTL devices.
     */
    Marker?: Marker;
    /**
     * Specifies that the number of VTL devices described be limited to the specified number.
     */
    Limit?: PositiveIntObject;
  }
  export interface DescribeVTLDevicesOutput {
    GatewayARN?: GatewayARN;
    /**
     * An array of VTL device objects composed of the Amazon Resource Name(ARN) of the VTL devices.
     */
    VTLDevices?: VTLDevices;
    /**
     * An opaque string that indicates the position at which the VTL devices that were fetched for description ended. Use the marker in your next request to fetch the next set of VTL devices in the list. If there are no more VTL devices to describe, this field does not appear in the response.
     */
    Marker?: Marker;
  }
  export interface DescribeWorkingStorageInput {
    GatewayARN: GatewayARN;
  }
  export interface DescribeWorkingStorageOutput {
    GatewayARN?: GatewayARN;
    /**
     * An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.
     */
    DiskIds?: DiskIds;
    /**
     * The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway, this field returns 0.
     */
    WorkingStorageUsedInBytes?: long;
    /**
     * The total working storage in bytes allocated for the gateway. If no working storage is configured for the gateway, this field returns 0.
     */
    WorkingStorageAllocatedInBytes?: long;
  }
  export type Description = string;
  export interface DetachVolumeInput {
    /**
     * The Amazon Resource Name (ARN) of the volume to detach from the gateway.
     */
    VolumeARN: VolumeARN;
    /**
     * Set to true to forcibly remove the iSCSI connection of the target volume and detach the volume. The default is false. If this value is set to false, you must manually disconnect the iSCSI connection from the target volume.
     */
    ForceDetach?: Boolean;
  }
  export interface DetachVolumeOutput {
    /**
     * The Amazon Resource Name (ARN) of the volume that was detached.
     */
    VolumeARN?: VolumeARN;
  }
  export type DeviceType = string;
  export interface DeviceiSCSIAttributes {
    /**
     * Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or media changer target.
     */
    TargetARN?: TargetARN;
    /**
     * The network interface identifier of the VTL device.
     */
    NetworkInterfaceId?: NetworkInterfaceId;
    /**
     * The port used to communicate with iSCSI VTL device targets.
     */
    NetworkInterfacePort?: integer;
    /**
     * Indicates whether mutual CHAP is enabled for the iSCSI target.
     */
    ChapEnabled?: boolean;
  }
  export interface DisableGatewayInput {
    GatewayARN: GatewayARN;
  }
  export interface DisableGatewayOutput {
    /**
     * The unique Amazon Resource Name (ARN) of the disabled gateway.
     */
    GatewayARN?: GatewayARN;
  }
  export interface Disk {
    /**
     * The unique device ID or other distinguishing data that identifies a local disk.
     */
    DiskId?: DiskId;
    /**
     * The path of a local disk in the gateway virtual machine (VM).
     */
    DiskPath?: string;
    /**
     * The device node of a local disk as assigned by the virtualization environment.
     */
    DiskNode?: string;
    /**
     * A value that represents the status of a local disk.
     */
    DiskStatus?: string;
    /**
     * The local disk size in bytes.
     */
    DiskSizeInBytes?: long;
    DiskAllocationType?: DiskAllocationType;
    /**
     * The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the response if the local disk is not defined as an iSCSI target. The format of this field is targetIqn::LUNNumber::region-volumeId. 
     */
    DiskAllocationResource?: string;
    DiskAttributeList?: DiskAttributeList;
  }
  export type DiskAllocationType = string;
  export type DiskAttribute = string;
  export type DiskAttributeList = DiskAttribute[];
  export type DiskId = string;
  export type DiskIds = DiskId[];
  export type Disks = Disk[];
  export type DomainName = string;
  export type DomainUserName = string;
  export type DomainUserPassword = string;
  export type DoubleObject = number;
  export type Ec2InstanceId = string;
  export type Ec2InstanceRegion = string;
  export type FileShareARN = string;
  export type FileShareARNList = FileShareARN[];
  export type FileShareClientList = IPV4AddressCIDR[];
  export type FileShareId = string;
  export interface FileShareInfo {
    FileShareType?: FileShareType;
    FileShareARN?: FileShareARN;
    FileShareId?: FileShareId;
    FileShareStatus?: FileShareStatus;
    GatewayARN?: GatewayARN;
  }
  export type FileShareInfoList = FileShareInfo[];
  export type FileShareStatus = string;
  export type FileShareType = "NFS"|"SMB";
  export type FileShareUser = string;
  export type FileShareUserList = FileShareUser[];
  export type Folder = string;
  export type FolderList = Folder[];
  export type GatewayARN = string;
  export type GatewayId = string;
  export interface GatewayInfo {
    /**
     * The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
     */
    GatewayId?: GatewayId;
    /**
     * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and region.
     */
    GatewayARN?: GatewayARN;
    /**
     * The type of the gateway.
     */
    GatewayType?: GatewayType;
    /**
     * The state of the gateway. Valid Values: DISABLED or ACTIVE
     */
    GatewayOperationalState?: GatewayOperationalState;
    /**
     * The name of the gateway.
     */
    GatewayName?: string;
    /**
     * The ID of the Amazon EC2 instance that was used to launch the gateway.
     */
    Ec2InstanceId?: Ec2InstanceId;
    /**
     * The AWS Region where the Amazon EC2 instance is located.
     */
    Ec2InstanceRegion?: Ec2InstanceRegion;
  }
  export type GatewayName = string;
  export type GatewayNetworkInterfaces = NetworkInterface[];
  export type GatewayOperationalState = string;
  export type GatewayState = string;
  export type GatewayTimezone = string;
  export type GatewayType = string;
  export type Gateways = GatewayInfo[];
  export type Host = string;
  export type Hosts = Host[];
  export type HourOfDay = number;
  export type IPV4AddressCIDR = string;
  export type Initiator = string;
  export type Initiators = Initiator[];
  export type IqnName = string;
  export interface JoinDomainInput {
    /**
     * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and region.
     */
    GatewayARN: GatewayARN;
    /**
     * The name of the domain that you want the gateway to join.
     */
    DomainName: DomainName;
    /**
     * The organizational unit (OU) is a container in an Active Directory that can hold users, groups, computers, and other OUs and this parameter specifies the OU that the gateway will join within the AD domain.
     */
    OrganizationalUnit?: OrganizationalUnit;
    /**
     * List of IPv4 addresses, NetBIOS names, or host names of your domain server. If you need to specify the port number include it after the colon (“:”). For example, mydc.mydomain.com:389.
     */
    DomainControllers?: Hosts;
    /**
     * Sets the user name of user who has permission to add the gateway to the Active Directory domain.
     */
    UserName: DomainUserName;
    /**
     * Sets the password of the user who has permission to add the gateway to the Active Directory domain.
     */
    Password: DomainUserPassword;
  }
  export interface JoinDomainOutput {
    /**
     * The unique Amazon Resource Name (ARN) of the gateway that joined the domain.
     */
    GatewayARN?: GatewayARN;
  }
  export type KMSKey = string;
  export type LastSoftwareUpdate = string;
  export interface ListFileSharesInput {
    /**
     * The Amazon resource Name (ARN) of the gateway whose file shares you want to list. If this field is not present, all file shares under your account are listed.
     */
    GatewayARN?: GatewayARN;
    /**
     * The maximum number of file shares to return in the response. The value must be an integer with a value greater than zero. Optional.
     */
    Limit?: PositiveIntObject;
    /**
     * Opaque pagination token returned from a previous ListFileShares operation. If present, Marker specifies where to continue the list from after a previous call to ListFileShares. Optional.
     */
    Marker?: Marker;
  }
  export interface ListFileSharesOutput {
    /**
     * If the request includes Marker, the response returns that value in this field. 
     */
    Marker?: Marker;
    /**
     * If a value is present, there are more file shares to return. In a subsequent request, use NextMarker as the value for Marker to retrieve the next set of file shares. 
     */
    NextMarker?: Marker;
    /**
     * An array of information about the file gateway's file shares. 
     */
    FileShareInfoList?: FileShareInfoList;
  }
  export interface ListGatewaysInput {
    /**
     * An opaque string that indicates the position at which to begin the returned list of gateways.
     */
    Marker?: Marker;
    /**
     * Specifies that the list of gateways returned be limited to the specified number of items.
     */
    Limit?: PositiveIntObject;
  }
  export interface ListGatewaysOutput {
    /**
     * An array of GatewayInfo objects.
     */
    Gateways?: Gateways;
    /**
     * Use the marker in your next request to fetch the next set of gateways in the list. If there are no more gateways to list, this field does not appear in the response.
     */
    Marker?: Marker;
  }
  export interface ListLocalDisksInput {
    GatewayARN: GatewayARN;
  }
  export interface ListLocalDisksOutput {
    GatewayARN?: GatewayARN;
    /**
     * A JSON object containing the following fields:    ListLocalDisksOutput$Disks   
     */
    Disks?: Disks;
  }
  export interface ListTagsForResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource for which you want to list tags.
     */
    ResourceARN: ResourceARN;
    /**
     * An opaque string that indicates the position at which to begin returning the list of tags.
     */
    Marker?: Marker;
    /**
     * Specifies that the list of tags returned be limited to the specified number of items.
     */
    Limit?: PositiveIntObject;
  }
  export interface ListTagsForResourceOutput {
    /**
     * he Amazon Resource Name (ARN) of the resource for which you want to list tags.
     */
    ResourceARN?: ResourceARN;
    /**
     * An opaque string that indicates the position at which to stop returning the list of tags.
     */
    Marker?: Marker;
    /**
     * An array that contains the tags for the specified resource.
     */
    Tags?: Tags;
  }
  export interface ListTapesInput {
    TapeARNs?: TapeARNs;
    /**
     * A string that indicates the position at which to begin the returned list of tapes.
     */
    Marker?: Marker;
    /**
     * An optional number limit for the tapes in the list returned by this call.
     */
    Limit?: PositiveIntObject;
  }
  export interface ListTapesOutput {
    TapeInfos?: TapeInfos;
    /**
     * A string that indicates the position at which to begin returning the next list of tapes. Use the marker in your next request to continue pagination of tapes. If there are no more tapes to list, this element does not appear in the response body.
     */
    Marker?: Marker;
  }
  export interface ListVolumeInitiatorsInput {
    /**
     * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes for the gateway.
     */
    VolumeARN: VolumeARN;
  }
  export interface ListVolumeInitiatorsOutput {
    /**
     * The host names and port numbers of all iSCSI initiators that are connected to the gateway.
     */
    Initiators?: Initiators;
  }
  export interface ListVolumeRecoveryPointsInput {
    GatewayARN: GatewayARN;
  }
  export interface ListVolumeRecoveryPointsOutput {
    GatewayARN?: GatewayARN;
    /**
     * An array of VolumeRecoveryPointInfo objects.
     */
    VolumeRecoveryPointInfos?: VolumeRecoveryPointInfos;
  }
  export interface ListVolumesInput {
    GatewayARN?: GatewayARN;
    /**
     * A string that indicates the position at which to begin the returned list of volumes. Obtain the marker from the response of a previous List iSCSI Volumes request.
     */
    Marker?: Marker;
    /**
     * Specifies that the list of volumes returned be limited to the specified number of items.
     */
    Limit?: PositiveIntObject;
  }
  export interface ListVolumesOutput {
    GatewayARN?: GatewayARN;
    /**
     * Use the marker in your next request to continue pagination of iSCSI volumes. If there are no more volumes to list, this field does not appear in the response body.
     */
    Marker?: Marker;
    /**
     * An array of VolumeInfo objects, where each object describes an iSCSI volume. If no volumes are defined for the gateway, then VolumeInfos is an empty array "[]".
     */
    VolumeInfos?: VolumeInfos;
  }
  export type LocalConsolePassword = string;
  export type LocationARN = string;
  export type Marker = string;
  export type MediumChangerType = string;
  export type MinuteOfHour = number;
  export interface NFSFileShareDefaults {
    /**
     * The Unix file mode in the form "nnnn". For example, "0666" represents the default file mode inside the file share. The default value is 0666. 
     */
    FileMode?: PermissionMode;
    /**
     * The Unix directory mode in the form "nnnn". For example, "0666" represents the default access mode for all directories inside the file share. The default value is 0777.
     */
    DirectoryMode?: PermissionMode;
    /**
     * The default group ID for the file share (unless the files have another group ID specified). The default value is nfsnobody. 
     */
    GroupId?: PermissionId;
    /**
     * The default owner ID for files in the file share (unless the files have another owner ID specified). The default value is nfsnobody. 
     */
    OwnerId?: PermissionId;
  }
  export interface NFSFileShareInfo {
    NFSFileShareDefaults?: NFSFileShareDefaults;
    FileShareARN?: FileShareARN;
    FileShareId?: FileShareId;
    FileShareStatus?: FileShareStatus;
    GatewayARN?: GatewayARN;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. 
     */
    KMSEncrypted?: boolean;
    KMSKey?: KMSKey;
    Path?: Path;
    Role?: Role;
    LocationARN?: LocationARN;
    /**
     * The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are S3_STANDARD, S3_STANDARD_IA, or S3_ONEZONE_IA. If this field is not populated, the default value S3_STANDARD is used. Optional.
     */
    DefaultStorageClass?: StorageClass;
    ObjectACL?: ObjectACL;
    ClientList?: FileShareClientList;
    Squash?: Squash;
    /**
     * A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.
     */
    ReadOnly?: Boolean;
    /**
     * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.
     */
    GuessMIMETypeEnabled?: Boolean;
    /**
     * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.   RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. 
     */
    RequesterPays?: Boolean;
    /**
     * A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
     */
    Tags?: Tags;
  }
  export type NFSFileShareInfoList = NFSFileShareInfo[];
  export interface NetworkInterface {
    /**
     * The Internet Protocol version 4 (IPv4) address of the interface.
     */
    Ipv4Address?: string;
    /**
     * The Media Access Control (MAC) address of the interface.  This is currently unsupported and will not be returned in output. 
     */
    MacAddress?: string;
    /**
     * The Internet Protocol version 6 (IPv6) address of the interface. Currently not supported.
     */
    Ipv6Address?: string;
  }
  export type NetworkInterfaceId = string;
  export type NextUpdateAvailabilityDate = string;
  export type NotificationId = string;
  export interface NotifyWhenUploadedInput {
    FileShareARN: FileShareARN;
  }
  export interface NotifyWhenUploadedOutput {
    FileShareARN?: FileShareARN;
    NotificationId?: NotificationId;
  }
  export type NumTapesToCreate = number;
  export type ObjectACL = "private"|"public-read"|"public-read-write"|"authenticated-read"|"bucket-owner-read"|"bucket-owner-full-control"|"aws-exec-read";
  export type OrganizationalUnit = string;
  export type Path = string;
  export type PermissionId = number;
  export type PermissionMode = string;
  export type PoolId = string;
  export type PositiveIntObject = number;
  export type RecurrenceInHours = number;
  export interface RefreshCacheInput {
    /**
     * The Amazon Resource Name (ARN) of the file share you want to refresh.
     */
    FileShareARN: FileShareARN;
    /**
     * A comma-separated list of the paths of folders to refresh in the cache. The default is ["/"]. The default refreshes objects and folders at the root of the Amazon S3 bucket. If Recursive is set to "true", the entire S3 bucket that the file share has access to is refreshed.
     */
    FolderList?: FolderList;
    /**
     * A value that specifies whether to recursively refresh folders in the cache. The refresh includes folders that were in the cache the last time the gateway listed the folder's contents. If this value set to "true", each folder that is listed in FolderList is recursively updated. Otherwise, subfolders listed in FolderList are not refreshed. Only objects that are in folders listed directly under FolderList are found and used for the update. The default is "true".
     */
    Recursive?: Boolean;
  }
  export interface RefreshCacheOutput {
    FileShareARN?: FileShareARN;
    NotificationId?: NotificationId;
  }
  export type RegionId = string;
  export interface RemoveTagsFromResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource you want to remove the tags from.
     */
    ResourceARN: ResourceARN;
    /**
     * The keys of the tags you want to remove from the specified resource. A tag is composed of a key/value pair.
     */
    TagKeys: TagKeys;
  }
  export interface RemoveTagsFromResourceOutput {
    /**
     * The Amazon Resource Name (ARN) of the resource that the tags were removed from.
     */
    ResourceARN?: ResourceARN;
  }
  export interface ResetCacheInput {
    GatewayARN: GatewayARN;
  }
  export interface ResetCacheOutput {
    GatewayARN?: GatewayARN;
  }
  export type ResourceARN = string;
  export interface RetrieveTapeArchiveInput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual tape shelf (VTS).
     */
    TapeARN: TapeARN;
    /**
     * The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to. Use the ListGateways operation to return a list of gateways for your account and region. You retrieve archived virtual tapes to only one gateway and the gateway must be a tape gateway.
     */
    GatewayARN: GatewayARN;
  }
  export interface RetrieveTapeArchiveOutput {
    /**
     * The Amazon Resource Name (ARN) of the retrieved virtual tape.
     */
    TapeARN?: TapeARN;
  }
  export interface RetrieveTapeRecoveryPointInput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery point.
     */
    TapeARN: TapeARN;
    GatewayARN: GatewayARN;
  }
  export interface RetrieveTapeRecoveryPointOutput {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.
     */
    TapeARN?: TapeARN;
  }
  export type Role = string;
  export interface SMBFileShareInfo {
    FileShareARN?: FileShareARN;
    FileShareId?: FileShareId;
    FileShareStatus?: FileShareStatus;
    GatewayARN?: GatewayARN;
    /**
     * True to use Amazon S3 server-side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. 
     */
    KMSEncrypted?: boolean;
    KMSKey?: KMSKey;
    /**
     * The file share path used by the SMB client to identify the mount point.
     */
    Path?: Path;
    Role?: Role;
    LocationARN?: LocationARN;
    /**
     * The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are S3_STANDARD, S3_STANDARD_IA, or S3_ONEZONE_IA. If this field is not populated, the default value S3_STANDARD is used. Optional.
     */
    DefaultStorageClass?: StorageClass;
    ObjectACL?: ObjectACL;
    /**
     * A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.
     */
    ReadOnly?: Boolean;
    /**
     * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.
     */
    GuessMIMETypeEnabled?: Boolean;
    /**
     * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.   RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. 
     */
    RequesterPays?: Boolean;
    /**
     * If this value is set to "true", indicates that ACL (access control list) is enabled on the SMB file share. If it is set to "false", it indicates that file and directory permissions are mapped to the POSIX permission. For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html in the Storage Gateway User Guide.
     */
    SMBACLEnabled?: Boolean;
    /**
     * A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    AdminUserList?: FileShareUserList;
    /**
     * A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    ValidUserList?: FileShareUserList;
    /**
     * A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    InvalidUserList?: FileShareUserList;
    Authentication?: Authentication;
    /**
     * A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
     */
    Tags?: Tags;
  }
  export type SMBFileShareInfoList = SMBFileShareInfo[];
  export type SMBGuestPassword = string;
  export type SMBSecurityStrategy = "ClientSpecified"|"MandatorySigning"|"MandatoryEncryption";
  export interface SetLocalConsolePasswordInput {
    GatewayARN: GatewayARN;
    /**
     * The password you want to set for your VM local console.
     */
    LocalConsolePassword: LocalConsolePassword;
  }
  export interface SetLocalConsolePasswordOutput {
    GatewayARN?: GatewayARN;
  }
  export interface SetSMBGuestPasswordInput {
    /**
     * The Amazon Resource Name (ARN) of the file gateway the SMB file share is associated with.
     */
    GatewayARN: GatewayARN;
    /**
     * The password that you want to set for your SMB Server.
     */
    Password: SMBGuestPassword;
  }
  export interface SetSMBGuestPasswordOutput {
    GatewayARN?: GatewayARN;
  }
  export interface ShutdownGatewayInput {
    GatewayARN: GatewayARN;
  }
  export interface ShutdownGatewayOutput {
    GatewayARN?: GatewayARN;
  }
  export type SnapshotDescription = string;
  export type SnapshotId = string;
  export type Squash = string;
  export interface StartGatewayInput {
    GatewayARN: GatewayARN;
  }
  export interface StartGatewayOutput {
    GatewayARN?: GatewayARN;
  }
  export type StorageClass = string;
  export interface StorediSCSIVolume {
    /**
     * The Amazon Resource Name (ARN) of the storage volume.
     */
    VolumeARN?: VolumeARN;
    /**
     * The unique identifier of the volume, e.g. vol-AE4B946D.
     */
    VolumeId?: VolumeId;
    /**
     * One of the VolumeType enumeration values describing the type of the volume.
     */
    VolumeType?: VolumeType;
    /**
     * One of the VolumeStatus values that indicates the state of the storage volume.
     */
    VolumeStatus?: VolumeStatus;
    /**
     * A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway. For more information, see Moving Your Volumes to a Different Gateway.
     */
    VolumeAttachmentStatus?: VolumeAttachmentStatus;
    /**
     * The size of the volume in bytes.
     */
    VolumeSizeInBytes?: long;
    /**
     * Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.
     */
    VolumeProgress?: DoubleObject;
    /**
     * The ID of the local disk that was specified in the CreateStorediSCSIVolume operation.
     */
    VolumeDiskId?: DiskId;
    /**
     * If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.
     */
    SourceSnapshotId?: SnapshotId;
    /**
     * Indicates if when the stored volume was created, existing data on the underlying local disk was preserved.  Valid Values: true, false
     */
    PreservedExistingData?: boolean;
    /**
     * An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume.
     */
    VolumeiSCSIAttributes?: VolumeiSCSIAttributes;
    /**
     * The date the volume was created. Volumes created prior to March 28, 2017 don’t have this time stamp.
     */
    CreatedDate?: CreatedDate;
    /**
     * The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. VolumeUsedInBytes is different from the compressed size of the volume, which is the value that is used to calculate your bill.  This value is not available for volumes created prior to May 13, 2015, until you store data on the volume. 
     */
    VolumeUsedInBytes?: VolumeUsedInBytes;
    KMSKey?: KMSKey;
    /**
     * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
     */
    TargetName?: TargetName;
  }
  export type StorediSCSIVolumes = StorediSCSIVolume[];
  export interface Tag {
    /**
     * Tag key (String). The key can't start with aws:. 
     */
    Key: TagKey;
    /**
     * Value of the tag key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagValue = string;
  export type Tags = Tag[];
  export interface Tape {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape.
     */
    TapeARN?: TapeARN;
    /**
     * The barcode that identifies a specific virtual tape.
     */
    TapeBarcode?: TapeBarcode;
    /**
     * The date the virtual tape was created.
     */
    TapeCreatedDate?: Time;
    /**
     * The size, in bytes, of the virtual tape capacity.
     */
    TapeSizeInBytes?: TapeSize;
    /**
     * The current state of the virtual tape.
     */
    TapeStatus?: TapeStatus;
    /**
     * The virtual tape library (VTL) device that the virtual tape is associated with.
     */
    VTLDevice?: VTLDeviceARN;
    /**
     * For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete. Range: 0 (not started) to 100 (complete).
     */
    Progress?: DoubleObject;
    /**
     * The size, in bytes, of data stored on the virtual tape.  This value is not available for tapes created prior to May 13, 2015. 
     */
    TapeUsedInBytes?: TapeUsage;
    KMSKey?: KMSKey;
    /**
     * The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
     */
    PoolId?: PoolId;
  }
  export type TapeARN = string;
  export type TapeARNs = TapeARN[];
  export interface TapeArchive {
    /**
     * The Amazon Resource Name (ARN) of an archived virtual tape.
     */
    TapeARN?: TapeARN;
    /**
     * The barcode that identifies the archived virtual tape.
     */
    TapeBarcode?: TapeBarcode;
    /**
     * The date the virtual tape was created.
     */
    TapeCreatedDate?: Time;
    /**
     * The size, in bytes, of the archived virtual tape.
     */
    TapeSizeInBytes?: TapeSize;
    /**
     * The time that the archiving of the virtual tape was completed. The default time stamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
     */
    CompletionTime?: Time;
    /**
     * The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to. The virtual tape is retrieved from the virtual tape shelf (VTS).
     */
    RetrievedTo?: GatewayARN;
    /**
     * The current state of the archived virtual tape.
     */
    TapeStatus?: TapeArchiveStatus;
    /**
     * The size, in bytes, of data stored on the virtual tape.  This value is not available for tapes created prior to May 13, 2015. 
     */
    TapeUsedInBytes?: TapeUsage;
    KMSKey?: KMSKey;
    /**
     * The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
     */
    PoolId?: PoolId;
  }
  export type TapeArchiveStatus = string;
  export type TapeArchives = TapeArchive[];
  export type TapeBarcode = string;
  export type TapeBarcodePrefix = string;
  export type TapeDriveType = string;
  export interface TapeInfo {
    /**
     * The Amazon Resource Name (ARN) of a virtual tape.
     */
    TapeARN?: TapeARN;
    /**
     * The barcode that identifies a specific virtual tape.
     */
    TapeBarcode?: TapeBarcode;
    /**
     * The size, in bytes, of a virtual tape.
     */
    TapeSizeInBytes?: TapeSize;
    /**
     * The status of the tape.
     */
    TapeStatus?: TapeStatus;
    /**
     * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and region.
     */
    GatewayARN?: GatewayARN;
    /**
     * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool. Valid values: "GLACIER", "DEEP_ARCHIVE"
     */
    PoolId?: PoolId;
  }
  export type TapeInfos = TapeInfo[];
  export interface TapeRecoveryPointInfo {
    /**
     * The Amazon Resource Name (ARN) of the virtual tape.
     */
    TapeARN?: TapeARN;
    /**
     * The time when the point-in-time view of the virtual tape was replicated for later recovery. The default time stamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
     */
    TapeRecoveryPointTime?: Time;
    /**
     * The size, in bytes, of the virtual tapes to recover.
     */
    TapeSizeInBytes?: TapeSize;
    /**
     * The status of the virtual tapes.
     */
    TapeStatus?: TapeRecoveryPointStatus;
  }
  export type TapeRecoveryPointInfos = TapeRecoveryPointInfo[];
  export type TapeRecoveryPointStatus = string;
  export type TapeSize = number;
  export type TapeStatus = string;
  export type TapeUsage = number;
  export type Tapes = Tape[];
  export type TargetARN = string;
  export type TargetName = string;
  export type Time = Date;
  export interface UpdateBandwidthRateLimitInput {
    GatewayARN: GatewayARN;
    /**
     * The average upload bandwidth rate limit in bits per second.
     */
    AverageUploadRateLimitInBitsPerSec?: BandwidthUploadRateLimit;
    /**
     * The average download bandwidth rate limit in bits per second.
     */
    AverageDownloadRateLimitInBitsPerSec?: BandwidthDownloadRateLimit;
  }
  export interface UpdateBandwidthRateLimitOutput {
    GatewayARN?: GatewayARN;
  }
  export interface UpdateChapCredentialsInput {
    /**
     * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return the TargetARN for specified VolumeARN.
     */
    TargetARN: TargetARN;
    /**
     * The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.  The secret key must be between 12 and 16 bytes when encoded in UTF-8. 
     */
    SecretToAuthenticateInitiator: ChapSecret;
    /**
     * The iSCSI initiator that connects to the target.
     */
    InitiatorName: IqnName;
    /**
     * The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client). Byte constraints: Minimum bytes of 12. Maximum bytes of 16.  The secret key must be between 12 and 16 bytes when encoded in UTF-8. 
     */
    SecretToAuthenticateTarget?: ChapSecret;
  }
  export interface UpdateChapCredentialsOutput {
    /**
     * The Amazon Resource Name (ARN) of the target. This is the same target specified in the request.
     */
    TargetARN?: TargetARN;
    /**
     * The iSCSI initiator that connects to the target. This is the same initiator name specified in the request.
     */
    InitiatorName?: IqnName;
  }
  export interface UpdateGatewayInformationInput {
    GatewayARN: GatewayARN;
    GatewayName?: GatewayName;
    /**
     * A value that indicates the time zone of the gateway.
     */
    GatewayTimezone?: GatewayTimezone;
  }
  export interface UpdateGatewayInformationOutput {
    GatewayARN?: GatewayARN;
    /**
     * The name you configured for your gateway.
     */
    GatewayName?: string;
  }
  export interface UpdateGatewaySoftwareNowInput {
    GatewayARN: GatewayARN;
  }
  export interface UpdateGatewaySoftwareNowOutput {
    GatewayARN?: GatewayARN;
  }
  export interface UpdateMaintenanceStartTimeInput {
    GatewayARN: GatewayARN;
    /**
     * The hour component of the maintenance start time represented as hh, where hh is the hour (00 to 23). The hour of the day is in the time zone of the gateway.
     */
    HourOfDay: HourOfDay;
    /**
     * The minute component of the maintenance start time represented as mm, where mm is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.
     */
    MinuteOfHour: MinuteOfHour;
    /**
     * The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.
     */
    DayOfWeek?: DayOfWeek;
    /**
     * The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.  This value is only available for tape and volume gateways. 
     */
    DayOfMonth?: DayOfMonth;
  }
  export interface UpdateMaintenanceStartTimeOutput {
    GatewayARN?: GatewayARN;
  }
  export interface UpdateNFSFileShareInput {
    /**
     * The Amazon Resource Name (ARN) of the file share to be updated. 
     */
    FileShareARN: FileShareARN;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. 
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional. 
     */
    KMSKey?: KMSKey;
    /**
     * The default values for the file share. Optional.
     */
    NFSFileShareDefaults?: NFSFileShareDefaults;
    /**
     * The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are S3_STANDARD, S3_STANDARD_IA, or S3_ONEZONE_IA. If this field is not populated, the default value S3_STANDARD is used. Optional.
     */
    DefaultStorageClass?: StorageClass;
    /**
     * A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private".
     */
    ObjectACL?: ObjectACL;
    /**
     * The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks.
     */
    ClientList?: FileShareClientList;
    /**
     * The user mapped to anonymous user. Valid options are the following:    RootSquash - Only root is mapped to anonymous user.    NoSquash - No one is mapped to anonymous user    AllSquash - Everyone is mapped to anonymous user.  
     */
    Squash?: Squash;
    /**
     * A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.
     */
    ReadOnly?: Boolean;
    /**
     * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.
     */
    GuessMIMETypeEnabled?: Boolean;
    /**
     * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.   RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. 
     */
    RequesterPays?: Boolean;
  }
  export interface UpdateNFSFileShareOutput {
    /**
     * The Amazon Resource Name (ARN) of the updated file share. 
     */
    FileShareARN?: FileShareARN;
  }
  export interface UpdateSMBFileShareInput {
    /**
     * The Amazon Resource Name (ARN) of the SMB file share that you want to update.
     */
    FileShareARN: FileShareARN;
    /**
     * True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.
     */
    KMSEncrypted?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.
     */
    KMSKey?: KMSKey;
    /**
     * The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are S3_STANDARD, S3_STANDARD_IA, or S3_ONEZONE_IA. If this field is not populated, the default value S3_STANDARD is used. Optional.
     */
    DefaultStorageClass?: StorageClass;
    /**
     * A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private".
     */
    ObjectACL?: ObjectACL;
    /**
     * A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.
     */
    ReadOnly?: Boolean;
    /**
     * A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.
     */
    GuessMIMETypeEnabled?: Boolean;
    /**
     * A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.   RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. 
     */
    RequesterPays?: Boolean;
    /**
     * Set this value to "true to enable ACL (access control list) on the SMB file share. Set it to "false" to map file and directory permissions to the POSIX permissions. For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.htmlin the Storage Gateway User Guide.
     */
    SMBACLEnabled?: Boolean;
    /**
     * A list of users in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    AdminUserList?: FileShareUserList;
    /**
     * A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    ValidUserList?: FileShareUserList;
    /**
     * A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example @group1. Can only be set if Authentication is set to ActiveDirectory.
     */
    InvalidUserList?: FileShareUserList;
  }
  export interface UpdateSMBFileShareOutput {
    /**
     * The Amazon Resource Name (ARN) of the updated SMB file share. 
     */
    FileShareARN?: FileShareARN;
  }
  export interface UpdateSMBSecurityStrategyInput {
    GatewayARN: GatewayARN;
    /**
     * Specifies the type of security strategy. ClientSpecified: if you use this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment.  MandatorySigning: if you use this option, file gateway only allows connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008 or newer.  MandatoryEncryption: if you use this option, file gateway only allows connections from SMBv3 clients that have encryption enabled. This option is highly recommended for environments that handle sensitive data. This option works with SMB clients on Microsoft Windows 8, Windows Server 2012 or newer. 
     */
    SMBSecurityStrategy: SMBSecurityStrategy;
  }
  export interface UpdateSMBSecurityStrategyOutput {
    GatewayARN?: GatewayARN;
  }
  export interface UpdateSnapshotScheduleInput {
    /**
     * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
     */
    VolumeARN: VolumeARN;
    /**
     * The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
     */
    StartAt: HourOfDay;
    /**
     * Frequency of snapshots. Specify the number of hours between snapshots.
     */
    RecurrenceInHours: RecurrenceInHours;
    /**
     * Optional description of the snapshot that overwrites the existing description.
     */
    Description?: Description;
    /**
     * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair.  Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256. 
     */
    Tags?: Tags;
  }
  export interface UpdateSnapshotScheduleOutput {
    /**
     * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
     */
    VolumeARN?: VolumeARN;
  }
  export interface UpdateVTLDeviceTypeInput {
    /**
     * The Amazon Resource Name (ARN) of the medium changer you want to select.
     */
    VTLDeviceARN: VTLDeviceARN;
    /**
     * The type of medium changer you want to select.  Valid Values: "STK-L700", "AWS-Gateway-VTL"
     */
    DeviceType: DeviceType;
  }
  export interface UpdateVTLDeviceTypeOutput {
    /**
     * The Amazon Resource Name (ARN) of the medium changer you have selected.
     */
    VTLDeviceARN?: VTLDeviceARN;
  }
  export interface VTLDevice {
    /**
     * Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).
     */
    VTLDeviceARN?: VTLDeviceARN;
    /**
     * Specifies the type of device that the VTL device emulates.
     */
    VTLDeviceType?: VTLDeviceType;
    /**
     * Specifies the vendor of the device that the VTL device object emulates.
     */
    VTLDeviceVendor?: VTLDeviceVendor;
    /**
     * Specifies the model number of device that the VTL device emulates.
     */
    VTLDeviceProductIdentifier?: VTLDeviceProductIdentifier;
    /**
     * A list of iSCSI information about a VTL device.
     */
    DeviceiSCSIAttributes?: DeviceiSCSIAttributes;
  }
  export type VTLDeviceARN = string;
  export type VTLDeviceARNs = VTLDeviceARN[];
  export type VTLDeviceProductIdentifier = string;
  export type VTLDeviceType = string;
  export type VTLDeviceVendor = string;
  export type VTLDevices = VTLDevice[];
  export type VolumeARN = string;
  export type VolumeARNs = VolumeARN[];
  export type VolumeAttachmentStatus = string;
  export type VolumeId = string;
  export interface VolumeInfo {
    /**
     * The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN:  arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB   Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
     */
    VolumeARN?: VolumeARN;
    /**
     * The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN), which you use as input for other operations.  Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
     */
    VolumeId?: VolumeId;
    GatewayARN?: GatewayARN;
    /**
     * The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.  Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
     */
    GatewayId?: GatewayId;
    /**
     * One of the VolumeType enumeration values describing the type of the volume.
     */
    VolumeType?: VolumeType;
    /**
     * The size of the volume in bytes. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
     */
    VolumeSizeInBytes?: long;
    /**
     * One of the VolumeStatus values that indicates the state of the storage volume. 
     */
    VolumeAttachmentStatus?: VolumeAttachmentStatus;
  }
  export type VolumeInfos = VolumeInfo[];
  export interface VolumeRecoveryPointInfo {
    /**
     * The Amazon Resource Name (ARN) of the volume target.
     */
    VolumeARN?: VolumeARN;
    /**
     * The size of the volume in bytes.
     */
    VolumeSizeInBytes?: long;
    /**
     * The size of the data stored on the volume in bytes.  This value is not available for volumes created prior to May 13, 2015, until you store data on the volume. 
     */
    VolumeUsageInBytes?: long;
    /**
     * The time the recovery point was taken.
     */
    VolumeRecoveryPointTime?: string;
  }
  export type VolumeRecoveryPointInfos = VolumeRecoveryPointInfo[];
  export type VolumeStatus = string;
  export type VolumeType = string;
  export type VolumeUsedInBytes = number;
  export interface VolumeiSCSIAttributes {
    /**
     * The Amazon Resource Name (ARN) of the volume target.
     */
    TargetARN?: TargetARN;
    /**
     * The network interface identifier.
     */
    NetworkInterfaceId?: NetworkInterfaceId;
    /**
     * The port used to communicate with iSCSI targets.
     */
    NetworkInterfacePort?: integer;
    /**
     * The logical disk number.
     */
    LunNumber?: PositiveIntObject;
    /**
     * Indicates whether mutual CHAP is enabled for the iSCSI target.
     */
    ChapEnabled?: boolean;
  }
  export type double = number;
  export type integer = number;
  export type long = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-06-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the StorageGateway client.
   */
  export import Types = StorageGateway;
}
export = StorageGateway;
