# Alien Agency: The Party Line — editorial audit
Spoilers for all editions.

The original had a good detective scene (unplugging the cable), a good human stake (Vey wants to hear her mother), and a satisfying biscuit payoff. Its two investigations were poorly joined: by panel 10, Morrow had explained where the envelope came from and how to open it. Panel 18 then performed the only decryption. A reader could identify a recording, but could not solve the key mystery.

The first revision fixed the mystery. The current edition is a readability pass on top of it: the plot, the clues and the artwork are unchanged, but every panel was rewritten so the reader meets the feeling or the question first and the technical detail second.

## Panel by panel

| Panels | Earlier problem | Dramatic job in the current edition |
|---|---|---|
| 01–02 | The fence and coin were memorable; the crew could seemingly get help at any time. | Open on the plain problem: the crew can hear home but can't call it. Establish the 12:40 relay deadline and the dawn search ship. The coin joke now comes first in panel 2, so the panel ends on Vey's unanswered "Mama? … Mama?" |
| 03–04 | The computer lesson explained four concepts but only the cable mattered. | Buck lays two parts on the bench and asks one question: what survives power loss? The recording and the receipt survive; the working key does not. Buck, not Ixi, pulls the cable, as the opening blurb promises. The chapter ends on Vey hearing a sound after the voice. |
| 05–06 | Rival forums offered variations of the same scam and supplied little to solve. | Each board has a distinct size and a two-character label. Ollo notices the labels spell the "B7!" scratched on the receipt, which gives the file order. The duplicated recording discredits the boards' claims of live contact without discrediting their bytes. |
| 07–08 | Local trivia unlocked the next scene; two simultaneous calls implied unexplained surveillance. | The bell on the recording leads to Buck's log and then the booth. Ixi's end-to-end reconstruction is now motivated by the label order, and still fails against the receipt. Buck phones ahead; by station rules the call rings at both the custodian's desk and the Directorate. |
| 09–10 | The custodian revealed the answer. | Morrow supplies the physical fact: the recorder had three heads and dealt the message across them. Buck supplies the image (dealing cards). Ixi makes the inference: each board holds every third byte, and she stacked the piles when she should have picked the cards up as dealt. |
| 11–12 | Family history and the director arrived as separate plot threads. | The two mothers left a test on the equipment they built, and Sava's note gives both test rows. The scratchpad is labelled "Your turn" and has a fold-out hint. Dace offers a shortcut with a visible price: his form orders every missing crew's radio to report its location. |
| 13–14 | Two unsynchronized recordings seemed to finish together. | Vey asks the flour-jar question and gets the recording back. Ollo times the seventeen seconds. Vey rejects the shortcut herself and names the cost: the addresses of everyone who went missing on purpose. |
| 15–16 | A fleet cover-up and a torn ledger page displaced the key puzzle. | Read the two test rows, account for the uneven lengths (forty doesn't divide by three), read out the first six bytes and compare the receipt. The reader can try first in panel 11. |
| 17–18 | Verification, authorization and unwrapping happened almost simultaneously. | Reconstruct outside the machine; then two authorized people open the lock. The reader sees what goes in (forty bytes) and what comes out (the key). The machine's lines are attributed to "Station", not "Reader". |
| 19–20 | Panel 19 explained the switches, but recovering the key didn't uncover anything new about the dilemma. | The narration says what each cable does: red lights every answering radio on the wall map, blue runs to a microphone. The verified test message identifies the family circuit. Dace must ask separately for the fleet order. Vey's choice rests on a finding she helped produce. |
| 21–22 | A generic status message appeared to authenticate the person on the other end. | The circuit opens onto silence. Vey asks the same flour-jar question, and this time the seventeen seconds end in something new: a handset set down, a drawer opening. |
| 23–24 | The ending resolved a legal thread mostly offstage. | Keep the flour-jar exchange. Sava calls off the search ship and agrees to give the inquiry her own account; the story doesn't pretend the inquiry is settled. The last panel runs in time order (sign-off, party-line clicks, breakfast) and ends on "let Mama finish." |

## Readability pass
What changed across the whole comic in the current edition:

- **Plain words in the panels.** "AES key wrap", "recovery record" and "tape heads" no longer appear in the lettering. The crew talks about a locked backup, a package, an envelope and a fingerprint. The exact terms live in the Operator's notes after the ending.
- **One image for the puzzle.** The recorder "deals" bytes like cards. Every later step (the wrong first try, the test rows, the extra fourteenth byte) is explained in terms of that image.
- **Shorter beats.** Long captions were split, and each panel ends on its strongest line where the art allows.
- **Roles up front.** A four-line cast list under the title says who Buck, Vey, Ixi and Ollo are before panel 1.
- **A visible clock.** Each chapter header shows the time left until the relay sets, from 3 h 26 min down to 3 min.
- **Chapter hooks.** Chapters 1–5 end with a "Next" card carrying a one-line teaser. A progress bar under the chapter picker shows how far through the story the reader is.
- **Lettering.** Narration is upright rather than italic. Recordings and machine output have their own style, so the reader can tell a live voice from a played-back one at a glance.

## Continuity fixes in this pass
- Chapter 5 and 6 headers disagreed with the times inside their own panels. They now read 12:28 AM and 12:37 AM, matching 12:32 in panel 17 and the 12:40 deadline.
- The intro said Buck pulls the cable; panel 4 had Ixi do it. Buck does it now.
- Panel 3 had Buck put parts in Ixi's hands, but the art shows them on the bench in front of Ollo and Vey. The caption now matches the art.
- Panel 6 mentioned "the two dealers" after three boards were introduced. It now says two of the three boards offer a "live" voice.
- The receipt carries only "B7!". The SOS row comes from Sava's note under the receiver plate. The scratchpad and Operator's notes previously credited both rows to the receipt.
- "They can hear a drawer stick" in panel 22 had no clear subject and was rewritten.

## Continuity and limits
The illustrated Tennessee locations, characters and order of scenes remain. Clues too small to read in the original art appear in lettering and the scratchpad rather than being attributed to invisible details. The original strip after the ending is bonus material from the earlier telling.

Nothing was added to Sava's backstory. Why she left, and what the inquiry was about, are still held back for "a longer call."

The crew knows from the start that the backup is locked and that only the originating exchange can open it. The mystery is how to reconstruct the correct record and use authorized recovery. A matching short fingerprint is a check on the story's candidate ordering, not cryptographic proof of authorship. The bell is a lead to the physical station, not key material. A valid test message verifies this recovery, not the caller's identity. The family exchange is personal corroboration, not a general-purpose identity protocol.

## Evidence verification
The companion recovery-fixture.json contains invented public test bytes only, and none of them changed in the readability pass. In generation, contiguous-file concatenation produced a different fingerprint and failed AES Key Wrap integrity verification. Row-wise interleaving reproduced the receipt, unwrapped the expected channel key and authenticated/decrypted the separate AES-GCM test message. The site's reader does not require cryptographic libraries.
