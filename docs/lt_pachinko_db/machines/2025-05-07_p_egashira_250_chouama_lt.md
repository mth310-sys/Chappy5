# P【超甘LT】江頭2:50inナナシー 奇跡の99%

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P【超甘LT】江頭2:50inナナシー 奇跡の99%
modelName: P江頭2：50 inナナシーAX2
manufacturer: 豊丸産業
releaseDate: 2025-05-07
advanceIntroductionDate: 2025-04-21（東京都新宿区3店舗・各5台の先行導入）
modelType: 超甘 / 甘デジ / LT
gameType: 二種 / セット大当り経由LT / LTループ＋終了後再昇格チャンス
ltEquipped: true

## Core spec
jackpotProbability:
- 通常時: 1/33.3
- 右打ち中: 1/1.0（V入賞が条件）

initialPayout:
- 通常時5R: 約250個払出

rushEntryRate:
- BAN解禁タイム突入率: 約10.9%（P-WORLD直接値）
- EGASYRUSH通常時直撃: 0.4%
- 初当り33.1%で「おしえてエガちゃんぼーなす」へ。成功率約33%でBAN解禁タイムへ。

rushContinuationRate:
- 通常RUSH相当の連続抽選RUSHはなし。
- BAN解禁タイムは初回5回セット大当りを獲得するLT昇格区間で、EGASYRUSH昇格率約26.1%。LT終了後は4回セット、再昇格率約21.5%。

timeShortening:
- 0回 or 次回まで（解析資料表記）

## Lucky Trigger
ltName: EGASYRUSH
ltEntryRoute:
1. 通常初当りの0.4%からEGASYRUSHへ直行。
2. 通常初当り33.1%で「おしえてエガちゃんぼーなす」へ進み、演出成功約33%でBAN解禁タイムへ。
3. BAN解禁タイムは5回セット大当り。消化中の昇格約26.1%でLT「EGASYRUSH」へ。
4. EGASYRUSHの非継続時は即通常へ落ちず、4回セットのBAN解禁タイムへ移行し、約21.5%でEGASYRUSHへ再昇格。

ltEntryRate:
- 通常時直撃: 0.4%
- BAN解禁タイム中: 約26.1%
- EGASYRUSH終了後BAN解禁タイムからの再昇格: 約21.5%
- 通常時当選全体を分母とした総LT到達率: UNVERIFIED（公開された直接総合値を確認できず、経路値から独自合算しない）

ltContinuationRate:
- EGASYRUSH公表継続率: 約98.6%（約99%表記あり）
- 定義: EGASYRUSH単体ループ98%と、終了後BAN解禁タイムの再昇格率約21.5%を合算したTOTAL値。P-WORLDの特図2詳細では98.6%継続 / 1.4%でBAN解禁タイム移行と表記されており、メーカー/解析の「単体98%＋再昇格21.5%でTOTAL約99%」表記と定義差があるため数値を混ぜない。

ltPayoutStructure:
- EGASYRUSH中: 約138個払出を反復。
- P-WORLD詳細: 特図2 EGASYRUSH中 98.6% 約138個→EGASYRUSH、1.4% 約138個→BAN解禁タイム。
- EGASYRUSH終了後BAN解禁タイム: 4回セット、約138～552個。再昇格約21.5%。

totalPayoutDistribution:
- 特図1: 約250個 0.4% → EGASYRUSH直行
- 特図1: 約250個 33.1% → おしえてエガちゃんぼーなす（成功約33%でBAN解禁タイム）
- 特図1: 約250個 66.5% → 通常
- BAN解禁タイム: 初回5回セット合算約690個。26.1%でEGASYRUSH / 73.9%で通常（LT昇格時は約138～690個）
- EGASYRUSH終了後BAN解禁タイム: 4回セット、再昇格約21.5%、約138～552個
- EGASYRUSH中1回: 約138個払出

cTimeOrSpecialSystems:
- BAN解禁タイムは初回5回セット、EGASYRUSH終了後は4回セット。
- 大当りはV入賞が条件。

ceilingOrSupport: 遊タイム非搭載

## Game flow
通常時 1/33.3
├─ 0.4% → 約250個 → LT「EGASYRUSH」
├─ 33.1% → 約250個 → おしえてエガちゃんぼーなす
│   ├─ 成功 約33% → BAN解禁タイム（初回5回セット / 約690個）
│   │   ├─ 約26.1% → LT「EGASYRUSH」
│   │   └─ 約73.9% → 通常
│   └─ 失敗 → 通常
└─ 66.5% → 約250個 → 通常

EGASYRUSH
↓ 約138個を反復 / TOTAL継続約98.6%（約99%表記）
非継続
↓
BAN解禁タイム（4回セット）
├─ 約21.5% → EGASYRUSH再昇格
└─ 非昇格 → 通常

## Notes
- 全国導入のcanonical releaseDateは複数解析/機種DBで一致する2025-05-07を採用。
- 2025-04-21から東京都新宿区のエスパス日拓新宿歌舞伎町店、エスパス日拓西武新宿駅前店、マルハン新宿東宝ビル店の3店舗に各5台を先行導入したことを業界一次記事で確認。時系列境界では4/21の先行導入を明示しつつ、全国導入日レコードは5/7に置く。
- 豊丸産業が「超甘LT」第一弾として発表。初当り確率分母1/50未満にLTを搭載するコンセプト。
- 「約99%」は単純な1回当り継続率ではなく、LT本体ループと終了後BAN解禁タイム再昇格を加味した公表TOTAL値。定義を分離する。
- 2024年導入の「P江頭2:50 inナナシーLT」（約1/129.7、EGASYRUSH約90.2%）は別スペック。本レコードへ混同しない。

## Sources
retrievedAt: 2026-09-21
1. Amusement Japan / 豊丸産業発表「新コンセプト機『超甘LT』第一弾先行導入とアンバサダー発表」 — 4/21先行導入、3店舗各5台、1/33.3、BAN解禁タイム昇格約26.1%、EGASYRUSH約99%。INDUSTRY
   https://amusement-japan.co.jp/article/detail/10004819/
2. P-WORLD 機種DB — 型式名、1/33.3→1/1、BAN解禁タイム約10.9%/昇格約26.1%、EGASYRUSH約98.6%、特図1/特図2詳細振り分け、払出、ゲームフロー。ANALYSIS_HIGH
   https://www.p-world.co.jp/machine/database/10237
3. 一撃「P【超甘LT】江頭2:50inナナシー 奇跡の99%」 — 型式名、全国導入日5/7、1/33.3→1/1、通常直撃0.4%、BAN解禁タイム26.1%、LT約99%、払出。ANALYSIS_HIGH
   https://1geki.jp/pachinko/p_ega_nanasy_calt/
4. 一撃「BAN解禁タイム」 — 初回5回セット、LT昇格約26%、非昇格時約940個総払出の構成、LT終了後4回セット/約21.5%。ANALYSIS_HIGH
   https://1geki.jp/pachinko/p_ega_nanasy_calt/51/
5. 一撃「EGASYRUSH」 — LT経路、約138個×約99%、終了後BAN解禁タイム、TOTAL継続定義。ANALYSIS_HIGH
   https://1geki.jp/pachinko/p_ega_nanasy_calt/52/
6. パチ&スロ必勝本「基本スペック」 — 導入日5/7、二種、通常直撃0.4%、BAN解禁TIME、98.6%、払出、遊タイム非搭載。ANALYSIS_HIGH
   https://hisshobon.com/machineinfo/97389/
7. HAZUSE 機種詳細 — 型式P江頭2：50 inナナシーAX2、検定番号410828、全国導入開始5/7、LT搭載。ANALYSIS_HIGH
   https://hazuse.com/hd/410828-2/

confidence: INDUSTRY + ANALYSIS_HIGH（複数一致）
missingFields:
- 通常時当選全体を分母とした総LT到達率の直接公表値
conflicts: none
