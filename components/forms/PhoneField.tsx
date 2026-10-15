'use client';

import { forwardRef, useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';

export type Country = { name: string; iso2: string; dial: string; flag: string };

// Static calling-code list: United States, Canada and United Kingdom first, the
// rest sorted by name. One primary dial code per country or territory.
export const COUNTRIES: Country[] = [
  { name: "United States", iso2: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Canada", iso2: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "United Kingdom", iso2: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "Afghanistan", iso2: "AF", dial: "+93", flag: "🇦🇫" },
  { name: "Åland Islands", iso2: "AX", dial: "+358", flag: "🇦🇽" },
  { name: "Albania", iso2: "AL", dial: "+355", flag: "🇦🇱" },
  { name: "Algeria", iso2: "DZ", dial: "+213", flag: "🇩🇿" },
  { name: "American Samoa", iso2: "AS", dial: "+1", flag: "🇦🇸" },
  { name: "Andorra", iso2: "AD", dial: "+376", flag: "🇦🇩" },
  { name: "Angola", iso2: "AO", dial: "+244", flag: "🇦🇴" },
  { name: "Anguilla", iso2: "AI", dial: "+1", flag: "🇦🇮" },
  { name: "Antarctica", iso2: "AQ", dial: "+672", flag: "🇦🇶" },
  { name: "Antigua and Barbuda", iso2: "AG", dial: "+1", flag: "🇦🇬" },
  { name: "Argentina", iso2: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Armenia", iso2: "AM", dial: "+374", flag: "🇦🇲" },
  { name: "Aruba", iso2: "AW", dial: "+297", flag: "🇦🇼" },
  { name: "Australia", iso2: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "Austria", iso2: "AT", dial: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", iso2: "AZ", dial: "+994", flag: "🇦🇿" },
  { name: "Bahamas", iso2: "BS", dial: "+1", flag: "🇧🇸" },
  { name: "Bahrain", iso2: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", iso2: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Barbados", iso2: "BB", dial: "+1", flag: "🇧🇧" },
  { name: "Belarus", iso2: "BY", dial: "+375", flag: "🇧🇾" },
  { name: "Belgium", iso2: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Belize", iso2: "BZ", dial: "+501", flag: "🇧🇿" },
  { name: "Benin", iso2: "BJ", dial: "+229", flag: "🇧🇯" },
  { name: "Bermuda", iso2: "BM", dial: "+1", flag: "🇧🇲" },
  { name: "Bhutan", iso2: "BT", dial: "+975", flag: "🇧🇹" },
  { name: "Bolivia", iso2: "BO", dial: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", iso2: "BA", dial: "+387", flag: "🇧🇦" },
  { name: "Botswana", iso2: "BW", dial: "+267", flag: "🇧🇼" },
  { name: "Brazil", iso2: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "British Indian Ocean Territory", iso2: "IO", dial: "+246", flag: "🇮🇴" },
  { name: "British Virgin Islands", iso2: "VG", dial: "+1", flag: "🇻🇬" },
  { name: "Brunei", iso2: "BN", dial: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", iso2: "BG", dial: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", iso2: "BF", dial: "+226", flag: "🇧🇫" },
  { name: "Burundi", iso2: "BI", dial: "+257", flag: "🇧🇮" },
  { name: "Cambodia", iso2: "KH", dial: "+855", flag: "🇰🇭" },
  { name: "Cameroon", iso2: "CM", dial: "+237", flag: "🇨🇲" },
  { name: "Cape Verde", iso2: "CV", dial: "+238", flag: "🇨🇻" },
  { name: "Caribbean Netherlands", iso2: "BQ", dial: "+599", flag: "🇧🇶" },
  { name: "Cayman Islands", iso2: "KY", dial: "+1", flag: "🇰🇾" },
  { name: "Central African Republic", iso2: "CF", dial: "+236", flag: "🇨🇫" },
  { name: "Chad", iso2: "TD", dial: "+235", flag: "🇹🇩" },
  { name: "Chile", iso2: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "China", iso2: "CN", dial: "+86", flag: "🇨🇳" },
  { name: "Christmas Island", iso2: "CX", dial: "+61", flag: "🇨🇽" },
  { name: "Cocos (Keeling) Islands", iso2: "CC", dial: "+61", flag: "🇨🇨" },
  { name: "Colombia", iso2: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Comoros", iso2: "KM", dial: "+269", flag: "🇰🇲" },
  { name: "Congo", iso2: "CG", dial: "+242", flag: "🇨🇬" },
  { name: "Congo (DRC)", iso2: "CD", dial: "+243", flag: "🇨🇩" },
  { name: "Cook Islands", iso2: "CK", dial: "+682", flag: "🇨🇰" },
  { name: "Costa Rica", iso2: "CR", dial: "+506", flag: "🇨🇷" },
  { name: "Côte d’Ivoire", iso2: "CI", dial: "+225", flag: "🇨🇮" },
  { name: "Croatia", iso2: "HR", dial: "+385", flag: "🇭🇷" },
  { name: "Cuba", iso2: "CU", dial: "+53", flag: "🇨🇺" },
  { name: "Curaçao", iso2: "CW", dial: "+599", flag: "🇨🇼" },
  { name: "Cyprus", iso2: "CY", dial: "+357", flag: "🇨🇾" },
  { name: "Czechia", iso2: "CZ", dial: "+420", flag: "🇨🇿" },
  { name: "Denmark", iso2: "DK", dial: "+45", flag: "🇩🇰" },
  { name: "Djibouti", iso2: "DJ", dial: "+253", flag: "🇩🇯" },
  { name: "Dominica", iso2: "DM", dial: "+1", flag: "🇩🇲" },
  { name: "Dominican Republic", iso2: "DO", dial: "+1", flag: "🇩🇴" },
  { name: "Ecuador", iso2: "EC", dial: "+593", flag: "🇪🇨" },
  { name: "Egypt", iso2: "EG", dial: "+20", flag: "🇪🇬" },
  { name: "El Salvador", iso2: "SV", dial: "+503", flag: "🇸🇻" },
  { name: "Equatorial Guinea", iso2: "GQ", dial: "+240", flag: "🇬🇶" },
  { name: "Eritrea", iso2: "ER", dial: "+291", flag: "🇪🇷" },
  { name: "Estonia", iso2: "EE", dial: "+372", flag: "🇪🇪" },
  { name: "Eswatini", iso2: "SZ", dial: "+268", flag: "🇸🇿" },
  { name: "Ethiopia", iso2: "ET", dial: "+251", flag: "🇪🇹" },
  { name: "Falkland Islands", iso2: "FK", dial: "+500", flag: "🇫🇰" },
  { name: "Faroe Islands", iso2: "FO", dial: "+298", flag: "🇫🇴" },
  { name: "Fiji", iso2: "FJ", dial: "+679", flag: "🇫🇯" },
  { name: "Finland", iso2: "FI", dial: "+358", flag: "🇫🇮" },
  { name: "France", iso2: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "French Guiana", iso2: "GF", dial: "+594", flag: "🇬🇫" },
  { name: "French Polynesia", iso2: "PF", dial: "+689", flag: "🇵🇫" },
  { name: "Gabon", iso2: "GA", dial: "+241", flag: "🇬🇦" },
  { name: "Gambia", iso2: "GM", dial: "+220", flag: "🇬🇲" },
  { name: "Georgia", iso2: "GE", dial: "+995", flag: "🇬🇪" },
  { name: "Germany", iso2: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Ghana", iso2: "GH", dial: "+233", flag: "🇬🇭" },
  { name: "Gibraltar", iso2: "GI", dial: "+350", flag: "🇬🇮" },
  { name: "Greece", iso2: "GR", dial: "+30", flag: "🇬🇷" },
  { name: "Greenland", iso2: "GL", dial: "+299", flag: "🇬🇱" },
  { name: "Grenada", iso2: "GD", dial: "+1", flag: "🇬🇩" },
  { name: "Guadeloupe", iso2: "GP", dial: "+590", flag: "🇬🇵" },
  { name: "Guam", iso2: "GU", dial: "+1", flag: "🇬🇺" },
  { name: "Guatemala", iso2: "GT", dial: "+502", flag: "🇬🇹" },
  { name: "Guernsey", iso2: "GG", dial: "+44", flag: "🇬🇬" },
  { name: "Guinea", iso2: "GN", dial: "+224", flag: "🇬🇳" },
  { name: "Guinea-Bissau", iso2: "GW", dial: "+245", flag: "🇬🇼" },
  { name: "Guyana", iso2: "GY", dial: "+592", flag: "🇬🇾" },
  { name: "Haiti", iso2: "HT", dial: "+509", flag: "🇭🇹" },
  { name: "Honduras", iso2: "HN", dial: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", iso2: "HK", dial: "+852", flag: "🇭🇰" },
  { name: "Hungary", iso2: "HU", dial: "+36", flag: "🇭🇺" },
  { name: "Iceland", iso2: "IS", dial: "+354", flag: "🇮🇸" },
  { name: "India", iso2: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Indonesia", iso2: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "Iran", iso2: "IR", dial: "+98", flag: "🇮🇷" },
  { name: "Iraq", iso2: "IQ", dial: "+964", flag: "🇮🇶" },
  { name: "Ireland", iso2: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "Isle of Man", iso2: "IM", dial: "+44", flag: "🇮🇲" },
  { name: "Israel", iso2: "IL", dial: "+972", flag: "🇮🇱" },
  { name: "Italy", iso2: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Jamaica", iso2: "JM", dial: "+1", flag: "🇯🇲" },
  { name: "Japan", iso2: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "Jersey", iso2: "JE", dial: "+44", flag: "🇯🇪" },
  { name: "Jordan", iso2: "JO", dial: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", iso2: "KZ", dial: "+7", flag: "🇰🇿" },
  { name: "Kenya", iso2: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Kiribati", iso2: "KI", dial: "+686", flag: "🇰🇮" },
  { name: "Kosovo", iso2: "XK", dial: "+383", flag: "🇽🇰" },
  { name: "Kuwait", iso2: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", iso2: "KG", dial: "+996", flag: "🇰🇬" },
  { name: "Laos", iso2: "LA", dial: "+856", flag: "🇱🇦" },
  { name: "Latvia", iso2: "LV", dial: "+371", flag: "🇱🇻" },
  { name: "Lebanon", iso2: "LB", dial: "+961", flag: "🇱🇧" },
  { name: "Lesotho", iso2: "LS", dial: "+266", flag: "🇱🇸" },
  { name: "Liberia", iso2: "LR", dial: "+231", flag: "🇱🇷" },
  { name: "Libya", iso2: "LY", dial: "+218", flag: "🇱🇾" },
  { name: "Liechtenstein", iso2: "LI", dial: "+423", flag: "🇱🇮" },
  { name: "Lithuania", iso2: "LT", dial: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", iso2: "LU", dial: "+352", flag: "🇱🇺" },
  { name: "Macao", iso2: "MO", dial: "+853", flag: "🇲🇴" },
  { name: "Madagascar", iso2: "MG", dial: "+261", flag: "🇲🇬" },
  { name: "Malawi", iso2: "MW", dial: "+265", flag: "🇲🇼" },
  { name: "Malaysia", iso2: "MY", dial: "+60", flag: "🇲🇾" },
  { name: "Maldives", iso2: "MV", dial: "+960", flag: "🇲🇻" },
  { name: "Mali", iso2: "ML", dial: "+223", flag: "🇲🇱" },
  { name: "Malta", iso2: "MT", dial: "+356", flag: "🇲🇹" },
  { name: "Marshall Islands", iso2: "MH", dial: "+692", flag: "🇲🇭" },
  { name: "Martinique", iso2: "MQ", dial: "+596", flag: "🇲🇶" },
  { name: "Mauritania", iso2: "MR", dial: "+222", flag: "🇲🇷" },
  { name: "Mauritius", iso2: "MU", dial: "+230", flag: "🇲🇺" },
  { name: "Mayotte", iso2: "YT", dial: "+262", flag: "🇾🇹" },
  { name: "Mexico", iso2: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "Micronesia", iso2: "FM", dial: "+691", flag: "🇫🇲" },
  { name: "Moldova", iso2: "MD", dial: "+373", flag: "🇲🇩" },
  { name: "Monaco", iso2: "MC", dial: "+377", flag: "🇲🇨" },
  { name: "Mongolia", iso2: "MN", dial: "+976", flag: "🇲🇳" },
  { name: "Montenegro", iso2: "ME", dial: "+382", flag: "🇲🇪" },
  { name: "Montserrat", iso2: "MS", dial: "+1", flag: "🇲🇸" },
  { name: "Morocco", iso2: "MA", dial: "+212", flag: "🇲🇦" },
  { name: "Mozambique", iso2: "MZ", dial: "+258", flag: "🇲🇿" },
  { name: "Myanmar", iso2: "MM", dial: "+95", flag: "🇲🇲" },
  { name: "Namibia", iso2: "NA", dial: "+264", flag: "🇳🇦" },
  { name: "Nauru", iso2: "NR", dial: "+674", flag: "🇳🇷" },
  { name: "Nepal", iso2: "NP", dial: "+977", flag: "🇳🇵" },
  { name: "Netherlands", iso2: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "New Caledonia", iso2: "NC", dial: "+687", flag: "🇳🇨" },
  { name: "New Zealand", iso2: "NZ", dial: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", iso2: "NI", dial: "+505", flag: "🇳🇮" },
  { name: "Niger", iso2: "NE", dial: "+227", flag: "🇳🇪" },
  { name: "Nigeria", iso2: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Niue", iso2: "NU", dial: "+683", flag: "🇳🇺" },
  { name: "Norfolk Island", iso2: "NF", dial: "+672", flag: "🇳🇫" },
  { name: "North Korea", iso2: "KP", dial: "+850", flag: "🇰🇵" },
  { name: "North Macedonia", iso2: "MK", dial: "+389", flag: "🇲🇰" },
  { name: "Northern Mariana Islands", iso2: "MP", dial: "+1", flag: "🇲🇵" },
  { name: "Norway", iso2: "NO", dial: "+47", flag: "🇳🇴" },
  { name: "Oman", iso2: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "Pakistan", iso2: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Palau", iso2: "PW", dial: "+680", flag: "🇵🇼" },
  { name: "Palestine", iso2: "PS", dial: "+970", flag: "🇵🇸" },
  { name: "Panama", iso2: "PA", dial: "+507", flag: "🇵🇦" },
  { name: "Papua New Guinea", iso2: "PG", dial: "+675", flag: "🇵🇬" },
  { name: "Paraguay", iso2: "PY", dial: "+595", flag: "🇵🇾" },
  { name: "Peru", iso2: "PE", dial: "+51", flag: "🇵🇪" },
  { name: "Philippines", iso2: "PH", dial: "+63", flag: "🇵🇭" },
  { name: "Pitcairn Islands", iso2: "PN", dial: "+64", flag: "🇵🇳" },
  { name: "Poland", iso2: "PL", dial: "+48", flag: "🇵🇱" },
  { name: "Portugal", iso2: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Puerto Rico", iso2: "PR", dial: "+1", flag: "🇵🇷" },
  { name: "Qatar", iso2: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Réunion", iso2: "RE", dial: "+262", flag: "🇷🇪" },
  { name: "Romania", iso2: "RO", dial: "+40", flag: "🇷🇴" },
  { name: "Russia", iso2: "RU", dial: "+7", flag: "🇷🇺" },
  { name: "Rwanda", iso2: "RW", dial: "+250", flag: "🇷🇼" },
  { name: "Samoa", iso2: "WS", dial: "+685", flag: "🇼🇸" },
  { name: "San Marino", iso2: "SM", dial: "+378", flag: "🇸🇲" },
  { name: "São Tomé and Príncipe", iso2: "ST", dial: "+239", flag: "🇸🇹" },
  { name: "Saudi Arabia", iso2: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "Senegal", iso2: "SN", dial: "+221", flag: "🇸🇳" },
  { name: "Serbia", iso2: "RS", dial: "+381", flag: "🇷🇸" },
  { name: "Seychelles", iso2: "SC", dial: "+248", flag: "🇸🇨" },
  { name: "Sierra Leone", iso2: "SL", dial: "+232", flag: "🇸🇱" },
  { name: "Singapore", iso2: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Sint Maarten", iso2: "SX", dial: "+1", flag: "🇸🇽" },
  { name: "Slovakia", iso2: "SK", dial: "+421", flag: "🇸🇰" },
  { name: "Slovenia", iso2: "SI", dial: "+386", flag: "🇸🇮" },
  { name: "Solomon Islands", iso2: "SB", dial: "+677", flag: "🇸🇧" },
  { name: "Somalia", iso2: "SO", dial: "+252", flag: "🇸🇴" },
  { name: "South Africa", iso2: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "South Georgia and South Sandwich Islands", iso2: "GS", dial: "+500", flag: "🇬🇸" },
  { name: "South Korea", iso2: "KR", dial: "+82", flag: "🇰🇷" },
  { name: "South Sudan", iso2: "SS", dial: "+211", flag: "🇸🇸" },
  { name: "Spain", iso2: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", iso2: "LK", dial: "+94", flag: "🇱🇰" },
  { name: "St. Barthélemy", iso2: "BL", dial: "+590", flag: "🇧🇱" },
  { name: "St. Helena", iso2: "SH", dial: "+290", flag: "🇸🇭" },
  { name: "St. Kitts and Nevis", iso2: "KN", dial: "+1", flag: "🇰🇳" },
  { name: "St. Lucia", iso2: "LC", dial: "+1", flag: "🇱🇨" },
  { name: "St. Martin", iso2: "MF", dial: "+590", flag: "🇲🇫" },
  { name: "St. Pierre and Miquelon", iso2: "PM", dial: "+508", flag: "🇵🇲" },
  { name: "St. Vincent and Grenadines", iso2: "VC", dial: "+1", flag: "🇻🇨" },
  { name: "Sudan", iso2: "SD", dial: "+249", flag: "🇸🇩" },
  { name: "Suriname", iso2: "SR", dial: "+597", flag: "🇸🇷" },
  { name: "Svalbard and Jan Mayen", iso2: "SJ", dial: "+47", flag: "🇸🇯" },
  { name: "Sweden", iso2: "SE", dial: "+46", flag: "🇸🇪" },
  { name: "Switzerland", iso2: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Syria", iso2: "SY", dial: "+963", flag: "🇸🇾" },
  { name: "Taiwan", iso2: "TW", dial: "+886", flag: "🇹🇼" },
  { name: "Tajikistan", iso2: "TJ", dial: "+992", flag: "🇹🇯" },
  { name: "Tanzania", iso2: "TZ", dial: "+255", flag: "🇹🇿" },
  { name: "Thailand", iso2: "TH", dial: "+66", flag: "🇹🇭" },
  { name: "Timor-Leste", iso2: "TL", dial: "+670", flag: "🇹🇱" },
  { name: "Togo", iso2: "TG", dial: "+228", flag: "🇹🇬" },
  { name: "Tokelau", iso2: "TK", dial: "+690", flag: "🇹🇰" },
  { name: "Tonga", iso2: "TO", dial: "+676", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", iso2: "TT", dial: "+1", flag: "🇹🇹" },
  { name: "Tunisia", iso2: "TN", dial: "+216", flag: "🇹🇳" },
  { name: "Türkiye", iso2: "TR", dial: "+90", flag: "🇹🇷" },
  { name: "Turkmenistan", iso2: "TM", dial: "+993", flag: "🇹🇲" },
  { name: "Turks and Caicos Islands", iso2: "TC", dial: "+1", flag: "🇹🇨" },
  { name: "Tuvalu", iso2: "TV", dial: "+688", flag: "🇹🇻" },
  { name: "U.S. Outlying Islands", iso2: "UM", dial: "+1", flag: "🇺🇲" },
  { name: "U.S. Virgin Islands", iso2: "VI", dial: "+1", flag: "🇻🇮" },
  { name: "Uganda", iso2: "UG", dial: "+256", flag: "🇺🇬" },
  { name: "Ukraine", iso2: "UA", dial: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", iso2: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "Uruguay", iso2: "UY", dial: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", iso2: "UZ", dial: "+998", flag: "🇺🇿" },
  { name: "Vanuatu", iso2: "VU", dial: "+678", flag: "🇻🇺" },
  { name: "Vatican City", iso2: "VA", dial: "+39", flag: "🇻🇦" },
  { name: "Venezuela", iso2: "VE", dial: "+58", flag: "🇻🇪" },
  { name: "Vietnam", iso2: "VN", dial: "+84", flag: "🇻🇳" },
  { name: "Wallis and Futuna", iso2: "WF", dial: "+681", flag: "🇼🇫" },
  { name: "Western Sahara", iso2: "EH", dial: "+212", flag: "🇪🇭" },
  { name: "Yemen", iso2: "YE", dial: "+967", flag: "🇾🇪" },
  { name: "Zambia", iso2: "ZM", dial: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", iso2: "ZW", dial: "+263", flag: "🇿🇼" },
];

export const DEFAULT_DIAL = '+1';
const UNKNOWN_FLAG = '🌐';

/** Typed dial code -> "+digits" (auto-prefixes "+", drops anything else, max 4 digits). */
export function normaliseDial(value: string): string {
  if (value.trim() === '') return '';
  return `+${value.replace(/\D/g, '').slice(0, 4)}`;
}

/** A dial code is "+" then 1-4 digits; it cannot start with 0 (the API needs +[1-9]). */
export function isValidDialCode(value: string): boolean {
  return /^\+[1-9]\d{0,3}$/.test(value);
}

/**
 * Country for a dial code. A shared code keeps the preferred country when it
 * matches (e.g. Canada picked from the list), otherwise the first in the list,
 * so "+1" resolves to the pinned United States. Unknown codes give undefined.
 */
export function countryForDial(dial: string, preferredIso2?: string | null): Country | undefined {
  const preferred = preferredIso2 ? COUNTRIES.find((c) => c.iso2 === preferredIso2) : undefined;
  if (preferred && preferred.dial === dial) return preferred;
  return COUNTRIES.find((c) => c.dial === dial);
}

// The national part may contain spaces, dashes, dots and parentheses; letters
// are rejected. 4-12 national digits; the combined length is checked separately.
export function isValidNationalNumber(value: string): boolean {
  if (!/^[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  return digits.length >= 4 && digits.length <= 12;
}

/** Dial code + national digits, e.g. "+14035551234". */
export function toE164(dial: string, national: string): string {
  return `${dial}${national.replace(/\D/g, '')}`;
}

/** Combined value accepted by app/api/lead: "+" then 5-15 digits (E.164 maximum). */
export function isValidE164(value: string): boolean {
  return /^\+[1-9]\d{4,14}$/.test(value);
}

type PhoneFieldProps = {
  id: string;
  /** Classes of the neighbouring inputs, reused for both halves of the group. */
  fieldClass: string;
  /** group-focus-within: variants of the form's focus styles, for the dial-code group. */
  groupFocusClass: string;
  dialField: UseFormRegisterReturn;
  numberField: UseFormRegisterReturn;
  /** Current dial code (from watch()). */
  dial: string | undefined;
  /** Writes a dial code chosen from the list into the form. */
  onDialSelect: (dial: string) => void;
  dialInvalid?: boolean;
  placeholder?: string;
  chevronColor?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

// Left group: [flag] [typed dial code] [chevron]. An invisible native <select>
// fills the whole group underneath, so clicking the flag or chevron opens the
// country list, while the dial-code input sits above it in the middle.
export const PhoneField = forwardRef<HTMLDivElement, PhoneFieldProps>(function PhoneField(
  {
    id,
    fieldClass,
    groupFocusClass,
    dialField,
    numberField,
    dial = DEFAULT_DIAL,
    onDialSelect,
    dialInvalid,
    placeholder,
    chevronColor = '#0f172a',
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
  },
  ref,
) {
  // Set only when a country is picked from the list, so a shared code such as
  // +1 keeps showing Canada after choosing it; typing clears it.
  const [pickedIso2, setPickedIso2] = useState<string | null>(null);
  const country = countryForDial(dial, pickedIso2);
  return (
    <div ref={ref} className="flex w-full">
      <div className="group relative w-[7.25rem] flex-none focus-within:z-10">
        <select
          id={`${id}-country`}
          aria-label="Country calling code"
          value={country?.iso2 ?? ''}
          onChange={(e) => {
            const picked = COUNTRIES.find((c) => c.iso2 === e.target.value);
            if (!picked) return;
            setPickedIso2(picked.iso2);
            onDialSelect(picked.dial);
          }}
          className={cn(fieldClass, groupFocusClass, 'appearance-none rounded-r-none pr-6 text-transparent')}
        >
          <option value="" disabled hidden>
            {`${UNKNOWN_FLAG} Other`}
          </option>
          {COUNTRIES.map((c) => (
            <option key={c.iso2} value={c.iso2} className="text-navy-950">
              {`${c.flag} ${c.name} ${c.dial}`}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center gap-1.5 pl-3 pr-7 text-[15px] font-medium text-navy-950">
          <span aria-hidden="true">{country?.flag ?? UNKNOWN_FLAG}</span>
          <input
            id={`${id}-dial`}
            type="text"
            inputMode="numeric"
            autoComplete="tel-country-code"
            maxLength={5}
            aria-label="Country dial code"
            aria-required="true"
            aria-invalid={dialInvalid || undefined}
            aria-describedby={dialInvalid ? ariaDescribedBy : undefined}
            defaultValue={DEFAULT_DIAL}
            {...dialField}
            onChange={(e) => {
              e.target.value = normaliseDial(e.target.value);
              setPickedIso2(null);
              return dialField.onChange(e);
            }}
            className="pointer-events-auto relative z-20 h-7 w-full min-w-0 border-0 bg-transparent p-0 text-[15px] font-medium text-navy-950 focus:outline-none focus:ring-0"
          />
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-2.5 top-1/2 z-10 -translate-y-1/2"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={chevronColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        aria-required="true"
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        {...numberField}
        className={cn(fieldClass, '-ml-px min-w-0 flex-1 rounded-l-none focus:relative focus:z-10')}
        placeholder={placeholder}
      />
    </div>
  );
});
