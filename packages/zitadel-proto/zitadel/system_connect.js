// @generated by protoc-gen-connect-es v0.13.0
// @generated from file zitadel/system.proto (package zitadel.system.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddDomainRequest, AddDomainResponse, AddInstanceRequest, AddInstanceResponse, AddQuotaRequest, AddQuotaResponse, BulkSetLimitsRequest, BulkSetLimitsResponse, ClearViewRequest, ClearViewResponse, CreateInstanceRequest, CreateInstanceResponse, ExistsDomainRequest, ExistsDomainResponse, GetInstanceRequest, GetInstanceResponse, HealthzRequest, HealthzResponse, ListDomainsRequest, ListDomainsResponse, ListFailedEventsRequest, ListFailedEventsResponse, ListIAMMembersRequest, ListIAMMembersResponse, ListInstancesRequest, ListInstancesResponse, ListViewsRequest, ListViewsResponse, RemoveDomainRequest, RemoveDomainResponse, RemoveFailedEventRequest, RemoveFailedEventResponse, RemoveInstanceRequest, RemoveInstanceResponse, RemoveQuotaRequest, RemoveQuotaResponse, ResetLimitsRequest, ResetLimitsResponse, SetInstanceFeatureRequest, SetInstanceFeatureResponse, SetLimitsRequest, SetLimitsResponse, SetPrimaryDomainRequest, SetPrimaryDomainResponse, SetQuotaRequest, SetQuotaResponse, UpdateInstanceRequest, UpdateInstanceResponse } from "./system_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.system.v1.SystemService
 */
export const SystemService = {
  typeName: "zitadel.system.v1.SystemService",
  methods: {
    /**
     * Indicates if ZITADEL is running.
     * It respondes as soon as ZITADEL started
     *
     * @generated from rpc zitadel.system.v1.SystemService.Healthz
     */
    healthz: {
      name: "Healthz",
      I: HealthzRequest,
      O: HealthzResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a list of ZITADEL instances
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListInstances
     */
    listInstances: {
      name: "ListInstances",
      I: ListInstancesRequest,
      O: ListInstancesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns the detail of an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.GetInstance
     */
    getInstance: {
      name: "GetInstance",
      I: GetInstanceRequest,
      O: GetInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Deprecated: Use CreateInstance instead
     * Creates a new instance with all needed setup data
     * This might take some time
     *
     * @generated from rpc zitadel.system.v1.SystemService.AddInstance
     */
    addInstance: {
      name: "AddInstance",
      I: AddInstanceRequest,
      O: AddInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Updates name of an existing instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.UpdateInstance
     */
    updateInstance: {
      name: "UpdateInstance",
      I: UpdateInstanceRequest,
      O: UpdateInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a new instance with all needed setup data
     * This might take some time
     *
     * @generated from rpc zitadel.system.v1.SystemService.CreateInstance
     */
    createInstance: {
      name: "CreateInstance",
      I: CreateInstanceRequest,
      O: CreateInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Removes an instance
     * This might take some time
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveInstance
     */
    removeInstance: {
      name: "RemoveInstance",
      I: RemoveInstanceRequest,
      O: RemoveInstanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns all instance members matching the request
     * all queries need to match (ANDed)
     * Deprecated: Use the Admin APIs ListIAMMembers instead
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListIAMMembers
     */
    listIAMMembers: {
      name: "ListIAMMembers",
      I: ListIAMMembersRequest,
      O: ListIAMMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Checks if a domain exists
     *
     * @generated from rpc zitadel.system.v1.SystemService.ExistsDomain
     */
    existsDomain: {
      name: "ExistsDomain",
      I: ExistsDomainRequest,
      O: ExistsDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns the custom domains of an instance
     * Checks if a domain exists
     * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListDomains
     */
    listDomains: {
      name: "ListDomains",
      I: ListDomainsRequest,
      O: ListDomainsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Adds a domain to an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.AddDomain
     */
    addDomain: {
      name: "AddDomain",
      I: AddDomainRequest,
      O: AddDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Removes the domain of an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveDomain
     */
    removeDomain: {
      name: "RemoveDomain",
      I: RemoveDomainRequest,
      O: RemoveDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sets the primary domain of an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetPrimaryDomain
     */
    setPrimaryDomain: {
      name: "SetPrimaryDomain",
      I: SetPrimaryDomainRequest,
      O: SetPrimaryDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns all stored read models of ZITADEL
     * views are used for search optimisation and optimise request latencies
     * they represent the delta of the event happend on the objects
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListViews
     */
    listViews: {
      name: "ListViews",
      I: ListViewsRequest,
      O: ListViewsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Truncates the delta of the change stream
     * be carefull with this function because ZITADEL has to
     * recompute the deltas after they got cleared.
     * Search requests will return wrong results until all deltas are recomputed
     *
     * @generated from rpc zitadel.system.v1.SystemService.ClearView
     */
    clearView: {
      name: "ClearView",
      I: ClearViewRequest,
      O: ClearViewResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns event descriptions which cannot be processed.
     * It's possible that some events need some retries.
     * For example if the SMTP-API wasn't able to send an email at the first time
     *
     * @generated from rpc zitadel.system.v1.SystemService.ListFailedEvents
     */
    listFailedEvents: {
      name: "ListFailedEvents",
      I: ListFailedEventsRequest,
      O: ListFailedEventsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Deletes the event from failed events view.
     * the event is not removed from the change stream
     * This call is usefull if the system was able to process the event later.
     * e.g. if the second try of sending an email was successful. the first try produced a
     * failed event. You can find out if it worked on the `failure_count`
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveFailedEvent
     */
    removeFailedEvent: {
      name: "RemoveFailedEvent",
      I: RemoveFailedEventRequest,
      O: RemoveFailedEventResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a new quota
     * Returns an error if the quota already exists for the specified unit
     * Deprecated: use SetQuota instead
     *
     * @generated from rpc zitadel.system.v1.SystemService.AddQuota
     */
    addQuota: {
      name: "AddQuota",
      I: AddQuotaRequest,
      O: AddQuotaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sets quota configuration properties
     * Creates a new quota if it doesn't exist for the specified unit
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetQuota
     */
    setQuota: {
      name: "SetQuota",
      I: SetQuotaRequest,
      O: SetQuotaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Removes a quota
     *
     * @generated from rpc zitadel.system.v1.SystemService.RemoveQuota
     */
    removeQuota: {
      name: "RemoveQuota",
      I: RemoveQuotaRequest,
      O: RemoveQuotaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Set a feature flag on an instance
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetInstanceFeature
     */
    setInstanceFeature: {
      name: "SetInstanceFeature",
      I: SetInstanceFeatureRequest,
      O: SetInstanceFeatureResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sets instance level limits
     *
     * @generated from rpc zitadel.system.v1.SystemService.SetLimits
     */
    setLimits: {
      name: "SetLimits",
      I: SetLimitsRequest,
      O: SetLimitsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sets many instance level limits
     *
     * @generated from rpc zitadel.system.v1.SystemService.BulkSetLimits
     */
    bulkSetLimits: {
      name: "BulkSetLimits",
      I: BulkSetLimitsRequest,
      O: BulkSetLimitsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Resets instance level limits
     *
     * @generated from rpc zitadel.system.v1.SystemService.ResetLimits
     */
    resetLimits: {
      name: "ResetLimits",
      I: ResetLimitsRequest,
      O: ResetLimitsResponse,
      kind: MethodKind.Unary,
    },
  }
};

