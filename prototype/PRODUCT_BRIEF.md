# Prototype 01 — Chain Lab

Status: ACTIVE VALIDATION PROTOTYPE
Decision basis: D-005 / D-006

## Purpose
Test whether a one-screen machine-building interaction is immediately legible and worth replaying before adding progression, content, monetization, or a larger technical stack.

## Player loop
1. Choose one of three machine parts.
2. Tap a grid cell to place it.
3. Press RUN.
4. Watch energy orbs travel across the machine.
5. Read the score and failure count.
6. RESET / edit the layout and try again.

## Parts
- Diverter: pushes an orb one lane up or down. Direction can be toggled by tapping the placed diverter again.
- Booster: increases the orb value.
- Splitter: creates a second orb in an adjacent lane when possible, trading simplicity for more scoring routes.

## Fixed environment
A small number of blocked cells force the player to route around hazards instead of simply stacking boosters in a straight line.

## Metric
Score = total value of orbs reaching the collector.
Misses = orbs destroyed by blocks or leaving the board.

## Validation questions
- Can a new observer explain the flow after one run?
- Does moving one part create an obvious change in outcome?
- Are there at least two viable layouts with materially different scores?
- Is retrying fast enough that experimentation feels natural?

## Explicit non-goals
- No meta progression.
- No economy.
- No accounts.
- No ads or monetization.
- No narrative.
- No asset pipeline.
- No final art direction.
- No claim that this is the final commercial game.
