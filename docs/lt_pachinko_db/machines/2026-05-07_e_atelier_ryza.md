# e ライザのアトリエ ～常闇の女王と秘密の隠れ家～

status: COMPLETE_CORE
retrievedAt: 2026-09-25

machineName: e ライザのアトリエ ～常闇の女王と秘密の隠れ家～
manufacturer: 京楽産業．（KYORAKU）
formalModel: eライザのアトリエK3
certificationNumber: 5P1848
releaseDate: 2026-05-07
modelType: スマパチ / ライトミドル / ラッキートリガー
gameType: 1種2種混合 / ST100回 / 多段階出玉強化型LT
jackpotProbability: 通常時 約1/239.7。ひと夏の冒険MODE / 最終決戦BATTLE4500 約1/69.5。
initialPayout: 特図1は1800個+直LT 26% / 1800個+通常 25% / 300個+通常 49%。1800個は300個+1500個（後半1500個は特図2）。
rushEntryRate: LT「ひと夏の冒険MODE」への初当り直行率26%。演出フロー上はアトリエBONUSから翼竜決戦への昇格率51%、翼竜決戦勝率約51%。
rushContinuationRate: ひと夏の冒険MODE 約77%（ST100回）。
ltName: ひと夏の冒険MODE（資料がLTと明記）。その先に最終決戦BATTLE4500、運命の錬金術、究極連鎖BONUSがある。
ltEntryRoute: 通常初当り→アトリエBONUS→ジャッジ成功で翼竜決戦BONUS→翼竜決戦勝利→ひと夏の冒険MODE。特図1振り分け上は1800個+直LT 26%。LT中3000個契機の女王BATTLE（勝率約80%）勝利で最終決戦BATTLE4500へ。最終決戦の大当り後は運命の錬金術へ進み、成功で究極連鎖BONUS。
ltEntryRate: 通常初当り基準26%（直接公表）。翼竜決戦突入51% × 勝率約51%という経路説明とも整合するが、DBでは独自乗算値をcanonicalにしない。
ltContinuationRate: ひと夏の冒険MODE 約77%。最終決戦BATTLE4500も約77%。究極連鎖BONUS 約64%。
ltPayoutStructure: ひと夏の冒険MODE中は3000個+女王BATTLE 55% / 1500個+同MODE 45%。3000個は1500個×2回。女王BATTLE勝率約80%、勝利で最終決戦BATTLE4500。最終決戦中大当りは4500個+運命の錬金術100%、4500個は1500個×3回。運命の錬金術突破約64%で究極連鎖BONUS、以後4500個単位が約64%で連鎖。
totalPayoutDistribution: 特図1 1800個+LT 26% / 1800個+通常25% / 300個+通常49%。ひと夏の冒険MODE 3000個+女王BATTLE55% / 1500個+MODE45%。最終決戦BATTLE4500は4500個+運命の錬金術100%。
timeShortening: 0回 or 100回。ひと夏の冒険MODE / 最終決戦BATTLE4500はST100回。
cTimeOrSpecialSystems: 運命の錬金術は約1/1で抽選、成功率/突破率約64%。究極連鎖BONUSは約64%継続の4500個連鎖。P-スキップ搭載だがLT到達抽選とは別機構。
ceilingOrSupport: 公開確認資料で遊タイム等のLT到達支援は確認できず。

gameFlow:
```
通常時 約1/239.7
 ↓ 初当り
アトリエBONUS 300個
 ├─ ジャッジ失敗 → 通常
 └─ ジャッジ成功 → 翼竜決戦BONUS（合計1800個）
      ├─ 敗北 → 通常
      └─ 勝利 → LT「ひと夏の冒険MODE」ST100回 / 約77%
                    ├─ 1500個 45% → MODE継続
                    └─ 3000個 55% → 女王BATTLE
                                      ├─ 敗北 → ひと夏の冒険MODE継続
                                      └─ 勝利 約80% → 最終決戦BATTLE4500 ST100回 / 約77%
                                                        ↓ 大当り
                                                      4500個 → 運命の錬金術
                                                        ├─ 失敗 → 通常
                                                        └─ 成功 約64% → 究極連鎖BONUS
                                                                         ↓
                                                                  4500個が約64%で連鎖
                                                                         ↓失敗
                                                                       通常
```

notes:
- 一撃は初当り時の「ひと夏の冒険MODE」突入率を26%と直接掲載し、情報島＋も通常時振り分けを1800個+直LT 26%と掲載する。
- パチマガスロマガFREEは翼竜決戦突入51%・勝率約51%という演出段階を掲載。26%はこの二段階を経た最終LT到達振り分けとして扱う。
- 1800個は300個+1500個、3000個は1500個×2、4500個は1500個×3の合計払出。単一大当り出玉と混同しない。
- 「最終決戦BATTLE4500」はひと夏の冒険MODEと同じ約1/69.5・ST100回・約77%だが、当選時ALL4500個へ出玉性能が強化される。
- 「究極連鎖BONUS」は4500個単位が約64%で連鎖する最終出玉トリガー。メーカー公式も「錬金術に成功するたび4500個が連鎖」と説明する。
- 運命の錬金術失敗時は通常へ転落。
- 主要資料間に未解決数値競合なし。

sources:
- https://www.kyoraku.co.jp/news/detail/876 — KYORAKU公式。2026-04-06発表、2026-05-07導入、究極連鎖BONUS、4500個=1500個×3の注記。retrieved 2026-09-25
- https://1geki.jp/pachinko/e_atelier_ryza/ — 一撃。型式eライザのアトリエK3、検定番号5P1848、LT/1種2種混合、通常1/239.7、右1/69.5、LT26%、ST100/約77%、究極連鎖約64%。retrieved 2026-09-25
- https://pachimaga.com/free/mach/maker-p/kyoraku/064971.php — パチマガスロマガFREE。翼竜決戦51%/勝率約51%、各モード構造、女王BATTLE約80%、運命の錬金術約64%。retrieved 2026-09-25
- https://p-johojima.jp/machine_spec/post-29936/ — 情報島＋。特図1/特図2主要振り分け、LT表記、複数回大当り合計出玉の注記。retrieved 2026-09-25
- https://hisshobon.com/news/102108/ — パチ&スロ必勝本。通常/右確率、ST100、3000→女王BATTLE→最終決戦→運命の錬金術→究極連鎖のフロー。retrieved 2026-09-25

confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
