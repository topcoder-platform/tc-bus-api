const utils = require('../utils/writer.js')
const Service = require('../service/ServiceService')
const logger = require('../common/logger')
const MessageBusService = require('../service/MessageBusService')
const { functionWrapper } = require('../utils/wrapper.js')

const createService = async (req, res) => {
  (await functionWrapper(async () => {

    const body = req.swagger.params.body.value.payloads
    try {
      const response = await MessageBusService.createTopics(body)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'createService'))(req, res)
}

const createServicePayload = async (req, res) => {
  const serviceName = req.swagger.params.serviceName.value
  const body = req.swagger.params.body.value
  try {
    const response = await Service.createServicePayload(serviceName, body)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    utils.writeJson(res, err)
  }
}

const deleteService = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    try {
      const response = await Service.deleteService(serviceName)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'deleteService'))(req, res)
}

const deleteServicePayload = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const payloadName = req.swagger.params.payloadName.value
    try {
      const response = await Service.deleteServicePayload(serviceName, payloadName)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'deleteServicePayload'))
}

const getService = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    try {
      const response = await Service.getService(serviceName)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'getService'))(req, res)
}

const getServicePayload = async (req, res) => {
  (await functionWrapper((async () => {
    const serviceName = req.swagger.params.serviceName.value
    const payloadName = req.swagger.params.payloadName.value
    try {
      const response = await Service.getServicePayload(serviceName, payloadName)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }), 'getServicePayload'))(req, res)
}

const getServicePayloads = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const page = req.swagger.params.page.value
    const perPage = req.swagger.params.perPage.value
    try {
      const response = await Service.getServicePayloads(serviceName, page, perPage)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'getServicePayloads'))(req, res)
}

const getServices = async (req, res) => {
  (await functionWrapper(async () => {
    const page = req.swagger.params.page.value
    const perPage = req.swagger.params.perPage.value
    try {
      const response = await Service.getServices(page, perPage)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'getServices'))(req, res)
}

const headService = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    try {
      const response = await Service.headService(serviceName)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'headService'))(req, res)
}

const headServicePayload = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const payloadName = req.swagger.params.payloadName.value
    try {
      const response = await Service.headServicePayload(serviceName, payloadName)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'headServicePayload'))(req, res)
}

const headServicePayloads = async (req, res) => {
  (await functionWrapper(async () => {

    const serviceName = req.swagger.params.serviceName.value
    const page = req.swagger.params.page.value
    const perPage = req.swagger.params.perPage.value
    try {
      const response = await Service.headServicePayloads(serviceName, page, perPage)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'headServicePayloads'))(req, res)
}

const headServices = async (req, res) => {
  (await functionWrapper(async () => {
    const page = req.swagger.params.page.value
    const perPage = req.swagger.params.perPage.value
    try {
      const response = await Service.headServices(page, perPage)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'headServices'))(req, res)
}

const patchService = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const body = req.swagger.params.body.value
    try {
      const response = await Service.patchService(serviceName, body)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'patchService'))(req, res)
}

const patchServicePayload = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const payloadName = req.swagger.params.payloadName.value
    const body = req.swagger.params.body.value
    try {
      const response = await Service.patchServicePayload(serviceName, payloadName, body)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'patchServicePayload'))(req, res)
}

const updateService = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const body = req.swagger.params.body.value
    try {
      const response = await Service.updateService(serviceName, body)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'updateService'))(req, res)
}

const updateServicePayload = async (req, res) => {
  (await functionWrapper(async () => {
    const serviceName = req.swagger.params.serviceName.value
    const payloadName = req.swagger.params.payloadName.value
    const body = req.swagger.params.body.value
    try {
      const response = await Service.updateServicePayload(serviceName, payloadName, body)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'updateServicePayload'))(req, res)
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
