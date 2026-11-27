# One Word for Your Wi-Fi — "peekaboo"

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/musikpagi2/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/musikpagi2/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

Entry for the [One Word for Your Wi-Fi](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72) competition on make.fun.

## The word

**peekaboo**

Home Wi-Fi that is there one second and gone the next — it appears, it
vanishes, it pops back up exactly when you stop looking for it. A game of
peekaboo played by your router, every single day.

## How it works

`main.ts` (Node 22, standard library only) writes the single word to
`entry.txt` in the output directory (`$MAKEFUN_OUTPUT_DIR`, falling back to
`/output`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # peekaboo
```

## License

MIT — see [LICENSE](LICENSE).
