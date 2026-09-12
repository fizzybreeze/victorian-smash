# Victorian Smash!

A block-matching demolition game. Match coloured blocks, send the points flying at a
Victorian house, and knock the whole thing down. Eight rooms, then the outside of the
house, then the garden.

Built by fizzybreeze.

## How to play

Tap a block, then tap one next to it to swap them. Line up three or more of the same
colour and they fly at the room. Four in a row scores double, five or more scores more
again, and chains score more each time.

Every level has 2 minutes 30 seconds on the clock. Once you have smashed something, a
workman walks in and starts putting it back. Tap him and he runs off. Let him finish and
you have to smash it all over again. He gets quicker, and turns up more often, the
further into the house you get.

## Running it

    npm install
    npm run dev

Then open the address it prints. `npm run build` writes a static site to `dist`.

## Tuning the game

All the numbers worth changing sit near the top of `src/VictorianSmash.jsx`.

| What | Where | Now |
| --- | --- | --- |
| Board size | `COLS`, `ROWS` | 9 by 9 |
| Colours | `KINDS` | 6 |
| Points per match | `runValue` | 30 / 60 / 100 |
| Room part costs | `RC` | 90 to 130 |
| Level time | `time` on each level | 150 seconds |
| How long a repair takes | `fixWorkMs` | 4.0s, falling to 2.8s |
| How often a workman comes | `fixEvery` | every 12s, falling to 8s |
| Difficulty ramp per room | `hardness` | 6% more per room |

Levels, rooms, and the furniture in them are listed in `LEVELS`. The drawings are in
`ART`, each one a small piece of SVG.

## Licence

MIT. See `LICENSE`.
