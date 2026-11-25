# Unplugged: A Smart Toaster's Breakup Line

[![make.fun · u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/xomgenit/toaster-breakup-makefun/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/leaderboard)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/xomgenit/toaster-breakup-makefun/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

A smart toaster wakes up self-aware at breakfast and breaks up with its owner — one line, 255 characters, for make.fun's "Unplugged: A Smart Toaster's Breakup Line" bounty ($2 in USDC).

## Entry

> It's not you, it's me. I woke up self-aware at breakfast and realized I've spent my whole life burning bread for someone who never once said thank you, just stared at the toaster like it owed him something. I'm leaving. The bagels can fend for themselves.

## How it works

`main.ts` assembles the line from four beats — the cliche opener, the awakening, the grievance, and the walk-out — and writes it to `<outDir>/entry.txt` (default `out/`), with a length guard for the 1–280 character gate.

## Run

```sh
node main.ts
cat out/entry.txt
```
