import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ACMPCA extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ACMPCA.Types.ClientConfiguration)
  config: Config & ACMPCA.Types.ClientConfiguration;
  /**
   * Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, the certificate revocation list (CRL) configuration, the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.
   */
  createCertificateAuthority(params: ACMPCA.Types.CreateCertificateAuthorityRequest, callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityResponse, AWSError>;
  /**
   * Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, the certificate revocation list (CRL) configuration, the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.
   */
  createCertificateAuthority(callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityResponse, AWSError>;
  /**
   * Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The IssueCertificate and RevokeCertificate actions use the private key.
   */
  createCertificateAuthorityAuditReport(params: ACMPCA.Types.CreateCertificateAuthorityAuditReportRequest, callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The IssueCertificate and RevokeCertificate actions use the private key.
   */
  createCertificateAuthorityAuditReport(callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Assigns permissions from a private CA to a designated AWS service. Services are specified by their service principals and can be given permission to create and retrieve certificates on a private CA. Services can also be given permission to list the active permissions that the private CA has granted. For ACM to automatically renew your private CA's certificates, you must assign all possible permissions from the CA to the ACM service principal. At this time, you can only assign permissions to ACM (acm.amazonaws.com). Permissions can be revoked with the DeletePermission action and listed with the ListPermissions action.
   */
  createPermission(params: ACMPCA.Types.CreatePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns permissions from a private CA to a designated AWS service. Services are specified by their service principals and can be given permission to create and retrieve certificates on a private CA. Services can also be given permission to list the active permissions that the private CA has granted. For ACM to automatically renew your private CA's certificates, you must assign all possible permissions from the CA to the ACM service principal. At this time, you can only assign permissions to ACM (acm.amazonaws.com). Permissions can be revoked with the DeletePermission action and listed with the ListPermissions action.
   */
  createPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the ListCertificateAuthorities action.   Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.  Before you can delete a CA that you have created and activated, you must disable it. To do this, call the UpdateCertificateAuthority action and set the CertificateAuthorityStatus parameter to DISABLED.  Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is CREATING). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into ACM Private CA (that is, the status of the CA is PENDING_CERTIFICATE).  When you successfully call DeleteCertificateAuthority, the CA's status changes to DELETED. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the PermanentDeletionTimeInDays parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The DescribeCertificateAuthority action returns the time remaining in the restoration window of a private CA in the DELETED state. To restore an eligible CA, call the RestoreCertificateAuthority action.
   */
  deleteCertificateAuthority(params: ACMPCA.Types.DeleteCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the ListCertificateAuthorities action.   Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.  Before you can delete a CA that you have created and activated, you must disable it. To do this, call the UpdateCertificateAuthority action and set the CertificateAuthorityStatus parameter to DISABLED.  Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is CREATING). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into ACM Private CA (that is, the status of the CA is PENDING_CERTIFICATE).  When you successfully call DeleteCertificateAuthority, the CA's status changes to DELETED. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the PermanentDeletionTimeInDays parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The DescribeCertificateAuthority action returns the time remaining in the restoration window of a private CA in the DELETED state. To restore an eligible CA, call the RestoreCertificateAuthority action.
   */
  deleteCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes permissions that a private CA assigned to a designated AWS service. Permissions can be created with the CreatePermission action and listed with the ListPermissions action. 
   */
  deletePermission(params: ACMPCA.Types.DeletePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes permissions that a private CA assigned to a designated AWS service. Permissions can be created with the CreatePermission action and listed with the ListPermissions action. 
   */
  deletePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following:     CREATING - ACM Private CA is creating your private certificate authority.    PENDING_CERTIFICATE - The certificate is pending. You must use your ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA.     ACTIVE - Your private CA is active.    DISABLED - Your private CA has been disabled.    EXPIRED - Your private CA certificate has expired.    FAILED - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA.     DELETED - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.  
   */
  describeCertificateAuthority(params: ACMPCA.Types.DescribeCertificateAuthorityRequest, callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityResponse, AWSError>;
  /**
   * Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following:     CREATING - ACM Private CA is creating your private certificate authority.    PENDING_CERTIFICATE - The certificate is pending. You must use your ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA.     ACTIVE - Your private CA is active.    DISABLED - Your private CA has been disabled.    EXPIRED - Your private CA certificate has expired.    FAILED - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA.     DELETED - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.  
   */
  describeCertificateAuthority(callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityResponse, AWSError>;
  /**
   * Lists information about a specific audit report created by calling the CreateCertificateAuthorityAuditReport action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the IssueCertificate action or the RevokeCertificate action. 
   */
  describeCertificateAuthorityAuditReport(params: ACMPCA.Types.DescribeCertificateAuthorityAuditReportRequest, callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Lists information about a specific audit report created by calling the CreateCertificateAuthorityAuditReport action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the IssueCertificate action or the RevokeCertificate action. 
   */
  describeCertificateAuthorityAuditReport(callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the IssueCertificate action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the GetCertificate action. You can retrieve the certificate if it is in the ISSUED state. You can call the CreateCertificateAuthorityAuditReport action to create a report that contains information about all of the certificates issued and revoked by your private CA. 
   */
  getCertificate(params: ACMPCA.Types.GetCertificateRequest, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateResponse, AWSError>;
  /**
   * Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the IssueCertificate action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the GetCertificate action. You can retrieve the certificate if it is in the ISSUED state. You can call the CreateCertificateAuthorityAuditReport action to create a report that contains information about all of the certificates issued and revoked by your private CA. 
   */
  getCertificate(callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateResponse, AWSError>;
  /**
   * Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
   */
  getCertificateAuthorityCertificate(params: ACMPCA.Types.GetCertificateAuthorityCertificateRequest, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCertificateResponse, AWSError>;
  /**
   * Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
   */
  getCertificateAuthorityCertificate(callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCertificateResponse, AWSError>;
  /**
   * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the CreateCertificateAuthority action. Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into ACM Private CA by calling the ImportCertificateAuthorityCertificate action. The CSR is returned as a base64 PEM-encoded string. 
   */
  getCertificateAuthorityCsr(params: ACMPCA.Types.GetCertificateAuthorityCsrRequest, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCsrResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCsrResponse, AWSError>;
  /**
   * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the CreateCertificateAuthority action. Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into ACM Private CA by calling the ImportCertificateAuthorityCertificate action. The CSR is returned as a base64 PEM-encoded string. 
   */
  getCertificateAuthorityCsr(callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCsrResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCsrResponse, AWSError>;
  /**
   * Imports a signed private CA certificate into ACM Private CA. This action is used when you are using a chain of trust whose root is located outside ACM Private CA. Before you can call this action, the following preparations must in place:   In ACM Private CA, call the CreateCertificateAuthority action to create the private CA that that you plan to back with the imported certificate.   Call the GetCertificateAuthorityCsr action to generate a certificate signing request (CSR).   Sign the CSR using a root or intermediate CA hosted either by an on-premises PKI hierarchy or a commercial CA..   Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.   The following requirements apply when you import a CA certificate.   You cannot import a non-self-signed certificate for use as a root CA.   You cannot import a self-signed certificate for use as a subordinate CA.   Your certificate chain must not include the private CA certificate that you are importing.   Your ACM Private CA-hosted or on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built.    The chain must be PEM-encoded.  
   */
  importCertificateAuthorityCertificate(params: ACMPCA.Types.ImportCertificateAuthorityCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Imports a signed private CA certificate into ACM Private CA. This action is used when you are using a chain of trust whose root is located outside ACM Private CA. Before you can call this action, the following preparations must in place:   In ACM Private CA, call the CreateCertificateAuthority action to create the private CA that that you plan to back with the imported certificate.   Call the GetCertificateAuthorityCsr action to generate a certificate signing request (CSR).   Sign the CSR using a root or intermediate CA hosted either by an on-premises PKI hierarchy or a commercial CA..   Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.   The following requirements apply when you import a CA certificate.   You cannot import a non-self-signed certificate for use as a root CA.   You cannot import a self-signed certificate for use as a subordinate CA.   Your certificate chain must not include the private CA certificate that you are importing.   Your ACM Private CA-hosted or on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built.    The chain must be PEM-encoded.  
   */
  importCertificateAuthorityCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Uses your private certificate authority (CA) to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the GetCertificate action and specifying the ARN.   You cannot use the ACM ListCertificateAuthorities action to retrieve the ARNs of the certificates that you issue by using ACM Private CA. 
   */
  issueCertificate(params: ACMPCA.Types.IssueCertificateRequest, callback?: (err: AWSError, data: ACMPCA.Types.IssueCertificateResponse) => void): Request<ACMPCA.Types.IssueCertificateResponse, AWSError>;
  /**
   * Uses your private certificate authority (CA) to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the GetCertificate action and specifying the ARN.   You cannot use the ACM ListCertificateAuthorities action to retrieve the ARNs of the certificates that you issue by using ACM Private CA. 
   */
  issueCertificate(callback?: (err: AWSError, data: ACMPCA.Types.IssueCertificateResponse) => void): Request<ACMPCA.Types.IssueCertificateResponse, AWSError>;
  /**
   * Lists the private certificate authorities that you created by using the CreateCertificateAuthority action.
   */
  listCertificateAuthorities(params: ACMPCA.Types.ListCertificateAuthoritiesRequest, callback?: (err: AWSError, data: ACMPCA.Types.ListCertificateAuthoritiesResponse) => void): Request<ACMPCA.Types.ListCertificateAuthoritiesResponse, AWSError>;
  /**
   * Lists the private certificate authorities that you created by using the CreateCertificateAuthority action.
   */
  listCertificateAuthorities(callback?: (err: AWSError, data: ACMPCA.Types.ListCertificateAuthoritiesResponse) => void): Request<ACMPCA.Types.ListCertificateAuthoritiesResponse, AWSError>;
  /**
   * Lists all the permissions, if any, that have been assigned by a private CA. Permissions can be granted with the CreatePermission action and revoked with the DeletePermission action.
   */
  listPermissions(params: ACMPCA.Types.ListPermissionsRequest, callback?: (err: AWSError, data: ACMPCA.Types.ListPermissionsResponse) => void): Request<ACMPCA.Types.ListPermissionsResponse, AWSError>;
  /**
   * Lists all the permissions, if any, that have been assigned by a private CA. Permissions can be granted with the CreatePermission action and revoked with the DeletePermission action.
   */
  listPermissions(callback?: (err: AWSError, data: ACMPCA.Types.ListPermissionsResponse) => void): Request<ACMPCA.Types.ListPermissionsResponse, AWSError>;
  /**
   * Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the TagCertificateAuthority action to add one or more tags to your CA. Call the UntagCertificateAuthority action to remove tags. 
   */
  listTags(params: ACMPCA.Types.ListTagsRequest, callback?: (err: AWSError, data: ACMPCA.Types.ListTagsResponse) => void): Request<ACMPCA.Types.ListTagsResponse, AWSError>;
  /**
   * Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the TagCertificateAuthority action to add one or more tags to your CA. Call the UntagCertificateAuthority action to remove tags. 
   */
  listTags(callback?: (err: AWSError, data: ACMPCA.Types.ListTagsResponse) => void): Request<ACMPCA.Types.ListTagsResponse, AWSError>;
  /**
   * Restores a certificate authority (CA) that is in the DELETED state. You can restore a CA during the period that you defined in the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthority action. Currently, you can specify 7 to 30 days. If you did not specify a PermanentDeletionTimeInDays value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the DELETED state by calling the DescribeCertificateAuthority or ListCertificateAuthorities actions. The status of a restored CA is set to its pre-deletion status when the RestoreCertificateAuthority action returns. To change its status to ACTIVE, call the UpdateCertificateAuthority action. If the private CA was in the PENDING_CERTIFICATE state at deletion, you must use the ImportCertificateAuthorityCertificate action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
   */
  restoreCertificateAuthority(params: ACMPCA.Types.RestoreCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Restores a certificate authority (CA) that is in the DELETED state. You can restore a CA during the period that you defined in the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthority action. Currently, you can specify 7 to 30 days. If you did not specify a PermanentDeletionTimeInDays value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the DELETED state by calling the DescribeCertificateAuthority or ListCertificateAuthorities actions. The status of a restored CA is set to its pre-deletion status when the RestoreCertificateAuthority action returns. To change its status to ACTIVE, call the UpdateCertificateAuthority action. If the private CA was in the PENDING_CERTIFICATE state at deletion, you must use the ImportCertificateAuthorityCertificate action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
   */
  restoreCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the CrlConfiguration structure. ACM Private CA also writes revocation information to the audit report. For more information, see CreateCertificateAuthorityAuditReport.   You cannot revoke a root CA self-signed certificate. 
   */
  revokeCertificate(params: ACMPCA.Types.RevokeCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the CrlConfiguration structure. ACM Private CA also writes revocation information to the audit report. For more information, see CreateCertificateAuthorityAuditReport.   You cannot revoke a root CA self-signed certificate. 
   */
  revokeCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the UntagCertificateAuthority action. Call the ListTags action to see what tags are associated with your CA. 
   */
  tagCertificateAuthority(params: ACMPCA.Types.TagCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the UntagCertificateAuthority action. Call the ListTags action to see what tags are associated with your CA. 
   */
  tagCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the TagCertificateAuthority. Call the ListTags action to see what tags are associated with your CA. 
   */
  untagCertificateAuthority(params: ACMPCA.Types.UntagCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the TagCertificateAuthority. Call the ListTags action to see what tags are associated with your CA. 
   */
  untagCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the ACTIVE or DISABLED state before you can update it. You can disable a private CA that is in the ACTIVE state or make a CA that is in the DISABLED state active again.
   */
  updateCertificateAuthority(params: ACMPCA.Types.UpdateCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the ACTIVE or DISABLED state before you can update it. You can disable a private CA that is in the ACTIVE state or make a CA that is in the DISABLED state active again.
   */
  updateCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the certificateAuthorityCSRCreated state by periodically calling the underlying ACMPCA.getCertificateAuthorityCsroperation every 3 seconds (at most 60 times). Wait until a Certificate Authority CSR is created
   */
  waitFor(state: "certificateAuthorityCSRCreated", params: ACMPCA.Types.GetCertificateAuthorityCsrRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCsrResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCsrResponse, AWSError>;
  /**
   * Waits for the certificateAuthorityCSRCreated state by periodically calling the underlying ACMPCA.getCertificateAuthorityCsroperation every 3 seconds (at most 60 times). Wait until a Certificate Authority CSR is created
   */
  waitFor(state: "certificateAuthorityCSRCreated", callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCsrResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCsrResponse, AWSError>;
  /**
   * Waits for the certificateIssued state by periodically calling the underlying ACMPCA.getCertificateoperation every 3 seconds (at most 60 times). Wait until a certificate is issued
   */
  waitFor(state: "certificateIssued", params: ACMPCA.Types.GetCertificateRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateResponse, AWSError>;
  /**
   * Waits for the certificateIssued state by periodically calling the underlying ACMPCA.getCertificateoperation every 3 seconds (at most 60 times). Wait until a certificate is issued
   */
  waitFor(state: "certificateIssued", callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateResponse, AWSError>;
  /**
   * Waits for the auditReportCreated state by periodically calling the underlying ACMPCA.describeCertificateAuthorityAuditReportoperation every 3 seconds (at most 60 times). Wait until a Audit Report is created
   */
  waitFor(state: "auditReportCreated", params: ACMPCA.Types.DescribeCertificateAuthorityAuditReportRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Waits for the auditReportCreated state by periodically calling the underlying ACMPCA.describeCertificateAuthorityAuditReportoperation every 3 seconds (at most 60 times). Wait until a Audit Report is created
   */
  waitFor(state: "auditReportCreated", callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse, AWSError>;
}
declare namespace ACMPCA {
  export interface ASN1Subject {
    /**
     * Two-digit code that specifies the country in which the certificate subject located.
     */
    Country?: CountryCodeString;
    /**
     * Legal name of the organization with which the certificate subject is affiliated. 
     */
    Organization?: String64;
    /**
     * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
     */
    OrganizationalUnit?: String64;
    /**
     * Disambiguating information for the certificate subject.
     */
    DistinguishedNameQualifier?: DistinguishedNameQualifierString;
    /**
     * State in which the subject of the certificate is located.
     */
    State?: String128;
    /**
     * Fully qualified domain name (FQDN) associated with the certificate subject.
     */
    CommonName?: String64;
    /**
     * The certificate serial number.
     */
    SerialNumber?: String64;
    /**
     * The locality (such as a city or town) in which the certificate subject is located.
     */
    Locality?: String128;
    /**
     * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
     */
    Title?: String64;
    /**
     * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
     */
    Surname?: String40;
    /**
     * First name.
     */
    GivenName?: String16;
    /**
     * Concatenation that typically contains the first letter of the GivenName, the first letter of the middle name if one exists, and the first letter of the SurName.
     */
    Initials?: String5;
    /**
     * Typically a shortened version of a longer GivenName. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
     */
    Pseudonym?: String128;
    /**
     * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
     */
    GenerationQualifier?: String3;
  }
  export type AccountId = string;
  export type ActionList = ActionType[];
  export type ActionType = "IssueCertificate"|"GetCertificate"|"ListPermissions";
  export type Arn = string;
  export type AuditReportId = string;
  export type AuditReportResponseFormat = "JSON"|"CSV";
  export type AuditReportStatus = "CREATING"|"SUCCESS"|"FAILED";
  export type Boolean = boolean;
  export type CertificateAuthorities = CertificateAuthority[];
  export interface CertificateAuthority {
    /**
     * Amazon Resource Name (ARN) for your private certificate authority (CA). The format is  12345678-1234-1234-1234-123456789012 .
     */
    Arn?: Arn;
    /**
     * Date and time at which your private CA was created.
     */
    CreatedAt?: TStamp;
    /**
     * Date and time at which your private CA was last updated.
     */
    LastStateChangeAt?: TStamp;
    /**
     * Type of your private CA.
     */
    Type?: CertificateAuthorityType;
    /**
     * Serial number of your private CA.
     */
    Serial?: String;
    /**
     * Status of your private CA.
     */
    Status?: CertificateAuthorityStatus;
    /**
     * Date and time before which your private CA certificate is not valid.
     */
    NotBefore?: TStamp;
    /**
     * Date and time after which your private CA certificate is not valid.
     */
    NotAfter?: TStamp;
    /**
     * Reason the request to create your private CA failed.
     */
    FailureReason?: FailureReason;
    /**
     * Your private CA configuration.
     */
    CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;
    /**
     * Information about the certificate revocation list (CRL) created and maintained by your private CA. 
     */
    RevocationConfiguration?: RevocationConfiguration;
    /**
     * The period during which a deleted CA can be restored. For more information, see the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthorityRequest action. 
     */
    RestorableUntil?: TStamp;
  }
  export interface CertificateAuthorityConfiguration {
    /**
     * Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.
     */
    KeyAlgorithm: KeyAlgorithm;
    /**
     * Name of the algorithm your private CA uses to sign certificate requests.
     */
    SigningAlgorithm: SigningAlgorithm;
    /**
     * Structure that contains X.500 distinguished name information for your private CA.
     */
    Subject: ASN1Subject;
  }
  export type CertificateAuthorityStatus = "CREATING"|"PENDING_CERTIFICATE"|"ACTIVE"|"DELETED"|"DISABLED"|"EXPIRED"|"FAILED";
  export type CertificateAuthorityType = "ROOT"|"SUBORDINATE";
  export type CertificateBody = string;
  export type CertificateBodyBlob = Buffer|Uint8Array|Blob|string;
  export type CertificateChain = string;
  export type CertificateChainBlob = Buffer|Uint8Array|Blob|string;
  export type CountryCodeString = string;
  export interface CreateCertificateAuthorityAuditReportRequest {
    /**
     * The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 .
     */
    CertificateAuthorityArn: Arn;
    /**
     * The name of the S3 bucket that will contain the audit report.
     */
    S3BucketName: String;
    /**
     * The format in which to create the report. This can be either JSON or CSV.
     */
    AuditReportResponseFormat: AuditReportResponseFormat;
  }
  export interface CreateCertificateAuthorityAuditReportResponse {
    /**
     * An alphanumeric string that contains a report identifier.
     */
    AuditReportId?: AuditReportId;
    /**
     * The key that uniquely identifies the report file in your S3 bucket.
     */
    S3Key?: String;
  }
  export interface CreateCertificateAuthorityRequest {
    /**
     * Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.
     */
    CertificateAuthorityConfiguration: CertificateAuthorityConfiguration;
    /**
     * Contains a Boolean value that you can use to enable a certification revocation list (CRL) for the CA, the name of the S3 bucket to which ACM Private CA will write the CRL, and an optional CNAME alias that you can use to hide the name of your bucket in the CRL Distribution Points extension of your CA certificate. For more information, see the CrlConfiguration structure. 
     */
    RevocationConfiguration?: RevocationConfiguration;
    /**
     * The type of the certificate authority.
     */
    CertificateAuthorityType: CertificateAuthorityType;
    /**
     * Alphanumeric string that can be used to distinguish between calls to CreateCertificateAuthority. Idempotency tokens time out after five minutes. Therefore, if you call CreateCertificateAuthority multiple times with the same idempotency token within a five minute period, ACM Private CA recognizes that you are requesting only one certificate. As a result, ACM Private CA issues only one. If you change the idempotency token for each call, however, ACM Private CA recognizes that you are requesting multiple certificates.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with  IAM to manage permissions, see Controlling Access Using IAM Tags.
     */
    Tags?: TagList;
  }
  export interface CreateCertificateAuthorityResponse {
    /**
     * If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn?: Arn;
  }
  export interface CreatePermissionRequest {
    /**
     * The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN by calling the ListCertificateAuthorities action. This must have the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The AWS service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com.
     */
    Principal: Principal;
    /**
     * The ID of the calling account.
     */
    SourceAccount?: AccountId;
    /**
     * The actions that the specified AWS service principal can use. These include IssueCertificate, GetCertificate, and ListPermissions.
     */
    Actions: ActionList;
  }
  export interface CrlConfiguration {
    /**
     * Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the CreateCertificateAuthority action or for an existing CA when you call the UpdateCertificateAuthority action. 
     */
    Enabled: Boolean;
    /**
     * Number of days until a certificate expires.
     */
    ExpirationInDays?: Integer1To5000;
    /**
     * Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.
     */
    CustomCname?: String253;
    /**
     * Name of the S3 bucket that contains the CRL. If you do not provide a value for the CustomCname argument, the name of your S3 bucket is placed into the CRL Distribution Points extension of the issued certificate. You can change the name of your bucket by calling the UpdateCertificateAuthority action. You must specify a bucket policy that allows ACM Private CA to write the CRL to your bucket.
     */
    S3BucketName?: String3To255;
  }
  export type CsrBlob = Buffer|Uint8Array|Blob|string;
  export type CsrBody = string;
  export interface DeleteCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must have the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The number of days to make a CA restorable after it has been deleted. This can be anywhere from 7 to 30 days, with 30 being the default.
     */
    PermanentDeletionTimeInDays?: PermanentDeletionTimeInDays;
  }
  export interface DeletePermissionRequest {
    /**
     * The Amazon Resource Number (ARN) of the private CA that issued the permissions. You can find the CA's ARN by calling the ListCertificateAuthorities action. This must have the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The AWS service or identity that will have its CA permissions revoked. At this time, the only valid service principal is acm.amazonaws.com 
     */
    Principal: Principal;
    /**
     * The AWS account that calls this action.
     */
    SourceAccount?: AccountId;
  }
  export interface DescribeCertificateAuthorityAuditReportRequest {
    /**
     * The Amazon Resource Name (ARN) of the private CA. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The report ID returned by calling the CreateCertificateAuthorityAuditReport action.
     */
    AuditReportId: AuditReportId;
  }
  export interface DescribeCertificateAuthorityAuditReportResponse {
    /**
     * Specifies whether report creation is in progress, has succeeded, or has failed.
     */
    AuditReportStatus?: AuditReportStatus;
    /**
     * Name of the S3 bucket that contains the report.
     */
    S3BucketName?: String;
    /**
     * S3 key that uniquely identifies the report file in your S3 bucket.
     */
    S3Key?: String;
    /**
     * The date and time at which the report was created.
     */
    CreatedAt?: TStamp;
  }
  export interface DescribeCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
  }
  export interface DescribeCertificateAuthorityResponse {
    /**
     * A CertificateAuthority structure that contains information about your private CA.
     */
    CertificateAuthority?: CertificateAuthority;
  }
  export type DistinguishedNameQualifierString = string;
  export type FailureReason = "REQUEST_TIMED_OUT"|"UNSUPPORTED_ALGORITHM"|"OTHER";
  export interface GetCertificateAuthorityCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) of your private CA. This is of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
  }
  export interface GetCertificateAuthorityCertificateResponse {
    /**
     * Base64-encoded certificate authority (CA) certificate.
     */
    Certificate?: CertificateBody;
    /**
     * Base64-encoded certificate chain that includes any intermediate certificates and chains up to root on-premises certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. If this is a root CA, the value will be null.
     */
    CertificateChain?: CertificateChain;
  }
  export interface GetCertificateAuthorityCsrRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called the CreateCertificateAuthority action. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
  }
  export interface GetCertificateAuthorityCsrResponse {
    /**
     * The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.
     */
    Csr?: CsrBody;
  }
  export interface GetCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012/certificate/286535153982981100925020015808220737245  
     */
    CertificateArn: Arn;
  }
  export interface GetCertificateResponse {
    /**
     * The base64 PEM-encoded certificate specified by the CertificateArn parameter.
     */
    Certificate?: CertificateBody;
    /**
     * The base64 PEM-encoded certificate chain that chains up to the on-premises root CA certificate that you used to sign your private CA certificate. 
     */
    CertificateChain?: CertificateChain;
  }
  export type IdempotencyToken = string;
  export interface ImportCertificateAuthorityCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * The PEM-encoded certificate for a private CA. This may be a self-signed certificate in the case of a root CA, or it may be signed by another CA that you control.
     */
    Certificate: CertificateBodyBlob;
    /**
     * A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your ACM Private CA-hosted or on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding.  This parameter must be supplied when you import a subordinate CA. When you import a root CA, there is no chain.
     */
    CertificateChain?: CertificateChainBlob;
  }
  export type Integer1To5000 = number;
  export interface IssueCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * The certificate signing request (CSR) for the certificate you want to issue. You can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key.   openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr  If you have a configuration file, you can use the following OpenSSL command. The usr_cert block in the configuration file contains your X509 version 3 extensions.   openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days -365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr 
     */
    Csr: CsrBlob;
    /**
     * The name of the algorithm that will be used to sign the certificate to be issued.
     */
    SigningAlgorithm: SigningAlgorithm;
    /**
     * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the EndEntityCertificate/V1 template. The following service-owned TemplateArn values are supported by ACM Private CA:    arn:aws:acm-pca:::template/EndEntityCertificate/V1   arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen0/V1   arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen1/V1   arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen2/V1   arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen3/V1   arn:aws:acm-pca:::template/RootCACertificate/V1   For more information, see Using Templates.
     */
    TemplateArn?: Arn;
    /**
     * The type of the validity period.
     */
    Validity: Validity;
    /**
     * Custom string that can be used to distinguish between calls to the IssueCertificate action. Idempotency tokens time out after one hour. Therefore, if you call IssueCertificate multiple times with the same idempotency token within 5 minutes, ACM Private CA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, PCA recognizes that you are requesting multiple certificates.
     */
    IdempotencyToken?: IdempotencyToken;
  }
  export interface IssueCertificateResponse {
    /**
     * The Amazon Resource Name (ARN) of the issued certificate and the certificate serial number. This is of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012/certificate/286535153982981100925020015808220737245  
     */
    CertificateArn?: Arn;
  }
  export type KeyAlgorithm = "RSA_2048"|"RSA_4096"|"EC_prime256v1"|"EC_secp384r1";
  export interface ListCertificateAuthoritiesRequest {
    /**
     * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxResults?: MaxResults;
  }
  export interface ListCertificateAuthoritiesResponse {
    /**
     * Summary information about each certificate authority you have created.
     */
    CertificateAuthorities?: CertificateAuthorities;
    /**
     * When the list is truncated, this value is present and should be used for the NextToken parameter in a subsequent pagination request.
     */
    NextToken?: NextToken;
  }
  export interface ListPermissionsRequest {
    /**
     * The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by calling the ListCertificateAuthorities action. This must be of the form: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 You can get a private CA's ARN by running the ListCertificateAuthorities action.
     */
    CertificateAuthorityArn: Arn;
    /**
     * When paginating results, use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * When paginating results, use this parameter to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxResults?: MaxResults;
  }
  export interface ListPermissionsResponse {
    /**
     * Summary information about each permission assigned by the specified private CA, including the action enabled, the policy provided, and the time of creation.
     */
    Permissions?: PermissionList;
    /**
     * When the list is truncated, this value is present and should be used for the NextToken parameter in a subsequent pagination request. 
     */
    NextToken?: NextToken;
  }
  export interface ListTagsRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called the CreateCertificateAuthority action. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTagsResponse {
    /**
     * The tags associated with your private CA.
     */
    Tags?: TagList;
    /**
     * When the list is truncated, this value is present and should be used for the NextToken parameter in a subsequent pagination request. 
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type PermanentDeletionTimeInDays = number;
  export interface Permission {
    /**
     * The Amazon Resource Number (ARN) of the private CA from which the permission was issued.
     */
    CertificateAuthorityArn?: Arn;
    /**
     * The time at which the permission was created.
     */
    CreatedAt?: TStamp;
    /**
     * The AWS service or entity that holds the permission. At this time, the only valid principal is acm.amazonaws.com.
     */
    Principal?: String;
    /**
     * The ID of the account that assigned the permission.
     */
    SourceAccount?: String;
    /**
     * The private CA actions that can be performed by the designated AWS service.
     */
    Actions?: ActionList;
    /**
     * The name of the policy that is associated with the permission.
     */
    Policy?: String;
  }
  export type PermissionList = Permission[];
  export type PositiveLong = number;
  export type Principal = string;
  export interface RestoreCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called the CreateCertificateAuthority action. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
  }
  export interface RevocationConfiguration {
    /**
     * Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.
     */
    CrlConfiguration?: CrlConfiguration;
  }
  export type RevocationReason = "UNSPECIFIED"|"KEY_COMPROMISE"|"CERTIFICATE_AUTHORITY_COMPROMISE"|"AFFILIATION_CHANGED"|"SUPERSEDED"|"CESSATION_OF_OPERATION"|"PRIVILEGE_WITHDRAWN"|"A_A_COMPROMISE";
  export interface RevokeCertificateRequest {
    /**
     * Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling GetCertificate with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The GetCertificate action retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number.   openssl x509 -in file_path -text -noout  You can also copy the serial number from the console or use the DescribeCertificate action in the AWS Certificate Manager API Reference. 
     */
    CertificateSerial: String128;
    /**
     * Specifies why you revoked the certificate.
     */
    RevocationReason: RevocationReason;
  }
  export type SigningAlgorithm = "SHA256WITHECDSA"|"SHA384WITHECDSA"|"SHA512WITHECDSA"|"SHA256WITHRSA"|"SHA384WITHRSA"|"SHA512WITHRSA";
  export type String = string;
  export type String128 = string;
  export type String16 = string;
  export type String253 = string;
  export type String3 = string;
  export type String3To255 = string;
  export type String40 = string;
  export type String5 = string;
  export type String64 = string;
  export type TStamp = Date;
  export interface Tag {
    /**
     * Key (name) of the tag.
     */
    Key: TagKey;
    /**
     * Value of the tag.
     */
    Value?: TagValue;
  }
  export interface TagCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * List of tags to be associated with the CA.
     */
    Tags: TagList;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export interface UntagCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * List of tags to be removed from the CA.
     */
    Tags: TagList;
  }
  export interface UpdateCertificateAuthorityRequest {
    /**
     * Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * Revocation information for your private CA.
     */
    RevocationConfiguration?: RevocationConfiguration;
    /**
     * Status of your private CA.
     */
    Status?: CertificateAuthorityStatus;
  }
  export interface Validity {
    /**
     * Time period.
     */
    Value: PositiveLong;
    /**
     * Specifies whether the Value parameter represents days, months, or years.
     */
    Type: ValidityPeriodType;
  }
  export type ValidityPeriodType = "END_DATE"|"ABSOLUTE"|"DAYS"|"MONTHS"|"YEARS";
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-22"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ACMPCA client.
   */
  export import Types = ACMPCA;
}
export = ACMPCA;
