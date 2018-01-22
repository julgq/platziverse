/* Modo estricto de JS */
'use strict'

module.exports = async function (config) {
  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }

    /*
        Otro forma tradicional de hacer return
        Esto ayuda cuando el nombre de la variable es igual a de su valor asignado
    return {
        Agent: Agent,
        Metric: Metric
    }
    */
}
