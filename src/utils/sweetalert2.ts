import Swal, { SweetAlertResult } from 'sweetalert2'

/**
 * Variable de Configuración del modal
 */
const swalOptions = {
  allowOutsideClick: false,
  allowEscapeKey: false,
  confirmButtonText: 'ACEPTAR',
  cancelButtonText: 'CERRAR',
  confirmButtonColor: '#A3053D',
  cancelButtonColor: '#D7D7D7'
}

/**
 * Modal de carga Loading.
 */
export function showSwalLoading (): void {
  Swal.fire({
    text: 'Espere un momento ...',
    showConfirmButton: false,
    ...swalOptions,
    willOpen: () => {
      Swal.showLoading()
    }
  })
}

/**
 * Modal de respuesta errónea
 *
 * @param {string} html
 * @return {*} Modal
 */
export function showSwalError (html: string): Promise<SweetAlertResult<unknown>> {
  return Swal.fire({
    title: '¡Error!',
    html,
    icon: 'error',
    ...swalOptions
  })
}

/**
 * Modal de respuesta exitosa
 *
 * @param {string} html
 * @return {*} Modal
 */
export function showSwalInfo (html: string): Promise<SweetAlertResult<unknown>> {
  return Swal.fire({
    title: '¡Atención!',
    html,
    icon: 'info',
    ...swalOptions
  })
}

/**
 * Modal de respuesta exitosa
 *
 * @param {string} html
 * @return {*} Modal
 */
export function showSwalSuccess (html: string): Promise<SweetAlertResult<unknown>> {
  return Swal.fire({
    title: '¡Perfecto!',
    html,
    icon: 'success',
    ...swalOptions
  })
}

/**
 * Cerrar el modal
 */
export function closeSwal (): void {
  Swal.close()
}
