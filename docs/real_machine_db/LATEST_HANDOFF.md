更新日: 2026-09-10

## 現在地点
- recordCount: **1233**
- latestRecordAdded: **アレックス**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-18_alex.md`
- chronologicalFrontier: **2018-09-18**
- frontierLatestMachine: **アレックス — No.1233**
- schema: **resetBehavior v0.7**
- status: **2018-09-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1232を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、`LATEST_HANDOFF.md` + main実レコードを正本としてNo.1232の次から継続。
- main指定の次未処理 `アレックス` をNo.1233として登録。
- HAZUSEで型式 `アレックスAE` / 検定番号 `8S0123` / アクロス / 導入2018-09-18を同一ページで確認。
- K-Navi、パチビー、必勝本、ちょんぼりすた、すろぱちくえすと、一撃でも2018-09-18導入と性能コアを横断照合。
- 通常機械割97.9/99.8/102.6/106.1%、完全攻略100.2/102.1/105.0/108.5%。BIG 1/292.6→1/264.3、REG 1/381.0→1/309.1、合算1/165.5→1/142.5。
- ベースは約34.7～36.4G/50枚、BIG最大335枚、REG最大116枚、通常ゲーム数天井なし、RT/ART/ATなし。
- resetBehaviorは設定変更時 `ボーナス・告知ランプを全てクリア`、純電源OFF→ON時は通常時のクレジット/サウンド変化条件をクリアする一方、ボーナス中ならボーナス状態を保持して復帰する直接資料を固定。
- 朝一リセット恩恵は「存在しない」とする解析資料を確認。リセット専用天井/モード/当選率等の数値なし。
- 据え置きだけを純電源OFF→ONから独立させた本機固有の全挙動、ガックン/初期出目の確定条件・発生率は再探索後も固定できず、一般論で補完しない。
- 2018-09-18群について、パチビー/K-Navi/複数解析の導入日横断検索を再監査。登録済み6機種以外のパチスロ同日導入を今回の資料群から追加確認できず、群をCLOSED判定。
- 2018-09-24/25境界も検索したがホール導入パチスロ新規候補を固定できず、次の明確な導入群として2018-10-01 `HEY！鏡` を複数資料で確認。
- 遡及QAカーソル `2006-09_takenaka-naoto-taikoki.md` を再読。既に2026-09-02時点でv0.7再探索済みで、設定変更/据え置き/純電断時のRT残G等は `UNVERIFIED_AFTER_RESEARCH`。今回新規の確定差分は得られなかったため性能値を無駄にやり直さず、次回以降の連続QAで隣接レコードへ進める。

## No.1233 — アレックス
- manufacturer: **アクロス**
- releaseDateCanonical: **2018-09-18**
- formalModelName: **アレックスAE**
- certificationNumber: **8S0123**
- generation/system: **5.9号機 / ノーマルAタイプ / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRateNormal: **97.9 / 99.8 / 102.6 / 106.1%**
- payoutRateFull攻略: **100.2 / 102.1 / 105.0 / 108.5%**
- BIG: **1/292.6 / 1/287.4 / 1/277.7 / 1/264.3**
- REG: **1/381.0 / 1/356.2 / 1/331.0 / 1/309.1**
- bonusTotal: **1/165.5 / 1/159.1 / 1/151.0 / 1/142.5**
- baseGamesPer50: **約34.7～36.4G**
- netIncrease: **NOT_APPLICABLE_NORMAL_TYPE**
- basicPayout: **BIG最大335枚 / REG最大116枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **ボーナス・告知ランプを全てクリア**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **通常時はクレジット/サウンド変化条件をクリア。ボーナス中は状態保持でボーナス中のまま復帰**。
- gameCounterReset: **NOT_APPLICABLE_NO_CEILING_COUNTER**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **AT/ART/RT非搭載。設定変更時ランプ/ボーナスクリア、電断復帰時のボーナス中保持を直接確認**。
- advantageousSection: **NONE_CONFIRMED_AFTER_RESEARCH_FOR_NORMAL_TYPE**。
- resetBenefits: **朝一恩恵なし**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **ガックン/初期出目の本機固有確定条件はUNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-09-18群監査
### 登録済み
- No.1228 パチスロ ベン・トー ～狼たちの夜～
- No.1229 パチスロ南国育ち～蝶々ver～30Φ
- No.1230 パチスロ南国育ち～蝶々ver～25Φ
- No.1231 パチスロ ロックマン アビリティ 史上最大の試練
- No.1232 パチスロ 闇芝居
- No.1233 アレックス

### 群判定
- `2018-09-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 追加導入候補が将来一次資料等で見つかった場合のみ遡及追加する。

## 次の時系列候補
- **2018-10-01 HEY！鏡** — 大都技研。K-Navi、ちょんぼりすた、すろぱちくえすと等で2018-10-01導入一致。
- 6号機AT第一弾として複数資料で確認。
- 次回はNo.1234候補として性能コア＋resetBehavior v0.7を収集し、同日群をOPENして全メーカー/別型式/PB/地域差監査を開始する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_takenaka-naoto-taikoki.md**（竹中直人のパチスロ太閤記）を再読・既存QA確認。
- latestRetroQaResult: **NO_NEW_DELTA_EXISTING_V0_7_RESEARCH_ALREADY_EXHAUSTED**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次のQAカーソルはmainの2006-09以降の実ファイル順を確認して隣接レコードへ進める。性能コアは無駄に再収集しない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。一般論を本機固有契約へ昇格しない。
- 同一シリーズでも別型式/別検定番号は単独資料照合なしに性能・resetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 既存COMPLETE_CORE/PARTIALの性能側判定とresetBehavior QA状態は分離する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1233を再取得。
2. **1233件 / chronologicalFrontier 2018-09-18 / `2018-09-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-09-19～09-30境界を短く再監査し、漏れがなければ **2018-10-01群OPEN**。
4. 次の先行候補は **`HEY！鏡`**。No.1234候補として性能コア＋resetBehavior v0.7を収集。
5. 遡及QAは2006-09以降の隣接レコードをmain実ファイル順で確認して継続。

## 主要出典 — 取得日 2026-09-10
### No.1233 アレックス
- HAZUSE: https://hazuse.com/machine/pachislot/8S0123/
- ちょんぼりすた: https://chonborista.com/slot/acros-slot/62910/
- K-Navi: https://p-kn.com/slot/3080/
- パチビー: https://www.pachibee.jp/machines/lecture/218080002
- すろぱちくえすと: https://www.slopachi-quest.com/article/arex/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3228/1/70720
- 一撃: https://1geki.jp/slot/s_arex/

### 次回候補 HEY！鏡
- K-Navi: https://p-kn.com/slot/3090/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/61837/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hey-kagami/
