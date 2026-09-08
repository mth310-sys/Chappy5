更新日: 2026-09-08

## 現在地点
- recordCount: **1005**
- latestRecordAdded: **パチスロBLOOD+ 二人の女王**（タイヨーエレック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-05_blood-plus-futari-no-joou.md`
- chronologicalFrontier: **2016-09-05**
- frontierLatestMachine: **パチスロBLOOD+ 二人の女王**（タイヨーエレック）
- schema: **resetBehavior v0.7**
- status: **2016-09-05_GROUP_OPEN**

## 今回の同期 / 境界監査
- 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1004 `2016-08-22_senki-zesshou-symphogear.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり LATEST_HANDOFF + 実レコード + 最新main を進捗正本として使用。
- handoff候補だった **仄暗い水の底から（藤商事）**は機種単独再監査で `CR仄暗い水の底からFPMZ`（パチンコ、検定6P0485、2016-08-22）と確定。本パチスロDB本線から除外。
- 同日混入疑いの **鉄拳2**も `CR鉄拳2 -闘神ver-`（パチンコ）、**Aさくらももこ劇場 ミラくるずきんちゃん**も `CR/CRAさくらももこ劇場 ミラくるずきんちゃん`（パチンコ）と確認し本線除外。
- 2016-08-22の実パチスロ登録済み5機（SLOTデッド オア アライブ5 / クイーンジャックネオ / クレアの秘宝伝～眠りの塔とめざめの石～ / スーパープラネットデラックス / パチスロ戦姫絶唱シンフォギア）で **2016-08-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2016-08-29 ALL7掲載の「ドラム黄門ちゃま またまたゴチでやんす!」はパチンコ側。今回の検索範囲で08/23〜09/04の全国導入パチスロを固定できず、次の確認済みパチスロ日付 **2016-09-05**へ前進。

## No.1005 — パチスロBLOOD+ 二人の女王
- manufacturer: **タイヨーエレック**
- releaseDate: **2016-09-05**
- formalModelName: **パチスロBLOOD＋ 二人の女王／XA**
- certificationNumber: **6S0606**
- generation/system: **5号機 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.8 / 98.7 / 100.7 / 104.5 / 108.2 / 112.2%**。
- ボーナス合算: **1/455.1 / 448.8 / 436.9 / 420.1 / 404.5 / 381.0**。
- ART初当たり: **1/398.0 / 382.5 / 356.1 / 315.3 / 270.9 / 231.1**。
- ボーナス+ART合算: **1/212.3 / 206.5 / 196.2 / 180.1 / 162.2 / 143.9**。
- ベース: **約34G/50枚**（公開整理値33.97〜34.29G/50枚）。
- ART「BLOOD CHANCE+」: **約1.5枚/G、1セット50G+α**。ボーナス込み参考約1.8枚/G。
- BLOOD BONUS / Secret Story Bonus: canonical **約204枚**、二人の女王モード **約28枚**。
- 一部資料のBIG 208枚表記は `CONFLICT_BIG_PAYOUT_204_VS_208` として平均せず保持。
- 規定ゲーム数到達型のART天井は **非搭載**。

### resetBehavior v0.7
- 設定変更: **DOAモード再抽選 / 内部状態再抽選 / 朝一沖縄ステージ**。
- 据え置き: **DOAモード・内部状態CARRYOVER**。
- 純電源OFF→ON: **DOAモード・内部状態CARRYOVER**。
- 規定G数天井は非搭載のため gameCounterReset / ceilingAfterReset は **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- DOAモードは通常時5段階A〜Eで、ボーナス/ART当選まで転落しない。最上位EではBLOOD EYE出現時の約50%でDOA。
- 設定変更時DOAモードA〜Eの具体振り分けは、検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時内部状態振り分け（低確/通常/高確）は公開済み:
  - 設定1: **89.0 / 9.4 / 1.6%**
  - 設定2: **85.1 / 13.3 / 1.6%**
  - 設定3: **81.2 / 17.2 / 1.6%**
  - 設定4: **76.6 / 21.1 / 2.3%**
  - 設定5: **71.1 / 25.0 / 3.9%**
  - 設定6: **61.7 / 32.8 / 5.5%**
- 通常以上開始率は **11.0 / 14.9 / 18.8 / 23.4 / 28.9 / 38.3%**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: 当時解析は **設定変更時ガックン有効 / 純電断のみ無効**と整理。ただしメーカー保証ではないため `GACKUN_REPORTED_USEFUL_NOT_MANUFACTURER_GUARANTEE`。
- 一撃2016-09-14時点では設定変更/電断のモード・状態等が「調査中」で、後続解析で再抽選/引継ぎが公開。数値競合ではなく情報成熟時差として保持。

## 2016-09-05群 — OPEN
登録済み:
- **パチスロBLOOD+ 二人の女王**（タイヨーエレック）

次の確認済み候補:
- **パチスロ ロストプラネット2**（オリンピア） — 2016-09-05を複数解析で確認。
- **パチスロ未来日記**（EXCITE / ニューギン系） — 2016-09-05をK-Navi/解析で確認。

同日全メーカー監査は未完了。候補を上記2機だけで打ち切らず、当時導入一覧・メーカー別一覧・業界記事を横断して追加漏れを確認してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1005を再取得。
2. **1005件 / 2016-09-05群OPEN → パチスロ ロストプラネット2（オリンピア）**を次の未処理機としてNo.1006へ収集。
3. 続いて **パチスロ未来日記**を処理候補とし、09/05同日全メーカー監査を実施。
4. 09/05群に追加漏れがなければCLOSED → 次の導入日境界へ進む。
5. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/据え置き/電断/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古DB・回顧資料を横断した後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### 08/22混入候補監査
- ALL7 2016年8月一覧: https://www.all7.jp/plans/index/2016/08
- HAZUSE CR仄暗い水の底からFPMZ: https://hazuse.com/machine/pachinko/6P0485/
- ちょんぼりすた CR鉄拳2: https://chonborista.com/pachinko/sankyo/21645/
- P-Summa CRさくらももこ劇場ミラくるずきんちゃん: https://psumma.jp/pachinko/24054/

### No.1005 パチスロBLOOD+ 二人の女王
- HAZUSE: https://hazuse.com/machine/pachislot/6S0606/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S0606/genre/207/
- 一撃: https://1geki.jp/slot/s_bloodplus2/
- 一撃 ART概要: https://1geki.jp/slot/s_bloodplus2/81/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_bloodplus2/3/
- すろぱちくえすと: https://www.slopachi-quest.com/blood-two-queens/
- pachislo-data: https://pachislo-data.com/taiyoelec/26437
- K-Navi: https://p-kn.com/slot/2565/

### 次候補確認
- ロストプラネット2: https://pachislo-data.com/olympia/26459
- パチスロ未来日記: https://p-kn.com/slot/2561/
