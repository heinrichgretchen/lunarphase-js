/**
 * Timestamp epoch, January 1, 1970, in Julian Days.
 * @type {number}
 */
export const EPOCH: number = 2440587.5;

/**
 * Lunation 1 as the first new moon of 1923 at approximately
 * 02:41 UTC, January 17, 1923 per Ernest William Brown's lunar theory.
 * @type {number}
 */
export const LUNATION_BASE_JULIAN_DAY: number = 2423436.6115277777;

/**
 * Length of one phase (1/8 of a synodic month) in Earth days.
 * @type {number}
 */
export const PHASE_LENGTH: number = 3.69132346322;

/**
 * Orbital period of the Moon from perigee to apogee and back to perigee
 * @type {number}
 */
export const ANOMALISTIC_MONTH: number = 27.55454988;

/**
 * Length of one synodic month, or days for the phases to complete a cycle.
 * Time between two identical syzygies, equivalent of 29.53059 Earth days.
 *
 * Based on Mean Synodic Month, 2000 AD mean solar days.
 * @type {number}
 */
export const SYNODIC_MONTH: number = 29.53058770576;
