import { c as createLucideIcon, a0 as axiosInstance } from './index-BxW4NEkE.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Package2 = createLucideIcon("Package2", [
  ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
  ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9", key: "19h2x1" }],
  ["path", { d: "M12 3v6", key: "1holv5" }]
]);

const bookSingleVaccine = async (data) => {
  try {
    const response = await axiosInstance.post("/appointments/booking/single-vaccines", data);
    return response.data;
  } catch (error) {
    console.error("Error booking single vaccine:", error);
    throw error;
  }
};
const bookPackageVaccine = async (data) => {
  try {
    const response = await axiosInstance.post("/appointments/booking/package-vaccines", data);
    return response.data;
  } catch (error) {
    console.error("Error booking package vaccine:", error);
    throw error;
  }
};
const getChildAppointments = async (childId) => {
  try {
    const response = await axiosInstance.get(`/appointments/${childId}`, {
      params: { childId }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching child appointments:", error);
    throw error;
  }
};
const getAppointmentDetails = async (appointmentId) => {
  try {
    const response = await axiosInstance.get(`/appointments/details/${appointmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching appointment details:", error);
    throw error;
  }
};
const rescheduleAppointment = async (appointmentId, newDate) => {
  try {
    const response = await axiosInstance.put(`/appointments/${appointmentId}/date`, null, {
      params: { newDate }
    });
    return response.data;
  } catch (error) {
    console.error("Error rescheduling appointment:", error);
    throw error;
  }
};

const getPaymentCheckoutUrl = async (appointmentId) => {
  try {
    const response = await axiosInstance.get(`/payments/checkout/${appointmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting payment checkout URL:", error);
    throw error;
  }
};

export { Package2 as P, bookPackageVaccine as a, bookSingleVaccine as b, getAppointmentDetails as c, getChildAppointments as d, getPaymentCheckoutUrl as g, rescheduleAppointment as r };
