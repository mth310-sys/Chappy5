# PシャカRUSH Z

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: PシャカRUSH Z
formalModelName: PシャカRUSH Z1
manufacturer: マルホン工業
releaseDate: 2024-12-02
modelType: ライトミドル / LT搭載
gameType: 一種二種混合 / ST型

jackpotProbability:
- 通常時: 1/197.4
- 右打ち中: 1/67.0

initialPayout:
- 特図1 9R 約1018個（払出） + Z超RUSH: 3%
- 特図1 6R 約682個（払出） + シャカRUSH: 27%
- 特図1 2R 約234個（払出） + シャカRUSH: 70%

rushEntryRate: 100%
rushContinuationRate: シャカRUSH 約70%

ltName: Z超RUSH
ltEntryRoute:
- 通常時初当りの3%でZ超BIG → ST3000回 → Z超RUSHへ直行
- シャカRUSH中大当りの6%でZ超BIG → ST3000回 → Z超RUSHへ昇格
ltEntryRate:
- 初当り時LT直行: 3%
- シャカRUSH中大当り時LT昇格: 6%
- 通常初当りを分母とする総LT到達率: UNVERIFIED（経路値から推測しない）
ltContinuationRate: 約93.5%

ltPayoutStructure:
- Z超RUSH中 特図2 9R 約1018個 + ST3000回: 6%
- 6R 約682個 + ST3000回: 46%
- 2R 約234個 + ST3000回: 13%
- 6R 約682個 + ST108回: 28%
- 2R 約234個 + ST108回: 7%
- 大当りの65%がST3000回となり実質次回大当りまで継続する「∞インフィニティBONUS」系統

totalPayoutDistribution:
- 特図1: 9R 3% / 6R 27% / 2R 70%
- シャカRUSH中 特図2: 9R+LT 6% / 6R+シャカRUSH 74% / 2R+シャカRUSH 20%
- 出玉表記は払出個数。約1018 / 682 / 234個。

timeShortening:
- シャカRUSH: 76回
- Z超RUSH: 108回 or 3000回

cTimeOrSpecialSystems: なし（確認資料上、LT到達に関係するCタイム等なし）
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時 1/197.4
   ↓ 初当り
   ├─ 3% Z超BIG（9R）→ ST3000回 → LT「Z超RUSH」
   └─ 97% BIG/REG → ST76回「シャカRUSH」
                         ↓ 右打ち大当り
                         ├─ 6% Z超BIG → ST3000回 → LT「Z超RUSH」
                         └─ 94% → ST76回「シャカRUSH」継続
  LT「Z超RUSH」
   ↓ 右打ち大当り
   ├─ 65% ST3000回（実質次回まで）
   └─ 35% ST108回
   ↓
  TOTAL継続期待度 約93.5%

notes:
- P-WORLD、なな徹、パチセブン等で通常1/197.4、右1/67.0、RUSH100%、下位約70%、LT約93.5%、ST76/108/3000を照合。
- P-WORLDは初当り3%および下位RUSH中6%のLT突入を明記。
- なな徹で特図1・下位RUSH・LT中の振り分けを数値照合。
- 2026年導入の別スペック「PシャカRUSH Z Jr.」（1/98.7）とは分離。
- 通常初当り基準の総LT到達率は直接公表値を確認できないため算出しない。

sources:
- https://www.p-world.co.jp/machine/database/10131 — 基本スペック、LT搭載、3%直行、下位RUSH中6%、ST、払出、継続率（retrieved 2026-09-21）
- https://nana-press.com/kaiseki/machine/859/25206/ — 特図1/特図2/LT中振り分け、ST、遊タイム非搭載（retrieved 2026-09-21）
- https://pachiseven.jp/machines/7037/cutout/2 — 導入日、メーカー、確率、RUSH/ST/継続率照合（retrieved 2026-09-21）
- https://www.pachibee.jp/machines/mode/124100007 — 導入日、LT/RUSH構造、65% ST3000回照合（retrieved 2026-09-21）

confidence:
- LT搭載: ANALYSIS_HIGH
- 基本確率/RUSH/ST/継続率: ANALYSIS_HIGH
- 振り分け: ANALYSIS_HIGH
- formalModelName: ANALYSIS_HIGH
- releaseDate: ANALYSIS_HIGH

missingFields:
- 通常初当り基準の総LT到達率（直接公表値未確認）

conflicts: none
