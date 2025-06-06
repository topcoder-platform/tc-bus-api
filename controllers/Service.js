const utils = require('../utils/writer.js')
const Service = require('../service/ServiceService')
const logger = require('../common/logger')
const MessageBusService = require('../service/MessageBusService')

const createService = async (req, res) => {
  const body = req.swagger.params.body.value.payloads
  const span = await logger.startSpan('createService')
  try {
    const response = await MessageBusService.createTopics(body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const createServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const body = req.swagger.params.body.value
  const span = await logger.startSpan('createServicePayload')
  try {
    const response = await Service.createServicePayload(serviceName, body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const deleteService = async (req, res) => {
  const span = await logger.startSpan('deleteService')
  const serviceName = req.swagger.params.serviceName.value
  try {
    const response = await Service.deleteService(serviceName)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const deleteServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const payloadName = req.swagger.params.payloadName.value
  const span = await logger.startSpan('deleteServicePayload')
  try {
    const response = await Service.deleteServicePayload(serviceName, payloadName)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const getService = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const span = await logger.startSpan('getService')
  try {
    const response = await Service.getService(serviceName)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const getServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const payloadName = req.swagger.params.payloadName.value
  const span = await logger.startSpan('getServicePayload')
  try {
    const response = await Service.getServicePayload(serviceName, payloadName)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const getServicePayloads = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const page = req.swagger.params.page.value
  const perPage = req.swagger.params.perPage.value
  const span = await logger.startSpan('getServicePayloads')
  try {
    const response = await Service.getServicePayloads(serviceName, page, perPage)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const getServices = async (req, res) => {
  const page = req.swagger.params.page.value
  const perPage = req.swagger.params.perPage.value
  const span = await logger.startSpan('getServices')
  try {
    const response = await Service.getServices(page, perPage)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const headService = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const span = await logger.startSpan('headService')
  try {
    const response = await Service.headService(serviceName)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const headServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const payloadName = req.swagger.params.payloadName.value
  const span = await logger.startSpan('headServicePayload')
  try {
    const response = await Service.headServicePayload(serviceName, payloadName)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const headServicePayloads = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const page = req.swagger.params.page.value
  const perPage = req.swagger.params.perPage.value
  const span = await logger.startSpan('headServicePayloads')
  try {
    const response = await Service.headServicePayloads(serviceName, page, perPage)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const headServices = async (req, res) => {
  const page = req.swagger.params.page.value
  const perPage = req.swagger.params.perPage.value
  const span = await logger.startSpan('headServices')
  try {
    const response = await Service.headServices(page, perPage)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const patchService = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const body = req.swagger.params.body.value
  const span = await logger.startSpan('patchService')
  try {
    const response = await Service.patchService(serviceName, body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const patchServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const payloadName = req.swagger.params.payloadName.value
  const body = req.swagger.params.body.value
  const span = await logger.startSpan('patchServicePayload')
  try {
    const response = await Service.patchServicePayload(serviceName, payloadName, body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const updateService = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const body = req.swagger.params.body.value
  const span = await logger.startSpan('updateService')
  try {
    const response = await Service.updateService(serviceName, body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const updateServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const payloadName = req.swagger.params.payloadName.value
  const body = req.swagger.params.body.value
  const span = await logger.startSpan('updateServicePayload')
  try {
    const response = await Service.updateServicePayload(serviceName, payloadName, body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  createService,
  createServicePayload,
  deleteService,
  deleteServicePayload,
  getService,
  getServicePayload,
  getServicePayloads,
  getServices,
  headService,
  headServicePayload,
  headServicePayloads,
  headServices,
  patchService,
  patchServicePayload,
  updateService,
  updateServicePayload
}

logger.buildService(module.exports)
