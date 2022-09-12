const utils = require('../utils/writer.js')
const Service = require('../service/ServiceService')

const createService = async (req, res) => {
  const body = req.swagger.params['body'].value
  try {
    const response = await Service.createService(body)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const createServicePayload = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const body = req.swagger.params['body'].value
  try {
    const response = await Service.createServicePayload(serviceName, body)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const deleteService = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  try {
    const response = await Service.deleteService(serviceName)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const deleteServicePayload = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const payloadName = req.swagger.params['payloadName'].value
  try {
    const response = await Service.deleteServicePayload(serviceName, payloadName)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const getService = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  try {
    const response = await Service.getService(serviceName)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const getServicePayload = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const payloadName = req.swagger.params['payloadName'].value
  try {
    const response = await Service.getServicePayload(serviceName, payloadName)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const getServicePayloads = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const page = req.swagger.params['page'].value
  const perPage = req.swagger.params['perPage'].value
  try {
    const response = await Service.getServicePayloads(serviceName, page, perPage)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const getServices = async (req, res) => {
  const page = req.swagger.params['page'].value
  const perPage = req.swagger.params['perPage'].value
  try {
    const response = await Service.getServices(page, perPage)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const headService = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  try {
    const response = await Service.headService(serviceName)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const headServicePayload = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const payloadName = req.swagger.params['payloadName'].value
  try {
    const response = await Service.headServicePayload(serviceName, payloadName)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const headServicePayloads = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const page = req.swagger.params['page'].value
  const perPage = req.swagger.params['perPage'].value
  try {
    const response = await Service.headServicePayloads(serviceName, page, perPage)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const headServices = async (req, res) => {
  const page = req.swagger.params['page'].value
  const perPage = req.swagger.params['perPage'].value
  try {
    const response = await Service.headServices(page, perPage)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const patchService = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const body = req.swagger.params['body'].value
  try {
    const response = await Service.patchService(serviceName, body)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const patchServicePayload = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const payloadName = req.swagger.params['payloadName'].value
  const body = req.swagger.params['body'].value
  try {
    const response = await Service.patchServicePayload(serviceName, payloadName, body)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const updateService = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const body = req.swagger.params['body'].value
  try {
    const response = await Service.updateService(serviceName, body)
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

const updateServicePayload = async (req, res) => {
  const serviceName = req.swagger.params['serviceName'].value
  const payloadName = req.swagger.params['payloadName'].value
  const body = req.swagger.params['body'].value
  try {
    const response = await Service.updateServicePayload(serviceName, payloadName, body)
    utils.writeJson(res, response)
  } catch (err) {
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
  updateServicePayload,
}