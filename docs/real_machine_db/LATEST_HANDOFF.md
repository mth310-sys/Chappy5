更新日: 2026-09-11

## 現在地点
- recordCount: **1280**
- latestRecordAdded: **プレミアムハナハナ-30**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-22_premium-hanahana-30.md`
- chronologicalFrontier: **2019-04-22**
- frontierLatestMachine: **プレミアムハナハナ-30 — No.1280**
- schema: **resetBehavior v0.7**
- status: **2019-04-22_GROUP_OPEN_2_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1279を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoff指定の2019-04-22群2番目 `プレミアムハナハナ-30` をNo.1280として性能コア + resetBehavior v0.7で登録。
- 公式2019年製品一覧、P-WORLD機種DB、当時業界記事、複数解析で2019-04-22導入を固定。
- 一部解析ページの `2018-04-22` は他資料群と矛盾する明白な年誤記として qualityNotes に保持。
- 遡及QAは `2007-02_playboy-30.md` を資料系統・検索語を変えて再探索し、性能側coreStatusを崩さず resetBehaviorQA を `PARTIAL_RESEARCH_EXHAUSTED` に更新。

## No.1280 — プレミアムハナハナ-30
- manufacturer: **パイオニア**
- formalModel: **`プレミアムハナハナ/DX-30`**
- certificationNumber: **`8S0028`**
- generation/system: **5.9号機 / ノーマルA / 完全告知 / 30Φ**
- releaseDate: **2019-04-22**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- BIG: **1/299 / 1/290 / 1/278 / 1/265 / 1/252 / 1/234**
- REG: **1/496 / 1/468 / 1/436 / 1/402 / 1/370 / 1/334**
- 合算: **1/186 / 1/179 / 1/170 / 1/159 / 1/150 / 1/138**
- 機械割: **96 / 98 / 101 / 104 / 107 / 112%**
- baseGamesPer50: **36.8G**
- basicPayout: **BIG最大312枚 / REG最大130枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 設定変更後最初のBIGでTOPパネル（スポットライトパネル）が色変化する傾向を一撃の実戦調査で確認。ただし設定変更時の内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置き時の本機固有内部状態/告知状態引継ぎは `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: 純電断の本機固有内部状態/告知状態引継ぎも `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。据え置き一般論から補完しない。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- mode/stateAfterReset: 朝一専用モード・状態振り分けの公開契約/数値は未確認。
- advantageousSectionReset: ノーマルタイプで有利区間を用いるゲーム性ではないため `NOT_USED`。
- resetBenefits: 初回BIG後TOPパネル色変化傾向は変更判別材料。短縮天井/初当り優遇等は確認なし。
- resetDetection: ガックンが効くとする実戦資料あり。ただし非常に分かりづらいとの注意。発生率の公開確定値なし。
- numericResetData: TOPパネル色変化率、ガックン率、朝一当選率等は `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- processedThisRun: **パチスロPLAYBOY-30**
- result: **coreStatus PARTIAL維持 / resetBehaviorQA PARTIAL_RESEARCH_EXHAUSTED**
- 30Φ版はRT非搭載。設定変更/据え置き/純電断別の内部状態・成立/告知状態、ガックン等は資料系統を変えても直接契約を固定できず、25Φ版や一般論から補完していない。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- Git追加履歴上、PLAYBOY-30追加後の次の実機レコード追加は PIKASLO（ピカスロ）であることをcommit履歴から確認。

## 2019-04-22群 — OPEN
### 登録済み
- No.1279 SLOTギャラガ
- No.1280 プレミアムハナハナ-30

### 未処理確認済み
1. **パチスロ黄門ちゃまV 女神盛-MEGAMORI-** — オリンピア — 2019-04-22

### 群監査メモ
- 4/22群は直前監査で3機確認済み。残り1機処理後に全メーカー/別型式/別スペック/PB/地域差まで横断監査してCLOSED判定する。

## 今回のコミット
- No.1280追加: `c6cd91a9416b0e259e23bc4bf7d7d1a6e3c8f944`
- PLAYBOY-30 reset QA: `782cd8836a625d1fb56e6450c8832daf76b3e56b`

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1280を再取得。
2. **2019-04-22群 `パチスロ黄門ちゃまV 女神盛-MEGAMORI-` をNo.1281候補として処理。**
3. 4/22群を全メーカー/別型式/別スペック/PB/地域差まで横断監査してCLOSED判定。
4. 遡及QAは **`2007-02_pikaslo.md`** から再開。

## 主要出典 — 取得日 2026-09-11
### プレミアムハナハナ-30
- パイオニア公式2019製品一覧: https://www.slot-pioneer.co.jp/products/2019.html
- P-WORLD: https://www.p-world.co.jp/machine/database/8896
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/10793/greenbelt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/128/h.php
- 一撃 設定変更/天井: https://1geki.jp/slot/s_phanahana/3/
- 一撃 ベース: https://1geki.jp/slot/s_phanahana/4/
- モゲスロ: https://moge-site.com/archives/21845

### PLAYBOY-30 QA
- グリーンべると: https://web-greenbelt.jp/00004967/
- pacnk: https://pacnk.com/slot/tools/sh_pureiboi2007b.html
- こだわり山佐の館: https://plaza.rakuten.co.jp/jognoyamasa/2115/
- K-Navi当時業界記事: https://p-kn.com/topics/news/124/
