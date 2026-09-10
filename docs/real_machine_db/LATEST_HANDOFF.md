更新日: 2026-09-11

## 現在地点
- recordCount: **1291**
- latestRecordAdded: **パチスロ ガールズ＆パンツァーG ～これが私の戦車道です！～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-07-08_girls-und-panzer-g.md`
- chronologicalFrontier: **2019-07-08**
- frontierLatestMachine: **ガールズ＆パンツァーG — No.1291**
- schema: **resetBehavior v0.7**
- status: **2019-07-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1290を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffがNo.1290まで進行済みだったため、過去チャット上の古い再開地点には戻らずNo.1291から継続。
- No.1291 `パチスロ ガールズ＆パンツァーG ～これが私の戦車道です！～` を性能コア + resetBehavior v0.7で登録。
- 2019-07-08群は当時導入カレンダーを再監査し、スロットは本機のみを固定。別型式L4は検定通過を確認したが独立販売スペックの根拠を固定できず重複登録せず、群をCLOSED。
- 2019-07-09〜07-21境界を先行監査し、次の確定スロット導入群として2019-07-22 `パチスロ鉄拳4` を次候補に保持。

## No.1291 — ガールズ＆パンツァーG
- manufacturer: **オリンピア（平和グループ）**
- formalModel: **`Sガールズ＆パンツァーG/LA1`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **6号機 / AT / CZ・周期抽選 / 自力バトル継続型**
- releaseDate canonical: **2019-07-08**
- regional early introduction: **2019-07-01（一部地域）**
- 機械割: **97.7 / 99.2 / 100.0 / 102.5 / 105.3 / 110.1%**
- AT初当り: **1/461.2 / 441.7 / 433.9 / 405.0 / 379.7 / 328.5**
- baseGamesPer50: **約50.4G**
- AT純増: **約2.6枚/G**
- 1周期: **平均約48G**
- ゲーム数AT天井なし。CZ5周期連続非当選後、6周期目到達でCZ確定。

### resetBehavior v0.7
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- settingChange: 周期をリセット、あんこうカウンター内部300pt開始、パンツァーハイ関連状態リセット、約30.4%で内部CZ開始。
- carryOver / purePowerCycle: 周期天井、カウンター、内部状態、有利区間および有利区間ランプを引き継ぐ。
- advantageousSection: 設定変更で非有利区間へ移行しランプ消灯。据え置き/純電断は引継ぎ。
- resetBenefit: 約30.4%で内部CZ。内部CZは液晶通常画面のまま32G継続。
- resetDetection: 朝一有利区間ランプ消灯=変更濃厚、点灯=据え置き濃厚。ただし対策/前日状態による例外があるため確定条件にはしない。液晶G数とデータ表示器のズレも判別材料。
- 1G内部CZ判別: 必勝本で逆押し純正1枚役判別手順を確認。
- publicMorningNumbers: **内部CZ約30.4% / 32G**。内部CZ非当選時でも**実戦上3周期以内CZ**、その条件からCZ当選までの期待収支**+549円**という必勝本実戦値をメーカー値と分離して保持。

## qualityNotes / conflicts
- 導入日は多数資料が2019-07-08、一部地域7/1先行。日刊スポーツ当時カレンダーも7/1欄に掲載。全国本格導入をcanonical 7/8、7/1を `REGIONAL_EARLY_INTRODUCTION` として保持。
- `Sガールズ＆パンツァーG/L4` と `/LA1` の双方が検定通過。市場導入資料・実機流通表記はLA1を確認。L4の独立販売性能を固定できず別レコード化しない。
- 検定番号は型式・メーカー・シリーズ・検定語を変えて再探索したが高信頼資料で固定できず。
- 内部CZ率は精密値30.4%と「約32%」表記がある。概数差と判断し30.4%を主値にし、平均しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`（PSアドリブ王子）から再開**。既にresetBehavior収録済みなら重複編集せず次レコードへ進む。
- 既存 `COMPLETE_CORE` は不用意に崩さず、reset QAを別管理する。

## 2019-07-08群 — CLOSED
- No.1291 パチスロ ガールズ＆パンツァーG ～これが私の戦車道です！～

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1291を再取得。
2. 2019-07-09〜07-21境界を再確認後、**2019-07-22 `パチスロ鉄拳4` をNo.1292候補**として性能コア + resetBehavior v0.7を本調査。
3. 同日群を全メーカー / 別型式 / 別スペック / PB / 地域差まで監査。
4. 遡及QAは `2007-02_ps-adlib-ouji.md` から再開。既収集なら重複せずGit追加順の次レコードへ進む。
5. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### ガールズ＆パンツァーG
- 平和公式 NEWS 2019: https://www.heiwanet.co.jp/news/2019/
- パチビー プレス発表会: https://www.pachibee.jp/pparticles/view/1151
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001180/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-26855/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/85072/
- スロット解析.com: https://slotkaiseki.com/garupang_spec/
- すろかい: https://slotkaiseki.hatenablog.com/entry/garupang
- スロパチクエスト: https://www.slopachi-quest.com/article/girls-und-panzer-g-tennjou/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3369/1/83387
- P-WORLD: https://www.p-world.co.jp/machine/database/8957
- 2019新台カレンダー: https://pachinkopachisro.com/archives/52807194.html
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201905240000339.html

### 次候補 — 鉄拳4
- K-Navi: https://p-kn.com/slot/3244/
- P-WORLD: https://opt.p-world.co.jp/machine/database/8946
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/86332/
