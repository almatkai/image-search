/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - API Key for Google Image Search (https://console.cloud.google.com/apis/credentials) */
  "apiKey": string,
  /** CX ID - CX ID for Google Image Search (https://programmablesearchengine.google.com/controlpanel/all) */
  "cxId": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-images` command */
  export type SearchImages = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-images` command */
  export type SearchImages = {}
}

