更新日: 2026-09-10

## 現在地点
- recordCount: **1171**
- latestRecordAdded: **乙女マスターズ～空を翔る白き軌跡～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-05_otome-masters.md`
- chronologicalFrontier: **2018-02-05**
- frontierLatestMachine: **乙女マスターズ～空を翔る白き軌跡～ — No.1171**
- schema: **resetBehavior v0.7**
- status: **2018-02-05_GROUP_OPEN_2_OF_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1170 `パチスロ戦場のヴァルキュリア` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1170件 / chronologicalFrontier 2018-02-05 / 2/5群OPEN 1/3処理済み**。
- handoff指定の最古未処理No.1171候補 `乙女マスターズ～空を翔る白き軌跡～` をperformance core + resetBehavior v0.7で追加。
- K-Navi等の2/5群監査では残り `新世紀エヴァンゲリオン～まごころを、君に～2` が未処理。2/5群はまだCLOSEしない。

## No.1171 — 乙女マスターズ～空を翔る白き軌跡～
- path: `docs/real_machine_db/machines/2018-02-05_otome-masters.md`
- manufacturer: オリンピア
- releaseDate: 2018-02-05
- generation/system: 5.9号機 / A+RT / 周期CZ / 有利区間搭載
- formalModelName: `乙女マスターズ空を翔る白き軌跡／S1`
- certificationNumber: `7S1191`
- ボーナス合算: **1/177.6 → 1/133.7**
- RT初当たり: **1/276.4 → 1/258.0**
- ボーナス+RT合算: **1/108.1 → 1/88.1**
- 50枚ベース: **約34.1G**
- RT純増: **約0.2枚/G**
- RT基本: **20G+α / 平均約30G / ストック型**
- 基本獲得canonical: **白7約242枚 / 赤系BIG約209枚 / REG最大55枚**
- 天井: **なし**（通常時128G+α周期でCZ「乙女CHALLENGE」）

### payout conflict
- seriesA: **98.9 / 100.0 / 102.2 / 104.1 / 106.3 / 108.3%**（パチマガスロマガ、ちょんぼりすた、期待値見える化、5号機クロニクル）
- seriesB: **97.6 / 98.6 / 100.7 / 104.1 / 106.3 / 108.3%**（HAZUSE、導入直前系資料）
- 設定1～3は丸めを超える差。技術介入条件差等を明示する決定的説明は固定できなかったため、平均せず`CONFLICT_PAYOUT_RATE_SETTINGS_1_TO_3`として双方保持。

### bonus combined conflict
- 一撃/パチマガスロマガ: BIG合算 **1/295.2**。
- HAZUSE/ちょんぼりすた表示: **1/276.4**。
- 白7 1/1638.4、赤7 1/624.2、異色BIG 1/851.1の合算は約1/295.2で、一撃/パチマガ値と整合。1/276.4はRT初当たり設定1と同値。
- canonicalは1/295.2とし、1/276.4表示を`CONFLICT_BIG_COMBINED_295_2_VS_276_4`として破棄せず保存。

### basic payout conflict
- パチビー/ちょんぼりすた/スロパチネット/中古実機DB: **約242 / 約209 / 最大55枚**。
- 5号機クロニクル: **259 / 207 / 46枚**。
- 払出/純増等の定義差の可能性はあるが直接説明を固定できず`CONFLICT_BASIC_PAYOUT_LABELS`として別系列保持。

### resetBehavior v0.7
- 一撃の本機専用比較表で、**設定変更時は周期G数RESET / 内部状態RESET**を直接確認。
- 設定変更時の液晶開始は **タウンエリア50% / ゴルフエリア50%**。
- ちょんぼりすたは設定変更後内部状態を**ボーナス後と同じ状態**と整理。
- **純電源OFF→ONは周期G数CARRYOVER / 内部状態CARRYOVER**。液晶は設定変更時と同じくタウン/ゴルフ各50%。周期G数は液晶上では判別不能。
- 天井非搭載のためゲーム数天井/短縮天井はN/A。ただし128G+αのCZ周期カウンタは設定変更でリセット、純電断で引継ぎ。
- 設定据え置きを純電断と独立条件で直接明記した契約は再探索後も`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 有利区間搭載自体は確認したが、設定変更時の「有利区間そのもの」の機種固有直接契約は周期/状態RESETとは分離し`UNVERIFIED_AS_EXPLICIT_ADVANTAGEOUS_SECTION_CONTRACT_AFTER_RESEARCH`。
- 朝一判別材料として、ちょんぼりすたは**朝一すぐ1枚役こぼし後のCZ＝設定変更濃厚（例外あり）**、**朝一128G以内CZ＝据え置き濃厚**と整理。
- ガックン発生条件/確率、設定変更専用状態振り分け率/CZ率/初当たり率は検索語・資料系統変更後も固定できず`UNVERIFIED` / `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2018-02-05群監査
K-Navi全国導入カレンダー等で以下3機を確認。
1. `パチスロ戦場のヴァルキュリア` — **No.1170 完了**
2. `乙女マスターズ～空を翔る白き軌跡～` — **No.1171 完了**
3. `新世紀エヴァンゲリオン～まごころを、君に～2` — **未処理 / 次候補**

- 次回はNo.1172候補 `新世紀エヴァンゲリオン～まごころを、君に～2` をperformance core + resetBehavior v0.7で処理。
- その後2/5群をメーカー別一覧・別スペック・地域差で再監査し、漏れがなければ`2018-02-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`へ。

## 継続注意事項
- **鬼若弁慶**は2018-02-19で正式回収する。古い予定表記へ戻さない。
- `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。月単位No.1159として既回収。
- ノーマル/A+RT機のRT内部状態や成立済みボーナスの設定変更/純電断挙動を一般論から埋めない。
- 5.9号機の有利区間も一般論で機種固有挙動を補完しない。直接比較表・機種固有解析がある場合のみ確定する。
- 機械割/ボーナス合算等の資料差は平均化せずCONFLICT保持。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1171を再取得。
2. **1171件 / chronologicalFrontier 2018-02-05 / 2/5群OPEN 2/3処理済み** を正本として継続。
3. 最優先は **No.1172候補 `新世紀エヴァンゲリオン～まごころを、君に～2`**。
4. 同機を処理後、2/5群のメーカー別一覧・別スペック・地域差を再監査し、漏れがなければCLOSED。
5. その後2/12境界を確認し、2/19群へ時系列前進。`鬼若弁慶` は2/19で正式回収。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1171 乙女マスターズ～空を翔る白き軌跡～
- パチビー: https://www.pachibee.jp/machines/about/217120002
- HAZUSE 基本: https://hazuse.com/machine/pachislot/7S1191/genre/201/
- HAZUSE 天井/設定判別: https://hazuse.com/machine/pachislot/7S1191/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_otomem/3/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_otomem/1/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/137/h.php
- パチマガスロマガ詳細: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/137/h-1.php
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/51815/
- K-Navi: https://p-kn.com/slot/2938/
- 期待値見える化: https://slotjin.com/slot-tool/otomemasters/
- 5号機クロニクル: https://5goki.com/heiwa-olympia
- スロパチネット: https://slopachi-net.com/otomemastere
