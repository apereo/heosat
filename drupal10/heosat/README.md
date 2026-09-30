HEOSAT 2026.07 enhanced guidance edition v5 — save-progress update

Install this folder as modules/custom/heosat, enable the module, then visit /heosat. This edition preserves the enhanced guidance, respondent evidence notes, local browser saving, printable HEOSAT Results Report, section summaries, score distribution graphics, and restored spider/radar chart.

## Save progress

This update strengthens HEOSAT browser persistence for the Drupal edition. Scores and evidence notes are saved automatically as respondents work, saved again when the page is hidden or closed, and restored when the respondent returns in the same browser/profile. The implementation uses localStorage with IndexedDB as a fallback and provides an in-app save-status message plus a “Start over / clear saved progress” control. Assessment responses remain on the user’s device; this feature does not transmit them to Apereo or another server.

Browser privacy modes or settings that block all persistent site storage can prevent automatic restoration. For the standalone edition, using the same index.html file/location and browser profile provides the most consistent restoration behavior.

## Attribution and license

HEOSAT is adapted from and inspired by the OSS Watch Open Source Openness Rating (https://oss-watch.ac.uk/apps/openness/), which is published under a Creative Commons Attribution-ShareAlike 4.0 International License. Except where otherwise noted, HEOSAT guidance content is made available under a Creative Commons Attribution-ShareAlike 4.0 International License.

## Influences and cited resources

The tool includes an in-app and printable attribution section citing prior work that informed this edition, including OSS Watch, Creative Commons, the Open Source Initiative, Karl Fogel's Producing Open Source Software, Ithaka S+R / Apereo SOSSRE resources, LYRASIS It Takes a Village, CHAOSS, OpenSSF, and SPDX.
