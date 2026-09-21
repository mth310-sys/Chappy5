# e 新・必殺仕置人 超斬撃99

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: e 新・必殺仕置人 超斬撃99
modelName: e新・必殺仕置人～超斬撃99ver．～KA1
manufacturer: 京楽産業. / KYORAKU
releaseDate: 2025-06-02
modelType: 甘デジ / スマパチ / LT搭載

gameType: 1種2種混合。下位RUSHはST7回+残保留4個、LTは大当りまたは終了抽選当選まで継続する転落型。

jackpotProbability:
- 通常時: 約1/99.9
- 真仕置CRASH中: 約1/12.6
- 超斬撃RUSH中大当り: 約1/14.4
- 超斬撃RUSH終了確率: 約1/99.9

initialPayout:
- 3R 約240個払い出し: 100%

totalPayoutDistribution:
- 通常時: 3R約240個 + 真仕置CRASH 50% / 3R約240個 + 通常 50%
- 真仕置CRASH中: 10R約800個 + 高坂超決戦 約50% / 10R約800個 + 真仕置CRASH 約50%。高坂超決戦の勝率約50%、敗北時は真仕置CRASH継続。
- 経路を結果ベースで整理する解析資料では、真仕置CRASH中大当りの約25%が10R約800個+LT、約75%が10R約800個+下位RUSH。これは「高坂超決戦発生約50% × 勝率約50%」と整合するが、総初当り基準LT到達率には換算しない。
- 超斬撃RUSH中: 10R約800個 + 超斬撃RUSH 100%
- 解析資料には実獲得目安として10R約700個 / 3R約210個の表記もある。払い出しと実獲得の定義差でありCONFLICTではない。

rushEntryRate: 真仕置CRASH 50%
rushContinuationRate: 真仕置CRASH 約60%（ST7回+残保留4個。残保留4個の引き戻し約28.1%を含む）

ltName: 超斬撃RUSH
ltEntryRoute:
- 通常初当り50%で真仕置CRASHへ。
- 真仕置CRASH中に図柄揃いすると約50%で高坂超決戦が発生。
- 高坂超決戦の勝率約50%。勝利でLT「超斬撃RUSH」へ。敗北時は真仕置CRASH継続。
- 解析資料ではエピソードBONUS経由でも超斬撃RUSHへ突入するとされる。
ltEntryRate:
- 真仕置CRASH中大当り基準: 約25%がLT移行（結果ベース振り分け資料）。
- 高坂超決戦: 発生約50% / 勝率約50%。
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH。公開経路値から独自合算しない。
ltContinuationRate: 約91%（RUSH終了時の残保留4個による引き戻し約25.0%を含む）
ltPayoutStructure: 超斬撃RUSH中大当りは10R約800個払い出し100%、大当り後はLT継続。大当り確率約1/14.4、終了確率約1/99.9。

timeShortening:
- 真仕置CRASH: ST7回 + 残保留4個
- 超斬撃RUSH: 大当りまたは終了抽選当選まで（実質次回まで表記あり）+ 終了後残保留4個

cTimeOrSpecialSystems: 特記すべきCタイム公開情報なし。LTは真仕置CRASH中の高坂超決戦勝利等で発動。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（約1/99.9）
   ↓ 初当り 3R約240個
   ├─ 50% → 通常時へ
   └─ 50% → 真仕置CRASH（約1/12.6、ST7回+残保留4、継続約60%）
                ↓ 図柄揃い
                ├─ 約50% → 10R約800個 + 真仕置CRASH継続
                └─ 約50% → 10R約800個 + 高坂超決戦
                              ├─ 敗北（約50%）→ 真仕置CRASH継続
                              └─ 勝利（約50%）→ LT「超斬撃RUSH」
                                               ↓
                                  大当り約1/14.4 / 終了約1/99.9
                                  継続約91% / 大当りALL10R約800個
                                               ↓
                                  終了抽選当選 → 残保留4個 → 通常へ

notes:
- 2025年6月2日全国導入はKYORAKU公式NEWSで直接確認。
- 型式名は業界記事・HAZUSE・一撃で `e新・必殺仕置人～超斬撃99ver．～KA1` を確認。
- KYORAKU公式は「甘デジ×極近LT」、LT正式名称「超斬撃RUSH」、高坂超決戦勝率約50%、LT継続約91%、LT中ALL800個を明示。
- 遊技通信/P-WORLD記事に「2025年4月7日より導入予定」とする明らかに公式発表（6月2日）と食い違う日付記載があるが、KYORAKU公式の2025-05-08予告と2025-06-02全国導入開始告知、複数解析DBが6月2日で一致するためcanonical releaseDateは2025-06-02。記事の日付は導入日誤記として採用しない。
- 2025年後発 `e新・必殺仕置人 超斬撃199` は別スペック。混同しない。

sources:
- https://www.kyoraku.co.jp/news/detail/825 — KYORAKU公式、2025-05-08。6/2登場、LT名称/経路/継続/出玉。
- https://www.kyoraku.co.jp/news/detail/828 — KYORAKU公式、2025-06-02。全国導入開始、LT名称/勝率/継続/出玉。
- https://www.p-world.co.jp/machine/database/10281 — P-WORLD。確率、RUSH構造、継続、出玉、ゲームフロー。
- https://hazuse.com/en/machine/pachinko/4P1567/ — HAZUSE。型式、導入日、メーカー、継続率。
- https://hisshobon.com/machineinfo/97784/ — 必勝本。確率、初当り、RUSH/LT構造、払い出し、遊タイム非搭載。
- https://1geki.jp/pachinko/e_shiokinin_99/ — 一撃。型式、確率、RUSH/LT構造、払い出し/実獲得。
- https://1geki.jp/pachinko/e_shiokinin_99/54/ — 一撃。LT詳細。
- https://nana-press.com/kaiseki/machine/983/29758/ — なな徹。確率、内訳、高坂超決戦発生率/勝率、LT、遊タイム。
- https://chonborista.com/pachinko/kyoraku/237196/ — ちょんぼりすた。結果ベースの真仕置CRASH中 LT25% / 下位75%振り分け。

confidence:
- machine identity / release / LT existence: OFFICIAL
- core spec / LT structure: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- detailed distributions: ANALYSIS_HIGH (multiple-source consistent)

missingFields:
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH

conflicts:
- none. 2025-04-07導入予定とする単一業界記事の日付は、メーカー公式の6/2導入予告・全国導入開始告知および複数DBの一致により誤記扱い。数値競合としては扱わない。
