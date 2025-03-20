import { c as createLucideIcon, $ as $1CM7W$react, r as reactExports, a5 as clsx$2, k as reactDomExports, j as jsxRuntimeExports, af as twMerge$1, ag as extendTailwindMerge$1, u as useNavigate, p as useToast, O as Badge, B as Button, X, q as Calendar, C as Clock, U as User, Q as AnimatePresence, n as motion } from './index-BxW4NEkE.js';
import { D as DashboardLayout } from './DashboardLayout-BYaHOMeS.js';
import { C as Card, b as CardHeader, a as CardContent, c as CardTitle, e as CardDescription } from './card-B_2urvVV.js';
import { r as rescheduleAppointment, g as getPaymentCheckoutUrl, c as getAppointmentDetails, P as Package2, d as getChildAppointments } from './payment-C2zUwE8N.js';
import { g as getChildren } from './children-CDjq7Dbq.js';
import { D as Dialog, c as DialogContent, f as DialogHeader, g as DialogTitle } from './dialog-3s5tW-4P.js';
import { L as Label } from './label-CC7x5zSE.js';
import { p as parseISO } from './parseISO-wIMaF3nH.js';
import { L as LoaderCircle } from './loader-circle-CmNZu_CB.js';
import { S as Syringe } from './syringe-BY_crmr6.js';
import { F as FileText } from './file-text-C0z9tgvb.js';
import { C as CalendarDays, E as Eye } from './eye-jyNZp3xw.js';
import { I as Info } from './info-DnawUoCu.js';
import { o as format } from './format-CqEybc0i.js';
import { S as Skeleton } from './skeleton-Dc4Ew3Pt.js';
import { C as ChevronUp, a as ChevronDown } from './chevron-up-wBRuSHft.js';
import { R as RefreshCw } from './refresh-cw-_HVOApyi.js';
import './users-DfEX5jUe.js';
import './index-BZ7ugsel.js';

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Banknote = createLucideIcon("Banknote", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CalendarClock = createLucideIcon("CalendarClock", [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
]);

/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CreditCard = createLucideIcon("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);

var $f23889fffbde9058$exports = {};
$f23889fffbde9058$exports = {
    "calendar": `\u{627}\u{644}\u{62A}\u{642}\u{648}\u{64A}\u{645}`,
    "day": `\u{64A}\u{648}\u{645}`,
    "dayPeriod": `\u{635}/\u{645}`,
    "endDate": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}`,
    "era": `\u{627}\u{644}\u{639}\u{635}\u{631}`,
    "hour": `\u{627}\u{644}\u{633}\u{627}\u{639}\u{627}\u{62A}`,
    "minute": `\u{627}\u{644}\u{62F}\u{642}\u{627}\u{626}\u{642}`,
    "month": `\u{627}\u{644}\u{634}\u{647}\u{631}`,
    "second": `\u{627}\u{644}\u{62B}\u{648}\u{627}\u{646}\u{64A}`,
    "selectedDateDescription": (args)=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.startDate} \u{625}\u{644}\u{649} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.time}`,
    "startDate": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621}`,
    "timeZoneName": `\u{627}\u{644}\u{62A}\u{648}\u{642}\u{64A}\u{62A}`,
    "weekday": `\u{627}\u{644}\u{64A}\u{648}\u{645}`,
    "year": `\u{627}\u{644}\u{633}\u{646}\u{629}`
};

var $09d9badaa8903929$exports = {};
$09d9badaa8903929$exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
    "day": `\u{434}\u{435}\u{43D}`,
    "dayPeriod": `\u{43F}\u{440}.\u{43E}\u{431}./\u{441}\u{43B}.\u{43E}\u{431}.`,
    "endDate": `\u{41A}\u{440}\u{430}\u{439}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{447}\u{430}\u{441}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
    "month": `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.startDate} \u{434}\u{43E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${args.time}`,
    "startDate": `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
    "weekday": `\u{434}\u{435}\u{43D} \u{43E}\u{442} \u{441}\u{435}\u{434}\u{43C}\u{438}\u{446}\u{430}\u{442}\u{430}`,
    "year": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`
};

var $151b77e0fd711730$exports = {};
$151b77e0fd711730$exports = {
    "calendar": `Kalend\xe1\u{159}`,
    "day": `den`,
    "dayPeriod": `\u{10D}\xe1st dne`,
    "endDate": `Kone\u{10D}n\xe9 datum`,
    "era": `letopo\u{10D}et`,
    "hour": `hodina`,
    "minute": `minuta`,
    "month": `m\u{11B}s\xedc`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Vybran\xe9 datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybran\xe9 obdob\xed: ${args.startDate} a\u{17E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vybran\xfd \u{10D}as: ${args.time}`,
    "startDate": `Po\u{10D}\xe1te\u{10D}n\xed datum`,
    "timeZoneName": `\u{10D}asov\xe9 p\xe1smo`,
    "weekday": `den v t\xfddnu`,
    "year": `rok`
};

var $61915aa8630b90a2$exports = {};
$61915aa8630b90a2$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `AM/PM`,
    "endDate": `Slutdato`,
    "era": `\xe6ra`,
    "hour": `time`,
    "minute": `minut`,
    "month": `m\xe5ned`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt interval: ${args.startDate} til ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valgt tidspunkt: ${args.time}`,
    "startDate": `Startdato`,
    "timeZoneName": `tidszone`,
    "weekday": `ugedag`,
    "year": `\xe5r`
};

var $35cea00159787840$exports = {};
$35cea00159787840$exports = {
    "calendar": `Kalender`,
    "day": `Tag`,
    "dayPeriod": `Tagesh\xe4lfte`,
    "endDate": `Enddatum`,
    "era": `Epoche`,
    "hour": `Stunde`,
    "minute": `Minute`,
    "month": `Monat`,
    "second": `Sekunde`,
    "selectedDateDescription": (args)=>`Ausgew\xe4hltes Datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Ausgew\xe4hlter Bereich: ${args.startDate} bis ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ausgew\xe4hlte Zeit: ${args.time}`,
    "startDate": `Anfangsdatum`,
    "timeZoneName": `Zeitzone`,
    "weekday": `Wochentag`,
    "year": `Jahr`
};

var $518b4e82b9eacafd$exports = {};
$518b4e82b9eacafd$exports = {
    "calendar": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BB}\u{3CC}\u{3B3}\u{3B9}\u{3BF}`,
    "day": `\u{3B7}\u{3BC}\u{3AD}\u{3C1}\u{3B1}`,
    "dayPeriod": `\u{3C0}.\u{3BC}./\u{3BC}.\u{3BC}.`,
    "endDate": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}`,
    "era": `\u{3C0}\u{3B5}\u{3C1}\u{3AF}\u{3BF}\u{3B4}\u{3BF}\u{3C2}`,
    "hour": `\u{3CE}\u{3C1}\u{3B1}`,
    "minute": `\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3CC}`,
    "month": `\u{3BC}\u{3AE}\u{3BD}\u{3B1}\u{3C2}`,
    "second": `\u{3B4}\u{3B5}\u{3C5}\u{3C4}\u{3B5}\u{3C1}\u{3CC}\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3BF}`,
    "selectedDateDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${args.startDate} \u{3AD}\u{3C9}\u{3C2} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${args.time}`,
    "startDate": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2}`,
    "timeZoneName": `\u{3B6}\u{3CE}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}\u{3C2}`,
    "weekday": `\u{3BA}\u{3B1}\u{3B8}\u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3B9}\u{3BD}\u{3AE}`,
    "year": `\u{3AD}\u{3C4}\u{3BF}\u{3C2}`
};

var $1c2b297f7e2cf474$exports = {};
$1c2b297f7e2cf474$exports = {
    "era": `era`,
    "year": `year`,
    "month": `month`,
    "day": `day`,
    "hour": `hour`,
    "minute": `minute`,
    "second": `second`,
    "dayPeriod": `AM/PM`,
    "calendar": `Calendar`,
    "startDate": `Start Date`,
    "endDate": `End Date`,
    "weekday": `day of the week`,
    "timeZoneName": `time zone`,
    "selectedDateDescription": (args)=>`Selected Date: ${args.date}`,
    "selectedRangeDescription": (args)=>`Selected Range: ${args.startDate} to ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Selected Time: ${args.time}`
};

var $07f628a707cf9b18$exports = {};
$07f628a707cf9b18$exports = {
    "calendar": `Calendario`,
    "day": `d\xeda`,
    "dayPeriod": `a.\xa0m./p.\xa0m.`,
    "endDate": `Fecha final`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `mes`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Fecha seleccionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Rango seleccionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora seleccionada: ${args.time}`,
    "startDate": `Fecha de inicio`,
    "timeZoneName": `zona horaria`,
    "weekday": `d\xeda de la semana`,
    "year": `a\xf1o`
};

var $db553ffe17c7f4db$exports = {};
$db553ffe17c7f4db$exports = {
    "calendar": `Kalender`,
    "day": `p\xe4ev`,
    "dayPeriod": `enne/p\xe4rast l\xf5unat`,
    "endDate": `L\xf5ppkuup\xe4ev`,
    "era": `ajastu`,
    "hour": `tund`,
    "minute": `minut`,
    "month": `kuu`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valitud kuup\xe4ev: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valitud vahemik: ${args.startDate} kuni ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valitud aeg: ${args.time}`,
    "startDate": `Alguskuup\xe4ev`,
    "timeZoneName": `ajav\xf6\xf6nd`,
    "weekday": `n\xe4dalap\xe4ev`,
    "year": `aasta`
};

var $4afcfe00cd703f83$exports = {};
$4afcfe00cd703f83$exports = {
    "calendar": `Kalenteri`,
    "day": `p\xe4iv\xe4`,
    "dayPeriod": `vuorokaudenaika`,
    "endDate": `P\xe4\xe4ttymisp\xe4iv\xe4`,
    "era": `aikakausi`,
    "hour": `tunti`,
    "minute": `minuutti`,
    "month": `kuukausi`,
    "second": `sekunti`,
    "selectedDateDescription": (args)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valittu aikav\xe4li: ${args.startDate} \u{2013} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valittu aika: ${args.time}`,
    "startDate": `Alkamisp\xe4iv\xe4`,
    "timeZoneName": `aikavy\xf6hyke`,
    "weekday": `viikonp\xe4iv\xe4`,
    "year": `vuosi`
};

var $1d2645d18d4c5be0$exports = {};
$1d2645d18d4c5be0$exports = {
    "calendar": `Calendrier`,
    "day": `jour`,
    "dayPeriod": `cadran`,
    "endDate": `Date de fin`,
    "era": `\xe8re`,
    "hour": `heure`,
    "minute": `minute`,
    "month": `mois`,
    "second": `seconde`,
    "selectedDateDescription": (args)=>`Date s\xe9lectionn\xe9e\xa0: ${args.date}`,
    "selectedRangeDescription": (args)=>`Plage s\xe9lectionn\xe9e\xa0: ${args.startDate} au ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Heure choisie\xa0: ${args.time}`,
    "startDate": `Date de d\xe9but`,
    "timeZoneName": `fuseau horaire`,
    "weekday": `jour de la semaine`,
    "year": `ann\xe9e`
};

var $64cb6a9be1f6fa48$exports = {};
$64cb6a9be1f6fa48$exports = {
    "calendar": `\u{5DC}\u{5D5}\u{5D7} \u{5E9}\u{5E0}\u{5D4}`,
    "day": `\u{5D9}\u{5D5}\u{5DD}`,
    "dayPeriod": `\u{5DC}\u{5E4}\u{5E0}\u{5D4}\u{5F4}\u{5E6}/\u{5D0}\u{5D7}\u{5D4}\u{5F4}\u{5E6}`,
    "endDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E1}\u{5D9}\u{5D5}\u{5DD}`,
    "era": `\u{5EA}\u{5E7}\u{5D5}\u{5E4}\u{5D4}`,
    "hour": `\u{5E9}\u{5E2}\u{5D4}`,
    "minute": `\u{5D3}\u{5E7}\u{5D4}`,
    "month": `\u{5D7}\u{5D5}\u{5D3}\u{5E9}`,
    "second": `\u{5E9}\u{5E0}\u{5D9}\u{5D9}\u{5D4}`,
    "selectedDateDescription": (args)=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.startDate} \u{5E2}\u{5D3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.time}`,
    "startDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4}`,
    "timeZoneName": `\u{5D0}\u{5D6}\u{5D5}\u{5E8} \u{5D6}\u{5DE}\u{5DF}`,
    "weekday": `\u{5D9}\u{5D5}\u{5DD} \u{5D1}\u{5E9}\u{5D1}\u{5D5}\u{5E2}`,
    "year": `\u{5E9}\u{5E0}\u{5D4}`
};

var $2a1ef2e8050be27a$exports = {};
$2a1ef2e8050be27a$exports = {
    "calendar": `Kalendar`,
    "day": `dan`,
    "dayPeriod": `AM/PM`,
    "endDate": `Datum zavr\u{161}etka`,
    "era": `era`,
    "hour": `sat`,
    "minute": `minuta`,
    "month": `mjesec`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Odabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Odabrani raspon: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Odabrano vrijeme: ${args.time}`,
    "startDate": `Datum po\u{10D}etka`,
    "timeZoneName": `vremenska zona`,
    "weekday": `dan u tjednu`,
    "year": `godina`
};

var $ad429dca102acd0e$exports = {};
$ad429dca102acd0e$exports = {
    "calendar": `Napt\xe1r`,
    "day": `nap`,
    "dayPeriod": `napszak`,
    "endDate": `Befejez\u{151} d\xe1tum`,
    "era": `\xe9ra`,
    "hour": `\xf3ra`,
    "minute": `perc`,
    "month": `h\xf3nap`,
    "second": `m\xe1sodperc`,
    "selectedDateDescription": (args)=>`Kijel\xf6lt d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Kijel\xf6lt tartom\xe1ny: ${args.startDate}\u{2013}${args.endDate}`,
    "selectedTimeDescription": (args)=>`Kijel\xf6lt id\u{151}: ${args.time}`,
    "startDate": `Kezd\u{151} d\xe1tum`,
    "timeZoneName": `id\u{151}z\xf3na`,
    "weekday": `h\xe9t napja`,
    "year": `\xe9v`
};

var $6e68cb5d1cb97bd2$exports = {};
$6e68cb5d1cb97bd2$exports = {
    "calendar": `Calendario`,
    "day": `giorno`,
    "dayPeriod": `AM/PM`,
    "endDate": `Data finale`,
    "era": `era`,
    "hour": `ora`,
    "minute": `minuto`,
    "month": `mese`,
    "second": `secondo`,
    "selectedDateDescription": (args)=>`Data selezionata: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervallo selezionato: da ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ora selezionata: ${args.time}`,
    "startDate": `Data iniziale`,
    "timeZoneName": `fuso orario`,
    "weekday": `giorno della settimana`,
    "year": `anno`
};

var $a82ee9af063ee069$exports = {};
$a82ee9af063ee069$exports = {
    "calendar": `\u{30AB}\u{30EC}\u{30F3}\u{30C0}\u{30FC}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{5348}\u{524D}/\u{5348}\u{5F8C}`,
    "endDate": `\u{7D42}\u{4E86}\u{65E5}`,
    "era": `\u{6642}\u{4EE3}`,
    "hour": `\u{6642}`,
    "minute": `\u{5206}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${args.startDate} \u{304B}\u{3089} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${args.time}`,
    "startDate": `\u{958B}\u{59CB}\u{65E5}`,
    "timeZoneName": `\u{30BF}\u{30A4}\u{30E0}\u{30BE}\u{30FC}\u{30F3}`,
    "weekday": `\u{66DC}\u{65E5}`,
    "year": `\u{5E74}`
};

var $67e9091dbf37d4eb$exports = {};
$67e9091dbf37d4eb$exports = {
    "calendar": `\u{B2EC}\u{B825}`,
    "day": `\u{C77C}`,
    "dayPeriod": `\u{C624}\u{C804}/\u{C624}\u{D6C4}`,
    "endDate": `\u{C885}\u{B8CC}\u{C77C}`,
    "era": `\u{C5F0}\u{D638}`,
    "hour": `\u{C2DC}`,
    "minute": `\u{BD84}`,
    "month": `\u{C6D4}`,
    "second": `\u{CD08}`,
    "selectedDateDescription": (args)=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${args.startDate} ~ ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${args.time}`,
    "startDate": `\u{C2DC}\u{C791}\u{C77C}`,
    "timeZoneName": `\u{C2DC}\u{AC04}\u{B300}`,
    "weekday": `\u{C694}\u{C77C}`,
    "year": `\u{B144}`
};

var $75834f9729f653d1$exports = {};
$75834f9729f653d1$exports = {
    "calendar": `Kalendorius`,
    "day": `diena`,
    "dayPeriod": `iki piet\u{173} / po piet\u{173}`,
    "endDate": `Pabaigos data`,
    "era": `era`,
    "hour": `valanda`,
    "minute": `minut\u{117}`,
    "month": `m\u{117}nuo`,
    "second": `sekund\u{117}`,
    "selectedDateDescription": (args)=>`Pasirinkta data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Pasirinktas intervalas: nuo ${args.startDate} iki ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Pasirinktas laikas: ${args.time}`,
    "startDate": `Prad\u{17E}ios data`,
    "timeZoneName": `laiko juosta`,
    "weekday": `savait\u{117}s diena`,
    "year": `metai`
};

var $a2df2c2520b4a7f0$exports = {};
$a2df2c2520b4a7f0$exports = {
    "calendar": `Kalend\u{101}rs`,
    "day": `diena`,
    "dayPeriod": `priek\u{161}pusdien\u{101}/p\u{113}cpusdien\u{101}`,
    "endDate": `Beigu datums`,
    "era": `\u{113}ra`,
    "hour": `stundas`,
    "minute": `min\u{16B}tes`,
    "month": `m\u{113}nesis`,
    "second": `sekundes`,
    "selectedDateDescription": (args)=>`Atlas\u{12B}tais datums: ${args.date}`,
    "selectedRangeDescription": (args)=>`Atlas\u{12B}tais diapazons: no ${args.startDate} l\u{12B}dz ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Atlas\u{12B}tais laiks: ${args.time}`,
    "startDate": `S\u{101}kuma datums`,
    "timeZoneName": `laika josla`,
    "weekday": `ned\u{113}\u{13C}as diena`,
    "year": `gads`
};

var $aedcd71db4933ed5$exports = {};
$aedcd71db4933ed5$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `a.m./p.m.`,
    "endDate": `Sluttdato`,
    "era": `tidsalder`,
    "hour": `time`,
    "minute": `minutt`,
    "month": `m\xe5ned`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt omr\xe5de: ${args.startDate} til ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valgt tid: ${args.time}`,
    "startDate": `Startdato`,
    "timeZoneName": `tidssone`,
    "weekday": `ukedag`,
    "year": `\xe5r`
};

var $3b2df9e54353046c$exports = {};
$3b2df9e54353046c$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `a.m./p.m.`,
    "endDate": `Einddatum`,
    "era": `tijdperk`,
    "hour": `uur`,
    "minute": `minuut`,
    "month": `maand`,
    "second": `seconde`,
    "selectedDateDescription": (args)=>`Geselecteerde datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Geselecteerd bereik: ${args.startDate} tot ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Geselecteerde tijd: ${args.time}`,
    "startDate": `Startdatum`,
    "timeZoneName": `tijdzone`,
    "weekday": `dag van de week`,
    "year": `jaar`
};

var $c03fe977fcfafe93$exports = {};
$c03fe977fcfafe93$exports = {
    "calendar": `Kalendarz`,
    "day": `dzie\u{144}`,
    "dayPeriod": `rano / po po\u{142}udniu / wieczorem`,
    "endDate": `Data ko\u{144}cowa`,
    "era": `era`,
    "hour": `godzina`,
    "minute": `minuta`,
    "month": `miesi\u{105}c`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Wybrana data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Wybrany zakres: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Wybrany czas: ${args.time}`,
    "startDate": `Data pocz\u{105}tkowa`,
    "timeZoneName": `strefa czasowa`,
    "weekday": `dzie\u{144} tygodnia`,
    "year": `rok`
};

var $569f006fc292345f$exports = {};
$569f006fc292345f$exports = {
    "calendar": `Calend\xe1rio`,
    "day": `dia`,
    "dayPeriod": `AM/PM`,
    "endDate": `Data final`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `m\xeas`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora selecionada: ${args.time}`,
    "startDate": `Data inicial`,
    "timeZoneName": `fuso hor\xe1rio`,
    "weekday": `dia da semana`,
    "year": `ano`
};

var $7c2494e14452f2dd$exports = {};
$7c2494e14452f2dd$exports = {
    "calendar": `Calend\xe1rio`,
    "day": `dia`,
    "dayPeriod": `am/pm`,
    "endDate": `Data de T\xe9rmino`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `m\xeas`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora selecionada: ${args.time}`,
    "startDate": `Data de In\xedcio`,
    "timeZoneName": `fuso hor\xe1rio`,
    "weekday": `dia da semana`,
    "year": `ano`
};

var $eb82ef981b5592bf$exports = {};
$eb82ef981b5592bf$exports = {
    "calendar": `Calendar`,
    "day": `zi`,
    "dayPeriod": `a.m/p.m.`,
    "endDate": `Dat\u{103} final`,
    "era": `er\u{103}`,
    "hour": `or\u{103}`,
    "minute": `minut`,
    "month": `lun\u{103}`,
    "second": `secund\u{103}`,
    "selectedDateDescription": (args)=>`Dat\u{103} selectat\u{103}: ${args.date}`,
    "selectedRangeDescription": (args)=>`Interval selectat: de la ${args.startDate} p\xe2n\u{103} la ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ora selectat\u{103}: ${args.time}`,
    "startDate": `Dat\u{103} \xeenceput`,
    "timeZoneName": `fus orar`,
    "weekday": `ziua din s\u{103}pt\u{103}m\xe2n\u{103}`,
    "year": `an`
};

var $6efa0e119f396950$exports = {};
$6efa0e119f396950$exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}\u{44C}`,
    "day": `\u{434}\u{435}\u{43D}\u{44C}`,
    "dayPeriod": `AM/PM`,
    "endDate": `\u{414}\u{430}\u{442}\u{430} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}`,
    "era": `\u{44D}\u{440}\u{430}`,
    "hour": `\u{447}\u{430}\u{441}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
    "month": `\u{43C}\u{435}\u{441}\u{44F}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${args.startDate} \u{43F}\u{43E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${args.time}`,
    "startDate": `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{43E}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
    "weekday": `\u{434}\u{435}\u{43D}\u{44C} \u{43D}\u{435}\u{434}\u{435}\u{43B}\u{438}`,
    "year": `\u{433}\u{43E}\u{434}`
};

var $7f5e57085d7f5049$exports = {};
$7f5e57085d7f5049$exports = {
    "calendar": `Kalend\xe1r`,
    "day": `de\u{148}`,
    "dayPeriod": `AM/PM`,
    "endDate": `D\xe1tum ukon\u{10D}enia`,
    "era": `letopo\u{10D}et`,
    "hour": `hodina`,
    "minute": `min\xfata`,
    "month": `mesiac`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Vybrat\xfd d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybrat\xfd rozsah: od ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vybrat\xfd \u{10D}as: ${args.time}`,
    "startDate": `D\xe1tum za\u{10D}atia`,
    "timeZoneName": `\u{10D}asov\xe9 p\xe1smo`,
    "weekday": `de\u{148} t\xfd\u{17E}d\u{148}a`,
    "year": `rok`
};

var $578ee7c11dcdde7a$exports = {};
$578ee7c11dcdde7a$exports = {
    "calendar": `Koledar`,
    "day": `dan`,
    "dayPeriod": `dop/pop`,
    "endDate": `Datum konca`,
    "era": `doba`,
    "hour": `ura`,
    "minute": `minuta`,
    "month": `mesec`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Izbrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izbrano obmo\u{10D}je: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Izbrani \u{10D}as: ${args.time}`,
    "startDate": `Datum za\u{10D}etka`,
    "timeZoneName": `\u{10D}asovni pas`,
    "weekday": `dan v tednu`,
    "year": `leto`
};

var $bbc3fd6cd0bc9d50$exports = {};
$bbc3fd6cd0bc9d50$exports = {
    "calendar": `Kalendar`,
    "day": `\u{434}\u{430}\u{43D}`,
    "dayPeriod": `\u{43F}\u{440}\u{435} \u{43F}\u{43E}\u{434}\u{43D}\u{435}/\u{43F}\u{43E} \u{43F}\u{43E}\u{434}\u{43D}\u{435}`,
    "endDate": `Datum zavr\u{161}etka`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{441}\u{430}\u{442}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}`,
    "month": `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`,
    "selectedDateDescription": (args)=>`Izabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izabrani opseg: od ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Izabrano vreme: ${args.time}`,
    "startDate": `Datum po\u{10D}etka`,
    "timeZoneName": `\u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{441}\u{43A}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
    "weekday": `\u{434}\u{430}\u{43D} \u{443} \u{43D}\u{435}\u{434}\u{435}\u{459}\u{438}`,
    "year": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`
};

var $0b04512118591d2a$exports = {};
$0b04512118591d2a$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `fm/em`,
    "endDate": `Slutdatum`,
    "era": `era`,
    "hour": `timme`,
    "minute": `minut`,
    "month": `m\xe5nad`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valt datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valt intervall: ${args.startDate} till ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vald tid: ${args.time}`,
    "startDate": `Startdatum`,
    "timeZoneName": `tidszon`,
    "weekday": `veckodag`,
    "year": `\xe5r`
};

var $3a49d121fe4c9e1d$exports = {};
$3a49d121fe4c9e1d$exports = {
    "calendar": `Takvim`,
    "day": `g\xfcn`,
    "dayPeriod": `\xd6\xd6/\xd6S`,
    "endDate": `Biti\u{15F} Tarihi`,
    "era": `\xe7a\u{11F}`,
    "hour": `saat`,
    "minute": `dakika`,
    "month": `ay`,
    "second": `saniye`,
    "selectedDateDescription": (args)=>`Se\xe7ilen Tarih: ${args.date}`,
    "selectedRangeDescription": (args)=>`Se\xe7ilen Aral\u{131}k: ${args.startDate} - ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Se\xe7ilen Zaman: ${args.time}`,
    "startDate": `Ba\u{15F}lang\u{131}\xe7 Tarihi`,
    "timeZoneName": `saat dilimi`,
    "weekday": `haftan\u{131}n g\xfcn\xfc`,
    "year": `y\u{131}l`
};

var $5ba21dbb8914919d$exports = {};
$5ba21dbb8914919d$exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
    "day": `\u{434}\u{435}\u{43D}\u{44C}`,
    "dayPeriod": `\u{434}\u{43F}/\u{43F}\u{43F}`,
    "endDate": `\u{414}\u{430}\u{442}\u{430} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`,
    "minute": `\u{445}\u{432}\u{438}\u{43B}\u{438}\u{43D}\u{430}`,
    "month": `\u{43C}\u{456}\u{441}\u{44F}\u{446}\u{44C}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.startDate} \u{2014} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${args.time}`,
    "startDate": `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{438}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
    "weekday": `\u{434}\u{435}\u{43D}\u{44C} \u{442}\u{438}\u{436}\u{43D}\u{44F}`,
    "year": `\u{440}\u{456}\u{43A}`
};

var $51078838e1b16cd7$exports = {};
$51078838e1b16cd7$exports = {
    "calendar": `\u{65E5}\u{5386}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
    "endDate": `\u{7ED3}\u{675F}\u{65E5}\u{671F}`,
    "era": `\u{7EAA}\u{5143}`,
    "hour": `\u{5C0F}\u{65F6}`,
    "minute": `\u{5206}\u{949F}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${args.startDate} \u{81F3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${args.time}`,
    "startDate": `\u{5F00}\u{59CB}\u{65E5}\u{671F}`,
    "timeZoneName": `\u{65F6}\u{533A}`,
    "weekday": `\u{5DE5}\u{4F5C}\u{65E5}`,
    "year": `\u{5E74}`
};

var $33fab8219207655a$exports = {};
$33fab8219207655a$exports = {
    "calendar": `\u{65E5}\u{66C6}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
    "endDate": `\u{7D50}\u{675F}\u{65E5}\u{671F}`,
    "era": `\u{7EAA}\u{5143}`,
    "hour": `\u{5C0F}\u{65F6}`,
    "minute": `\u{5206}\u{949F}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${args.startDate} \u{81F3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${args.time}`,
    "startDate": `\u{958B}\u{59CB}\u{65E5}\u{671F}`,
    "timeZoneName": `\u{65F6}\u{533A}`,
    "weekday": `\u{5DE5}\u{4F5C}\u{65E5}`,
    "year": `\u{5E74}`
};

var $dfb4eba373ed9493$exports = {};


































$dfb4eba373ed9493$exports = {
    "ar-AE": $f23889fffbde9058$exports,
    "bg-BG": $09d9badaa8903929$exports,
    "cs-CZ": $151b77e0fd711730$exports,
    "da-DK": $61915aa8630b90a2$exports,
    "de-DE": $35cea00159787840$exports,
    "el-GR": $518b4e82b9eacafd$exports,
    "en-US": $1c2b297f7e2cf474$exports,
    "es-ES": $07f628a707cf9b18$exports,
    "et-EE": $db553ffe17c7f4db$exports,
    "fi-FI": $4afcfe00cd703f83$exports,
    "fr-FR": $1d2645d18d4c5be0$exports,
    "he-IL": $64cb6a9be1f6fa48$exports,
    "hr-HR": $2a1ef2e8050be27a$exports,
    "hu-HU": $ad429dca102acd0e$exports,
    "it-IT": $6e68cb5d1cb97bd2$exports,
    "ja-JP": $a82ee9af063ee069$exports,
    "ko-KR": $67e9091dbf37d4eb$exports,
    "lt-LT": $75834f9729f653d1$exports,
    "lv-LV": $a2df2c2520b4a7f0$exports,
    "nb-NO": $aedcd71db4933ed5$exports,
    "nl-NL": $3b2df9e54353046c$exports,
    "pl-PL": $c03fe977fcfafe93$exports,
    "pt-BR": $569f006fc292345f$exports,
    "pt-PT": $7c2494e14452f2dd$exports,
    "ro-RO": $eb82ef981b5592bf$exports,
    "ru-RU": $6efa0e119f396950$exports,
    "sk-SK": $7f5e57085d7f5049$exports,
    "sl-SI": $578ee7c11dcdde7a$exports,
    "sr-SP": $bbc3fd6cd0bc9d50$exports,
    "sv-SE": $0b04512118591d2a$exports,
    "tr-TR": $3a49d121fe4c9e1d$exports,
    "uk-UA": $5ba21dbb8914919d$exports,
    "zh-CN": $51078838e1b16cd7$exports,
    "zh-TW": $33fab8219207655a$exports
};

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1 = typeof document !== 'undefined' ? ($1CM7W$react).useLayoutEffect : ()=>{};

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52$1(fn) {
    const ref = (reactExports.useRef)(null);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (reactExports.useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (reactExports.useState)(defaultValue);
    let effect = (reactExports.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}

const $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
const $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ ($1CM7W$react).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ ($1CM7W$react).createContext(false);
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (reactExports.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (reactExports.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ($1CM7W$react).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (reactExports.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = ($1CM7W$react).useId();
  let [didSSR] = (reactExports.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof ($1CM7W$react)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof ($1CM7W$react)["useSyncExternalStore"] === "function") return ($1CM7W$react)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (reactExports.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM$1 = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$export$d41a04c74483c6ef$1 = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $bdb11010cef70236$var$registry$1;
if (typeof FinalizationRegistry !== 'undefined') $bdb11010cef70236$var$registry$1 = new FinalizationRegistry((heldValue)=>{
    $bdb11010cef70236$export$d41a04c74483c6ef$1.delete(heldValue);
});
function $bdb11010cef70236$export$f680877a34711e37$1(defaultId) {
    let [value, setValue] = (reactExports.useState)(defaultId);
    let nextId = (reactExports.useRef)(null);
    let res = ($b5e257d569688ac6$export$619500959fc48b26)(value);
    let cleanupRef = (reactExports.useRef)(null);
    if ($bdb11010cef70236$var$registry$1) $bdb11010cef70236$var$registry$1.register(cleanupRef, res);
    if ($bdb11010cef70236$var$canUseDOM$1) {
        const cacheIdRef = $bdb11010cef70236$export$d41a04c74483c6ef$1.get(res);
        if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
        else $bdb11010cef70236$export$d41a04c74483c6ef$1.set(res, [
            nextId
        ]);
    }
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if ($bdb11010cef70236$var$registry$1) $bdb11010cef70236$var$registry$1.unregister(cleanupRef);
            $bdb11010cef70236$export$d41a04c74483c6ef$1.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (reactExports.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629$1(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef$1.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef$1.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37$1();
    let [resolvedId, setResolvedId] = ($1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (reactExports.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e$1(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}

const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
 */ function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
}

let $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
}

// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16


function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if (($431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document)=>{
    var _activeElement_shadowRoot;
    if (!($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement))activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if (($f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
        if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
}

// https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/ShadowTreeWalker.ts


class $dfc540311bf7f109$export$63eb3ababa9c55c4 {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(node) {
        if (!($d4ee10de306f2510$export$4282f70798064fe0)(this.root, node)) throw new Error('Cannot set currentNode to a node that is not contained by the root node.');
        const walkers = [];
        let curNode = node;
        let currentWalkerCurrentNode = node;
        this._currentNode = node;
        while(curNode && curNode !== this.root)if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            const shadowRoot = curNode;
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            walkers.push(walker);
            walker.currentNode = currentWalkerCurrentNode;
            this._currentSetFor.add(walker);
            curNode = currentWalkerCurrentNode = shadowRoot.host;
        } else curNode = curNode.parentNode;
        const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
        });
        walkers.push(walker);
        walker.currentNode = currentWalkerCurrentNode;
        this._currentSetFor.add(walker);
        this._walkerStack = walkers;
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let currentNode = this.currentNode;
        let newNode = this.nextNode();
        if (!($d4ee10de306f2510$export$4282f70798064fe0)(currentNode, newNode)) {
            this.currentNode = currentNode;
            return null;
        }
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    lastChild() {
        let walker = this._walkerStack[0];
        let newNode = walker.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    nextNode() {
        const nextNode = this._walkerStack[0].nextNode();
        if (nextNode) {
            const shadowRoot = nextNode.shadowRoot;
            if (shadowRoot) {
                var _this_filter;
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(nextNode);
                else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    this.currentNode = nextNode;
                    return nextNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (nextNode) this.currentNode = nextNode;
            return nextNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    previousNode() {
        const currentWalker = this._walkerStack[0];
        if (currentWalker.currentNode === currentWalker.root) {
            if (this._currentSetFor.has(currentWalker)) {
                this._currentSetFor.delete(currentWalker);
                if (this._walkerStack.length > 1) {
                    this._walkerStack.shift();
                    let newNode = this.previousNode();
                    if (newNode) this.currentNode = newNode;
                    return newNode;
                } else return null;
            }
            return null;
        }
        const previousNode = currentWalker.previousNode();
        if (previousNode) {
            const shadowRoot = previousNode.shadowRoot;
            if (shadowRoot) {
                var _this_filter;
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(previousNode);
                else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    if (previousNode) this.currentNode = previousNode;
                    return previousNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.lastChild();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (previousNode) this.currentNode = previousNode;
            return previousNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.previousNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    /**
     * @deprecated
     */ nextSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ previousSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ parentNode() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    constructor(doc, root, whatToShow, filter){
        this._walkerStack = [];
        this._currentSetFor = new Set();
        this._acceptNode = (node)=>{
            if (node.nodeType === Node.ELEMENT_NODE) {
                const shadowRoot = node.shadowRoot;
                if (shadowRoot) {
                    const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                        acceptNode: this._acceptNode
                    });
                    this._walkerStack.unshift(walker);
                    return NodeFilter.FILTER_ACCEPT;
                } else {
                    var _this_filter;
                    if (typeof this.filter === 'function') return this.filter(node);
                    else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) return this.filter.acceptNode(node);
                    else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
                }
            }
            return NodeFilter.FILTER_SKIP;
        };
        this._doc = doc;
        this.root = root;
        this.filter = filter !== null && filter !== void 0 ? filter : null;
        this.whatToShow = whatToShow !== null && whatToShow !== void 0 ? whatToShow : NodeFilter.SHOW_ALL;
        this._currentNode = root;
        this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
        const shadowRoot = root.shadowRoot;
        if (shadowRoot) {
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(walker);
        }
    }
}
function $dfc540311bf7f109$export$4d0f8be8b12a7ef6(doc, root, whatToShow, filter) {
    if (($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return new $dfc540311bf7f109$export$63eb3ababa9c55c4(doc, root, whatToShow, filter);
    return doc.createTreeWalker(root, whatToShow, filter);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928$1(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = ($ff5963eb1fccf552$export$e08e3b67e392101e$1)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (clsx$2)(a, b);
            else if (key === 'id' && a && b) result.id = ($bdb11010cef70236$export$cd8c9cb68f842629$1)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform$1(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached$1(fn) {
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $c87311424ea30a05$export$9ac100e40613ea10$1 = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testPlatform$1(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99$1 = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testPlatform$1(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224$1 = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testPlatform$1(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10$1() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1$1 = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$export$186c6964ca17d99$1() || $c87311424ea30a05$export$7bef049ce92e4224$1();
});
const $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
const $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached$1(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if (($c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
        if (($c87311424ea30a05$export$9ac100e40613ea10$1)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = ($c87311424ea30a05$export$78551043582a6a98)() && ($c87311424ea30a05$export$9ac100e40613ea10$1)() && !($c87311424ea30a05$export$7bef049ce92e4224$1)() && true ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    ($7215afc6de606d6b$export$de79e2c695e052f3)(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (reactExports.useRef)(new Map());
    let addGlobalListener = (reactExports.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (reactExports.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (reactExports.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (reactExports.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44$1(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = ($bdb11010cef70236$export$f680877a34711e37$1)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if (($c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !($c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}

const $b4b717babfbb907b$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])'
];
const $b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$b4b717babfbb907b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $b4b717babfbb907b$export$4c063cf1350e6fed(element) {
    return element.matches($b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR);
}
function $b4b717babfbb907b$export$bebd5a1431fec25d(element) {
    return element.matches($b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (reactExports.useState)(value || defaultValue);
    let isControlledRef = (reactExports.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (reactExports.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (reactExports.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $645f2e67b85a24c9$var$isStyleVisible(element) {
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if (($c87311424ea30a05$export$fedb369cb70207f1$1)()) {
        if ($14c0b72509d70225$var$state === 'default') {
            const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(target);
            $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        $14c0b72509d70225$var$state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if (($c87311424ea30a05$export$fedb369cb70207f1$1)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== 'disabled') return;
        $14c0b72509d70225$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            ($bbed8b41f857bcc0$export$24490316f764c430)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === 'restoring') {
                    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                    $14c0b72509d70225$var$savedUserSelect = '';
                    $14c0b72509d70225$var$state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = ($1CM7W$react).createContext({
    register: ()=>{}
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (reactExports.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (reactExports.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
function $8a9cb279dc87e130$export$cabe61c495ee3649(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !($b4b717babfbb907b$export$4c063cf1350e6fed)(target))target = target.parentElement;
    let window = ($431fbd86ca7dc216$export$f21a1ffae260145a)(target);
    let activeElement = window.document.activeElement;
    if (!activeElement || activeElement === target) return;
    $8a9cb279dc87e130$export$fda7da73ab5d4c48 = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if (e.target === activeElement || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if (e.target === activeElement || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                ($7215afc6de606d6b$export$de79e2c695e052f3)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if (e.target === target || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if (e.target === target || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                ($7215afc6de606d6b$export$de79e2c695e052f3)(activeElement);
                cleanup();
            }
        }
    };
    window.addEventListener('blur', onBlur, true);
    window.addEventListener('focusout', onFocusOut, true);
    window.addEventListener('focusin', onFocusIn, true);
    window.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        window.removeEventListener('blur', onBlur, true);
        window.removeEventListener('focusout', onFocusOut, true);
        window.removeEventListener('focusin', onFocusIn, true);
        window.removeEventListener('focus', onFocus, true);
        $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}

function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);

    return descriptor.value;
}

function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}

function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}

function _check_private_redeclaration$1(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}

function _class_private_field_init$1(obj, privateMap, value) {
    _check_private_redeclaration$1(obj, privateMap);
    privateMap.set(obj, value);
}

function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}

function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions









function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (reactExports.useContext)(($ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    if (context) {
        let { register: register, ...contextProps } = context;
        props = ($3ef42575df84b30b$export$9d1611c77c2fe928$1)(contextProps, props);
        register();
    }
    ($e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (_class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent, state){
        (_class_private_field_init$1)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        var _state_target;
        let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
        const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
    }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol('linkClicked');
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (reactExports.useState)(false);
    let ref = (reactExports.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null,
        disposables: []
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let triggerPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    });
    let triggerPressUp = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $f6c31cce2adf654f$var$PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        }
    });
    let cancelOnPointerExit = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (reactExports.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && ($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) {
                    var _state_metaKeyEvents;
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent), e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        state.pointerType = 'keyboard';
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                        // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                        let originalTarget = e.currentTarget;
                        let pressUp = (e)=>{
                            if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && ($d4ee10de306f2510$export$4282f70798064fe0)(originalTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e)) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
                        };
                        addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'keyup', ($ff5963eb1fccf552$export$e08e3b67e392101e$1)(pressUp, onKeyUp), true);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && ($c87311424ea30a05$export$9ac100e40613ea10$1)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !($ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || ($6a7db85432448f7f$export$60278871457622de)(e.nativeEvent))) {
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUp(e, 'virtual');
                        let stopPressEnd = triggerPressEnd(e, 'virtual');
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    } else if (state.isPressed && state.pointerType !== 'keyboard') {
                        let pointerType = state.pointerType || e.nativeEvent.pointerType || 'virtual';
                        shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType, true);
                        state.isOverTarget = false;
                        cancel(e);
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            var _state_metaKeyEvents;
            if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                var _state_metaKeyEvents1;
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e), e.key)) e.preventDefault();
                let target = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', ($d4ee10de306f2510$export$4282f70798064fe0)(state.target, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e)));
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && ($d4ee10de306f2510$export$4282f70798064fe0)(state.target, target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                    ($ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e, false);
                }
                state.isPressed = false;
                (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
            } else if (e.key === 'Meta' && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                var _state_target;
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if (($6a7db85432448f7f$export$29bf1b5f2c56cf63)(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    // Release pointer capture so that touch interactions can leave the original target.
                    // This enables onPointerLeave and onPointerEnter to fire.
                    let target = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent);
                    if ('releasePointerCapture' in target) target.releasePointerCapture(e.pointerId);
                    addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (e.button === 0) {
                    if (preventFocusOnPress) {
                        let dispose = ($8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
                        if (dispose) state.disposables.push(dispose);
                    }
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                if (e.button === 0) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            pressProps.onPointerEnter = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = true;
                    triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                }
            };
            pressProps.onPointerLeave = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if (($d4ee10de306f2510$export$4282f70798064fe0)(state.target, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e)) && state.pointerType != null) {
                        // Wait for onClick to fire onPress. This avoids browser issues when the DOM
                        // is mutated between onPointerUp and onClick, and is more compatible with third party libraries.
                        // https://github.com/adobe/react-spectrum/issues/1513
                        // https://issues.chromium.org/issues/40732224
                        // However, iOS and Android do not focus or fire onClick after a long press.
                        // We work around this by triggering a click ourselves after a timeout.
                        // This timeout is canceled during the click event in case the real one fires first.
                        // The timeout must be at least 32ms, because Safari on iOS delays the click event on
                        // non-form elements without certain ARIA roles (for hover emulation).
                        // https://github.com/WebKit/WebKit/blob/dccfae42bb29bd4bdef052e469f604a9387241c0/Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm#L875-L892
                        let clicked = false;
                        let timeout = setTimeout(()=>{
                            if (state.isPressed && state.target instanceof HTMLElement) {
                                if (clicked) cancel(e);
                                else {
                                    ($7215afc6de606d6b$export$de79e2c695e052f3)(state.target);
                                    state.target.click();
                                }
                            }
                        }, 80);
                        // Use a capturing listener to track if a click occurred.
                        // If stopPropagation is called it may never reach our handler.
                        addGlobalListener(e.currentTarget, 'click', ()=>clicked = true, true);
                        state.disposables.push(()=>clearTimeout(timeout));
                    } else cancel(e);
                    // Ignore subsequent onPointerLeave event before onClick on touch devices.
                    state.isOverTarget = false;
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            // NOTE: this fallback branch is almost entirely used by unit tests.
            // All browsers now support pointer events, but JSDOM still does not.
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = ($6a7db85432448f7f$export$60278871457622de)(e.nativeEvent) ? 'virtual' : 'mouse';
                // Flush sync so that focus moved during react re-renders occurs before we yield back to the browser.
                let shouldStopPropagation = (reactDomExports.flushSync)(()=>triggerPressStart(e, state.pointerType));
                if (shouldStopPropagation) e.stopPropagation();
                if (preventFocusOnPress) {
                    let dispose = ($8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
                    if (dispose) state.disposables.push(dispose);
                }
                addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || 'mouse');
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if (state.target && state.target.contains(e.target) && state.pointerType != null) ;
                else cancel(e);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener(($431fbd86ca7dc216$export$f21a1ffae260145a)(e.currentTarget), 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                    triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (state.target && !allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                e.stopPropagation();
                if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
            };
            let onScroll = (e)=>{
                if (state.isPressed && ($d4ee10de306f2510$export$4282f70798064fe0)(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e), state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (reactExports.useEffect)(()=>{
        let state = ref.current;
        return ()=>{
            var _state_target;
            if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)((_state_target = state.target) !== null && _state_target !== void 0 ? _state_target : undefined);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: ($3ef42575df84b30b$export$9d1611c77c2fe928$1)(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== 'Enter');
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
    return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !($c87311424ea30a05$export$9ac100e40613ea10$1)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if (($6a7db85432448f7f$export$60278871457622de)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document || ($8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    if ($8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get(($431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $3ad3f6e1647bc98d$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    const activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
    if (($507fabe10e71c6fb$export$630ff653c5ada6a9)() === 'virtual') {
        let lastFocusedElement = activeElement;
        ($bbed8b41f857bcc0$export$24490316f764c430)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) === lastFocusedElement && element.isConnected) ($7215afc6de606d6b$export$de79e2c695e052f3)(element);
        });
    } else ($7215afc6de606d6b$export$de79e2c695e052f3)(element);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (reactExports.useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let onBlur = (reactExports.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (reactExports.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(e.target);
        const activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                if (state.current.isFocusWithin && !($d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e.target)) {
                    let event = new ($8a9cb279dc87e130$export$905e7fc544a71f36)('blur', new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: e.target
                    }));
                    event.target = currentTarget;
                    event.currentTarget = currentTarget;
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    if (!element) return false;
    if (!scope) return false;
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, $3ad3f6e1647bc98d$export$80f3e147d781571c)(element);
    } catch  {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch  {
    // ignore
    }
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let filter = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? ($b4b717babfbb907b$export$bebd5a1431fec25d) : ($b4b717babfbb907b$export$4c063cf1350e6fed);
    // Ensure that root is an Element or fall back appropriately
    let rootElement = (root === null || root === void 0 ? void 0 : root.nodeType) === Node.ELEMENT_NODE ? root : null;
    // Determine the document to use
    let doc = ($431fbd86ca7dc216$export$b204af158042fbac)(rootElement);
    // Create a TreeWalker, ensuring the root is an Element or Document
    let walker = ($dfc540311bf7f109$export$4d0f8be8b12a7ef6)(doc, root || doc, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (filter(node) && ($645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)(root));
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)(root));
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next !== null && next !== void 0 ? next : null;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                let lastNode = $9bf71ea28793e738$var$last(walker);
                if (!lastNode) // couldn't wrap
                return null;
                previousNode = lastNode;
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode !== null && previousNode !== void 0 ? previousNode : null;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next !== null && next !== void 0 ? next : null;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next = undefined;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        if (!parentNode) return;
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        if (!node) return;
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        if (parentNode) {
            parentNode.removeChild(node);
            if (children.size > 0) children.forEach((child)=>parentNode && parentNode.addChild(child));
        }
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        var _node_parent;
        let newTree = new $9bf71ea28793e738$var$Tree();
        var _node_parent_scopeRef;
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
new $9bf71ea28793e738$var$Tree();

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? ($1CM7W$react).useLayoutEffect : ()=>{};

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (reactExports.useRef)(null);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (reactExports.useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$export$d41a04c74483c6ef = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $bdb11010cef70236$var$registry = new FinalizationRegistry((heldValue)=>{
    $bdb11010cef70236$export$d41a04c74483c6ef.delete(heldValue);
});
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (reactExports.useState)(defaultId);
    let nextId = (reactExports.useRef)(null);
    let res = ($b5e257d569688ac6$export$619500959fc48b26)(value);
    let cleanupRef = (reactExports.useRef)(null);
    $bdb11010cef70236$var$registry.register(cleanupRef, res);
    if ($bdb11010cef70236$var$canUseDOM) {
        const cacheIdRef = $bdb11010cef70236$export$d41a04c74483c6ef.get(res);
        if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
        else $bdb11010cef70236$export$d41a04c74483c6ef.set(res, [
            nextId
        ]);
    }
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            $bdb11010cef70236$var$registry.unregister(cleanupRef);
            $bdb11010cef70236$export$d41a04c74483c6ef.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (reactExports.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = ($ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (clsx$2)(a, b);
            else if (key === 'id' && a && b) result.id = ($bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === 'function') ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}

function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = ($bdb11010cef70236$export$f680877a34711e37)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (reactExports.useRef)(null);
    return (reactExports.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === 'function') forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if (($cc38e7bd3fc7b213$export$2bb74740c4e19def)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !($cc38e7bd3fc7b213$export$2bb74740c4e19def)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
    const scrollParents = [];
    while(node && node !== document.documentElement){
        if (($cc38e7bd3fc7b213$export$2bb74740c4e19def)(node, checkForOverflow)) scrollParents.push(node);
        node = node.parentElement;
    }
    return scrollParents;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (reactExports.useState)();
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (reactExports.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left + scroll padding
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth, scrollPaddingTop: scrollPaddingTop, scrollPaddingRight: scrollPaddingRight, scrollPaddingBottom: scrollPaddingBottom, scrollPaddingLeft: scrollPaddingLeft } = getComputedStyle(scrollView);
    let borderAdjustedX = x + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = y + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    // Get scroll padding values as pixels - defaults to 0 if no scroll padding
    // is used.
    let scrollPaddingTopNumber = parseInt(scrollPaddingTop, 10) || 0;
    let scrollPaddingBottomNumber = parseInt(scrollPaddingBottom, 10) || 0;
    let scrollPaddingRightNumber = parseInt(scrollPaddingRight, 10) || 0;
    let scrollPaddingLeftNumber = parseInt(scrollPaddingLeft, 10) || 0;
    if (offsetX <= x + scrollPaddingLeftNumber) x = offsetX - parseInt(borderLeftWidth, 10) - scrollPaddingLeftNumber;
    else if (offsetX + width > maxX - scrollPaddingRightNumber) x += offsetX + width - maxX + scrollPaddingRightNumber;
    if (offsetY <= borderAdjustedY + scrollPaddingTopNumber) y = offsetY - parseInt(borderTopWidth, 10) - scrollPaddingTopNumber;
    else if (offsetY + height > maxY - scrollPaddingBottomNumber) y += offsetY + height - maxY + scrollPaddingBottomNumber;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (targetElement && document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: 'nearest'
                });
            }
        } else {
            let scrollParents = ($a40c673dc9f6d9c7$export$94ed1c92c7beeb22)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            for (let scrollParent of scrollParents)$2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
        }
    }
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (reactExports.useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (reactExports.useRef)(initialValue);
    let handleReset = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (reactExports.useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS$1 = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS$1 = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764$1(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS$1.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS$1.has(lang);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


// Locale passed from server by PackageLocalizationProvider.
const $1e5a04cdaf7d1af8$var$localeSymbol$1 = Symbol.for('react-aria.i18n.locale');
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5$1() {
    let locale = typeof window !== 'undefined' && window[$1e5a04cdaf7d1af8$var$localeSymbol$1] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: ($148a7a147e38ea7f$export$702d680b21cbd764$1)(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale$1 = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5$1();
let $1e5a04cdaf7d1af8$var$listeners$1 = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale$1() {
    $1e5a04cdaf7d1af8$var$currentLocale$1 = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5$1();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners$1)listener($1e5a04cdaf7d1af8$var$currentLocale$1);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a$1() {
    let isSSR = ($b5e257d569688ac6$export$535bd6ca7f90a273)();
    let [defaultLocale, setDefaultLocale] = (reactExports.useState)($1e5a04cdaf7d1af8$var$currentLocale$1);
    (reactExports.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners$1.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale$1);
        $1e5a04cdaf7d1af8$var$listeners$1.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners$1.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners$1.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale$1);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $18f2051aff69b9bf$var$I18nContext$1 = /*#__PURE__*/ ($1CM7W$react).createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1() {
    let defaultLocale = ($1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a$1)();
    let context = (reactExports.useContext)($18f2051aff69b9bf$var$I18nContext$1);
    return context || defaultLocale;
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $5b160d28a433310d$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $5b160d28a433310d$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $5b160d28a433310d$var$cachedGlobalStrings = undefined;
class $5b160d28a433310d$export$c17fa47878dc55b6 {
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$5b160d28a433310d$var$localeSymbol];
        if ($5b160d28a433310d$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
            if (!globalStrings) return null;
            $5b160d28a433310d$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $5b160d28a433310d$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6db58dc88e78b024$var$pluralRulesCache = new Map();
const $6db58dc88e78b024$var$numberFormatCache = new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache$1 = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary$1(strings) {
    let dictionary = $fca6afa0e843324b$var$cache$1.get(strings);
    if (!dictionary) {
        dictionary = new ($5b160d28a433310d$export$c17fa47878dc55b6)(strings);
        $fca6afa0e843324b$var$cache$1.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10$1(strings, packageName) {
    return packageName && ($5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary$1(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1$1(strings, packageName) {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10$1(strings, packageName);
    return (reactExports.useMemo)(()=>new ($6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, dictionary), [
        locale,
        dictionary
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2b4dce13dd5a17fa$export$842a2cf37af977e1$1(amount, numerator) {
    return amount - numerator * Math.floor(amount / numerator);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $3b62074eb05584b2$var$EPOCH$1 = 1721426; // 001/01/03 Julian C.E.
function $3b62074eb05584b2$export$f297eb839006d339$1(era, year, month, day) {
    year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d$1(era, year);
    let y1 = year - 1;
    let monthOffset = -2;
    if (month <= 2) monthOffset = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0$1(year)) monthOffset = -1;
    return $3b62074eb05584b2$var$EPOCH$1 - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0$1(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d$1(era, year) {
    return era === 'BC' ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c$1(year) {
    let era = 'AD';
    if (year <= 0) {
        era = 'BC';
        year = 1 - year;
    }
    return [
        era,
        year
    ];
}
const $3b62074eb05584b2$var$daysInMonth$1 = {
    standard: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    leapyear: [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
};
let $3b62074eb05584b2$export$80ee6245ec4f29ec$1 = class $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let jd0 = jd;
        let depoch = jd0 - $3b62074eb05584b2$var$EPOCH$1;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = ($2b4dce13dd5a17fa$export$842a2cf37af977e1$1)(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = ($2b4dce13dd5a17fa$export$842a2cf37af977e1$1)(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = ($2b4dce13dd5a17fa$export$842a2cf37af977e1$1)(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
        let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c$1(extendedYear);
        let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339$1(era, year, 1, 1);
        let leapAdj = 2;
        if (jd0 < $3b62074eb05584b2$export$f297eb839006d339$1(era, year, 3, 1)) leapAdj = 0;
        else if ($3b62074eb05584b2$export$553d7fa8e3805fc0$1(year)) leapAdj = 1;
        let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
        let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339$1(era, year, month, 1) + 1;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(era, year, month, day);
    }
    toJulianDay(date) {
        return $3b62074eb05584b2$export$f297eb839006d339$1(date.era, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $3b62074eb05584b2$var$daysInMonth$1[$3b62074eb05584b2$export$553d7fa8e3805fc0$1(date.year) ? 'leapyear' : 'standard'][date.month - 1];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMonthsInYear(date) {
        return 12;
    }
    getDaysInYear(date) {
        return $3b62074eb05584b2$export$553d7fa8e3805fc0$1(date.year) ? 366 : 365;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearsInEra(date) {
        return 9999;
    }
    getEras() {
        return [
            'BC',
            'AD'
        ];
    }
    isInverseEra(date) {
        return date.era === 'BC';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BC' ? 'AD' : 'BC';
            date.year = 1 - date.year;
        }
    }
    constructor(){
        this.identifier = 'gregory';
    }
};

function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
    return ($11d87f3f76e88657$export$1b96692a1ba042ac)(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
    return ($11d87f3f76e88657$export$93522d1a439f3617)($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f$1(a, b) {
    return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6$1(a, b) {
    return $14e0f24ef4ac5c92$var$timeToMs$1(a) - $14e0f24ef4ac5c92$var$timeToMs$1(b);
}
function $14e0f24ef4ac5c92$var$timeToMs$1(a) {
    return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
let $14e0f24ef4ac5c92$var$localTimeZone$1 = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2$1() {
    // TODO: invalidate this somehow?
    if ($14e0f24ef4ac5c92$var$localTimeZone$1 == null) $14e0f24ef4ac5c92$var$localTimeZone$1 = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return $14e0f24ef4ac5c92$var$localTimeZone$1;
}
function $14e0f24ef4ac5c92$export$5412ac11713b72ad(date) {
    if (date.calendar.getMinimumMonthInYear) return date.calendar.getMinimumMonthInYear(date);
    return 1;
}
function $14e0f24ef4ac5c92$export$b2f4953d301981d5(date) {
    if (date.calendar.getMinimumDayInMonth) return date.calendar.getMinimumDayInMonth(date);
    return 1;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.




function $11d87f3f76e88657$export$bd4fb2bc8bb06fb$1(date) {
    date = $11d87f3f76e88657$export$b4a036af3fc0b032$1(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)());
    let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d$1)(date.era, date.year);
    return $11d87f3f76e88657$var$epochFromParts$1(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts$1(year, month, day, hour, minute, second, millisecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    let date = new Date();
    date.setUTCHours(hour, minute, second, millisecond);
    date.setUTCFullYear(year, month - 1, day);
    return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f$1(ms, timeZone) {
    // Fast path for UTC.
    if (timeZone === 'UTC') return 0;
    // Fast path: for local timezone after 1970, use native Date.
    if (ms > 0 && timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2$1)()) return new Date(ms).getTimezoneOffset() * -6e4;
    let { year: year, month: month, day: day, hour: hour, minute: minute, second: second } = $11d87f3f76e88657$var$getTimeZoneParts$1(ms, timeZone);
    let utc = $11d87f3f76e88657$var$epochFromParts$1(year, month, day, hour, minute, second, 0);
    return utc - Math.floor(ms / 1000) * 1000;
}
const $11d87f3f76e88657$var$formattersByTimeZone$1 = new Map();
function $11d87f3f76e88657$var$getTimeZoneParts$1(ms, timeZone) {
    let formatter = $11d87f3f76e88657$var$formattersByTimeZone$1.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour12: false,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        $11d87f3f76e88657$var$formattersByTimeZone$1.set(timeZone, formatter);
    }
    let parts = formatter.formatToParts(new Date(ms));
    let namedParts = {};
    for (let part of parts)if (part.type !== 'literal') namedParts[part.type] = part.value;
    return {
        // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
        year: namedParts.era === 'BC' || namedParts.era === 'B' ? -namedParts.year + 1 : +namedParts.year,
        month: +namedParts.month,
        day: +namedParts.day,
        hour: namedParts.hour === '24' ? 0 : +namedParts.hour,
        minute: +namedParts.minute,
        second: +namedParts.second
    };
}
const $11d87f3f76e88657$var$DAYMILLIS$1 = 86400000;
function $11d87f3f76e88657$var$getValidWallTimes$1(date, timeZone, earlier, later) {
    let found = earlier === later ? [
        earlier
    ] : [
        earlier,
        later
    ];
    return found.filter((absolute)=>$11d87f3f76e88657$var$isValidWallTime$1(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime$1(date, timeZone, absolute) {
    let parts = $11d87f3f76e88657$var$getTimeZoneParts$1(absolute, timeZone);
    return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c$1(date, timeZone, disambiguation = 'compatible') {
    let dateTime = $11d87f3f76e88657$export$b21e0b124e224484$1(date);
    // Fast path: if the time zone is UTC, use native Date.
    if (timeZone === 'UTC') return $11d87f3f76e88657$export$bd4fb2bc8bb06fb$1(dateTime);
    // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
    if (timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2$1)() && disambiguation === 'compatible') {
        dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032$1(dateTime, new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)());
        // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
        let date = new Date();
        let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d$1)(dateTime.era, dateTime.year);
        date.setFullYear(year, dateTime.month - 1, dateTime.day);
        date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
        return date.getTime();
    }
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb$1(dateTime);
    let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f$1(ms - $11d87f3f76e88657$var$DAYMILLIS$1, timeZone);
    let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f$1(ms + $11d87f3f76e88657$var$DAYMILLIS$1, timeZone);
    let valid = $11d87f3f76e88657$var$getValidWallTimes$1(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
    if (valid.length === 1) return valid[0];
    if (valid.length > 1) switch(disambiguation){
        // 'compatible' means 'earlier' for "fall back" transitions
        case 'compatible':
        case 'earlier':
            return valid[0];
        case 'later':
            return valid[valid.length - 1];
        case 'reject':
            throw new RangeError('Multiple possible absolute times found');
    }
    switch(disambiguation){
        case 'earlier':
            return Math.min(ms - offsetBefore, ms - offsetAfter);
        // 'compatible' means 'later' for "spring forward" transitions
        case 'compatible':
        case 'later':
            return Math.max(ms - offsetBefore, ms - offsetAfter);
        case 'reject':
            throw new RangeError('No such absolute time found');
    }
}
function $11d87f3f76e88657$export$e67a095c620b86fe$1(dateTime, timeZone, disambiguation = 'compatible') {
    return new Date($11d87f3f76e88657$export$5107c82f94518f5c$1(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone) {
    let offset = $11d87f3f76e88657$export$59c99f3515d3493f$1(ms, timeZone);
    let date = new Date(ms + offset);
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();
    let millisecond = date.getUTCMilliseconds();
    return new ($35ea8db9cb2ccb90$export$d3b7288e7994edea)(year < 1 ? 'BC' : 'AD', year < 1 ? -year + 1 : year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484$1(date, time) {
    let hour = 0, minute = 0, second = 0, millisecond = 0;
    if ('timeZone' in date) ({ hour: hour, minute: minute, second: second, millisecond: millisecond } = date);
    else if ('hour' in date && !time) return date;
    if (time) ({ hour: hour, minute: minute, second: second, millisecond: millisecond } = time);
    return new ($35ea8db9cb2ccb90$export$ca871e8dbb80966f$1)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$d33f79e3ffc3dc83(dateTime) {
    return new ($35ea8db9cb2ccb90$export$680ea196effce5f$1)(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032$1(date, calendar) {
    if (date.calendar.identifier === calendar.identifier) return date;
    let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
    let copy = date.copy();
    copy.calendar = calendar;
    copy.era = calendarDate.era;
    copy.year = calendarDate.year;
    copy.month = calendarDate.month;
    copy.day = calendarDate.day;
    ($735220c2d4774dd3$export$c4e2ecac49351ef2$1)(copy);
    return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
    if (date instanceof ($35ea8db9cb2ccb90$export$d3b7288e7994edea)) {
        if (date.timeZone === timeZone) return date;
        return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
    }
    let ms = $11d87f3f76e88657$export$5107c82f94518f5c$1(date, timeZone, disambiguation);
    return $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb$1(date) - date.offset;
    return new Date(ms);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb$1(date) - date.offset;
    return $11d87f3f76e88657$export$b4a036af3fc0b032$1($11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone), date.calendar);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $735220c2d4774dd3$var$ONE_HOUR = 3600000;
function $735220c2d4774dd3$export$e16d8520af44a096$1(date, duration) {
    let mutableDate = date.copy();
    let days = 'hour' in mutableDate ? $735220c2d4774dd3$var$addTimeFields$1(mutableDate, duration) : 0;
    $735220c2d4774dd3$var$addYears$1(mutableDate, duration.years || 0);
    if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
    mutableDate.month += duration.months || 0;
    $735220c2d4774dd3$var$balanceYearMonth$1(mutableDate);
    $735220c2d4774dd3$var$constrainMonthDay$1(mutableDate);
    mutableDate.day += (duration.weeks || 0) * 7;
    mutableDate.day += duration.days || 0;
    mutableDate.day += days;
    $735220c2d4774dd3$var$balanceDay$1(mutableDate);
    if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
    // Constrain in case adding ended up with a date outside the valid range for the calendar system.
    // The behavior here is slightly different than when constraining in the `set` function in that
    // we adjust smaller fields to their minimum/maximum values rather than constraining each field
    // individually. This matches the general behavior of `add` vs `set` regarding how fields are balanced.
    if (mutableDate.year < 1) {
        mutableDate.year = 1;
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
    if (mutableDate.year > maxYear) {
        var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
        let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
        mutableDate.year = maxYear;
        mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
        mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    if (mutableDate.month < 1) {
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
    if (mutableDate.month > maxMonth) {
        mutableDate.month = maxMonth;
        mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
    return mutableDate;
}
function $735220c2d4774dd3$var$addYears$1(date, years) {
    var _date_calendar_isInverseEra, _date_calendar;
    if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
    date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth$1(date) {
    while(date.month < 1){
        $735220c2d4774dd3$var$addYears$1(date, -1);
        date.month += date.calendar.getMonthsInYear(date);
    }
    let monthsInYear = 0;
    while(date.month > (monthsInYear = date.calendar.getMonthsInYear(date))){
        date.month -= monthsInYear;
        $735220c2d4774dd3$var$addYears$1(date, 1);
    }
}
function $735220c2d4774dd3$var$balanceDay$1(date) {
    while(date.day < 1){
        date.month--;
        $735220c2d4774dd3$var$balanceYearMonth$1(date);
        date.day += date.calendar.getDaysInMonth(date);
    }
    while(date.day > date.calendar.getDaysInMonth(date)){
        date.day -= date.calendar.getDaysInMonth(date);
        date.month++;
        $735220c2d4774dd3$var$balanceYearMonth$1(date);
    }
}
function $735220c2d4774dd3$var$constrainMonthDay$1(date) {
    date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
    date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2$1(date) {
    if (date.calendar.constrainDate) date.calendar.constrainDate(date);
    date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
    $735220c2d4774dd3$var$constrainMonthDay$1(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8$1(duration) {
    let inverseDuration = {};
    for(let key in duration)if (typeof duration[key] === 'number') inverseDuration[key] = -duration[key];
    return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3$1(date, duration) {
    return $735220c2d4774dd3$export$e16d8520af44a096$1(date, $735220c2d4774dd3$export$3e2544e88a25bff8$1(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be$1(date, fields) {
    let mutableDate = date.copy();
    if (fields.era != null) mutableDate.era = fields.era;
    if (fields.year != null) mutableDate.year = fields.year;
    if (fields.month != null) mutableDate.month = fields.month;
    if (fields.day != null) mutableDate.day = fields.day;
    $735220c2d4774dd3$export$c4e2ecac49351ef2$1(mutableDate);
    return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56$1(value, fields) {
    let mutableValue = value.copy();
    if (fields.hour != null) mutableValue.hour = fields.hour;
    if (fields.minute != null) mutableValue.minute = fields.minute;
    if (fields.second != null) mutableValue.second = fields.second;
    if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
    $735220c2d4774dd3$export$7555de1e070510cb$1(mutableValue);
    return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime$1(time) {
    time.second += Math.floor(time.millisecond / 1000);
    time.millisecond = $735220c2d4774dd3$var$nonNegativeMod$1(time.millisecond, 1000);
    time.minute += Math.floor(time.second / 60);
    time.second = $735220c2d4774dd3$var$nonNegativeMod$1(time.second, 60);
    time.hour += Math.floor(time.minute / 60);
    time.minute = $735220c2d4774dd3$var$nonNegativeMod$1(time.minute, 60);
    let days = Math.floor(time.hour / 24);
    time.hour = $735220c2d4774dd3$var$nonNegativeMod$1(time.hour, 24);
    return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb$1(time) {
    time.millisecond = Math.max(0, Math.min(time.millisecond, 1000));
    time.second = Math.max(0, Math.min(time.second, 59));
    time.minute = Math.max(0, Math.min(time.minute, 59));
    time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod$1(a, b) {
    let result = a % b;
    if (result < 0) result += b;
    return result;
}
function $735220c2d4774dd3$var$addTimeFields$1(time, duration) {
    time.hour += duration.hours || 0;
    time.minute += duration.minutes || 0;
    time.second += duration.seconds || 0;
    time.millisecond += duration.milliseconds || 0;
    return $735220c2d4774dd3$var$balanceTime$1(time);
}
function $735220c2d4774dd3$export$7ed87b6bc2506470$1(time, duration) {
    let res = time.copy();
    $735220c2d4774dd3$var$addTimeFields$1(res, duration);
    return res;
}
function $735220c2d4774dd3$export$fe34d3a381cd7501$1(time, duration) {
    return $735220c2d4774dd3$export$7ed87b6bc2506470$1(time, $735220c2d4774dd3$export$3e2544e88a25bff8$1(duration));
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c$1(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'era':
            {
                let eras = value.calendar.getEras();
                let eraIndex = eras.indexOf(value.era);
                if (eraIndex < 0) throw new Error('Invalid era: ' + value.era);
                eraIndex = $735220c2d4774dd3$var$cycleValue$1(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
                mutable.era = eras[eraIndex];
                // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
                $735220c2d4774dd3$export$c4e2ecac49351ef2$1(mutable);
                break;
            }
        case 'year':
            var _mutable_calendar_isInverseEra, _mutable_calendar;
            if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
            // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
            // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
            // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
            mutable.year = $735220c2d4774dd3$var$cycleValue$1(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
            if (mutable.year === -Infinity) mutable.year = 1;
            if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
            break;
        case 'month':
            mutable.month = $735220c2d4774dd3$var$cycleValue$1(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'day':
            mutable.day = $735220c2d4774dd3$var$cycleValue$1(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
    $735220c2d4774dd3$export$c4e2ecac49351ef2$1(mutable);
    return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28$1(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'hour':
            {
                let hours = value.hour;
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = hours >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                mutable.hour = $735220c2d4774dd3$var$cycleValue$1(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
                break;
            }
        case 'minute':
            mutable.minute = $735220c2d4774dd3$var$cycleValue$1(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'second':
            mutable.second = $735220c2d4774dd3$var$cycleValue$1(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'millisecond':
            mutable.millisecond = $735220c2d4774dd3$var$cycleValue$1(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    return mutable;
}
function $735220c2d4774dd3$var$cycleValue$1(value, amount, min, max, round = false) {
    if (round) {
        value += Math.sign(amount);
        if (value < min) value = max;
        let div = Math.abs(amount);
        if (amount > 0) value = Math.ceil(value / div) * div;
        else value = Math.floor(value / div) * div;
        if (value > max) value = min;
    } else {
        value += amount;
        if (value < min) value = max - (min - value - 1);
        else if (value > max) value = min + (value - max - 1);
    }
    return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
    let ms;
    if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
        let res = $735220c2d4774dd3$export$e16d8520af44a096$1(($11d87f3f76e88657$export$b21e0b124e224484$1)(dateTime), {
            years: duration.years,
            months: duration.months,
            weeks: duration.weeks,
            days: duration.days
        });
        // Changing the date may change the timezone offset, so we need to recompute
        // using the 'compatible' disambiguation.
        ms = ($11d87f3f76e88657$export$5107c82f94518f5c$1)(res, dateTime.timeZone);
    } else // Otherwise, preserve the offset of the original date.
    ms = ($11d87f3f76e88657$export$bd4fb2bc8bb06fb$1)(dateTime) - dateTime.offset;
    // Perform time manipulation in milliseconds rather than on the original time fields to account for DST.
    // For example, adding one hour during a DST transition may result in the hour field staying the same or
    // skipping an hour. This results in the offset field changing value instead of the specified field.
    ms += duration.milliseconds || 0;
    ms += (duration.seconds || 0) * 1000;
    ms += (duration.minutes || 0) * 60000;
    ms += (duration.hours || 0) * 3600000;
    let res = ($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone);
    return ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
    return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8$1(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
    // For date fields, we want the time to remain consistent and the UTC offset to potentially change to account for DST changes.
    // For time fields, we want the time to change by the amount given. This may result in the hour field staying the same, but the UTC
    // offset changing in the case of a backward DST transition, or skipping an hour in the case of a forward DST transition.
    switch(field){
        case 'hour':
            {
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = dateTime.hour >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                // The minimum and maximum hour may be affected by daylight saving time.
                // For example, it might jump forward at midnight, and skip 1am.
                // Or it might end at midnight and repeat the 11pm hour. To handle this, we get
                // the possible absolute times for the min and max, and find the maximum range
                // that is within the current day.
                let plainDateTime = ($11d87f3f76e88657$export$b21e0b124e224484$1)(dateTime);
                let minDate = ($11d87f3f76e88657$export$b4a036af3fc0b032$1)($735220c2d4774dd3$export$e5d5e1c1822b6e56$1(plainDateTime, {
                    hour: min
                }), new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)());
                let minAbsolute = [
                    ($11d87f3f76e88657$export$5107c82f94518f5c$1)(minDate, dateTime.timeZone, 'earlier'),
                    ($11d87f3f76e88657$export$5107c82f94518f5c$1)(minDate, dateTime.timeZone, 'later')
                ].filter((ms)=>($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone).day === minDate.day)[0];
                let maxDate = ($11d87f3f76e88657$export$b4a036af3fc0b032$1)($735220c2d4774dd3$export$e5d5e1c1822b6e56$1(plainDateTime, {
                    hour: max
                }), new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)());
                let maxAbsolute = [
                    ($11d87f3f76e88657$export$5107c82f94518f5c$1)(maxDate, dateTime.timeZone, 'earlier'),
                    ($11d87f3f76e88657$export$5107c82f94518f5c$1)(maxDate, dateTime.timeZone, 'later')
                ].filter((ms)=>($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone).day === maxDate.day).pop();
                // Since hours may repeat, we need to operate on the absolute time in milliseconds.
                // This is done in hours from the Unix epoch so that cycleValue works correctly,
                // and then converted back to milliseconds.
                let ms = ($11d87f3f76e88657$export$bd4fb2bc8bb06fb$1)(dateTime) - dateTime.offset;
                let hours = Math.floor(ms / $735220c2d4774dd3$var$ONE_HOUR);
                let remainder = ms % $735220c2d4774dd3$var$ONE_HOUR;
                ms = $735220c2d4774dd3$var$cycleValue$1(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
                // Now compute the new timezone offset, and convert the absolute time back to local time.
                return ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
            }
        case 'minute':
        case 'second':
        case 'millisecond':
            // @ts-ignore
            return $735220c2d4774dd3$export$dd02b3e0007dfe28$1(dateTime, field, amount, options);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            {
                let res = $735220c2d4774dd3$export$d52ced6badfb9a4c$1(($11d87f3f76e88657$export$b21e0b124e224484$1)(dateTime), field, amount, options);
                let ms = ($11d87f3f76e88657$export$5107c82f94518f5c$1)(res, dateTime.timeZone);
                return ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
            }
        default:
            throw new Error('Unsupported field ' + field);
    }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
    // Set the date/time fields, and recompute the UTC offset to account for DST changes.
    // We also need to validate by converting back to a local time in case hours are skipped during forward DST transitions.
    let plainDateTime = ($11d87f3f76e88657$export$b21e0b124e224484$1)(dateTime);
    let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56$1($735220c2d4774dd3$export$adaa4cf7ef1b65be$1(plainDateTime, fields), fields);
    // If the resulting plain date time values are equal, return the original time.
    // We don't want to change the offset when setting the time to the same value.
    if (res.compare(plainDateTime) === 0) return dateTime;
    let ms = ($11d87f3f76e88657$export$5107c82f94518f5c$1)(res, dateTime.timeZone, disambiguation);
    return ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
}

function $fae977aafc393c5c$export$f59dee82248f5ad4$1(time) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ''}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd$1(date) {
    let gregorianDate = ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)());
    let year;
    if (gregorianDate.era === 'BC') year = gregorianDate.year === 1 ? '0000' : '-' + String(Math.abs(1 - gregorianDate.year)).padStart(6, '00');
    else year = String(gregorianDate.year).padStart(4, '0');
    return `${year}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$4223de14708adc63$1(date) {
    // @ts-ignore
    return `${$fae977aafc393c5c$export$60dfd74aa96791bd$1(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4$1(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset) {
    let sign = Math.sign(offset) < 0 ? '-' : '+';
    offset = Math.abs(offset);
    let offsetHours = Math.floor(offset / 3600000);
    let offsetMinutes = offset % 3600000 / 60000;
    return `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
    return `${$fae977aafc393c5c$export$4223de14708adc63$1(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $35ea8db9cb2ccb90$var$shiftArgs$1(args) {
    let calendar = typeof args[0] === 'object' ? args.shift() : new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)();
    let era;
    if (typeof args[0] === 'string') era = args.shift();
    else {
        let eras = calendar.getEras();
        era = eras[eras.length - 1];
    }
    let year = args.shift();
    let month = args.shift();
    let day = args.shift();
    return [
        calendar,
        era,
        year,
        month,
        day
    ];
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
// If that behavior is desired, use the AnyCalendarDate interface instead.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type$1 = /*#__PURE__*/ new WeakMap();
let $35ea8db9cb2ccb90$export$99faa760c7908e4f$1 = class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
        else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
    }
    /** Returns a new `CalendarDate` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$e16d8520af44a096$1)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3$1)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$adaa4cf7ef1b65be$1)(this, fields);
    }
    /**
   * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$d52ced6badfb9a4c$1)(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */ toDate(timeZone) {
        return ($11d87f3f76e88657$export$e67a095c620b86fe$1)(this, timeZone);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$60dfd74aa96791bd$1)(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        return ($14e0f24ef4ac5c92$export$68781ddf31c0090f$1)(this, b);
    }
    constructor(...args){
        (_class_private_field_init$1)(this, $35ea8db9cb2ccb90$var$_type$1, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs$1(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2$1)(this);
    }
};
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type1$1 = /*#__PURE__*/ new WeakMap();
let $35ea8db9cb2ccb90$export$680ea196effce5f$1 = class $35ea8db9cb2ccb90$export$680ea196effce5f {
    /** Returns a copy of this time. */ copy() {
        return new $35ea8db9cb2ccb90$export$680ea196effce5f(this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `Time` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$7ed87b6bc2506470$1)(this, duration);
    }
    /** Returns a new `Time` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$fe34d3a381cd7501$1)(this, duration);
    }
    /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$e5d5e1c1822b6e56$1)(this, fields);
    }
    /**
   * Returns a new `Time` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$dd02b3e0007dfe28$1)(this, field, amount, options);
    }
    /** Converts the time to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$f59dee82248f5ad4$1)(this);
    }
    /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */ compare(b) {
        return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6$1)(this, b);
    }
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0){
        (_class_private_field_init$1)(this, $35ea8db9cb2ccb90$var$_type1$1, {
            writable: true,
            value: void 0
        });
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        ($735220c2d4774dd3$export$7555de1e070510cb$1)(this);
    }
};
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type2$1 = /*#__PURE__*/ new WeakMap();
let $35ea8db9cb2ccb90$export$ca871e8dbb80966f$1 = class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `CalendarDateTime` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$e16d8520af44a096$1)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3$1)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$adaa4cf7ef1b65be$1)(($735220c2d4774dd3$export$e5d5e1c1822b6e56$1)(this, fields), fields);
    }
    /**
   * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        switch(field){
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return ($735220c2d4774dd3$export$d52ced6badfb9a4c$1)(this, field, amount, options);
            default:
                return ($735220c2d4774dd3$export$dd02b3e0007dfe28$1)(this, field, amount, options);
        }
    }
    /** Converts the date to a native JavaScript Date object in the given time zone. */ toDate(timeZone, disambiguation) {
        return ($11d87f3f76e88657$export$e67a095c620b86fe$1)(this, timeZone, disambiguation);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$4223de14708adc63$1)(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        let res = ($14e0f24ef4ac5c92$export$68781ddf31c0090f$1)(this, b);
        if (res === 0) return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6$1)(this, ($11d87f3f76e88657$export$b21e0b124e224484$1)(b));
        return res;
    }
    constructor(...args){
        (_class_private_field_init$1)(this, $35ea8db9cb2ccb90$var$_type2$1, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs$1(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2$1)(this);
    }
};
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type3 = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$d3b7288e7994edea {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `ZonedDateTime` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$96b1d28349274637)(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$6814caac34ca03c7)(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields, disambiguation) {
        return ($735220c2d4774dd3$export$31b5430eb18be4f8)(this, fields, disambiguation);
    }
    /**
   * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$9a297d111fc86b79)(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object. */ toDate() {
        return ($11d87f3f76e88657$export$83aac07b4c37b25)(this);
    }
    /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */ toString() {
        return ($fae977aafc393c5c$export$bf79f1ebf4b18792)(this);
    }
    /** Converts the date to an ISO 8601 formatted string in UTC. */ toAbsoluteString() {
        return this.toDate().toISOString();
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        // TODO: Is this a bad idea??
        return this.toDate().getTime() - ($11d87f3f76e88657$export$84c95a83c799e074)(b, this.timeZone).toDate().getTime();
    }
    constructor(...args){
        (_class_private_field_init$1)(this, $35ea8db9cb2ccb90$var$_type3, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs$1(args);
        let timeZone = args.shift();
        let offset = args.shift();
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.timeZone = timeZone;
        this.offset = offset;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2$1)(this);
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $62225008020f0a13$var$ERA_START_DATES = [
    [
        1868,
        9,
        8
    ],
    [
        1912,
        7,
        30
    ],
    [
        1926,
        12,
        25
    ],
    [
        1989,
        1,
        8
    ],
    [
        2019,
        5,
        1
    ]
];
const $62225008020f0a13$var$ERA_END_DATES = [
    [
        1912,
        7,
        29
    ],
    [
        1926,
        12,
        24
    ],
    [
        1989,
        1,
        7
    ],
    [
        2019,
        4,
        30
    ]
];
const $62225008020f0a13$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $62225008020f0a13$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
    const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
    let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(date.year + eraAddend, date.month, date.day);
}
class $62225008020f0a13$export$b746ab2b60cdffbf extends ($3b62074eb05584b2$export$80ee6245ec4f29ec$1) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $62225008020f0a13$var$toGregorian(date);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
        if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
            date.era = $62225008020f0a13$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
        }
        // Constrain in case we went before the first supported era.
        this.constrainDate(date);
    }
    constrainDate(date) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let end = $62225008020f0a13$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
            date.year = Math.max(1, Math.min(maxYear, date.year));
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
        }
        if (date.year === 1 && idx >= 0) {
            let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
            date.month = Math.max(startMonth, date.month);
            if (date.month === startMonth) date.day = Math.max(startDay, date.day);
        }
    }
    getEras() {
        return $62225008020f0a13$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let cur = $62225008020f0a13$var$ERA_START_DATES[era];
        let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
        if (next == null) // 9999 gregorian is the maximum year allowed.
        return 9999 - cur[0] + 1;
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args), this.identifier = 'japanese';
    }
}
function $62225008020f0a13$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        return $62225008020f0a13$var$ERA_START_DATES[idx];
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
class $8d73d47422ca7302$export$42d20a78301dee44 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec$1) {
    fromJulianDay(jd) {
        let gregorianDate = super.fromJulianDay(jd);
        let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d$1)(gregorianDate.era, gregorianDate.year);
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'buddhist';
    }
}
function $8d73d47422ca7302$var$toGregorian(date) {
    let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c$1)(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(era, year, date.month, date.day);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
    let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    if (y > 0) return [
        'minguo',
        y
    ];
    else return [
        'before_minguo',
        1 - y
    ];
}
class $5f31bd6f0c8940b2$export$65e01080afcb0799 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec$1) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let extendedYear = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d$1)(date.era, date.year);
        let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan(extendedYear);
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, era, year, date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
        date.era = era;
        date.year = year;
    }
    isInverseEra(date) {
        return date.era === 'before_minguo';
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getYearsInEra(date) {
        return date.era === 'before_minguo' ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    }
    constructor(...args){
        super(...args), this.identifier = 'roc' // Republic of China
        ;
    }
}
function $5f31bd6f0c8940b2$var$toGregorian(date) {
    let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c$1)($5f31bd6f0c8940b2$var$gregorianYear(date));
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(era, year, date.month, date.day);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948320;
// Number of days from the start of the year to the start of each month.
const $f3ed2e4472ae7e25$var$MONTH_START = [
    0,
    31,
    62,
    93,
    124,
    155,
    186,
    216,
    246,
    276,
    306,
    336 // Esfand
];
class $f3ed2e4472ae7e25$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let daysSinceEpoch = jd - $f3ed2e4472ae7e25$var$PERSIAN_EPOCH;
        let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
        let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
        let dayOfYear = daysSinceEpoch - farvardin1;
        let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
        let day = dayOfYear - $f3ed2e4472ae7e25$var$MONTH_START[month] + 1;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, year, month + 1, day);
    }
    toJulianDay(date) {
        let jd = $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
        jd += $f3ed2e4472ae7e25$var$MONTH_START[date.month - 1];
        jd += date.day;
        return jd;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        let isLeapYear = ($2b4dce13dd5a17fa$export$842a2cf37af977e1$1)(25 * date.year + 11, 33) < 8;
        return isLeapYear ? 30 : 29;
    }
    getEras() {
        return [
            'AP'
        ];
    }
    getYearsInEra() {
        // 9378-10-10 persian is 9999-12-31 gregorian.
        // Round down to 9377 to set the maximum full year.
        return 9377;
    }
    constructor(){
        this.identifier = 'persian';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


// Starts in 78 AD,
const $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
class $82c358003bdda0a8$export$39f31c639fa15726 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec$1) {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - ($3b62074eb05584b2$export$f297eb839006d339$1)(date.era, date.year, 1, 1);
        let leapMonth;
        if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = ($3b62074eb05584b2$export$553d7fa8e3805fc0$1)(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = ($3b62074eb05584b2$export$553d7fa8e3805fc0$1)(date.year) ? 31 : 30;
            yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
        }
        let indianMonth;
        let indianDay;
        if (yDay < leapMonth) {
            indianMonth = 1;
            indianDay = yDay + 1;
        } else {
            let mDay = yDay - leapMonth;
            if (mDay < 155) {
                indianMonth = Math.floor(mDay / 31) + 2;
                indianDay = mDay % 31 + 1;
            } else {
                mDay -= 155;
                indianMonth = Math.floor(mDay / 30) + 7;
                indianDay = mDay % 30 + 1;
            }
        }
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let extendedYear = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
        let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c$1)(extendedYear);
        let leapMonth;
        let jd;
        if (($3b62074eb05584b2$export$553d7fa8e3805fc0$1)(year)) {
            leapMonth = 31;
            jd = ($3b62074eb05584b2$export$f297eb839006d339$1)(era, year, 3, 21);
        } else {
            leapMonth = 30;
            jd = ($3b62074eb05584b2$export$f297eb839006d339$1)(era, year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && ($3b62074eb05584b2$export$553d7fa8e3805fc0$1)(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
        if (date.month >= 2 && date.month <= 6) return 31;
        return 30;
    }
    getYearsInEra() {
        // 9999-12-31 gregorian is 9920-10-10 indian.
        // Round down to 9919 for the last full year.
        return 9919;
    }
    getEras() {
        return [
            'saka'
        ];
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'indian';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
const $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(calendar, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
    }
    getYearsInEra() {
        // 9999 gregorian
        return 9665;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args), this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $f2f3e0e3a817edbd$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
let $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
    let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
    let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
    return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
class $f2f3e0e3a817edbd$export$5baab4758c231076 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
        let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
        let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
                let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
    }
    constructor(){
        super(), this.identifier = 'islamic-umalqura';
        if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)).buffer);
        if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
            $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++){
                $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
            }
        }
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
const $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $7c5f6fbf42389787$var$MONTH_DAYS = 29;
const $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
const $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
    return ($2b4dce13dd5a17fa$export$842a2cf37af977e1$1)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if (($2b4dce13dd5a17fa$export$842a2cf37af977e1$1)(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
    let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
    let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
    let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
    return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
    return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
    let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
    if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
    switch(yearLength){
        case 353:
            return 0; // deficient
        case 354:
            return 1; // normal
        case 355:
            return 2; // complete
    }
}
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $7c5f6fbf42389787$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $7c5f6fbf42389787$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
        let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $7c5f6fbf42389787$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $7c5f6fbf42389787$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
        return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $7c5f6fbf42389787$var$getDaysInYear(date.year);
    }
    getYearsInEra() {
        // 6239 gregorian
        return 9999;
    }
    getEras() {
        return [
            'AM'
        ];
    }
    balanceYearMonth(date, previousDate) {
        // Keep date in the same month when switching between leap years and non leap years
        if (previousDate.year !== date.year) {
            if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
const $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
    return epoch // difference from Julian epoch to 1,1,1
     + 365 * year // number of days from years
     + Math.floor(year / 4) // extra day of leap year
     + 30 * (month - 1 // number of days from months (1 based)
    ) + day - 1 // number of days for present month (1 based)
    ;
}
function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
    return [
        year,
        month,
        day
    ];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
class $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        let era = 'AM';
        if (year <= 0) {
            era = 'AA';
            year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        }
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
    }
    getYearsInEra(date) {
        // 9999-12-31 gregorian is 9992-20-02 ethiopic.
        // Round down to 9991 for the last full year.
        // AA 9999-01-01 ethiopic is 4506-09-30 gregorian.
        return date.era === 'AA' ? 9999 : 9991;
    }
    getEras() {
        return [
            'AA',
            'AM'
        ];
    }
    constructor(){
        this.identifier = 'ethiopic';
    }
}
class $b956b2d7a6cf451f$export$d72e0c37005a4914 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, 'AA', year, month, day);
    }
    getEras() {
        return [
            'AA'
        ];
    }
    getYearsInEra() {
        // 9999-13-04 ethioaa is the maximum date, which is equivalent to 4506-09-29 gregorian.
        return 9999;
    }
    constructor(...args){
        super(...args), this.identifier = 'ethioaa' // also known as 'ethiopic-amete-alem' in ICU
        ;
    }
}
class $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
        let era = 'CE';
        if (year <= 0) {
            era = 'BCE';
            year = 1 - year;
        }
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
    }
    isInverseEra(date) {
        return date.era === 'BCE';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BCE' ? 'CE' : 'BCE';
            date.year = 1 - date.year;
        }
    }
    getEras() {
        return [
            'BCE',
            'CE'
        ];
    }
    getYearsInEra(date) {
        // 9999-12-30 gregorian is 9716-02-20 coptic.
        // Round down to 9715 for the last full year.
        // BCE 9999-01-01 coptic is BC 9716-06-15 gregorian.
        return date.era === 'BCE' ? 9999 : 9715;
    }
    constructor(...args){
        super(...args), this.identifier = 'coptic';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








function $64244302c3013299$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new ($8d73d47422ca7302$export$42d20a78301dee44)();
        case 'ethiopic':
            return new ($b956b2d7a6cf451f$export$26ba6eab5e20cd7d)();
        case 'ethioaa':
            return new ($b956b2d7a6cf451f$export$d72e0c37005a4914)();
        case 'coptic':
            return new ($b956b2d7a6cf451f$export$fe6243cbe1a4b7c1)();
        case 'hebrew':
            return new ($7c5f6fbf42389787$export$ca405048b8fb5af)();
        case 'indian':
            return new ($82c358003bdda0a8$export$39f31c639fa15726)();
        case 'islamic-civil':
            return new ($f2f3e0e3a817edbd$export$2066795aadd37bfc)();
        case 'islamic-tbla':
            return new ($f2f3e0e3a817edbd$export$37f0887f2f9d22f7)();
        case 'islamic-umalqura':
            return new ($f2f3e0e3a817edbd$export$5baab4758c231076)();
        case 'japanese':
            return new ($62225008020f0a13$export$b746ab2b60cdffbf)();
        case 'persian':
            return new ($f3ed2e4472ae7e25$export$37fccdbfd14c5939)();
        case 'roc':
            return new ($5f31bd6f0c8940b2$export$65e01080afcb0799)();
        case 'gregory':
        default:
            return new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)();
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $fb18d541ea1ad717$var$formatterCache = new Map();
class $fb18d541ea1ad717$export$ad991b66133851cf {
    /** Formats a date as a string according to the locale and format options passed to the constructor. */ format(value) {
        return this.formatter.format(value);
    }
    /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    /** Formats a date range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} \u{2013} ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        // Safari uses a different name for the Ethiopic (Amete Alem) calendar.
        // https://bugs.webkit.org/show_bug.cgi?id=241564
        if (resolvedOptions.calendar === 'ethiopic-amete-alem') resolvedOptions.calendar = 'ethioaa';
        return resolvedOptions;
    }
    constructor(locale, options = {}){
        this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $fb18d541ea1ad717$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
    if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
    if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour').value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour').value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = ($5a387cc49350e6db$export$722debc0e56fea39)(options !== null && options !== void 0 ? options : {}, $896ba0a80a8f4d36$var$isEqual);
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1)();
    return (reactExports.useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, options), [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
    'latn',
    'arab',
    'hanidec',
    'deva',
    'beng'
];
class $6c7bd7858deea686$export$cd11ab140839f11d {
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        this.options = options;
    }
}
const $6c7bd7858deea686$var$numberParserCache = new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
        $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $6c7bd7858deea686$var$NumberParserImpl {
    parse(value) {
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        if (this.symbols.group) // Remove group characters, and replace decimal points and numerals with ASCII values.
        fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, '');
        if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, '.');
        if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, '-');
        fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
        if (this.options.style === 'percent') {
            // javascript is bad at dividing by 100 and maintaining the same significant figures, so perform it on the string before parsing
            let isNegative = fullySanitizedValue.indexOf('-');
            fullySanitizedValue = fullySanitizedValue.replace('-', '');
            let index = fullySanitizedValue.indexOf('.');
            if (index === -1) index = fullySanitizedValue.length;
            fullySanitizedValue = fullySanitizedValue.replace('.', '');
            if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
            else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
            else if (index - 2 === -2) fullySanitizedValue = '0.00';
            else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
            if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
        }
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        if (this.options.style === 'percent') {
            var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
            // extra step for rounding percents to what our formatter would output
            let options = {
                ...this.options,
                style: 'decimal',
                minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
                maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
            };
            return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new ($488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)(this.locale, options).format(newValue));
        }
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === 'accounting' && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        return newValue;
    }
    sanitize(value) {
        // Remove literals and whitespace, which are allowed anywhere in the string
        value = value.replace(this.symbols.literals, '');
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        if (this.symbols.minusSign) value = value.replace('-', this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === 'arab') {
            if (this.symbols.decimal) {
                value = value.replace(',', this.symbols.decimal);
                value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
            }
            if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, '.', this.symbols.group);
        }
        // fr-FR group character is char code 8239, but that's not a key on the french keyboard,
        // so allow 'period' as a group char and replace it with a space
        if (this.options.locale === 'fr-FR') value = $6c7bd7858deea686$var$replaceAll(value, '.', String.fromCharCode(8239));
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers cannot start with a group separator
        if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
        // Numbers that can't have any decimal values fail if a decimal character is typed
        if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
        // Remove numerals, groups, and decimals
        if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, '');
        value = value.replace(this.symbols.numeral, '');
        if (this.symbols.decimal) value = value.replace(this.symbols.decimal, '');
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
        var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
        if (this.options.style === 'percent' && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
    }
}
const $6c7bd7858deea686$var$nonLiteralParts = new Set([
    'decimal',
    'fraction',
    'integer',
    'minusSign',
    'plusSign',
    'group'
]);
// This list is derived from https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html#comparison and includes
// all unique numbers which we need to check in order to determine all the plural forms for a given locale.
// See: https://github.com/adobe/react-spectrum/pull/5134/files#r1337037855 for used script
const $6c7bd7858deea686$var$pluralNumbers = [
    0,
    4,
    2,
    1,
    11,
    20,
    3,
    7,
    100,
    21,
    0.1,
    1.1
];
function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
    var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
    // formatter needs access to all decimal places in order to generate the correct literal strings for the plural set
    let symbolFormatter = new Intl.NumberFormat(locale, {
        ...intlOptions,
        // Resets so we get the full range of symbols
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 21,
        roundingIncrement: 1,
        roundingPriority: 'auto',
        roundingMode: 'halfExpand'
    });
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = symbolFormatter.formatToParts(-10000.111);
    let posAllParts = symbolFormatter.formatToParts(10000.111);
    let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n)=>symbolFormatter.formatToParts(n));
    var _allParts_find_value;
    let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p)=>p.type === 'minusSign')) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : '-';
    let plusSign = (_posAllParts_find = posAllParts.find((p)=>p.type === 'plusSign')) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'always')) plusSign = '+';
    // If maximumSignificantDigits is 1 (the minimum) then we won't get decimal characters out of the above formatters
    // Percent also defaults to 0 fractionDigits, so we need to make a new one that isn't percent to get an accurate decimal
    let decimalParts = new Intl.NumberFormat(locale, {
        ...intlOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).formatToParts(0.001);
    let decimal = (_decimalParts_find = decimalParts.find((p)=>p.type === 'decimal')) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
    let group = (_allParts_find1 = allParts.find((p)=>p.type === 'group')) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let allPartsLiterals = allParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value));
    let pluralPartsLiterals = pluralParts.flatMap((p)=>p.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value)));
    let sortedLiterals = [
        ...new Set([
            ...allPartsLiterals,
            ...pluralPartsLiterals
        ])
    ].sort((a, b)=>b.length - a.length);
    let literals = sortedLiterals.length === 0 ? new RegExp('[\\p{White_Space}]', 'gu') : new RegExp(`${sortedLiterals.join('|')}|[\\p{White_Space}]`, 'gu');
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]));
    let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    let index = (d)=>String(indexes.get(d));
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        index: index
    };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
    if (str.replaceAll) return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = ($325a3faab7a68acd$export$a16aca283550c30d)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (reactExports.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (reactExports.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (reactExports.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (reactExports.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}

function $3dfb0f96be0d6a08$export$4a931266a3838b86(state, ref, disableArrowNavigation) {
    let { direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1)();
    let focusManager = (reactExports.useMemo)(()=>($9bf71ea28793e738$export$c5251b9e124bf29)(ref), [
        ref
    ]);
    // Open the popover on alt + arrow down
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target)) return;
        if (e.altKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp') && 'setOpen' in state) {
            e.preventDefault();
            e.stopPropagation();
            state.setOpen(true);
        }
        if (disableArrowNavigation) return;
        switch(e.key){
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') {
                    if (ref.current) {
                        let target = e.target;
                        let prev = $3dfb0f96be0d6a08$var$findNextSegment(ref.current, target.getBoundingClientRect().left, -1);
                        if (prev) prev.focus();
                    }
                } else focusManager.focusPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') {
                    if (ref.current) {
                        let target = e.target;
                        let next = $3dfb0f96be0d6a08$var$findNextSegment(ref.current, target.getBoundingClientRect().left, 1);
                        if (next) next.focus();
                    }
                } else focusManager.focusNext();
                break;
        }
    };
    // Focus the first placeholder segment from the end on mouse down/touch up in the field.
    let focusLast = ()=>{
        var _window_event;
        if (!ref.current) return;
        // Try to find the segment prior to the element that was clicked on.
        let target = (_window_event = window.event) === null || _window_event === void 0 ? void 0 : _window_event.target;
        let walker = ($9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
            tabbable: true
        });
        if (target) {
            walker.currentNode = target;
            target = walker.previousNode();
        }
        // If no target found, find the last element from the end.
        if (!target) {
            let last;
            do {
                last = walker.lastChild();
                if (last) target = last;
            }while (last);
        }
        // Now go backwards until we find an element that is not a placeholder.
        while(target === null || target === void 0 ? void 0 : target.hasAttribute('data-placeholder')){
            let prev = walker.previousNode();
            if (prev && prev.hasAttribute('data-placeholder')) target = prev;
            else break;
        }
        if (target) target.focus();
    };
    let { pressProps: pressProps } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
        preventFocusOnPress: true,
        allowTextSelectionOnPress: true,
        onPressStart (e) {
            if (e.pointerType === 'mouse') focusLast();
        },
        onPress (e) {
            if (e.pointerType !== 'mouse') focusLast();
        }
    });
    return ($3ef42575df84b30b$export$9d1611c77c2fe928)(pressProps, {
        onKeyDown: onKeyDown
    });
}
function $3dfb0f96be0d6a08$var$findNextSegment(group, fromX, direction) {
    let walker = ($9bf71ea28793e738$export$2d6ec8fc375ceafa)(group, {
        tabbable: true
    });
    let node = walker.nextNode();
    let closest = null;
    let closestDistance = Infinity;
    while(node){
        let x = node.getBoundingClientRect().left;
        let distance = x - fromX;
        let absoluteDistance = Math.abs(distance);
        if (Math.sign(distance) === direction && absoluteDistance < closestDistance) {
            closest = node;
            closestDistance = absoluteDistance;
        }
        node = walker.nextNode();
    }
    return closest;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = ($bdb11010cef70236$export$f680877a34711e37$1)(id);
    let labelId = ($bdb11010cef70236$export$f680877a34711e37$1)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = ($313b98861ee5dd6c$export$d6875122194c7b44$1)({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = ($d191a55c9702f145$export$8467354a121f1b9f)(props);
    let descriptionId = ($bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = ($bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = ($3ef42575df84b30b$export$9d1611c77c2fe928$1)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1)(()=>{
        if (validationBehavior === 'native' && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)(()=>{
        state.resetValidation();
    });
    let onInvalid = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            ($507fabe10e71c6fb$export$8397ddfc504fdb9a)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)(()=>{
        state.commitValidation();
    });
    (reactExports.useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener('invalid', onInvalid);
        input.addEventListener('change', onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}

function $parcel$interopDefault$3(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $16f0b7bb276bc17e$export$653eddfc964b0f8a = new WeakMap();
const $16f0b7bb276bc17e$export$300019f83c56d282 = '__role_' + Date.now();
const $16f0b7bb276bc17e$export$7b3062cd49e80452 = '__focusManager_' + Date.now();
function $16f0b7bb276bc17e$export$5591b0b878c1a989(props, state, ref) {
    var _state_value;
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = ($2baaea4c71418dea$export$294aa081a6c6f55d)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let valueOnFocus = (reactExports.useRef)(null);
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        ...props,
        onFocusWithin (e) {
            var _props_onFocus;
            valueOnFocus.current = state.value;
            (_props_onFocus = props.onFocus) === null || _props_onFocus === void 0 ? void 0 : _props_onFocus.call(props, e);
        },
        onBlurWithin: (e)=>{
            var _props_onBlur;
            state.confirmPlaceholder();
            if (state.value !== valueOnFocus.current) state.commitValidation();
            (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
        },
        onFocusWithinChange: props.onFocusChange
    });
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1$1)((($parcel$interopDefault$3($dfb4eba373ed9493$exports))), '@react-aria/datepicker');
    let message = state.maxGranularity === 'hour' ? 'selectedTimeDescription' : 'selectedDateDescription';
    let field = state.maxGranularity === 'hour' ? 'time' : 'date';
    let description = state.value ? stringFormatter.format(message, {
        [field]: state.formatValue({
            month: 'long'
        })
    }) : '';
    let descProps = ($ef06256079686ba0$export$f8aeda7b10753fa1)(description);
    // If within a date picker or date range picker, the date field will have role="presentation" and an aria-describedby
    // will be passed in that references the value (e.g. entire range). Otherwise, add the field's value description.
    let describedBy = props[$16f0b7bb276bc17e$export$300019f83c56d282] === 'presentation' ? fieldProps['aria-describedby'] : [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let propsFocusManager = props[$16f0b7bb276bc17e$export$7b3062cd49e80452];
    let focusManager = (reactExports.useMemo)(()=>propsFocusManager || ($9bf71ea28793e738$export$c5251b9e124bf29)(ref), [
        propsFocusManager,
        ref
    ]);
    let groupProps = ($3dfb0f96be0d6a08$export$4a931266a3838b86)(state, ref, props[$16f0b7bb276bc17e$export$300019f83c56d282] === 'presentation');
    // Pass labels and other information to segments.
    $16f0b7bb276bc17e$export$653eddfc964b0f8a.set(state, {
        ariaLabel: props['aria-label'],
        ariaLabelledBy: [
            labelProps.id,
            props['aria-labelledby']
        ].filter(Boolean).join(' ') || undefined,
        ariaDescribedBy: describedBy,
        focusManager: focusManager
    });
    let autoFocusRef = (reactExports.useRef)(props.autoFocus);
    // When used within a date picker or date range picker, the field gets role="presentation"
    // rather than role="group". Since the date picker/date range picker already has a role="group"
    // with a label and description, and the segments are already labeled by this as well, this
    // avoids very verbose duplicate announcements.
    let fieldDOMProps;
    if (props[$16f0b7bb276bc17e$export$300019f83c56d282] === 'presentation') fieldDOMProps = {
        role: 'presentation'
    };
    else fieldDOMProps = ($3ef42575df84b30b$export$9d1611c77c2fe928)(fieldProps, {
        role: 'group',
        'aria-disabled': props.isDisabled || undefined,
        'aria-describedby': describedBy
    });
    (reactExports.useEffect)(()=>{
        if (autoFocusRef.current) focusManager.focusFirst();
        autoFocusRef.current = false;
    }, [
        focusManager
    ]);
    ($99facab73266f662$export$5add1d006293d136)(props.inputRef, state.value, state.setValue);
    ($e93e671b31057976$export$b8473d3665f3a75a)({
        ...props,
        focus () {
            focusManager.focusFirst();
        }
    }, state, props.inputRef);
    let inputProps = {
        type: 'hidden',
        name: props.name,
        value: ((_state_value = state.value) === null || _state_value === void 0 ? void 0 : _state_value.toString()) || '',
        disabled: props.isDisabled
    };
    if (props.validationBehavior === 'native') {
        // Use a hidden <input type="text"> rather than <input type="hidden">
        // so that an empty value blocks HTML form submission when the field is required.
        inputProps.type = 'text';
        inputProps.hidden = true;
        inputProps.required = props.isRequired;
        // Ignore react warning.
        inputProps.onChange = ()=>{};
    }
    let domProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props);
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        fieldProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, fieldDOMProps, groupProps, focusWithinProps, {
            onKeyDown (e) {
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (props.onKeyUp) props.onKeyUp(e);
            },
            style: {
                unicodeBidi: 'isolate'
            }
        }),
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}
function $16f0b7bb276bc17e$export$4c842f6a241dc825(props, state, ref) {
    var _state_timeValue;
    let res = $16f0b7bb276bc17e$export$5591b0b878c1a989(props, state, ref);
    res.inputProps.value = ((_state_timeValue = state.timeValue) === null || _state_timeValue === void 0 ? void 0 : _state_timeValue.toString()) || '';
    return res;
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (reactExports.createContext)({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = '__formValidationState' + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === 'invalid');
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid: isInvalid,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (reactExports.useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = $e5be200c675c3b3a$var$runValidate(validate, value);
        return $e5be200c675c3b3a$var$getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (reactExports.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (reactExports.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (reactExports.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (reactExports.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (reactExports.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (reactExports.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (reactExports.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (reactExports.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (reactExports.useState)(false);
    (reactExports.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}

function $parcel$interopDefault$2(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // @ts-ignore



function $3aeceb3a64eb8358$export$d42c60378c8168f8() {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1)();
    let dictionary = ($fca6afa0e843324b$export$87b761675e8eaa10$1)((($parcel$interopDefault$2($dfb4eba373ed9493$exports))), '@react-aria/datepicker');
    return (reactExports.useMemo)(()=>{
        // Try to use Intl.DisplayNames if possible. It may be supported in browsers, but not support the dateTimeField
        // type as that was only added in v2. https://github.com/tc39/intl-displaynames-v2
        try {
            return new Intl.DisplayNames(locale, {
                type: 'dateTimeField'
            });
        } catch  {
            return new $3aeceb3a64eb8358$var$DisplayNamesPolyfill(locale, dictionary);
        }
    }, [
        locale,
        dictionary
    ]);
}
class $3aeceb3a64eb8358$var$DisplayNamesPolyfill {
    of(field) {
        return this.dictionary.getStringForLocale(field, this.locale);
    }
    constructor(locale, dictionary){
        this.locale = locale;
        this.dictionary = dictionary;
    }
}

var $ed6aae4e5f766f1e$exports = {};
$ed6aae4e5f766f1e$exports = {
    "Empty": `\u{641}\u{627}\u{631}\u{63A}`
};

var $38854e2b175151fa$exports = {};
$38854e2b175151fa$exports = {
    "Empty": `\u{418}\u{437}\u{43F}\u{440}\u{430}\u{437}\u{43D}\u{438}`
};

var $15b25ab20f3945b2$exports = {};
$15b25ab20f3945b2$exports = {
    "Empty": `Pr\xe1zdn\xe9`
};

var $692a4298b6b649a2$exports = {};
$692a4298b6b649a2$exports = {
    "Empty": `Tom`
};

var $1c6e1539193f1243$exports = {};
$1c6e1539193f1243$exports = {
    "Empty": `Leer`
};

var $1e8678632c464b6d$exports = {};
$1e8678632c464b6d$exports = {
    "Empty": `\u{386}\u{3B4}\u{3B5}\u{3B9}\u{3BF}`
};

var $4adc85d9bf5b9eed$exports = {};
$4adc85d9bf5b9eed$exports = {
    "Empty": `Empty`
};

var $41c4b2bb61dafbca$exports = {};
$41c4b2bb61dafbca$exports = {
    "Empty": `Vac\xedo`
};

var $405f8b24f5dd2a60$exports = {};
$405f8b24f5dd2a60$exports = {
    "Empty": `T\xfchjenda`
};

var $7efe3ed02b9b9dd4$exports = {};
$7efe3ed02b9b9dd4$exports = {
    "Empty": `Tyhj\xe4`
};

var $99fc4c101d92daf3$exports = {};
$99fc4c101d92daf3$exports = {
    "Empty": `Vide`
};

var $f9e155e6e8cacaa2$exports = {};
$f9e155e6e8cacaa2$exports = {
    "Empty": `\u{5E8}\u{5D9}\u{5E7}`
};

var $c31b5e8e9a249fd5$exports = {};
$c31b5e8e9a249fd5$exports = {
    "Empty": `Prazno`
};

var $9c5435bc17499bd9$exports = {};
$9c5435bc17499bd9$exports = {
    "Empty": `\xdcres`
};

var $6d1fc8e84d8165e1$exports = {};
$6d1fc8e84d8165e1$exports = {
    "Empty": `Vuoto`
};

var $46ea6b3641b83e71$exports = {};
$46ea6b3641b83e71$exports = {
    "Empty": `\u{7A7A}`
};

var $0e3cc9a288289dc5$exports = {};
$0e3cc9a288289dc5$exports = {
    "Empty": `\u{BE44}\u{C5B4} \u{C788}\u{C74C}`
};

var $4ff2bb25c0089ffb$exports = {};
$4ff2bb25c0089ffb$exports = {
    "Empty": `Tu\u{161}\u{10D}ias`
};

var $6cf33cd4c010a2fb$exports = {};
$6cf33cd4c010a2fb$exports = {
    "Empty": `Tuk\u{161}s`
};

var $5a9f8486f8b8837e$exports = {};
$5a9f8486f8b8837e$exports = {
    "Empty": `Tom`
};

var $583f94d807f6ecea$exports = {};
$583f94d807f6ecea$exports = {
    "Empty": `Leeg`
};

var $cc4dcfeea2b4050d$exports = {};
$cc4dcfeea2b4050d$exports = {
    "Empty": `Pusty`
};

var $68ac2954d56e12b4$exports = {};
$68ac2954d56e12b4$exports = {
    "Empty": `Vazio`
};

var $fdb0616f309780b0$exports = {};
$fdb0616f309780b0$exports = {
    "Empty": `Vazio`
};

var $fe1eccf4ee1d6f52$exports = {};
$fe1eccf4ee1d6f52$exports = {
    "Empty": `Gol`
};

var $a38b6c4e18725976$exports = {};
$a38b6c4e18725976$exports = {
    "Empty": `\u{41D}\u{435} \u{437}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}`
};

var $6c14ae2b766b652c$exports = {};
$6c14ae2b766b652c$exports = {
    "Empty": `Pr\xe1zdne`
};

var $8f1c9692e16dc5eb$exports = {};
$8f1c9692e16dc5eb$exports = {
    "Empty": `Prazen`
};

var $d2aa7abea627cafa$exports = {};
$d2aa7abea627cafa$exports = {
    "Empty": `Prazno`
};

var $676b82e4b56408e6$exports = {};
$676b82e4b56408e6$exports = {
    "Empty": `Tomt`
};

var $14c9042552d7ce08$exports = {};
$14c9042552d7ce08$exports = {
    "Empty": `Bo\u{15F}`
};

var $393254ebcb66c9f5$exports = {};
$393254ebcb66c9f5$exports = {
    "Empty": `\u{41F}\u{443}\u{441}\u{442}\u{43E}`
};

var $d49d621f310cf6ce$exports = {};
$d49d621f310cf6ce$exports = {
    "Empty": `\u{7A7A}`
};

var $94b60c866ca5dfe6$exports = {};
$94b60c866ca5dfe6$exports = {
    "Empty": `\u{7A7A}\u{767D}`
};

var $a99895ee3dc79e61$exports = {};


































$a99895ee3dc79e61$exports = {
    "ar-AE": $ed6aae4e5f766f1e$exports,
    "bg-BG": $38854e2b175151fa$exports,
    "cs-CZ": $15b25ab20f3945b2$exports,
    "da-DK": $692a4298b6b649a2$exports,
    "de-DE": $1c6e1539193f1243$exports,
    "el-GR": $1e8678632c464b6d$exports,
    "en-US": $4adc85d9bf5b9eed$exports,
    "es-ES": $41c4b2bb61dafbca$exports,
    "et-EE": $405f8b24f5dd2a60$exports,
    "fi-FI": $7efe3ed02b9b9dd4$exports,
    "fr-FR": $99fc4c101d92daf3$exports,
    "he-IL": $f9e155e6e8cacaa2$exports,
    "hr-HR": $c31b5e8e9a249fd5$exports,
    "hu-HU": $9c5435bc17499bd9$exports,
    "it-IT": $6d1fc8e84d8165e1$exports,
    "ja-JP": $46ea6b3641b83e71$exports,
    "ko-KR": $0e3cc9a288289dc5$exports,
    "lt-LT": $4ff2bb25c0089ffb$exports,
    "lv-LV": $6cf33cd4c010a2fb$exports,
    "nb-NO": $5a9f8486f8b8837e$exports,
    "nl-NL": $583f94d807f6ecea$exports,
    "pl-PL": $cc4dcfeea2b4050d$exports,
    "pt-BR": $68ac2954d56e12b4$exports,
    "pt-PT": $fdb0616f309780b0$exports,
    "ro-RO": $fe1eccf4ee1d6f52$exports,
    "ru-RU": $a38b6c4e18725976$exports,
    "sk-SK": $6c14ae2b766b652c$exports,
    "sl-SI": $8f1c9692e16dc5eb$exports,
    "sr-SP": $d2aa7abea627cafa$exports,
    "sv-SE": $676b82e4b56408e6$exports,
    "tr-TR": $14c9042552d7ce08$exports,
    "uk-UA": $393254ebcb66c9f5$exports,
    "zh-CN": $d49d621f310cf6ce$exports,
    "zh-TW": $94b60c866ca5dfe6$exports
};

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        // @ts-ignore
        if (!(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if ($319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.isAttached()) $319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
        }, 100);
        else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    isAttached() {
        var _this_node;
        return (_this_node = this.node) === null || _this_node === void 0 ? void 0 : _this_node.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        var _this_assertiveLog, _this_politeLog;
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') (_this_assertiveLog = this.assertiveLog) === null || _this_assertiveLog === void 0 ? void 0 : _this_assertiveLog.appendChild(node);
        else (_this_politeLog = this.politeLog) === null || _this_politeLog === void 0 ? void 0 : _this_politeLog.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
    constructor(){
        this.node = null;
        this.assertiveLog = null;
        this.politeLog = null;
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


// Locale passed from server by PackageLocalizationProvider.
const $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    let locale = typeof window !== 'undefined' && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: ($148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = ($b5e257d569688ac6$export$535bd6ca7f90a273)();
    let [defaultLocale, setDefaultLocale] = (reactExports.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (reactExports.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ ($1CM7W$react).createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = ($1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (reactExports.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new ($5b160d28a433310d$export$c17fa47878dc55b6)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
    return packageName && ($5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (reactExports.useMemo)(()=>new ($6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, dictionary), [
        locale,
        dictionary
    ]);
}

function $parcel$interopDefault$1(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $d2e8511e6f209edf$export$e908e06f4b8e3402(props) {
    const _async = (reactExports.useRef)(undefined);
    let { value: value, textValue: textValue, minValue: minValue, maxValue: maxValue, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, onIncrement: onIncrement, onIncrementPage: onIncrementPage, onDecrement: onDecrement, onDecrementPage: onDecrementPage, onDecrementToMin: onDecrementToMin, onIncrementToMax: onIncrementToMax } = props;
    const stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$1($a99895ee3dc79e61$exports))), '@react-aria/spinbutton');
    const clearAsync = ()=>clearTimeout(_async.current);
    (reactExports.useEffect)(()=>{
        return ()=>clearAsync();
    }, []);
    let onKeyDown = (e)=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) return;
        switch(e.key){
            case 'PageUp':
                if (onIncrementPage) {
                    e.preventDefault();
                    onIncrementPage === null || onIncrementPage === void 0 ? void 0 : onIncrementPage();
                    break;
                }
            // fallthrough!
            case 'ArrowUp':
            case 'Up':
                if (onIncrement) {
                    e.preventDefault();
                    onIncrement === null || onIncrement === void 0 ? void 0 : onIncrement();
                }
                break;
            case 'PageDown':
                if (onDecrementPage) {
                    e.preventDefault();
                    onDecrementPage === null || onDecrementPage === void 0 ? void 0 : onDecrementPage();
                    break;
                }
            // fallthrough
            case 'ArrowDown':
            case 'Down':
                if (onDecrement) {
                    e.preventDefault();
                    onDecrement === null || onDecrement === void 0 ? void 0 : onDecrement();
                }
                break;
            case 'Home':
                if (onDecrementToMin) {
                    e.preventDefault();
                    onDecrementToMin === null || onDecrementToMin === void 0 ? void 0 : onDecrementToMin();
                }
                break;
            case 'End':
                if (onIncrementToMax) {
                    e.preventDefault();
                    onIncrementToMax === null || onIncrementToMax === void 0 ? void 0 : onIncrementToMax();
                }
                break;
        }
    };
    let isFocused = (reactExports.useRef)(false);
    let onFocus = ()=>{
        isFocused.current = true;
    };
    let onBlur = ()=>{
        isFocused.current = false;
    };
    // Replace Unicode hyphen-minus (U+002D) with minus sign (U+2212).
    // This ensures that macOS VoiceOver announces it as "minus" even with other characters between the minus sign
    // and the number (e.g. currency symbol). Otherwise it announces nothing because it assumes the character is a hyphen.
    // In addition, replace the empty string with the word "Empty" so that iOS VoiceOver does not read "50%" for an empty field.
    let ariaTextValue = textValue === '' ? stringFormatter.format('Empty') : (textValue || `${value}`).replace('-', '\u2212');
    (reactExports.useEffect)(()=>{
        if (isFocused.current) {
            ($319e236875307eab$export$d10ae4f68404609a)('assertive');
            ($319e236875307eab$export$a9b970dcc4ae71a9)(ariaTextValue, 'assertive');
        }
    }, [
        ariaTextValue
    ]);
    const onIncrementPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((initialStepDelay)=>{
        clearAsync();
        onIncrement === null || onIncrement === void 0 ? void 0 : onIncrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (maxValue === undefined || isNaN(maxValue) || value === undefined || isNaN(value) || value < maxValue) onIncrementPressStart(60);
        }, initialStepDelay);
    });
    const onDecrementPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52$1)((initialStepDelay)=>{
        clearAsync();
        onDecrement === null || onDecrement === void 0 ? void 0 : onDecrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (minValue === undefined || isNaN(minValue) || value === undefined || isNaN(value) || value > minValue) onDecrementPressStart(60);
        }, initialStepDelay);
    });
    let cancelContextMenu = (e)=>{
        e.preventDefault();
    };
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': value !== undefined && !isNaN(value) ? value : undefined,
            'aria-valuetext': ariaTextValue,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-disabled': isDisabled || undefined,
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            onBlur: onBlur
        },
        incrementButtonProps: {
            onPressStart: ()=>{
                onIncrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        },
        decrementButtonProps: {
            onPressStart: ()=>{
                onDecrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







function $32489daedd52963e$export$1315d136e6f7581(segment, state, ref) {
    let enteredKeys = (reactExports.useRef)('');
    let { locale: locale, direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1)();
    let displayNames = ($3aeceb3a64eb8358$export$d42c60378c8168f8)();
    let { ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy, ariaDescribedBy: ariaDescribedBy, focusManager: focusManager } = ($16f0b7bb276bc17e$export$653eddfc964b0f8a).get(state);
    let textValue = segment.isPlaceholder ? '' : segment.text;
    let options = (reactExports.useMemo)(()=>state.dateFormatter.resolvedOptions(), [
        state.dateFormatter
    ]);
    let monthDateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        month: 'long',
        timeZone: options.timeZone
    });
    let hourDateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        hour: 'numeric',
        hour12: options.hour12,
        timeZone: options.timeZone
    });
    if (segment.type === 'month' && !segment.isPlaceholder) {
        let monthTextValue = monthDateFormatter.format(state.dateValue);
        textValue = monthTextValue !== textValue ? `${textValue} \u{2013} ${monthTextValue}` : monthTextValue;
    } else if (segment.type === 'hour' && !segment.isPlaceholder) textValue = hourDateFormatter.format(state.dateValue);
    let { spinButtonProps: spinButtonProps } = ($d2e8511e6f209edf$export$e908e06f4b8e3402)({
        // The ARIA spec says aria-valuenow is optional if there's no value, but aXe seems to require it.
        // This doesn't seem to have any negative effects with real AT since we also use aria-valuetext.
        // https://github.com/dequelabs/axe-core/issues/3505
        value: segment.value,
        textValue: textValue,
        minValue: segment.minValue,
        maxValue: segment.maxValue,
        isDisabled: state.isDisabled,
        isReadOnly: state.isReadOnly || !segment.isEditable,
        isRequired: state.isRequired,
        onIncrement: ()=>{
            enteredKeys.current = '';
            state.increment(segment.type);
        },
        onDecrement: ()=>{
            enteredKeys.current = '';
            state.decrement(segment.type);
        },
        onIncrementPage: ()=>{
            enteredKeys.current = '';
            state.incrementPage(segment.type);
        },
        onDecrementPage: ()=>{
            enteredKeys.current = '';
            state.decrementPage(segment.type);
        },
        onIncrementToMax: ()=>{
            enteredKeys.current = '';
            if (segment.maxValue !== undefined) state.setSegment(segment.type, segment.maxValue);
        },
        onDecrementToMin: ()=>{
            enteredKeys.current = '';
            if (segment.minValue !== undefined) state.setSegment(segment.type, segment.minValue);
        }
    });
    let parser = (reactExports.useMemo)(()=>new ($6c7bd7858deea686$export$cd11ab140839f11d)(locale, {
            maximumFractionDigits: 0
        }), [
        locale
    ]);
    let backspace = ()=>{
        if (segment.text === segment.placeholder) focusManager.focusPrevious();
        if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly && !segment.isPlaceholder) {
            let newValue = segment.text.slice(0, -1);
            let parsed = parser.parse(newValue);
            newValue = parsed === 0 ? '' : newValue;
            if (newValue.length === 0 || parsed === 0) state.clearSegment(segment.type);
            else state.setSegment(segment.type, parsed);
            enteredKeys.current = newValue;
        } else if (segment.type === 'dayPeriod') state.clearSegment(segment.type);
    };
    let onKeyDown = (e)=>{
        // Firefox does not fire selectstart for Ctrl/Cmd + A
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1742153
        if (e.key === 'a' && (($c87311424ea30a05$export$9ac100e40613ea10)() ? e.metaKey : e.ctrlKey)) e.preventDefault();
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        switch(e.key){
            case 'Backspace':
            case 'Delete':
                // Safari on iOS does not fire beforeinput for the backspace key because the cursor is at the start.
                e.preventDefault();
                e.stopPropagation();
                backspace();
                break;
        }
    };
    // Safari dayPeriod option doesn't work...
    let { startsWith: startsWith } = ($bb77f239b46e8c72$export$3274cf84b703fff)({
        sensitivity: 'base'
    });
    let amPmFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        hour: 'numeric',
        hour12: true
    });
    let am = (reactExports.useMemo)(()=>{
        let date = new Date();
        date.setHours(0);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod').value;
    }, [
        amPmFormatter
    ]);
    let pm = (reactExports.useMemo)(()=>{
        let date = new Date();
        date.setHours(12);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod').value;
    }, [
        amPmFormatter
    ]);
    // Get a list of formatted era names so users can type the first character to choose one.
    let eraFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        year: 'numeric',
        era: 'narrow',
        timeZone: 'UTC'
    });
    let eras = (reactExports.useMemo)(()=>{
        if (segment.type !== 'era') return [];
        let date = ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(new ($35ea8db9cb2ccb90$export$99faa760c7908e4f$1)(1, 1, 1), state.calendar);
        let eras = state.calendar.getEras().map((era)=>{
            let eraDate = date.set({
                year: 1,
                month: 1,
                day: 1,
                era: era
            }).toDate('UTC');
            let parts = eraFormatter.formatToParts(eraDate);
            let formatted = parts.find((p)=>p.type === 'era').value;
            return {
                era: era,
                formatted: formatted
            };
        });
        // Remove the common prefix from formatted values. This is so that in calendars with eras like
        // ERA0 and ERA1 (e.g. Ethiopic), users can press "0" and "1" to select an era. In other cases,
        // the first letter is used.
        let prefixLength = $32489daedd52963e$var$commonPrefixLength(eras.map((era)=>era.formatted));
        if (prefixLength) for (let era of eras)era.formatted = era.formatted.slice(prefixLength);
        return eras;
    }, [
        eraFormatter,
        state.calendar,
        segment.type
    ]);
    let onInput = (key)=>{
        if (state.isDisabled || state.isReadOnly) return;
        let newValue = enteredKeys.current + key;
        switch(segment.type){
            case 'dayPeriod':
                if (startsWith(am, key)) state.setSegment('dayPeriod', 0);
                else if (startsWith(pm, key)) state.setSegment('dayPeriod', 12);
                else break;
                focusManager.focusNext();
                break;
            case 'era':
                {
                    let matched = eras.find((e)=>startsWith(e.formatted, key));
                    if (matched) {
                        state.setSegment('era', matched.era);
                        focusManager.focusNext();
                    }
                    break;
                }
            case 'day':
            case 'hour':
            case 'minute':
            case 'second':
            case 'month':
            case 'year':
                {
                    if (!parser.isValidPartialNumber(newValue)) return;
                    let numberValue = parser.parse(newValue);
                    let segmentValue = numberValue;
                    let allowsZero = segment.minValue === 0;
                    if (segment.type === 'hour' && state.dateFormatter.resolvedOptions().hour12) {
                        switch(state.dateFormatter.resolvedOptions().hourCycle){
                            case 'h11':
                                if (numberValue > 11) segmentValue = parser.parse(key);
                                break;
                            case 'h12':
                                allowsZero = false;
                                if (numberValue > 12) segmentValue = parser.parse(key);
                                break;
                        }
                        if (segment.value !== undefined && segment.value >= 12 && numberValue > 1) numberValue += 12;
                    } else if (segment.maxValue !== undefined && numberValue > segment.maxValue) segmentValue = parser.parse(key);
                    if (isNaN(numberValue)) return;
                    let shouldSetValue = segmentValue !== 0 || allowsZero;
                    if (shouldSetValue) state.setSegment(segment.type, segmentValue);
                    if (segment.maxValue !== undefined && (Number(numberValue + '0') > segment.maxValue || newValue.length >= String(segment.maxValue).length)) {
                        enteredKeys.current = '';
                        if (shouldSetValue) focusManager.focusNext();
                    } else enteredKeys.current = newValue;
                    break;
                }
        }
    };
    let onFocus = ()=>{
        enteredKeys.current = '';
        if (ref.current) ($2f04cbc44ee30ce0$export$c826860796309d1b)(ref.current, {
            containingElement: ($62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
        });
        // Collapse selection to start or Chrome won't fire input events.
        let selection = window.getSelection();
        selection === null || selection === void 0 ? void 0 : selection.collapse(ref.current);
    };
    let documentRef = (reactExports.useRef)(typeof document !== 'undefined' ? document : null);
    ($e9faafb641e167db$export$90fc3a17d93f704c)(documentRef, 'selectionchange', ()=>{
        var _ref_current;
        // Enforce that the selection is collapsed when inside a date segment.
        // Otherwise, when tapping on a segment in Android Chrome and then entering text,
        // composition events will be fired that break the DOM structure and crash the page.
        let selection = window.getSelection();
        if ((selection === null || selection === void 0 ? void 0 : selection.anchorNode) && ((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(selection === null || selection === void 0 ? void 0 : selection.anchorNode))) selection.collapse(ref.current);
    });
    let compositionRef = (reactExports.useRef)('');
    ($e9faafb641e167db$export$90fc3a17d93f704c)(ref, 'beforeinput', (e)=>{
        if (!ref.current) return;
        e.preventDefault();
        switch(e.inputType){
            case 'deleteContentBackward':
            case 'deleteContentForward':
                if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly) backspace();
                break;
            case 'insertCompositionText':
                // insertCompositionText cannot be canceled.
                // Record the current state of the element so we can restore it in the `input` event below.
                compositionRef.current = ref.current.textContent;
                // Safari gets stuck in a composition state unless we also assign to the value here.
                // eslint-disable-next-line no-self-assign
                ref.current.textContent = ref.current.textContent;
                break;
            default:
                if (e.data != null) onInput(e.data);
                break;
        }
    });
    ($e9faafb641e167db$export$90fc3a17d93f704c)(ref, 'input', (e)=>{
        let { inputType: inputType, data: data } = e;
        switch(inputType){
            case 'insertCompositionText':
                // Reset the DOM to how it was in the beforeinput event.
                if (ref.current) ref.current.textContent = compositionRef.current;
                // Android sometimes fires key presses of letters as composition events. Need to handle am/pm keys here too.
                // Can also happen e.g. with Pinyin keyboard on iOS.
                if (data != null && (startsWith(am, data) || startsWith(pm, data))) onInput(data);
                break;
        }
    });
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let element = ref.current;
        return ()=>{
            // If the focused segment is removed, focus the previous one, or the next one if there was no previous one.
            if (document.activeElement === element) {
                let prev = focusManager.focusPrevious();
                if (!prev) focusManager.focusNext();
            }
        };
    }, [
        ref,
        focusManager
    ]);
    // spinbuttons cannot be focused with VoiceOver on iOS.
    let touchPropOverrides = ($c87311424ea30a05$export$fedb369cb70207f1)() || segment.type === 'timeZoneName' ? {
        role: 'textbox',
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuetext': null,
        'aria-valuenow': null
    } : {};
    // Only apply aria-describedby to the first segment, unless the field is invalid. This avoids it being
    // read every time the user navigates to a new segment.
    let firstSegment = (reactExports.useMemo)(()=>state.segments.find((s)=>s.isEditable), [
        state.segments
    ]);
    if (segment !== firstSegment && !state.isInvalid) ariaDescribedBy = undefined;
    let id = ($bdb11010cef70236$export$f680877a34711e37)();
    let isEditable = !state.isDisabled && !state.isReadOnly && segment.isEditable;
    // Prepend the label passed from the field to each segment name.
    // This is needed because VoiceOver on iOS does not announce groups.
    let name = segment.type === 'literal' ? '' : displayNames.of(segment.type);
    let labelProps = ($313b98861ee5dd6c$export$d6875122194c7b44)({
        'aria-label': `${name}${ariaLabel ? `, ${ariaLabel}` : ''}${ariaLabelledBy ? ', ' : ''}`,
        'aria-labelledby': ariaLabelledBy
    });
    // Literal segments should not be visible to screen readers. We don't really need any of the above,
    // but the rules of hooks mean hooks cannot be conditional so we have to put this condition here.
    if (segment.type === 'literal') return {
        segmentProps: {
            'aria-hidden': true
        }
    };
    let segmentStyle = {
        caretColor: 'transparent'
    };
    if (direction === 'rtl') {
        // While the bidirectional algorithm seems to work properly on inline elements with actual values, it returns different results for placeholder strings. 
        // To ensure placeholder render in correct format, we apply the CSS equivalent of LRE (left-to-right embedding). See https://www.unicode.org/reports/tr9/#Explicit_Directional_Embeddings.
        // However, we apply this to both placeholders and date segments with an actual value because the date segments will shift around when deleting otherwise. 
        segmentStyle.unicodeBidi = 'embed';
        let format = options[segment.type];
        if (format === 'numeric' || format === '2-digit') segmentStyle.direction = 'ltr';
    }
    return {
        segmentProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(spinButtonProps, labelProps, {
            id: id,
            ...touchPropOverrides,
            'aria-invalid': state.isInvalid ? 'true' : undefined,
            'aria-describedby': ariaDescribedBy,
            'aria-readonly': state.isReadOnly || !segment.isEditable ? 'true' : undefined,
            'data-placeholder': segment.isPlaceholder || undefined,
            contentEditable: isEditable,
            suppressContentEditableWarning: isEditable,
            spellCheck: isEditable ? 'false' : undefined,
            autoCorrect: isEditable ? 'off' : undefined,
            // Capitalization was changed in React 17...
            [parseInt(($1CM7W$react).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: isEditable ? 'next' : undefined,
            inputMode: state.isDisabled || segment.type === 'dayPeriod' || segment.type === 'era' || !isEditable ? undefined : 'numeric',
            tabIndex: state.isDisabled ? undefined : 0,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            style: segmentStyle,
            // Prevent pointer events from reaching useDatePickerGroup, and allow native browser behavior to focus the segment.
            onPointerDown (e) {
                e.stopPropagation();
            },
            onMouseDown (e) {
                e.stopPropagation();
            }
        })
    };
}
function $32489daedd52963e$var$commonPrefixLength(strings) {
    // Sort the strings, and compare the characters in the first and last to find the common prefix.
    strings.sort();
    let first = strings[0];
    let last = strings[strings.length - 1];
    for(let i = 0; i < first.length; i++){
        if (first[i] !== last[i]) return i;
    }
    return 0;
}

var dataAttr = (condition) => condition ? "true" : void 0;
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx$1(...args) {
  var i = 0, tmp, x, str = "";
  while (i < args.length) {
    if (tmp = args[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}
function objectToDeps(obj) {
  if (!obj || typeof obj !== "object") {
    return "";
  }
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return "";
  }
}
function getGregorianYearOffset(identifier) {
  switch (identifier) {
    case "buddhist":
      return 543;
    case "ethiopic":
    case "ethioaa":
      return -8;
    case "coptic":
      return -284;
    case "hebrew":
      return 3760;
    case "indian":
      return -78;
    case "islamic-civil":
    case "islamic-tbla":
    case "islamic-umalqura":
      return -579;
    case "persian":
      return -600;
    case "roc":
    case "japanese":
    case "gregory":
    default:
      return 0;
  }
}

var DateInputSegment = ({
  state,
  segment,
  slots,
  classNames,
  ...otherProps
}) => {
  const ref = reactExports.useRef(null);
  let { segmentProps } = $32489daedd52963e$export$1315d136e6f7581(segment, state, ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(segmentProps, otherProps),
      ref,
      className: slots.segment({
        class: classNames == null ? void 0 : classNames.segment
      }),
      "data-editable": dataAttr(segment.isEditable),
      "data-invalid": dataAttr(state.isInvalid),
      "data-placeholder": dataAttr(segment.isPlaceholder),
      "data-slot": "segment",
      "data-type": segment.type,
      style: {
        ...segmentProps.style
      },
      children: segment.text
    }
  );
};

var DateInputField = reactExports.forwardRef((props, ref) => {
  const { as, state, slots, inputProps, classNames, ...otherProps } = props;
  const Component = as || "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...otherProps, ref, children: [
    state.segments.map((segment, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      DateInputSegment,
      {
        classNames,
        segment,
        slots,
        state
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...inputProps })
  ] });
});
DateInputField.displayName = "HeroUI.DateInputField";

function createContext2(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = reactExports.createContext(void 0);
  Context.displayName = name;
  function useContext2() {
    var _a;
    const context = reactExports.useContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, error, useContext2);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext2, Context];
}

function useDOMRef(ref) {
  const domRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => domRef.current);
  return domRef;
}

var [ProviderContext, useProviderContext] = createContext2({
  name: "ProviderContext",
  strict: false
});

function useLabelPlacement(props) {
  const globalContext = useProviderContext();
  const globalLabelPlacement = globalContext == null ? void 0 : globalContext.labelPlacement;
  return reactExports.useMemo(() => {
    var _a, _b;
    const labelPlacement = (_b = (_a = props.labelPlacement) != null ? _a : globalLabelPlacement) != null ? _b : "inside";
    if (labelPlacement === "inside" && !props.label) {
      return "outside";
    }
    return labelPlacement;
  }, [props.labelPlacement, globalLabelPlacement, props.label]);
}

// src/utils.ts
function forwardRef(component) {
  return reactExports.forwardRef(component);
}
var mapPropsVariants = (props, variantKeys, removeVariantProps = true) => {
  if (!variantKeys) {
    return [props, {}];
  }
  const picked = variantKeys.reduce((acc, key) => {
    if (key in props) {
      return { ...acc, [key]: props[key] };
    } else {
      return acc;
    }
  }, {});
  if (removeVariantProps) {
    const omitted = Object.keys(props).filter((key) => !variantKeys.includes(key)).reduce((acc, key) => ({ ...acc, [key]: props[key] }), {});
    return [omitted, picked];
  } else {
    return [props, picked];
  }
};

// src/utils/tw-merge-config.ts
var COMMON_UNITS = ["small", "medium", "large"];
var twMergeConfig = {
  theme: {
    opacity: ["disabled"],
    spacing: ["divider"],
    borderWidth: COMMON_UNITS,
    borderRadius: COMMON_UNITS
  },
  classGroups: {
    shadow: [{ shadow: COMMON_UNITS }],
    "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ]
  }
};

var l=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,u=e=>!e||typeof e!="object"||Object.keys(e).length===0,x$1=(e,o)=>JSON.stringify(e)===JSON.stringify(o);function i(e,o){e.forEach(function(r){Array.isArray(r)?i(r,o):o.push(r);});}function y(e){let o=[];return i(e,o),o}var a=(...e)=>y(e).filter(Boolean),p=(e,o)=>{let r={},c=Object.keys(e),f=Object.keys(o);for(let t of c)if(f.includes(t)){let s=e[t],n=o[t];Array.isArray(s)||Array.isArray(n)?r[t]=a(n,s):typeof s=="object"&&typeof n=="object"?r[t]=p(s,n):r[t]=n+" "+s;}else r[t]=e[t];for(let t of f)c.includes(t)||(r[t]=o[t]);return r},g=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();

var ie={twMerge:true,twMergeConfig:{},responsiveVariants:false},x=s=>s||void 0,N=(...s)=>x(y(s).filter(Boolean).join(" ")),R=null,v={},q=false,M=(...s)=>b$1=>b$1.twMerge?((!R||q)&&(q=false,R=u(v)?twMerge$1:extendTailwindMerge$1({...v,extend:{theme:v.theme,classGroups:v.classGroups,conflictingClassGroupModifiers:v.conflictingClassGroupModifiers,conflictingClassGroups:v.conflictingClassGroups,...v.extend}})),x(R(N(s)))):N(s),_=(s,b)=>{for(let e in b)s.hasOwnProperty(e)?s[e]=N(s[e],b[e]):s[e]=b[e];return s},ce=(s,b$1)=>{let{extend:e=null,slots:O={},variants:U={},compoundVariants:W=[],compoundSlots:C=[],defaultVariants:z={}}=s,m={...ie,...b$1},k=e!=null&&e.base?N(e.base,s==null?void 0:s.base):s==null?void 0:s.base,g$1=e!=null&&e.variants&&!u(e.variants)?p(U,e.variants):U,w=e!=null&&e.defaultVariants&&!u(e.defaultVariants)?{...e.defaultVariants,...z}:z;!u(m.twMergeConfig)&&!x$1(m.twMergeConfig,v)&&(q=true,v=m.twMergeConfig);let S=u(e==null?void 0:e.slots),T=u(O)?{}:{base:N(s==null?void 0:s.base,S&&(e==null?void 0:e.base)),...O},j=S?T:_({...e==null?void 0:e.slots},u(T)?{base:s==null?void 0:s.base}:T),h$1=u(e==null?void 0:e.compoundVariants)?W:a(e==null?void 0:e.compoundVariants,W),V=l$1=>{if(u(g$1)&&u(O)&&S)return M(k,l$1==null?void 0:l$1.class,l$1==null?void 0:l$1.className)(m);if(h$1&&!Array.isArray(h$1))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);if(C&&!Array.isArray(C))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C}`);let P=(a,n,t=[],i)=>{let r=t;if(typeof n=="string")r=r.concat(g(n).split(" ").map(o=>`${a}:${o}`));else if(Array.isArray(n))r=r.concat(n.reduce((o,c)=>o.concat(`${a}:${c}`),[]));else if(typeof n=="object"&&typeof i=="string"){for(let o in n)if(n.hasOwnProperty(o)&&o===i){let c=n[o];if(c&&typeof c=="string"){let u=g(c);r[i]?r[i]=r[i].concat(u.split(" ").map(f=>`${a}:${f}`)):r[i]=u.split(" ").map(f=>`${a}:${f}`);}else Array.isArray(c)&&c.length>0&&(r[i]=c.reduce((u,f)=>u.concat(`${a}:${f}`),[]));}}return r},D=(a$1,n=g$1,t=null,i=null)=>{var L;let r=n[a$1];if(!r||u(r))return null;let o=(L=i==null?void 0:i[a$1])!=null?L:l$1==null?void 0:l$1[a$1];if(o===null)return null;let c=l(o),u$1=Array.isArray(m.responsiveVariants)&&m.responsiveVariants.length>0||m.responsiveVariants===true,f=w==null?void 0:w[a$1],d=[];if(typeof c=="object"&&u$1)for(let[E,Q]of Object.entries(c)){let ne=r[Q];if(E==="initial"){f=Q;continue}Array.isArray(m.responsiveVariants)&&!m.responsiveVariants.includes(E)||(d=P(E,ne,d,t));}let $=c!=null&&typeof c!="object"?c:l(f),A=r[$||"false"];return typeof d=="object"&&typeof t=="string"&&d[t]?_(d,A):d.length>0?(d.push(A),t==="base"?d.join(" "):d):A},p=()=>g$1?Object.keys(g$1).map(a=>D(a,g$1)):null,ee=(a,n)=>{if(!g$1||typeof g$1!="object")return null;let t=new Array;for(let i in g$1){let r=D(i,g$1,a,n),o=a==="base"&&typeof r=="string"?r:r&&r[a];o&&(t[t.length]=o);}return t},H={};for(let a in l$1)l$1[a]!==void 0&&(H[a]=l$1[a]);let I=(a,n)=>{var i;let t=typeof(l$1==null?void 0:l$1[a])=="object"?{[a]:(i=l$1[a])==null?void 0:i.initial}:{};return {...w,...H,...t,...n}},J=(a=[],n)=>{let t=[];for(let{class:i,className:r,...o}of a){let c=true;for(let[u,f]of Object.entries(o)){let d=I(u,n)[u];if(Array.isArray(f)){if(!f.includes(d)){c=false;break}}else {let $=A=>A==null||A===false;if($(f)&&$(d))continue;if(d!==f){c=false;break}}}c&&(i&&t.push(i),r&&t.push(r));}return t},te=a=>{let n=J(h$1,a);if(!Array.isArray(n))return n;let t={};for(let i of n)if(typeof i=="string"&&(t.base=M(t.base,i)(m)),typeof i=="object")for(let[r,o]of Object.entries(i))t[r]=M(t[r],o)(m);return t},ae=a=>{if(C.length<1)return null;let n={};for(let{slots:t=[],class:i,className:r,...o}of C){if(!u(o)){let c=true;for(let u of Object.keys(o)){let f=I(u,a)[u];if(f===void 0||(Array.isArray(o[u])?!o[u].includes(f):o[u]!==f)){c=false;break}}if(!c)continue}for(let c of t)n[c]=n[c]||[],n[c].push([i,r]);}return n};if(!u(O)||!S){let a={};if(typeof j=="object"&&!u(j))for(let n of Object.keys(j))a[n]=t=>{var i,r;return M(j[n],ee(n,t),((i=te(t))!=null?i:[])[n],((r=ae(t))!=null?r:[])[n],t==null?void 0:t.class,t==null?void 0:t.className)(m)};return a}return M(k,p(),J(h$1),l$1==null?void 0:l$1.class,l$1==null?void 0:l$1.className)(m)},K=()=>{if(!(!g$1||typeof g$1!="object"))return Object.keys(g$1)};return V.variantKeys=K(),V.extend=e,V.base=k,V.slots=j,V.variants=g$1,V.defaultVariants=w,V.compoundSlots=C,V.compoundVariants=h$1,V};

var tv = (options, config) => {
  var _a, _b, _c;
  return ce(options, {
    ...config,
    twMerge: (_a = void 0 ) != null ? _a : true,
    twMergeConfig: {
      ...void 0 ,
      theme: {
        ...(_b = void 0 ) == null ? void 0 : _b.theme,
        ...twMergeConfig.theme
      },
      classGroups: {
        ...(_c = void 0 ) == null ? void 0 : _c.classGroups,
        ...twMergeConfig.classGroups
      }
    }
  });
};

// src/components/form.ts
var form = tv({
  base: "flex flex-col gap-2 items-start"
});

// src/components/date-input.ts
var dateInput = tv({
  slots: {
    base: "group flex flex-col",
    label: [
      "block subpixel-antialiased text-small text-default-600",
      // isRequired=true
      "group-data-[required=true]:after:content-['*'] group-data-[required=true]:after:text-danger group-data-[required=true]:after:ml-0.5",
      // isInValid=true
      "group-data-[invalid=true]:text-danger"
    ],
    inputWrapper: [
      "relative px-3 gap-3 w-full inline-flex flex-row items-center",
      "cursor-text tap-highlight-transparent shadow-sm"
    ],
    input: "flex h-full gap-x-0.5 w-full font-normal",
    innerWrapper: [
      "flex items-center text-default-400 w-full gap-x-2 h-6",
      // isInValid=true
      "group-data-[invalid=true]:text-danger"
    ],
    // this wraps the input and the start/end content
    segment: [
      "group first:-ml-0.5 [&:not(:first-child)]:-ml-1 px-0.5 my-auto box-content tabular-nums text-start",
      "inline-block outline-none focus:shadow-sm rounded-md",
      "text-foreground-500 data-[editable=true]:text-foreground",
      "data-[editable=true]:data-[placeholder=true]:text-foreground-500",
      // isInvalid=true
      "data-[invalid=true]:text-danger-300 data-[invalid=true]:data-[editable=true]:text-danger",
      "data-[invalid=true]:focus:bg-danger-400/50 dark:data-[invalid=true]:focus:bg-danger-400/20",
      "data-[invalid=true]:data-[editable=true]:focus:text-danger"
    ],
    helperWrapper: "hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
    description: "text-tiny text-foreground-400",
    errorMessage: "text-tiny text-danger"
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: [
          "bg-default-100",
          "hover:bg-default-200",
          "focus-within:hover:bg-default-100",
          // isInvalid=true
          "group-data-[invalid=true]:bg-danger-50",
          "group-data-[invalid=true]:hover:bg-danger-100",
          "group-data-[invalid=true]:focus-within:hover:bg-danger-50"
        ]
      },
      faded: {
        inputWrapper: [
          "bg-default-100",
          "border-medium",
          "border-default-200",
          "hover:border-default-400",
          // isInvalid=true
          "group-data-[invalid=true]:bg-danger-50",
          "group-data-[invalid=true]:hover:bg-danger-100",
          "group-data-[invalid=true]:focus-within:hover:bg-danger-50"
        ]
      },
      bordered: {
        inputWrapper: [
          "border-medium",
          "border-default-200",
          "hover:border-default-400",
          "focus-within:border-default-foreground",
          "focus-within:hover:border-default-foreground",
          // isInvalid=true
          "group-data-[invalid=true]:border-danger",
          "group-data-[invalid=true]:hover:border-danger",
          "group-data-[invalid=true]:focus-within:hover:border-danger"
        ]
      },
      underlined: {
        inputWrapper: [
          "px-1",
          "pb-1",
          "gap-0",
          "relative",
          "box-border",
          "border-b-medium",
          "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "border-default-200",
          "!rounded-none",
          "hover:border-default-300",
          "after:content-['']",
          "after:w-0",
          "after:origin-center",
          "after:bg-default-foreground",
          "after:absolute",
          "after:left-1/2",
          "after:-translate-x-1/2",
          "after:-bottom-[2px]",
          "after:h-[2px]",
          "focus-within:after:w-full",
          // isInvalid=true
          "group-data-[invalid=true]:after:bg-danger"
        ]
      }
    },
    color: {
      default: {
        segment: "focus:bg-default-400/50 data-[editable=true]:focus:text-default-foreground"
      },
      primary: {
        segment: "focus:bg-primary-400/50 data-[editable=true]:focus:text-primary"
      },
      secondary: {
        segment: "focus:bg-secondary-400/50 data-[editable=true]:focus:text-secondary"
      },
      success: {
        segment: "focus:bg-success-400/50 dark:focus:bg-success-400/20 data-[editable=true]:focus:text-success"
      },
      warning: {
        segment: "focus:bg-warning-400/50 dark:focus:bg-warning-400/20 data-[editable=true]:focus:text-warning"
      },
      danger: {
        segment: "focus:bg-danger-400/50 dark:focus:bg-danger-400/20 data-[editable=true]:focus:text-danger"
      }
    },
    size: {
      sm: {
        label: "text-tiny",
        input: "text-small",
        inputWrapper: "h-8 min-h-8 px-2 rounded-small"
      },
      md: {
        input: "text-small",
        inputWrapper: "h-10 min-h-10 rounded-medium",
        clearButton: "text-large"
      },
      lg: {
        label: "text-medium",
        input: "text-medium",
        inputWrapper: "h-12 min-h-12 rounded-large"
      }
    },
    radius: {
      none: {
        inputWrapper: "rounded-none"
      },
      sm: {
        inputWrapper: "rounded-small"
      },
      md: {
        inputWrapper: "rounded-medium"
      },
      lg: {
        inputWrapper: "rounded-large"
      },
      full: {
        inputWrapper: "rounded-full"
      }
    },
    labelPlacement: {
      outside: {
        base: "flex flex-col data-[has-helper=true]:pb-[calc(theme(fontSize.tiny)_+8px)] gap-y-1.5",
        label: "w-full text-foreground",
        helperWrapper: "absolute top-[calc(100%_+_2px)] start-0"
      },
      "outside-left": {
        base: "flex-row items-center data-[has-helper=true]:pb-[calc(theme(fontSize.tiny)_+_8px)] gap-x-2 flex-nowrap",
        label: "relative text-foreground",
        inputWrapper: "relative flex-1",
        helperWrapper: "absolute top-[calc(100%_+_2px)] start-0"
      },
      inside: {
        label: "w-full text-tiny cursor-text",
        inputWrapper: "flex-col items-start justify-center gap-0"
      }
    },
    fullWidth: {
      true: {
        base: "w-full",
        inputWrapper: "w-full"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
        inputWrapper: "pointer-events-none",
        label: "pointer-events-none"
      }
    },
    disableAnimation: {
      true: {
        label: "transition-none",
        input: "transition-none",
        inputWrapper: "transition-none"
      },
      false: {
        label: [
          "!ease-out",
          "!duration-200",
          "will-change-auto",
          "motion-reduce:transition-none",
          "transition-[color,opacity]"
        ],
        inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
        segment: "transition-colors motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "md",
    fullWidth: true,
    isDisabled: false
  },
  compoundVariants: [
    // flat & color
    {
      variant: "flat",
      color: "primary",
      class: {
        innerWrapper: "text-primary",
        inputWrapper: ["bg-primary-100", "hover:bg-primary-50", "focus-within:bg-primary-50"],
        segment: "text-primary-300 data-[editable=true]:data-[placeholder=true]:text-primary-300 data-[editable=true]:text-primary",
        label: "text-primary"
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        innerWrapper: "text-secondary",
        inputWrapper: ["bg-secondary-100", "hover:bg-secondary-50", "focus-within:bg-secondary-50"],
        segment: "text-secondary-300 data-[editable=true]:data-[placeholder=true]:text-secondary-300 data-[editable=true]:text-secondary",
        label: "text-secondary"
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        innerWrapper: "text-success-600 dark:text-success",
        inputWrapper: ["bg-success-100", "hover:bg-success-50", "focus-within:bg-success-50"],
        segment: "text-success-400 data-[editable=true]:data-[placeholder=true]:text-success-400 data-[editable=true]:text-success-600 data-[editable=true]:focus:text-success-600",
        label: "text-success-600 dark:text-success"
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        innerWrapper: "text-warning-600 dark:text-warning",
        inputWrapper: ["bg-warning-100", "hover:bg-warning-50", "focus-within:bg-warning-50"],
        segment: "text-warning-400 data-[editable=true]:data-[placeholder=true]:text-warning-400 data-[editable=true]:text-warning-600 data-[editable=true]:focus:text-warning-600",
        label: "text-warning-600 dark:text-warning"
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        innerWrapper: "text-danger",
        inputWrapper: ["bg-danger-100", "hover:bg-danger-50", "focus-within:bg-danger-50"],
        segment: "text-danger-300 data-[editable=true]:data-[placeholder=true]:text-danger-300 data-[editable=true]:text-danger",
        label: "text-danger"
      }
    },
    // faded & color
    {
      variant: "faded",
      color: "primary",
      class: {
        innerWrapper: "text-primary",
        inputWrapper: [
          "hover:border-primary",
          "focus-within:border-primary",
          "focus-within:hover:border-primary"
        ],
        label: "text-primary"
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        innerWrapper: "text-secondary",
        inputWrapper: [
          "hover:border-secondary",
          "focus-within:border-secondary",
          "focus-within:hover:border-secondary"
        ],
        label: "text-secondary"
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        innerWrapper: "text-success",
        inputWrapper: [
          "hover:border-success",
          "focus-within:border-success",
          "focus-within:hover:border-success"
        ],
        label: "text-success"
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        innerWrapper: "text-warning",
        inputWrapper: [
          "hover:border-warning",
          "focus-within:border-warning",
          "focus-within:hover:border-warning"
        ],
        label: "text-warning"
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        innerWrapper: "text-danger",
        inputWrapper: [
          "hover:border-danger",
          "focus-within:border-danger",
          "focus-within:hover:border-danger"
        ],
        label: "text-danger"
      }
    },
    // bordered & color
    {
      variant: "bordered",
      color: "primary",
      class: {
        innerWrapper: "text-primary",
        inputWrapper: ["focus-within:border-primary", "focus-within:hover:border-primary"],
        label: "text-primary"
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        innerWrapper: "text-secondary",
        inputWrapper: ["focus-within:border-secondary", "focus-within:hover:border-secondary"],
        label: "text-secondary"
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        innerWrapper: "text-success",
        inputWrapper: ["focus-within:border-success", "focus-within:hover:border-success"],
        label: "text-success"
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        innerWrapper: "text-warning",
        inputWrapper: ["focus-within:border-warning", "focus-within:hover:border-warning"],
        label: "text-warning"
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        innerWrapper: "text-danger",
        inputWrapper: ["focus-within:border-danger", "focus-within:hover:border-danger"],
        label: "text-danger"
      }
    },
    // underlined & color
    {
      variant: "underlined",
      color: "primary",
      class: {
        innerWrapper: "text-primary",
        inputWrapper: "after:bg-primary",
        label: "text-primary"
      }
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        innerWrapper: "text-secondary",
        inputWrapper: "after:bg-secondary",
        label: "text-secondary"
      }
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        innerWrapper: "text-success",
        inputWrapper: "after:bg-success",
        label: "text-success"
      }
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        innerWrapper: "text-warning",
        inputWrapper: "after:bg-warning",
        label: "text-warning"
      }
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        innerWrapper: "text-danger",
        inputWrapper: "after:bg-danger",
        label: "text-danger"
      }
    },
    // size & labelPlacement
    {
      labelPlacement: "inside",
      size: "sm",
      class: {
        inputWrapper: "h-12 py-1.5 px-3"
      }
    },
    {
      labelPlacement: "inside",
      size: "md",
      class: {
        inputWrapper: "h-14 py-2"
      }
    },
    {
      labelPlacement: "inside",
      size: "lg",
      class: {
        label: "text-medium",
        inputWrapper: "h-16 py-2.5 gap-0"
      }
    },
    // !disableAnimation & variant
    {
      disableAnimation: false,
      variant: ["faded", "bordered"],
      class: {
        inputWrapper: "transition-colors motion-reduce:transition-none"
      }
    },
    {
      disableAnimation: false,
      variant: "underlined",
      class: {
        inputWrapper: "after:transition-width motion-reduce:after:transition-none"
      }
    }
  ]
});

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = className => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = func => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = config => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  const parseClassName = className => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return className => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const sortModifiers = modifiers => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = mix => {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = key => {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = value => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = value => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = value => getIsArbitraryValue(value, 'number', isNumber);
const isInteger = value => Boolean(value) && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isTshirtSize = value => tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
const isArbitrarySize = value => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
const isArbitraryImage = value => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, '', isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
};

/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
const mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, 'cacheSize', cacheSize);
  overrideProperty(baseConfig, 'prefix', prefix);
  overrideProperty(baseConfig, 'separator', separator);
  overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== undefined) {
    baseObject[overrideKey] = overrideValue;
  }
};
const overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
const mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== undefined) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
};
const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);

var twMerge = extendTailwindMerge({ extend: twMergeConfig });
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

var DateInputGroup = forwardRef((props, ref) => {
  const {
    as,
    label,
    children,
    description,
    startContent,
    endContent,
    errorMessage: errorMessageProp,
    shouldLabelBeOutside,
    isInvalid,
    groupProps,
    labelProps,
    wrapperProps,
    helperWrapperProps,
    errorMessageProps,
    descriptionProps,
    validationErrors,
    validationDetails,
    ...otherProps
  } = props;
  const Component = as || "div";
  const labelContent = label ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...labelProps, children: label }) : null;
  const errorMessage = typeof errorMessageProp === "function" ? errorMessageProp({
    isInvalid,
    validationErrors,
    validationDetails
  }) : errorMessageProp || (validationErrors == null ? void 0 : validationErrors.join(" "));
  const hasHelper = !!description || !!errorMessage;
  const helperWrapper = reactExports.useMemo(() => {
    if (!hasHelper) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...helperWrapperProps, children: isInvalid && errorMessage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...errorMessageProps, children: errorMessage }) : description ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...descriptionProps, children: description }) : null });
  }, [
    hasHelper,
    errorMessage,
    description,
    helperWrapperProps,
    errorMessageProps,
    descriptionProps
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...otherProps, ref, "data-has-helper": dataAttr(hasHelper), children: [
    shouldLabelBeOutside ? labelContent : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...groupProps, children: [
      !shouldLabelBeOutside ? labelContent : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...wrapperProps, children: [
        startContent,
        children,
        endContent
      ] }),
      shouldLabelBeOutside ? helperWrapper : null
    ] }),
    !shouldLabelBeOutside ? helperWrapper : null
  ] });
});
DateInputGroup.displayName = "HeroUI.DateInputGroup";

var $b3427c06585c22a0$exports = {};
$b3427c06585c22a0$exports = {
    "rangeOverflow": (args)=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${args.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
    "rangeReversed": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621} \u{64A}\u{62C}\u{628} \u{623}\u{646} \u{64A}\u{643}\u{648}\u{646} \u{642}\u{628}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}.`,
    "rangeUnderflow": (args)=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${args.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
    "unavailableDate": `\u{627}\u{644}\u{628}\u{64A}\u{627}\u{646}\u{627}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}\u{629} \u{63A}\u{64A}\u{631} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`
};

var $d282528f459122b9$exports = {};
$d282528f459122b9$exports = {
    "rangeOverflow": (args)=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${args.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
    "rangeReversed": `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} \u{43F}\u{440}\u{435}\u{434}\u{438} \u{43A}\u{440}\u{430}\u{439}\u{43D}\u{430}\u{442}\u{430}.`,
    "rangeUnderflow": (args)=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${args.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
    "unavailableDate": `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435} \u{435} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430}.`
};

var $2d5eecd634a9ca45$exports = {};
$2d5eecd634a9ca45$exports = {
    "rangeOverflow": (args)=>`Hodnota mus\xed b\xfdt ${args.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
    "rangeReversed": `Datum zah\xe1jen\xed mus\xed p\u{159}edch\xe1zet datu ukon\u{10D}en\xed.`,
    "rangeUnderflow": (args)=>`Hodnota mus\xed b\xfdt ${args.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
    "unavailableDate": `Vybran\xe9 datum nen\xed k dispozici.`
};

var $c8e2288226c24a67$exports = {};
$c8e2288226c24a67$exports = {
    "rangeOverflow": (args)=>`V\xe6rdien skal v\xe6re ${args.maxValue} eller tidligere.`,
    "rangeReversed": `Startdatoen skal v\xe6re f\xf8r slutdatoen.`,
    "rangeUnderflow": (args)=>`V\xe6rdien skal v\xe6re ${args.minValue} eller nyere.`,
    "unavailableDate": `Den valgte dato er ikke tilg\xe6ngelig.`
};

var $6f5745e389c346d7$exports = {};
$6f5745e389c346d7$exports = {
    "rangeOverflow": (args)=>`Der Wert muss ${args.maxValue} oder fr\xfcher sein.`,
    "rangeReversed": `Das Anfangsdatum muss vor dem Enddatum liegen.`,
    "rangeUnderflow": (args)=>`Der Wert muss ${args.minValue} oder sp\xe4ter sein.`,
    "unavailableDate": `Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.`
};

var $8c882ccf4300d1da$exports = {};
$8c882ccf4300d1da$exports = {
    "rangeOverflow": (args)=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${args.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    "rangeReversed": `\u{397} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} \u{3C4}\u{3B7}\u{3BD} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}.`,
    "rangeUnderflow": (args)=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${args.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    "unavailableDate": `\u{397} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3B4}\u{3B5}\u{3BD} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7}.`
};

var $22195056771860be$exports = {};
$22195056771860be$exports = {
    "rangeUnderflow": (args)=>`Value must be ${args.minValue} or later.`,
    "rangeOverflow": (args)=>`Value must be ${args.maxValue} or earlier.`,
    "rangeReversed": `Start date must be before end date.`,
    "unavailableDate": `Selected date unavailable.`
};

var $cedfa43b4e2a5906$exports = {};
$cedfa43b4e2a5906$exports = {
    "rangeOverflow": (args)=>`El valor debe ser ${args.maxValue} o anterior.`,
    "rangeReversed": `La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.`,
    "rangeUnderflow": (args)=>`El valor debe ser ${args.minValue} o posterior.`,
    "unavailableDate": `Fecha seleccionada no disponible.`
};

var $eeeaa8daee3601c7$exports = {};
$eeeaa8daee3601c7$exports = {
    "rangeOverflow": (args)=>`V\xe4\xe4rtus peab olema ${args.maxValue} v\xf5i varasem.`,
    "rangeReversed": `Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.`,
    "rangeUnderflow": (args)=>`V\xe4\xe4rtus peab olema ${args.minValue} v\xf5i hilisem.`,
    "unavailableDate": `Valitud kuup\xe4ev pole saadaval.`
};

var $35e0614a49b3bb40$exports = {};
$35e0614a49b3bb40$exports = {
    "rangeOverflow": (args)=>`Arvon on oltava ${args.maxValue} tai sit\xe4 aikaisempi.`,
    "rangeReversed": `Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.`,
    "rangeUnderflow": (args)=>`Arvon on oltava ${args.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
    "unavailableDate": `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.`
};

var $929bc63f7705a78f$exports = {};
$929bc63f7705a78f$exports = {
    "rangeOverflow": (args)=>`La valeur doit \xeatre ${args.maxValue} ou ant\xe9rieure.`,
    "rangeReversed": `La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.`,
    "rangeUnderflow": (args)=>`La valeur doit \xeatre ${args.minValue} ou ult\xe9rieure.`,
    "unavailableDate": `La date s\xe9lectionn\xe9e n\u{2019}est pas disponible.`
};

var $9a28d073b034d183$exports = {};
$9a28d073b034d183$exports = {
    "rangeOverflow": (args)=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${args.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    "rangeReversed": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} \u{5DC}\u{5E4}\u{5E0}\u{5D9} \u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E1}\u{5D9}\u{5D5}\u{5DD}.`,
    "rangeUnderflow": (args)=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${args.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    "unavailableDate": `\u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E0}\u{5D1}\u{5D7}\u{5E8} \u{5D0}\u{5D9}\u{5E0}\u{5D5} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`
};

var $7743e79780ebcca3$exports = {};
$7743e79780ebcca3$exports = {
    "rangeOverflow": (args)=>`Vrijednost mora biti ${args.maxValue} ili ranije.`,
    "rangeReversed": `Datum po\u{10D}etka mora biti prije datuma zavr\u{161}etka.`,
    "rangeUnderflow": (args)=>`Vrijednost mora biti ${args.minValue} ili kasnije.`,
    "unavailableDate": `Odabrani datum nije dostupan.`
};

var $3351817a04898858$exports = {};
$3351817a04898858$exports = {
    "rangeOverflow": (args)=>`Az \xe9rt\xe9knek ${args.maxValue} vagy kor\xe1bbinak kell lennie.`,
    "rangeReversed": `A kezd\u{151} d\xe1tumnak a befejez\u{151} d\xe1tumn\xe1l kor\xe1bbinak kell lennie.`,
    "rangeUnderflow": (args)=>`Az \xe9rt\xe9knek ${args.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
    "unavailableDate": `A kiv\xe1lasztott d\xe1tum nem \xe9rhet\u{151} el.`
};

var $4120bdb1d03484db$exports = {};
$4120bdb1d03484db$exports = {
    "rangeOverflow": (args)=>`Il valore deve essere ${args.maxValue} o precedente.`,
    "rangeReversed": `La data di inizio deve essere antecedente alla data di fine.`,
    "rangeUnderflow": (args)=>`Il valore deve essere ${args.minValue} o successivo.`,
    "unavailableDate": `Data selezionata non disponibile.`
};

var $65e5e1569f34ea4f$exports = {};
$65e5e1569f34ea4f$exports = {
    "rangeOverflow": (args)=>`\u{5024}\u{306F} ${args.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "rangeReversed": `\u{958B}\u{59CB}\u{65E5}\u{306F}\u{7D42}\u{4E86}\u{65E5}\u{3088}\u{308A}\u{524D}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{5024}\u{306F} ${args.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "unavailableDate": `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8}\u{306F}\u{4F7F}\u{7528}\u{3067}\u{304D}\u{307E}\u{305B}\u{3093}\u{3002}`
};

var $d34552a7550967e7$exports = {};
$d34552a7550967e7$exports = {
    "rangeOverflow": (args)=>`\u{AC12}\u{C740} ${args.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "rangeReversed": `\u{C2DC}\u{C791}\u{C77C}\u{C740} \u{C885}\u{B8CC}\u{C77C} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "rangeUnderflow": (args)=>`\u{AC12}\u{C740} ${args.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "unavailableDate": `\u{C120}\u{D0DD}\u{D55C} \u{B0A0}\u{C9DC}\u{B97C} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.`
};

var $8f855bffe63f6eca$exports = {};
$8f855bffe63f6eca$exports = {
    "rangeOverflow": (args)=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${args.maxValue} arba ankstesn\u{117}.`,
    "rangeReversed": `Prad\u{17E}ios data turi b\u{16B}ti ankstesn\u{117} nei pabaigos data.`,
    "rangeUnderflow": (args)=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${args.minValue} arba naujesn\u{117}.`,
    "unavailableDate": `Pasirinkta data nepasiekiama.`
};

var $ce40f46d09034645$exports = {};
$ce40f46d09034645$exports = {
    "rangeOverflow": (args)=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${args.maxValue} vai agr\u{101}kai.`,
    "rangeReversed": `S\u{101}kuma datumam ir j\u{101}b\u{16B}t pirms beigu datuma.`,
    "rangeUnderflow": (args)=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${args.minValue} vai v\u{113}l\u{101}kai.`,
    "unavailableDate": `Atlas\u{12B}tais datums nav pieejams.`
};

var $dd1a9a73340c793e$exports = {};
$dd1a9a73340c793e$exports = {
    "rangeOverflow": (args)=>`Verdien m\xe5 v\xe6re ${args.maxValue} eller tidligere.`,
    "rangeReversed": `Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.`,
    "rangeUnderflow": (args)=>`Verdien m\xe5 v\xe6re ${args.minValue} eller senere.`,
    "unavailableDate": `Valgt dato utilgjengelig.`
};

var $4ee1fb3f0cbe6f59$exports = {};
$4ee1fb3f0cbe6f59$exports = {
    "rangeOverflow": (args)=>`Waarde moet ${args.maxValue} of eerder zijn.`,
    "rangeReversed": `De startdatum moet voor de einddatum liggen.`,
    "rangeUnderflow": (args)=>`Waarde moet ${args.minValue} of later zijn.`,
    "unavailableDate": `Geselecteerde datum niet beschikbaar.`
};

var $c85829aebb0bc94b$exports = {};
$c85829aebb0bc94b$exports = {
    "rangeOverflow": (args)=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${args.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
    "rangeReversed": `Data rozpocz\u{119}cia musi by\u{107} wcze\u{15B}niejsza ni\u{17C} data zako\u{144}czenia.`,
    "rangeUnderflow": (args)=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${args.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
    "unavailableDate": `Wybrana data jest niedost\u{119}pna.`
};

var $27f5cd2291ca8a02$exports = {};
$27f5cd2291ca8a02$exports = {
    "rangeOverflow": (args)=>`O valor deve ser ${args.maxValue} ou anterior.`,
    "rangeReversed": `A data inicial deve ser anterior \xe0 data final.`,
    "rangeUnderflow": (args)=>`O valor deve ser ${args.minValue} ou posterior.`,
    "unavailableDate": `Data selecionada indispon\xedvel.`
};

var $e046fdccd69bea8e$exports = {};
$e046fdccd69bea8e$exports = {
    "rangeOverflow": (args)=>`O valor tem de ser ${args.maxValue} ou anterior.`,
    "rangeReversed": `A data de in\xedcio deve ser anterior \xe0 data de fim.`,
    "rangeUnderflow": (args)=>`O valor tem de ser ${args.minValue} ou posterior.`,
    "unavailableDate": `Data selecionada indispon\xedvel.`
};

var $fa5f88e804986547$exports = {};
$fa5f88e804986547$exports = {
    "rangeOverflow": (args)=>`Valoarea trebuie s\u{103} fie ${args.maxValue} sau anterioar\u{103}.`,
    "rangeReversed": `Data de \xeenceput trebuie s\u{103} fie anterioar\u{103} datei de sf\xe2r\u{219}it.`,
    "rangeUnderflow": (args)=>`Valoarea trebuie s\u{103} fie ${args.minValue} sau ulterioar\u{103}.`,
    "unavailableDate": `Data selectat\u{103} nu este disponibil\u{103}.`
};

var $28e4714602d1b568$exports = {};
$28e4714602d1b568$exports = {
    "rangeOverflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${args.maxValue}.`,
    "rangeReversed": `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{430} \u{43F}\u{440}\u{435}\u{434}\u{448}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{434}\u{430}\u{442}\u{435} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}.`,
    "rangeUnderflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${args.minValue}.`,
    "unavailableDate": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
};

var $4e3bc8cf783ad569$exports = {};
$4e3bc8cf783ad569$exports = {
    "rangeOverflow": (args)=>`Hodnota mus\xed by\u{165} ${args.maxValue} alebo skor\u{161}ia.`,
    "rangeReversed": `D\xe1tum za\u{10D}iatku mus\xed by\u{165} skor\u{161}\xed ako d\xe1tum konca.`,
    "rangeUnderflow": (args)=>`Hodnota mus\xed by\u{165} ${args.minValue} alebo neskor\u{161}ia.`,
    "unavailableDate": `Vybrat\xfd d\xe1tum je nedostupn\xfd.`
};

var $bee07513333bdc15$exports = {};
$bee07513333bdc15$exports = {
    "rangeOverflow": (args)=>`Vrednost mora biti ${args.maxValue} ali starej\u{161}a.`,
    "rangeReversed": `Za\u{10D}etni datum mora biti pred kon\u{10D}nim datumom.`,
    "rangeUnderflow": (args)=>`Vrednost mora biti ${args.minValue} ali novej\u{161}a.`,
    "unavailableDate": `Izbrani datum ni na voljo.`
};

var $7ed9c6fad16a15ec$exports = {};
$7ed9c6fad16a15ec$exports = {
    "rangeOverflow": (args)=>`Vrednost mora da bude ${args.maxValue} ili starija.`,
    "rangeReversed": `Datum po\u{10D}etka mora biti pre datuma zavr\u{161}etka.`,
    "rangeUnderflow": (args)=>`Vrednost mora da bude ${args.minValue} ili novija.`,
    "unavailableDate": `Izabrani datum nije dostupan.`
};

var $8bef6d5a236de86c$exports = {};
$8bef6d5a236de86c$exports = {
    "rangeOverflow": (args)=>`V\xe4rdet m\xe5ste vara ${args.maxValue} eller tidigare.`,
    "rangeReversed": `Startdatumet m\xe5ste vara f\xf6re slutdatumet.`,
    "rangeUnderflow": (args)=>`V\xe4rdet m\xe5ste vara ${args.minValue} eller senare.`,
    "unavailableDate": `Det valda datumet \xe4r inte tillg\xe4ngligt.`
};

var $098b9a2d2340cfc5$exports = {};
$098b9a2d2340cfc5$exports = {
    "rangeOverflow": (args)=>`De\u{11F}er, ${args.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
    "rangeReversed": `Ba\u{15F}lang\u{131}\xe7 tarihi biti\u{15F} tarihinden \xf6nce olmal\u{131}d\u{131}r.`,
    "rangeUnderflow": (args)=>`De\u{11F}er, ${args.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
    "unavailableDate": `Se\xe7ilen tarih kullan\u{131}lam\u{131}yor.`
};

var $54a862ea7fad7419$exports = {};
$54a862ea7fad7419$exports = {
    "rangeOverflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${args.maxValue}.`,
    "rangeReversed": `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443} \u{43C}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{434}\u{443}\u{432}\u{430}\u{442}\u{438} \u{434}\u{430}\u{442}\u{456} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}.`,
    "rangeUnderflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${args.minValue}.`,
    "unavailableDate": `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
};

var $e6cc491d590dfda5$exports = {};
$e6cc491d590dfda5$exports = {
    "rangeOverflow": (args)=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${args.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
    "rangeReversed": `\u{5F00}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{987B}\u{65E9}\u{4E8E}\u{7ED3}\u{675F}\u{65E5}\u{671F}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${args.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
    "unavailableDate": `\u{6240}\u{9009}\u{65E5}\u{671F}\u{4E0D}\u{53EF}\u{7528}\u{3002}`
};

var $9aebf53181a474bd$exports = {};
$9aebf53181a474bd$exports = {
    "rangeOverflow": (args)=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${args.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
    "rangeReversed": `\u{958B}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{9808}\u{5728}\u{7D50}\u{675F}\u{65E5}\u{671F}\u{4E4B}\u{524D}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${args.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
    "unavailableDate": `\u{6240}\u{9078}\u{65E5}\u{671F}\u{7121}\u{6CD5}\u{4F7F}\u{7528}\u{3002}`
};

var $452ac34de8c2444e$exports = {};


































$452ac34de8c2444e$exports = {
    "ar-AE": $b3427c06585c22a0$exports,
    "bg-BG": $d282528f459122b9$exports,
    "cs-CZ": $2d5eecd634a9ca45$exports,
    "da-DK": $c8e2288226c24a67$exports,
    "de-DE": $6f5745e389c346d7$exports,
    "el-GR": $8c882ccf4300d1da$exports,
    "en-US": $22195056771860be$exports,
    "es-ES": $cedfa43b4e2a5906$exports,
    "et-EE": $eeeaa8daee3601c7$exports,
    "fi-FI": $35e0614a49b3bb40$exports,
    "fr-FR": $929bc63f7705a78f$exports,
    "he-IL": $9a28d073b034d183$exports,
    "hr-HR": $7743e79780ebcca3$exports,
    "hu-HU": $3351817a04898858$exports,
    "it-IT": $4120bdb1d03484db$exports,
    "ja-JP": $65e5e1569f34ea4f$exports,
    "ko-KR": $d34552a7550967e7$exports,
    "lt-LT": $8f855bffe63f6eca$exports,
    "lv-LV": $ce40f46d09034645$exports,
    "nb-NO": $dd1a9a73340c793e$exports,
    "nl-NL": $4ee1fb3f0cbe6f59$exports,
    "pl-PL": $c85829aebb0bc94b$exports,
    "pt-BR": $27f5cd2291ca8a02$exports,
    "pt-PT": $e046fdccd69bea8e$exports,
    "ro-RO": $fa5f88e804986547$exports,
    "ru-RU": $28e4714602d1b568$exports,
    "sk-SK": $4e3bc8cf783ad569$exports,
    "sl-SI": $bee07513333bdc15$exports,
    "sr-SP": $7ed9c6fad16a15ec$exports,
    "sv-SE": $8bef6d5a236de86c$exports,
    "tr-TR": $098b9a2d2340cfc5$exports,
    "uk-UA": $54a862ea7fad7419$exports,
    "zh-CN": $e6cc491d590dfda5$exports,
    "zh-TW": $9aebf53181a474bd$exports
};

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $35a22f14a1f04b11$var$dictionary = new ($5b160d28a433310d$export$c17fa47878dc55b6)((($parcel$interopDefault($452ac34de8c2444e$exports))));
function $35a22f14a1f04b11$var$getLocale() {
    // Match browser language setting here, NOT react-aria's I18nProvider, so that we match other browser-provided
    // validation messages, which to not respect our provider's language.
    // @ts-ignore
    return typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
}
function $35a22f14a1f04b11$export$f18627323ab57ac0(value, minValue, maxValue, isDateUnavailable, options) {
    let rangeOverflow = value != null && maxValue != null && value.compare(maxValue) > 0;
    let rangeUnderflow = value != null && minValue != null && value.compare(minValue) < 0;
    let isUnavailable = value != null && (isDateUnavailable === null || isDateUnavailable === void 0 ? void 0 : isDateUnavailable(value)) || false;
    let isInvalid = rangeOverflow || rangeUnderflow || isUnavailable;
    let errors = [];
    if (isInvalid) {
        let locale = $35a22f14a1f04b11$var$getLocale();
        let strings = ($5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage('@react-stately/datepicker') || $35a22f14a1f04b11$var$dictionary;
        let formatter = new ($6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, strings);
        let dateFormatter = new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, $35a22f14a1f04b11$export$7e319ea407e63bc0({}, options));
        let timeZone = dateFormatter.resolvedOptions().timeZone;
        if (rangeUnderflow && minValue != null) errors.push(formatter.format('rangeUnderflow', {
            minValue: dateFormatter.format(minValue.toDate(timeZone))
        }));
        if (rangeOverflow && maxValue != null) errors.push(formatter.format('rangeOverflow', {
            maxValue: dateFormatter.format(maxValue.toDate(timeZone))
        }));
        if (isUnavailable) errors.push(formatter.format('unavailableDate'));
    }
    return {
        isInvalid: isInvalid,
        validationErrors: errors,
        validationDetails: {
            badInput: isUnavailable,
            customError: false,
            patternMismatch: false,
            rangeOverflow: rangeOverflow,
            rangeUnderflow: rangeUnderflow,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valueMissing: false,
            valid: !isInvalid
        }
    };
}
const $35a22f14a1f04b11$var$DEFAULT_FIELD_OPTIONS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
};
const $35a22f14a1f04b11$var$TWO_DIGIT_FIELD_OPTIONS = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
function $35a22f14a1f04b11$export$7e319ea407e63bc0(fieldOptions, options) {
    let defaultFieldOptions = options.shouldForceLeadingZeros ? $35a22f14a1f04b11$var$TWO_DIGIT_FIELD_OPTIONS : $35a22f14a1f04b11$var$DEFAULT_FIELD_OPTIONS;
    fieldOptions = {
        ...defaultFieldOptions,
        ...fieldOptions
    };
    let granularity = options.granularity || 'minute';
    let keys = Object.keys(fieldOptions);
    var _options_maxGranularity;
    let startIdx = keys.indexOf((_options_maxGranularity = options.maxGranularity) !== null && _options_maxGranularity !== void 0 ? _options_maxGranularity : 'year');
    if (startIdx < 0) startIdx = 0;
    let endIdx = keys.indexOf(granularity);
    if (endIdx < 0) endIdx = 2;
    if (startIdx > endIdx) throw new Error('maxGranularity must be greater than granularity');
    let opts = keys.slice(startIdx, endIdx + 1).reduce((opts, key)=>{
        opts[key] = fieldOptions[key];
        return opts;
    }, {});
    if (options.hourCycle != null) opts.hour12 = options.hourCycle === 12;
    opts.timeZone = options.timeZone || 'UTC';
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    if (hasTime && options.timeZone && !options.hideTimeZone) opts.timeZoneName = 'short';
    if (options.showEra && startIdx === 0) opts.era = 'short';
    return opts;
}
function $35a22f14a1f04b11$export$61a490a80c552550(value, calendar) {
    if (value === null) return null;
    if (!value) return undefined;
    return ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(value, calendar);
}
function $35a22f14a1f04b11$export$66aa2b09de4b1ea5(placeholderValue, granularity, calendar, timeZone) {
    if (placeholderValue) return $35a22f14a1f04b11$export$61a490a80c552550(placeholderValue, calendar);
    let date = ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(($14e0f24ef4ac5c92$export$461939dd4422153)(timeZone !== null && timeZone !== void 0 ? timeZone : ($14e0f24ef4ac5c92$export$aa8b41735afcabd2$1)()).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }), calendar);
    if (granularity === 'year' || granularity === 'month' || granularity === 'day') return ($11d87f3f76e88657$export$93522d1a439f3617)(date);
    if (!timeZone) return ($11d87f3f76e88657$export$b21e0b124e224484$1)(date);
    return date;
}
function $35a22f14a1f04b11$export$2440da353cedad43(v, granularity) {
    // Compute default granularity and time zone from the value. If the value becomes null, keep the last values.
    let defaultTimeZone = v && 'timeZone' in v ? v.timeZone : undefined;
    let defaultGranularity = v && 'minute' in v ? 'minute' : 'day';
    // props.granularity must actually exist in the value if one is provided.
    if (v && granularity && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let [lastValue, setLastValue] = (reactExports.useState)([
        defaultGranularity,
        defaultTimeZone
    ]);
    // If the granularity or time zone changed, update the last value.
    if (v && (lastValue[0] !== defaultGranularity || lastValue[1] !== defaultTimeZone)) setLastValue([
        defaultGranularity,
        defaultTimeZone
    ]);
    if (!granularity) granularity = v ? defaultGranularity : lastValue[0];
    let timeZone = v ? defaultTimeZone : lastValue[1];
    return [
        granularity,
        timeZone
    ];
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// These placeholders are based on the strings used by the <input type="date">
// implementations in Chrome and Firefox. Additional languages are supported
// here than React Spectrum's typical translations.
const $3e3ed55ab2966714$var$placeholders = new ($5b160d28a433310d$export$c17fa47878dc55b6)({
    ach: {
        year: 'mwaka',
        month: 'dwe',
        day: 'nino'
    },
    af: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    am: {
        year: "\u12D3\u12D3\u12D3\u12D3",
        month: "\u121A\u121C",
        day: "\u1240\u1240"
    },
    an: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    ar: {
        year: "\u0633\u0646\u0629",
        month: "\u0634\u0647\u0631",
        day: "\u064A\u0648\u0645"
    },
    ast: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    az: {
        year: 'iiii',
        month: 'aa',
        day: 'gg'
    },
    be: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    bg: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    bn: {
        year: 'yyyy',
        month: "\u09AE\u09BF\u09AE\u09BF",
        day: 'dd'
    },
    br: {
        year: 'bbbb',
        month: 'mm',
        day: 'dd'
    },
    bs: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    ca: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    cak: {
        year: 'jjjj',
        month: 'ii',
        day: "q'q'"
    },
    ckb: {
        year: "\u0633\u0627\u06B5",
        month: "\u0645\u0627\u0646\u06AF",
        day: "\u0695\u06C6\u0698"
    },
    cs: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    cy: {
        year: 'bbbb',
        month: 'mm',
        day: 'dd'
    },
    da: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    de: {
        year: 'jjjj',
        month: 'mm',
        day: 'tt'
    },
    dsb: {
        year: 'llll',
        month: 'mm',
        day: "\u017A\u017A"
    },
    el: {
        year: "\u03B5\u03B5\u03B5\u03B5",
        month: "\u03BC\u03BC",
        day: "\u03B7\u03B7"
    },
    en: {
        year: 'yyyy',
        month: 'mm',
        day: 'dd'
    },
    eo: {
        year: 'jjjj',
        month: 'mm',
        day: 'tt'
    },
    es: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    et: {
        year: 'aaaa',
        month: 'kk',
        day: 'pp'
    },
    eu: {
        year: 'uuuu',
        month: 'hh',
        day: 'ee'
    },
    fa: {
        year: "\u0633\u0627\u0644",
        month: "\u0645\u0627\u0647",
        day: "\u0631\u0648\u0632"
    },
    ff: {
        year: 'hhhh',
        month: 'll',
        day: "\xf1\xf1"
    },
    fi: {
        year: 'vvvv',
        month: 'kk',
        day: 'pp'
    },
    fr: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    fy: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    ga: {
        year: 'bbbb',
        month: 'mm',
        day: 'll'
    },
    gd: {
        year: 'bbbb',
        month: 'mm',
        day: 'll'
    },
    gl: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    he: {
        year: "\u05E9\u05E0\u05D4",
        month: "\u05D7\u05D5\u05D3\u05E9",
        day: "\u05D9\u05D5\u05DD"
    },
    hr: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    hsb: {
        year: 'llll',
        month: 'mm',
        day: 'dd'
    },
    hu: {
        year: "\xe9\xe9\xe9\xe9",
        month: 'hh',
        day: 'nn'
    },
    ia: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    id: {
        year: 'tttt',
        month: 'bb',
        day: 'hh'
    },
    it: {
        year: 'aaaa',
        month: 'mm',
        day: 'gg'
    },
    ja: {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    },
    ka: {
        year: "\u10EC\u10EC\u10EC\u10EC",
        month: "\u10D7\u10D7",
        day: "\u10E0\u10E0"
    },
    kk: {
        year: "\u0436\u0436\u0436\u0436",
        month: "\u0430\u0430",
        day: "\u043A\u043A"
    },
    kn: {
        year: "\u0CB5\u0CB5\u0CB5\u0CB5",
        month: "\u0CAE\u0CBF\u0CAE\u0CC0",
        day: "\u0CA6\u0CBF\u0CA6\u0CBF"
    },
    ko: {
        year: "\uC5F0\uB3C4",
        month: "\uC6D4",
        day: "\uC77C"
    },
    lb: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    lo: {
        year: "\u0E9B\u0E9B\u0E9B\u0E9B",
        month: "\u0E94\u0E94",
        day: "\u0EA7\u0EA7"
    },
    lt: {
        year: 'mmmm',
        month: 'mm',
        day: 'dd'
    },
    lv: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    meh: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    ml: {
        year: "\u0D35\u0D7C\u0D37\u0D02",
        month: "\u0D2E\u0D3E\u0D38\u0D02",
        day: "\u0D24\u0D40\u0D2F\u0D24\u0D3F"
    },
    ms: {
        year: 'tttt',
        month: 'mm',
        day: 'hh'
    },
    nl: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    nn: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    no: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    oc: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    pl: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    pt: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    rm: {
        year: 'oooo',
        month: 'mm',
        day: 'dd'
    },
    ro: {
        year: 'aaaa',
        month: 'll',
        day: 'zz'
    },
    ru: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    sc: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    scn: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    sk: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    sl: {
        year: 'llll',
        month: 'mm',
        day: 'dd'
    },
    sr: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    sv: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    szl: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    tg: {
        year: "\u0441\u0441\u0441\u0441",
        month: "\u043C\u043C",
        day: "\u0440\u0440"
    },
    th: {
        year: "\u0E1B\u0E1B\u0E1B\u0E1B",
        month: "\u0E14\u0E14",
        day: "\u0E27\u0E27"
    },
    tr: {
        year: 'yyyy',
        month: 'aa',
        day: 'gg'
    },
    uk: {
        year: "\u0440\u0440\u0440\u0440",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    'zh-CN': {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    },
    'zh-TW': {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    }
}, 'en');
function $3e3ed55ab2966714$export$d3f5c5e0a5023fa0(field, value, locale) {
    // Use the actual placeholder value for the era and day period fields.
    if (field === 'era' || field === 'dayPeriod') return value;
    if (field === 'year' || field === 'month' || field === 'day') return $3e3ed55ab2966714$var$placeholders.getStringForLocale(field, locale);
    // For time fields (e.g. hour, minute, etc.), use two dashes as the placeholder.
    return "\u2013\u2013";
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $3c0fc76039f1c516$var$EDITABLE_SEGMENTS = {
    year: true,
    month: true,
    day: true,
    hour: true,
    minute: true,
    second: true,
    dayPeriod: true,
    era: true
};
const $3c0fc76039f1c516$var$PAGE_STEP = {
    year: 5,
    month: 2,
    day: 7,
    hour: 2,
    minute: 15,
    second: 15
};
// Node seems to convert everything to lowercase...
const $3c0fc76039f1c516$var$TYPE_MAPPING = {
    dayperiod: 'dayPeriod'
};
function $3c0fc76039f1c516$export$60e84778edff6d26(props) {
    let { locale: locale, createCalendar: createCalendar, hideTimeZone: hideTimeZone, isDisabled: isDisabled = false, isReadOnly: isReadOnly = false, isRequired: isRequired = false, minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let v = props.value || props.defaultValue || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = ($35a22f14a1f04b11$export$2440da353cedad43)(v, props.granularity);
    let timeZone = defaultTimeZone || 'UTC';
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let defaultFormatter = (reactExports.useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale), [
        locale
    ]);
    let calendar = (reactExports.useMemo)(()=>createCalendar(defaultFormatter.resolvedOptions().calendar), [
        createCalendar,
        defaultFormatter
    ]);
    var _props_defaultValue;
    let [value, setDate] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let calendarValue = (reactExports.useMemo)(()=>{
        var _convertValue;
        return (_convertValue = ($35a22f14a1f04b11$export$61a490a80c552550)(value, calendar)) !== null && _convertValue !== void 0 ? _convertValue : null;
    }, [
        value,
        calendar
    ]);
    // We keep track of the placeholder date separately in state so that onChange is not called
    // until all segments are set. If the value === null (not undefined), then assume the component
    // is controlled, so use the placeholder as the value until all segments are entered so it doesn't
    // change from uncontrolled to controlled and emit a warning.
    let [placeholderDate, setPlaceholderDate] = (reactExports.useState)(()=>($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
    let val = calendarValue || placeholderDate;
    let showEra = calendar.identifier === 'gregory' && val.era === 'BC';
    let formatOpts = (reactExports.useMemo)(()=>{
        var _props_maxGranularity;
        return {
            granularity: granularity,
            maxGranularity: (_props_maxGranularity = props.maxGranularity) !== null && _props_maxGranularity !== void 0 ? _props_maxGranularity : 'year',
            timeZone: defaultTimeZone,
            hideTimeZone: hideTimeZone,
            hourCycle: props.hourCycle,
            showEra: showEra,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros
        };
    }, [
        props.maxGranularity,
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        hideTimeZone,
        showEra
    ]);
    let opts = (reactExports.useMemo)(()=>($35a22f14a1f04b11$export$7e319ea407e63bc0)({}, formatOpts), [
        formatOpts
    ]);
    let dateFormatter = (reactExports.useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, opts), [
        locale,
        opts
    ]);
    let resolvedOptions = (reactExports.useMemo)(()=>dateFormatter.resolvedOptions(), [
        dateFormatter
    ]);
    // Determine how many editable segments there are for validation purposes.
    // The result is cached for performance.
    let allSegments = (reactExports.useMemo)(()=>dateFormatter.formatToParts(new Date()).filter((seg)=>$3c0fc76039f1c516$var$EDITABLE_SEGMENTS[seg.type]).reduce((p, seg)=>(p[seg.type] = true, p), {}), [
        dateFormatter
    ]);
    let [validSegments, setValidSegments] = (reactExports.useState)(()=>props.value || props.defaultValue ? {
            ...allSegments
        } : {});
    let clearedSegment = (reactExports.useRef)(null);
    // Reset placeholder when calendar changes
    let lastCalendarIdentifier = (reactExports.useRef)(calendar.identifier);
    (reactExports.useEffect)(()=>{
        if (calendar.identifier !== lastCalendarIdentifier.current) {
            lastCalendarIdentifier.current = calendar.identifier;
            setPlaceholderDate((placeholder)=>Object.keys(validSegments).length > 0 ? ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(placeholder, calendar) : ($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
        }
    }, [
        calendar,
        granularity,
        validSegments,
        defaultTimeZone,
        props.placeholderValue
    ]);
    // If there is a value prop, and some segments were previously placeholders, mark them all as valid.
    if (value && Object.keys(validSegments).length < Object.keys(allSegments).length) {
        validSegments = {
            ...allSegments
        };
        setValidSegments(validSegments);
    }
    // If the value is set to null and all segments are valid, reset the placeholder.
    if (value == null && Object.keys(validSegments).length === Object.keys(allSegments).length) {
        validSegments = {};
        setValidSegments(validSegments);
        setPlaceholderDate(($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
    }
    // If all segments are valid, use the date from state, otherwise use the placeholder date.
    let displayValue = calendarValue && Object.keys(validSegments).length >= Object.keys(allSegments).length ? calendarValue : placeholderDate;
    let setValue = (newValue)=>{
        if (props.isDisabled || props.isReadOnly) return;
        let validKeys = Object.keys(validSegments);
        let allKeys = Object.keys(allSegments);
        // if all the segments are completed or a timefield with everything but am/pm set the time, also ignore when am/pm cleared
        if (newValue == null) {
            setDate(null);
            setPlaceholderDate(($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
            setValidSegments({});
        } else if (validKeys.length >= allKeys.length || validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod && clearedSegment.current !== 'dayPeriod') {
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            newValue = ($11d87f3f76e88657$export$b4a036af3fc0b032$1)(newValue, (v === null || v === void 0 ? void 0 : v.calendar) || new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)());
            setDate(newValue);
        } else setPlaceholderDate(newValue);
        clearedSegment.current = null;
    };
    let dateValue = (reactExports.useMemo)(()=>displayValue.toDate(timeZone), [
        displayValue,
        timeZone
    ]);
    let segments = (reactExports.useMemo)(()=>$3c0fc76039f1c516$var$processSegments(dateValue, validSegments, dateFormatter, resolvedOptions, displayValue, calendar, locale, granularity), [
        dateValue,
        validSegments,
        dateFormatter,
        resolvedOptions,
        displayValue,
        calendar,
        locale,
        granularity
    ]);
    // When the era field appears, mark it valid if the year field is already valid.
    // If the era field disappears, remove it from the valid segments.
    if (allSegments.era && validSegments.year && !validSegments.era) {
        validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    } else if (!allSegments.era && validSegments.era) {
        delete validSegments.era;
        setValidSegments({
            ...validSegments
        });
    }
    let markValid = (part)=>{
        validSegments[part] = true;
        if (part === 'year' && allSegments.era) validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    };
    let adjustSegment = (type, amount)=>{
        if (!validSegments[type]) {
            markValid(type);
            let validKeys = Object.keys(validSegments);
            let allKeys = Object.keys(allSegments);
            if (validKeys.length >= allKeys.length || validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod) setValue(displayValue);
        } else setValue($3c0fc76039f1c516$var$addSegment(displayValue, type, amount, resolvedOptions));
    };
    let builtinValidation = (reactExports.useMemo)(()=>($35a22f14a1f04b11$export$f18627323ab57ac0)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = ($e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
        ...props,
        value: value,
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    var _props_maxGranularity;
    return {
        ...validation,
        value: calendarValue,
        dateValue: dateValue,
        calendar: calendar,
        setValue: setValue,
        segments: segments,
        dateFormatter: dateFormatter,
        validationState: validationState,
        isInvalid: isValueInvalid,
        granularity: granularity,
        maxGranularity: (_props_maxGranularity = props.maxGranularity) !== null && _props_maxGranularity !== void 0 ? _props_maxGranularity : 'year',
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        increment (part) {
            adjustSegment(part, 1);
        },
        decrement (part) {
            adjustSegment(part, -1);
        },
        incrementPage (part) {
            adjustSegment(part, $3c0fc76039f1c516$var$PAGE_STEP[part] || 1);
        },
        decrementPage (part) {
            adjustSegment(part, -($3c0fc76039f1c516$var$PAGE_STEP[part] || 1));
        },
        setSegment (part, v) {
            markValid(part);
            setValue($3c0fc76039f1c516$var$setSegment(displayValue, part, v, resolvedOptions));
        },
        confirmPlaceholder () {
            if (props.isDisabled || props.isReadOnly) return;
            // Confirm the placeholder if only the day period is not filled in.
            let validKeys = Object.keys(validSegments);
            let allKeys = Object.keys(allSegments);
            if (validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod) {
                validSegments = {
                    ...allSegments
                };
                setValidSegments(validSegments);
                setValue(displayValue.copy());
            }
        },
        clearSegment (part) {
            delete validSegments[part];
            clearedSegment.current = part;
            setValidSegments({
                ...validSegments
            });
            let placeholder = ($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone);
            let value = displayValue;
            // Reset day period to default without changing the hour.
            if (part === 'dayPeriod' && 'hour' in displayValue && 'hour' in placeholder) {
                let isPM = displayValue.hour >= 12;
                let shouldBePM = placeholder.hour >= 12;
                if (isPM && !shouldBePM) value = displayValue.set({
                    hour: displayValue.hour - 12
                });
                else if (!isPM && shouldBePM) value = displayValue.set({
                    hour: displayValue.hour + 12
                });
            } else if (part === 'hour' && 'hour' in displayValue && displayValue.hour >= 12 && validSegments.dayPeriod) value = displayValue.set({
                hour: placeholder['hour'] + 12
            });
            else if (part in displayValue) value = displayValue.set({
                [part]: placeholder[part]
            });
            setDate(null);
            setValue(value);
        },
        formatValue (fieldOptions) {
            if (!calendarValue) return '';
            let formatOptions = ($35a22f14a1f04b11$export$7e319ea407e63bc0)(fieldOptions, formatOpts);
            let formatter = new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, formatOptions);
            return formatter.format(dateValue);
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = ($35a22f14a1f04b11$export$7e319ea407e63bc0)({}, newOptions);
            return new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, newFormatOptions);
        }
    };
}
function $3c0fc76039f1c516$var$processSegments(dateValue, validSegments, dateFormatter, resolvedOptions, displayValue, calendar, locale, granularity) {
    let timeValue = [
        'hour',
        'minute',
        'second'
    ];
    let segments = dateFormatter.formatToParts(dateValue);
    let processedSegments = [];
    for (let segment of segments){
        let isEditable = $3c0fc76039f1c516$var$EDITABLE_SEGMENTS[segment.type];
        if (segment.type === 'era' && calendar.getEras().length === 1) isEditable = false;
        let isPlaceholder = $3c0fc76039f1c516$var$EDITABLE_SEGMENTS[segment.type] && !validSegments[segment.type];
        let placeholder = $3c0fc76039f1c516$var$EDITABLE_SEGMENTS[segment.type] ? ($3e3ed55ab2966714$export$d3f5c5e0a5023fa0)(segment.type, segment.value, locale) : null;
        let dateSegment = {
            type: $3c0fc76039f1c516$var$TYPE_MAPPING[segment.type] || segment.type,
            text: isPlaceholder ? placeholder : segment.value,
            ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, segment.type, resolvedOptions),
            isPlaceholder: isPlaceholder,
            placeholder: placeholder,
            isEditable: isEditable
        };
        // There is an issue in RTL languages where time fields render (minute:hour) instead of (hour:minute).
        // To force an LTR direction on the time field since, we wrap the time segments in LRI (left-to-right) isolate unicode. See https://www.w3.org/International/questions/qa-bidi-unicode-controls.
        // These unicode characters will be added to the array of processed segments as literals and will mark the start and end of the embedded direction change. 
        if (segment.type === 'hour') {
            // This marks the start of the embedded direction change. 
            processedSegments.push({
                type: 'literal',
                text: '\u2066',
                ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, 'literal', resolvedOptions),
                isPlaceholder: false,
                placeholder: '',
                isEditable: false
            });
            processedSegments.push(dateSegment);
            // This marks the end of the embedded direction change in the case that the granularity it set to "hour".
            if (segment.type === granularity) processedSegments.push({
                type: 'literal',
                text: '\u2069',
                ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, 'literal', resolvedOptions),
                isPlaceholder: false,
                placeholder: '',
                isEditable: false
            });
        } else if (timeValue.includes(segment.type) && segment.type === granularity) {
            processedSegments.push(dateSegment);
            // This marks the end of the embedded direction change.
            processedSegments.push({
                type: 'literal',
                text: '\u2069',
                ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, 'literal', resolvedOptions),
                isPlaceholder: false,
                placeholder: '',
                isEditable: false
            });
        } else // We only want to "wrap" the unicode around segments that are hour, minute, or second. If they aren't, just process as normal. 
        processedSegments.push(dateSegment);
    }
    return processedSegments;
}
function $3c0fc76039f1c516$var$getSegmentLimits(date, type, options) {
    switch(type){
        case 'era':
            {
                let eras = date.calendar.getEras();
                return {
                    value: eras.indexOf(date.era),
                    minValue: 0,
                    maxValue: eras.length - 1
                };
            }
        case 'year':
            return {
                value: date.year,
                minValue: 1,
                maxValue: date.calendar.getYearsInEra(date)
            };
        case 'month':
            return {
                value: date.month,
                minValue: ($14e0f24ef4ac5c92$export$5412ac11713b72ad)(date),
                maxValue: date.calendar.getMonthsInYear(date)
            };
        case 'day':
            return {
                value: date.day,
                minValue: ($14e0f24ef4ac5c92$export$b2f4953d301981d5)(date),
                maxValue: date.calendar.getDaysInMonth(date)
            };
    }
    if ('hour' in date) switch(type){
        case 'dayPeriod':
            return {
                value: date.hour >= 12 ? 12 : 0,
                minValue: 0,
                maxValue: 12
            };
        case 'hour':
            if (options.hour12) {
                let isPM = date.hour >= 12;
                return {
                    value: date.hour,
                    minValue: isPM ? 12 : 0,
                    maxValue: isPM ? 23 : 11
                };
            }
            return {
                value: date.hour,
                minValue: 0,
                maxValue: 23
            };
        case 'minute':
            return {
                value: date.minute,
                minValue: 0,
                maxValue: 59
            };
        case 'second':
            return {
                value: date.second,
                minValue: 0,
                maxValue: 59
            };
    }
    return {};
}
function $3c0fc76039f1c516$var$addSegment(value, part, amount, options) {
    switch(part){
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return value.cycle(part, amount, {
                round: part === 'year'
            });
    }
    if ('hour' in value) switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let isPM = hours >= 12;
                return value.set({
                    hour: isPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
        case 'minute':
        case 'second':
            return value.cycle(part, amount, {
                round: part !== 'hour',
                hourCycle: options.hour12 ? 12 : 24
            });
    }
    throw new Error('Unknown segment: ' + part);
}
function $3c0fc76039f1c516$var$setSegment(value, part, segmentValue, options) {
    switch(part){
        case 'day':
        case 'month':
        case 'year':
        case 'era':
            return value.set({
                [part]: segmentValue
            });
    }
    if ('hour' in value && typeof segmentValue === 'number') switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let wasPM = hours >= 12;
                let isPM = segmentValue >= 12;
                if (isPM === wasPM) return value;
                return value.set({
                    hour: wasPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
            // In 12 hour time, ensure that AM/PM does not change
            if (options.hour12) {
                let hours = value.hour;
                let wasPM = hours >= 12;
                if (!wasPM && segmentValue === 12) segmentValue = 0;
                if (wasPM && segmentValue < 12) segmentValue += 12;
            }
        // fallthrough
        case 'minute':
        case 'second':
            return value.set({
                [part]: segmentValue
            });
    }
    throw new Error('Unknown segment: ' + part);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $eff5d8ee529ac4bb$export$fd53cef0cc796101(props) {
    let { placeholderValue: placeholderValue = new ($35ea8db9cb2ccb90$export$680ea196effce5f$1)(), minValue: minValue, maxValue: maxValue, granularity: granularity, validate: validate } = props;
    var _props_defaultValue;
    let [value, setValue] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let v = value || placeholderValue;
    let day = v && 'day' in v ? v : undefined;
    let defaultValueTimeZone = props.defaultValue && 'timeZone' in props.defaultValue ? props.defaultValue.timeZone : undefined;
    let placeholderDate = (reactExports.useMemo)(()=>{
        let valueTimeZone = v && 'timeZone' in v ? v.timeZone : undefined;
        return (valueTimeZone || defaultValueTimeZone) && placeholderValue ? ($11d87f3f76e88657$export$84c95a83c799e074)($eff5d8ee529ac4bb$var$convertValue(placeholderValue), valueTimeZone || defaultValueTimeZone) : $eff5d8ee529ac4bb$var$convertValue(placeholderValue);
    }, [
        placeholderValue,
        v,
        defaultValueTimeZone
    ]);
    let minDate = (reactExports.useMemo)(()=>$eff5d8ee529ac4bb$var$convertValue(minValue, day), [
        minValue,
        day
    ]);
    let maxDate = (reactExports.useMemo)(()=>$eff5d8ee529ac4bb$var$convertValue(maxValue, day), [
        maxValue,
        day
    ]);
    let timeValue = (reactExports.useMemo)(()=>value && 'day' in value ? ($11d87f3f76e88657$export$d33f79e3ffc3dc83)(value) : value, [
        value
    ]);
    let dateTime = (reactExports.useMemo)(()=>value == null ? null : $eff5d8ee529ac4bb$var$convertValue(value), [
        value
    ]);
    let onChange = (newValue)=>{
        setValue(day || defaultValueTimeZone ? newValue : newValue && ($11d87f3f76e88657$export$d33f79e3ffc3dc83)(newValue));
    };
    let state = ($3c0fc76039f1c516$export$60e84778edff6d26)({
        ...props,
        value: dateTime,
        defaultValue: undefined,
        minValue: minDate,
        maxValue: maxDate,
        onChange: onChange,
        granularity: granularity || 'minute',
        maxGranularity: 'hour',
        placeholderValue: placeholderDate !== null && placeholderDate !== void 0 ? placeholderDate : undefined,
        // Calendar should not matter for time fields.
        createCalendar: ()=>new ($3b62074eb05584b2$export$80ee6245ec4f29ec$1)(),
        validate: (reactExports.useCallback)(()=>validate === null || validate === void 0 ? void 0 : validate(value), [
            validate,
            value
        ])
    });
    return {
        ...state,
        timeValue: timeValue
    };
}
function $eff5d8ee529ac4bb$var$convertValue(value, date = ($14e0f24ef4ac5c92$export$d0bdf45af03a6ea3)(($14e0f24ef4ac5c92$export$aa8b41735afcabd2$1)())) {
    if (!value) return null;
    if ('day' in value) return value;
    return ($11d87f3f76e88657$export$b21e0b124e224484$1)(date, value);
}

var DEFAULT_SLOT = Symbol("default");
function useSlottedContext(context, slot) {
  let ctx = reactExports.useContext(context);
  if (slot === null) {
    return null;
  }
  if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
    let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));
    if (!slot && !ctx.slots[DEFAULT_SLOT]) {
      throw new Error(`A slot prop is required. Valid slot names are ${availableSlots}.`);
    }
    let slotKey = slot || DEFAULT_SLOT;
    if (!ctx.slots[slotKey]) {
      throw new Error(`Invalid slot "${slot}". Valid slot names are ${availableSlots}.`);
    }
    return ctx.slots[slotKey];
  }
  return ctx;
}
function useContextProps(props, ref, context) {
  let ctx = useSlottedContext(context, props.slot) || {};
  let { ref: contextRef, ...contextProps } = ctx;
  let mergedRef = $df56164dff5785e2$export$4338b53315abf666(reactExports.useMemo(() => $5dc95899b306f630$export$c9058316764c140e(ref, contextRef), [ref, contextRef]));
  let mergedProps = $3ef42575df84b30b$export$9d1611c77c2fe928(contextProps, props);
  if ("style" in contextProps && contextProps.style && "style" in props && props.style) {
    if (typeof contextProps.style === "function" || typeof props.style === "function") {
      mergedProps.style = (renderProps) => {
        let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
        let defaultStyle = { ...renderProps.defaultStyle, ...contextStyle };
        let style = typeof props.style === "function" ? props.style({ ...renderProps, defaultStyle }) : props.style;
        return { ...defaultStyle, ...style };
      };
    } else {
      mergedProps.style = { ...contextProps.style, ...props.style };
    }
  }
  return [mergedProps, mergedRef];
}

var FormContext = reactExports.createContext(null);
reactExports.forwardRef(function Form2(props, ref) {
  [props, ref] = useContextProps(props, ref, FormContext);
  let { validationErrors, validationBehavior = "native", children, className, ...domProps } = props;
  const styles = reactExports.useMemo(() => form({ className }), [className]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { noValidate: validationBehavior !== "native", ...domProps, ref, className: styles, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormContext.Provider, { value: { ...props, validationBehavior }, children: /* @__PURE__ */ jsxRuntimeExports.jsx($e5be200c675c3b3a$export$571b5131b7e65c11.Provider, { value: validationErrors != null ? validationErrors : {}, children }) }) });
});

function useDateInput(originalProps) {
  var _a, _b, _c, _d, _e, _f, _g;
  const globalContext = useProviderContext();
  const { validationBehavior: formValidationBehavior } = useSlottedContext(FormContext) || {};
  const [props, variantProps] = mapPropsVariants(originalProps, dateInput.variantKeys);
  const { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1();
  const calendarProp = $64244302c3013299$export$dd0bbc9b26defe37(new $fb18d541ea1ad717$export$ad991b66133851cf(locale).resolvedOptions().calendar);
  const gregorianYearOffset = getGregorianYearOffset(calendarProp.identifier);
  const {
    ref,
    as,
    label,
    inputRef: inputRefProp,
    description,
    startContent,
    endContent,
    className,
    classNames,
    validationState,
    groupProps = {},
    labelProps: labelPropsProp,
    fieldProps: fieldPropsProp,
    innerWrapperProps: innerWrapperPropsProp,
    errorMessageProps: errorMessagePropsProp,
    descriptionProps: descriptionPropsProp,
    validationBehavior = (_a = formValidationBehavior != null ? formValidationBehavior : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _a : "native",
    shouldForceLeadingZeros = true,
    minValue = (_c = (_b = globalContext == null ? void 0 : globalContext.defaultDates) == null ? void 0 : _b.minDate) != null ? _c : new $35ea8db9cb2ccb90$export$99faa760c7908e4f$1(calendarProp, 1900 + gregorianYearOffset, 1, 1),
    maxValue = (_e = (_d = globalContext == null ? void 0 : globalContext.defaultDates) == null ? void 0 : _d.maxDate) != null ? _e : new $35ea8db9cb2ccb90$export$99faa760c7908e4f$1(calendarProp, 2099 + gregorianYearOffset, 12, 31),
    createCalendar: createCalendarProp = (_f = globalContext == null ? void 0 : globalContext.createCalendar) != null ? _f : null,
    isInvalid: isInvalidProp = validationState ? validationState === "invalid" : false,
    errorMessage
  } = props;
  const domRef = useDOMRef(ref);
  const inputRef = useDOMRef(inputRefProp);
  const disableAnimation = (_g = originalProps.disableAnimation) != null ? _g : globalContext == null ? void 0 : globalContext.disableAnimation;
  const state = $3c0fc76039f1c516$export$60e84778edff6d26({
    ...originalProps,
    label,
    locale,
    minValue,
    maxValue,
    validationBehavior,
    shouldForceLeadingZeros,
    createCalendar: !createCalendarProp || typeof createCalendarProp !== "function" ? $64244302c3013299$export$dd0bbc9b26defe37 : createCalendarProp
  });
  const {
    labelProps,
    fieldProps,
    inputProps,
    validationErrors,
    validationDetails,
    descriptionProps,
    errorMessageProps,
    isInvalid: ariaIsInvalid
  } = $16f0b7bb276bc17e$export$5591b0b878c1a989({ ...originalProps, label, validationBehavior, inputRef }, state, domRef);
  const baseStyles = clsx$1(classNames == null ? void 0 : classNames.base, className);
  const isInvalid = isInvalidProp || ariaIsInvalid;
  const labelPlacement = useLabelPlacement({
    labelPlacement: originalProps.labelPlacement,
    label
  });
  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const slots = reactExports.useMemo(
    () => dateInput({
      ...variantProps,
      disableAnimation,
      labelPlacement
    }),
    [objectToDeps(variantProps), disableAnimation, labelPlacement]
  );
  const getLabelProps = (props2) => {
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(labelProps, labelPropsProp, props2),
      "data-slot": "label",
      className: slots.label({
        class: clsx$1(classNames == null ? void 0 : classNames.label, void 0 )
      })
    };
  };
  const getInputProps = (props2) => {
    return {
      ...props2,
      ...inputProps,
      ref: inputRef
    };
  };
  const getFieldProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "input-field",
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, fieldPropsProp, props2),
      className: slots.input({
        class: clsx$1(classNames == null ? void 0 : classNames.input, props2 == null ? void 0 : props2.className)
      })
    };
  };
  const getInputWrapperProps = (props2 = {}) => {
    return {
      ...props2,
      ...groupProps,
      "data-slot": "input-wrapper",
      className: slots.inputWrapper({
        class: classNames == null ? void 0 : classNames.inputWrapper
      }),
      onClick: fieldProps.onClick
    };
  };
  const getInnerWrapperProps = (props2) => {
    const innerWrapperProps = $3ef42575df84b30b$export$9d1611c77c2fe928(innerWrapperPropsProp, props2);
    return {
      ...innerWrapperProps,
      "data-slot": "inner-wrapper",
      className: slots.innerWrapper({
        class: cn(classNames == null ? void 0 : classNames.innerWrapper, innerWrapperProps == null ? void 0 : innerWrapperProps.className)
      })
    };
  };
  const getHelperWrapperProps = (props2) => {
    return {
      ...props2,
      "data-slot": "helper-wrapper",
      className: slots.helperWrapper({
        class: clsx$1(classNames == null ? void 0 : classNames.helperWrapper, void 0 )
      })
    };
  };
  const getErrorMessageProps = (props2 = {}) => {
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(errorMessageProps, errorMessagePropsProp, props2),
      "data-slot": "error-message",
      className: slots.errorMessage({ class: clsx$1(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className) })
    };
  };
  const getDescriptionProps = (props2 = {}) => {
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(descriptionProps, descriptionPropsProp, props2),
      "data-slot": "description",
      className: slots.description({ class: clsx$1(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className) })
    };
  };
  const getBaseGroupProps = () => {
    return {
      as,
      label,
      description,
      endContent,
      errorMessage,
      isInvalid,
      startContent,
      validationDetails,
      validationErrors,
      shouldLabelBeOutside,
      "data-slot": "base",
      "data-required": dataAttr(originalProps.isRequired),
      "data-disabled": dataAttr(originalProps.isDisabled),
      "data-readonly": dataAttr(originalProps.isReadOnly),
      "data-invalid": dataAttr(isInvalid),
      "data-has-start-content": dataAttr(!!startContent),
      "data-has-end-content": dataAttr(!!endContent),
      descriptionProps: getDescriptionProps(),
      errorMessageProps: getErrorMessageProps(),
      groupProps: getInputWrapperProps(),
      helperWrapperProps: getHelperWrapperProps(),
      labelProps: getLabelProps(),
      wrapperProps: getInnerWrapperProps(),
      className: slots.base({ class: baseStyles })
    };
  };
  return {
    state,
    domRef,
    slots,
    classNames,
    labelPlacement,
    getBaseGroupProps,
    getFieldProps,
    getInputProps
  };
}

var DateInput = forwardRef(function DateInput2(props, ref) {
  const { state, slots, classNames, getBaseGroupProps, getInputProps, getFieldProps } = useDateInput({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DateInputGroup, { ...getBaseGroupProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    DateInputField,
    {
      classNames,
      inputProps: getInputProps(),
      slots,
      state,
      ...getFieldProps()
    }
  ) });
});
var date_input_default = DateInput;

function useTimeInput(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const { validationBehavior: formValidationBehavior } = useSlottedContext(FormContext) || {};
  const [props, variantProps] = mapPropsVariants(originalProps, dateInput.variantKeys);
  const {
    ref,
    as,
    label,
    inputRef: inputRefProp,
    description,
    startContent,
    endContent,
    className,
    classNames,
    groupProps = {},
    labelProps: labelPropsProp,
    fieldProps: fieldPropsProp,
    errorMessageProps: errorMessagePropsProp,
    descriptionProps: descriptionPropsProp,
    validationBehavior = (_a = formValidationBehavior != null ? formValidationBehavior : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _a : "native",
    shouldForceLeadingZeros = true,
    minValue,
    maxValue,
    isInvalid: isInvalidProp,
    errorMessage
  } = props;
  const domRef = useDOMRef(ref);
  const inputRef = useDOMRef(inputRefProp);
  const { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1();
  const disableAnimation = (_b = originalProps.disableAnimation) != null ? _b : globalContext == null ? void 0 : globalContext.disableAnimation;
  const state = $eff5d8ee529ac4bb$export$fd53cef0cc796101({
    ...originalProps,
    label,
    locale,
    minValue,
    maxValue,
    validationBehavior,
    isInvalid: isInvalidProp,
    shouldForceLeadingZeros
  });
  const {
    labelProps,
    fieldProps,
    inputProps,
    validationErrors,
    validationDetails,
    descriptionProps,
    errorMessageProps,
    isInvalid
  } = $16f0b7bb276bc17e$export$4c842f6a241dc825({ ...originalProps, label, validationBehavior, inputRef }, state, domRef);
  const baseStyles = clsx$1(classNames == null ? void 0 : classNames.base, className);
  const labelPlacement = useLabelPlacement({
    labelPlacement: originalProps.labelPlacement,
    label
  });
  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const slots = reactExports.useMemo(
    () => dateInput({
      ...variantProps,
      disableAnimation,
      labelPlacement
    }),
    [objectToDeps(variantProps), labelPlacement, disableAnimation]
  );
  const getLabelProps = (props2) => {
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(labelProps, labelPropsProp, props2),
      "data-slot": "label",
      className: slots.label({
        class: clsx$1(classNames == null ? void 0 : classNames.label, void 0 )
      })
    };
  };
  const getInputProps = (props2) => {
    return {
      ...props2,
      ...inputProps,
      ref: inputRef
    };
  };
  const getFieldProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "input",
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, fieldPropsProp, props2),
      className: slots.input({
        class: clsx$1(classNames == null ? void 0 : classNames.input, props2 == null ? void 0 : props2.className)
      })
    };
  };
  const getInputWrapperProps = (props2 = {}) => {
    return {
      ...props2,
      ...groupProps,
      "data-slot": "input-wrapper",
      className: slots.inputWrapper({
        class: classNames == null ? void 0 : classNames.inputWrapper
      }),
      onClick: fieldProps.onClick
    };
  };
  const getInnerWrapperProps = (props2) => {
    return {
      ...props2,
      "data-slot": "inner-wrapper",
      className: slots.innerWrapper({
        class: classNames == null ? void 0 : classNames.innerWrapper
      })
    };
  };
  const getHelperWrapperProps = (props2) => {
    return {
      ...props2,
      "data-slot": "helper-wrapper",
      className: slots.helperWrapper({
        class: clsx$1(classNames == null ? void 0 : classNames.helperWrapper, void 0 )
      })
    };
  };
  const getErrorMessageProps = (props2 = {}) => {
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(errorMessageProps, errorMessagePropsProp, props2),
      "data-slot": "error-message",
      className: slots.errorMessage({ class: clsx$1(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className) })
    };
  };
  const getDescriptionProps = (props2 = {}) => {
    return {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(descriptionProps, descriptionPropsProp, props2),
      "data-slot": "description",
      className: slots.description({ class: clsx$1(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className) })
    };
  };
  const getBaseGroupProps = () => {
    return {
      as,
      label,
      description,
      endContent,
      errorMessage,
      isInvalid,
      startContent,
      validationDetails,
      validationErrors,
      shouldLabelBeOutside,
      "data-slot": "base",
      "data-required": dataAttr(originalProps.isRequired),
      "data-disabled": dataAttr(originalProps.isDisabled),
      "data-readonly": dataAttr(originalProps.isReadOnly),
      "data-invalid": dataAttr(isInvalid),
      "data-has-start-content": dataAttr(!!startContent),
      "data-has-end-content": dataAttr(!!endContent),
      descriptionProps: getDescriptionProps(),
      errorMessageProps: getErrorMessageProps(),
      groupProps: getInputWrapperProps(),
      helperWrapperProps: getHelperWrapperProps(),
      labelProps: getLabelProps(),
      wrapperProps: getInnerWrapperProps(),
      className: slots.base({ class: baseStyles })
    };
  };
  return {
    state,
    domRef,
    slots,
    classNames,
    labelPlacement,
    getBaseGroupProps,
    getFieldProps,
    getInputProps
  };
}

var TimeInput = forwardRef(function TimeInput2(props, ref) {
  const { state, slots, classNames, getBaseGroupProps, getInputProps, getFieldProps } = useTimeInput({
    ...props,
    ref
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DateInputGroup, { ...getBaseGroupProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    DateInputField,
    {
      classNames,
      inputProps: getInputProps(),
      slots,
      state,
      ...getFieldProps()
    }
  ) });
});
var time_input_default = TimeInput;

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
    return amount - numerator * Math.floor(amount / numerator);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $3b62074eb05584b2$var$EPOCH = 1721426; // 001/01/03 Julian C.E.
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
    year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
    let y1 = year - 1;
    let monthOffset = -2;
    if (month <= 2) monthOffset = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
    return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
    return era === 'BC' ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
    let era = 'AD';
    if (year <= 0) {
        era = 'BC';
        year = 1 - year;
    }
    return [
        era,
        year
    ];
}
const $3b62074eb05584b2$var$daysInMonth = {
    standard: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    leapyear: [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
};
class $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let jd0 = jd;
        let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
        let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
        let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
        let leapAdj = 2;
        if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;
        else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
        let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
        let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, month, day);
    }
    toJulianDay(date) {
        return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 'leapyear' : 'standard'][date.month - 1];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMonthsInYear(date) {
        return 12;
    }
    getDaysInYear(date) {
        return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearsInEra(date) {
        return 9999;
    }
    getEras() {
        return [
            'BC',
            'AD'
        ];
    }
    isInverseEra(date) {
        return date.era === 'BC';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BC' ? 'AD' : 'BC';
            date.year = 1 - date.year;
        }
    }
    constructor(){
        this.identifier = 'gregory';
    }
}

function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
    return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
    return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
    return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
let $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
    // TODO: invalidate this somehow?
    if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return $14e0f24ef4ac5c92$var$localTimeZone;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.




function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
    date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
    return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    let date = new Date();
    date.setUTCHours(hour, minute, second, millisecond);
    date.setUTCFullYear(year, month - 1, day);
    return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
    // Fast path for UTC.
    if (timeZone === 'UTC') return 0;
    // Fast path: for local timezone after 1970, use native Date.
    if (ms > 0 && timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)()) return new Date(ms).getTimezoneOffset() * -6e4;
    let { year: year, month: month, day: day, hour: hour, minute: minute, second: second } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
    let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
    return utc - Math.floor(ms / 1000) * 1000;
}
const $11d87f3f76e88657$var$formattersByTimeZone = new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
    let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour12: false,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
    }
    let parts = formatter.formatToParts(new Date(ms));
    let namedParts = {};
    for (let part of parts)if (part.type !== 'literal') namedParts[part.type] = part.value;
    return {
        // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
        year: namedParts.era === 'BC' || namedParts.era === 'B' ? -namedParts.year + 1 : +namedParts.year,
        month: +namedParts.month,
        day: +namedParts.day,
        hour: namedParts.hour === '24' ? 0 : +namedParts.hour,
        minute: +namedParts.minute,
        second: +namedParts.second
    };
}
const $11d87f3f76e88657$var$DAYMILLIS = 86400000;
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
    let found = earlier === later ? [
        earlier
    ] : [
        earlier,
        later
    ];
    return found.filter((absolute)=>$11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
    let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
    return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = 'compatible') {
    let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
    // Fast path: if the time zone is UTC, use native Date.
    if (timeZone === 'UTC') return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
    // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
    if (timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)() && disambiguation === 'compatible') {
        dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
        // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
        let date = new Date();
        let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(dateTime.era, dateTime.year);
        date.setFullYear(year, dateTime.month - 1, dateTime.day);
        date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
        return date.getTime();
    }
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
    let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
    if (valid.length === 1) return valid[0];
    if (valid.length > 1) switch(disambiguation){
        // 'compatible' means 'earlier' for "fall back" transitions
        case 'compatible':
        case 'earlier':
            return valid[0];
        case 'later':
            return valid[valid.length - 1];
        case 'reject':
            throw new RangeError('Multiple possible absolute times found');
    }
    switch(disambiguation){
        case 'earlier':
            return Math.min(ms - offsetBefore, ms - offsetAfter);
        // 'compatible' means 'later' for "spring forward" transitions
        case 'compatible':
        case 'later':
            return Math.max(ms - offsetBefore, ms - offsetAfter);
        case 'reject':
            throw new RangeError('No such absolute time found');
    }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = 'compatible') {
    return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
    let hour = 0, minute = 0, second = 0, millisecond = 0;
    if ('timeZone' in date) ({ hour: hour, minute: minute, second: second, millisecond: millisecond } = date);
    else if ('hour' in date && !time) return date;
    if (time) ({ hour: hour, minute: minute, second: second, millisecond: millisecond } = time);
    return new ($35ea8db9cb2ccb90$export$ca871e8dbb80966f)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
    if (date.calendar.identifier === calendar.identifier) return date;
    let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
    let copy = date.copy();
    copy.calendar = calendar;
    copy.era = calendarDate.era;
    copy.year = calendarDate.year;
    copy.month = calendarDate.month;
    copy.day = calendarDate.day;
    ($735220c2d4774dd3$export$c4e2ecac49351ef2)(copy);
    return copy;
}

function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
    let mutableDate = date.copy();
    let days = 'hour' in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
    $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
    if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
    mutableDate.month += duration.months || 0;
    $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
    $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
    mutableDate.day += (duration.weeks || 0) * 7;
    mutableDate.day += duration.days || 0;
    mutableDate.day += days;
    $735220c2d4774dd3$var$balanceDay(mutableDate);
    if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
    // Constrain in case adding ended up with a date outside the valid range for the calendar system.
    // The behavior here is slightly different than when constraining in the `set` function in that
    // we adjust smaller fields to their minimum/maximum values rather than constraining each field
    // individually. This matches the general behavior of `add` vs `set` regarding how fields are balanced.
    if (mutableDate.year < 1) {
        mutableDate.year = 1;
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
    if (mutableDate.year > maxYear) {
        var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
        let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
        mutableDate.year = maxYear;
        mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
        mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    if (mutableDate.month < 1) {
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
    if (mutableDate.month > maxMonth) {
        mutableDate.month = maxMonth;
        mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
    return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
    var _date_calendar_isInverseEra, _date_calendar;
    if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
    date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
    while(date.month < 1){
        $735220c2d4774dd3$var$addYears(date, -1);
        date.month += date.calendar.getMonthsInYear(date);
    }
    let monthsInYear = 0;
    while(date.month > (monthsInYear = date.calendar.getMonthsInYear(date))){
        date.month -= monthsInYear;
        $735220c2d4774dd3$var$addYears(date, 1);
    }
}
function $735220c2d4774dd3$var$balanceDay(date) {
    while(date.day < 1){
        date.month--;
        $735220c2d4774dd3$var$balanceYearMonth(date);
        date.day += date.calendar.getDaysInMonth(date);
    }
    while(date.day > date.calendar.getDaysInMonth(date)){
        date.day -= date.calendar.getDaysInMonth(date);
        date.month++;
        $735220c2d4774dd3$var$balanceYearMonth(date);
    }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
    date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
    date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
    if (date.calendar.constrainDate) date.calendar.constrainDate(date);
    date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
    $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
    let inverseDuration = {};
    for(let key in duration)if (typeof duration[key] === 'number') inverseDuration[key] = -duration[key];
    return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
    return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
    let mutableDate = date.copy();
    if (fields.era != null) mutableDate.era = fields.era;
    if (fields.year != null) mutableDate.year = fields.year;
    if (fields.month != null) mutableDate.month = fields.month;
    if (fields.day != null) mutableDate.day = fields.day;
    $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
    return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
    let mutableValue = value.copy();
    if (fields.hour != null) mutableValue.hour = fields.hour;
    if (fields.minute != null) mutableValue.minute = fields.minute;
    if (fields.second != null) mutableValue.second = fields.second;
    if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
    $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
    return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
    time.second += Math.floor(time.millisecond / 1000);
    time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1000);
    time.minute += Math.floor(time.second / 60);
    time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
    time.hour += Math.floor(time.minute / 60);
    time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
    let days = Math.floor(time.hour / 24);
    time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
    return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
    time.millisecond = Math.max(0, Math.min(time.millisecond, 1000));
    time.second = Math.max(0, Math.min(time.second, 59));
    time.minute = Math.max(0, Math.min(time.minute, 59));
    time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
    let result = a % b;
    if (result < 0) result += b;
    return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
    time.hour += duration.hours || 0;
    time.minute += duration.minutes || 0;
    time.second += duration.seconds || 0;
    time.millisecond += duration.milliseconds || 0;
    return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$7ed87b6bc2506470(time, duration) {
    let res = time.copy();
    $735220c2d4774dd3$var$addTimeFields(res, duration);
    return res;
}
function $735220c2d4774dd3$export$fe34d3a381cd7501(time, duration) {
    return $735220c2d4774dd3$export$7ed87b6bc2506470(time, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'era':
            {
                let eras = value.calendar.getEras();
                let eraIndex = eras.indexOf(value.era);
                if (eraIndex < 0) throw new Error('Invalid era: ' + value.era);
                eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
                mutable.era = eras[eraIndex];
                // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
                $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
                break;
            }
        case 'year':
            var _mutable_calendar_isInverseEra, _mutable_calendar;
            if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
            // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
            // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
            // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
            mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
            if (mutable.year === -Infinity) mutable.year = 1;
            if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
            break;
        case 'month':
            mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'day':
            mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
    $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
    return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'hour':
            {
                let hours = value.hour;
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = hours >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
                break;
            }
        case 'minute':
            mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'second':
            mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'millisecond':
            mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
    if (round) {
        value += Math.sign(amount);
        if (value < min) value = max;
        let div = Math.abs(amount);
        if (amount > 0) value = Math.ceil(value / div) * div;
        else value = Math.floor(value / div) * div;
        if (value > max) value = min;
    } else {
        value += amount;
        if (value < min) value = max - (min - value - 1);
        else if (value > max) value = min + (value - max - 1);
    }
    return value;
}

function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ''}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
    let gregorianDate = ($11d87f3f76e88657$export$b4a036af3fc0b032)(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let year;
    if (gregorianDate.era === 'BC') year = gregorianDate.year === 1 ? '0000' : '-' + String(Math.abs(1 - gregorianDate.year)).padStart(6, '00');
    else year = String(gregorianDate.year).padStart(4, '0');
    return `${year}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
    // @ts-ignore
    return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}

function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}

function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $35ea8db9cb2ccb90$var$shiftArgs(args) {
    let calendar = typeof args[0] === 'object' ? args.shift() : new ($3b62074eb05584b2$export$80ee6245ec4f29ec)();
    let era;
    if (typeof args[0] === 'string') era = args.shift();
    else {
        let eras = calendar.getEras();
        era = eras[eras.length - 1];
    }
    let year = args.shift();
    let month = args.shift();
    let day = args.shift();
    return [
        calendar,
        era,
        year,
        month,
        day
    ];
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
// If that behavior is desired, use the AnyCalendarDate interface instead.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
        else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
    }
    /** Returns a new `CalendarDate` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$adaa4cf7ef1b65be)(this, fields);
    }
    /**
   * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */ toDate(timeZone) {
        return ($11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$60dfd74aa96791bd)(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        return ($14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
    }
    constructor(...args){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
    }
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type1 = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$680ea196effce5f {
    /** Returns a copy of this time. */ copy() {
        return new $35ea8db9cb2ccb90$export$680ea196effce5f(this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `Time` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$7ed87b6bc2506470)(this, duration);
    }
    /** Returns a new `Time` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$fe34d3a381cd7501)(this, duration);
    }
    /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields);
    }
    /**
   * Returns a new `Time` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
    }
    /** Converts the time to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$f59dee82248f5ad4)(this);
    }
    /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */ compare(b) {
        return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, b);
    }
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type1, {
            writable: true,
            value: void 0
        });
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        ($735220c2d4774dd3$export$7555de1e070510cb)(this);
    }
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type2 = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `CalendarDateTime` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$adaa4cf7ef1b65be)(($735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields), fields);
    }
    /**
   * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        switch(field){
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return ($735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
            default:
                return ($735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
        }
    }
    /** Converts the date to a native JavaScript Date object in the given time zone. */ toDate(timeZone, disambiguation) {
        return ($11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone, disambiguation);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$4223de14708adc63)(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        let res = ($14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
        if (res === 0) return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, ($11d87f3f76e88657$export$b21e0b124e224484)(b));
        return res;
    }
    constructor(...args){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type2, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
    }
}

function AppointmentDetailDialog({
  appointment,
  isOpen,
  onClose,
  onAppointmentUpdated
}) {
  console.log("Dialog props:", { appointment, isOpen });
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPolicyButton, setShowPolicyButton] = reactExports.useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = reactExports.useState(false);
  const [isRescheduling, setIsRescheduling] = reactExports.useState(false);
  const [showRescheduleForm, setShowRescheduleForm] = reactExports.useState(false);
  const [newDate, setNewDate] = reactExports.useState(null);
  const [newTime, setNewTime] = reactExports.useState(null);
  const [dateError, setDateError] = reactExports.useState("");
  const [timeError, setTimeError] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (isOpen && appointment) {
      const timer = setTimeout(() => {
        setShowPolicyButton(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShowPolicyButton(false);
      setShowRescheduleForm(false);
      setNewDate(null);
      setNewTime(null);
      setDateError("");
      setTimeError("");
    }
  }, [isOpen, appointment]);
  reactExports.useEffect(() => {
    if (showRescheduleForm && appointment) {
      const appointmentDate2 = parseISO(appointment.appointmentDate);
      setNewDate(
        new $35ea8db9cb2ccb90$export$99faa760c7908e4f(
          appointmentDate2.getFullYear(),
          appointmentDate2.getMonth() + 1,
          // Month is 0-indexed in JS Date but 1-indexed in CalendarDate
          appointmentDate2.getDate()
        )
      );
      setNewTime(new $35ea8db9cb2ccb90$export$680ea196effce5f(appointmentDate2.getHours(), appointmentDate2.getMinutes()));
    }
  }, [showRescheduleForm, appointment]);
  if (!appointment) return null;
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-700 text-black-800 border-green-700";
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const handleViewPolicies = () => {
    onClose();
    setTimeout(() => {
      navigate("/policies");
    }, 100);
  };
  const handleCheckout = async () => {
    if (!appointment) return;
    try {
      setIsProcessingPayment(true);
      const response = await getPaymentCheckoutUrl(appointment.appointmentId);
      if (response.isSuccess) {
        window.location.href = response.data;
      } else {
        toast({
          title: "Payment Error",
          description: response.message || "Failed to get payment link. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error getting payment link:", error);
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };
  const validateInputs = () => {
    let isValid = true;
    setDateError("");
    setTimeError("");
    if (!newDate) {
      setDateError("Date is required");
      isValid = false;
    }
    if (!newTime) {
      setTimeError("Time is required");
      isValid = false;
    } else {
      const hour = newTime.hour;
      if (hour < 6 || hour > 18) {
        setTimeError("Time must be between 6:00 AM and 18:00 PM");
        isValid = false;
      }
    }
    return isValid;
  };
  const handleReschedule = async () => {
    if (!appointment) return;
    if (!validateInputs()) {
      return;
    }
    try {
      setIsRescheduling(true);
      const year = newDate.year;
      const month = newDate.month.toString().padStart(2, "0");
      const day = newDate.day.toString().padStart(2, "0");
      const hour = newTime.hour.toString().padStart(2, "0");
      const minute = newTime.minute.toString().padStart(2, "0");
      const dateTimeString = `${year}-${month}-${day}T${hour}:${minute}:00`;
      const response = await rescheduleAppointment(appointment.appointmentId, dateTimeString);
      if (response.isSuccess) {
        toast({
          title: "Appointment Rescheduled",
          description: response.message || "Your appointment has been successfully rescheduled.",
          variant: "success"
        });
        setShowRescheduleForm(false);
        setNewDate(null);
        setNewTime(null);
        if (onAppointmentUpdated) {
          onAppointmentUpdated();
        }
        onClose();
      } else {
        toast({
          title: "Rescheduling Failed",
          description: response.message || "Failed to reschedule appointment. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
      toast({
        title: "Rescheduling Error",
        description: error?.response?.data?.message || "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsRescheduling(false);
    }
  };
  const appointmentDate = parseISO(appointment.appointmentDate);
  const canReschedule = ["confirmed", "pending"].includes(appointment.status.toLowerCase());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[500px] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl font-semibold", children: "Appointment Details" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `px-4 py-1 text-sm ${getStatusColor(appointment.status)}`, children: appointment.status }) }),
      showRescheduleForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium", children: "Reschedule Appointment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => setShowRescheduleForm(false), className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 bg-blue-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white rounded-lg border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-blue-800", children: "Current Appointment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-gray-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(appointmentDate, "EEEE, MMMM d, yyyy") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-gray-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(appointmentDate, "h:mm a") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "date", children: "New Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              date_input_default,
              {
                id: "date",
                className: "w-full",
                value: newDate || void 0,
                onChange: setNewDate,
                isInvalid: !!dateError
              }
            ),
            dateError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: dateError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "time", children: "New Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              time_input_default,
              {
                id: "time",
                className: "w-full",
                value: newTime || void 0,
                onChange: setNewTime,
                isInvalid: !!timeError
              }
            ),
            timeError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: timeError }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Business hours: 8:00 AM - 6:00 PM" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setShowRescheduleForm(false), disabled: isRescheduling, children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleReschedule, disabled: isRescheduling, className: "bg-blue-600 hover:bg-blue-700", children: isRescheduling ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Processing..."
          ] }) : "Confirm Reschedule" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-gray-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Appointment Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: format(appointmentDate, "EEEE, MMMM d, yyyy") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
              format(appointmentDate, "h:mm a")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-5 w-5 text-gray-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Vaccine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: appointment.vaccineName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600", children: [
              "Dose ",
              appointment.doseNumber
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-5 w-5 text-gray-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Total Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND"
            }).format(appointment.totalPrice) })
          ] })
        ] }),
        appointment.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-gray-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: appointment.notes })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mt-4 pt-4 border-t border-gray-200", children: !showRescheduleForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      appointment.status.toLowerCase() === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleCheckout,
          disabled: isProcessingPayment,
          className: "w-full bg-green-600 hover:bg-green-700 text-white",
          children: isProcessingPayment ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Processing..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "mr-2 h-4 w-4" }),
            "Proceed to Payment"
          ] })
        }
      ),
      canReschedule && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: () => setShowRescheduleForm(true),
          className: "w-full border-blue-200 hover:bg-blue-50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mr-2 h-4 w-4 text-blue-600" }),
            "Reschedule Appointment"
          ]
        }
      ),
      showPolicyButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: handleViewPolicies,
          className: "w-full flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
            "View Cancellation & Rescheduling Policies"
          ]
        }
      )
    ] }) })
  ] }) });
}

function AppointmentsSection() {
  const [children, setChildren] = reactExports.useState([]);
  const [appointments, setAppointments] = reactExports.useState({});
  const [expandedChild, setExpandedChild] = reactExports.useState(null);
  const [selectedAppointment, setSelectedAppointment] = reactExports.useState(null);
  const [isDetailOpen, setIsDetailOpen] = reactExports.useState(false);
  const [loadingChildren, setLoadingChildren] = reactExports.useState(true);
  const [loadingAppointments, setLoadingAppointments] = reactExports.useState({});
  const [processingPayment, setProcessingPayment] = reactExports.useState(null);
  const { toast } = useToast();
  reactExports.useEffect(() => {
    const fetchChildren = async () => {
      try {
        setLoadingChildren(true);
        const childrenData = await getChildren();
        setChildren(childrenData);
        if (childrenData.length > 0) {
          setExpandedChild(childrenData[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch children:", error);
        toast({
          title: "Error",
          description: "Failed to load children data",
          variant: "destructive"
        });
      } finally {
        setLoadingChildren(false);
      }
    };
    fetchChildren();
  }, [toast]);
  const fetchAppointments = async (childId) => {
    if (!childId) return;
    try {
      setLoadingAppointments((prev) => ({ ...prev, [childId]: true }));
      const response = await getChildAppointments(childId);
      if (response.isSuccess) {
        setAppointments((prev) => ({
          ...prev,
          [childId]: response.data
        }));
      }
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
      toast({
        title: "Error",
        description: "Failed to load appointments",
        variant: "destructive"
      });
    } finally {
      setLoadingAppointments((prev) => ({ ...prev, [childId]: false }));
    }
  };
  reactExports.useEffect(() => {
    if (expandedChild && !appointments[expandedChild]) {
      fetchAppointments(expandedChild);
    }
  }, [expandedChild, appointments]);
  const handleViewDetails = reactExports.useCallback(
    async (appointmentId) => {
      try {
        const response = await getAppointmentDetails(appointmentId);
        if (response.isSuccess) {
          setSelectedAppointment(response.data);
          setIsDetailOpen(true);
        }
      } catch (error) {
        console.error("Failed to fetch appointment details:", error);
        toast({
          title: "Error",
          description: "Failed to load appointment details",
          variant: "destructive"
        });
      }
    },
    [toast]
  );
  const handleCheckout = async (appointmentId) => {
    try {
      setProcessingPayment(appointmentId);
      const response = await getPaymentCheckoutUrl(appointmentId);
      if (response.isSuccess) {
        window.location.href = response.data;
      } else {
        toast({
          title: "Payment Error",
          description: response.message || "Failed to get payment link. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error getting payment link:", error);
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setProcessingPayment(null);
    }
  };
  const handleAppointmentUpdated = () => {
    if (expandedChild) {
      fetchAppointments(expandedChild);
    }
  };
  const toggleChildExpansion = (childId) => {
    setExpandedChild(expandedChild === childId ? null : childId);
  };
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-700 text-black-800 border-green-700";
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const isPackageAppointment = (appointment) => {
    return appointment.notes?.toLowerCase().includes("package") || appointment.notes?.includes("Mũi") || appointment.notes?.includes("/");
  };
  const groupAppointmentsByDate = (appointments2) => {
    const grouped = {};
    appointments2.forEach((appointment) => {
      const appointmentDate = parseISO(appointment.appointmentDate);
      const dateKey = format(appointmentDate, "yyyy-MM-dd");
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(appointment);
    });
    return grouped;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Your Appointments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "View and manage vaccination appointments for your children" })
    ] }),
    loadingChildren ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-72 mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }) })
    ] }, i)) }) : children.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: expandedChild === child.id ? "border-blue-200" : "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CardHeader,
        {
          className: `cursor-pointer hover:bg-gray-50 ${expandedChild === child.id ? "bg-blue-50/50" : ""}`,
          onClick: () => toggleChildExpansion(child.id),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 p-2 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: child.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: child.dateOfBirth ? format(new Date(child.dateOfBirth), "MMMM d, yyyy") : "No birth date" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: expandedChild === child.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5" }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expandedChild === child.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => fetchAppointments(child.id),
                disabled: loadingAppointments[child.id],
                className: "text-xs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RefreshCw,
                    {
                      className: `h-3.5 w-3.5 mr-1.5 ${loadingAppointments[child.id] ? "animate-spin" : ""}`
                    }
                  ),
                  "Refresh"
                ]
              }
            ) }),
            loadingAppointments[child.id] ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }, i)) }) : appointments[child.id]?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: Object.entries(groupAppointmentsByDate(appointments[child.id])).map(
              ([dateKey, dateAppointments]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4 text-blue-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-blue-800", children: format(new Date(dateKey), "EEEE, MMMM d, yyyy") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 pl-6", children: dateAppointments.map((appointment) => {
                  const isPackage = isPackageAppointment(appointment);
                  const isPending = appointment.status.toLowerCase() === "pending";
                  const isConfirmed = appointment.status.toLowerCase() === "confirmed";
                  const canReschedule = isPending || isConfirmed;
                  const appointmentDate = parseISO(appointment.appointmentDate);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `rounded-lg border ${isPackage ? "border-purple-200 bg-purple-50/50" : "border-blue-200 bg-blue-50/50"} p-4`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Badge,
                              {
                                variant: "outline",
                                className: `${isPackage ? "bg-purple-100 text-purple-800 border-purple-200" : "bg-blue-100 text-blue-800 border-blue-200"}`,
                                children: isPackage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package2, { className: "h-3 w-3 mr-1" }),
                                  " Package"
                                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-3 w-3 mr-1" }),
                                  " Single Vaccine"
                                ] })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: getStatusColor(appointment.status), children: appointment.status })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-900", children: appointment.vaccineName }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-3.5 w-3.5 text-gray-500" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-600", children: [
                                "Dose ",
                                appointment.doseNumber,
                                appointment.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-gray-500", children: [
                                  "(",
                                  appointment.notes,
                                  ")"
                                ] })
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-6 gap-y-2 text-sm", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-gray-500" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: format(appointmentDate, "h:mm a") })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-3.5 w-3.5 text-gray-500" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND"
                              }).format(appointment.totalPrice) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              variant: "outline",
                              size: "sm",
                              onClick: () => handleViewDetails(appointment.appointmentId),
                              className: isPackage ? "border-purple-300 hover:bg-purple-100" : "border-blue-300 hover:bg-blue-100",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5 mr-1.5" }),
                                "View Details"
                              ]
                            }
                          ),
                          canReschedule && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              variant: "outline",
                              size: "sm",
                              onClick: () => {
                                handleViewDetails(appointment.appointmentId);
                              },
                              className: "border-blue-300 hover:bg-blue-100",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 mr-1.5" }),
                                "Reschedule"
                              ]
                            }
                          ),
                          isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              className: "bg-green-600 hover:bg-green-700 text-white",
                              onClick: () => handleCheckout(appointment.appointmentId),
                              disabled: processingPayment === appointment.appointmentId,
                              children: processingPayment === appointment.appointmentId ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3.5 w-3.5 mr-1.5 animate-spin rounded-full border-2 border-white border-t-transparent" }),
                                "Processing..."
                              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-3.5 w-3.5 mr-1.5" }),
                                "Pay Now"
                              ] })
                            }
                          )
                        ] })
                      ] })
                    },
                    appointment.appointmentId
                  );
                }) })
              ] }, dateKey)
            ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-12 w-12 text-gray-300 mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "No appointments found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1", children: "This child doesn't have any scheduled appointments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "mt-4",
                  onClick: () => window.location.href = "/appointments",
                  children: "Book an Appointment"
                }
              )
            ] })
          ] })
        }
      ) })
    ] }, child.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-12 w-12 text-gray-300 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "No children found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-1", children: "Add a child profile to book vaccination appointments" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppointmentDetailDialog,
      {
        appointment: selectedAppointment,
        isOpen: isDetailOpen,
        onClose: () => {
          setIsDetailOpen(false);
          setSelectedAppointment(null);
        },
        onAppointmentUpdated: handleAppointmentUpdated
      }
    )
  ] });
}

const AppointmentDashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentsSection, {}) });
};

export { AppointmentDashboard as default };
