更新日: 2026-09-10

## 現在地点
- recordCount: **1213**
- latestRecordAdded: **ストリートファイターV パチスロエディション**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-23_street-fighter-v-pachislot-edition.md`
- chronologicalFrontier: **2018-07-23**
- frontierLatestMachine: **ストリートファイターV パチスロエディション — No.1213**
- schema: **resetBehavior v0.7**
- status: **2018-07-23_GROUP_OPEN_1_MACHINE_PROCESSED_AUDIT_PENDING**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1212を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- mainは並行進捗により1212件 / No.1212「雷雷弁慶」まで前進済みだったため、古い再開地点を破棄して最新handoffを採用。
- handoff指定の最優先候補「ストリートファイターV パチスロエディション」を7/16〜7/23境界機として監査・登録。
- 導入日はすろぱちくえすと2018-07-16に対し、型式・検定番号付きHAZUSE、K-Navi、ちょんぼりすたが2018-07-23で一致。`CONFLICT_RELEASE_DATE_2018_07_16_VS_2018_07_23`を保持し、canonicalを2018-07-23とした。
- 性能コアはパチマガスロマガ、HAZUSE、すろぱちくえすと、業界記事、P-WORLDで照合。設定別PAYOUT、BIG合算、ART初当たり、A+ART合成、約34G/50枚、ART約1.5枚/G、BIG204枚、ART1セット30G+αを固定。
- グリーンべるとの「ART初当たり1/232.0〜1/166.2」は他解析の「ボーナス+ART合成」と数列が一致するため、ラベル混同候補としてCONFLICT保持。ART単独は1/379.90〜1/371.67。
- ちょんぼりすたの設定4 BIG 1/450.1は、パチマガスロマガ・すろぱちくえすと等の1/420.1と競合するためsource typo suspectedとして保持しcanonicalは1/420.10。
- resetBehaviorではパチマガスロマガ/HAZUSE/ちょんぼりすたを横断し、朝一3G以内（レア小役非成立条件）のステージチェンジ率を設定変更後と据え置きで取得。対応する全セルで設定変更後が据え置きの10倍。
- 設定変更時の内部状態、純電源OFF→ON時の内部状態、本機固有の有利区間処理は検索語・型式・メーカー・シリーズ名を変えて再探索したが、疑問符なしの直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。5.9号機一般論では補完しない。
- 天井は非搭載。短縮天井は`NOT_APPLICABLE`。ガックン公開率は見つからず、朝一ステージチェンジ数値を主要変更判別契約として保存。

## No.1213 — ストリートファイターV パチスロエディション
- manufacturer: **エンターライズ**
- releaseDateCanonical: **2018-07-23**
- releaseDateConflict: **2018-07-16 / 2018-07-23**
- formalModelName: **ストリートファイターV／ZS**
- certificationNumber: **7S1716**
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.82 / 99.48 / 101.38 / 103.84 / 106.61 / 110.48%**
- BIG合算: **1/595.78 / 1/528.52 / 1/474.90 / 1/420.10 / 1/368.20 / 1/300.60**
- ART初当たり: **1/379.90 / 1/379.20 / 1/378.70 / 1/375.77 / 1/374.86 / 1/371.67**
- ボーナス+ART合成: **1/231.98 / 1/220.79 / 1/208.01 / 1/198.37 / 1/185.74 / 1/166.18**
- base: **約34G/50枚**
- ART純増: **約1.5枚/G**
- BIG: **204枚**
- ART: **1セット30G+α**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 朝一1〜3Gステージチェンジ率に設定変更専用値あり。設定別・G別数値はNo.1213レコードに保存。
- carryOver: 同条件の据え置き値あり。各対応セルで設定変更値の1/10。
- powerOFF→ON: 据え置きから独立した確定的内部状態契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 通常天井なし。短縮天井`NOT_APPLICABLE`。
- mode/state: 朝一専用出玉モード振り分けは未固定。内部状態比較表は疑問符付きのため確定へ昇格しない。
- advantageousSection: 本機固有設定変更/据え置き/純電断契約 `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits: 天井短縮・初当たり優遇は確認なし。変更判別上は朝一ステチェン率10倍差が主要。
- resetDetection: レア小役非成立の朝一3G以内ステージチェンジ。1G目は設定2以上、2G目は偶数、3G目は設定4以上の可能性アップ。ガックン率は未固定。

## 2018-07-16〜23境界監査
### 登録済み
- No.1212 雷雷弁慶 — canonical 2018-07-17、導入日CONFLICTあり。
- No.1213 ストリートファイターV パチスロエディション — canonical 2018-07-23、7/16 vs 7/23 CONFLICTあり。

### 次の既知候補
- ハイスクール・フリート
- マイジャグラーIV

### 群判定
- `2018-07-23_GROUP_OPEN_1_MACHINE_PROCESSED_AUDIT_PENDING`
- 上記既知候補と同日全メーカー/別スペック/PB/地域差監査が終わるまでCLOSEしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_cranky-condor-x.md**（クランキーコンドルX）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。性能コア判定は維持し、reset側のみ別管理。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_rumble-roses.md`（ランブルローズ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- next cursor evidence: クランキーコンドルX追加commit `c48cbb8f2e0ed07aeb54e9b94722c182fe222871` の直後の実機追加commit `960c357b2d04159358c182db55d996531bc1bfa7` がランブルローズ。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 導入日競合機は最古候補日を飛ばさず境界群として監査し、CONFLICTを保持する。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1213を再取得。
2. **1213件 / chronologicalFrontier 2018-07-23 / 7/23群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **ハイスクール・フリート**を最優先候補として既存レコード重複確認→性能コア+resetBehavior v0.7収集。
4. 続いて **マイジャグラーIV** を処理し、2018-07-23同日全メーカー/別スペック/PB/地域差を横断監査してから群CLOSE判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_rumble-roses.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1213 ストリートファイターV パチスロエディション
- HAZUSE: https://hazuse.com/machine/pachislot/7S1716/
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/18/h-1.php
- パチマガスロマガ ステージチェンジ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/18/en04.php
- パチマガスロマガ 50枚ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/18/c-1.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/street-fighter-v/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/60006/
- K-Navi: https://p-kn.com/slot/3030/
- グリーンべると: https://web-greenbelt.jp/00010566/
- PiDEA X: https://www.pidea.jp/articles/%E5%8B%9D%E3%81%A4%E3%81%BB%E3%81%A9%E6%9C%89%E5%88%A9%E3%81%AB%EF%BC%81%E3%80%8C%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%82%BF%E3%83%BC%E2%85%A4%E3%80%8D%EF%BC%8F%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%A9%E3%82%A4%E3%82%BA
- P-WORLD: https://www.p-world.co.jp/machine/database/8699
