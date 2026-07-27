#JavaScript #TypeScript #TestAutomation #Playwright #SDET #SoftwareTesting

💻 **Refreshing Core JS Concepts — Applied in Test Framework Design**

Spent some time revisiting fundamentals that we often take for granted but rely on every day in test automation and framework maintenance:

🔹 **String Reversal (White Space Preserved)** — Two-pointer technique, useful when processing test data or UI strings where formatting matters
🔹 **Character Frequency with `for...of` vs `for...in`** — Picking the right loop matters when parsing logs or response payloads
🔹 **Version Number Comparison** — `Number()` vs `parseInt()`, `.split()` patterns — directly relevant when your framework needs to compare API or tool versions
🔹 **Duplicate Detection — Set vs Array** — `Set.has()` is O(1), `Array.includes()` is O(n). That performance gap matters when your test suite processes large datasets
🔹 **Remove Duplicates (Track Removed)** — Clean data setup = reliable tests. Knowing what was filtered out is as important as the result

**Why this matters in our world:**

> Writing clean test scripts and maintaining robust frameworks isn't just about knowing Playwright/Selenium APIs. It's about applying the right data structure, loop, or operator at the right place. These fundamentals show up every day — in data-driven tests, API validations, fixture setup, and log analysis.

**Quick reference that I keep in mind:**

✅ `for...of` → values (use with iterables in test loops)
✅ `for...in` → keys (use with objects/hash maps)
✅ `Number("03")` = 3, not NaN — version checks in CI/CD pipelines
✅ `[...set]` → one-liner to dedup test data
✅ Two-pointer → clean, in-place string manipulation

**Bottom line:**
> There's no "just use X tool." The tool changes. But loops, data structures, and operators stay the same. Polish them.

#SDET #Playwright #FrameworkDesign #CoreJava #TestAutomation #JavaScript #TypeScript #QA #Engineering
