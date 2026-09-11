更新日: 2026-09-11

## 現在地点
- recordCount: **1302**
- latestRecordAdded: **OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」 — No.1302**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-19_over-slot-ainz-ooal-gown.md`
- chronologicalFrontier: **2019-08-19**
- frontierLatestMachine: **OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」 — No.1302**
- schema: **resetBehavior v0.7**
- status: **2019_08_19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1301 `どき！すろ` を再取得して開始。
- `INDEX.md` は旧スナップショットのため、README規則どおり `LATEST_HANDOFF.md` + main実レコードを正本として継続。
- main検索で `AINZ OOAL GOWN絶対支配者光臨` の既存レコードなしを再確認。
- 直前handoff指定どおり **No.1302 `OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」`** を登録。
- 日刊スポーツ2019-08-09導入カレンダーでは2019-08-19パチスロ群が `どき！すろ / 花娘 / OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」` の3機種。3機種すべて収録済みとなったため、同日群を全メーカー/別型式/PB差の既知候補まで再監査し **CLOSED** とした。
- 遡及resetBehavior QAは `ニューハナハナ-30 → パチスロあっぱれ応援団 → ガオガオフェスティバルS → トレジャーパイレーツ` をGit追加順に確認。4機種とも既にv0.7相当の再探索記録があるため重複編集せず通過した。
- `COMPLETE_CORE` 等の性能完了判定は変更していない。reset QA状態は各レコードの既存状態をそのまま分離管理。

## No.1302 — OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」
- manufacturer: **オーイズミ**
- formalModel: **`SパチスロオーバーロードYX`**
- certificationNumber: **`9S0570`**
- releaseDate canonical: **2019-08-19**
- generation/system: **6号機 / AT / 疑似ボーナス経由バトルAT**
- payout: **97.8 / 99.4 / 101.4 / 103.9 / 106.3 / 110.1%**
- BIG合算: **1/265.1 / 239.2 / 227.9 / 201.0 / 198.4 / 156.2**
- AT初当たり: **1/737.6 / 611.9 / 639.6 / 499.5 / 535.2 / 352.2**
- baseGamesPer50: **約50G/50枚**
- netIncrease: **約2.8枚/G**
- basicPayout: **BIG 30G+α・約100枚 / AT初回52G+α**
- 最大天井: **786G+α、BIG / AT 50:50**

### resetBehavior v0.7 — No.1302
- settingChange: 当時解析複数系統で **天井RESET / 内部状態RESET（HAZUSEは低確スタート） / モード再抽選**。液晶は執務室。
- powerCycle: **天井 / 内部状態 / モード CARRY_OVER**。液晶は執務室。
- carryOver: 据え置きを純電断と独立して直接対照する機種固有資料は `UNVERIFIED_AS_DISTINCT_CONDITION`。
- gameCounterReset: 設定変更RESET / 純電断CARRY_OVER。
- ceilingAfterReset: 最大786G+α。設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 設定変更再抽選 / 純電断引継ぎ。通常BIG/AT後のモードA/B振り分けは公開されるが、設定変更時専用値とは断定できないため朝一数値へ流用しない。
- stateAfterReset: 設定変更RESET（低確開始） / 純電断引継ぎ。
- advantageousSection: 6号機有利区間対象。通常時ランプ消灯型で、据え置きでも朝一消灯とする当時攻略あり。ランプ単独で変更判別不可。設定変更/純電断それぞれの有利区間内部契約は `APPLICABLE_BUT_DIRECT_SECTION_RESET_CONTRACT_PARTIAL`。
- resetBenefits: 当時攻略は **リセット固有恩恵なし**。短縮天井・朝一専用高確等は確認できず。
- resetDetection: リセットでもガックンしない可能性が高いという当時攻略あり。ゾーン外・レア役なしでCZ/AT当選なら据え置き推測材料だが確定条件ではない。
- publicMorningNumbers: 設定変更専用モード振り分け / 朝一特定G以内当選率 / 恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2019-08-19群 — CLOSED
1. **花娘** — No.1300。
2. **どき！すろ** — No.1301。
3. **OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」** — No.1302。

日刊スポーツ導入カレンダーの同日パチスロ3機種と一致。PB系列差としてSオリスロ2AA派生の `タマどき！ / プレドキ！` は別導入時期候補として引き続き監査対象であり、2019-08-19群CLOSEDとは分離する。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 9〜10月候補、未登録。
6. プレドキ！ — 導入法人・時期・独立レコード要否を当時資料で追加監査、未登録。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- No.1299 BELLE CITY
- Sオリスロ2AA系列の遡及補完継続中のため最終CLOSED判定は保留。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- 今回確認済み: `2007-02_new-hanahana-30.md` / `2007-02-25_appare-ouendan.md` / `2007-03-04_gaogao-festival-s.md` / `2007-03-11_treasure-pirates.md`。
- 4件ともresetBehavior再探索記録が既存のため重複編集せず通過。
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）** を確認し、既QAなら次のGit追加順へ進む。reset欠損/旧形式なら性能コアを不用意に崩さずreset側だけ補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1302を再取得。
2. 次の時系列境界 **2019-09-02群** を再監査。
3. 既知候補 **`SLOT劇場版魔法少女まどか☆マギカ［新編］叛逆の物語`（メーシー）No.1303候補** を最初に既存検索・導入日再確認して処理。
4. 同日候補 **`パチスロ TIGER ＆ BUNNY`（山佐）** も漏れ防止対象。複数導入カレンダーでは2019-09-02導入を確認済み。
5. 性能コア + v0.7 resetBehaviorを公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで横断し、欠損は十分な再探索後のみUNVERIFIED、競合は平均せずCONFLICT。
6. 遡及QAは **革命戦士長州力** から再開。
7. Sオリスロ2AAの `タマどき！ / プレドキ！` は時系列到達時または遡及監査で必ず回収する。

## 主要出典 — 取得日 2026-09-11
### No.1302 / 2019-08-19群
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201908090000270.html
- HAZUSE: https://hazuse.com/machine/pachislot/9S0570/
- 一撃 機種概要: https://1geki.jp/slot/s_overslot/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_overslot/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/8998
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/overlord-tennjou/

### 次時系列候補
- 日刊スポーツ導入カレンダー（2019-08-09時点）: 9/2 `SLOT劇場版魔法少女まどか☆マギカ［新編］叛逆の物語`
- 当時導入予定一覧 / 一撃 / 山佐系解析: 9/2 `パチスロ TIGER ＆ BUNNY`
